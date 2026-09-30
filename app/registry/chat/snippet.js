// Conversational demo: chips and the email box post a reply, the bot "types" back. Replace the timeouts with your auth calls.
{
  const root = document.querySelector('[data-chat]')
  const log = root?.querySelector('[data-chat-log]')
  if (root && log) {
    const bubble = (text, fromUser) => {
      const li = document.createElement('li')
      li.textContent = text
      li.className = fromUser
        ? 'mt-2 self-end rounded-[20px] rounded-br-md bg-[#5b4bff] px-4 py-2.5 text-[15px] leading-snug text-white'
        : 'max-w-[82%] self-start rounded-[20px] rounded-bl-md bg-white px-4 py-2.5 text-[15px] leading-snug shadow-[0_1px_2px_rgba(29,27,58,.06)]'
      log.append(li)
      return li
    }

    const typingTemplate = log.querySelector('[data-chat-typing]')
    const botSays = (text) => {
      const typing = typingTemplate?.cloneNode(true)
      if (typing) { typing.hidden = false; log.append(typing) }
      setTimeout(() => { typing?.remove(); bubble(text, false) }, 900)
    }

    const chips = root.querySelector('[data-chat-chips]')
    root.querySelectorAll('[data-provider]').forEach((chip) => {
      chip.addEventListener('click', () => {
        chips?.classList.add('hidden')
        bubble(`${chip.dataset.provider}, please`, true)
        botSays(`On it! Opening ${chip.dataset.provider} in a new window…`)
      })
    })

    root.querySelector('[data-auth-form]')?.addEventListener('submit', (event) => {
      event.preventDefault()
      const input = event.target.querySelector('input')
      bubble(input.value, true)
      input.value = ''
      chips?.classList.add('hidden')
      botSays('Nice. I just sent you a magic link, check your inbox ✉️')
    })
  }
}
