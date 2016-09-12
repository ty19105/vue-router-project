import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import Home from './components/Home.vue';
import Plane from './components/Plane.vue';
import Detials from './components/Detials.vue';
import EditPlane from './components/EditPlane.vue';

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
        component: Plane,
    },
    '/edit/:planeId': {
        name: 'edit',
        component: EditPlane
    }
})
export default router;
