// Demo ceremony: animates the ridges, then shows success.
// Replace the timers with navigator.credentials.get({ publicKey: options }) from your server.
{
  document.querySelectorAll('[data-fingerprint]').forEach((root) => {
    const form = root.querySelector('[data-passkey-form]')
    const ridges = [...root.querySelectorAll('[data-ridge]')]
    const status = root.querySelector('[data-status]')
    if (!form) return
    form.addEventListener('submit', (event) => {
      event.preventDefault()
      const button = form.querySelector('button[type="submit"]')
      if (button) button.disabled = true
      root.dataset.state = 'scanning'
      if (status) status.textContent = 'Hold still while your device checks your fingerprint.'
      ridges.forEach((ridge, i) => setTimeout(() => ridge.setAttribute('data-lit', ''), 200 + i * 200))
      setTimeout(() => {
        root.dataset.state = 'success'
        if (status) status.textContent = 'Passkey verified. Redirecting to your vault…'
        setTimeout(() => {
          root.dataset.state = 'idle'
          ridges.forEach((ridge) => ridge.removeAttribute('data-lit'))
          if (status) status.textContent = 'Use your fingerprint or device passkey. No password required.'
          if (button) button.disabled = false
        }, 2600)
      }, 2600)
    })
  })
}
