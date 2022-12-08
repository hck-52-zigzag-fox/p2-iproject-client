import { createApp } from "vue";
import { createPinia } from "pinia";
import { markRaw } from 'vue'

import App from "./App.vue";
import router from "./router";


const app = createApp(App);
const pinia = createPinia()
app.use(router);

pinia.use(({ store }) => {
    store.router = markRaw(router)
  })

app.use(pinia)
app.mount("#app");

// adapt this based on where your router is

