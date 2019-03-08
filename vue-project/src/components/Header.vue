<template>
    <header class="header" >
        <div :class="['logo', identityRank ? 'br1px' : '']" v-if="identityRank >= 0">
            <img src="../assets/imgs/icon/aa-text.png" alt="">
        </div>
        <ul class="menu">
            <template v-if="identityRank >= 1">
                <li class="menu-item">
                    <a :class="activeCls('allProject')" @click="navTo('project')" href="javascript:;">项目</a>
                </li>
                <li class="menu-item">
                    <a :class="activeCls('applyPermission')" href="javascript:;">权限申请</a>
                </li>
            </template>
            <template v-if="identityRank >= 2">
                <li class="menu-item">
                    <a :class="activeCls('businessManage')" href="javascript:;">业务管理</a>
                </li>
                <li class="menu-item">
                    <a :class="activeCls('systemMonitor')" href="javascript:;">系统监控</a>
                </li>
            </template>
        </ul>
        <div class="right-section" v-if="identityRank >= 1">
            <div class="tips-box">
                <img src="../assets/imgs/icon/tips-icon.png" alt="">
            </div>
            <el-dropdown @command="handleCommand">
                <span class="el-dropdown-link">
                    {{realName ||''}}<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu class="header-dropdown-menu" slot="dropdown">
                    <el-dropdown-item command="user">个人中心</el-dropdown-item>
                    <el-dropdown-item command="changePassword">修改密码</el-dropdown-item>
                    <el-dropdown-item command="logout" divided>退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </header>
</template>

<script>
    import { mapActions } from 'vuex';
    // 身份不同，头部展示内容不同 根据identityRank来判断
    // 未激活只展示logo  0
    // 普通管理员登录不展示业务管理和系统监控  1
    // 超级管理员登录展示业务管理和系统监控  2
    export default {
        props: ['identityRank'],
        data() {
            return {
                activeIndex: '1',
                userInfo: {},
                realName: '',
                // 配置头部url
                pageLinks: {
                    project: '/allProject?from=header'
                }
            };
        },
        methods: {
            ...mapActions([
                'getLogOutFn',
            ]),
            activeCls(curPath) {
				return this.$route.path.indexOf(curPath) > -1 ? 'active' : '';
			},
            getUser() {
                let userInfo = localStorage.getItem('userInfo');
                try {
                    userInfo = JSON.parse(userInfo).userInfo;
                    this.userInfo = userInfo;
                    this.realName = userInfo.realName.length > 3 ? userInfo.realName.slice(0, 3) + '...' : userInfo.realName;
                } catch (error) {

                }
            },
            handleCommand(command) {
                let url;
                switch (command) {
                    case 'user':
                        url = '/user/userCenter'
                        break;
                    case 'changePassword':
                        url = '/user/changePassword'
                        break;
                    case 'logout':
                        this.comfirmLogOut();
                        break;
                    default:
                        url = '/user/userCenter'
                        break;
                }
                this.$router.push({
                    path: url
                })
            },
            comfirmLogOut(){
                this.$confirm('是否要退出登录?', '提示', {
                    cancelButtonText: '取消',
                    confirmButtonText: '确定',
                    type: 'warning'
                }).then(() => {
                    this.getLogOutFn();
                }).catch(() => {

                });
            },
            navTo(type) {
                const targetURL = this.pageLinks[type];
                // 如果当前页不是project 并且点击project则弹窗提示
                let nowUrl = this.$route.path;
                if(nowUrl != '/allProject' && type == 'project') {
                    this.$confirm('请确认进行项目切换？', '提示', {
                        cancelButtonText: '取消',
                        confirmButtonText: '确定',
                        type: 'warning'
                    }).then(() => {
                        this.$router.push({
                            path: targetURL
                        })
                    })
                }else {
                    this.$router.push({
                        path: targetURL
                    })
                }
            }
        },
        mounted() {
            console.log(this.$route)
            this.getUser();
        }
    }
</script>

<style lang="scss" scoped>
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 60px;
        padding: 0 20px 0 13px;
        color: #606266;
        background-color: #fff;
        border-bottom: 2px solid #f1f1f1;
        box-sizing: border-box;
        .br1px {
            border-right: 1px solid #e5e5e5;
        }
        .logo {
            height: 28px;
            padding-right: 39px;
            img {
                width: 167px;
                height: 23px;
                vertical-align: middle;
            }
        }
        .menu {
            flex: 1;
            display: flex;
            align-items: center;
            height: 100%;
            li {
                width: 122px;
                height: 100%;
                text-align: center;
            }
            a {
                display: block;
                width: 100%;
                height: 100%;
                line-height: 60px;
                color: #606266;
                font-size: 16px;
            }
            .active {
                color: #26b080;
            }
        }
        .right-section {
            display: flex;
            align-items: center;
            .tips-box {
                width: 26px;
                height: 26px;
                padding-right: 12px;
                border-right: 1px solid #e5e5e5;
            }
            .el-dropdown-link {
                padding-left: 20px;
                color: #606266;
                font-size: 14px;
                cursor: pointer;
            }
        }
    }
</style>
