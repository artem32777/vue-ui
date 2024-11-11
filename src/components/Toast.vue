<script setup lang="ts">
enum IToastType {
  primary = "primary",
  secondary = "secondary",
}

const { type = IToastType.primary } = defineProps<{
  type?: IToastType
}>()

const isActive = defineModel<boolean>()
</script>

<template>
  <Transition name="toast">
    <div
      v-if="isActive"
      @click.self="isActive = false"
      class="ocm-toast">
      <aside :class="['ocm-toast__body', `ocm-toast__body--${type}`]">
        <slot />
      </aside>
    </div>
  </Transition>
</template>
<style lang="scss">
.ocm-toast {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 2000;
  &__body {
    background: #fff;
    position: absolute;
    width: 100%;
    height: 100%;
    &--primary {
      top: 52px;
      border-top-left-radius: 12px;
      border-top-right-radius: 12px;
      padding: 48px 60px 48px;
    }
    &--secondary {
      top: 80px;
      border-top-left-radius: 40px;
      border-top-right-radius: 40px;
      padding: 60px 60px 40px;
    }
  }
}
// ===================================================== //
.toast-enter-active,
.toast-leave-active {
  transition: opacity 0.2s ease 0s;
  .ocm-toast__body {
    transition: transform 0.2s ease;
  }
}

.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  .ocm-toast__body {
    transform: translateY(100%);
  }
}

.toast-enter-to,
.toast-leave-from {
  opacity: 1;
  .ocm-toast__body {
    transform: translateY(0);
  }
}

</style>
