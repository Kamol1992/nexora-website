<template>
  <section class="sidebar-section">
      <h3>Categories</h3>
      <div class="categories">
        <a v-for="(category, index) in categories" :key="index" @click="setFilter(category.filter)">{{t(`portfolioPage.filters.${category.filter}`)}}</a>
      </div>
    </section>
</template>

<script setup>
import { defineEmits } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const categories = [
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

</style>
