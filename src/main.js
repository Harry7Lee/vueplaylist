import Vue from "vue";
import App from "./App.vue";
import Ninjas from "./ninja.vue";

export const bus = new Vue();
Vue.component("Header", Ninjas);

new Vue({
  el: "#app",
  render: h => h(App)
});
