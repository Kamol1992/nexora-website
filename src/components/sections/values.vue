<template>
  <section class="section values" id="values">
    <div class="container">
      <div class="values-grid">
        <article v-for="(value, index) in values" :key="index" class="value">
          <div class="section-kicker">{{t(`aboutPage.values.${value.subtitle}`)}}</div>
          <h3>{{t(`aboutPage.values.${value.title}`)}}</h3>
          <p>{{t(`aboutPage.values.${value.content}`)}}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { useI18n } from 'vue-i18n'
  const { t } = useI18n()
  const values = [
    {title:'missionTitle', subtitle: 'missionKicker' , content: 'missionText'},
    {title:'visionTitle', subtitle: 'visionKicker' , content: 'visionText'},
  ]
</script>

<style scoped>
  .values { background:#eae9e4; }
  .values-grid { display:grid; grid-template-columns:1fr 1fr; gap:1px; background:var(--line); }
  .value { background:var(--bg); padding:45px; }
  .value h3 { font-size:20px; margin-bottom:12px; }
  .value p { color:var(--muted); font-size:13px; }

</style>
