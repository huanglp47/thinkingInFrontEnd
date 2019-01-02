<template>
    <div>
        <h1>{{userName}},这是login页面</h1>
        <h2>这是全局state：{{job}}</h2>
        <h3>登录成功，token：{{token}}</h3>
        <button @click="gotoLogin">点击登录</button>
    </div>
</template>

<script>
  import {mapState} from 'vuex';

export default {
    name: "list",
    data(){
      return {
        token:''
      }
    },
    computed: {
      ...mapState([{
        userName: state=>state.login.userName
      },'job'])
    },
    methods:{
      gotoLogin(){
        this.$store.dispatch("getLogin", "token11234566")
      }
    }
}
</script>

<style lang="scss"  scoped>
  h1,h2,h3{
    font-size: 16px;
  }
</style>
