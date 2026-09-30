// Demo Face ID ceremony: idle → scanning → success.
// Replace the timers with navigator.credentials.get({ publicKey: options }) from your server.
{
  document.querySelectorAll('[data-face-frame]').forEach((root) => {
    const form = root.querySelector('[data-passkey-form]')
    const status = root.querySelector('[data-status]')
    if (!form) return
    const idleText = status ? status.textContent : ''
    const say = (text) => { if (status) status.textContent = text }
    form.addEventListener('submit', (event) => {
      event.preventDefault()
      const button = form.querySelector('button[type="submit"]')
      if (button) button.disabled = true
      root.dataset.state = 'scanning'
      say('Hold your device at eye level…')
      setTimeout(() => {
        root.dataset.state = 'success'
        say('Face ID recognised. Opening Lumen…')
        setTimeout(() => {
          root.dataset.state = 'idle'
          say(idleText)
          if (button) button.disabled = false
        }, 2400)
      }, 2000)
    })
  })
}
