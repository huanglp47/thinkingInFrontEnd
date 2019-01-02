<template>
  <div>
    {{giveChildData}}
    <div>
      子组件--不可点击
      <detail-item @sendChildData="getChildData"></detail-item>
    </div>
  </div>
</template>

<script>
  import DetailItem from '../components/detailItem'
    export default {
        name: "detail",
        data(){
          return {
            childData: 111,
          }
        },
        props:{
          giveChildData:{
            type: String
          },
          isMe:{
            isMe: Boolean
          }
        },
      components:{
        DetailItem
      },
        methods:{
          getChildData(data){
            this.$emit('sendParentData',true)
          }
        }
    }
</script>

<style scoped>

</style>
