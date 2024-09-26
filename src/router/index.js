import { createRouter, createWebHashHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
import Nielle from "../views/Home.vue";
import Contact from "../views/Contact.vue";
// import About from "../views/About.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Nielle,
    meta: { transition: "fade" },
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
    meta: { transition: "fade" },
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    } else return { top: 0, left: 0, behavior: "smooth" };
  },
});

export default router;
