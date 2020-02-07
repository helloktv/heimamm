<template>
  <div id="app">
    <router-link to="info">这是测试</router-link>
     <el-button type="success">成功按钮</el-button>
    <HelloWorld />
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>

</style>
