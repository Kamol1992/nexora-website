import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createHead } from '@vueuse/head'
import { createI18n } from 'vue-i18n'

import App from './App.vue'
import router from './router'

import './assets/styles/main.css'
import './assets/styles/variables.css'

import pl from './locales/pl.json'
import en from './locales/en.json'

const i18n = createI18n({
  legacy: false,
  locale: 'en', // domyślny język
  fallbackLocale: 'en',
  messages: { pl, en }
})

const head = createHead()

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(head)

app.mount('#app')
