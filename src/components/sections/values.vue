<template>
  <section class="section values" id="values">
    <div class="container">
      <div class="values-grid">
        <article v-for="(value, index) in values" :key="index" class="value">
          <div class="section-kicker">{{value.subtitle}}</div>
          <h3>{{value.title}}</h3>
          <p>{{value.content}}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
  const values = [
    {title:'Create with purpose.', subtitle: 'Our mission' , content: 'To create innovative and sustainable architecture that enhances communities and inspires a better way of living.'},
    {title:'Shape a better future.', subtitle: 'Our vision' , content: 'To be a global leader in architecture and design, recognized for creativity, quality and integrity.'},
  ]
</script>

<style scoped>
  .values { background:#eae9e4; }
  .values-grid { display:grid; grid-template-columns:1fr 1fr; gap:1px; background:var(--line); }
  .value { background:var(--bg); padding:45px; }
  .value h3 { font-size:20px; margin-bottom:12px; }
  .value p { color:var(--muted); font-size:13px; }

</style>
