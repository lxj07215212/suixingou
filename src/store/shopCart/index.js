import { reqShopCart,reqDeleteCart,reqIsCheckedCart } from "@/api"
const state={
    shopCartList:[]
}
const actions={
    async getShopCart({commit}){
        let result = await reqShopCart();
        // console.log(result)
        if (result.code==200) {
            commit('GETSHOPCART',result.data)
        }
        // console.log(result.data);
    },
    async getDeleteCart({commit},skuId){
        let result = await reqDeleteCart(skuId);
        // console.log(result);
        if (result.code == 200) {
            return "ok"
        }else{
            return Promise.reject(new Error('Fail'))
        }
    },
    //切换商品状态  
    async getIschecked({commit},{skuId,isChecked}){
        let result = await reqIsCheckedCart(skuId,isChecked)
        if (result.code == 200) {
            return "ok"
        }else{
            return Promise.reject(new Error('Fail'))
        }
    },
    // 删除所有选中的商品
    updateAllChecked({dispatch,getters}){
        let promiseAll = []
        // console.log(context);
        // context相当以一个小仓库，
        // 里面有：commit【提交mutations数据给state】，dispatch【派发action】，state【当前仓库数据】
        // getters【计算属性】
        getters.cartList.cartInfoList.forEach(item => {
            let promise =  item.isChecked==1?dispatch("getDeleteCart",item.skuId):'';
            // console.log(result); 返回的结果会promise
            promiseAll.push(promise)
        });
        // 如果全部成功，返回的结果为成功，如果有一个失败，返回的结果即为失败
        return Promise.all(promiseAll)
    },
    // 全选按钮
    allChecked({dispatch,state},isChecked){
        // console.log(state);
        let promiseAll = []
        state.shopCartList[0].cartInfoList.forEach(item => {
            let promise = dispatch("getIschecked",{skuId:item.skuId,isChecked});
            // console.log(result); 返回的结果会promise
            promiseAll.push(promise)
        });
        // 如果全部成功，返回的结果为成功，如果有一个失败，返回的结果即为失败
        return Promise.all(promiseAll)
    }
   
}
const mutations={
    GETSHOPCART(state,shopCartList){
        state.shopCartList = shopCartList
    }
}
const getters={
    cartList(){
        return state.shopCartList[0]||{}
    },
    // cartInfoList(){
    //     state.
    // }
}

export default ({
    state,
    actions,
    mutations,
    getters,
})