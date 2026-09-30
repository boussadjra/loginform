// Demo: shows a pending state, then the "email sent" panel. Replace the timeout with your auth call.
{
  const form = document.querySelector('[data-lifebuoy-form]')
  const request = document.querySelector('[data-lifebuoy-request]')
  const sent = document.querySelector('[data-lifebuoy-sent]')
  if (form && request && sent) {
    const button = form.querySelector('button[type="submit"]')
    const label = button.textContent
    form.addEventListener('submit', (event) => {
      event.preventDefault()
      button.disabled = true
      button.textContent = 'Throwing a line…'
      setTimeout(() => {
        const address = sent.querySelector('[data-lifebuoy-address]')
        if (address) address.textContent = form.elements.email.value
        request.hidden = true
        sent.hidden = false
        button.disabled = false
        button.textContent = label
      }, 1100)
    })
    sent.querySelector('[data-lifebuoy-retry]')?.addEventListener('click', () => {
      sent.hidden = true
      request.hidden = false
      form.elements.email.focus()
    })
  }
}
