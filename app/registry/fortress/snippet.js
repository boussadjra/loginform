// Live password strength: ticks the rules and sets data-level (0-4) on the meter.
(() => {
  const form = document.querySelector('[data-fortress-form]')
  if (!form) return
  const input = form.querySelector('[data-fortress-password]')
  const meter = form.querySelector('[data-fortress-meter]')
  const label = form.querySelector('[data-fortress-label]')
  const toggle = form.querySelector('[data-fortress-toggle]')
  const submit = form.querySelector('button[type="submit"]')
  const words = ['Enter a password', 'Weak', 'Fair', 'Good', 'Strong']
  const rules = {
    length: v => v.length >= 12,
    case: v => /[a-z]/.test(v) && /[A-Z]/.test(v),
    number: v => /\d/.test(v),
    symbol: v => /[^A-Za-z0-9]/.test(v),
  }
  let level = 0

  const update = () => {
    const value = input.value
    let passed = 0
    for (const [name, test] of Object.entries(rules)) {
      const ok = test(value)
      passed += ok
      const item = form.querySelector(`[data-rule="${name}"]`)
      if (item) item.dataset.ok = String(ok)
    }
    level = value ? Math.max(1, passed) : 0
    meter.dataset.level = String(level)
    label.textContent = words[level]
  }

  input?.addEventListener('input', update)
  toggle?.addEventListener('click', () => {
    const show = input.type === 'password'
    input.type = show ? 'text' : 'password'
    toggle.textContent = show ? 'Hide' : 'Show'
  })

  form.addEventListener('submit', (event) => {
    event.preventDefault()
    if (level < 4) {
      input.focus()
      label.textContent = 'Meet all four rules first'
      return
    }
    const text = form.querySelector('[data-fortress-submit]')
    submit.disabled = true
    text.textContent = 'Encrypting vault…'
    // Replace with your auth call.
    setTimeout(() => {
      submit.disabled = false
      text.textContent = 'Create secure account'
    }, 1400)
  })
})()
