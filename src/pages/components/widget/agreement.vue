<template>
  <view class="agruement_sp">
    <view class="agree_log" @click="agree">
      <label>
        <checkbox value="cb" checked="true" color="#FFCC33" style="transform:scale(0.7)" />
      </label>
    </view>
    <view class="agree_text">
      <view>
        登录即表示您已同意
      </view>
      <view class="xy_link" @click="agreement()">
        <text>
          &laquo;用户协议&raquo;
        </text>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from "vue"
const flag = ref(false)
const show = ref(false)

const agree = () => {
  flag.value = !flag.value
  // this.$emit('ifagree', this.flag)
}
const agreement = () => {

}
</script>

<style scoped >
.agruement_sp {
	display: flex;
	flex-flow: row nowrap;
	justify-content: center;
	align-items: center;
	width: 20rem;
}
.agree_text {
	display: flex;
}
.xy_link {
	color: rgb(34, 116, 139);
}
.agree_log img {
	width: 70rpx;
	height: 70rpx;
}
</style>