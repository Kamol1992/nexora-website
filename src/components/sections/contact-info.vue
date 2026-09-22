<template>
  <aside class="contact-info">
    <div class="section-kicker">{{t(`contactPage.infoKicker`)}}</div>
    <h2>{{t(`contactPage.infoTitle`)}}</h2>
    <div v-for="(info, index) in infos" :key="index" class="info-item">
      <strong>{{info.icon}} {{t(`contactPage.${info.label}`)}}</strong>
      <span>{{info.value}}</span>
    </div>
  </aside>
</template>

<script setup>
  import { useI18n } from 'vue-i18n'
  const { t } = useI18n()
  const infos = [
    {label: 'emailLabel', value:'hello@nexora.com', icon: '✉'},
    {label: 'phoneLabel', value:'+48 123 456 789', icon: '☎'},
    {label: 'addressLabel', value:'ul. Architektów 10, 00-001 Warszawa', icon: '⌖'},
    {label: 'hoursLabel', value:'Mon – Fri: 9:00 – 17:00', icon: '◷'}
  ]

</script>

<style>
  .contact-info { padding-top:25px; }
.info-item { padding:18px 0; border-bottom:1px solid var(--line); }
.info-item strong { display:block; font-size:12px; margin-bottom:5px; }
.info-item span { color:var(--muted); font-size:13px; }
</style>
