<script setup lang="ts">
import { ref, defineProps, onMounted } from "vue"
import Loader from "@/components/Loader/Loader.vue"
import type { ITabsProps, ITab } from "@/components/Tabs/Tabs"

const { tabs, tabsName } = defineProps<ITabsProps>()
const activeTab = ref(tabs[0]?.slot || "")
const isLoading = ref(false)
const changeTab = (tab: ITab): void => {
  isLoading.value = true
  activeTab.value = tab.slot
  localStorage.setItem(`activeTab-${tabsName}`, tab.slot)
  isLoading.value = false
}

onMounted(() => {
  const savedTab = localStorage.getItem(`activeTab-${tabsName}`)
  if (savedTab) {
    activeTab.value = savedTab
  }
})
</script>
<template>
  <section class="ocm-tabs">
    <nav class="ocm-tabs__nav">
      <button
        v-for="tab in tabs"
        :key="tab.slot"
        :class="['ocm-tabs__button', { 'ocm-tabs__button-active': tab.slot === activeTab }]"
        @click="changeTab(tab)">
        {{ tab.button }}
      </button>
    </nav>
    <slot
      v-if="!isLoading"
      :name="activeTab"
      :key="activeTab" />
    <div
      v-else
      class="relative">
      <Loader />
    </div>
  </section>
</template>

<style scoped lang="scss">
$tabs-color-border-bottom: #000;

.ocm-tabs {
  position: relative;

  &__nav{
    display: flex;
    gap: 4px;
    flex-wrap: wrap;
    border-bottom: 1px solid $tabs-color-border-bottom;
    margin-bottom: 40px;
  }
  &__button {
    padding: 12px 24px 11px 24px;
    border-bottom: 3px solid transparent;
    cursor: pointer;
    color: grey;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0.48px;

    &:not(&-active):hover {
      border-radius: 10px;
      background: lightblue;
    }

    &-active {
      color: blue;
      border-color: violet;
    }
  }
}
</style>
