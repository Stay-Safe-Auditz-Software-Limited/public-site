<script setup lang="ts">
interface Faq {
  question: string
  answer: string
  link?: { label: string; to: string }
}

const faqs: Faq[] = [
  {
    question: 'What is Auditz?',
    answer:
      'Auditz is health and safety management software that helps you replace paper-based systems with organised digital records. Manage training, equipment, maintenance, documents and meeting minutes in one place.',
  },
  {
    question: 'Is Auditz suitable for my industry?',
    answer:
      'Auditz can be used across industries. Whether you work in construction, manufacturing, agriculture, transport or professional services, it helps you formalise your health and safety processes.',
  },
  {
    question: 'What records can I manage?',
    answer:
      'You can manage first aid certificates and training records, vehicle WOF and registration dates, equipment inspections, insurance documents, company records, and health and safety policies and procedures. Auditz sends alerts when training renewals, inspections, document reviews and other scheduled items are due. You can also upload or take meeting minutes—and more.',
  },
  {
    question: 'Can I use Auditz on my phone or tablet?',
    answer:
      'Yes. Auditz is available through a web browser and a mobile app, so you can access it from your computer, tablet or phone.',
  },
  {
    question: 'Can Auditz help us prepare for ISO 45001?',
    answer:
      'Auditz helps organise the processes and records that support your preparation for ISO 45001. Certification depends on your organisation’s wider health and safety management system and assessment.',
  },
  {
    question: 'Can I see Auditz before subscribing?',
    answer:
      'Yes. Book a demo to see how Auditz could work for your business. Email staysafe@auditz.co.nz to arrange a time.',
    link: { label: 'Arrange a demo', to: 'mailto:staysafe@auditz.co.nz' },
  },
  {
    question: 'I use Safely. Am I in the right place?',
    answer:
      'Yes. Safely is run through Stay Safe Auditz Software and provides the same functionality under different branding. You can continue to log in at app.safely.nz. Over the next year, you’ll gradually see Safely branding replaced by Auditz branding.',
    link: { label: 'Log in to Safely', to: 'https://app.safely.nz/' },
  },
  {
    question: 'Where can I get help?',
    answer:
      'Our Help Centre includes video guides covering everyday tasks, from adding records to setting alerts. You can also contact the team at staysafe@auditz.co.nz.',
    link: { label: 'Visit the Help Centre', to: '/help-centre.html' },
  },
]
</script>

<template>
  <section class="home-faq" aria-labelledby="faq-heading">
    <div class="section container">
      <div class="faq-heading">
        <p class="eyebrow">FREQUENTLY ASKED QUESTIONS</p>
        <h2 id="faq-heading">Your questions, answered.</h2>
      </div>
      <div class="faq-list">
        <details v-for="faq in faqs" :key="faq.question" class="faq-item">
          <summary>
            {{ faq.question }}
            <span class="faq-toggle" aria-hidden="true" />
          </summary>
          <div class="faq-answer">
            <p>{{ faq.answer }}</p>
            <NuxtLink v-if="faq.link" :to="faq.link.to" class="text-link">
              {{ faq.link.label }}
              <SiteIcon name="arrow" />
            </NuxtLink>
          </div>
        </details>
      </div>
    </div>
  </section>
</template>

<style scoped>
.home-faq {
  background: var(--surface);
}
.faq-heading {
  text-align: center;
  margin-bottom: 36px;
}
.faq-list {
  max-width: 860px;
  margin-inline: auto;
  display: grid;
  gap: 12px;
}
.faq-item {
  background: var(--white);
  border: 1px solid var(--line);
  border-radius: var(--radius);
}
.faq-item[open] {
  border-color: var(--green);
}
summary {
  padding: 22px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  cursor: pointer;
  font-weight: 600;
  list-style: none;
  border-radius: var(--radius);
}
summary::-webkit-details-marker {
  display: none;
}
summary:hover {
  background: var(--green-light);
}
summary:focus-visible {
  outline: 3px solid var(--green-dark);
  outline-offset: 3px;
}
.faq-toggle {
  position: relative;
  width: 20px;
  height: 20px;
  flex: 0 0 20px;
  color: var(--green-dark);
}
.faq-toggle::before,
.faq-toggle::after {
  content: '';
  position: absolute;
  background: currentColor;
  border-radius: 1px;
}
.faq-toggle::before {
  width: 16px;
  height: 2px;
  top: 9px;
  left: 2px;
}
.faq-toggle::after {
  width: 2px;
  height: 16px;
  top: 2px;
  left: 9px;
}
[open] .faq-toggle::after {
  display: none;
}
.faq-answer {
  padding: 0 24px 24px;
}
.faq-answer p {
  margin: 0;
  color: var(--muted);
  line-height: 1.8;
}
.faq-answer .text-link {
  margin-top: 16px;
}
@media (max-width: 540px) {
  summary {
    padding: 20px 18px;
  }
  .faq-answer {
    padding: 0 18px 20px;
  }
}
</style>
