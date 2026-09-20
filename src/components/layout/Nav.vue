<template>
    <nav class="nav-links">
      <router-link :to="{ name: 'home' }">Home</router-link>
      <router-link :to="{ name: 'about' }">About</router-link>
      <router-link :to="{ name: 'contact' }">Contact</router-link>
  </nav>
</template>

<script>
export default {

}
</script>

<style>
@media (max-width: 850px) {
  .nav { padding-inline:18px; }
  .nav-links { display:none; }
}
</style>
