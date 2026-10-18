<template>
  <section class="sidebar-section">
    <h3>{{ t('blogPage.sidebar.searchTitle') }}</h3>
    <input class="search"
    type="search"
    :placeholder="t('blogPage.sidebar.searchPlaceholder')"
    @input="handleSearch">
  </section>
</template>

<script setup>
  import { useI18n } from 'vue-i18n'
  const { t } = useI18n()

  const emit = defineEmits(['search']);

  const handleSearch = (event) => {
    emit('search', event.target.value);
  }

</script>

<style>
.sidebar-section{margin-bottom:38px}
.sidebar h3{font-size:12px;margin-bottom:14px}
.search{
  width:100%;border:1px solid var(--line);background:#fff;padding:11px 12px;
  font-size:11px;outline:0
}
</style>
