// Demo handler: shows a pending state on submit. Replace the timeout with your auth call.
(() => {
  document.querySelectorAll('[data-auth-form]').forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault()
      const button = form.querySelector('button[type="submit"]')
      const label = button.innerHTML
      button.disabled = true
      button.textContent = 'Planting…'
      setTimeout(() => {
        button.disabled = false
        button.innerHTML = label
      }, 1200)
    })
  })
})()
