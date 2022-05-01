// 配置路由
import Vue from "vue";
// 引入路由
import VueRouter from "vue-router";
// 使用路由
Vue.use(VueRouter)
// 
import routes from "./routers";

//引入仓库
import store from '@/store'

// 先将原始的push和replace备份
let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace

// // 重写push和replace方法
VueRouter.prototype.push = function(location,resolve,reject){
    if (resolve && reject) {
        originPush.call(this,location,resolve,reject)
    } else {
        originPush.call(this,location,()=>{},()=>{})
    }
}
VueRouter.prototype.replace = function(location,resolve,reject){
    if (resolve && reject) {
        originReplace.call(this,location,resolve,reject)
    } else {
        originReplace.call(this,location,()=>{},()=>{})
    }
}
let router = new VueRouter({
    routes,
    // 当路由跳转时页面处于顶端位置
    scrollBehavior (to, from, savedPosition) {
        // return 期望滚动到哪个的位置
        return {y:0}
    }
})
// 导航守卫
router.beforeEach(async (to, from, next) => {
    // console.log(store.state.user.token);
    // 用户登陆了
   if (store.state.user.token) {
    //    登陆过后不能在向login页面跳转
    if (to.path === '/login') {
        next('/')
    }else{
        // 已经登陆了，并且访问的是非登录页面
        if(store.state.user.userInfo.name){
            next()
        }else{
            // 登陆过后没有用户信息
            // 在路由跳转之前获取用户的信息
            try {
                await store.dispatch('userInfo')
                next()
            } catch (error) {
                //如果没有用户信息说明 token失效
                // 所以需要重新登陆
                // 重新登陆需要清除token信息（调用退出登录里的removeToken）
                store.dispatch('userLogOut')
                next()
            }
        }
    }
   } else {
    // 用户未登录  不能去【trade||pay||paySuccess||center】
        if (to.path.indexOf('/trade')!=-1||to.path.indexOf('/pay')!=-1||to.path.indexOf('/center')!=-1) {
            next('/login?redirect=' + to.path)
        }
       next()
   }
   
   
})


export default router;