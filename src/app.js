import Vue from "vue";
import VueRouter from "vue-router";
import AppShell from "./appShell.vue";
import Vegetables from './vegetables/index.vue';
import Fruits from './fruits/index.vue';
import Meats from "./meats/index.vue";

Vue.use(VueRouter);

let router = new VueRouter({
  mode: "history",
  linkExactActiveClass: "is-active",
  routes: [
    { path: "/", component: Vegetables },
    { path: "/fruits", component: Fruits },
    { path: "/meats", component: Meats }
  ]
});

new Vue({
  router,
  el: "#app",
  render: (h) => h(AppShell)
});
