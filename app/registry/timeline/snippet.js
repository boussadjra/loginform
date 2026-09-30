// Advances the timeline one step per submitted form. Replace the timeouts with your auth calls.
{
  const steps = [...document.querySelectorAll('[data-tl-step]')]
  const count = document.querySelector('[data-tl-count]')
  steps.forEach((step, index) => {
    const form = step.querySelector('[data-tl-form]')
    const button = form?.querySelector('button[type="submit"]')
    if (!form || !button) return
    form.addEventListener('submit', (event) => {
      event.preventDefault()
      const label = button.textContent
      button.disabled = true
      button.textContent = 'One moment…'
      setTimeout(() => {
        button.disabled = false
        button.textContent = label
        step.dataset.state = 'done'
        const next = steps[index + 1]
        if (next) {
          next.dataset.state = 'current'
          next.querySelector('input')?.focus()
          if (count) count.textContent = `Step ${index + 2} of ${steps.length}`
        }
        else if (count) {
          count.textContent = 'Done'
        }
      }, 900)
    })
  })
}
