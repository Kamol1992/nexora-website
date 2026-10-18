<template>
  <nav class="pagination" aria-label="Blog pages">
    <a
      v-for="page in totalPages"
      :key="page"
      href="#"
      :class="{ active: currentPage === page }"
      @click.prevent="emit('change-page', page)"
    >
      {{ page }}
    </a>
    <a
      v-if="currentPage < totalPages"
      href="#"
      @click.prevent="emit('change-page', currentPage + 1)"
    >
      {{ t('blogPage.pagination.next') }}
    </a>
  </nav>
</template>

<script setup>
import { computed } from 'vue'

import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const props = defineProps({
  currentPage: {
    type: Number,
    default: 1
  },
  totalPosts: {
    type: Number,
    default: 0
  }
})

const emit = defineEmits(['change-page']);

const totalPages = computed(() => {
  return Math.ceil(props.totalPosts / 3)
})

</script>

<style>
.pagination{display:flex;gap:7px;margin-top:30px}
.pagination a{width:32px;height:32px;border:1px solid var(--line);display:grid;place-items:center;font-size:11px;background:#fff}
.pagination a.active{background:var(--dark);color:#fff;border-color:var(--dark)}

</style>
