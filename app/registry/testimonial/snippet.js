// Demo handler: shows a pending state on submit. Replace the timeout with your auth call.
(() => {
  document.querySelectorAll('[data-auth-form]').forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault()
      const button = form.querySelector('button[type="submit"]')
      const label = button.textContent
      button.disabled = true
      button.textContent = 'Creating account…'
      setTimeout(() => {
        button.disabled = false
        button.textContent = label
      }, 1200)
    })
  })
})()
