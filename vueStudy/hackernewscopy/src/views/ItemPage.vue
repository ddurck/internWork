<template>
  <div class="one">
    <h1>{{ msg }}</h1>
    <router-link to="/">return to index</router-link>
    <div>这个是ItemPage</div>

  </div>
</template>

<script>
export default {
  name: 'ItemPage',
  data () {
    return {
      msg: '我是2  ItemPage'
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
