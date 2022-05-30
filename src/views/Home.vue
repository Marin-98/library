<template>
  <el-container class="layout-container-demo" style="height: 500px">
    <Aside />
    <el-container>
        <el-header style="text-align: right; font-size: 12px">
            <Header />
        </el-header>
        <el-main>
            <el-scrollbar>
            <Contain />
            </el-scrollbar>
        </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import Aside from '@/components/Aside.vue';
import Header from '@/components/Header.vue';
import Contain from '@/components/Contain.vue';
export default{
    name: "Home",
    components: { Aside,Header,Contain},
}

</script>

<style scoped>

.el-aside,
.el-container{
    height: 100vh;
}
.el-scrollbar {
    background-color: #fff;
}

.layout-container-demo .el-header {
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
}
.layout-container-demo .el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
}
.layout-container-demo .el-menu {
    height: 100%;
  border-right: none;
}
.layout-container-demo .el-main {
  padding: 0;
}
.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}
</style>