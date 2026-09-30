// Demo behaviour: password toggle, inline validation and a pending state. Replace the timeout with your auth call.
document.querySelectorAll('[data-auth-form]').forEach((form) => {
  const error = form.querySelector('[data-auth-error]')
  const toggle = form.querySelector('[data-toggle-password]')
  const password = form.querySelector('input[name="password"]')
  const button = form.querySelector('button[type="submit"]')
  const label = button.querySelector('[data-label]')

  toggle?.addEventListener('click', () => {
    const show = password.type === 'password'
    password.type = show ? 'text' : 'password'
    toggle.textContent = show ? 'Hide' : 'Show'
    toggle.setAttribute('aria-pressed', String(show))
  })

  function showError(message) {
    error.textContent = message
    error.classList.toggle('hidden', !message)
  }

  form.querySelectorAll('input').forEach((input) => {
    input.addEventListener('input', () => {
      input.removeAttribute('aria-invalid')
      showError('')
    })
  })

  form.addEventListener('submit', (event) => {
    event.preventDefault()
    const invalid = [...form.querySelectorAll('input[required]')].filter(input => !input.checkValidity())
    invalid.forEach(input => input.setAttribute('aria-invalid', 'true'))
    if (invalid.length) {
      showError(invalid[0].name === 'password' && invalid[0].value ? 'Passwords are at least 6 characters.' : 'Please fill in your user name and password.')
      invalid[0].focus()
      return
    }

    button.disabled = true
    label.textContent = 'Logging in…'
    setTimeout(() => {
      label.textContent = 'Welcome back ✓'
      setTimeout(() => {
        button.disabled = false
        label.textContent = 'Login'
      }, 1400)
    }, 1200)
  })
})
