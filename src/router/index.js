import {createRouter, createWebHistory} from "vue-router";

// Set all routes
const routes = [
    {
        path: "/",
        name: "product",
        component: () => import("../pages/ProductList.vue"),
    },
    {
        path: "/create/product",
        name: "create-product",
        component: () => import("../pages/CreateProduct.vue"),
    },
    {
        path: "/update/product/:id",
        name: "update-product",
        props:true,
        component: () => import("../pages/UpdateProduct.vue"),
    },
];

// Create Router
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
