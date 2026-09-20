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
</script>

<style>

</style>
