<template>
  <router-link :to="{ name: 'home' }" class="logo"><span class="logo-mark"></span>NEXORA</router-link>
</template>

<script setup>

</script>

<style scoped>
.logo { display: flex; align-items: center; gap: 10px; font-weight: 700; letter-spacing: -.04em; }
.logo-mark {
    width: 23px; height: 27px; display: inline-block;
    background: linear-gradient(135deg, var(--accent) 0 45%, #24282a 45% 60%, var(--accent) 60%);
    clip-path: polygon(50% 0,100% 100%,72% 100%,50% 47%,28% 100%,0 100%);
}

</style>
