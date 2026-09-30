// Demo security-key ceremony: walks the step list, then shows success.
// Replace the timers with navigator.credentials.get({ publicKey: options }) from your server.
{
  document.querySelectorAll('[data-touch-key]').forEach((root) => {
    const form = root.querySelector('[data-passkey-form]')
    const steps = [...root.querySelectorAll('[data-step]')]
    const status = root.querySelector('[data-status]')
    const led = root.querySelector('[data-led]')
    if (!form) return
    const idleText = status ? status.textContent : ''
    const phases = [
      ['insert', 'Detecting key…', 'Waiting'],
      ['touch', 'Touch the gold contact now.', 'Touch'],
      ['success', 'Key verified. Signing you in to Anvil Cloud…', 'Verified'],
    ]
    const show = (index) => {
      const [state, text, ledText] = phases[index]
      root.dataset.state = state
      if (status) status.textContent = text
      if (led) led.textContent = ledText
      steps.forEach((step, i) => { step.dataset.state = i < index ? 'done' : i === index ? 'active' : '' })
      if (state === 'success') steps.forEach((step) => { step.dataset.state = 'done' })
    }
    form.addEventListener('submit', (event) => {
      event.preventDefault()
      const button = form.querySelector('button[type="submit"]')
      if (button) button.disabled = true
      phases.forEach((_, i) => setTimeout(() => show(i), i * 1500))
      setTimeout(() => {
        root.dataset.state = 'idle'
        steps.forEach((step) => { step.dataset.state = '' })
        if (status) status.textContent = idleText
        if (led) led.textContent = 'Standby'
        if (button) button.disabled = false
      }, 6000)
    })
  })
}
