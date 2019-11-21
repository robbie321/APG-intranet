import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";


Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "home",
    component: Home
  },
  // {
  //   path: "/admin",
  //   component: Admin
  // },
  // {
  //   path: "/JAG",
  //   component: JAG
  // },
  // {
  //   path: "/HR",
  //   component: HR
  // },
  // {
  //   path: "/SupplyChain",
  //   component: supplyChain
  // },
  // {
  //   path: "/Finance",
  //   component: Finance
  // },
  // {
  //   path: "/IT",
  //   component: IT
  // },
  // {
  //   path: "/PrivateLabel",
  //   component: privateLabel
  // },
  // {
  //   path: "/ShanghaiVietnam",
  //   component: shanghaiVietnam
  // },
  // {
  //   path: "/Qlikview",
  //   component: Qlikview
  // },
  // {
  //   path: "/Applications",
  //   component: Applications
  // },
  // {
  //   path: "/APGLearning",
  //   component: APGLearning
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;