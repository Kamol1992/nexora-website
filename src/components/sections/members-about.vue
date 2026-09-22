<template>
  <section class="section" style="padding-top:20px">
    <div class="container">
      <div class="section-head">
        <div>
          <div class="section-kicker">{{t(`aboutPage.teamKicker`)}}</div>
          <h2>{{t(`aboutPage.teamTitle`)}}</h2>
        </div>
        <!-- <a class="link" href="contact.html">Join our team →</a> -->
        <Button :to="{name: 'contact'}" variant="link">{{t(`aboutPage.teamCta`)}} →</Button>
      </div>
      <div class="team">
      <article v-for="(member, index) in members" :key="index" class="member">
        <img :src="member.img" :alt="`Person - `+t(`aboutPage.teamMembers.${member.alt}`)">
        <div class="member-info">
          <h3>{{t(`aboutPage.teamMembers.${member.name}`)}}</h3>
          <p>{{t(`aboutPage.teamMembers.${member.position}`)}}</p>
        </div>
      </article>
      <!-- <article class="member"><img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=85"><div class="member-info"><h3>Anna Nowak</h3><p>Lead Designer</p></div></article>
      <article class="member"><img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=85"><div class="member-info"><h3>Piotr Zieliński</h3><p>Project Manager</p></div></article> -->
      </div>
    </div>
  </section>
</template>

<script setup>
  import Button from '../ui/button.vue'
  import member1 from '@/assets/images/about/photo-member1.avif'
  import member2 from '@/assets/images/about/photo-member2.avif'
  import member3 from '@/assets/images/about/photo-member3.avif'

  import { useI18n } from 'vue-i18n'
  const { t } = useI18n()

const members = [
  {img:member1, alt:'janRole', name: 'janName', position: 'janRole'},
  {img:member2, alt:'annaRole', name: 'annaName', position: 'annaRole'},
  {img:member3, alt:'piotrRole', name: 'piotrName', position: 'piotrRole'}
]

</script>

<style scoped>
.team { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
.member { background:white; }
.member img { height:340px; filter:grayscale(20%); }
.member-info { padding:18px 20px 22px; }
.member-info h3 { font-size:15px; }
.member-info p { color:var(--muted); font-size:12px; }

</style>
