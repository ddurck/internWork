<template>
  <div id="app">
    <header class="header">
      <nav class="nav">
        <router-link to="/dev">dev</router-link>
        <router-link to="/job">job</router-link>
         <router-link to="/one/1">one</router-link>
      </nav>
    </header>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  position: absolute;
    width: 100%;
  height: 100%;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.header {
  background-color: aqua;
  padding: 1rem;
  text-align: left;
  font-size: 1.5rem;
      width: 100%;
  height: 100%;
}

a {
  margin-left: 1rem;
}
a:link,
a:visited {
  color: black;
}

.foot {
margin-top: 30rem;
}
</style>
