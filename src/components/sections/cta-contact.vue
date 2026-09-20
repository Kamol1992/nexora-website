<template>
  <section class="cta">
    <div class="container cta-inner">
      <div>
        <h2>Have a project in mind?</h2>
        <p>Let's create something extraordinary together.</p>
      </div>
      <Button href="#form" variant="gold">Start a project →</Button>
    </div>
  </section>
</template>

<script setup>
  import Button from '../ui/button.vue'
</script>

<style>
  .cta { background:var(--dark); color:white; padding:80px 0; }
  .cta-inner { display:flex; justify-content:space-between; align-items:center; gap:30px; }
  .cta h2 { font-size:40px; letter-spacing:-.045em; }
  .cta p { color:#aeb2b0; margin-top:8px; }
</style>
