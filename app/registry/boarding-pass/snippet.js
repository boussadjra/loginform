// Demo: checks the passenger in and shows the "link sent" state. Replace the timeout with your auth call.
{
  const root = document.querySelector('[data-boarding]')
  const form = root?.querySelector('[data-boarding-form]')
  const sent = root?.querySelector('[data-boarding-sent]')
  if (form && sent) {
    const button = form.querySelector('button[type="submit"]')
    const stamp = root.querySelector('[data-boarding-stamp]')
    const label = button.textContent

    form.addEventListener('submit', (event) => {
      event.preventDefault()
      button.disabled = true
      button.textContent = 'Checking in…'
      setTimeout(() => { // Replace with your auth call
        sent.querySelector('[data-boarding-address]').textContent = form.email.value.trim()
        button.disabled = false
        button.textContent = label
        form.hidden = true
        sent.hidden = false
        if (stamp) stamp.hidden = false
      }, 1000)
    })

    sent.querySelector('[data-boarding-reset]')?.addEventListener('click', () => {
      sent.hidden = true
      form.hidden = false
      if (stamp) stamp.hidden = true
      form.email.focus()
    })
  }
}
