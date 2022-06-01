<template>
   <div >
       <List />
   </div>

</template>

<script lang="ts" setup>
import List from "@/components/Other/List.vue"
</script>
<style scoped>
@media screen and (max-width: 750px) {
  .el-message-box {
    width: 60% !important;
  }
}
</style>