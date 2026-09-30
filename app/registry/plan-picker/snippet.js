// Keeps the button label in sync with the chosen plan and fakes a pending submit.
(() => {
  document.querySelectorAll('[data-plan-form]').forEach((form) => {
    const label = form.querySelector('[data-plan-label]')
    const button = form.querySelector('button[type="submit"]')
    form.addEventListener('change', (event) => {
      if (event.target.name === 'plan' && label) label.textContent = event.target.value
    })
    form.addEventListener('submit', (event) => {
      event.preventDefault()
      const text = button.innerHTML
      button.disabled = true
      button.textContent = 'Creating your account…'
      // Replace with your auth call.
      setTimeout(() => {
        button.disabled = false
        button.innerHTML = text
      }, 1200)
    })
  })
})()
