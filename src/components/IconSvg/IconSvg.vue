<script setup lang="ts">
import { ICONS } from "@/components/IconSvg/iconSvg.data"
import type { ICONS_TITLES } from "@/components/IconSvg/iconSvg.data"

defineProps<{
  name: ICONS_TITLES
}>()
</script>

<template>
  <svg
    :class="['h-24', 'w-24']"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    v-html="ICONS[name]" />
</template>
