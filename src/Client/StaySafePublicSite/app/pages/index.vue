<script setup lang="ts">
import { implementationSteps, solutions } from '~/data/site'

useSeoMeta({
  title: 'Stay Safe | Practical safety systems for better work',
  description:
    'A public-site wireframe for Stay Safe: a clear, people-first way to introduce practical safety systems.',
})
</script>

<template>
  <div>
    <section class="hero section section--tint">
      <div class="hero__content">
        <p class="eyebrow">Public website wireframe</p>
        <h1>Safety work that feels clear, practical, and worth doing.</h1>
        <p class="hero__lede">
          Stay Safe helps teams build consistent safety habits without adding unnecessary
          complexity.
        </p>
        <div class="hero__actions">
          <NuxtLink class="button button--primary" to="/contact">Start a conversation</NuxtLink>
          <NuxtLink class="button button--secondary" to="/solutions">Explore the approach</NuxtLink>
        </div>
      </div>

      <div class="hero__visual" aria-label="Illustrative product dashboard placeholder" role="img">
        <div class="visual-card visual-card--wide">
          <span class="visual-label">Today at a glance</span>
          <strong>Clear priorities. Confident action.</strong>
          <div class="visual-bars" aria-hidden="true"><i /><i /><i /></div>
        </div>
        <div class="visual-card visual-card--small">
          <span class="visual-label">Follow-up</span>
          <strong>One next step</strong>
        </div>
      </div>
    </section>

    <section class="section intro">
      <div>
        <p class="eyebrow">The promise</p>
        <h2>Make safety part of how good work gets done.</h2>
      </div>
      <p>
        This wireframe gives Stay Safe a calm, direct public presence. It leads with the outcome for
        teams, then offers a straightforward path to learn more or speak with someone.
      </p>
    </section>

    <section class="section section--dark">
      <div class="section-heading">
        <p class="eyebrow">What the site explains</p>
        <h2>Three clear reasons to choose a better safety system.</h2>
      </div>
      <div class="solution-grid">
        <article v-for="(solution, index) in solutions" :key="solution.title" class="solution-card">
          <span class="card-index">0{{ index + 1 }}</span>
          <h3>{{ solution.title }}</h3>
          <p>{{ solution.description }}</p>
          <strong>{{ solution.outcome }}</strong>
        </article>
      </div>
    </section>

    <section class="section split-section">
      <div>
        <p class="eyebrow">A guided rollout</p>
        <h2>Good change starts with the reality of your work.</h2>
        <p>
          The public site makes the next step feel human: understand the fit, see the approach, and
          talk through what a sensible start looks like.
        </p>
      </div>
      <ol class="steps-list">
        <li v-for="(step, index) in implementationSteps" :key="step">
          <span>0{{ index + 1 }}</span>
          <p>{{ step }}</p>
        </li>
      </ol>
    </section>

    <section class="section cta-section">
      <div>
        <p class="eyebrow">Ready when you are</p>
        <h2>Start with a conversation about your team.</h2>
      </div>
      <NuxtLink class="button button--primary" to="/contact">Contact Stay Safe</NuxtLink>
    </section>
  </div>
</template>
