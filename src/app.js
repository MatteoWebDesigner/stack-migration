import Vue from "vue";
import VueRouter from "vue-router";
import AppShell from "./appShell.vue";
import Meats from "./meats/index.vue";

Vue.use(VueRouter);

let router = new VueRouter({
  mode: "history",
  linkExactActiveClass: "is-active",
  routes: [
    { path: "/meats", component: Meats }
  ]
});

new Vue({
  router,
  el: "#app",
  render: (h) => h(AppShell)
});
