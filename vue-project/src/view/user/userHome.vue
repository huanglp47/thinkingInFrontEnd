<template>
  <div class="user-center-container">
    <el-container router >
      <el-header>
          <mixcHeader :identityRank="identityRank"></mixcHeader>
      </el-header>
      <el-container>
        <el-aside width="268px">
          <el-menu :default-active="$route.path" router>
            <el-menu-item index="/user/userCenter">
              <span slot="title">个人中心</span>
            </el-menu-item>
            <el-menu-item index="/user/changePhone">
              <span slot="title">更换手机号码</span>
            </el-menu-item>
            <el-menu-item index="/user/changePassword">
              <span slot="title">修改密码</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <div class="user-container-wraper">
            <div class="user-container">
                <router-view></router-view>
            </div>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import mixcHeader from '../../components/Header.vue'
export default {
  name: 'HomePage',
  data () {
    return {
        identityRank: 2,
    }
  },
  components:{
    mixcHeader,
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
<style scoped lang="scss">
  .el-header, .el-footer {
    background-color: #ffffff;
    color: #333;
    text-align: center;
  }

  .el-aside {
    background-color: #f6f6f6;;
    color: #333;
  }

  .el-main {
    background: #f6f6f6;
    color: #333;
    padding: 0;
  }

  body > .el-container {
    margin-bottom: 40px;
  }
  .user-center-container{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .el-container{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .el-menu-item {
    font-size: 18px;
    color: #909399;
  }
  .el-menu-item.is-active {
    font-family: PingFang-SC;
    font-size: 18px;
    color: #303133;
  }
  .el-menu-item, .el-submenu__title {
    height: 70px;
    line-height: 70px;
  }
  .el-menu {
    background: #f6f6f6;
    border-right: none;
    padding-top: 70px;
    text-align: left;
    padding-left: 80px;
  }
  .el-menu-item:focus,.el-menu-item:hover {
    outline: 0;
    background: #f6f6f6;
  }
  .user-container-wraper{
    height: 100%;
    box-sizing: border-box;
    position: relative;
    .user-container {
      background-color: #ffffff;
      box-sizing: border-box;
      margin: 60px 80px 60px 0;
      position: absolute;
      top:0;
      right: 0;
      bottom: 0;
      left:0;
    }
  }
</style>
