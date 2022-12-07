import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()

pinia.use(({ store }) => {
    store.router = markRaw(router)
})


app.use(pinia)
app.use(router)

// app.provide("baseUrl", "https://rentroomhactiv-production.up.railway.app");
app.mount('#app')