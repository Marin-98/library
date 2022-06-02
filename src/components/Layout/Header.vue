<template>
        <!-- <div class="theme">
         
        </div>   -->
        <div class="toolbar">
            <el-icon class="menu" @click="setCollapse">
              <component :is="status ? Fold : Expand"></component>
            </el-icon>
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
import {Fold,Expand} from '@element-plus/icons-vue'
import {collpase} from '@/store/index';
import { computed } from 'vue';
const store=collpase()
const status=computed(()=>{
  return  !store.getCollapse
})
const setCollapse=()=>{
  store.setCollapse(!store.getCollapse)
}
</script>

<style scoped>
.menu{
    margin-left: 8px;
    width: 70%;
    margin-top: 1px;
}
.el-icon{
  color: #fff;
  font-size: 24px;
  cursor: pointer;
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