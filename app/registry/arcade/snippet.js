// Arcade OTP: auto-advance, backspace to previous box, paste a full code, and a 30s TIME countdown.
(() => {
  const form = document.querySelector('[data-otp="arcade"]')
  if (!form) return
  const screen = form.parentElement
  const boxes = [...form.querySelectorAll('[data-otp-box]')]
  const submit = form.querySelector('[data-otp-submit]')
  const time = screen.querySelector('[data-arcade-time]')

  let left = 30
  let timer
  const countdown = () => {
    left = 30
    clearInterval(timer)
    timer = setInterval(() => {
      left = Math.max(0, left - 1)
      if (time) time.textContent = left ? String(left).padStart(2, '0') : 'OVER'
      if (!left) clearInterval(timer)
    }, 1000)
  }
  countdown()
  form.querySelector('[data-arcade-resend]')?.addEventListener('click', () => {
    if (time) time.textContent = '30'
    countdown() // Replace with your "resend code" call
  })

  const spread = (from, digits) => {
    [...digits].slice(0, boxes.length - from).forEach((d, k) => { boxes[from + k].value = d })
    boxes[Math.min(from + digits.length, boxes.length - 1)].focus()
  }
  boxes.forEach((box, i) => {
    box.addEventListener('focus', () => box.select())
    box.addEventListener('input', () => {
      const digits = box.value.replace(/\D/g, '')
      if (digits.length > 1) return spread(i, digits)
      box.value = digits
      if (digits && boxes[i + 1]) boxes[i + 1].focus()
    })
    box.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace' && !box.value && boxes[i - 1]) {
        e.preventDefault()
        boxes[i - 1].value = ''
        boxes[i - 1].focus()
      }
      if (e.key === 'ArrowLeft' && boxes[i - 1]) boxes[i - 1].focus()
      if (e.key === 'ArrowRight' && boxes[i + 1]) boxes[i + 1].focus()
    })
    box.addEventListener('paste', (e) => {
      const digits = (e.clipboardData?.getData('text') || '').replace(/\D/g, '')
      if (!digits) return
      e.preventDefault()
      spread(i, digits)
    })
  })

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const code = boxes.map((b) => b.value).join('')
    if (code.length < boxes.length) return boxes.find((b) => !b.value)?.focus()
    submit.disabled = true
    submit.textContent = 'LOADING...'
    // Replace with your auth call, e.g. await verifyCode(code)
    setTimeout(() => { submit.disabled = false; submit.textContent = 'PRESS START' }, 1400)
  })
})()
