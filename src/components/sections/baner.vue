<template>
  <section class="baner">
    <div class="container baner-content">
      <div class="eyebrow">Building the future</div>
      <h1>We create spaces that inspire.</h1>
      <p>Nexora is a modern architecture studio delivering innovative and sustainable design solutions.</p>
      <Button href="/" variant="gold" size="md">
        Explore our work
        <span>→</span>
      </Button>
    </div>
  </section>
</template>

<script setup>
import Button from '../ui/button.vue'
</script>

<style scoped>
.baner {
  min-height: 650px; position: relative; display: flex; align-items: flex-end;
  background-size: cover; background-position: center;
  background-image: url('/src/assets/images/baner/photo-baner.avif')
}
.baner::before { content: ""; position: absolute; inset: 0; background: linear-gradient(90deg, rgba(7,10,11,.74), rgba(7,10,11,.18) 65%, rgba(7,10,11,.05)); }
.baner-content { position: relative; z-index: 1; color: white; padding: 100px 0 90px; max-width: 650px; }
.eyebrow { color: var(--accent); text-transform: uppercase; letter-spacing: .13em; font-size: 11px; font-weight: 700; margin-bottom: 18px; }
.baner h1 { font-size: clamp(44px, 6vw, 76px); line-height: 1.03; letter-spacing: -.055em; margin-bottom: 24px; }
.baner p { color: #d8d9d8; max-width: 540px; margin-bottom: 30px; font-size: 15px; }
</style>
