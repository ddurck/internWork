<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <p>导航 ：
       <router-link to="/">首页</router-link>
       <router-link to="/hi">Hi页面</router-link>
       <!-- <router-link :to="{name:''hi, params:{username:'jjj'}}">Hi页面</router-link> -->
       <!-- 通过这个name和组件匹配，而不是通过path。然后取参数的时候： -->
       <!-- {{$route.params.username}} -->
       <router-link to="/hi/hi1">Hi页面1</router-link>
       <router-link to="/hi/hi2">Hi页面2</router-link>
    </p>
    <button @click="goback">后退</button>
    <p>{{$route.name}}</p> // 接收路由传值
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    goback () {
      this.$router.go(-1)
    }
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
