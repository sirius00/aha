<template>
  <view class="background">
    <view class="logo">
      <image src="../../static/imags/logo2.png" mode="scaleToFill" />
    </view>
    <view class="top_text">
      <text>By trapping log in, you agree with our terms of service and privacy policy</text>
    </view>
    <view class="bt">
      <view class="btArea posi">
        <navigator class="btArea" url="/pages/login/login_email">
          <u-button :post="post1"></u-button>
        </navigator>
      </view>
      <view class="btArea posi">
        <navigator class="btArea" url="/pages/login/login_phone">
          <u-button :post="post2"></u-button>
        </navigator>
      </view>
    </view>

  </view>
</template>

<script setup lang="ts">
import { ref } from "vue";
import uButton from "../components/button/universialButton.vue"

const post1 = ref({
  msg: '邮箱登录',
  color: "blue"
})
const post2 = ref({
  msg: '手机号登录',
  color: "none"
})


</script>

<style scoped>
.background {
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background-color: #FBD748;
}

.logo {
  margin-top: -10vh;
}
.top_text {
  width: 70vw;
  font-size: 0.9rem;
  text-align: center;
}

.logo image {
  width: 30vw;
  height: 30vh;
}
.bt {
  margin-top: 5vh;
}
.btArea {
  border-radius: 20px;
}
.posi {
  margin-bottom: 3vh;
}

</style>