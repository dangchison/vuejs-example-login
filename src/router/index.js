import Vue from 'vue'
import Router from 'vue-router'
import HomeComp from '@/components/home'
import LoginComp from '@/components/login'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeComp,
      meta: {
        isAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginComp
    }
  ]
})

router.beforeEach((to, form, next) => {
  if (to.meta.isAuth) {
    if (localStorage.getItem('sdc_token')) {
      next();
    } else {
      next({
        name: 'login'
      });
    }
  } else {
    next();
  }
});

export default router
