import { createRouter, createWebHistory } from 'vue-router'
// there is also createWebHashHistory and createMemoryHistory
import Home from '@/pages/Home.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', name: 'home', component: Home},
    {path: '/films', name: 'films', component: ()=> import('@/pages/Films.vue')},
    {path: '/search', name: 'search', component: ()=> import('@/pages/Search.vue')},
    {path: '/serials', name: 'serials', component: ()=> import('@/pages/Serials.vue')},
  ],
  linkActiveClass: 'active'
})

export default router;