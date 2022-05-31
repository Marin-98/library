<template>
   <div >
       <List />
   </div>

</template>

<script lang="ts">
import List from "@/components/List.vue"
export default{
    name: "Tele",
    components: { List },
}

</script>

<style scoped>
@media screen and (max-width: 750px) {
  .el-message-box {
    width: 60% !important;
  }
}
</style>