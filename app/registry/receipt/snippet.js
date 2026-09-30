// Demo: "prints" the reset link and stamps the receipt. Replace the timeout with your auth call.
{
  const form = document.querySelector('[data-receipt-form]')
  const button = form?.querySelector('button[type="submit"]')
  const stamp = form?.querySelector('[data-receipt-stamp]')
  if (form && button) {
    form.addEventListener('submit', (event) => {
      event.preventDefault()
      button.disabled = true
      button.textContent = 'PRINTING…'
      if (stamp) stamp.hidden = true
      setTimeout(() => {
        button.disabled = false
        button.textContent = 'REPRINT LINK'
        if (stamp) stamp.hidden = false
      }, 1200)
    })
  }
}
