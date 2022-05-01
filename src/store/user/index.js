import {reqUserCode,reqUserRegister,reqUserLogin,reqUserInfo,reqLogOut} from '@/api'
import{getToken, setToken,removeToken} from '@/utils/token'
const state={
    usercode:'',
    token: getToken(),
    userInfo:{},
}
const actions={
    // 获取验证码
    async getUserCode({commit},phone){
        let result =  await reqUserCode(phone)
        if (result.code==200) {
            commit('GETCODE',result.data)
            return 'ok'
        }else{
            return Promise.reject(new Error('Fail'))
        }
    },
    // 注册用户
    async userRegister({ commit }, user) {
        let result = await reqUserRegister(user);
        if (result.code==200) {
            return 'ok'
        }else{
            return Promise.reject(new Error('Fail'))
        }
      },
    // 用户登录
    async userLogin ({commit},data){
        let result = await reqUserLogin(data)
        // console.log(result);
        if (result.code==200) {
            // 服务器下发token，表示用户唯一id
            // 将来经常通过token找服务器要用户信息进行展示
            commit('USERLOGIN',result.data.token);
            // 获取永久的token
            setToken(result.data.token)
            return 'ok'
        }else{
            return Promise.reject(new Error('Fail'))
        }
    },
    //获取用户信息
    async userInfo({commit}){
        let result = await reqUserInfo();
        // console.log(result);
        if (result.code == 200) {
         commit('USERINFO',result.data)  
         return 'ok' 
        }
        else{
            return Promise.reject(new Error('Fail'))
        }
    },
    // 退出登录
    async userLogOut({commit}){
        let result = await reqLogOut();
        console.log(result);
        if (result.code==200) {
            commit('CLEARINFO')
            return 'ok'
        }
        else{
            return Promise.reject(new Error('Fail'))
        }
    }
      
}
const mutations={
    GETCODE(state,usercode){
        state.usercode = usercode
    },
    USERLOGIN(state,token){
        state.token = token
    },
    USERINFO(state,userInfo){
        state.userInfo = userInfo
    },
    CLEARINFO(state){
        state.token = '',
        state.userInfo={},
        removeToken()
    }
}
const getters={}

export default({
    state,
    actions,
    mutations,
    getters
})