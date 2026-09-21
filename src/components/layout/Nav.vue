<template>
    <nav class="nav-links">
      <router-link :to="{ name: 'home' }">{{t('nav.home')}}</router-link>
      <router-link :to="{ name: 'about' }">{{t('nav.about')}}</router-link>
      <router-link :to="{ name: 'contact' }">{{t('nav.contact')}}</router-link>
  </nav>
</template>

<script setup>
  import { useI18n } from 'vue-i18n'
  const { t } = useI18n()

</script>

<style>
@media (max-width: 850px) {
  .nav { padding-inline:18px; }
  .nav-links { display:none; }
}
</style>
