import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";
import vue3GoogleLogin from "vue3-google-login";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import App from "./App.vue";
import router from "./router";
const pinia = createPinia();
// import './assets/main.css'
const app = createApp(App);

app.use(vue3GoogleLogin, {
  clientId:
    "1030164179998-g650o6cciuiuhjsm5a28ma3snhbtneda.apps.googleusercontent.com",
});

pinia.use(({ store }) => {
  store.router = markRaw(router);
});

app.use(pinia);
app.use(router);

app.mount("#app");
