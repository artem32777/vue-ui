<script setup lang="ts">
import Toast from "@/components/Toast/Toast.vue"
import { ref } from "vue"

const isToastActive = ref(false)
</script>

<template>
  <div @click="isToastActive = !isToastActive" class="button">Toast</div>
  <Toast
    v-model="isToastActive">
    Some info
  </Toast>
</template>

<style scoped lang="scss">
.button {
  padding: 10px;
  border: 1px solid red;
}
</style>
