import axios from "axios";
// 引入进度条
import nprogress from "nprogress";
// 引入进度条样式
import 'nprogress/nprogress.css'
// console.log(nprogress);
const requests = axios.create({
    baseURL:'/mock',
    timeout:5000
});
// 添加请求拦截器
requests.interceptors.request.use((config)=>{
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