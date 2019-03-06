<template>
  <div class="user-center-container">
      <div class="user-center-title">个人信息</div>
      <div class="user-center-info">
          <div class="user-info-item layout-box">
            <div class="user-info-item-label">手机号</div>
            <div class="user-info-item-value">{{userInfo && userInfo.username||''}}</div>
            <div class="user-info-item-btn goToChangePhone" @click="goToChangePhone">更换手机号码</div>
          </div>
          <div class="user-info-item layout-box">
            <div class="user-info-item-label">真实姓名</div>
            <div class="user-info-item-value">{{userInfo && userInfo.realName||''}}</div>
          </div>
        <div class="user-info-item layout-box">
          <div class="user-info-item-label">组织</div>
          <div class="user-info-item-value">{{userInfo && userInfo.department||''}}</div>
        </div>
        <div class="user-info-item layout-box">
          <div class="user-info-item-label">职位</div>
          <div class="user-info-item-value">{{userInfo && userInfo.position||''}}</div>
        </div>
        <div class="user-info-item layout-box">
          <div class="user-info-item-label">帐号状态</div>
          <div class="user-info-item-value">
              {{userInfo && userInfo.state||''}}
            <span class="tipIcon" v-if="userInfo && userInfo._state !=1 "></span>
          </div>
            <!--appealed-->
          <div class="user-info-item-btn" v-if="userInfo && userInfo._state == 2" @click="goToAppeal">我要申诉</div>
          <div class="user-info-item-btn appealed" v-if="userInfo && userInfo._state == 3">申诉已提交，请等待审批</div>
        </div>
      </div>
  </div>
</template>

<script>
    import {mapState,mapActions} from 'vuex'
    import tipIcon from '../../assets/imgs/user/tipIcon.png'
export default {
    name: 'Page',
    data () {
        return {

        }
    },
    computed:{
        ...mapState({
            'userInfo':state=>state.userInfo,
        })
    },
    mounted(){
        this.getUserInfoFn()
    },
    methods:{
        ...mapActions([
            'getUserInfoFn'
        ]),
        goToAppeal(){
        	alert('申诉')
        },
        goToChangePhone(){
            this.$router.push({
                path: '/user/changePhone'
            })
        }
    }
}
</script>

<style scoped lang="scss">
.user-center-container{
  padding: 60px 100px 0 100px;
  box-sizing: border-box;
  /*background: pink;*/
  .user-center-title{
    font-family: PingFang-SC;
    font-size: 30px;
    font-weight: bold;
    color: #606266;
    border-bottom: 1px solid #f1f1f1;
    padding-bottom: 40px;
  }
  .user-center-info{
    .user-info-item{
      height: 80px;
      ling-height: 80px;
      border-bottom: 1px solid #f1f1f1;
      align-items: center;
      .user-info-item-label{
        font-size: 18px;
        font-weight: bold;
        color: #303133;
        padding-left: 10px;
        width:162px;
      }
      .user-info-item-value{
        font-size: 16px;
        font-weight: bold;
        color: #606266;
        width:200px;
        .tipIcon{
          background: url("../../assets/imgs/user/tipIcon.png") no-repeat;
          background-size: cover;
          width: 16px;
          height:16px;
          display: inline-block;
          vertical-align: -1px;
        }
      }
      .user-info-item-btn{
        font-size: 14px;
        font-weight: 500;
        color: #26b080;
        flex: 1;
        cursor: pointer;
      }
      .goToChangePhone{
        cursor: pointer;
      }
      .appealed{
        color: #c0c4cc;
          cursor: auto;
      }
    }
  }
}
</style>
