<template>
  <div>
      <!-- 三级联动全局组件 -->
    <TypeNav />
    <!--  -->
    <ListContainer />
    <TodayRecommend />
    <Rank />
    <Like />
    <Floor v-for="floor in floorList" :key="floor.id" :floor="floor"/>
    <Brand />
  </div>
</template>

<script>
import ListContainer from "@/pages/Home/ListContainer";
import TodayRecommend from "@/pages/Home/TodayRecommend";
import Like from "@/pages/Home/Like";
import Rank from "@/pages/Home/Rank";
import Floor from "@/pages/Home/Floor";
import Brand from "@/pages/Home/Brand";
// 
import {mapState} from 'vuex'
export default {
  name: "Home",
  components: { ListContainer,TodayRecommend,Like,Rank,Floor,Brand},
  mounted(){
    // 派发action
      this.$store.dispatch("getFloorList");
  },
  // 获取服务器的数据
  computed:{
    ...mapState({
      floorList:(state) =>state.home.floorList,
      // token:(state) => state.user.token
    })
  }
};
</script>

<style>
</style>