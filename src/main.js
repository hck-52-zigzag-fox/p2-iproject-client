import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import YouTube from 'vue3-youtube'
import vue3GoogleLogin from 'vue3-google-login'

import App from './App.vue'
import router from './router'

import '@/assets/style.css'

const app = createApp(App)
const pinia = createPinia();

pinia.use(({ store }) => {
  store.router = markRaw(router);
});

app.use(vue3GoogleLogin, {
  clientId: '662292555578-fkfsqau3dr7uqm3e2odfdienu6hqp2jj.apps.googleusercontent.com'
})

app.component('YouTube', YouTube)
app.use(pinia);
app.use(router)

app.mount('#app')
