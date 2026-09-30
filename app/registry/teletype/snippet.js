// Demo: "transmits" the request and types out a telegram reply. Replace the timeout with your auth call.
{
  const root = document.querySelector('[data-teletype]')
  const form = root?.querySelector('[data-teletype-form]')
  const sent = root?.querySelector('[data-teletype-sent]')
  const tape = sent?.querySelector('[data-teletype-tape]')
  if (form && sent && tape) {
    const button = form.querySelector('button[type="submit"]')
    let typing

    form.addEventListener('submit', (event) => {
      event.preventDefault()
      const email = form.email.value.trim()
      button.disabled = true
      button.textContent = 'Sending…'
      setTimeout(() => { // Replace with your auth call
        button.disabled = false
        button.innerHTML = 'Transmit &#9656;'
        form.hidden = true
        sent.hidden = false
        const message = `Link dispatched to ${email} stop check your inbox stop expires in 15 minutes stop end`
        let i = 0
        tape.textContent = ''
        clearInterval(typing)
        typing = setInterval(() => {
          tape.textContent = message.slice(0, ++i)
          if (i >= message.length) clearInterval(typing)
        }, 28)
      }, 900)
    })

    sent.querySelector('[data-teletype-reset]')?.addEventListener('click', () => {
      clearInterval(typing)
      sent.hidden = true
      form.hidden = false
      form.email.focus()
    })
  }
}
