// Password visibility toggle + demo pending state. Replace the timeout with your auth call.
{
  document.querySelectorAll('[data-toggle-password]').forEach((toggle) => {
    const input = document.getElementById(toggle.getAttribute('aria-controls'))
    if (!input) return
    toggle.addEventListener('click', () => {
      const show = input.type === 'password'
      input.type = show ? 'text' : 'password'
      toggle.setAttribute('aria-pressed', String(show))
      toggle.setAttribute('aria-label', show ? 'Hide password' : 'Show password')
      if (toggle.dataset.show) toggle.textContent = show ? toggle.dataset.hide : toggle.dataset.show
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
      label.textContent = button.dataset.pending || 'Signing in…'
      setTimeout(() => { // Replace with your auth call
        label.textContent = button.dataset.done || 'Welcome back'
        setTimeout(() => {
          button.disabled = false
          label.textContent = text
        }, 1400)
      }, 1200)
    })
  })
}
