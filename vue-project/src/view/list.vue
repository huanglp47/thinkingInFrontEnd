<template>
    <div>
      <myChild :giveChildData="giveChild" @sendParentData="getData"></myChild>
      <div>
        这是子组件传来的数据--》{{isMe}}
      </div>
      <div class="actionSheet" v-if="isMe">
      <!--<div class="actionSheet" :class="{ active: isMe }">-->
        <div class="mask" @click="closeActionSheet"></div>
        <div class="diolag-area">
          <div class="header">
              <div class="close-btn" @click="closeActionSheet"></div>
          </div>
          <div class="body">
            fdgghgh
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import myChild from '../components/detail.vue'
    export default {
        name: "list",
        data(){
          return {
            giveChild:'222',
            isMe: false,
          }
        },
        components:{
          myChild
        },
        methods:{
          getData(data){
            this.isMe = data;
          },
          closeActionSheet(){
            this.isMe = !this.isMe
          }
        }

    }
</script>

<style scoped>
.actionSheet{
}
.actionSheet.active{

}
/*.actionSheet.active .mask{*/
  /*-webkit-animation: bounceInUp 2s;*/
/*}*/
/*.actionSheet.active .diolag-area{*/
  /*-webkit-animation: bounceInUp 2s;*/
/*}*/
/*@keyframes bounceInUp {*/
  /*0% {*/
    /*bottom: -200%;*/
  /*}*/
  /*100% {*/
    /*bottom: 0;*/
    /*top: 80%;*/
  /*}*/
/*}*/
.mask{
  position: absolute;
  top: 0;
  left:0;
  right:0;
  bottom: 0;
  width:100%;
  background: rgba(0,0,0,0.5);
  z-index: 99;
}
  .diolag-area{
    position: absolute;
    top: 20%;
    left:0;
    right:0;
    bottom: 0;
    width:100%;
    z-index: 999;
    background: #ffffff;
  }
  .header{
    height: 80px;
    line-height: 80px;
    background: #2b81af;
    position: relative;
  }
  .close-btn{
    height: 40px;
    width: 40px;
    position: absolute;
    top: 20px;
    right: 20px;
    background: #710909;
    align-items: center;
    justify-content: center;
  }
</style>
