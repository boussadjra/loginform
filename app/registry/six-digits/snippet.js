// Six-box OTP: auto-advance, backspace to previous box, paste a full code, resend countdown.
(() => {
  const form = document.querySelector('[data-otp="six-digits"]')
  if (!form) return
  const boxes = [...form.querySelectorAll('[data-otp-box]')]
  const resend = form.querySelector('[data-otp-resend]')
  const submit = form.querySelector('[data-otp-submit]')

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

  let timer
  const startCountdown = (seconds = 30) => {
    if (!resend) return
    resend.disabled = true
    clearInterval(timer)
    const tick = () => {
      if (seconds <= 0) {
        clearInterval(timer)
        resend.disabled = false
        resend.textContent = 'Resend code'
        return
      }
      resend.innerHTML = 'Resend in <span class="tabular-nums">0:' + String(seconds).padStart(2, '0') + '</span>'
      seconds--
    }
    tick()
    timer = setInterval(tick, 1000)
  }
  resend?.addEventListener('click', () => startCountdown()) // Replace with your "resend code" call
  startCountdown()

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const code = boxes.map((b) => b.value).join('')
    if (code.length < boxes.length) return boxes.find((b) => !b.value)?.focus()
    const label = submit.textContent
    submit.disabled = true
    submit.textContent = 'Verifying…'
    // Replace with your auth call, e.g. await verifyCode(code)
    setTimeout(() => { submit.disabled = false; submit.textContent = label }, 1200)
  })
})()
