// Demo: sends the link and swaps the giant word to "Sent.". Replace the timeout with your auth call.
{
  const root = document.querySelector('[data-monolith]')
  const form = root?.querySelector('[data-monolith-form]')
  const sent = root?.querySelector('[data-monolith-sent]')
  const word = root?.querySelector('[data-monolith-word]')
  if (form && sent && word) {
    const button = form.querySelector('button[type="submit"]')
    const label = form.querySelector('[data-monolith-label]')
    const setWord = (text) => { word.firstChild.textContent = text }

    form.addEventListener('submit', (event) => {
      event.preventDefault()
      button.disabled = true
      label.textContent = 'Sending…'
      setTimeout(() => { // Replace with your auth call
        sent.querySelector('[data-monolith-address]').textContent = form.email.value.trim()
        button.disabled = false
        label.textContent = 'Send link'
        setWord('Sent')
        form.hidden = true
        sent.hidden = false
      }, 900)
    })

    sent.querySelector('[data-monolith-reset]')?.addEventListener('click', () => {
      setWord('Enter')
      sent.hidden = true
      form.hidden = false
      form.email.focus()
    })
  }
}
