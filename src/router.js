import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import Home from './components/Home.vue';
import Plane from './components/Plane.vue';
import Detials from './components/Detials.vue';

Vue.use(VueRouter)
const router = new VueRouter()

router.map({
  '/': {
    name: 'home',
    component: Home
  },
  '/detials': {
      name: 'detials',
      component: Detials
  },
  '/plane': {
    name: 'plane',
    component: Plane
  },
  '/plane/:planeId': {
    name: 'plane',
    component: Detials
  }
})
export default router;
