<template>
  <header class="header">
    <div class="nav">
        <Logo/>
        <Nav />
        <Button :to="{name: 'contact'}" variant="dark" size="md">Get in Touch</Button>
    </div>

  </header>
</template>

<script setup>
  import Nav from './Nav.vue'
  import { RouterLink } from 'vue-router'
  import Logo from '../ui/logo.vue'
  import Button from '../ui/button.vue'
</script>

<style scoped>
  .nav {
    height: 78px;
    background: var(--surface);
    border-bottom: 1px solid var(--line);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-inline: 32px;
    position: relative;
    z-index: 10;
  }
  .nav-links { display: flex; align-items: center; gap: 30px; font-size: 13px; }
  .nav-links a { color: #424443; }
  .nav-links a.active { color: var(--text); border-bottom: 2px solid var(--accent); padding-bottom: 5px; }
</style>
