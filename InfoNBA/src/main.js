import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import vue3GoogleLogin from 'vue3-google-login'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()

app.use(vue3GoogleLogin, {
    clientId: '459319211961-o5qpuikuu6dj0f9rtbqkel437gs1ecjr.apps.googleusercontent.com'
  })

pinia.use(({ store }) => {
    store.router = markRaw(router)
})


app.use(pinia)
app.use(router)

// app.provide("baseUrl", "https://infonba-production.up.railway.app");
app.mount('#app')