import { reqSearchInfo } from "@/api"
const state = {
    searchData:{},
}
const actions = {
    async reqSearch({commit},params={}){
        let result = await reqSearchInfo(params)
        // console.log(result);
        if(result.code ==200){
            commit("REQSEARCH",result.data)
        }
    }
}
const mutations = {
    REQSEARCH(state,searchData){
        state.searchData = searchData
    }
}
// 计算属性，在项目中，为了监护数据而生
// 可以把我们将来所用的数据进行简化
const getters = {
    // 当前形参state，是当前仓库中的state，而不是大仓库中的state
    attrsList(state){
        // 如果没网或者网慢，state.searchData.attrsList会返回undefined，所以||[],至少会返回一个数组
        return state.searchData.attrsList||[];
    },
    goodsList(state){
        return state.searchData.goodsList||[];
    },
    trademarkList(state){
        return state.searchData.trademarkList||[];
    },

}



export default ({
    state,
    actions,
    mutations,
    getters,
})