<template>
  <div class="home-container">
    <el-container router >
      <el-header>
        <mixcHeader :identityRank="identityRank"></mixcHeader>
      </el-header>
      <el-container>
        <el-aside width="200px">
            <el-scrollbar>
          <el-menu :default-active="$route.path" router>
            <el-menu-item index="/home/menu1">
              <span slot="title">菜单一（组件链接）</span>
            </el-menu-item>
              <el-menu-item index="/home/menu2">
                  <span slot="title">菜单二（组件链接）</span>
              </el-menu-item>
            <el-menu-item index="/home/third">
              <span slot="title">菜单三（外部链接）</span>
            </el-menu-item>
              <el-menu-item index="/home/menu1">
                  <span slot="title">菜单一（组件链接）</span>
              </el-menu-item>
              <el-menu-item index="/home/menu2">
                  <span slot="title">菜单二（组件链接）</span>
              </el-menu-item>
              <el-menu-item index="/home/third">
                  <span slot="title">菜单三（外部链接）</span>
              </el-menu-item>
              <el-menu-item index="/home/menu1">
                  <span slot="title">菜单一（组件链接）</span>
              </el-menu-item>
              <el-menu-item index="/home/menu2">
                  <span slot="title">菜单二（组件链接）</span>
              </el-menu-item>
              <el-menu-item index="/home/third">
                  <span slot="title">菜单三（外部链接）</span>
              </el-menu-item>
              <el-menu-item index="/home/menu1">
                  <span slot="title">菜单一（组件链接）</span>
              </el-menu-item>
              <el-menu-item index="/home/menu2">
                  <span slot="title">菜单二（组件链接）</span>
              </el-menu-item>
              <el-menu-item index="/home/third">
                  <span slot="title">菜单三（外部链接）</span>
              </el-menu-item>
              <el-menu-item index="/home/menu1">
                  <span slot="title">菜单一（组件链接）</span>
              </el-menu-item>
              <el-menu-item index="/home/menu2">
                  <span slot="title">菜单二（组件链接）</span>
              </el-menu-item>
              <el-menu-item index="/home/third">
                  <span slot="title">菜单三（外部链接）</span>
              </el-menu-item>
              <el-menu-item index="/home/menu1">
                  <span slot="title">菜单一（组件链接）</span>
              </el-menu-item>
              <el-menu-item index="/home/menu2">
                  <span slot="title">菜单二（组件链接）</span>
              </el-menu-item>
              <el-menu-item index="/home/third">
                  <span slot="title">菜单三（外部链接）</span>
              </el-menu-item>
              <el-menu-item index="/home/menu1">
                  <span slot="title">菜单一（组件链接）</span>
              </el-menu-item>
              <el-menu-item index="/home/menu2">
                  <span slot="title">菜单二（组件链接）</span>
              </el-menu-item>
              <el-menu-item index="/home/third">
                  <span slot="title">菜单三（外部链接）</span>
              </el-menu-item><el-menu-item index="/home/menu1">
              <span slot="title">菜单一（组件链接）</span>
          </el-menu-item>
              <el-menu-item index="/home/menu2">
                  <span slot="title">菜单二（组件链接）</span>
              </el-menu-item>
              <el-menu-item index="/home/third">
                  <span slot="title">菜单三（外部链接）</span>
              </el-menu-item>

          </el-menu>
            </el-scrollbar>
        </el-aside>
        <el-main>
          <div class="user-container-wraper">
            <div class="user-container">
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: '/home' }">当前位置：{{mallName}}</el-breadcrumb-item>
                    <el-breadcrumb-item>项目首页</el-breadcrumb-item>
                </el-breadcrumb>
                <router-view></router-view>
            </div>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import mixcHeader from '../components/Header.vue'
export default {
    name: 'HomePage',
    data () {
        return {
            identityRank:'2',
        }
    },
    computed:{
        mallName(){
            let username = localStorage.getItem('username');
            let visitMall = localStorage.getItem(`${username}VisitMall`);
            try {
                visitMall = JSON.parse(visitMall);
            } catch (error) {
                
            }
        	return visitMall.mallName || ''
        }
    },
    components:{
        mixcHeader
    },
    methods:{

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

    .el-scrollbar{
        height: 100%;
    }
    .el-scrollbar__wrap{
        overflow: scroll;
        overflow-x:auto
    }
.home-container{
    width: 100%;
    height: 100%;
}
.el-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.el-main{
    overflow: auto;
}
.user-container-wraper{
    width: 100%;
    height: 100%;
    .user-container{
        width: 100%;
        height: 100%;
    }
}


</style>
