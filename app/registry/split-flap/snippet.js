// Split-flap OTP: each digit "flips" through a few random numbers before landing.
// Also: auto-advance, backspace to previous tile, paste a full code.
(() => {
  const form = document.querySelector('[data-otp="split-flap"]')
  if (!form) return
  const boxes = [...form.querySelectorAll('[data-otp-box]')]
  const submit = form.querySelector('[data-otp-submit]')

  const flip = (box, digit) => {
    clearInterval(box._flap)
    let spins = 5
    box._flap = setInterval(() => {
      box.value = spins-- > 0 ? String(Math.floor(Math.random() * 10)) : digit
      if (spins < 0) clearInterval(box._flap)
    }, 40)
  }
  const spread = (from, digits) => {
    [...digits].slice(0, boxes.length - from).forEach((d, k) => flip(boxes[from + k], d))
    boxes[Math.min(from + digits.length, boxes.length - 1)].focus()
  }

  boxes.forEach((box, i) => {
    box.addEventListener('focus', () => box.select())
    box.addEventListener('input', () => {
      const digits = box.value.replace(/\D/g, '')
      if (digits.length > 1) return spread(i, digits)
      box.value = digits
      if (!digits) return
      flip(box, digits)
      if (boxes[i + 1]) boxes[i + 1].focus()
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
    submit.textContent = 'CHECKING…'
    // Replace with your auth call, e.g. await verifyCode(code)
    setTimeout(() => { submit.disabled = false; submit.textContent = 'CHECK IN →' }, 1400)
  })
})()
