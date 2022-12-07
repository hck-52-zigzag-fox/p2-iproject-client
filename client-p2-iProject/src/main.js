import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import App from "./App.vue";
import router from "./router";
import vue3GoogleLogin from "vue3-google-login";

import "./assets/styles.css";

const app = createApp(App);
const pinia = createPinia();

pinia.use(({ store }) => {
  store.router = markRaw(router);
});

app.use(vue3GoogleLogin, {
  clientId:
    "775756423500-iqack5nfdtjq43tpii2nldmrc7tlrud0.apps.googleusercontent.com",
});

app.use(pinia);
app.use(router);
app.mount("#app");
