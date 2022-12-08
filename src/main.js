import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import vue3GoogleLogin from 'vue3-google-login'

// import './assets/main.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

const app = createApp(App);
const pinia = createPinia();

pinia.use(({store}) => {
  store.router = markRaw(router)
})

app.use(pinia);
app.use(router);
app.use(vue3GoogleLogin,{
  clientId:"707643294867-j7pgi3qa3hfe4uplk3am5l2kelqsbpja.apps.googleusercontent.com"
})

app.mount("#app");
