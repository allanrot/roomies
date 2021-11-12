/*!

 =========================================================
 *  Vue Paper Dashboard PRO Laravel - v1.0.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/vue-paper-dashboard-pro-laravel
 * Copyright Creative Tim (http://www.creative-tim.com) & UPDIVISION (https://www.updivision.com)

 * Coded by www.creative-tim.com & www.invisionapp.com & www.updivision.com
 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import Vue from 'vue'
import './pollyfills'
import VueRouter from 'vue-router'
import VueRouterPrefetch from 'vue-router-prefetch'
import VueNotify from 'vue-notifyjs'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'
import App from './App.vue'
import PerfectScrollbar from 'vue2-perfect-scrollbar'
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'

// Plugins
import GlobalComponents from './globalComponents'
import GlobalDirectives from './globalDirectives'
import SideBar from './components/UIComponents/SidebarPlugin'
import initProgress from './progressbar';

// router setup
import routes from './router/routes'

// library imports

import './assets/sass/paper-dashboard.scss'
import './assets/sass/demo.scss'

import 'src/assets/custom.css';

import sidebarLinks from './sidebarLinks'
import './registerServiceWorker'
import store from "./store";

import VueMeta from 'vue-meta'
import IsDemo from './isDemo'
// plugin setup
Vue.use(VueRouter)
Vue.use(VueRouterPrefetch)
Vue.use(GlobalDirectives)
Vue.use(GlobalComponents)
Vue.use(VueNotify)
Vue.use(SideBar, {sidebarLinks: sidebarLinks})
locale.use(lang)
Vue.use(IsDemo)
Vue.use(VueMeta)
Vue.use(PerfectScrollbar)
// configure router
const router = new VueRouter({
  mode: 'history',
  routes, // short for routes: routes
  linkActiveClass: 'active',
  scrollBehavior: (to) => {
    if (to.hash) {
      return {selector: to.hash}
    } else {
      return { x: 0, y: 0 }
    }
  }
})

// Creates a `nextMiddleware()` function which not only
// runs the default `next()` callback but also triggers
// the subsequent Middleware function.
function nextFactory(context, middleware, index) {
  const subsequentMiddleware = middleware[index];
  // If no subsequent Middleware exists,
  // the default `next()` callback is returned.
  if (!subsequentMiddleware)
    return context.next;

  return (...parameters) => {
    // Run the default Vue Router `next()` callback first.
    context.next(...parameters);
    // Then run the subsequent Middleware with a new
    // `nextMiddleware()` callback.
    const nextMiddleware = nextFactory(context, middleware, index + 1);
    subsequentMiddleware({...context, next: nextMiddleware});
  };
}

router.beforeEach((to, from, next) => {

  if (to.meta.middleware) {
    const middleware = Array.isArray(to.meta.middleware) ? to.meta.middleware : [to.meta.middleware];
    const context = {from, next, to, router};
    const nextMiddleware = nextFactory(context, middleware, 1);

    return middleware[0]({...context, next: nextMiddleware});
  }

  return next();
});

export default router;

initProgress(router);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router: router,
  store: store
})
