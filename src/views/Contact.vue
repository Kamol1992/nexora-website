<template>
  <div>
    <main>
      <Baner />
      <section class="section" id="form">
        <div class="container contact-layout">
        <Form-contact />
        <Info />
        </div>
        <Map />
      </section>
      <Cta/>
    </main>
  </div>
</template>

<script setup>
  import Baner from '../components/sections/baner-subpage.vue'
  import FormContact from '../components/sections/form-contact.vue'
  import Info from '../components/sections/contact-info.vue'
  import Cta from '../components/sections/cta-contact.vue'
  import Map from '../components/sections/map-contact.vue'

  import { useSeo } from '@/composables/useSeo'

  useSeo({
    title: 'Nexora — Contact',
    description: 'Get in touch with Nexora to discuss your architectural project or request more information. We offer professional guidance, quick communication and a personalized approach to every client.'
  })
</script>

<style>
  @media (max-width: 850px) {
  .contact-layout { grid-template-columns:1fr; }
}
</style>
