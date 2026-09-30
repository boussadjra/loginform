// Demo cross-device ceremony: waiting for the phone → approved.
// Replace the timers with navigator.credentials.get({ publicKey: options }); the browser shows its own
// hybrid (caBLE) QR code when the user picks "Use a phone or tablet".
{
  document.querySelectorAll('[data-handoff]').forEach((root) => {
    const form = root.querySelector('[data-passkey-form]')
    const label = root.querySelector('[data-label]')
    const status = root.querySelector('[data-status-text]')
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
      set('waiting', 'Waiting for your device…', 'Waiting for your phone…')
      setTimeout(() => set('success', 'Signed in', 'Approved on iPhone'), 2600)
      setTimeout(() => {
        set('idle', idle[0], idle[1])
        if (button) button.disabled = false
      }, 5200)
    })
  })
}
