import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import HomePage from './pages/HomePage.vue';
import BlogPage from './pages/BlogPage.vue';
import ContactPage from './pages/ContactPage.vue';
import AboutUsPage from './pages/AboutUsPage.vue';

const router = new VueRouter({
    mode: "history",
    routes:[ 
        { 
            path:'/',
            name:'home',
            component: HomePage
        },
        { 
            path:'/blog',
            name:'blog',
            component: BlogPage
        },
        { 
            path:'/contact',
            name:'contant',
            component: ContactPage
        },
        {
            path:'/aboutus', 
            name:'aboutus',
            component: AboutUsPage
        },
    ]     
});

export default router;

