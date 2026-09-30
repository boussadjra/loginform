// TOTP prompt: 30s countdown ring synced to the clock, plus auto-advance / backspace / paste across six boxes.
(() => {
  const form = document.querySelector('[data-otp="authenticator"]')
  if (!form) return
  const card = form.parentElement
  const boxes = [...form.querySelectorAll('[data-otp-box]')]
  const submit = form.querySelector('[data-otp-submit]')
  const ring = card.querySelector('[data-totp-ring]')
  const secs = card.querySelector('[data-totp-seconds]')

  if (ring) {
    const circumference = 2 * Math.PI * ring.r.baseVal.value
    const tick = () => {
      const remaining = 30 - ((Date.now() / 1000) % 30)
      ring.style.strokeDashoffset = String(circumference * (1 - remaining / 30))
      ring.style.stroke = remaining < 6 ? '#fbbf24' : '#34d399'
      if (secs) secs.textContent = Math.ceil(remaining)
    }
    tick()
    setInterval(tick, 100)
  }

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
    submit.textContent = 'Verifying…'
    // Replace with your auth call, e.g. await verifyTotp(code)
    setTimeout(() => { submit.disabled = false; submit.textContent = 'Verify and continue' }, 1200)
  })
})()
