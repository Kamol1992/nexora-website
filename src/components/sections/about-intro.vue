<template>
  <section class="section"><div class="container about-intro">
    <img :src="photoLivingRoom">
    <div class="about-copy">
      <div class="section-kicker">Our story</div>
      <h2>Founded on passion. Driven by purpose.</h2>
      <p>Nexora was founded in 2015 with a simple idea — to create spaces that are beautiful, functional and sustainable.</p>
      <p>Since then, we have partnered with clients around the world to bring their ideas to life through thoughtful design and innovative solutions.</p>
      <Button href="/" >Our values <span>→</span></Button>
    </div>
  </div>
  </section>
</template>

<script setup>
import Button from '../ui/button.vue'
import photoLivingRoom from '@/assets/images/about/photo-living-room-about.avif'

</script>

<style>
.about-intro { display:grid; grid-template-columns: .95fr 1.05fr; gap:70px; align-items:center; }
.about-intro img { height: 540px; }
.about-copy h2 { font-size: 42px; line-height:1.08; letter-spacing:-.045em; margin:12px 0 22px; }
.about-copy p { color:var(--muted); margin-bottom:16px; max-width:560px; font-size:14px; }

@media (max-width: 850px) {
  .about-intro { grid-template-columns:1fr; }
  .split-image { min-height:420px; }
  .about-intro img { height:420px; }
}

</style>
