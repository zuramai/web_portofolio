import Vue from 'vue';
import VueRouter from 'vue-router';

import About from './views/About.vue';
import Home from './views/Home.vue';
import Karya from './views/Karya.vue';
import Skills from './views/Skills.vue';
import Contact from './views/Contact.vue';

Vue.use(VueRouter);


const routes = [
    { path: '/', component: Home },
    { path: '/skills', component: Skills },
    { path: '/about', component: About },
    { path: '/karya', component: Karya },
    { path: '/contact', component: Contact },
];

export default new VueRouter({
    mode: 'history',
    routes
})