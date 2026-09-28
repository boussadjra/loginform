<script setup lang="ts">
import type { UiEntry } from '~/types/registry'

const props = defineProps<{
  entry: UiEntry
  /** Render at a fixed width and scale down to fit, for gallery thumbnails. */
  thumbnail?: boolean
}>()

const srcdoc = computed(() => buildDocument(props.entry))
</script>

<template>
  <div v-if="thumbnail" class="relative aspect-[4/3] overflow-hidden" :style="{ background: entry.canvas }">
    <iframe
      :srcdoc="srcdoc"
      :title="`${entry.name} preview`"
      sandbox="allow-scripts"
      loading="lazy"
      tabindex="-1"
      class="pointer-events-none absolute top-0 left-0 h-[300%] w-[300%] origin-top-left scale-[0.3333] border-0"
    />
  </div>
  <iframe
    v-else
    :srcdoc="srcdoc"
    :title="`${entry.name} preview`"
    sandbox="allow-scripts allow-forms"
    class="block h-full w-full border-0"
  />
</template>
