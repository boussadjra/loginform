// Demo ceremony: the orbits speed up while "scanning", then the core turns into a check.
// Replace the timers with navigator.credentials.get({ publicKey: options }) from your server.
{
  document.querySelectorAll('[data-orbit]').forEach((root) => {
    const form = root.querySelector('[data-passkey-form]')
    const label = root.querySelector('[data-label]')
    const status = root.querySelector('[data-status]')
    if (!form) return
    const idle = [label && label.textContent, status && status.textContent]
    const set = (state, labelText, statusText) => {
      root.dataset.state = state
      if (label) label.textContent = labelText
      if (status) status.textContent = statusText
    }
    form.addEventListener('submit', (event) => {
      event.preventDefault()
      const button = form.querySelector('button[type="submit"]')
      if (button) button.disabled = true
      set('scanning', 'Looking for your devices…', 'Confirm on whichever device prompts you.')
      setTimeout(() => set('success', 'Signed in', 'Passkey accepted. Welcome back to Halcyon.'), 2400)
      setTimeout(() => {
        set('idle', idle[0], idle[1])
        if (button) button.disabled = false
      }, 5000)
    })
  })
}
