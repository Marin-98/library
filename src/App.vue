<template>
  <!-- <Home /> -->
  <router-view v-if="isRouterActive"></router-view>
</template>
<script lang="ts" setup>
import { ref, provide, nextTick } from 'vue-demi'
const isRouterActive = ref(true)
provide('reload', () => {
  isRouterActive.value = false
  nextTick(() => {
    isRouterActive.value = true
  })
})
</script>
<style>
*{
  margin:0;
  padding:0;
}
html{
  height: 100%;
}
</style>
