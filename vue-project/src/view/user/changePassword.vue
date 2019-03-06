<template>
  <div class="user-center-container">
    <div class="user-center-title">修改密码</div>
    <div class="user-change-phone-form">
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" inline-message>
        <el-form-item prop="oldPassword">
          <el-input type="password" placeholder="旧密码" v-model="ruleForm.oldPassword" autocomplete="off"></el-input>
        </el-form-item>
          <el-form-item prop="newPassword">
              <el-input type="password" placeholder="新密码" v-model="ruleForm.newPassword" autocomplete="off"></el-input>
          </el-form-item>
        <el-form-item prop="newPasswordAgin">
          <el-input type="password" placeholder="确认密码" v-model="ruleForm.newPasswordAgin" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即提交</el-button>
          <el-button @click="cancelForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import{ postUpdatePassword } from '../../service/getData'
import { mapActions } from 'vuex';
import{ trim } from '../../assets/js/utils'

export default {
    name: 'Page',
    data() {
        var validatePass = (rule, value, callback) => {
            const reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6}$/;
            if (value === '') {
                callback(new Error('请输入新密码！'));
            }else if(!reg.test(value)){
                callback(new Error('密码由6位字符组成；要求数字，字母，特殊符号'));
            }else{
                callback();
            }
        };
        var validatePass2 = (rule, value, callback) => {
            const reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6}$/;
            if (value === '') {
                callback(new Error('请输入确认密码！'));
            }else if(!reg.test(value)){
                callback(new Error('请确认两次输入的密码一致！'));
            }else {
                callback();
            }
        };
        var validatePass3 = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入旧密码！'));
            }else {
                callback();
            }
        };
        return {
            ruleForm: {
                oldPassword:'',
                newPassword: '',
                newPasswordAgin: '',
            },
            rules: {
                oldPassword:[
                    { validator: validatePass3, trigger: 'blur' }
                ],
                newPassword: [
                    { validator: validatePass, trigger: 'blur' }
                ],
                newPasswordAgin: [
                    { validator: validatePass2, trigger: 'blur' }
                ],
            }
        };
    },
    methods:{
        ...mapActions([
            'getLogOutFn',
        ]),
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.postUpdatePasswordFn()
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        cancelForm(formName) {
            this.$refs[formName].resetFields();
        },
        postUpdatePasswordFn(){
            postUpdatePassword({
                oldPassword:trim(this.ruleForm.oldPassword),
                newPassword: trim(this.ruleForm.newPassword),
                newPasswordAgin: trim(this.ruleForm.newPasswordAgin),
            },(data)=>{
                let that = this;
                that.$message({
                    message: '密码修改成功!',
                    type: 'success',
                    onClose: function() {
                        that.getLogOutFn();
                    }
                });
            }, true, (data)=>{
                this.$message.error(data.message);
            })
        }
    }
  }
</script>

<style scoped lang="scss">
  .user-center-container{
    padding: 60px 100px 0 100px;
    box-sizing: border-box;
    .user-center-title{
      font-family: PingFang-SC;
      font-size: 30px;
      font-weight: bold;
      color: #606266;
      border-bottom: 1px solid #f1f1f1;
      padding-bottom: 40px;
    }
    .user-change-phone-form{
      margin-top: 40px;
    }
  }
</style>
