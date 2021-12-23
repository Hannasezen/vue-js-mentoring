import { App } from "vue";
import Modal from "./Modal.vue";

export default {
  install: (app: App): void => {
    app.component("abstract-modal", Modal);

    app.mixin({
      methods: {
        getYear(date: string): string {
          if (!date) return "";
          const newDate: Date = new Date(date);
          return `${newDate.getFullYear()}`;
        },
      },
    });
  },
};
