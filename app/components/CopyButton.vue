<script setup lang="ts">
const props = defineProps<{ text: string, label?: string }>()
const { copied, copy } = useCopy()
</script>

<template>
  <button
    type="button"
    class="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-ink-line px-3 py-1.5 text-xs font-medium transition hover:border-cream hover:text-cream focus-visible:outline-2 focus-visible:outline-cream"
    :class="copied ? 'border-cream text-cream' : 'text-bone'"
    @click="copy(props.text)"
  >
    <svg v-if="!copied" viewBox="0 0 16 16" class="size-3.5" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
      <rect x="5" y="5" width="8.5" height="8.5" rx="1.5" /><path d="M11 5V3.5A1.5 1.5 0 0 0 9.5 2h-6A1.5 1.5 0 0 0 2 3.5v6A1.5 1.5 0 0 0 3.5 11H5" />
    </svg>
    <svg v-else viewBox="0 0 16 16" class="size-3.5" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
      <path d="m3 8.5 3 3 7-7" />
    </svg>
    <span aria-live="polite">{{ copied ? 'Copied' : (label ?? 'Copy') }}</span>
  </button>
</template>
