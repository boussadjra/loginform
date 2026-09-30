// Demo: swaps to the "check your inbox" state and runs a resend countdown. Replace the timeouts with your auth call.
{
  const root = document.querySelector('[data-inbox]')
  const form = root?.querySelector('[data-inbox-form]')
  const sent = root?.querySelector('[data-inbox-sent]')
  if (form && sent) {
    const button = form.querySelector('button[type="submit"]')
    const label = form.querySelector('[data-inbox-label]')
    const resend = sent.querySelector('[data-inbox-resend]')
    let timer

    const countdown = (seconds) => {
      clearInterval(timer)
      resend.disabled = true
      const tick = () => {
        resend.textContent = `Resend in 0:${String(seconds).padStart(2, '0')}`
        if (seconds-- <= 0) {
          clearInterval(timer)
          resend.disabled = false
          resend.textContent = 'Resend email'
        }
      }
      tick()
      timer = setInterval(tick, 1000)
    }

    const show = (el, hide) => {
      hide.hidden = true
      el.hidden = false
      el.classList.add('opacity-0', 'translate-y-2')
      requestAnimationFrame(() => requestAnimationFrame(() => el.classList.remove('opacity-0', 'translate-y-2')))
    }

    form.addEventListener('submit', (event) => {
      event.preventDefault()
      button.disabled = true
      label.textContent = 'Sending link…'
      setTimeout(() => { // Replace with your auth call
        sent.querySelector('[data-inbox-address]').textContent = form.email.value.trim()
        button.disabled = false
        label.textContent = 'Email me a sign-in link'
        show(sent, form)
        countdown(30)
      }, 900)
    })

    resend?.addEventListener('click', () => countdown(30)) // Replace with your resend call
    sent.querySelector('[data-inbox-back]')?.addEventListener('click', () => {
      clearInterval(timer)
      show(form, sent)
      form.email.focus()
    })
  }
}
