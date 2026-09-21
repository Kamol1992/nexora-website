<template>
  <div class="lang-switcher">
    <button :class="{ active: locale === 'pl' }" @click="switchLang('pl')">PL</button>
    <button :class="{ active: locale === 'en' }" @click="switchLang('en')">EN</button>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()

function switchLang(lang) {
  locale.value = lang
}
</script>

<style scoped>
.lang-switcher {
  display: flex;
  gap: 6px;
}

.lang-switcher button {
  padding: 5px 10px;
  font-size: 12px;
  letter-spacing: 0.5px;
  border: 1px solid #dcdcdc;
  background: transparent;
  color: #333;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.25s ease;
}

/* Hover efekt – elegancki, minimalistyczny */
.lang-switcher button:hover {
  background: #f5f5f5;
  border-color: #bcbcbc;
}

/* Aktywny język */
.lang-switcher button.active {
  background: #111;
  color: #fff;
  border-color: #111;
}
</style>
