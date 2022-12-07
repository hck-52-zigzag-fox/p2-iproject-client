import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import App from './App.vue'
import router from './router'
const pinia = createPinia()
// import './assets/main.css'

const app = createApp(App)
pinia.use(({ store }) => {
    store.router = markRaw(router)
    })
    
app.use(pinia)
app.use(router)

app.mount('#app')
