<template>
  <div class="user-center-container">
    <div class="user-center-title">更换手机号码</div>
    <div class="user-change-phone-form">
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" inline-message>
        <el-form-item prop="newMobile">
          <el-input type="tel" placeholder="新手机号" maxlength=11 v-model="ruleForm.newMobile" autocomplete="off">
            <p class="btn-text" slot="append" @click="getCode">
              <span v-show="!showCountDown">获取验证码</span>
              <span v-show="showCountDown">{{count}}s</span>
            </p>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="text" placeholder="验证码" v-model="ruleForm.password" autocomplete="off"></el-input>
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
import { getVerificationCode, getMobileUpdate } from "@/service/getData";
import { mapActions } from 'vuex';
// 倒计时时间
const TIME_COUNT = 60;
export default {
  name: "Page",
  data() {
    var validatePass = (rule, value, callback) => {
      let reg = /^1\d{10}$/;
      if (value === "") {
        callback(new Error("请输入手机号！"));
      } else if(!reg.test(value)) {
        callback(new Error("请输入正确的手机号！"));
      } else {
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码！"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        newMobile: "",
        password: ""
      },
      rules: {
        newMobile: [{ validator: validatePass, trigger: "blur" }],
        password: [{ validator: validatePass2, trigger: "blur" }]
      },
      showCountDown: false,
      count: TIME_COUNT,
      timer: null
    };
  },
  methods: {
    ...mapActions([
      'getLogOutFn',
    ]),
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
            getMobileUpdate({
                newMobile: this.ruleForm.newMobile,
                code: this.ruleForm.password
            }, res => {
                console.log(res);
                let that = this;
                that.$message({
                  message: '手机号码提交成功',
                  type: 'success',
                  onClose: function() {
                    localStorage.setItem('username', that.ruleForm.newMobile)
                    that.getLogOutFn();
                  }
                });
            }, true);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    cancelForm(formName) {
      this.$refs[formName].resetFields();
    },
    // 获取验证码
    getCode: function() {
      if (this.showCountDown && this.timer) {
        return false;
      }
      let reg = /^1\d{10}$/;
      if (!reg.test(this.ruleForm.newMobile)) {
        return false;
      }
      getVerificationCode(
        {
          mobile: this.ruleForm.newMobile,
          codeType: "130"
        },
        res => {
          if (res.code == 0) {
            this.countDown();
          }
        },
        true
      );
    },
    // 按钮变成倒计时
    countDown: function() {
      this.showCountDown = true;
      this.timer = setInterval(() => {
        if (this.count > 1 && this.count <= TIME_COUNT) {
          this.count--;
        } else {
          clearInterval(this.timer);
          this.timer = null;
          this.showCountDown = false;
          this.count = TIME_COUNT;
        }
      }, 1000);
    }
  }
};
</script>

<style scoped lang="scss">
.user-center-container {
  padding: 60px 100px 0 100px;
  box-sizing: border-box;
  .user-center-title {
    font-family: PingFang-SC;
    font-size: 30px;
    font-weight: bold;
    color: #606266;
    border-bottom: 1px solid #f1f1f1;
    padding-bottom: 40px;
  }
  .user-change-phone-form {
    margin-top: 40px;
  }
  .btn-text {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 0 15px;
    line-height: 38px;
    box-sizing: border-box;
    color: #26b080;
  }
}
</style>
