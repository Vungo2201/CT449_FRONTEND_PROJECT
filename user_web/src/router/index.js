import { createWebHistory, createRouter } from "vue-router";
import Product from "@/views/Product.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component:() => import("@/views/Home.vue"),
    },
    {
    path: "/product",
    name: "product",
    component: Product,
    },
    {
        path: "/:pathMath(.*)*",
        name: "notfound",
        component: () => import("@/views/NotFound.vue"),
    },
    {
        path: "/products/:id",
        name: "product.detail",
        component: () => import("@/views/ProductDetail.vue"),
        props: true 
    },
    {
        path: "/login",
        name: "user.login",
        component: () => import("@/views/Login.vue"),
        props: true 
    },
    {
        path: "/signup",
        name: "user.signup",
        component: () => import("@/views/Signup.vue"),
        props: true 
    },
    {
        path: "/order",
        name: "order",
        component: () => import("@/views/Order.vue"),
        props: true 
    },
    {
        path: "/cart",
        name: "cart",
        component: () => import("@/views/Cart.vue"),
        props: true 
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;