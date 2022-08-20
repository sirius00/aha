<template>
  <view class="bgground">
    <view class="phone_title">
      <text>My Phone Number</text>
    </view>
    <view class="phone_input">
      <view class="input1">
        <input placeholder="BD +86" type="text" class="input" disabled>
      </view>
      <view class="input2">
        <input placeholder="手机号" type="text" class="input">
      </view>
    </view>
    <view class="email_login">
      <text>Login By email</text>
    </view>
    <view class="continue">
      <navigator
        url="/pages/login/my_code"
        open-type="navigate"
        hover-class="navigator-hover"
      >
        <u-button :post="post"></u-button>
      </navigator>
      
    </view>
  </view>

</template>

<script setup lang="ts">
import uButton from "../components/button/universialButton.vue"
import { ref } from "vue"
const post = ref({
  msg: '继续',
  color: "pink"
})
</script>

<style scoped>
.bgground {
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  background-color: #FBD748;
}

.phone_title {
  align-self: flex-start;
  margin-top: 3vh;
  margin-left: 10vw;
  font-size: 1.5rem;
}

.phone_input {
  margin-top: 3vh;
  display: flex;
  width: 80vw;
}

.input1 {
  width: 30%;
}

.input2 {
  width: 65%;
  margin-left: 7vw;
}

.input {
  line-height: 28px;
  border: 2px solid transparent;
  border-bottom-color: #E455A1;
  padding: .2rem 0;
  outline: none;
  background-color: transparent;
  color: #0d0c22;
  transition: .3s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.input:focus,
input:hover {
  outline: none;
  padding: .2rem 1rem;
  border-radius: 1rem;
  border-color: #E455A1;
}

.input::placeholder {
  color: rgb(7, 7, 7);
}

.input:focus::placeholder {
  opacity: 0;
  transition: opacity .3s;
}

.email_login {
  color: #E455A1;
  align-self: flex-end;
  margin-top: 3vh;
  font-size: 0.8rem;
  margin-right: 3rem;
}

.continue {
  margin-top: 20vh;
}
</style>