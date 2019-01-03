<template>
    <div>
        <h1>{{userName}},这是login页面</h1>
        <h2>这是全局state：{{job}}</h2>
        <h3>登录成功，token：{{token}}</h3>
        <button @click="gotoLogin">点击登录</button>
        <br/>
        <br/>
        <a @click="gotoAgreementPage">点击加载协议页面</a>

    </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex';

export default {
    name: "list",
    data(){
      return {
      }
    },
    computed: {
      userName: function() {
//        麻烦,尽量用以下mapState
        return this.$store.state.login.userName
      },
      ...mapState({
//        userName: state=>state.login.userName,
        job:state=>state.global_job,
        token: state=>state.login.token
      })
    },
    mounted(){
        console.log('【获取路由参数】：a='+this.$route.query.a); //获取参数。注意$route与$router区别
    },
    methods:{
      ...mapActions([
        'getLogin'
      ]),
      gotoLogin(){
          //麻烦
//         this.$store.dispatch("getLogin", "token11234566")
        this.getLogin({
          name:'addidas',
          psw:'123456'
        })
      },
      gotoAgreementPage(){
          this.$router.push({
            path: '/login/agreement'
          })
      }
    },
    watch: {
      '$route'(to, from) {
        console.log(to);
        console.log(from);
      }
    },
  beforeRouteLeave (to, from , next) {
    const answer = window.confirm('确认退出，未保存的信息将会丢失？')
    if (answer) {
      next()
    } else {
      next(false)
    }
  }
}
</script>

<style lang="scss"  scoped>
  h1,h2,h3{
    font-size: 16px;
  }
  a{
    color: #199e54;
    text-decoration: underline;
  }
</style>
