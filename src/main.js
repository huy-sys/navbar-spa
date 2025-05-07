import { h, createApp } from "vue";
import singleSpaVue from "single-spa-vue";

import App from "./App.vue";
import router from "./route";
import PrimeVue from "primevue/config";
import "primevue/resources/themes/aura-light-green/theme.css"; // hoặc theme khác
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

const vueLifecycles = singleSpaVue({
  createApp,
  appOptions: {
    render() {
      return h(App, {
        // single-spa props are available on the "this" object. Forward them to your component as needed.
        // https://single-spa.js.org/docs/building-applications#lifecycle-props
        // if you uncomment these, remember to add matching prop definitions for them in your App.vue file.
        /*
        name: this.name,
        mountParcel: this.mountParcel,
        singleSpa: this.singleSpa,
        */
      });
    },
  },
  handleInstance(app) {
    app.use(router);
    app.use(PrimeVue);
  },
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
