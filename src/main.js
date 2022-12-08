import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import vue3GoogleLogin from "vue3-google-login";


import "./assets/main.css";

const app = createApp(App);
const pinia = createPinia();

pinia.use(({ store }) => {
  store.router = markRaw(router);
});

app.use(vue3GoogleLogin, {
  clientId:
    "682129567640-sri4pagrhijdnq7q1rmd2h9mqfr0dieb.apps.googleusercontent.com",
});

app.use(pinia);
app.use(router);

app.mount("#app");
