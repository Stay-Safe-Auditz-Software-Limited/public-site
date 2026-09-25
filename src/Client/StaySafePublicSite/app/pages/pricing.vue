<script setup lang="ts">
import { plans, planUrl } from '~/data/site'
const annual = ref(false)
usePageSeo({
  title: 'Pricing | Stay Safe Auditz Software',
  description:
    'Auditz plans from NZ$110 plus GST per month. Compare plans for up to 5, 50 or 150 staff and get started with your existing Auditz onboarding flow.',
})
</script>
<template>
  <div>
    <section class="page-hero container pricing-intro">
      <p class="eyebrow">A CLEAR PLAN FOR YOUR BUSINESS</p>
      <h1>
        Less paperwork.
        <br />
        <span>Straightforward pricing.</span>
      </h1>
      <p>
        Choose the plan that fits your team. All prices are in New Zealand dollars and exclude GST.
      </p>
      <div class="billing-toggle" role="group" aria-label="Billing period">
        <button :aria-pressed="!annual" :class="{ selected: !annual }" @click="annual = false">
          Monthly
        </button>
        <button :aria-pressed="annual" :class="{ selected: annual }" @click="annual = true">
          Annually
          <span>1 month free</span>
        </button>
      </div>
    </section>
    <section class="container section-bottom">
      <div class="pricing-grid">
        <article v-for="plan in plans" :key="plan.name" class="price-card">
          <p class="plan-size">{{ plan.staff }}</p>
          <h2>{{ plan.name }}</h2>
          <p>{{ plan.description }}</p>
          <div class="price">
            <span class="currency">NZ$</span>
            <strong>
              {{ (annual ? plan.monthly * 11 : plan.monthly).toLocaleString('en-NZ') }}
            </strong>
            <span>/{{ annual ? 'year' : 'month' }}</span>
          </div>
          <p class="price-note">
            + GST{{ annual ? ' · 12 months for the price of 11' : ' · billed monthly' }}
          </p>
          <a :href="planUrl(plan.id)" class="button button--primary">
            Get started
            <SiteIcon name="arrow" />
          </a>
          <ul class="plan-includes">
            <li>All core features</li>
            <li>Unlimited users</li>
            <li>Free setup & updates</li>
            <li>Online support</li>
            <li>Mobile access</li>
            <li>Contractor management</li>
          </ul>
        </article>
      </div>
      <p class="billing-note">
        Choose your billing option during onboarding. A 30-day money-back guarantee applies. No
        long-term contracts.
      </p>
      <div class="large-team">
        <div>
          <h2>More than 150 staff?</h2>
          <p>Let’s talk about what your business needs.</p>
        </div>
        <NuxtLink class="button button--secondary" to="/contact">
          Contact us
          <SiteIcon name="arrow" />
        </NuxtLink>
      </div>
    </section>
    <DemoCta />
  </div>
</template>
