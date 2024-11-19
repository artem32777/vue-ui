<script setup lang="ts">
import Toast from "@/components/Toast/Toast.vue"
import { ref } from "vue"
import ToastView from "@/wrapper-components/ToastView.vue"
import Loader from "@/components/Loader/Loader.vue"
import LoaderView from "@/wrapper-components/LoaderView.vue"
import TabsView from "@/wrapper-components/TabsView.vue"
</script>

<template>
  <div class="wrapper">
    <LoaderView/>
    <ToastView />
    <TabsView/>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  padding: 100px;
  display: flex;
  gap: 20px;
  align-items: center;
}
</style>
