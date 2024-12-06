<script setup lang="ts">
import ToastView from "@/wrapper-components/ToastView.vue"
import LoaderView from "@/wrapper-components/LoaderView.vue"
import TabsView from "@/wrapper-components/TabsView.vue"
import ChartDoughnutView from "@/wrapper-components/ChartDoughnutView.vue"
import ChartFunnelView from "@/wrapper-components/ChartFunnelView.vue"
import ChartBarView from "@/wrapper-components/ChartBarView.vue"
</script>

<template>
  <div class="wrapper">
    <LoaderView />
    <ToastView />
    <TabsView />
    <ChartDoughnutView />
    <ChartFunnelView />
    <ChartBarView/>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  padding: 100px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
}
</style>
