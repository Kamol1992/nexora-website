<template>
  <div>
    <main>
      <Baner/>
      <Features/>
      <Projects/>
      <Split/>
    </main>
  </div>
</template>

<script setup>
  import Features from '../components/sections/features.vue'
  import Projects from '../components/sections/projects.vue'
  import Baner from '../components/sections/baner.vue'
  import Split from '../components/sections/split.vue'

  import { useSeo } from '@/composables/useSeo'

  useSeo({
    title: 'Nexora — Home',
    description: 'Modern architecture and sustainable design solutions.'
  })

</script>

<style>

</style>
