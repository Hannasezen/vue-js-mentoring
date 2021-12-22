import { App } from "vue";
import Modal from "./Modal.vue";

interface Book {
  title: string;
  author: string;
  year: number;
}

export default {
  install: (app: App, options?: Book): void => {
    app.component("abstract-modal", Modal);
  },
};
