// Wizard demo: validates each step, moves the progress rail, fakes the final submit.
(() => {
  document.querySelectorAll('[data-wizard]').forEach((form) => {
    const steps = [...form.querySelectorAll('[data-step]')]
    const rail = [...form.parentElement.querySelectorAll('[data-rail-step]')]
    const back = form.querySelector('[data-wizard-back]')
    const next = form.querySelector('[data-wizard-next]')
    const bar = form.querySelector('[data-wizard-progress]')
    const count = form.querySelector('[data-wizard-count]')
    const done = form.querySelector('[data-wizard-done]')
    let current = 0

    const show = (index) => {
      current = index
      steps.forEach((step, i) => { step.hidden = i !== index })
      rail.forEach((item, i) => { item.dataset.state = i < index ? 'done' : i === index ? 'active' : 'todo' })
      if (bar) bar.style.width = `${((index + 1) / steps.length) * 100}%`
      if (count) count.textContent = `Step ${index + 1} of ${steps.length}`
      if (back) back.disabled = index === 0
      if (next) next.innerHTML = index === steps.length - 1 ? 'Create workspace &rarr;' : 'Continue &rarr;'
      steps[index].querySelector('input, select')?.focus({ preventScroll: true })
    }

    const valid = () => [...steps[current].querySelectorAll('input, select')].every((field) => {
      const ok = field.checkValidity()
      field.setAttribute('aria-invalid', String(!ok))
      if (!ok) field.reportValidity()
      return ok
    })

    back?.addEventListener('click', () => current > 0 && show(current - 1))

    form.addEventListener('submit', (event) => {
      event.preventDefault()
      if (!valid()) return
      if (current < steps.length - 1) return show(current + 1)
      next.disabled = true
      next.textContent = 'Creating…'
      // Replace with your auth call.
      setTimeout(() => {
        next.disabled = false
        next.innerHTML = 'Create workspace &rarr;'
        rail.forEach((item) => { item.dataset.state = 'done' })
        if (done) done.hidden = false
      }, 1200)
    })
  })
})()
