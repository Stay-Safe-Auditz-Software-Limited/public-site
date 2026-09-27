<template>
  <section class="app-download-section" aria-labelledby="app-download-heading">
    <div class="container section app-download-layout">
      <img
        class="app-download-phones"
        src="/images/auditz-mobile-access.png"
        alt="Auditz mobile app showing a vehicle inspection checklist and safety records"
        width="1080"
        height="1350"
        loading="lazy"
      />
      <div class="app-download-copy">
        <p class="eyebrow">YOUR AUDITZ. ON THE GO.</p>
        <h2 id="app-download-heading">Access from your phone or tablet.</h2>
        <p class="app-download-description">
          Keep your health and safety information close at hand. Access Auditz from your desktop,
          laptop, tablet or phone, and use the mobile app to manage everyday safety tasks wherever
          work takes you. Simple, practical software for your team.
        </p>
        <div class="app-store-links">
          <a
            href="https://apps.apple.com/nz/app/auditz/id1534964805"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Auditz on the App Store (opens in a new tab)"
          >
            <img
              src="/images/app-store-badge.svg"
              alt="Download on the App Store"
              width="180"
              height="60"
              loading="lazy"
            />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.auditz.io"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Get Auditz on Google Play (opens in a new tab)"
          >
            <img
              class="google-play-badge"
              src="/images/google-play-badge.png"
              alt="Get it on Google Play"
              width="206"
              height="80"
              loading="lazy"
            />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.app-download-section {
  background: #000;
  color: #fff;
}
.app-download-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 70px;
}
.app-download-phones {
  display: block;
  width: 100%;
  max-width: 440px;
  height: auto;
  justify-self: center;
}
.app-download-copy .eyebrow {
  color: var(--green);
}
.app-download-description {
  color: #d0d0d0;
  line-height: 1.9;
  margin-block: 24px 30px;
}
.app-store-links {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
}
.app-store-links a {
  display: inline-flex;
  align-items: center;
  border-radius: 6px;
}
.app-store-links img {
  display: block;
  width: 180px;
  height: auto;
}
.app-store-links .google-play-badge {
  width: 206px;
}
@media (max-width: 800px) {
  .app-download-layout {
    grid-template-columns: 1fr;
    gap: 36px;
  }
  .app-download-phones {
    max-width: 340px;
  }
  .app-download-copy {
    text-align: center;
  }
  .app-store-links {
    justify-content: center;
  }
}
</style>
