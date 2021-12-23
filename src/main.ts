import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { store, key } from "./store";
import plugins from "./plugins";
import LazyLoadImage from "./directives/lazy-load-images";

createApp(App)
  .directive("lazy-load", LazyLoadImage)
  .use(store, key)
  .use(router)
  .use(plugins)
  .mount("#app");
