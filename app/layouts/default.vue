<template>
  <div class="flex min-h-screen flex-col">
    <header class="border-b border-ink-line">
      <nav class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <NuxtLink to="/" class="flex items-center gap-2.5 text-lg font-bold tracking-tight">
          <img src="/favicon.svg" alt="" class="size-7">
          Threshold
        </NuxtLink>
        <a
          href="https://github.com/boussadjra/loginform"
          class="text-sm text-muted transition hover:text-bone"
          target="_blank"
          rel="noopener"
        >GitHub</a>
      </nav>
    </header>
    <main class="flex-1">
      <slot />
    </main>
    <footer class="border-t border-ink-line">
      <p class="mx-auto max-w-6xl px-6 py-6 text-sm text-muted">
        Copy the markup, keep the prompt, own the code.
      </p>
    </footer>
  </div>
</template>
