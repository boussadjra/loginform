// Phone keypad OTP: keys fill a hidden-caret input, dots mirror its length, auto-submits at 6 digits.
(() => {
  const form = document.querySelector('[data-otp="keypad"]')
  if (!form) return
  const input = form.querySelector('[data-keypad-input]')
  const dots = [...form.querySelectorAll('[data-keypad-dot]')]
  const hint = form.querySelector('[data-keypad-hint]')
  const hintText = hint?.textContent
  const max = dots.length
  let busy = false

  const render = () => {
    input.value = input.value.replace(/\D/g, '').slice(0, max)
    dots.forEach((dot, i) => {
      const on = i < input.value.length
      dot.classList.toggle('bg-[#a78bfa]', on)
      dot.classList.toggle('border-[#a78bfa]', on)
      dot.classList.toggle('scale-110', on)
    })
    if (input.value.length === max) form.requestSubmit()
  }

  form.querySelectorAll('[data-key]').forEach((key) => {
    key.addEventListener('click', () => {
      if (busy) return
      const k = key.dataset.key
      input.value = k === 'del' ? input.value.slice(0, -1) : input.value + k
      render()
    })
  })
  input.addEventListener('input', render)
  document.addEventListener('keydown', (e) => {
    if (busy || e.target === input || !form.isConnected) return
    if (/^\d$/.test(e.key) && form.contains(document.activeElement)) { input.value += e.key; render() }
    if (e.key === 'Backspace' && form.contains(document.activeElement)) { input.value = input.value.slice(0, -1); render() }
  })

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (input.value.length < max) return input.focus()
    busy = true
    if (hint) hint.textContent = 'Verifying…'
    dots.forEach((d) => d.classList.add('animate-pulse'))
    // Replace with your auth call, e.g. await verifyCode(input.value)
    setTimeout(() => {
      busy = false
      if (hint) hint.textContent = hintText
      dots.forEach((d) => d.classList.remove('animate-pulse'))
      input.value = ''
      render()
    }, 1400)
  })
})()
