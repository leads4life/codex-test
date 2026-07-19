const formStatus = async (form, status) => {
  form.addEventListener('submit', async (event) => {
    event.preventDefault(); status.textContent = 'Sending…'; status.className = 'mt-4 text-sm text-ink/60';
    try { const response = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } }); const result = await response.json(); if (!response.ok || !result.ok) throw new Error(result.message || 'Something went wrong.'); form.reset(); status.textContent = result.message; status.className = 'mt-4 text-sm font-medium text-ink'; }
    catch (error) { status.textContent = error.message || 'Unable to send your request. Please call us instead.'; status.className = 'mt-4 text-sm font-medium text-red-700'; }
  });
};
const days = document.querySelector('#days'), slots = document.querySelector('#slots'), dateInput = document.querySelector('#appointment-date'), timeInput = document.querySelector('#appointment-time');
if (days && slots) {
  const options = [...Array(7)].map((_, i) => { const date = new Date(); date.setDate(date.getDate() + i + 1); while ([0, 6].includes(date.getDay())) date.setDate(date.getDate() + 1); return date; });
  const selectDate = (date, button) => { [...days.children].forEach(x => x.classList.remove('bg-ink', 'text-white')); button.classList.add('bg-ink', 'text-white'); dateInput.value = date.toISOString().slice(0, 10); slots.innerHTML = ''; ['09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00'].forEach(time => { const slot = document.createElement('button'); slot.type = 'button'; slot.className = 'slot rounded-full border border-ink/15 px-4 py-2 text-sm hover:border-ink'; slot.textContent = time.replace(':00', ':00 ' + (+time.slice(0, 2) < 12 ? 'AM' : 'PM')); slot.setAttribute('aria-pressed', 'false'); slot.onclick = () => { [...slots.children].forEach(x => x.setAttribute('aria-pressed', 'false')); slot.setAttribute('aria-pressed', 'true'); timeInput.value = time; }; slots.append(slot); }); };
  options.forEach((date, index) => { const button = document.createElement('button'); button.type = 'button'; button.className = 'rounded-xl border border-ink/10 bg-paper p-2 text-center text-xs hover:border-ink'; button.innerHTML = `<b class="block">${date.toLocaleDateString('en-US',{weekday:'short'})}</b><span>${date.getDate()}</span>`; button.onclick = () => selectDate(date, button); days.append(button); if (!index) selectDate(date, button); });
}
formStatus(document.querySelector('#appointment-form'), document.querySelector('#appointment-status')); formStatus(document.querySelector('#contact-form'), document.querySelector('#contact-status'));
