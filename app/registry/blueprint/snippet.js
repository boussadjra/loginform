// Demo: pending + sent state for the reset request. Replace the timeout with your auth call.
{
  const form = document.querySelector('[data-bp-form]')
  const button = form?.querySelector('button[type="submit"]')
  const label = form?.querySelector('[data-bp-label]')
  if (form && button && label) {
    form.addEventListener('submit', (event) => {
      event.preventDefault()
      button.disabled = true
      label.textContent = 'TRANSMITTING…'
      setTimeout(() => {
        label.textContent = 'LINK SENT — CHECK INBOX'
        setTimeout(() => {
          button.disabled = false
          label.textContent = 'SEND RESET LINK'
        }, 2400)
      }, 1100)
    })
  }
}
