<template>
    <div class="project-page">
        <mixcHeader :identityRank="identityRank"></mixcHeader>
        <template v-if="dataIsLoaded">
            <div class="all-project" v-if="!noProject">
                <div class="region-list" v-if="commonList.length > 0">
                    <p class="region-title">常用项目</p>
                    <ul class="list">
                        <li v-for="(mall, index) in commonList" :key="mall.mallCode">
                            <p @click="goProject(mall.mallCode, mall.mallName)">{{mall.mallName}}</p>
                            <el-tooltip class="item" effect="dark" placement="bottom">
                                <div slot="content" class="tooltip-text">取消常用</div>
                                <div class="tool" @click="cancelCommon(mall.mallId, index, mall)">...</div>
                            </el-tooltip>
                        </li>
                    </ul>
                </div>
                <div class="region-list" v-for="(region, regionIdx) in regionList" :key="region.regionId">
                    <p class="region-title">{{region.regionName}}</p>
                    <ul class="list">
                        <li v-for="(mall, mallIdx) in region.mallList" :key="mall.mallCode">
                            <p @click="goProject(mall.mallCode, mall.mallName)">{{mall.mallName}}</p>
                            <el-tooltip class="item" effect="dark" placement="bottom">
                                <div slot="content" class="tooltip-text">{{mall.isFavorite ? '取消常用' : '设置为常用项目'}}</div>
                                <div class="tool" @click="addCommon(mall.mallId, regionIdx, mallIdx, mall)" v-if="!mall.isFavorite">...</div>
                                <div class="tool" @click="cancelListCommon(mall.mallId, regionIdx, mallIdx, mall)" v-else>...</div>
                            </el-tooltip>
                        </li>
                    </ul>
                </div>
            </div>
            <emptyPage :data="emptyData" v-else></emptyPage>
        </template>
        <div class="more-toast" v-if="showMoreToast">常用项目最多不能超过5个</div>
    </div>
</template>

<script>
    import emptyPage from '@/components/EmptyPage';
    import mixcHeader from '@/components/Header';
    import emptyProjectImg from '@/assets/imgs/empty/no-project.png';
    import { getMallList, addCommonMalls, deleteCommonMalls } from '@/service/getData'

    export default {
        data() {
            return {
                emptyData: {
                    imgSrc: emptyProjectImg,
                    title: '抱歉，您还未加入任何项目！',
                    subTitle: '请在个人信息页查看账户状态是否正常，正常状态可通过权限申请加入项目！'
                },
                noProject: false,
                identityRank: 2,
                commonList: [],
                regionList: [],
                showMoreToast: false,
                dataIsLoaded: false,
                from: ''
            }
        },
        components: {
            emptyPage,
            mixcHeader
        },
        methods: {
            init: function() {
                // 获取storage信息
                let username = localStorage.getItem('username');
                let visitMall = localStorage.getItem(`${username}VisitMall`);
                let userInfo = localStorage.getItem('userInfo');
                try {
                    visitMall = JSON.parse(visitMall);
                    userInfo = JSON.parse(userInfo);
                } catch (error) {
                    
                }
                // 如果该账户不是正常状态直接进入为空状态
                if(userInfo.state != 1) {
                    console.log('账号不正常')
                    this.dataIsLoaded = true;
                    this.noProject = true;
                    return false;
                }
                // 如果不是从头部点击进入并且storage有该用户的上次访问记录则直接跳转
                this.from = this.$route.query.from;
                if(this.from != 'header' && visitMall) {
                    this.$router.push({
                        path: `/home?mallCode=${visitMall.mallNo}`
                    })
                }else {
                    this.getMall();
                }
            },
            // 获取列表
            getMall: function() {
                getMallList({}, (res) => {
                    console.log(res)
                    if(this.from == 'login' && res.regionList.length == 1 && res.regionList[0].mallList.length == 1) {
                        // 如果登录时只有一条直接跳到首页 并且存储
                        let mall = res.regionList[0].mallList[0];
                        this.saveVisitMall(mall.mallCode, mall.mallName);
                        this.$router.push({
                            path: `/home?mallCode=${mall.mallCode}`
                        })
                        return false;
                    }
                    if(res.regionList.length == 0) {
                        this.noProject = true;
                    } 
                    this.commonList = res.commonList;
                    this.regionList = res.regionList;
                    this.dataIsLoaded = true;
                }, true)
            },
            // 常用超过5个showtoast
            showToast: function() {
                this.showMoreToast = true;
                setTimeout(() => {
                    this.showMoreToast = false;
                }, 3000);
            },
            // 修改commonlist中的isfavorite状态
            switchFavorite: function(regionIdx, mallIdx, isLike) {
                let mallList = this.regionList[regionIdx].mallList;
                mallList[mallIdx].isFavorite = isLike;
                this.$set(mallList, mallIdx, mallList[mallIdx]);
            },
            // 增加常用
            addCommon: function(id, regionIdx, mallIdx, item) {
                console.log(id, regionIdx, mallIdx, item)
                if(this.commonList.length == 5) {
                    this.showToast();
                    return false;
                }
                addCommonMalls({
                    deptId: id 
                }, (res) => {
                    this.switchFavorite(regionIdx, mallIdx, 1);
                    this.commonList.push(item);
                }, true);
            },
            // 从列表取消常用 查找在commonlist中的位置
            cancelListCommon: function(id, regionIdx, mallIdx, item) {
                deleteCommonMalls({
                    deptId: id 
                }, (res) => {
                    this.switchFavorite(regionIdx, mallIdx, 0);
                    // 从commonlist中删除
                    let index;
                    this.commonList.find((ele, idx, arr) => {
                        if(ele.mallId === item.mallId) {
                            index = idx;
                        }
                    });
                    this.commonList.splice(index, 1);
                }, true);
            },
            // 从常用处取消常用 查找在regionlist中的位置
            cancelCommon: function(id, index, item) {
                deleteCommonMalls({
                    deptId: id 
                }, (res) => {
                    console.log(res)
                    // 常用点击，查找所在大区，将其isfavorite修改为0 并从常用列表删除
                    let regionId = item.regionId;
                    let mallId = item.mallId;
                    // 大区index
                    let regionIdx;
                    this.regionList.find((ele, idx, arr) => {
                        if(ele.regionId === regionId) {
                            regionIdx = idx;
                        }
                    });
                    // 商场index
                    let mallIdx;
                    this.regionList[regionIdx].mallList.find((ele, idx, arr) => {
                        if(ele.mallId === mallId) {
                            mallIdx = idx;
                        }
                    });
                    // 修改列表内的isfavorite
                    this.switchFavorite(regionIdx, mallIdx, 0);
                    // 从commonlist中删除
                    this.commonList.splice(index, 1);
                }, true);
            },
            goProject(mallCode, mallName) {
                this.saveVisitMall(mallCode, mallName);
                this.$router.push({
                    path: `/home?mallCode=${mallCode}`
                })
            },
            // 每次进入存该用户最后一次访问记录
            saveVisitMall(mallCode, mallName) {
                let username = localStorage.getItem('username');
                let obj = {
                    mallNo: mallCode,
                    mallName: mallName
                }
                localStorage.setItem(`${username}VisitMall`, JSON.stringify(obj))
            }
        },
        mounted() {
            this.init();
        }
    }
</script>

<style lang="scss" scoped>
    .project-page,
    .all-project {
        width: 100%;
        min-height: 100%;
        color: #303133;
        background-color: #f6f6f6;
        box-sizing: border-box;
    }
    .all-project {
        padding: 60px 80px;
    }
    .region-list {
        &:not(:last-child) {
            margin-bottom: 48px;
        }
        .region-title {
            position: relative;
            margin-bottom: 30px;
            padding-left: 25px;
            font-size: 18px;
            line-height: 1;
            &:before {
                content: "";
                position: absolute;
                top: 2px;
                left: 0;
                width: 15px;
                height: 15px;
                background-image: url(../assets/imgs/icon/project-title-icon.png);
                background-size: 100%;
            }
        }
        .list {
            display: flex;
            flex-wrap: wrap;
            li {
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 148px;
                height: 38px;
                margin-right: 12px;
                margin-bottom: 12px;
                border-radius: 2px;
                border: 1px solid #ebedf4;
                background-color: #fff;
                font-size: 14px;
                font-weight: 600;
                cursor: pointer;
                p {
                    flex: 1;
                    height: 100%;
                    padding-left: 10px;
                    line-height: 38px;
                    &:hover {
                        background-color: rgba($color: #26b080, $alpha: .1)
                    }
                }
                .tool {
                    width: 22px;
                    height: 100%;
                    writing-mode: vertical-rl;
                    text-align: center;
                    line-height: 11px;
                    color: #909399;
                    font-weight: 500;
                    &:hover {
                        background-color: rgba($color: #26b080, $alpha: .1)
                    }
                }
            }
        }
    }
    .more-toast {
        position: fixed;
        top: 50%;
        left: 50%;
        margin-left: -113px;
        margin-top: -24px;
        z-index: 99;
        padding: 16px 20px;
        font-size: 16px;
        color: #fff;
        border-radius: 4px;
        background-color: rgba($color: #000000, $alpha: .75);
        line-height: 1;
    }
</style>
