<template>
  <section class="section"><div class="container about-intro">
    <img :src="photoLivingRoom" :alt="t(`aboutPage.altImage`)">
    <div class="about-copy">
      <div class="section-kicker">{{t(`aboutPage.storyKicker`)}}</div>
      <h2>{{t(`aboutPage.storyTitle`)}}</h2>
      <p>{{t(`aboutPage.storyText1`)}}</p>
      <p>{{t(`aboutPage.storyText2`)}}</p>
      <Button href="/" >{{t(`aboutPage.storyCta`)}} <span>→</span></Button>
    </div>
  </div>
  </section>
</template>

<script setup>
import Button from '../ui/button.vue'
import photoLivingRoom from '@/assets/images/about/photo-living-room-about.avif'

import { useI18n } from 'vue-i18n'
const { t } = useI18n()

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
