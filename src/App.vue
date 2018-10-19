<template>
  <div id="app">
    <Header></Header>
    <div class="main">
      <router-view name="aside"></router-view>
      <router-view name="main"></router-view>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'


export default {
  name: 'App',
  components: {
    Header,
    
  }
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
}
body{
  background-color: #e1e1e1;
}
.main{
  width: 80%;
  margin: 0 auto;
}
</style>
