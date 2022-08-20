<template>
  <view class="background">
    <view class="logo">
      <image src="../../static/imags/logo1.png" mode="scaleToFill" />
    </view>
    <view class="phoneNumber">
      <text>12345678987</text>
    </view>
    <view class="logo posit">
      <image src="../../static/imags/logo1.png" mode="scaleToFill" />
      <image src="../../static/imags/logo1.png" mode="scaleToFill" style="margin-left: 16vw;margin-bottom: 1vh;" />
    </view>
    <view class="btArea">
      <navigator class="btArea" url="">
        <u-button :post="post"></u-button>
      </navigator>
    </view>
    <view class="other">
      <navigator
        url="/pages/login/login_choice"
        open-type="navigate"
        hover-class="navigator-hover"
      >
        <text>短信或邮箱登录</text>
      </navigator>
      
    </view>
    <view class="agree">
      <agreement></agreement>
    </view>
    <view class="logo last">
      <image src="../../static/imags/logo1.png" mode="scaleToFill" />
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from "vue";
import uButton from "../components/button/universialButton.vue"
import agreement from "../components/widget/agreement.vue"

const post = ref({
  msg: '本机号码一键登录',
  color: "pink"
})


</script>

<style scoped>
.background {
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
  background-color: #FBD748;
}
.logo image {
  width: 20vw;
  height: 7vh;
}

.phoneNumber {
  color: rgb(53, 58, 58);
  font-size: 1.7rem;
  font-weight: 400;
}

.posit {
  width: 80vw;
  height: 0vh;
}

.btArea {
  border-radius: 20px;
}

.other {
  margin-top: -5vh;
  color: darkgray;
}

.last {
  align-self: end;
  margin-left: 3vw;
}
</style>