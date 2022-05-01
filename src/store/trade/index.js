import { reqTradeInfo,reqAddressInfo,reqSubmitOrder } from "@/api";
const state = {
    addressInfo:[],
    tradeInfo:{},
};
const actions = {
    // 获取地址信息 
    async getAddressInfo({commit}){
        let result = await reqAddressInfo();
        // console.log(result);
        if (result.code == 200) {
            commit('ADDRESSINFO',result.data)
        }
    },
    // 获取用户交易页面的信息
    async getTradeInfo({commit}){
        let result = await reqTradeInfo();
        // console.log(result);
        if (result.code == 200) {
            commit('TRADEINFO',result.data)
        }
    },
};
const mutations={
    ADDRESSINFO(state,addressInfo){
        state.addressInfo = addressInfo;
    },
    TRADEINFO(state,tradeInfo){
        state.tradeInfo = tradeInfo;
    }
};
const getters = {};

export default ({
    state,
    actions,
    mutations,
    getters,
})