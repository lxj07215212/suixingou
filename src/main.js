import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from '@/router'
// 三级联动注册全局组件
import TypeNav from "@/components/TypeNav";
import Carousel from "@/components/Carousel";
import Pagination from "@/components/Pagination";
// 使用全局组件----第一个参数全局组件的名字，第二个参数哪一个组件
Vue.component(TypeNav.name,TypeNav)
Vue.component(Carousel.name,Carousel)
Vue.component(Pagination.name,Pagination)

// 引入mock模拟数据
import '@/mock/mockServe'

// 引入swiper样式
import 'swiper/css/swiper.css'
Vue.config.productionTip = false
// 引入vuex
import store from '@/store'
import * as API from '@/api/index'

//引入elementUI
import { Button,MessageBox } from 'element-ui';

//引入图片懒加载
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload,{loading:heart}) 
// 引入加载时的动图
import heart from '@/assets/heart.gif'

//引入表单验证插件vee-validate
import '@/plugins/validate' 

Vue.component(Button.name, Button)
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;

new Vue({
  render: h => h(App),
  // 注册路由：底下的写法kv一致，所以省略v
  // 注册路由信息：这里书写router的时候，组件身上都有$route和$router
  router,
  // 注册Vuex
  store,
  // 注册全局事件总线
  beforeCreate(){
     Vue.prototype.$bus = this
     Vue.prototype.$API = API
  }
}).$mount('#app')
