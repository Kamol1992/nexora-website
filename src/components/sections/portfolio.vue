<template>
  <section class="portfolio-grid">
    <article v-for="(project, index) in filteredItems" :key="index" class="project">
      <a :href="project.href" class="project-image" target="_blank" rel="noopener noreferrer">
        <img :src="project.img" :alt="project.alt">
      </a>
      <div class="project-body">
        <div>
          <h2>{{project.title}}</h2>
          <div class="project-meta">{{project.meta}}</div>
        </div>
        <span class="project-arrow">→</span>
      </div>
    </article>
  </section>
</template>

<script setup>
  import { computed } from 'vue'
  import houseImg from '@/assets/images/portfolio/photo-house.avif'
  import libraryImg from '@/assets/images/portfolio/photo-library-room.avif'
  import livingRoomImg from '@/assets/images/portfolio/photo-living-room-with-kitchen.avif'
  import meetingRoomImg from '@/assets/images/portfolio/photo-meeting-room.avif'
  import openSpaceImg from '@/assets/images/portfolio/photo-open-space-coridor.avif'
  import smallLivingRoomImg from '@/assets/images/portfolio/photo-small-living-room.avif'

  const projects = [
    {img: houseImg, alt: 'Forest House — NEXORA architecture project' , href: 'src/assets/images/portfolio/photo-house.avif', title:'Forest House', meta: 'residential'},
    {img: libraryImg, alt: 'City Library — NEXORA architecture project' , href: 'src/assets/images/portfolio/photo-library-room.avif', title:'City Library', meta: 'commercial'},
    {img: livingRoomImg, alt: 'Lake View Villa — NEXORA architecture project' , href: 'src/assets/images/portfolio/photo-living-room-with-kitchen.avif', title:'Lake View Villa', meta: 'residential'},
    {img: meetingRoomImg, alt: 'Minimal Workspace — NEXORA architecture project' , href: 'src/assets/images/portfolio/photo-meeting-room.avif', title:'Minimal Workspac', meta: 'interior'},
    {img: openSpaceImg, alt: 'Nexora Office — NEXORA architecture project' , href: 'src/assets/images/portfolio/photo-open-space-coridor.avif', title:'Nexera Office', meta: 'public'},
    {img: smallLivingRoomImg, alt: 'Hillside Retreat — NEXORA architecture project' , href: 'src/assets/images/portfolio/photo-small-living-room.avif', title:'Hillside Retreat', meta: 'residential'}
  ]

  const props = defineProps({
    filter:{
      type: String,
      default: 'all'
    }
  })

  const filteredItems = computed(() =>{
    if(props.filter === 'all')
      return projects;
    return projects.filter((filter) => filter.meta === props.filter);
  })

</script>

<style>
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

  @media(max-width:850px){.portfolio-grid{grid-template-columns:1fr 1fr}}
  @media(max-width:560px){
    .portfolio-grid{grid-template-columns:1fr}
  }
</style>
