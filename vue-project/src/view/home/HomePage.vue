<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>登录token：{{token}}</h2>
    <ul>
      <li @click="gotoLoginPage()"><a href="javascript:;">去登陆页面</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data () {
    return {
      msg: 'Welcome to Mixc Manage Systerm'
    }
  },
  computed: {
    token: function() {
      return this.$store.state.login.token
    }
  },
  methods:{
    gotoLoginPage(){
        this.$router.push({
          path:'/login',
          query:{
              a:111
          }
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  font-size: 14px;
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
