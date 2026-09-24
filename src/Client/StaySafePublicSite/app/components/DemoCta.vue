<template>
  <section class="cta-wrap">
    <div class="container cta">
      <div class="cta-phone-wrap">
        <div class="cta-phone">
          <img
            src="/images/occurrence-mobile.png"
            alt="Auditz mobile occurrence reporting screen for recording incidents, injuries and near misses"
            width="1320"
            height="2868"
            loading="lazy"
          />
        </div>
      </div>
      <div class="cta-copy">
        <p class="eyebrow">LESS PAPERWORK. MORE CLARITY.</p>
        <h2>Make your next safety step a simple one.</h2>
        <p>See how Auditz could work for your business.</p>
        <div class="cta-actions">
          <NuxtLink to="/contact" class="button button--primary">
            Book a demo
            <SiteIcon name="arrow" />
          </NuxtLink>
          <NuxtLink to="/pricing" class="button button--secondary">Sign up now</NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta {
  display: grid;
  grid-template-columns: 280px minmax(0, 1fr);
  align-items: center;
  gap: 70px;
  padding-block: 70px;
}
.cta-phone-wrap {
  width: 245px;
  justify-self: center;
  padding: 15px 24px;
}
.cta-phone {
  position: relative;
  padding: 7px;
  border: 2px solid #777;
  border-radius: 34px;
  background: #111;
  box-shadow: 12px 20px 28px rgb(16 39 13 / 20%);
  transform: rotate(-9deg);
}
.cta-phone::after {
  content: '';
  position: absolute;
  width: 3px;
  height: 46px;
  right: -4px;
  top: 100px;
  border-radius: 0 3px 3px 0;
  background: #555;
}
.cta-phone img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 25px;
}
.cta-actions {
  display: flex;
  flex-shrink: 0;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 28px;
}
.button--secondary:hover {
  background: var(--surface);
  border-color: var(--ink);
}
@media (max-width: 700px) {
  .cta {
    grid-template-columns: minmax(0, 1fr);
    gap: 36px;
    padding-block: 50px;
  }
  .cta-phone-wrap {
    width: 215px;
    justify-self: center;
  }
}
</style>
