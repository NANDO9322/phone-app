import { createRouter, createWebHistory } from 'vue-router';
import DialPad from '../components/DialPad.vue';

const routes = [
  {
    path: '/',
    name: 'DialPad',
    component: DialPad
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
