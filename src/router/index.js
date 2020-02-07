//导入vue
import Vue from 'vue';
//导入路由
import VueRouter from 'vue-router';
import ceshi from '../components/ceshi.vue'
//注册路由
Vue.use(VueRouter)

//创建路由规则
const routes=[
    {
        path:'/info',
        component:ceshi
    }
];
//创建路由对象
const router =new VueRouter({
    routes
})
//暴露出去
export default router