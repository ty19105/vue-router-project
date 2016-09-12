import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Welcome from './components/Welcome.vue';
import Home from './components/Home.vue';
import plan from './components/plan.vue';
import Detials from './components/Detials.vue';
import Editplan from './components/Editplan.vue';

Vue.use(VueRouter)
const router = new VueRouter()

router.map({
    '/': {
        name: 'index',
        component: Welcome
    },
    '/home': {
        name: 'home',
        component: Home
    },
    '/detials': {
        name: 'detials',
        component: Detials
    },
    '/plan': {
        name: 'plan',
        component: plan,
    },
    '/edit/:planId': {
        name: 'edit',
        component: Editplan
    }
})
export default router;
