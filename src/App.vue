<template>
  <div id="app">
    <Header></Header>
    <!-- 路由组件展示区 -->
    <router-view></router-view>
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: { Header,Footer, },
  mounted(){
    // 将请求道的数据放在跟组件中，只想服务器发起一次请求，优化性能
    this.$store.dispatch("categoryList");
    // console.log(this);VueComponent
  }
}
</script>

<style>

</style>
