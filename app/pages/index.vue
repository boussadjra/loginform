<script setup lang="ts">
import { registry } from '~/registry'
import { UI_CATEGORIES, type UiCategory } from '~/types/registry'

const filter = ref<UiCategory | 'all'>('all')
const query = ref('')

const categories = computed(() => {
  const used = new Set(registry.map(entry => entry.category))
  return (Object.keys(UI_CATEGORIES) as UiCategory[]).filter(category => used.has(category))
})

const counts = computed(() => {
  const tally: Partial<Record<UiCategory | 'all', number>> = { all: registry.length }
  for (const entry of registry)
    tally[entry.category] = (tally[entry.category] ?? 0) + 1
  return tally
})

const entries = computed(() => {
  const needle = query.value.trim().toLowerCase()
  return registry.filter(entry =>
    (filter.value === 'all' || entry.category === filter.value)
    && (!needle || [entry.name, entry.tagline, ...entry.tags].some(text => text.toLowerCase().includes(needle))),
  )
})
</script>

<template>
  <div class="mx-auto max-w-6xl px-6">
    <section class="py-20 sm:py-28">
      <p class="font-mono text-xs tracking-widest text-rose uppercase">Auth UIs · Tailwind · copy-paste</p>
      <h1 class="mt-5 max-w-3xl text-5xl leading-[1.05] font-bold tracking-tight sm:text-7xl">
        Every app has a door.<br>
        <span class="text-cream">Make yours memorable.</span>
      </h1>
      <p class="mt-6 max-w-xl text-lg text-muted">
        {{ registry.length }} hand-built sign-in, sign-up, passwordless and recovery screens in plain HTML and Tailwind.
        Drop them into any framework, and regenerate or remix them with the prompt that ships with each one.
      </p>
    </section>

    <section class="pb-24" aria-labelledby="gallery-title">
      <div class="mb-6 flex flex-wrap items-center justify-between gap-4">
        <h2 id="gallery-title" class="text-2xl font-semibold">
          Gallery <span class="text-muted">{{ entries.length }}</span>
        </h2>
        <label class="relative w-full sm:w-64">
          <span class="sr-only">Search UIs</span>
          <input
            v-model="query"
            type="search"
            placeholder="Search by name or tag"
            class="w-full rounded-full border border-ink-line bg-ink-raised px-4 py-2 text-sm text-bone outline-none placeholder:text-muted focus:border-muted"
          >
        </label>
      </div>
      <div class="mb-8 flex flex-wrap gap-2">
        <button
          v-for="option in ['all', ...categories] as const"
          :key="option"
          type="button"
          class="cursor-pointer rounded-full border px-3.5 py-1.5 text-sm transition"
          :class="filter === option ? 'border-bone bg-bone text-ink' : 'border-ink-line text-muted hover:text-bone'"
          @click="filter = option"
        >
          {{ option === 'all' ? 'All' : UI_CATEGORIES[option] }}
          <span class="ml-1 opacity-60">{{ counts[option] }}</span>
        </button>
      </div>
      <p v-if="!entries.length" class="py-16 text-center text-muted">
        No UI matches “{{ query }}”.
      </p>
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <UiCard v-for="entry in entries" :key="entry.slug" :entry="entry" />
      </div>
    </section>
  </div>
</template>
