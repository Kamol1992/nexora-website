<template>
  <section class="portfolio-controls">
    <div class="filters">
      <button v-for="(control, index) in controls" :key="index" class="filter" @click="setFilter(control.filter)">{{t(`portfolioPage.filters.${control.filter}`)}}</button>
    </div>
  </section>
</template>

<script setup>
  import { defineEmits } from 'vue'
  import { useI18n } from 'vue-i18n'
  const { t } = useI18n()

  const controls = [
    {filter: 'all'},
    {filter: 'residential'},
    {filter: 'commercial'},
    {filter: 'interior'},
    {filter: 'publicc'}
  ]

  const emit = defineEmits(['filter'])

  const setFilter = (filter) => {
    emit('filter', filter);
  }

</script>

<style>
  .filters{display:flex;flex-wrap:wrap;gap:10px}
  .filter{
    border:1px solid var(--line);background:#fff;padding:9px 15px;
    font-size:11px;cursor:pointer
  }
  .filter.active,.filter:hover{background:var(--dark);color:#fff;border-color:var(--dark)}
</style>
