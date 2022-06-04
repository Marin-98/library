<template>
        <div class="toolbar">
            <el-icon class="menu" @click="setCollapse">
              <component :is="status ? Fold : Expand"></component>
            </el-icon>
          <el-dropdown style="justify-content: flex-end;display: flex;flex:1;">
            <el-icon style="margin-right: 8px; margin-top: 1px; ">
                <!-- <setting/> -->
                <el-avatar :size="26" :src="imgurl" />
            </el-icon>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item @click="userInfo">个人信息</el-dropdown-item>
                <el-dropdown-item >修改密码</el-dropdown-item>
                <el-dropdown-item @click="Logout">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          
          <span>{{username}}</span>
        </div>
</template>

<script setup lang="ts">
import {Fold,Expand} from '@element-plus/icons-vue'
import {collpase} from '@/store/index';
import { computed, ref } from 'vue';
const store=collpase()
const status=computed(()=>{
  return  !store.getCollapse
})
const setCollapse=()=>{
  store.setCollapse(!store.getCollapse)
}

const imgurl=ref("http://q1.qlogo.cn/g?b=qq&nk=1263421991&s=640")
const username=ref("admin")
if (localStorage.getItem('userInfo')) { //存储用户信息
	const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  imgurl.value = userInfo.headPic;
  username.value = userInfo.username;
} 

const Logout=()=>{
  localStorage.removeItem('userInfo');
  window.location.href = '/';
}

const userInfo=()=>{
  window.location.href = '/userInfo';
}
</script>

<style scoped>
.toolbar{
  display: flex;
  width: 100%;
}
.menu{
    /* margin-left: 4px; */
    /* margin-top: 1px; */
    justify-content: flex-start;
     display: flex;
}
.el-icon{
  color: #000;
  font-size: 26px;
  cursor: pointer;
}
</style>