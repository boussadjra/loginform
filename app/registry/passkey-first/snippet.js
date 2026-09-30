// Demo handlers: a simulated passkey ceremony plus the password fallback.
{
  document.querySelectorAll('[data-passkey-first]').forEach((root) => {
    const button = root.querySelector('[data-passkey-button]')
    const label = root.querySelector('[data-label]')
    const status = root.querySelector('[data-status]')
    const idle = [label && label.textContent, status && status.textContent]
    const set = (state, labelText, statusText) => {
      root.dataset.state = state
      if (label) label.textContent = labelText
      if (status) status.textContent = statusText
    }
    button?.addEventListener('click', () => {
      // Replace the timers with navigator.credentials.get({ publicKey: options }) from your server.
      button.disabled = true
      set('pending', 'Waiting for your passkey…', 'Follow the prompt from your browser')
      setTimeout(() => set('success', 'Signed in', 'Redirecting to your dashboard…'), 1800)
      setTimeout(() => { set('idle', idle[0], idle[1]); button.disabled = false }, 4000)
    })
    root.querySelector('[data-auth-form]')?.addEventListener('submit', (event) => {
      event.preventDefault()
      const submit = event.currentTarget.querySelector('button[type="submit"]')
      const text = submit.textContent
      submit.disabled = true
      submit.textContent = 'Signing in…' // Replace with your auth call
      setTimeout(() => { submit.disabled = false; submit.textContent = text }, 1200)
    })
  })
}
