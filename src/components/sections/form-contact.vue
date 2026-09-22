<template>
  <form class="contact-form" onsubmit="event.preventDefault(); alert('Thanks! This demo form is ready to connect to your backend.');">
    <h2>{{t(`contactPage.formTitle`)}}</h2>
    <div class="form-row">
      <div v-for="(field , index) in fieldsData" :key="index" class="field">
        <label :for="field.type">{{t(`contactPage.${field.label}`)}}</label>
        <input :id="field.type" :required="field.required">
      </div>
    </div>
    <div class="field">
      <label for="message">{{t(`contactPage.message`)}}</label>
      <textarea id="message" required></textarea>
    </div>
    <button class="btn btn-gold" type="submit">{{t(`contactPage.send`)}} →</button>
  </form>
</template>

<script setup>
  import Button from '../ui/button.vue'
  import { useI18n } from 'vue-i18n'
  const { t } = useI18n()
  const fieldsData = [
    {label:'name', type: 'name', required: true},
    {label:'email', type: 'email', required: true},
    {label:'phone', type: 'phone', required: false}
    // {label:'Your message', type: 'message', required: true}
  ]

</script>

<style>
  .contact-form { background:white; padding:45px; }
  .contact-form h2, .contact-info h2 { font-size:34px; letter-spacing:-.04em; margin-bottom:25px; }
  .form-row { display:grid; grid-template-columns:1fr 1fr; gap:18px; }
  .field { margin-bottom:18px; }
  label { display:block; font-size:11px; font-weight:600; margin-bottom:8px; }
  input, textarea { width:100%; border:0; border-bottom:1px solid var(--line); padding:12px 0; outline:0; background:transparent; color:var(--text); }
  textarea { min-height:130px; resize:vertical; border:1px solid var(--line); padding:12px; }
</style>
