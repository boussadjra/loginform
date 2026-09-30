// Demo: sends the magic link and shows the "check your email" state. Replace the timeouts with your auth call.
{
  const root = document.querySelector('[data-mesh]')
  const form = root?.querySelector('[data-mesh-form]')
  const sent = root?.querySelector('[data-mesh-sent]')
  if (form && sent) {
    const button = form.querySelector('button[type="submit"]')
    const resend = sent.querySelector('[data-mesh-resend]')

    form.addEventListener('submit', (event) => {
      event.preventDefault()
      button.disabled = true
      button.textContent = 'Sending…'
      setTimeout(() => { // Replace with your auth call
        sent.querySelector('[data-mesh-address]').textContent = form.email.value.trim()
        button.disabled = false
        button.textContent = 'Send magic link'
        form.hidden = true
        sent.hidden = false
      }, 900)
    })

    resend?.addEventListener('click', () => { // Replace with your resend call
      resend.disabled = true
      resend.textContent = 'Sent again'
      setTimeout(() => { resend.disabled = false; resend.textContent = 'Resend link' }, 3000)
    })

    sent.querySelector('[data-mesh-back]')?.addEventListener('click', () => {
      sent.hidden = true
      form.hidden = false
      form.email.focus()
    })
  }
}
