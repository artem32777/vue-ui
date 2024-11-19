<script setup lang="ts">
import Loader from "@/components/Loader/Loader.vue"
</script>

<template>
  <div class="component">
    <h3>Loader</h3>
    <div class="ui-loader-wrapper">
      <Loader />
    </div>
  </div>
</template>

<style scoped lang="scss">
.ui-loader-wrapper {
  position: relative;
  width: 50px;
  height: 50px;
}
</style>
