<script setup lang="ts">
useSeoMeta({
  title: 'Safely users | Stay Safe Auditz Software',
  description:
    'You’re still in the right place. Safely is run through Stay Safe Auditz Software. Find your Safely login and learn about the move to Auditz branding.',
})
</script>
<template>
  <div>
    <section class="container page-hero safely-welcome">
      <div>
        <p class="eyebrow">A WELCOME TO OUR SAFELY USERS</p>
        <h1>
          You’re still in
          <br />
          <span>the right place.</span>
        </h1>
        <p>
          Know us as Safely? Welcome. Safely is run through Stay Safe Auditz Software — the same
          health and safety management software, with different branding.
        </p>
        <div class="hero-actions">
          <a class="button button--primary" href="https://app.safely.nz/">
            Log in to Safely
            <SiteIcon name="arrow" />
          </a>
          <NuxtLink class="button button--secondary" to="/help-centre.html">
            Visit the help centre
          </NuxtLink>
        </div>
        <p class="safely-login-note">Your Safely login is still at app.safely.nz.</p>
      </div>
      <aside class="safely-brand-card" aria-label="Safely and Stay Safe Auditz Software">
        <img
          src="/images/safely-logo.png"
          alt="Safely — Health and Safety Simplified"
          width="297"
          height="130"
        />
        <p>Part of</p>
        <div class="safely-auditz-logo"><BrandLogo /></div>
        <p>Stay Safe Auditz Software</p>
      </aside>
    </section>
    <section class="safely-transition">
      <div class="container safely-details">
        <div>
          <p class="eyebrow">A FAMILIAR SYSTEM. AN EVOLVING NAME.</p>
          <h2>From Safely to Auditz.</h2>
          <p>
            Over the next year, you’ll gradually see the Safely branding disappear as we move to
            Stay Safe Auditz Software branding.
          </p>
          <p>
            Safely and Auditz do the same job: helping you manage your health and safety processes.
            This change brings the branding together under the Auditz name.
          </p>
        </div>
        <div class="safely-next-steps">
          <h3>Keep using your Safely login</h3>
          <p>For now, continue to access Safely through its existing login page.</p>
          <a class="text-link" href="https://app.safely.nz/">
            Go to the Safely login
            <SiteIcon name="arrow" />
          </a>
          <h3>Need a hand?</h3>
          <p>If you have questions about the branding change, get in touch with the Auditz team.</p>
          <a class="text-link" href="mailto:staysafe@auditz.co.nz">staysafe@auditz.co.nz</a>
        </div>
      </div>
    </section>
  </div>
</template>
