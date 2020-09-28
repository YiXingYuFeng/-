<template>
    <div id="app">
      this is microApp main
     <BasicLayout/>
  </div>
</template>
<script>
import BasicLayout from "@/layouts/BasicLayout";
export default {
  components: {
    BasicLayout
  },
  created() {
    console.log(process.env);
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
