<script setup lang="ts">
import RadioButtons from "@/components/RadioButtons/RadioButtons.vue"
import { ref } from "vue"

const selectedValue = ref<string | number>("1")

const radioOptions = [
  { label: "Опция 1", value: "1" },
  { label: "Опция 2", value: "2" },
  { label: "Опция 3", value: "3" },
]
</script>

<template>
  <div class="component">
    <h3>Radio Buttons</h3>
    <RadioButtons
      v-model="selectedValue"
      :options="radioOptions"
      name="example" />
    <p>Выбранное значение: {{ selectedValue }}</p>
  </div>
</template>

<style scoped lang="scss"></style>
