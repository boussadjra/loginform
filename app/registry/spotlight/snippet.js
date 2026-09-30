// Demo: swaps the pill for a "link sent" state. Replace the timeout with your auth call.
{
  const root = document.querySelector('[data-spotlight]')
  const form = root?.querySelector('[data-spotlight-form]')
  const sent = root?.querySelector('[data-spotlight-sent]')
  if (form && sent) {
    const button = form.querySelector('button[type="submit"]')
    form.addEventListener('submit', (event) => {
      event.preventDefault()
      button.disabled = true
      button.classList.add('animate-pulse')
      setTimeout(() => { // Replace with your auth call
        sent.querySelector('[data-spotlight-address]').textContent = form.email.value.trim()
        button.disabled = false
        button.classList.remove('animate-pulse')
        form.hidden = true
        sent.hidden = false
      }, 900)
    })
    sent.querySelector('[data-spotlight-reset]')?.addEventListener('click', () => {
      sent.hidden = true
      form.hidden = false
      form.email.focus()
    })
  }
}
