import { createRouter, createMemoryHistory } from 'vue-router';
import Inicial from '../components/Inicial.vue';

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    {
      path: '/',
      name: 'Inicial',
      component: Inicial
    }
  ]
});

export default router;
