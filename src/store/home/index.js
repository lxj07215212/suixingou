// 引入接口函数
import {
    reqCategoryList,
    reqGetBannerList,
    reqFloorList
} from '@/api'
const state = {
    // state里面的初始值不能瞎写，服务器返回的是什么，起始值是什么
    categoryList: [],
    bannerList: [],
    floorList: [],
}
const actions = {
    // 通过API里面的接口函数调用，向服务器发请求，获取服务器的数据
    async categoryList({commit}) {
        let result = await reqCategoryList();
        if (result.code == 200) {
            commit('CATEGORYLIST', result.data)
        }
    },
    async getBannerList({commit}) {
        let result = await reqGetBannerList()
        // console.log(result);
        if (result.code == 200) {
            commit('BANNERLIST', result.data)
        }
    },
    async getFloorList({commit}) {
        let result = await reqFloorList()
        // console.log(result);
        if (result.code == 200) {
            commit('GETFLOORLIST', result.data);
        }
    }
}
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList
    },
    BANNERLIST(state, bannerList) {
        state.bannerList = bannerList
    },
    GETFLOORLIST(state, floorList) {
        state.floorList = floorList
    }
}
// 计算属性
const getters = {}

export default ({
    state,
    actions,
    mutations,
    getters,
})