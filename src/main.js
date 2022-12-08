import { createApp } from "vue";
import { createPinia } from "pinia";
import { markRaw } from "vue";
import vue3GoogleLogin from "vue3-google-login";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "sweetalert2";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);

pinia.use(({ store }) => {
  store.router = markRaw(router);
});

app.use(vue3GoogleLogin, {
  clientId:
    "884275666991-gmfbi1umulpr11i99spasngtu6vkt1rh.apps.googleusercontent.com",
});

app.mount("#app");
