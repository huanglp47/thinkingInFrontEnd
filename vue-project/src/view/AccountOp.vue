<template>
    <div class="account-op-page">
        <mixcHeader :identityRank="identityRank"></mixcHeader>
        <div class="form-content" v-if="!isActive">
            <h1 class="title">{{title}}</h1>
            <p class="sub-title" v-if="op === 'active'">您的账号还未激活，激活后即可使用.</p>
            <el-form
                status-icon
                :model="formData"
                :inline-message=true
                ref="formData"
                class="account-center-form"
                @keyup.enter.native="submitForm('formData')"
            >
                <el-form-item prop="tel" :rules="rules.phone">
                    <el-input type="tel"
                        v-model.number="formData.tel"
                        placeholder="手机号"
                        maxlength=11
                        :disabled="op === 'active'"
                        @blur="judgeIsActive()"
                    >
                        <p class="btn-text" slot="append" @click="getCode">
                            <span v-show="!showCountDown">获取验证码</span>
                            <span v-show="showCountDown">{{count}}s</span>
                        </p>
                    </el-input>
                </el-form-item>
                <el-form-item prop="captcha" :rules="rules.captcha">
                    <el-input type="tel"
                        v-model.number="formData.captcha"
                        placeholder="验证码"
                        maxlength=6
                    ></el-input>
                </el-form-item>
                <input type="text" style="width:0;height:0;position:absolute;top:-9999px;left:-9999px">
                <el-form-item prop="pwd" :rules="rules.pwd">
                    <el-input type="password"
                        v-model="formData.pwd"
                        placeholder="新密码"
                        maxlength=6
                        autocomplete="new-password"
                    ></el-input>
                </el-form-item>
                <el-form-item prop="repwd" :rules="repwdRules">
                    <el-input type="password"
                        v-model="formData.repwd"
                        placeholder="确认密码"
                        maxlength=6
                        autocomplete="new-password"
                    ></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" class="submit-btn" @click="submitForm('formData')">确定</el-button>
                </el-form-item>
                <p class="go-login" v-if="op === 'reset'">想起来了？<router-link to="/login">立即登录</router-link></p>
                <p class="go-login" v-else><router-link to="/login">返回登录</router-link></p>
            </el-form>
        </div>
        <div class="active-success-wrap" v-else>
            <p class="active-success-title">
                {{isLogin ? '账号激活成功，即将进入MIXC管理平台！' : '账号激活成功，请登录！'}}
            </p>
            <img src="../assets/imgs/active-success.png">
            <p class="countdown-text"><span>{{autoCount}}</span>秒后自动跳转</p>
            <!-- <router-link to="/allProject" class="btn">立即前往</router-link> -->
            <div class="btn" @click="goUrl">立即前往</div>
        </div>
    </div>
</template>
<script>

    import{ mapState , mapActions } from 'vuex'
    import rules from '@/utils/rules'
    import { getVerificationCode, postSetPassword, postResetPassword } from '@/service/getData'
    import mixcHeader from '@/components/Header';

    // 短信验证码类型（设置密码：100 重置密码：110 修改密码：120）
    const MSG_CODE = {
        SET_PWD: '100',
        RESET_PWD: '110',
        CHANGE_PWD: '120'
    }
    // 倒计时时间
    const TIME_COUNT = 60;
    const AUTO_COUNT = 3;

    export default {
        components: {
            mixcHeader
        },
        data() {
            var validateRepwd = (rule, value, callback) => {
                if (!value) {
                    callback(new Error('必填项'));
                }else if (value !== this.formData.pwd) {
                    callback(new Error('请确认两次输入的密码一致！'));
                }else {
                    callback();
                }
            };
            return {
                rules,
                repwdRules: [{
                    required: true,
                    validator: validateRepwd,
                    trigger: 'blur'
                }],
                formData: {
                    tel: null,
                    captcha: null,
                    pwd: null,
                    repwd: null
                },
                op: '',
                title: '',
                isActive: false,
                identityRank: 0,
                showCountDown: false,
                count: TIME_COUNT,
                timer: null,
                autoTimer: null,
                autoCount: AUTO_COUNT,

                isLogin: false
            }
        },
        computed:{
            ...mapState({
                userState: state=>state.login.userState
            })
        },
        watch: {
            '$route' (to, from) {
                // 如果重置密码时账号未激活，则刷新页面
                console.log(to, from)
                window.location.reload();
            }
        },
        methods: {
            ...mapActions([
                'getCheckMobileFn'
            ]),
            init: function() {
                console.log(this.op)
                let token = localStorage.getItem('token');
                this.isLogin = token ? true : false;
                this.title = this.op === 'reset' ? '重置密码' : '激活账号';
                let username = this.$route.query.username || localStorage.getItem('username');
                this.formData.tel = this.op === 'reset' ? '' : username;
            },
            // 激活成功后跳转
            goUrl: function() {
                if(this.isLogin) {
                    this.$router.push({
                        path: '/allProject'
                    });
                }else {
                    this.$router.replace({
                        path: '/login'
                    });
                }
            },
            // 判断是否激活
            judgeIsActive: function() {
                console.log(this.formData.tel)
                this.getCheckMobileFn({
                    username: this.formData.tel
                })
            },
            // 获取验证码
            getCode: function() {
                if(this.showCountDown && this.timer) {
                    return false;
                }
                let codeType = this.op == 'reset' ? MSG_CODE.RESET_PWD : MSG_CODE.SET_PWD;
                let reg = /^1\d{10}$/;
                if(!reg.test(this.formData.tel)) {
                    return false;
                }

                getVerificationCode({
                    "mobile": localStorage.getItem('username'),
                    "codeType": codeType
                }, (res) => {
                    this.countDown();
                }, true)
            },
            // 按钮变成倒计时
            countDown: function() {
                this.showCountDown = true;
                this.timer = setInterval(() => {
                    if (this.count > 1 && this.count <= TIME_COUNT) {
                        this.count--;
                    }else {
                        clearInterval(this.timer);
                        this.timer = null;
                        this.showCountDown = false;
                        this.count = TIME_COUNT;
                    }
                }, 1000)
            },
            // 获取表单数据
            getFormData: function() {
                let formData = this.formData;
                return {
                    "mobile": formData.tel,
                    "code": formData.captcha + '',
                    "password": formData.pwd,
                    "passwordAgin": formData.repwd
                }
            },
            // 激活
            activeFn: function() {
                let formData = this.formData;
                postSetPassword(this.getFormData(), (res)=> {
                    console.log(res)
                    this.isActive = true;
                    this.autoJump();
                }, true);
            },
            // 激活后页面倒计时自动跳转
            autoJump: function() {
                this.autoTimer = setInterval(() => {
                    if (this.autoCount > 0 && this.autoCount <= AUTO_COUNT) {
                        this.autoCount--;
                    }else {
                        clearInterval(this.autoTimer);
                        this.autoTimer = null;
                        this.autoCount = AUTO_COUNT;
                        this.goUrl();
                    }
                }, 1000);
            },
            // 重置密码
            resetFn: function() {
                let formData = this.formData;
                postResetPassword(this.getFormData(), (res)=> {
                    console.log(res)
                    let that = this;
                    that.$message({
                        message: '密码修改成功!',
                        type: 'success',
                        onClose: function() {
                            that.$router.push({
                                path: '/login'
                            });
                        }
                    });
                }, true);
            },
            // 提交表单
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if(valid) {
                        let that = this;
                        if(this.op == 'active') {
                            this.activeFn();
                        }else {
                            if(this.userState === '0') {
                                this.$confirm('您的账号还未激活，激活后即可使用', '', {
                                    cancelButtonText: '取消',
                                    confirmButtonText: '去激活',
                                    showClose:false,
                                    center:true,
                                    roundButton: true,
                                }).then(() => {
                                    that.$router.push({
                                        path: '/accountOp',
                                        query:{
                                            op: 'active'
                                        }
                                    })
                                }).catch((err) => {
                                    // console.log(err.message);
                                });
                            }else {
                                this.resetFn();
                            }
                        }
                    }else {
                        return false;
                    }
                });
            },
        },
        mounted() {
            console.log(this.$route);
            this.op = this.$route.query.op;
            this.init();
        }
    };
</script>
<style lang="scss" scoped>
    .account-op-page {
        box-sizing: border-box;
        color: #303133;
        .form-content {
            padding-top: 60px;
        }
        .title {
            margin-bottom: 40px;
            font-size: 30px;
            font-weight: 500;
            line-height: 1;
            text-align: center;
        }
        .sub-title {
            margin: -20px auto 36px;
            text-align: center;
            font-size: 18px;
            line-height: 1;
        }
        .el-form-item {
            margin: 0 auto 20px;
        }
        .el-form-item,
        .el-input {
            width: 452px;
            height: 48px;
        }
        .btn-text {
            position: relative;
            width: 100%;
            height: 100%;
            padding: 0 15px;
            line-height: 48px;
            box-sizing: border-box;
            color: #26b080;
            // &:before {
            //     content: "";
            //     position: absolute;
            //     top: 0;
            //     left: -1px;
            //     width: 1px;
            //     height: 48px;
            //     background-color: #fff;
            // }
        }
        .submit-btn {
            width: 452px;
            height: 60px;
            margin-top: 10px;
            font-size: 20px;
        }
        .go-login {
            width: 452px;
            margin: 30px auto 0;
            text-align: right;
            font-size: 14px;
            color: #909399;
            a {
                color: #26b080;
            }
        }

        .active-success-wrap {
            padding-top: 60px;
            text-align: center;
            .active-success-title {
                font-size: 26px;
            }
            img {
                width: 160px;
                height: 160px;
                margin-top: 40px;
                vertical-align: middle;
                border-radius: 50%;
            }
            .countdown-text {
                margin-top: 40px;
                font-size: 18px;
                opacity: 0.8;
                span {
                    color: #26b080;
                }
            }
            .btn {
                display: block;
                width: 104px;
                height: 40px;
                margin: 40px auto 0;
                border-radius: 1px;
                background-color: #ededed;
                font-size: 18px;
                text-align: center;
                line-height: 40px;
                opacity: 0.8;
                cursor: pointer;
                color: #303133;
            }
        }
    }
</style>
