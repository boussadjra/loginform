<script setup lang="ts">
import { UI_CATEGORIES, type UiEntry } from '~/types/registry'

defineProps<{ entry: UiEntry }>()
</script>

<template>
  <NuxtLink
    :to="`/ui/${entry.slug}`"
    class="group block overflow-hidden rounded-2xl border border-ink-line bg-ink-raised transition hover:-translate-y-1 hover:border-muted focus-visible:outline-2 focus-visible:outline-cream"
  >
    <UiFrame :entry="entry" thumbnail />
    <div class="flex items-start justify-between gap-4 border-t border-ink-line p-5">
      <div>
        <p class="text-xs tracking-widest text-muted uppercase">{{ UI_CATEGORIES[entry.category] }}</p>
        <h3 class="mt-1 text-xl font-semibold group-hover:text-cream">{{ entry.name }}</h3>
        <p class="mt-1 text-sm text-muted">{{ entry.tagline }}</p>
      </div>
      <div class="flex shrink-0 -space-x-1.5 pt-1" aria-hidden="true">
        <span v-for="color in entry.palette" :key="color" class="size-4 rounded-full ring-2 ring-ink-raised outline outline-white/20" :style="{ background: color }" />
      </div>
    </div>
  </NuxtLink>
</template>
