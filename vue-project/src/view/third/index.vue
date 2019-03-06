<template>
  <div class="third">
      <iframe src="" id="iframe"></iframe>
  </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex';
    export default {
        name: 'ThirdPage',
        data(){
            return{

            }
        },
        mounted:function(){
            document.getElementById('iframe').src= 'https://www.baidu.com';
//            this.gotoLogin()
        },
        methods:{
            ...mapActions([
                'getLogin',
            ]),
            gotoLogin(){
                this.getLogin({
                    name:'addidas',
                    psw:'123456',
                    ts: new Date().getTime()
                })
            }
        }
}
</script>
<style scoped lang="scss">
.third{
  height: 100%;
}
iframe{
  width: 100%;
  height: 100%;
  border: 0;
  overflow: hidden;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
</style>
