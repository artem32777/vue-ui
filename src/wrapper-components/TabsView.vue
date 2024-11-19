<script setup lang="ts">
import Tabs from "@/components/Tabs/Tabs.vue"
</script>

<template>
  <div class="component">
    <h3>Tabs</h3>
    <Tabs
      :tabs="[
      { slot: 'tab1', button: 'Tab 1' },
      { slot: 'tab2', button: 'Tab 2' },
      { slot: 'tab3', button: 'Tab 3' },
    ]"
      tabs-name="Tabs">
      <template #tab1>
        <h3>Tab 1</h3>
      </template>
      <template #tab2>
        <h3>Tab 2</h3>
      </template>
      <template #tab3>
        <h3>Tab 3</h3>
      </template>
    </Tabs>
  </div>
</template>

<style scoped lang="scss">

</style>
