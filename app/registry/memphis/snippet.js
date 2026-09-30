// Demo handler: bouncy pending state on submit. Replace the timeout with your auth call.
(() => {
  document.querySelectorAll('[data-auth-form]').forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault()
      const button = form.querySelector('button[type="submit"]')
      const label = button.innerHTML
      button.disabled = true
      button.classList.add('animate-bounce')
      button.textContent = 'Wiggling…'
      setTimeout(() => {
        button.disabled = false
        button.classList.remove('animate-bounce')
        button.innerHTML = label
      }, 1400)
    })
  })
})()
