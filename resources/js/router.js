import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import HomePage from './pages/HomePage.vue';
import PostsPage from './pages/PostsPage.vue';
import SinglePostPage from './pages/SinglePostPage.vue';
import ContactPage from './pages/ContactPage.vue';
import AboutUsPage from './pages/AboutUsPage.vue';
import NotFoundPage from './pages/NotFoundPage.vue';

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
            component: PostsPage
        },
        { 
            path:'/contact',
            name:'contact',
            component: ContactPage
        },
        {
            path:'/about-us', 
            name:'about-us',
            component: AboutUsPage
        },
        {
            path:'/blog/:slug', 
            name:'single-post',
            component: SinglePostPage
        },
        {
            path:'/*', 
            name:'not-found',
            component: NotFoundPage
        },
    ]     
});

export default router;

