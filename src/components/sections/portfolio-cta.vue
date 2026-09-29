<template>
  <section class="portfolio-cta">
    <div>
      <strong>{{t('portfolioPage.ctaTitle')}}</strong>
      <p>{{t('portfolioPage.ctaText')}}.</p>
    </div>
    <Button :to="{ name: 'contact' }" variant="gold">{{t('portfolioPage.ctaButton')}}</Button>
  </section>
</template>

<script setup>
  import Button from '../ui/button.vue'
  import { useI18n } from 'vue-i18n'
  const { t } = useI18n()
</script>

<style>
.portfolio-cta{
  margin:28px 0 70px;background:#fff;border:1px solid var(--line);
  padding:24px 28px;display:flex;align-items:center;justify-content:space-between;gap:20px
}
.portfolio-cta strong{font-size:17px}
.portfolio-cta p{font-size:12px;color:var(--muted);margin-top:3px}

@media(max-width:560px){
  .portfolio-cta{align-items:flex-start;flex-direction:column}
}

</style>
