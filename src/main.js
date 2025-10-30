import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//vue-data-ui
import "vue-data-ui/style.css";
import { VueUiRadar } from "vue-data-ui";
import VueUiXy from "vue-data-ui/vue-ui-xy";

const app = createApp(App);
app.use(store);
app.use(router);
app.component("VueUiRadar", VueUiRadar);
app.component("VueUiXy", VueUiXy);
app.mount("#app");
