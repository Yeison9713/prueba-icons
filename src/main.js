import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";

Vue.config.productionTip = false;

import Ionic from "@ionic/vue";
import "@ionic/core/css/ionic.bundle.css";
Vue.use(Ionic);

import { addIcons } from "ionicons";
import * as allIcons from "ionicons/icons";
console.log(allIcons);

const currentIcons = Object.keys(allIcons).map((i) => {
  const key = i.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
  if (typeof allIcons[i] === "string") {
    return {
      [key]: allIcons[i],
    };
  }
  return {
    ["ios-" + key]: allIcons[i].ios,
    ["md-" + key]: allIcons[i].md,
  };
});

const iconsObject = Object.assign({}, ...currentIcons);
console.log(iconsObject);
addIcons(iconsObject);
// Vue.config.ignoredElements = [/^ion-/];

new Vue({
  router,
  render: function(h) {
    return h(App);
  },
}).$mount("#app");
