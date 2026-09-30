// Demo handler: shows a pending state on submit. Replace the timeout with your auth call.
{
  const pending = (button, text) => {
    const label = button.querySelector('span') ?? button
    const original = label.textContent
    button.disabled = true
    label.textContent = text
    setTimeout(() => {
      button.disabled = false
      label.textContent = original
    }, 1200)
  }

  document.querySelectorAll('[data-auth-form]').forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault()
      const button = form.querySelector('button[type="submit"]')
      if (button) pending(button, 'Sending link…')
    })
  })
}
