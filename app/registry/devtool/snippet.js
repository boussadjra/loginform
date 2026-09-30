// Copy button for the CLI snippet + demo submit. Replace the timeout with your auth call.
(() => {
  document.querySelectorAll('[data-copy]').forEach((button) => {
    button.addEventListener('click', async () => {
      try { await navigator.clipboard.writeText(button.dataset.copy) } catch {}
      button.textContent = 'Copied'
      setTimeout(() => { button.textContent = 'Copy' }, 1500)
    })
  })
  document.querySelectorAll('[data-auth-form]').forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault()
      const button = form.querySelector('button[type="submit"]')
      button.disabled = true
      button.textContent = 'Provisioning…'
      setTimeout(() => {
        button.disabled = false
        button.textContent = 'Create account'
      }, 1200)
    })
  })
})()
