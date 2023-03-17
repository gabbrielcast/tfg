import { createApp } from 'vue'
import { createPinia } from 'pinia'

import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'


import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
