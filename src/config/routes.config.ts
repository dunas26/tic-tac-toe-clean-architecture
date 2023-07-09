import { App } from "vue"
import { createRouter, createWebHistory } from "vue-router";

export const buildMainRouter = () => {
    return createRouter({
        history: createWebHistory(),
        routes: [
            { path: '/', redirect: '/home' },
            { path: '/home', component: () => import('../presentation/layout/Home.vue') },
            { path: '/:path(.*)*', name: 'Not Found', component: () => import('../presentation/layout/404.vue') }
        ]
    })
}

export const buildRoutes = (app: App) => {
    const mainRouter = buildMainRouter();
    app.use(mainRouter);
}