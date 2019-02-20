<template>
  <div id="app">
    <!--<最外层view,适合添加全局性view-->
    <!--<img src="./assets/logo.png">-->

    <router-view/>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  @import 'assets/css/common.css';
</style>
