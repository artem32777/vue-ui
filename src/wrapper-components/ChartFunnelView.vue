<script setup lang="ts">
import ChartFunnel from "@/components/charts/ChartFunnel.vue"
</script>

<template>
  <div class="component">
    <h3>Chart Funnel</h3>
    <div class="ui-loader-wrapper">
      <ChartFunnel
        :data="[
          { name: 'mail.ru', value: 20 },
          { name: 'bk.ru', value: 27 },
          { name: 'yandex.ru', value: 14 },
          { name: 'google.com', value: 35 },
          { name: 'google.com', value: 12 },
        ]" />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
