<template>
        <div class="toolbar">
            <el-icon class="menu" @click="setCollapse">
              <component :is="status ? Fold : Expand"></component>
            </el-icon>
          <el-dropdown style="justify-content: flex-end;display: flex;flex:1;">
            <el-icon style="margin-right: 8px; margin-top: 1px; ">
                <setting/>
            </el-icon>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>个人信息</el-dropdown-item>
                <el-dropdown-item>修改密码</el-dropdown-item>
                <el-dropdown-item>退出登录</el-dropdown-item>
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
.toolbar{
  display: flex;
  width: 100%;
}
.menu{
    margin-left: 4px;
    margin-top: 1px;
    justify-content: flex-start;
     display: flex;
}
.el-icon{
  color: #fff;
  font-size: 26px;
  cursor: pointer;
}
</style>