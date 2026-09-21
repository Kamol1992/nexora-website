<template>
  <section class="split">
    <div class="split-image" style="background-image:url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85')"></div>
    <div class="split-copy">
      <div class="section-kicker">{{t('why.kicker')}}</div>
      <h2>{{t('why.title')}}</h2>
      <p>{{t('why.text')}}</p>
      <Button :to="{name: 'about'}" variant="outline">{{t('why.cta')}} →</Button>
    </div>
  </section>
</template>

<script setup>
  import Button from '../ui/button.vue'
  import { useI18n } from 'vue-i18n'
  const { t } = useI18n()

</script>

<style scoped>
  .split { display: grid; grid-template-columns: 1fr 1fr; }
  .split-image { min-height: 560px; background-size: cover; background-position: center; }
  .split-copy { background: var(--dark); color: white; padding: 90px 10%; display: flex; flex-direction: column; justify-content: center; }
  .split-copy h2 { font-size: clamp(34px, 4vw, 55px); line-height: 1.06; letter-spacing: -.05em; margin: 10px 0 20px; }
  .split-copy p { color: #bfc3c1; max-width: 470px; margin-bottom: 28px; font-size: 14px; }
  @media (max-width: 850px) {
  .split { grid-template-columns:1fr; }
  .split-image { min-height:420px; }
  }
</style>
