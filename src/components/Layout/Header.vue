<template>
        <!-- <div class="theme">
         
        </div>   -->
        <div class="toolbar">
            <el-icon class="menu"><Menu /></el-icon>
          <el-dropdown>
            <el-icon style="margin-right: 8px; margin-top: 1px">
                <setting/>
            </el-icon>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>View</el-dropdown-item>
                <el-dropdown-item>Add</el-dropdown-item>
                <el-dropdown-item>Delete</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <span>Tom</span>
        </div>
</template>

<script setup lang="ts">
import { Menu as Menu,Setting } from '@element-plus/icons-vue'
</script>

<style scoped>
.menu{
    margin-left: 8px;
    width: 70%;
    margin-top: 1px;
}
/* .theme {
  display: flex;
 align-items: center;
 display: inline-block;
  justify-content: center;
height: 50px;
}
.toolbar{
    display: flex;
    height: 50px;
    justify-content: center;
    align-items: center;
    display: inline-block;
} */
</style>