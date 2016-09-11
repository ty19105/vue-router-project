import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);


// define some components
var Home = Vue.extend({
  template:
    '<div class="home">' +
      '<h2>这是首页组件</h2>' +
      '<router-view></router-view>' + // <- nested outlet
    '</div>'
})

var Plane = Vue.extend({
    template: '<p>计划</p>'
})

var Detials = Vue.extend({
    template: '<p>计划详情</p>'
})

// configure router
var router = new VueRouter();

router.map({
  '/home': {
    component: Home,
    // add a subRoutes map under /home
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
      }
    }
  }
})
