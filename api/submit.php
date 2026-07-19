<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('Cache-Control: no-store');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'message' => 'Method not allowed.']);
    exit;
}

function clean(string $value): string {
    return trim(preg_replace('/[\x00-\x1F\x7F]/u', '', $value) ?? '');
}

function respondError(string $message, int $status = 422): void {
    http_response_code($status);
    echo json_encode(['ok' => false, 'message' => $message]);
    exit;
}

$type = clean((string) ($_POST['type'] ?? ''));
$name = clean((string) ($_POST['name'] ?? ''));
$email = clean((string) ($_POST['email'] ?? ''));
$phone = clean((string) ($_POST['phone'] ?? ''));
$message = clean((string) ($_POST['message'] ?? ''));

if (!in_array($type, ['contact', 'appointment'], true)) respondError('Please choose a valid form.');
if (mb_strlen($name) < 2 || mb_strlen($name) > 100) respondError('Please enter your name.');
if (!filter_var($email, FILTER_VALIDATE_EMAIL) || mb_strlen($email) > 254) respondError('Please enter a valid email address.');
if ($phone !== '' && !preg_match('/^[0-9+().\-\s]{7,30}$/', $phone)) respondError('Please enter a valid phone number.');
if (mb_strlen($message) > 2000) respondError('Your message is too long.');

$record = [
    'id' => bin2hex(random_bytes(12)),
    'type' => $type,
    'name' => $name,
    'email' => $email,
    'phone' => $phone,
    'message' => $message,
    'created_at' => gmdate('c'),
];

if ($type === 'appointment') {
    $date = clean((string) ($_POST['date'] ?? ''));
    $time = clean((string) ($_POST['time'] ?? ''));
    $service = clean((string) ($_POST['service'] ?? ''));
    $allowedServices = ['New patient exam', 'Cleaning & prevention', 'Cosmetic consultation', 'Urgent care'];
    if (!preg_match('/^\d{4}-\d{2}-\d{2}$/', $date) || strtotime($date) < strtotime('today')) respondError('Please select a future appointment date.');
    if (!preg_match('/^(09:00|10:00|11:00|13:00|14:00|15:00|16:00)$/', $time)) respondError('Please select an available appointment time.');
    if (!in_array($service, $allowedServices, true)) respondError('Please choose a service.');
    $record += ['date' => $date, 'time' => $time, 'service' => $service];
}

// Store data outside the public web root in production. This directory must be writable by PHP.
$storage = __DIR__ . '/data';
if (!is_dir($storage) && !mkdir($storage, 0700, true) && !is_dir($storage)) respondError('Unable to save your request.', 500);
$file = $storage . '/submissions.json';
$handle = fopen($file, 'c+');
if (!$handle || !flock($handle, LOCK_EX)) respondError('Unable to save your request.', 500);
$contents = stream_get_contents($handle);
$submissions = $contents ? json_decode($contents, true) : [];
if (!is_array($submissions)) $submissions = [];
$submissions[] = $record;
rewind($handle);
ftruncate($handle, 0);
fwrite($handle, json_encode($submissions, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES));
fflush($handle);
flock($handle, LOCK_UN);
fclose($handle);

echo json_encode(['ok' => true, 'message' => $type === 'appointment' ? 'Your request is in. We will confirm your visit shortly.' : 'Thank you. Our team will be in touch shortly.']);
