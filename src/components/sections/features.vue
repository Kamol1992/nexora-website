<template>
  <section class="features">
    <div class="container feature-grid">
        <article v-for="(feature, index) in features" :key="index" class="feature">
          <div class="icon">{{feature.icon}}</div>
          <h3>{{feature.title}}</h3>
          <p>{{feature.text}}</p>
        </article>
    </div>
  </section>
</template>

<script setup>
  const features = [
  {
    icon: '⌘',
    title: 'Modern Design',
    text: 'We combine creativity, functionality and efficiency to bring your vision to life.'
  },
  {
    icon: '♧',
    title: 'Sustainable Solutions',
    text: 'Thoughtful materials and responsible planning for a better future.'
  },
  {
    icon: '▣',
    title: 'Project Management',
    text: 'From first sketch to final handover, we keep every detail moving.'
  },
  {
    icon: '♙',
    title: 'Quality Craftsmanship',
    text: 'Precise execution and close collaboration with trusted partners.'
  }
]

</script>

<style scoped>
  .features { background: var(--surface); border-bottom: 1px solid var(--line); }
  .feature-grid { display: grid; grid-template-columns: repeat(4, 1fr); }
  .feature { padding: 42px 28px; border-right: 1px solid var(--line); }
  .feature:last-child { border-right: 0; }
  .icon { font-size: 20px; margin-bottom: 20px; }
  .feature h3 { font-size: 15px; margin-bottom: 9px; }
  .feature p { color: var(--muted); font-size: 12px; }

</style>
