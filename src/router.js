import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router);

let router = new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            redirect:'/loan'
        },
        {
            path: '/',
            name: 'home',
            component: Home,
            children:[
                {
                    path: '/loan',
                    component: () => import(/* webpackChunkName: "about" */ './views/Loan.vue'),
                    meta: { title: '贷款大全' }
                }]
        },
    ]
})


router.beforeEach((to,form,next)=>{
    document.title =to.meta.title;
    next()
})

    export default router
