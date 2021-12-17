import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import LazyLoadImage from "./directives/LazyLoadImage";

createApp(App)
  .directive("lazy-load", LazyLoadImage)
  .use(store)
  .use(router)
  .mount("#app");
