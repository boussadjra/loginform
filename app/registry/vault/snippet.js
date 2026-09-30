// Vault wheels: auto-advance, backspace to previous, paste a full code; ghost digits show the wheel's neighbours.
(() => {
  const form = document.querySelector('[data-otp="vault"]')
  if (!form) return
  const boxes = [...form.querySelectorAll('[data-otp-box]')]
  const submit = form.querySelector('[data-otp-submit]')

  const turn = (box) => {
    const wheel = box.closest('[data-wheel]')
    const d = Number(box.value || 0)
    wheel.querySelector('[data-prev]').textContent = (d + 9) % 10
    wheel.querySelector('[data-next]').textContent = (d + 1) % 10
  }
  const spread = (from, digits) => {
    [...digits].slice(0, boxes.length - from).forEach((d, k) => { boxes[from + k].value = d; turn(boxes[from + k]) })
    boxes[Math.min(from + digits.length, boxes.length - 1)].focus()
  }

  boxes.forEach((box, i) => {
    box.addEventListener('focus', () => box.select())
    box.addEventListener('input', () => {
      const digits = box.value.replace(/\D/g, '')
      if (digits.length > 1) return spread(i, digits)
      box.value = digits
      turn(box)
      if (digits && boxes[i + 1]) boxes[i + 1].focus()
    })
    box.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace' && !box.value && boxes[i - 1]) {
        e.preventDefault()
        boxes[i - 1].value = ''
        turn(boxes[i - 1])
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
    submit.textContent = 'TURNING TUMBLERS…'
    // Replace with your auth call, e.g. await verifyCode(code)
    setTimeout(() => { submit.disabled = false; submit.textContent = 'UNLOCK VAULT' }, 1400)
  })
})()
