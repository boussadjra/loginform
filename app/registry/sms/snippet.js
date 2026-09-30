// SMS OTP: auto-advance, backspace to previous, paste a full code, and tap the code in the bubble to fill it.
(() => {
  const root = document.querySelector('[data-otp="sms"]')
  if (!root) return
  const boxes = [...root.querySelectorAll('[data-otp-box]')]
  const submit = root.querySelector('[data-otp-submit]')

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

  root.closest('section')?.querySelector('[data-sms-fill]')?.addEventListener('click', (e) => {
    spread(0, e.currentTarget.dataset.smsFill)
  })

  root.addEventListener('submit', (e) => {
    e.preventDefault()
    const code = boxes.map((b) => b.value).join('')
    if (code.length < boxes.length) return boxes.find((b) => !b.value)?.focus()
    submit.disabled = true
    submit.textContent = 'Checking…'
    // Replace with your auth call, e.g. await verifyCode(code)
    setTimeout(() => { submit.disabled = false; submit.textContent = 'Continue' }, 1200)
  })
})()
