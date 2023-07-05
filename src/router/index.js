import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: { name: "home" },
  },
  {
    name: "home",
    path: "/home",
    component: () => import("../views/Home.vue"),
  },
  {
    name: "search",
    path: "/search",
    component: () => import("../views/Search.vue"),
  },
  {
    name: "love",
    path: "/love",
    component: () => import("../views/Love.vue"),
  },
  {
    name: "my",
    path: "/my",
    component: () => import("../views/My.vue"),
  },
  {
    name: "setup",
    path: "/setup",
    component: () => import("../views/Setup.vue"),
  },
  {
    name: "about",
    path: "/about",
    component: () => import("../views/About.vue"),
  },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
})