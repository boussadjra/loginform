<script setup lang="ts">
import { registry } from '~/registry'
import { UI_CATEGORIES, type UiCategory } from '~/types/registry'

const filter = ref<UiCategory | 'all'>('all')

const categories = computed(() => {
  const used = new Set(registry.map(entry => entry.category))
  return (Object.keys(UI_CATEGORIES) as UiCategory[]).filter(category => used.has(category))
})

const entries = computed(() =>
  filter.value === 'all' ? registry : registry.filter(entry => entry.category === filter.value),
)
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
        Hand-built sign-in, sign-up and verification screens in plain HTML and Tailwind.
        Drop them into any framework, and regenerate or remix them with the prompt that ships with each one.
      </p>
    </section>

    <section class="pb-24" aria-labelledby="gallery-title">
      <div class="mb-6 flex flex-wrap items-center justify-between gap-4">
        <h2 id="gallery-title" class="text-2xl font-semibold">
          Gallery <span class="text-muted">{{ entries.length }}</span>
        </h2>
        <div class="flex flex-wrap gap-2">
          <button
            v-for="option in ['all', ...categories] as const"
            :key="option"
            type="button"
            class="cursor-pointer rounded-full border px-3.5 py-1.5 text-sm transition"
            :class="filter === option ? 'border-bone bg-bone text-ink' : 'border-ink-line text-muted hover:text-bone'"
            @click="filter = option"
          >
            {{ option === 'all' ? 'All' : UI_CATEGORIES[option] }}
          </button>
        </div>
      </div>
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <UiCard v-for="entry in entries" :key="entry.slug" :entry="entry" />
      </div>
    </section>
  </div>
</template>
