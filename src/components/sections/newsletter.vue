<template>
  <section class="container newsletter">
    <div>
      <h3>{{t('blogPage.newsletter.title')}}</h3>
      <p>{{t('blogPage.newsletter.text')}}</p>
    </div>
    <form><input type="email" :placeholder="t('blogPage.newsletter.placeholder')"><button type="submit">{{t('blogPage.newsletter.button')}}</button></form>
  </section>
</template>

<script setup>
  import { useI18n } from 'vue-i18n'
  const { t } = useI18n()
</script>

<style>
.newsletter{
  margin-top:70px;background:#fff;border:1px solid var(--line);
  padding:28px;display:flex;justify-content:space-between;align-items:center;gap:25px
}
.newsletter h3{font-size:18px}
.newsletter p{font-size:11px;color:var(--muted)}
.newsletter form{display:flex;min-width:390px}
.newsletter input{border:1px solid var(--line);padding:12px;font-size:11px;flex:1}
.newsletter button{border:0;background:var(--accent);padding:0 18px;font-size:11px;font-weight:700}

</style>
