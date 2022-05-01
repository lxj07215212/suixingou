import axios from "axios";
// 引入进度条
import nprogress from "nprogress";
// 引入进度条样式
import 'nprogress/nprogress.css'
//引入仓库
import store from "@/store"; 

// console.log(nprogress);
const requests = axios.create({
    baseURL:'/api',
    timeout:5000
});
// 添加请求拦截器
requests.interceptors.request.use((config)=>{
  // console.log(store);
  if (store.state.detail.uuid_token) {
    // 在请求头上添加一个字段：这个字段布恩那个瞎写，和后端保持一致
    config.headers.userTempId = store.state.detail.uuid_token
  }
  // 获取用户信息，将登陆时的token带给服务器
  if(store.state.user.token){
    config.headers.token = store.state.user.token
  }
    nprogress.start()
    return config;
});

// 添加响应拦截器
requests.interceptors.response.use( (response) =>{
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    nprogress.done();
    return response.data;
  }, (error)=> {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
  })
export default requests;