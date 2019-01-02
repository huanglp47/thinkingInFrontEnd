<template>
  <div>
    <div @click="sendChildData">子子组件--点击</div>
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
