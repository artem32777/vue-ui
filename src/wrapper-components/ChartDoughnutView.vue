<script setup lang="ts">
import ChartDoughnut from "@/components/charts/ChartDoughnut.vue"
</script>

<template>
  <div class="component">
    <h3>Chart Doughnut</h3>
    <div class="ui-loader-wrapper">
      <ChartDoughnut
        :data="[
          { name: 'mail.ru', value: 20 },
          { name: 'bk.ru', value: 27 },
          { name: 'yandex.ru', value: 14 },
          { name: 'google.com', value: 35 },
        ]" />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
