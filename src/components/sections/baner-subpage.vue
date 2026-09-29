<template>
  <section class="page-hero" :style="{ backgroundImage: `url(${info.img})`}">
    <div class="container">
      <div class="eyebrow">{{t(info.subPage)}}</div>
      <h1>{{t(info.title)}}</h1>
      <p>{{t(info.text)}}</p>
    </div>
  </section>
</template>

<script setup>
  import { useRoute } from 'vue-router'
  const route = useRoute()
  import { useI18n } from 'vue-i18n'
  const { t } = useI18n()
  import aboutImg from '@/assets/images/about/photo-buildings-about.avif'
  import contactImg from '@/assets/images/about/photo-workspace-contact.avif'
  import portfolioImg from '@/assets/images/baner/photo-baner.avif'
  import { computed } from 'vue'
  console.log(route.name)

  const banerInfo = [
    {img: aboutImg ,subPage: 'aboutPage.heroEyebrow', title: `aboutPage.heroTitle`, text:"" , route: 'about'},
    {img: contactImg ,subPage: 'contactPage.heroEyebrow', title: `contactPage.heroTitle`, text:"" , route: 'contact'},
    {img: portfolioImg ,subPage: 'portfolioPage.heroKicker', title: `portfolioPage.heroTitle`, text:"portfolioPage.heroText" , route: 'portfolio'}
  ]

  const info = computed(() =>{
    return banerInfo.find(item => item.route === route.name)
  })

</script>

<style scoped>

.page-hero {
  min-height: 360px;
  /* background-image: url('/src/assets/images/about/photo-buildings-about.avif'); */
  position: relative;
  background-size: cover;
  background-position: center;
  color: white;
  display:flex;
  align-items:end; }
.page-hero::before { content:""; position:absolute; inset:0; background:linear-gradient(90deg,rgba(5,7,8,.78),rgba(5,7,8,.25)); }
.page-hero .container { position:relative; z-index:1; padding:75px 0; }
.page-hero h1 { font-size: clamp(42px, 6vw, 68px); line-height:1; letter-spacing:-.05em; max-width:720px; }
.page-hero p { max-width: 560px; color: #d8d9d8; font-size: 14px; margin-top: 18px;}
.eyebrow { color: var(--accent); text-transform: uppercase; letter-spacing: .13em; font-size: 11px; font-weight: 700; margin-bottom: 18px; }

</style>
