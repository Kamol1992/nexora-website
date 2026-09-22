<template>
  <section class="cta">
    <div class="container cta-inner">
      <div>
        <h2>{{t(`contactPage.ctaTitle`)}}</h2>
        <p>{{t(`contactPage.ctaText`)}}</p>
      </div>
      <Button href="#form" variant="gold">{{t(`contactPage.ctaButton`)}} →</Button>
    </div>
  </section>
</template>

<script setup>
  import Button from '../ui/button.vue'
  import { useI18n } from 'vue-i18n'
  const { t } = useI18n()
</script>

<style>
  .cta { background:var(--dark); color:white; padding:80px 0; }
  .cta-inner { display:flex; justify-content:space-between; align-items:center; gap:30px; }
  .cta h2 { font-size:40px; letter-spacing:-.045em; }
  .cta p { color:#aeb2b0; margin-top:8px; }
</style>
