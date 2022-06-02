<template>
  <el-container class="layout-container-demo" style="height: 500px">
    <el-aside width="auto">
      <el-scrollbar>
        <el-menu 
        :collapse="isCollapse"
         default-active="2"
         class="el-menu-vertical-demo"
         background-color="#304156"
         unique-opened>
          <Aside style="color:#f4f4f5"  :menuList="menuList" />
        </el-menu>
       </el-scrollbar>
    </el-aside>
    <el-container>
        <el-header style="text-align: right; font-size: 12px">
            <Header />
        </el-header>
        <el-main>
            <el-scrollbar>
              <!-- <route-view></route-view> -->
            <Content />
            </el-scrollbar>
        </el-main> 
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import Aside from '@/components/Layout/Aside.vue';
import Header from '@/components/Layout/Header.vue';
import Content from '@/components/Layout/Content.vue';

import { reactive } from 'vue';
import { computed } from 'vue';
import {collpase} from '@/store/index';
const store=collpase()
const isCollapse=computed(()=>{
  return  store.getCollapse
})
let menuList=reactive([
        {
          path:"/home",
          component:"components",
          name:"home",
          meta:{ 
            title:"首页",
            icon:"HomeFilled",
          },
          nochild:true
        },
        {
          path:"/system",
          component:"components",
          name:"system",
          meta:{ 
            title:"系统设置",
            icon:"Setting",
          },
              children:[
                  {
                    path:"",
                    component:"components",
                    name:"",
                    meta:{
                      title:"Option 1",
                      icon:"",
                    }
                  }
              ],
        },
         {
          path:"/student",
          component:"components",
          name:"student",
          meta:{ 
            title:"学生管理",
            icon:"Stamp",
          },
              children:[
                  {
                    path:"",
                    component:"components",
                    name:"",
                    meta:{
                      title:"Option 1",
                      icon:"",
                    }
                  }
              ],
        },
        {
          path:"/reading",
          component:"components",
          name:"reading",
          meta:{ 
            title:"阅览室管理",
            icon:"Reading",
          },
              children:[
                  {
                    path:"",
                    component:"components",
                    name:"",
                    meta:{
                      title:"Option 1",
                      icon:"",
                    }
                  }
              ],
        },
         {
          path:"/score",
          component:"components",
          name:"score",
          meta:{ 
            title:"信用积分管理",
            icon:"UserFilled",
          },
              children:[
                  {
                    path:"",
                    component:"",
                    name:"",
                    meta:{
                      title:"Option 1",
                      icon:"",
                    }
                  }
          ],
        },
        {
          path:"/class",
          component:"",
          name:"class",
          meta:{ 
            title:"班级管理",
            icon:"Collection",
          },
              children:[
                {
                  path:"",
                  component:"",
                  name:"",
                  meta:{
                    title:"Option 1",
                    icon:"",
                  }
                }
              ],
        },
      ])
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
  display: flex;
 align-items: center;
}
/* .layout-container-demo .el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
} */
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
/*menu*/
.el-aside{
    height: 100vh;
}
.el-scrollbar {
    background-color: #304156;
}
.el-menu-vertical-demo:not(.el-menu--collapse){
  width: 230px;
  min-height: 400px;
}
.el-menu{
  border-right: none;
}
:deep(.el-sub-menu .el-sub-menu__title){
  color: #f4f4f5!important;
}

:deep(.el-menu .el-menu-item){
  color:#bfcbd9;
}
:deep(.el-menu-item .is-active){
  color: #409eff!important;
}
:deep(.is-opened .el-menu-item){
  background-color: #1f2d3d!important;
}
:deep(.el-menu-item:hover){
  background-color: #001528!important;
}

</style>