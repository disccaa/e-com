import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      // component: HomeView
    },
    {
      path: "/male",
      name: "male",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Male.vue')
    },
    {
      path: "/all",
      name: "all",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AllProd.vue')
    },
    {
      path: "/product/:id",
      name: "product",

      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Product.vue'),
      props: route =>({id: route.params.id})

    },
    {
      path: "/pagination",
      name: "pagination",

      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Pagination.vue'),
   

    }
  ],
});

export default router;
