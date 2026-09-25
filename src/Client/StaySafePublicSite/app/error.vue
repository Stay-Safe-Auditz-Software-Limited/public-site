<script setup lang="ts">
const error = useError()
const statusCode = computed(() => error.value?.statusCode ?? 404)

useSeoMeta({ title: 'Page not found | Stay Safe', robots: 'noindex, nofollow' })
</script>

<template>
  <NuxtLayout>
    <section class="page-intro section">
      <p class="eyebrow">{{ statusCode }}</p>
      <h1>That page isn’t available.</h1>
      <p>The link may have changed, or the page may no longer exist.</p>
      <NuxtLink class="button button--primary" to="/" @click="clearError({ redirect: '/' })">
        Return home
      </NuxtLink>
    </section>
  </NuxtLayout>
</template>
