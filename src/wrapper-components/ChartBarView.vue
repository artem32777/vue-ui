<script setup lang="ts">
import ChartDoughnut from "@/components/charts/ChartDoughnut.vue"
import ChartBar from "@/components/charts/ChartBar.vue"
</script>

<template>
  <div class="component">
    <h3>Chart Bar</h3>
    <div class="ui-loader-wrapper">
      <ChartBar
        :datasets="[
          {
            label: 'label-1',
            data: [
              { time: '08:00', value: 19 },
              { time: '09:00', value: 122 },
              { time: '10:00', value: 396 },
            ],
          },
        ]" />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
