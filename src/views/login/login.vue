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
      <div class="inprint">
        <el-input
          class="item"
          placeholder="请输入手机号"
          prefix-icon="el-icon-user"
          v-model="phoneNumber"
        ></el-input>
        <el-input
          class="item"
          placeholder="请输入密码"
          show-password
          prefix-icon="el-icon-goods"
          v-model="passWord"
        ></el-input>
        <el-row class="total-row">
          <el-col :span="17">
            <el-input
              class="lastitem"
              placeholder="请输入验证码"
              prefix-icon="el-icon-key"
              v-model="securityCode"
            ></el-input>
          </el-col>
          <el-col :span="7">
            <div class="number"></div>
          </el-col>
        </el-row>
      </div>
      <div class="protocol">
        <el-checkbox v-model="checked"></el-checkbox>我已阅读和同意
        <el-link type="primary">隐私协议</el-link>和
        <el-link type="primary">隐私条款</el-link>
      </div>
      <el-button type="primary" class="login buttons">登录</el-button>
      <el-button type="primary" class="login buttons">注册</el-button>
    </div>
    <img src="../../assets/login_banner_ele.png" alt />
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      phoneNumber: "",
      passWord: "",
      securityCode: "",
      checked: false
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
  display: flex;
  align-items: center;
  justify-content: space-around;
  .left-box {
    width: 478px;
    height: 550px;
    background: rgba(245, 245, 245, 1);
    .top {
      margin-left: 48px;
      margin-top: 50px;
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
    .inprint {
      .item {
        height: 43px;
        margin-top: 25px;
        margin-left: 43px;
        width: 394px;
      }
      .total-row {
        width: 394px;
        height: 44px;
        margin-top: 25px;
        margin-left: 43px;
        .number {
          height: 42px;
        }
      }
    }
    .protocol {
      margin-left: 44px;
      margin-top: 32px;
      height: 16px;
      font-size: 14px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(153, 153, 153, 1);
      line-height: 16px;
    }
    .buttons {
      width: 394px;
      height: 40px;
      background: rgba(20, 147, 250, 1);
      border-radius: 4px;
      margin-top:27px;
      margin-left: 42px;
    }
    .buttons+.buttons {
    margin-left: 42px;
}
  }
}
</style>
