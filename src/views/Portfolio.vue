<template>
<Baner />
<main class="container">
  <Controls @filter="updateFilter"/>
  <Portfolio :filter="activeFilter"/>
  <Cta />
</main>


</template>

<script setup>
  import { ref } from 'vue'
  import Baner from '../components/sections/baner-subpage.vue'
  import Portfolio from '../components/sections/portfolio.vue'
  import Cta from '../components/sections/portfolio-cta.vue'
  import Controls from '../components/sections/portfolio-controls.vue'

  const activeFilter = ref('all');

  const updateFilter = (filter) => {
    activeFilter.value = filter
  }

  import { useSeo } from '@/composables/useSeo'

  useSeo({
    title: 'Nexora — Portfolio',
    description: 'Designing apartments that inspire everyday living. I create modern, well-balanced interiors where functionality meets aesthetics, delivering personalized spaces that reflect the character and needs of their residents.'
  })

</script>

<style>

/* portfolio.css */
.portfolio-controls{
  padding:34px 0 18px;
  border-bottom:1px solid var(--line);
}
.filters{display:flex;flex-wrap:wrap;gap:10px}
.filter{
  border:1px solid var(--line);background:#fff;padding:9px 15px;
  font-size:11px;cursor:pointer
}
.filter.active,.filter:hover{background:var(--dark);color:#fff;border-color:var(--dark)}

.portfolio-grid{
  display:grid;grid-template-columns:repeat(3,1fr);gap:22px;padding:36px 0
}
.project{background:#fff;overflow:hidden}
.project-image{height:300px;overflow:hidden}
.project-image img{height:100%;transition:transform .8s cubic-bezier(.22,1,.36,1)}
.project:hover .project-image img{transform:scale(1.045)}
.project-body{padding:18px 20px 21px;display:flex;justify-content:space-between;gap:20px}
.project h2{font-size:16px;line-height:1.25}
.project-meta{color:var(--muted);font-size:11px;margin-top:4px}
.project-arrow{font-size:20px;line-height:1}

.portfolio-cta{
  margin:28px 0 70px;background:#fff;border:1px solid var(--line);
  padding:24px 28px;display:flex;align-items:center;justify-content:space-between;gap:20px
}
.portfolio-cta strong{font-size:17px}
.portfolio-cta p{font-size:12px;color:var(--muted);margin-top:3px}

@media(max-width:850px){.portfolio-grid{grid-template-columns:1fr 1fr}}
@media(max-width:560px){
  .portfolio-grid{grid-template-columns:1fr}
  .portfolio-cta{align-items:flex-start;flex-direction:column}
}

</style>
