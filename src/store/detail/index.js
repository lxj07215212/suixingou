import {
    reqGetDetailList,reqUpdateShopCart
} from "@/api"
// 风黄钻游客身份uuid----生成一个随机字符串
import {getuuid} from '@/utils/uuid_token'
const state = {
    detailList: {},
    // 游客身份uuid
    uuid_token:getuuid()
}
const actions = {
    async getDetailInfo({
        commit
    }, skuId) {
        let result = await reqGetDetailList(skuId)
        //    console.log(result);
        if (result.code == 200) {
            commit('DETAILLIST', result.data)
        }
    },
    // 请求购物车数据
    async updateShopCart({commit},{skuId,skuNum}) {
        let result = await reqUpdateShopCart(skuId,skuNum)
        if (result.code == 200) {
            return "ok"
        }else{
            return Promise.reject(new Error('Fail'))
        }
    },
    
}
const mutations = {
    DETAILLIST(state, detailList) {
        state.detailList = detailList;
    }
}
// 计算属性，在项目中，为了监护数据而生
// 可以把我们将来所用的数据进行简化
const getters = {
    // 当前形参state，是当前仓库中的state，而不是大仓库中的state
    categoryView(state){
        // 
        return state.detailList.categoryView||{}
    },
    skuInfo(state){
        return state.detailList.skuInfo||{}
    },
    spuSaleAttrList(state){
        return state.detailList.spuSaleAttrList||{}
    },
}
export default ({
    state,
    actions,
    mutations,
    getters,
})