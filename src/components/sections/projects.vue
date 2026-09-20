<template>
  <section class="section" id="projects">
    <div class="container">
      <div class="section-head">
        <div>
          <div class="section-kicker">Selected work</div>
          <h2>Featured Projects</h2>
        </div>
        <Button :to="{name: 'contact'}" variant="link">View all projects →</Button>
      </div>
      <div class="projects">
        <article v-for="(project, index) in projects" :key="index" class="project">
          <img :src="project.img">
          <div class="project-body">
            <h3>{{project.title}}</h3>
            <span>{{project.subtitle}}</span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
  import Button from '../ui/button.vue'
  import photo1 from '@/assets/images/projects/photo-modern-villa.avif'
  import photo2 from '@/assets/images/projects/photo-office-building.avif'
  import photo3 from '@/assets/images/projects/photo-green-residence.avif'
  const projects = [
    {img:photo1, title: 'Modern Villa', subtitle: 'Residential'},
    {img:photo2, title: 'Office Building', subtitle: 'Commercial'},
    {img:photo3, title: 'Green Residence', subtitle: 'Residential'}
  ]

</script>

<style scoped>
  .projects { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
  .project { background: var(--surface); }
  .project img { height: 290px; }
  .project-body { padding: 18px 20px 22px; }
  .project-body h3 { font-size: 16px; }
  .project-body span { display: block; color: var(--muted); font-size: 12px; margin-top: 3px; }

</style>
