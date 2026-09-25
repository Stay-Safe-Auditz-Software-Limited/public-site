<script setup lang="ts">
import { helpArticles, helpCategories } from '~/data/help'
definePageMeta({ path: '/help-centre.html' })
usePageSeo({
  title: 'Help Centre | Stay Safe Auditz Software',
  description:
    'Auditz software support. Watch step-by-step video guides for getting started, managing folders, records and reporting, or download the mobile app.',
})
</script>
<template>
  <div>
    <section class="container page-hero help-intro">
      <p class="eyebrow">SOFTWARE SUPPORT</p>
      <h1>
        A little guidance.
        <br />
        <span>A simpler workday.</span>
      </h1>
      <p>
        Find your way around Auditz with our video guides. Start with the basics or jump straight to
        the task you need.
      </p>
      <nav class="help-category-links" aria-label="Help categories">
        <a class="button button--secondary" href="#getting-started">
          Getting started
          <span aria-hidden="true">↓</span>
        </a>
        <a class="button button--secondary" href="#folder-types">
          Folder types
          <span aria-hidden="true">↓</span>
        </a>
      </nav>
    </section>
    <section class="container help-library section-bottom" aria-label="Help centre topics">
      <div
        v-for="(category, index) in helpCategories"
        :id="index === 0 ? 'getting-started' : 'folder-types'"
        :key="category"
        class="help-category"
      >
        <div class="help-category-heading">
          <span class="feature-icon"><SiteIcon :name="index === 0 ? 'people' : 'document'" /></span>
          <div>
            <p class="eyebrow">{{ index === 0 ? 'THE ESSENTIALS' : 'YOUR EVERYDAY RECORDS' }}</p>
            <h2>{{ category }}</h2>
          </div>
        </div>
        <ul class="help-topic-list">
          <li
            v-for="article in helpArticles.filter((item) => item.category === category)"
            :key="article.path"
          >
            <NuxtLink :to="article.path">
              <span class="help-topic-symbol" aria-hidden="true">
                {{ article.videoUrl ? '▷' : '↓' }}
              </span>
              <span>{{ article.title }}</span>
              <SiteIcon name="arrow" />
            </NuxtLink>
          </li>
        </ul>
      </div>
    </section>
    <section class="help-support">
      <div class="container">
        <div>
          <p class="eyebrow">NEED A HAND?</p>
          <h2>We’re here to help.</h2>
          <p>Get in touch with the Auditz team.</p>
        </div>
        <a class="button button--primary" href="mailto:staysafe@auditz.co.nz">
          staysafe@auditz.co.nz
          <SiteIcon name="arrow" />
        </a>
      </div>
    </section>
  </div>
</template>
