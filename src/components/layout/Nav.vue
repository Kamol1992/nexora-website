<template>
    <nav class="nav-links">
      <router-link :to="{ name: 'home' }">{{t('nav.home')}}</router-link>
      <router-link :to="{ name: 'about' }">{{t('nav.about')}}</router-link>
      <router-link :to="{ name: 'portfolio' }">{{t('nav.portfolio')}}</router-link>
      <router-link :to="{ name: 'blog' }">{{t('nav.blog')}}</router-link>
      <router-link :to="{ name: 'contact' }">{{t('nav.contact')}}</router-link>
  </nav>
</template>

<script setup>
  import { useI18n } from 'vue-i18n'
  const { t } = useI18n()

</script>

<style>

.nav-links a {
  position: relative;
  padding-bottom: 4px;
}

.nav-links a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0%;
  height: 2px;
  background-color: #d4af37; /* złoty */
  transition: width 0.25s ease;
}

.nav-links a:hover::after {
  width: 100%;
}

.nav-links a.router-link-exact-active::after,
.nav-links a.router-link-active::after {
  width: 100%;
}

@media (max-width: 850px) {
  .nav { padding-inline:18px; }
  .nav-links { display:none; }
}
</style>
