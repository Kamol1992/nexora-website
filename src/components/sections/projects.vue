<template>
  <section class="section" id="projects">
    <div class="container">
      <div class="section-head">
        <div>
          <div class="section-kicker">{{t('projects.kicker')}}</div>
          <h2>{{t('projects.title')}}</h2>
        </div>
        <Button :to="{name: 'contact'}" variant="link">{{ t('projects.viewAll') }} →</Button>
      </div>
      <div class="projects">
        <article v-for="(project, index) in projects" :key="index" class="project">
          <img :src="project.img" :alt="`Photo - ` + t(`projects.${project.title}`)">
          <div class="project-body">
            <h3>{{t(`projects.${project.title}`)}}</h3>
            <span>{{t(`projects.${project.subtitle}`)}}</span>
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

  import { useI18n } from 'vue-i18n'
  const { t } = useI18n()
  const projects = [
    {img:photo1, title: 'villa', subtitle: 'residential'},
    {img:photo2, title: 'office', subtitle: 'commercial'},
    {img:photo3, title: 'greenResidence', subtitle: 'residential'}
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
