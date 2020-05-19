import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import News from '../views/News.vue';
import Test from '../views/test.vue';
import Maps from '../views/maps.vue';
import About from '../views/About.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/News',
    name: 'News',
    component: News,
  },
  {
    path: '/Test',
    name: 'Test',
    component: Test,
  },
  {
    path: '/Maps',
    name: 'Maps',
    component: Maps,
  },
  {
    path: '/About',
    name: 'About',
    component: About,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
