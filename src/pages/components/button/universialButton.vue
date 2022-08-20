<template>
  <view class="btn">
    <!-- <button :class="color == 'pink' ? 'cpink' : 'cblue'"> {{ post.msg }}</button> -->
    <button :class="style"> {{ post.msg }}</button>
  </view>
</template>

<script setup lang="ts">
import { toRefs, defineProps, toRef } from 'vue'

const props = defineProps({
  post: {
    type: Object,
    default: {}
  }
})
const { post } = toRefs(props)
// console.log(post.value);
const color = post.value.color
let style: string = ''
if (color == 'pink') {
  style = 'cpink'
}else if(color == "blue") {
  style = 'cblue'
}else {
  style = 'cnone'
}

</script>

<style scoped>
.btn {
  width: 80vw;
  margin: 0 auto;
}

.cpink {
  color: azure;
  background-image: linear-gradient(to right, #E455A1, #FDAD5B);
  width: 80vw;
  border-radius: 25px;
}

.cblue {
  background-color: #3C5999;
  width: 80vw;
  border-radius: 25px;
}
.cnone {
    width: 80vw;
  border-radius: 25px;
  border: #E455A1 1px solid;
  background-color: #FBD748;
}
</style>