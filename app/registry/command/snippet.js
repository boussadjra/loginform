// Command palette: filter, arrow-key navigation, ⌘/Ctrl+key shortcuts. Replace the timeout with your OAuth redirect.
{
  const root = document.querySelector('[data-cmd]')
  const input = root?.querySelector('input[role="combobox"]')
  if (root && input) {
    const items = [...root.querySelectorAll('[data-cmd-item]')]
    const empty = root.querySelector('[data-cmd-empty]')
    const groups = root.querySelectorAll('[data-cmd-group]')
    const status = root.querySelector('[data-cmd-status]')
    const visible = () => items.filter(item => !item.hidden)

    const activate = (item) => {
      items.forEach(i => i.setAttribute('aria-selected', String(i === item)))
      if (!item) return input.removeAttribute('aria-activedescendant')
      input.setAttribute('aria-activedescendant', item.id)
      item.scrollIntoView({ block: 'nearest' })
    }

    const choose = (item) => {
      if (!item || !status) return
      const name = item.querySelector('.font-medium').textContent.replace('Continue with ', '')
      status.textContent = `Redirecting to ${name}…`
      setTimeout(() => { status.textContent = 'Signed in ✓' }, 1200)
    }

    input.addEventListener('input', () => {
      const q = input.value.trim().toLowerCase()
      items.forEach((item) => { item.hidden = !item.dataset.name.includes(q) })
      const shown = visible()
      empty?.classList.toggle('hidden', shown.length > 0)
      groups.forEach((g) => { g.hidden = !!q })
      activate(shown[0])
    })

    const move = (dir) => {
      const shown = visible()
      const current = shown.findIndex(i => i.getAttribute('aria-selected') === 'true')
      activate(shown[(current + dir + shown.length) % shown.length])
    }

    document.addEventListener('keydown', (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.length === 1) {
        const item = items.find(i => i.dataset.key === event.key.toLowerCase())
        if (item) { event.preventDefault(); activate(item); choose(item) }
        return
      }
      if (event.target !== input) return
      if (event.key === 'ArrowDown') { event.preventDefault(); move(1) }
      else if (event.key === 'ArrowUp') { event.preventDefault(); move(-1) }
      else if (event.key === 'Enter') { event.preventDefault(); choose(visible().find(i => i.getAttribute('aria-selected') === 'true')) }
      else if (event.key === 'Escape') { input.value = ''; input.dispatchEvent(new Event('input')) }
    })

    items.forEach((item) => {
      item.addEventListener('mousemove', () => item.getAttribute('aria-selected') !== 'true' && activate(item))
      item.addEventListener('click', () => { activate(item); choose(item); input.focus() })
    })
  }
}
