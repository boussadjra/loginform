// Live password requirements + show/hide toggles. Replace the timeout with your reset call.
{
  const form = document.querySelector('[data-np-form]')
  if (form) {
    const pw = form.elements.password
    const confirm = form.elements.confirm
    const submit = form.querySelector('button[type="submit"]')
    const status = form.querySelector('[data-np-status]')
    const bars = form.querySelectorAll('[data-np-bar]')
    const colors = ['#ef4444', '#f59e0b', '#84cc16', '#10b981']
    const tests = {
      length: v => v.length >= 12,
      number: v => /\d/.test(v),
      symbol: v => /[^A-Za-z0-9\s]/.test(v),
      match: v => v.length > 0 && v === confirm.value,
    }
    const update = () => {
      let passed = 0
      form.querySelectorAll('[data-np-rule]').forEach((li) => {
        const ok = tests[li.dataset.npRule]?.(pw.value) ?? false
        li.toggleAttribute('data-ok', ok)
        if (ok) passed++
      })
      bars.forEach((bar, i) => { bar.style.backgroundColor = pw.value && i < passed ? colors[passed - 1] : '' })
      submit.disabled = passed < 4
    }
    pw.addEventListener('input', update)
    confirm.addEventListener('input', update)

    form.querySelectorAll('[data-np-toggle]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const input = document.getElementById(btn.dataset.npToggle)
        if (!input) return
        const show = input.type === 'password'
        input.type = show ? 'text' : 'password'
        btn.setAttribute('aria-pressed', String(show))
        btn.setAttribute('aria-label', show ? 'Hide password' : 'Show password')
      })
    })

    form.addEventListener('submit', (event) => {
      event.preventDefault()
      submit.disabled = true
      submit.textContent = 'Updating…'
      setTimeout(() => {
        submit.textContent = 'Update password'
        status.textContent = 'Password updated. You can sign in now.'
        update()
      }, 1100)
    })
  }
}
