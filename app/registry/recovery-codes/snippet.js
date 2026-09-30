// Formats the code as xxxx-xxxx and demos verification. Replace the timeout with your auth call.
{
  const form = document.querySelector('[data-rc-form]')
  const input = form?.elements.code
  const button = form?.querySelector('button[type="submit"]')
  const status = form?.querySelector('[data-rc-status]')
  if (form && input && button) {
    input.addEventListener('input', () => {
      const raw = input.value.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 8)
      input.value = raw.length > 4 ? `${raw.slice(0, 4)}-${raw.slice(4)}` : raw
      button.disabled = raw.length !== 8
    })
    form.addEventListener('submit', (event) => {
      event.preventDefault()
      button.disabled = true
      button.textContent = 'Verifying…'
      if (status) status.textContent = ''
      setTimeout(() => {
        button.textContent = 'Verify recovery code'
        if (status) status.textContent = 'Code accepted. 9 backup codes remain — continue to set up 2FA.'
        input.value = ''
      }, 1200)
    })
  }
}
