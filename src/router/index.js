// import Vue from "vue";
// import VueRouter from "vue-router";
// import Home from "../views/Home.vue";

// Vue.use(VueRouter);

// const routes = [
//   {
//     path: "/",
//     name: "home",
//     component: Home
//   }
// ];

// const router = new VueRouter({
//   mode: "history",
//   base: process.env.BASE_URL,
//   routes
// });

// export default router;

import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "../views/Layout";
import Home from "../views/Home";
import Category from "../views/Category";
import Customer from "../views/Customer";
import Product from "../views/Product";
import Review from "../views/Review";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "Layout",
    redire: "/home",
    component: Layout,
    children: [
      {
        path: "/home",
        name: "home",
        component: Home
      },
      {
        path: "/category",
        name: "category",
        component: Category
      },
      {
        path: "/product",
        name: "product",
        component: Product
      },
      {
        path: "/customer",
        name: "customer",
        component: Customer
      },
      {
        path: "/review",
        name: "review",
        component: Review
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  // base:process.env.BASE_URL,
  routes
});

export default router;
