<template>
  <div class="login-container">
    <div class="left-box">
      <div class="top">
        <div class="icon">
          <img src="../../assets/login-logo.png" alt />
        </div>
        <div class="heima">黑马面面</div>
        <div class="line"></div>
        <div class="userLogin">用户登录</div>
      </div>
      <el-form ref="form" :model="loginForm" label-width="43px">
        <el-form-item>
          <el-input placeholder="请输入手机号" prefix-icon="el-icon-user" v-model="loginForm.phoneNumber"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            placeholder="请输入密码"
            show-password
            prefix-icon="el-icon-goods"
            v-model="loginForm.passWord"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-row class="total-row">
            <el-col :span="17">
              <el-input
                class="lastitem"
                placeholder="请输入验证码"
                prefix-icon="el-icon-key"
                v-model="loginForm.securityCode"
              ></el-input>
            </el-col>
            <el-col :span="7">
              <img class="number" src="../../assets/yanzhengma.png" alt />
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item>
          <el-checkbox v-model="checked">
            我已阅读和同意
            <el-link type="primary">隐私协议</el-link>和
            <el-link type="primary">隐私条款</el-link>
          </el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="login buttons">登录</el-button>
          <el-button type="primary" class="login buttons">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
    <img src="../../assets/login_banner_ele.png" alt />
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      loginForm: {
        phoneNumber: "",
        passWord: "",
        securityCode: "",
        checked: false
      }
    };
  }
};
</script>

<style lang="less" >
.login-container {
  height: 100%;
  background: linear-gradient(
    225deg,
    rgba(20, 147, 250, 1),
    rgba(1, 198, 250, 1)
  );
  //弹性布局
  display: flex;
  align-items: center;
  justify-content: space-around;
  .left-box {
    width: 478px;
    height: 550px;
    background: rgba(245, 245, 245, 1);
    padding-right: 41px;
    box-sizing: border-box;
    .top {
      margin-left: 48px;
      margin-top: 50px;
      margin-bottom: 31px;
      display: flex;
      align-items: center;
      .heima {
        margin-left: 13px;
        margin-right: 14px;
        font-size: 24px;
        font-family: SourceHanSansCN;
        font-weight: 400;
        color: rgba(12, 12, 12, 1);
      }
      .line {
        width: 1px;
        height: 28px;
        background: rgba(199, 199, 199, 1);
      }
      .userLogin {
        margin-left: 13px;
        font-size: 24px;
        font-family: SourceHanSansCN;
        font-weight: 400;
        color: rgba(12, 12, 12, 1);
      }
    }
    .number {
      width: 100%;
    }
    .el-checkbox {
      display: flex;
      align-items: center;
      .el-checkbox__label {
        display: flex;
      }
    }

    .buttons {
      width: 394px;
      height: 40px;
      background: rgba(20, 147, 250, 1);
      border-radius: 4px;
      margin-top: 27px;
    }
    .buttons + .buttons {
      margin-left: 0px;
    }
  }
}
</style>
