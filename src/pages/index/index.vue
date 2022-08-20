<template>
  <view>
    <button @click="jump()">跳转</button>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const jump = () => {
  uni.navigateTo({
    url: "/pages/login/direct_phone"
  })
} 
</script>

<style>
</style>
