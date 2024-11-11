<script setup lang="ts">

import Toast from "@/components/Toast.vue"
import { ref } from "vue"

const isToastActive = ref(true)
</script>

<template>
  dsdsds
  <div @click="isToastActive = !isToastActive">click</div>
  <Toast v-model="isToastActive">
    dsddsds
  </Toast>


</template>

<style scoped>

</style>
