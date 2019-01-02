<template>
    <div>
        <h1>{{userName}},这是login页面</h1>
        <h2>这是全局state：{{job}}</h2>
        <h3>登录成功，token：{{token}}</h3>
        <button @click="gotoLogin">点击登录</button>
    </div>
</template>

<script>
  import {mapState, mapActions } from 'vuex';

export default {
    name: "list",
    data(){
      return {

      }
    },
    computed: {
      ...mapState({
        userName: state=>state.login.userName,
        job:state=>state.job,
        token: state=>state.login.token
      })
    },
    methods:{
      ...mapActions([
        'getLogin'
      ]),
      gotoLogin(){
        // this.$store.dispatch("login/getLogin", "token11234566")
        this.getLogin()
      }
    }
}
</script>

<style lang="scss"  scoped>
  h1,h2,h3{
    font-size: 16px;
  }
</style>
