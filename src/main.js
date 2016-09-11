import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import Plane from './components/Plane.vue';
import Detials from './components/Detials.vue';
Vue.use(VueRouter);

var router = new VueRouter();

router.map({
    '/home': {
        component: Home,

        subRoutes: {
            '/': {
                component: {
                    template: '<p>Default sub view for Home</p>'
                }
            },
            '/plane': {
                component: Plane
            },
            '/detials': {
                component: Detials
            },
            '/plane/:planeId': {
                name: 'plane', // 给这条路径加上一个名字
                component: Detials
            }
        }
    }
})

// start app
var App = Vue.extend({});
router.start(App, '#app');
