import { createRouter, createMemoryHistory } from 'vue-router';
import DialPad from '../components/DialPad.vue';

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    {
      path: '/',
      name: 'DialPad',
      component: DialPad
    }
  ]
});

export default router;
