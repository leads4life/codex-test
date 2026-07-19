# Luma Dental

A responsive Tailwind-powered dentist website with an appointment-request calendar, a contact form, and a small PHP form-capture backend.

## Run locally

Serve the project through PHP so the form endpoint works:

```bash
php -S localhost:8000
```

Open [http://localhost:8000/site/](http://localhost:8000/site/). Submissions are written to `api/data/submissions.json` for local development. That directory is ignored by Git; in production, configure a private writable directory outside the web root and replace local JSON storage with an encrypted database or approved patient-intake system.

## Deployment

The `site/` directory is static and can be published to GitHub Pages as a visual preview, but **GitHub Pages cannot execute PHP**. Deploy the full project to a PHP-capable host (or point the forms to a separately hosted secure API) for functional form handling. Do not collect protected health information through this basic form implementation.
