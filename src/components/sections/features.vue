<template>
  <section class="features">
    <div class="container feature-grid">
        <article v-for="(feature, index) in features" :key="index" class="feature">
          <div class="icon">{{feature.icon}}</div>
          <h3>{{t(`features.${feature.key}Title`)}}</h3>
          <p>{{t(`features.${feature.key}Text`)}}</p>
        </article>
    </div>
  </section>
</template>

<script setup>
  import { useI18n } from 'vue-i18n'
  const { t } = useI18n()
  const features = [
  { icon: '⌘', key: 'modernDesign' },
  { icon: '♧', key: 'sustainable' },
  { icon: '▣', key: 'management' },
  { icon: '♙', key: 'craftsmanship' }
]

</script>

<style scoped>
  .features { background: var(--surface); border-bottom: 1px solid var(--line); }
  .feature-grid { display: grid; grid-template-columns: repeat(4, 1fr); }
  .feature { padding: 42px 28px; border-right: 1px solid var(--line); }
  .feature:last-child { border-right: 0; }
  .icon { font-size: 20px; margin-bottom: 20px; }
  .feature h3 { font-size: 15px; margin-bottom: 9px; }
  .feature p { color: var(--muted); font-size: 12px; }

  @media (max-width: 850px) {
  .feature-grid, .projects, .team, .values-grid, .footer-grid { grid-template-columns:1fr 1fr; }
  .feature:nth-child(2) { border-right:0; }
}

@media (max-width: 560px) {
  .feature-grid, .projects, .team, .values-grid, .footer-grid, .form-row { grid-template-columns:1fr; }
  .feature { border-right:0; border-bottom:1px solid var(--line); }
}

</style>
