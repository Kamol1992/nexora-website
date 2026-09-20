<template>
  <aside class="contact-info">
    <div class="section-kicker">Contact information</div>
    <h2>Start a conversation.</h2>
    <div v-for="(info, index) in infos" :key="index" class="info-item">
      <strong>{{info.icon}} {{info.label}}</strong>
      <span>{{info.value}}</span>
    </div>
    <!-- <div class="info-item"><strong>☎ Phone</strong><span>+48 123 456 789</span></div>
    <div class="info-item"><strong>⌖ Address</strong><span>ul. Architektów 10<br>00-001 Warsaw, Poland</span></div>
    <div class="info-item"><strong>◷ Office hours</strong><span>Mon – Fri: 9:00 – 17:00</span></div> -->
  </aside>
</template>

<script setup>
  const infos = [
    {label: 'Email', value:'hello@nexora.com', icon: '✉'},
    {label: 'Phone', value:'+48 123 456 789', icon: '☎'},
    {label: 'Address', value:'ul. Architektów 10<br>00-001 Warsaw, Poland', icon: '⌖'},
    {label: 'Office hours', value:'Mon – Fri: 9:00 – 17:00', icon: '◷'}
  ]

</script>

<style>
  .contact-info { padding-top:25px; }
.info-item { padding:18px 0; border-bottom:1px solid var(--line); }
.info-item strong { display:block; font-size:12px; margin-bottom:5px; }
.info-item span { color:var(--muted); font-size:13px; }
</style>
