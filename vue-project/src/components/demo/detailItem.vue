<template>
  <div>
    <div>测试通信：</div>
    <br/>
    <div @click="sendChildData">子子组件
      <el-button>点击</el-button>
    </div>
  </div>
</template>

<script>

  export default {
    name: "detail",
    data(){
      return {
        childData: false
      }
    },
    methods:{
      sendChildData(){
        this.$emit('sendChildData', true)
      }
    }
  }
</script>

<style scoped>

</style>
