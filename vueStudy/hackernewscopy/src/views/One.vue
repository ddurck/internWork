<template>
  <div class="one">
    <h1>{{ msg }}</h1>
    <div>动态传参</div>
    <div>id：{{$route.params.id}}</div>
    <router-link to="/">return to index</router-link>

  </div>
</template>

<script>
export default {
  name: 'One',
  data () {
    return {
      msg: '我是1'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
