<template>
  <section class="section" style="padding-top:20px">
    <div class="container">
      <div class="section-head">
        <div>
          <div class="section-kicker">Our team</div>
          <h2>Meet the people behind our success.</h2>
        </div>
        <!-- <a class="link" href="contact.html">Join our team →</a> -->
        <Button :to="{name: 'contact'}" variant="link">Join our team →</Button>
      </div>
      <div class="team">
      <article v-for="(member, index) in members" :key="index" class="member">
        <img :src="member.img">
        <div class="member-info">
          <h3>{{member.name}}</h3>
          <p>{{member.position}}</p>
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

const members = [
  {img:member1, name: 'Jan Kowalski', position: 'Founder & Architect'},
  {img:member2, name: 'Jan Kowalski', position: 'Founder & Architect'},
  {img:member3, name: 'Jan Kowalski', position: 'Founder & Architect'}
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
