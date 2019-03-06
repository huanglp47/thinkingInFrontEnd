<template>
    <div class="empty-box">
        <img :src="data.imgSrc" alt="抱歉，您还未加入任何项目！">
        <p class="title">{{data.title}}</p>
        <p class="sub-title">{{data.subTitle}}</p>
    </div>
</template>

<script>
    export default {
        props: ['data']
    }
</script>

<style lang="scss" scoped>
    .empty-box {
        padding-top: 200px;
        text-align: center;
        img {
            width: 476px;
            height: 243px;
            margin-bottom: 30px;
            vertical-align: middle;
        }
        .title {
            margin-bottom: 20px;
            color: #000;
            font-size: 22px;
            line-height: 1;
            font-weight: 600;
        }
        .sub-title {
            color: #999;
            font-size: 14px;
            line-height: 1;
        }
    }
</style>
