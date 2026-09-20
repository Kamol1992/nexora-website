<template>
  <div>
    <main>
      <Baner/>
      <AboutIntro/>
      <Members/>
      <Values/>
    </main>
  </div>
</template>

<script setup>
import Baner from '../components/sections/baner-subpage.vue'
import AboutIntro from '../components/sections/about-intro.vue'
import Members from '../components/sections/members-about.vue'
import Values from '../components/sections/values.vue'

import { useSeo } from '@/composables/useSeo'

  useSeo({
    title: 'Nexora — About',
    description: 'Nexora is an architecture studio focused on modern, functional and sustainable design. Learn about our philosophy, values and the approach that shapes every project we create.'
  })

</script>

<style>

</style>
