<script setup lang="ts">
import type { UiEntry } from '~/types/registry'

const props = defineProps<{ entry: UiEntry }>()

type Tab = 'html' | 'js' | 'prompt' | 'page'

const tabs = computed(() => {
  const list: { id: Tab, label: string, code: string }[] = [
    { id: 'html', label: 'HTML', code: props.entry.html },
  ]
  if (props.entry.js)
    list.push({ id: 'js', label: 'JavaScript', code: props.entry.js })
  list.push(
    { id: 'prompt', label: 'Prompt', code: props.entry.prompt },
    { id: 'page', label: 'Full page', code: buildDocument(props.entry) },
  )
  return list
})

const active = ref<Tab>('html')
const current = computed(() => tabs.value.find(tab => tab.id === active.value) ?? tabs.value[0]!)
</script>

<template>
  <section class="overflow-hidden rounded-2xl border border-ink-line bg-ink-raised">
    <div class="flex flex-wrap items-center justify-between gap-3 border-b border-ink-line px-3 py-2">
      <div role="tablist" class="flex flex-wrap gap-1">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          role="tab"
          type="button"
          :aria-selected="active === tab.id"
          class="cursor-pointer rounded-full px-3 py-1.5 text-sm transition"
          :class="active === tab.id ? 'bg-bone text-ink' : 'text-muted hover:text-bone'"
          @click="active = tab.id"
        >
          {{ tab.label }}
        </button>
      </div>
      <CopyButton :text="current.code" :label="`Copy ${current.label.toLowerCase()}`" />
    </div>
    <p v-if="active === 'prompt'" class="border-b border-ink-line px-5 py-3 text-sm text-muted">
      Paste this into any code-generating model to rebuild the UI from scratch or adapt it to your brand.
    </p>
    <p v-else-if="active === 'page'" class="border-b border-ink-line px-5 py-3 text-sm text-muted">
      A standalone file that loads Tailwind from a CDN. Handy for prototypes; in an app, copy the HTML instead.
    </p>
    <pre class="max-h-[32rem] overflow-auto p-5 font-mono text-[13px] leading-relaxed text-bone/90" :class="active === 'prompt' && 'whitespace-pre-wrap'"><code>{{ current.code }}</code></pre>
  </section>
</template>
