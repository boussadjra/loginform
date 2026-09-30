// Password visibility toggle + demo pending state. Replace the timeout with your auth call.
{
  document.querySelectorAll('[data-toggle-password]').forEach((toggle) => {
    const input = document.getElementById(toggle.getAttribute('aria-controls'))
    if (!input) return
    toggle.addEventListener('click', () => {
      const show = input.type === 'password'
      input.type = show ? 'text' : 'password'
      toggle.textContent = show ? 'Hide' : 'Show'
      toggle.setAttribute('aria-pressed', String(show))
    })
  })

  document.querySelectorAll('[data-auth-form]').forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault()
      const button = form.querySelector('button[type="submit"]')
      const label = button?.querySelector('[data-label]') ?? button
      if (!button || !label) return
      const text = label.textContent
      button.disabled = true
      label.textContent = 'Checking…'
      setTimeout(() => { // Replace with your auth call
        label.textContent = 'You’re in!'
        setTimeout(() => {
          button.disabled = false
          label.textContent = text
        }, 1200)
      }, 1200)
    })
  })
}
