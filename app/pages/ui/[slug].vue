<script setup lang="ts">
import { findUi } from '~/registry'
import { UI_CATEGORIES } from '~/types/registry'

const route = useRoute()
const entry = findUi(String(route.params.slug))

if (!entry)
  throw createError({ statusCode: 404, statusMessage: 'UI not found', fatal: true })

useHead({ title: `${entry.name} · Threshold` })

const viewports = [
  { id: 'mobile', label: 'Mobile', width: '390px' },
  { id: 'tablet', label: 'Tablet', width: '820px' },
  { id: 'desktop', label: 'Desktop', width: '100%' },
] as const

const viewport = ref<(typeof viewports)[number]['id']>('desktop')
const frameWidth = computed(() => viewports.find(v => v.id === viewport.value)!.width)
</script>

<template>
  <div v-if="entry" class="mx-auto max-w-6xl px-6 py-12">
    <NuxtLink to="/" class="text-sm text-muted transition hover:text-bone">← All UIs</NuxtLink>

    <header class="mt-6 flex flex-wrap items-end justify-between gap-6">
      <div>
        <p class="font-mono text-xs tracking-widest text-rose uppercase">{{ UI_CATEGORIES[entry.category] }}</p>
        <h1 class="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">{{ entry.name }}</h1>
        <p class="mt-3 max-w-2xl text-muted">{{ entry.tagline }}</p>
        <ul class="mt-4 flex flex-wrap gap-2">
          <li v-for="tag in entry.tags" :key="tag" class="rounded-full border border-ink-line px-2.5 py-0.5 font-mono text-xs text-muted">
            {{ tag }}
          </li>
        </ul>
      </div>
      <div class="flex gap-2">
        <CopyButton :text="entry.html" label="Copy HTML" />
        <CopyButton :text="entry.prompt" label="Copy prompt" />
      </div>
    </header>

    <section class="mt-10" aria-label="Preview">
      <div class="mb-3 flex justify-end gap-1">
        <button
          v-for="option in viewports"
          :key="option.id"
          type="button"
          class="cursor-pointer rounded-full px-3 py-1.5 text-sm transition"
          :class="viewport === option.id ? 'bg-bone text-ink' : 'text-muted hover:text-bone'"
          @click="viewport = option.id"
        >
          {{ option.label }}
        </button>
      </div>
      <div class="overflow-hidden rounded-2xl border border-ink-line bg-ink-raised p-2">
        <div class="mx-auto h-[640px] max-w-full overflow-hidden rounded-xl transition-[width] duration-300" :style="{ width: frameWidth }">
          <UiFrame :entry="entry" />
        </div>
      </div>
    </section>

    <div class="mt-8">
      <CodePanel :entry="entry" />
    </div>

    <p v-if="entry.fonts?.length" class="mt-4 text-sm text-muted">
      Uses {{ entry.fonts.join(', ') }}. Load it in your app (the full-page copy includes the link), or swap the font class.
    </p>
  </div>
</template>
