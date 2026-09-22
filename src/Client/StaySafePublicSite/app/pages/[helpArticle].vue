<script setup lang="ts">
import { helpArticles, appDownloads } from '~/data/help'
definePageMeta({
  path: '/:helpArticle(software-overview|adding-folders|adding-items|setting-alerts|completing-actions|adding-notes|changing-the-status-of-an-item|users|app-download|demonstration|adding-documents|adding-employees|adding-equipment|adding-company-records|holding-meetings|adding-hazards--risks|adding-jobs--tasks|occurrence-reporting).html',
})
const route = useRoute()
const article = computed(() => helpArticles.find((item) => item.slug === route.params.helpArticle))
if (!article.value) throw createError({ statusCode: 404, statusMessage: 'Help article not found' })
const related = computed(() =>
  helpArticles.filter((item) => item.category === article.value?.category),
)
const articleIndex = computed(() =>
  helpArticles.findIndex((item) => item.slug === route.params.helpArticle),
)
const nextArticle = computed(() => helpArticles[articleIndex.value + 1])
useSeoMeta({
  title: () => `${article.value?.title} | Auditz Help Centre`,
  description: () =>
    article.value?.videoUrl
      ? `Watch the Auditz ${article.value.title.toLowerCase()} tutorial in our help centre.`
      : 'Download the Auditz safety management app for Apple or Android and find instructions for Safely users.',
})
</script>
<template>
  <div v-if="article" class="container help-article-page">
    <nav class="help-breadcrumb" aria-label="Breadcrumb">
      <NuxtLink to="/help-centre.html">Help centre</NuxtLink>
      <span aria-hidden="true">/</span>
      <span aria-current="page">{{ article.title }}</span>
    </nav>
    <div class="help-article-layout">
      <article>
        <p class="eyebrow">{{ article.category }}</p>
        <h1>{{ article.title }}</h1>
        <template v-if="article.videoUrl">
          <div class="help-video">
            <iframe
              :key="article.videoUrl"
              :src="article.videoUrl"
              :title="`${article.title} — Auditz video tutorial`"
              width="640"
              height="564"
              allow="fullscreen; picture-in-picture"
              allowfullscreen
              referrerpolicy="strict-origin-when-cross-origin"
            />
          </div>
          <p class="help-video-note">
            Video guide
            <span aria-hidden="true">·</span>
            Use the player controls to play, pause or view fullscreen.
          </p>
          <a class="text-link" :href="article.videoUrl" target="_blank" rel="noopener noreferrer">
            Open video in a new tab
            <span aria-hidden="true">↗</span>
          </a>
        </template>
        <div v-else class="help-download">
          <p>You can download the Auditz safety management app to your Apple or Android device.</p>
          <p>
            Please make sure you are using the latest operating system on your mobile device prior
            to download.
          </p>
          <div class="hero-actions">
            <a class="button button--primary" :href="appDownloads.apple">
              Download for Apple
              <span aria-hidden="true">↗</span>
            </a>
            <a class="button button--secondary" :href="appDownloads.android">
              Download for Android
              <span aria-hidden="true">↗</span>
            </a>
          </div>
          <h2>Using the Safely version of Auditz?</h2>
          <p>
            For users currently using the 'Safely' version of Auditz, please download the app as
            above. When you get to the login screen for Auditz please hold down on the Auditz logo
            for 2 seconds. You will see the Auditz logo switch to the Safely logo. From here onwards
            please enter your Safely username and password as normal.
          </p>
        </div>
        <div class="help-article-navigation">
          <NuxtLink class="text-link" to="/help-centre.html">← All help topics</NuxtLink>
          <NuxtLink v-if="nextArticle" class="text-link" :to="nextArticle.path">
            Next: {{ nextArticle.title }}
            <SiteIcon name="arrow" />
          </NuxtLink>
        </div>
      </article>
      <aside class="help-sidebar">
        <nav :aria-label="`${article.category} tutorials`">
          <h2>{{ article.category }}</h2>
          <NuxtLink v-for="topic in related" :key="topic.path" :to="topic.path">
            {{ topic.title }}
          </NuxtLink>
        </nav>
        <div class="help-sidebar-contact">
          <h2>Need more help?</h2>
          <a href="mailto:staysafe@auditz.co.nz">staysafe@auditz.co.nz</a>
        </div>
      </aside>
    </div>
  </div>
</template>
