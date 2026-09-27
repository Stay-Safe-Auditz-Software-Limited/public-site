<script setup lang="ts">
usePageSeo({
  title: 'Contact us or request a demo | Stay Safe Auditz Software',
  description:
    'Contact Stay Safe Auditz Software to request a demo or ask about health and safety software for your business in New Zealand or Australia.',
})
</script>
<template>
  <section class="container contact-layout section">
    <div>
      <p class="eyebrow">LET’S MAKE SAFETY SIMPLER</p>
      <h1>
        See how Auditz
        <br />
        could work
        <br />
        <span>for your team.</span>
      </h1>
      <p class="hero-lede">
        Have a question or want to see Auditz in action? Send us a message to make an enquiry or
        request a demo.
      </p>
      <div class="contact-points">
        <p>
          <SiteIcon name="people" />
          For businesses in New Zealand & Australia
        </p>
        <p>
          <SiteIcon name="check" />
          Explore the features that matter to your team
        </p>
        <p>
          <SiteIcon name="document" />
          Bring your questions about moving away from paper
        </p>
      </div>
    </div>
    <div class="contact-card">
      <span class="feature-icon"><SiteIcon name="chat" /></span>
      <h2>Let’s talk about your business.</h2>
      <p>Complete the form below and our team will get back to you.</p>
      <iframe
        class="contact-form"
        src="https://docs.google.com/forms/d/e/1FAIpQLSf3iDNRpydM_xbIEXoEowKM-sdypM_uGvqXbNSvsjyuH_Mz2g/viewform?embedded=true"
        title="Contact Auditz or request a demo"
        width="640"
        height="1316"
      />
      <a
        class="text-link"
        href="https://docs.google.com/forms/d/e/1FAIpQLSf3iDNRpydM_xbIEXoEowKM-sdypM_uGvqXbNSvsjyuH_Mz2g/viewform"
        target="_blank"
        rel="noopener noreferrer"
      >
        Open form in a new tab
      </a>
      <a class="email-link" href="mailto:staysafe@auditz.co.nz">staysafe@auditz.co.nz</a>
      <hr />
      <h3>Ready to get started?</h3>
      <p>Compare our NZD plans and continue to signup.</p>
      <NuxtLink class="text-link" to="/pricing">
        View pricing
        <SiteIcon name="arrow" />
      </NuxtLink>
    </div>
  </section>
</template>

<style scoped>
.contact-layout {
  grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
  align-items: start;
}
.contact-card {
  min-width: 0;
}
.contact-form {
  display: block;
  width: 100%;
  height: 1450px;
  border: 0;
  margin-block: 24px;
  background: white;
}
@media (max-width: 900px) {
  .contact-layout {
    grid-template-columns: minmax(0, 1fr);
  }
}
@media (max-width: 540px) {
  .contact-card {
    padding-inline: 12px;
  }
  .contact-form {
    height: 1650px;
  }
}
</style>
