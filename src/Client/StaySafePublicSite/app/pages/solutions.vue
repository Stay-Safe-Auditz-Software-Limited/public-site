<script setup lang="ts">
import { solutions } from '~/data/site'

useSeoMeta({
  title: 'Solutions | Stay Safe',
  description: 'Explore the Stay Safe public-site solution overview wireframe.',
})
</script>

<template>
  <section class="page-intro section">
    <p class="eyebrow">Solutions</p>
    <h1>Help every team make safety a practical part of the day.</h1>
    <p>
      This page is structured for future approved product detail, customer outcomes, and relevant
      examples—without making unapproved claims today.
    </p>
    <div class="solution-grid solution-grid--light">
      <article v-for="solution in solutions" :key="solution.title" class="solution-card">
        <h2>{{ solution.title }}</h2>
        <p>{{ solution.description }}</p>
        <strong>{{ solution.outcome }}</strong>
      </article>
    </div>
  </section>
</template>
