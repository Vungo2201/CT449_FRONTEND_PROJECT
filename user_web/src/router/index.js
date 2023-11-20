import { createWebHistory, createRouter } from "vue-router";
import Product from "@/views/Product.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component:() => import("@/views/Home.vue"),
    },
    {
    path: "/",
    name: "product",
    component: Product,
    },
    {
        path: "/products",
        name: "product.add",
        component: () => import("@/views/ProductAdd.vue"),
        props: true
    },
    {
        path: "/:pathMath(.*)*",
        name: "notfound",
        component: () => import("@/views/NotFound.vue"),
    },
    {
        path: "/products/:id",
        name: "product.edit",
        component: () => import("@/views/ProductEdit.vue"),
        props: true 
    },
    {
        path: "/admin",
        name: "admin.login",
        component: () => import("@/views/Login.vue"),
        props: true 
    },
    {
        path: "/order",
        name: "order",
        component: () => import("@/views/Order.vue"),
        props: true 
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;