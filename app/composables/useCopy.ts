export function useCopy(resetAfter = 1600) {
  const copied = ref(false)
  let timer: ReturnType<typeof setTimeout> | undefined

  async function copy(text: string) {
    await navigator.clipboard.writeText(text)
    copied.value = true
    clearTimeout(timer)
    timer = setTimeout(() => (copied.value = false), resetAfter)
  }

  onScopeDispose(() => clearTimeout(timer))

  return { copied, copy }
}
