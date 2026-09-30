// Demo: "posts" the magic link, then franks the envelope. Replace the timeout with your auth call.
{
  const root = document.querySelector('[data-postmark]')
  const form = root?.querySelector('[data-postmark-form]')
  const sent = root?.querySelector('[data-postmark-sent]')
  if (form && sent) {
    const button = form.querySelector('button[type="submit"]')
    const address = sent.querySelector('[data-postmark-address]')
    const date = root.querySelector('[data-postmark-date]')
    if (date) date.textContent = ((d) => `${String(d.getDate()).padStart(2, '0')} ${d.toLocaleString('en', { month: 'short' }).toUpperCase()} ${String(d.getFullYear()).slice(2)}`)(new Date())

    form.addEventListener('submit', (event) => {
      event.preventDefault()
      const email = form.email.value.trim()
      button.disabled = true
      button.textContent = 'Posting…'
      setTimeout(() => { // Replace with your auth call
        if (address) address.textContent = email
        form.hidden = true
        sent.hidden = false
        button.disabled = false
        button.textContent = 'Seal & send'
      }, 1100)
    })

    sent.querySelector('[data-postmark-reset]')?.addEventListener('click', () => {
      sent.hidden = true
      form.hidden = false
      form.email.focus()
    })
  }
}
