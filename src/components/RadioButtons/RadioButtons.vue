<script lang="ts" setup>
import { defineModel } from "vue"

const modelValue = defineModel<string | number>("modelValue")

defineProps<{
  options: {
    label: string
    value: string | number
  }[]
}>()

const uniqueName = `radio-group-${crypto.randomUUID()}`
</script>

<template>
  <div class="radio-group">
    <label
      v-for="option in options"
      :key="option.value"
      class="radio-label">
      <input
        type="radio"
        :name="uniqueName"
        :value="option.value"
        :checked="option.value === modelValue"
        class="radio-input"
        @change="modelValue = option.value" />
      <span class="radio-text">{{ option.label }}</span>
    </label>
  </div>
</template>

<style scoped>
.radio-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.radio-label {
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
}

.radio-input {
  margin-right: 8px;
}

.radio-input:checked + .radio-text {
  font-weight: bold;
}
</style>
