import { createRouter, createWebHistory } from "vue-router";

import HomePage from './pages/HomePage.vue'
import Portfolio from './pages/Portfolio.vue'
import SingleProject from './pages/SingleProject.vue'
import ContactUs from './pages/ContactUs.vue'
import NotFound from './pages/NotFound.vue'





const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path:'/',
            name: 'home',
            component: HomePage,
        },
        {
            path:'/portfolio',
            name: 'portfolio',
            component: Portfolio,
        },
        {
            path:'/portfolio/:slug',
            name: 'single-project',
            component: SingleProject,
        },
        {
            path:'/contact-us',
            name: 'contact-us',
            component: ContactUs,
        },
        {
            path:'/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFound,
        },
    ]
})

export {router}