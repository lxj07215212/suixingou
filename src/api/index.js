// 这个文件：所有的api接口进行统一管理

import requests from "./ajax";
// 
import mockRequests from "./mockAjax";

// 三级联动接口
// 请求地址：/api/product/getBaseCategoryList   请求方式：GET
export const reqCategoryList = ()=> requests.get('/product/getBaseCategoryList')
// 暴露轮播图的请求接口
export const reqGetBannerList = ()=> mockRequests.get('/banner')
// 暴露轮播图的请求接口
export const reqFloorList = ()=> mockRequests.get('/floor')
// search
export const reqSearchInfo = (params)=>requests({url:'/list',method:'post',data:params})
// 商品详情 请求地址/api/item/{ skuId }   GET
export const reqGetDetailList = (skuId)=> requests({url:`/item/${ skuId }`,method:'get'})

// 加入购物车的请求  /api/cart/addToCart/{ skuId }/{ skuNum }  POST  
export const reqUpdateShopCart = (skuId,skuNum)=>requests({url:`/cart/addToCart/${ skuId }/${ skuNum }`,method:'post'})

// 获取购物车列表  /api/cart/cartList   GET
export const reqShopCart = ()=>requests.get('/cart/cartList')

// 删除购物车商品/api/cart/deleteCart/{skuId}  DELETE
export const reqDeleteCart = (skuId)=>requests({url:`/cart/deleteCart/${skuId}`,method:'DELETE'})

// 切换商品请求状态  /api/cart/checkCart/{skuID}/{isChecked}

export const reqIsCheckedCart = (skuId,isChecked)=>requests({url:`/cart/checkCart/${skuId}/${isChecked}`,method:'GET'})

// 获取验证码
// /api/user/passport/sendCode/{phone}  get
export const reqUserCode = (phone)=>requests({url:`/user/passport/sendCode/${phone}`,method:'get'})

// 用户注册
// /api/user/passport/register  POST  phone|password|code  post
export const reqUserRegister = (data)=>requests({url:"/user/passport/register",data,method:"post"})

// 登录  /api/user/passport/login post
export const reqUserLogin = (data)=>requests({url:'/user/passport/login',data,method:"post"})

// 获取用户信息  需要带着用户的token  /user/passport/auth/getUserInfo
export const reqUserInfo = ()=>requests({url:'/user/passport/auth/getUserInfo',method:'get'})

// 退出登录的接口 /api/user/passport/logout  get
export const reqLogOut = ()=>requests({url:'/user/passport/logout',method:'get'})

// 获取地址信息  /api/user/userAddress/auth/findUserAddressList  get 
export const reqAddressInfo = ()=>requests({url:'/user/userAddress/auth/findUserAddressList',method:'get'})

// 获取用户交易页面的信息  /api/order/auth/trade get
export const reqTradeInfo = ()=>requests({url:'/order/auth/trade',method:'get'})

// 提交订单 /api/order/auth/submitOrder?tradeNo={tradeNo}
export const reqSubmitOrder = (tradeNo,data)=>requests({url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,data,method:'post'})

// 获取订单信息
// /api/payment/weixin/createNative/{orderId}  get
export const  reqOrderInfo = (orderId)=>requests({url:`/payment/weixin/createNative/${orderId}`,method:'get'})

// 14.查询支付订单状态  /api/payment/weixin/queryPayStatus/{orderId} get
export const reqPaymentInfo = (orderId)=>requests({url:`/payment/weixin/queryPayStatus/${orderId}`,method:'get'})

// 获取我的订单信息  /api/order/auth/{page}/{limit} get
export const reqMyOrder = (page,limit) =>requests({url:`/order/auth/${page}/${limit}`,method:'get'}) 