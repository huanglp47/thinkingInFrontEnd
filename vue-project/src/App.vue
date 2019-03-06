<template>
    <div id="app">
        <!--<最外层view,适合添加全局性view-->
        <!--<img src="./assets/logo.png">-->

        <router-view/>

        <!--页面切换效果-->
        <!--<div class="mixc-page-loading" v-if="isLoading">-->
            <!--<div class="loadText">{{loadText}}</div>-->
        <!--</div>-->
    </div>
</template>

<script>
//import { mapState } from 'vuex'
//export default {
//    name: 'App',
//    data(){
//    	return {
//            loadText: '页面加载中...'
//        }
//    },
//    computed:{
//        ...mapState({
//            isLoading: state=>state.isLoading
//        })
//    }
//}
</script>

<style lang="scss">
    @import 'assets/css/common.scss';
    @import 'assets/css/elment-common.scss';
    #app {
        background: #ffffff;
        height: 100%;
    }
    .mixc-page-loading{
        position: absolute;
        top:0;
        left: 0;
        right: 0;
        bottom: 0;
        width:100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        .loadText{
            color: #26b080;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            z-index: 999;
        }
    }
</style>
