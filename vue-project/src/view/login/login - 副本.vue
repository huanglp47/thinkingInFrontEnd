<template>
    <div>
        <h1>{{userName}},这是login页面啊！！！！！！</h1>
        <h2>这是全局state：{{job}}</h2>
        <h3>登录成功，token：{{token}}</h3>
        <span>测试跨域以及接口层逻辑(vuex使用module时)：</span>
        <el-button @click="gotoLogin">点击登录</el-button>
        <br/>
        <br/>
        <span>测试跨域以及接口层逻辑（vuex不使用module，即全局）：</span>
        <div>获取成功，返回结果：{{configInfo||''}}</div>
        <el-button @click="getConfig">点击获取配置</el-button>
        <br/>
        <br/>

        <a @click="gotoAgreementPage">点击加载协议页面</a>
        <br/>
        <br/>
        <span>测试组件通信：</span>
        <a @click="gotoListPage">点击加载组件通信页面</a>
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
//        麻烦,尽量用以下mapState userName
        return this.$store.state.login.userName
      },
      ...mapState({
//        userName: state=>state.login.userName,
        job:state=>state.global_job,
        configInfo:state=>state.configInfo,
        token: state=>state.login.token
      })
    },
    mounted(){
        console.log('【获取路由参数】：a='+this.$route.query.a); //获取参数。注意$route与$router区别
    },
    methods:{
      ...mapActions([
        'getLogin',
        'getConfigFn'
      ]),
      gotoLogin(){
          //麻烦
//         this.$store.dispatch("getLogin", "token11234566")
        this.getLogin({
          name:'addidas',
          psw:'123456',
          ts: new Date().getTime()
        })
      },
      getConfig(){
        this.getConfigFn({
          name:'addidas',
          psw:'123456',
          ts: new Date().getTime()
        })
      },
      gotoAgreementPage(){
          this.$router.push({
            path: '/login/agreement'
          })
      },
      gotoListPage(){
        this.$router.push({
          path: '/list'
        })
      }
    },
    watch: {
      '$route'(to, from) {
        console.log(to);
        console.log(from);
      }
    },
  //beforeRouteLeave (to, from , next) {
//    const answer = window.confirm('确认退出，未保存的信息将会丢失？')
//    if (answer) {
//      next()
//    } else {
//      next(false)
//    }
  //}
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
