// Waitlist demo: swaps the form for a success card with the visitor's position.
(() => {
  const form = document.querySelector('[data-waitlist-form]')
  if (!form) return
  const success = document.querySelector('[data-waitlist-success]')
  const position = document.querySelector('[data-waitlist-position]')
  const count = document.querySelector('[data-waitlist-count]')
  const button = form.querySelector('button[type="submit"]')
  const ahead = Number((count?.textContent || '0').replace(/\D/g, ''))

  form.addEventListener('submit', (event) => {
    event.preventDefault()
    button.disabled = true
    button.textContent = 'Joining…'
    // Replace with your waitlist API call.
    setTimeout(() => {
      if (position) position.textContent = (ahead + 1).toLocaleString('en-US')
      form.hidden = true
      if (success) success.hidden = false
    }, 1000)
  })
})()
