<script setup lang="ts">
import { ref } from "vue"
import Toast from "@/components/Toast/Toast.vue"

const isToastActive = ref(false)
</script>

<template>
  <div class="component">
    <h3>Toast</h3>
    <div>
      <button @click="isToastActive = !isToastActive">click</button>
      <Toast v-model="isToastActive"> Some info </Toast>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
