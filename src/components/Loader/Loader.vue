<script setup lang="ts"></script>

<template>
  <div class="ui-loader">
    <i class="ui-loader__spinner" />
  </div>
</template>

<style scoped lang="scss">
.ui-loader {
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  &__spinner {
    width: 30px;
    height: 30px;
    border: 4px solid #1e3a8a;
    border-top-color: transparent;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
