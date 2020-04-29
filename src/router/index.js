import Vue from 'vue';
import Router from 'vue-router';
import login from '@/views/login';
import index from '@/views/index';
import site from '@/views/site';
import TrendRpt from '@/views/TrendRpt';

Vue.use(Router);

const router = new Router({
    mode: "history",
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path: '/index',
            name: 'index',
            component: index
        }, {
            path: '/site',
            name: 'site',
            component: site
        }, {
            path: '/TrendRpt',
            name: 'TrendRpt',
            component: TrendRpt
        }
    ]
});

//导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
    //debugger
    if (to.path === '/login') {
        next();
    } else {
        let token = sessionStorage.getItem('Authorization');
        //console.log(token);
        if (!token) {
            next('/login');
        } else {
            next();
        }
    }
});
export default router;