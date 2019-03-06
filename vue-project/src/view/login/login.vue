<template>
    <div class="login-container">
        <div class="login-header layout-box">
          <div class="logo"><img src="../../assets/imgs/icon/mixc-text.png" alt=""></div>
        </div>
        <div class="login-area">
          <el-form class="login-form-wraper" :model="loginForm" status-icon :rules="rules" ref="loginForm" @keyup.enter.native="submitForm('loginForm')">
              <h1 class="login-title">Nice to mixc you !</h1>
              <p class="login-subTitle">一点万象APP管理后台</p>
              <div class="login-form">
                <el-form-item class="mobile" prop="username">
                    <el-input type="text" style="display:none;width:0;height:0;"></el-input>
                    <el-input placeholder="手机号" type="text" v-model="loginForm.username" autocomplete="off" @blur="checkMobileFn()"></el-input>
                </el-form-item>
                <el-form-item class="password" prop="password">
                    <el-input type="password" name="a" style="display:none;width:0;height:0;"></el-input>
                    <el-input placeholder="密码" type="password" v-model="loginForm.password" autocomplete="new-password"></el-input>
                    <el-input type="text" maxlength="6"  v-model="loginForm.password" style="display:none;"></el-input>
                </el-form-item>
              </div>
              <p class="login-forget-psw">
                  <span @click="gotoResetPsw">
                      忘记密码？
                  </span>
              </p>
              <div class="login-error-tip" v-if="errorTip!=''">{{errorTip||''}}</div>
              <div class="login-error-tip" v-if="loginErrorTip!=''">{{loginErrorTip||''}}</div>
              <el-button type="primary" class="login-btn" @click="submitForm('loginForm')">登录</el-button>
          </el-form>
        </div>
    </div>
</template>

<script>
import{mapState,mapActions, mapMutations} from 'vuex'
import{ trim } from '../../assets/js/utils'

const errorTip = '登录失败，账户或密码错误';
export default {
    name: "login",
    data(){
        var username_reg = /^1\d{10}$/;
        var psw_reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6}$/;
        var validatePass = (rule, value, callback) => {
        	this.loginErrorTip!=''&& this.REMOVE_LOGIN_ERROR_TIP()
            if (value === '') {
                callback(new Error(''));
                this.errorTip = errorTip
            }else if(!username_reg.test(value)){
                callback(new Error(''));
                this.errorTip = errorTip
            } else {
                this.errorTip='';
                callback();
            }
        };
        var validatePass2 = (rule, value, callback) => {
            this.loginErrorTip!=''&& this.REMOVE_LOGIN_ERROR_TIP()
            if (value === '') {
                callback(new Error(' '));
                this.errorTip = errorTip
            } else if (!psw_reg.test(value)){
                callback(new Error(''));
                this.errorTip=  errorTip
            } else {
                this.errorTip='';
                callback();
            }
        };
        return {
            errorTip:'',
            loginForm: {
                username:  localStorage.getItem('username')||'',
                password: '',
            },
            rules: {
                username: [
                    { validator: validatePass, trigger: 'blur' }
                ],
                password: [
                    { validator: validatePass2, trigger: 'blur' }
                ],
            }
        };
    },
    computed:{
        ...mapState({
            loginErrorTip: state=>state.login.loginErrorTip
        })
    },

    mounted(){
        console.log('【获取路由参数】：a='+this.$route.query.a); //获取参数。注意$route与$router区别
    },
    methods:{
        ...mapActions([
            'postLoginFn',
            'getCheckMobileFn'
        ]),
        ...mapMutations([
        	'REMOVE_LOGIN_ERROR_TIP'
        ]),
        checkMobileFn(){
            var username_reg = /^1\d{10}$/;
            var value = this.loginForm.username;
            if(username_reg.test(value)){
                this.getCheckMobileFn({
                    username: trim(this.loginForm.username),
                })
            }
        },
        gotoLogin(){
            //this.$store.dispatch("postLoginFn", "token11234566")
            this.postLoginFn({
                username: trim(this.loginForm.username),
                password: trim(this.loginForm.password),
            })
        },
        gotoResetPsw(){
            this.$router.push({
                path: '/accountOp',
                query:{
                    op: 'reset'
                }
            })
        },
        submitForm(formName){
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.errorTip='';
                    this.gotoLogin();
                } else {
                    this.errorTip= errorTip;
                    return false;
                }
            });
        }
    }
}
</script>

<style lang="scss" scoped>
  .login-container{
    height: 100%;
    width: 100%;
    background: url('../../assets/imgs/login/login_bg.jpg') no-repeat;
    background-size:cover;
    position: fixed;
    top:0;
    left:0;
    bottom: 0;
    right: 0;
    overflow: hidden;
    .login-header{
      height: 60px;
      background-color: #ffffff;
      /*background-color: pink;*/
      align-items: center;
      .logo {
        height: 28px;
        padding-right: 39px;
        padding-left: 25px;
        img {
          width: 167px;
          height: 23px;
          vertical-align: middle;
        }
      }
    }
    .login-area{
      position: absolute;
      top:175px;
      left:120px;
      width: 603px;
      height: 538px;
      background-color: rgba(255, 255, 255, 0.88);
      border: 1px solid #ebedf4;
      box-sizing: border-box;
      .login-form-wraper{
        width:480px;
        margin: 0 auto;
        padding: 60px;
        .login-title{
          font-family: PingFang-SC;
          font-size: 40px;
          line-height: 0.83;
          color: #303133;
          height: 60px;;
        }
        .login-subTitle{
          font-family: PingFang-SC;
          font-size: 18px;
          font-weight: bold;
          color: #c0c4cc;
        }
        .login-form{
          margin-top:64px;
          .mobile{
            margin-bottom: 30px;
          }
          .password{
            margin-bottom: 10px;
          }
        }
        .login-forget-psw{
           text-align: right;
            span{
                font-size: 14px;
                font-weight: 500;
                cursor: pointer;
                color: #909399;
            }
        }
        .login-error-tip{
          font-size: 16px;
          height: 16px;
          font-weight: 500;
          color: #f56c6c;
          padding-top: 6px;
          margin: 0 auto;
          text-align: center;
        }
        .login-btn{
          width:100%;
          height: 60px;
          text-align: center;
          box-sizing: border-box;
          font-size: 20px;
          font-weight: bold;
          color: #ffffff;
          margin-top: 18px;
        }
      }
    }
  }
</style>
