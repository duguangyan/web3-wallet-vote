<template>
  <div>
    <nav class="header">去中心化APP</nav>
    <main>
      <RouterView></RouterView>
    </main>
    <van-tabbar route v-model="activeName" active-color="#ee742f">
      <van-tabbar-item to="/" name="home" icon="wap-home-o">分发票权</van-tabbar-item>
      <van-tabbar-item to="/account" name="account" icon="search">账户信息</van-tabbar-item>
      <van-tabbar-item to="/board" name="board" icon="location-o">投票看板</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup>

import { ref } from 'vue'

let activeName = ref("home")

</script>

<style lang="less">
.header{
  height: 44px;
  line-height: 44px;
  background-color: #ee742f;
  color: #fff;
  text-align: center;
}
</style>
