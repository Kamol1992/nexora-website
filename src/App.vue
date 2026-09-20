<template>
  <Header />
  <router-view />
  <Footer />
</template>

<script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import Header from './components/layout/Header.vue'
  import Footer from './components/layout/Footer.vue'

</script>

<style scoped>

</style>
