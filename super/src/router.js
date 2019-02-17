import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
 
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login/Login.vue')
    },
    {
      path: '/',
      name: 'index',
      component: () => import('./views/Index/Index.vue'),
      children:[
        {
          path: '',
          name: 'home',
          component: () => import('./views/Home/Home.vue'), 

        },
        {
          path: '/accountmanage',
          name: 'accountmanage',
          component: () => import('./views/accountmanage/accountmanage.vue'), 

        },
        {
          path: '/accountadd',
          name: 'accountadd',
          component: () => import('./views/accountadd/accountadd.vue'), 

        },
        {
          path: '/passwordmodify',
          name: 'passwordmodify',
          component: () => import('./views/passwordmodify/passwordmodify.vue'), 

        },
        {
          path: '/goodsmanage',
          name: 'goodsmanage',
          component: () => import('./views/goodsmanage/goodsmanage.vue'), 

        },
        {
          path: '/goodsadd',
          name: 'goodsadd',
          component: () => import('./views/goodsadd/goodsadd.vue'), 

        },
        {
          path: '/salestatistics',
          name: 'salestatistics',
          component: () => import('./views/salestatistics/salestatistics.vue'), 

        },
      ]
    },
    

    
  ]
})
