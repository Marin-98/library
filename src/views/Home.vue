<template>
  <el-container class="layout-container-demo" style="height: 500px">
    <el-aside width="auto">
      <el-scrollbar>
        <el-menu 
        :collapse="isCollapse"
        :default-active="activeIndex"
         class="el-menu-vertical-demo"
         background-color="#FFF"
         router
         unique-opened>
          <Aside style="color:#f4f4f5"  :menuList="menuList" />
        </el-menu>
      </el-scrollbar>
    </el-aside>
    <el-container>
        <el-header 
        style="text-align: right; font-size: 12px"
        >
            <Header />
        </el-header>
        <el-main>
              <router-view></router-view>
        </el-main> 
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import Aside from '@/components/Layout/Aside.vue';
import Header from '@/components/Layout/Header.vue';
import { useRoute } from 'vue-router';
import { reactive } from 'vue';
import { computed } from 'vue';
import {collpase} from '@/store/index';
import Home from '../views/Home.vue'
const store=collpase()
const isCollapse=computed(()=>{
  return  store.getCollapse
})
const route=useRoute()
const activeIndex=computed(()=>{
  const {path}=route;
  return path;
})
let menuList=reactive([
        {
          path:"/home",
          component:Home,
          name:"home",
          meta:{ 
            title:"首页",
            icon:"HomeFilled",
          },
          children:[
                  {
                    path:"/homeindex",
                    component:"@/components/Layout/Content/home/index.vue",
                    name:"",
                    meta:{
                      title:"首页信息",
                      icon:"",
                    }
                  }
              ],
        },
        {
          path:"/system",
          component:Home,
          name:"system",
          meta:{ 
            title:"系统设置",
            icon:"Setting",
          },
              children:[
                  {
                    path:"/systemindex",
                    component:"@/components/Layout/Content/system/index.vue",
                    name:"",
                    meta:{
                      title:"系统信息",
                      icon:"Setting",
                    }
                  }
              ],
        },
         {
          path:"/student",
          component:Home,
          name:"student",
          meta:{ 
            title:"学生管理",
            icon:"Stamp",
          },
              children:[
                  {
                    path:"/studentindex",
                    component:"@/components/Layout/Content/student/index.vue",
                    name:"",
                    meta:{
                      title:"学生信息",
                      icon:"",
                    }
                  }
              ],
        },
        {
          path:"/reading",
          component:Home,
          name:"reading",
          meta:{ 
            title:"阅览室管理",
            icon:"Reading",
          },
              children:[
                  {
                    path:"/seat",
                    // component:"@/components/Layout/Content/reading/Seat.vue",
                    name:"",
                    meta:{
                      title:"座位管理",
                      icon:"Place",
                    }
                  }
                   ,{
                    path:"/readingroom",
                    // component:"@/components/Layout/Content/reading/ReadingRoom.vue",
                    name:"",
                    meta:{
                      title:"阅览室类型",
                      icon:"Collection",
                    }
                  }
                  ,{
                    path:"/subreCard",
                    // component:"@/components/Layout/Content/reading/SubReCard.vue",
                    name:"",
                    meta:{
                      title:"学生座位预约记录",
                      icon:"List",
                    }
                  }
          ]
        },
         {
          path:"/score",
          component:Home,
          name:"score",
          meta:{ 
            title:"信用积分管理",
            icon:"UserFilled",
          },
              children:[
                  {
                    path:"/scoreindex",
                    component:"@/components/Layout/Content/score/index.vue",
                    name:"",
                    meta:{
                      title:"信用积分信息",
                      icon:"",
                    }
                  }
          ],
        },
        {
          path:"/class",
          component:Home,
          name:"class",
          meta:{ 
            title:"班级管理",
            icon:"Collection",
          },
              children:[
                {
                  path:"/classindex",
                  component:"@/components/Layout/Content/class/index.vue",
                  name:"",
                  meta:{
                    title:"班级信息",
                    icon:"",
                  }
                }
              ],
        },
      ])

// const type='light'

// const getCssVarName = (type: string) => {
//   return `--el-box-shadow${type ? '-' : ''}${type}`
// }
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
  background-color: #fff;
  /* background-color: var(--el-color-primary-light-7); */
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
  width: 100%;
  background-color: #f5f6fa;
  overflow-x: hidden;
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
    border-right: 1px solid var(--el-border-color);
}
.el-scrollbar {

    /* background-color: #304156; */
    background-color: #fff;
    box-shadow: #333;
}
.el-menu-vertical-demo:not(.el-menu--collapse){
  width: 230px;
  min-height: 400px;
}
.el-menu{
  border-right: none;
}
:deep(.el-sub-menu .el-sub-menu__title){
  /* color: #f4f4f5!important; */
  color: #333!important;
}

:deep(.el-menu .el-menu-item){
  color:#bfcbd9;
}
:deep(.el-menu-item.is-active){
  color: #409eff!important;
}
:deep(.is-opened .el-menu-item){
  /* background-color: #1f2d3d!important; */
  background-color: #fff!important;
}
:deep(.el-menu-item:hover){
  /* background-color: #001528!important; */
  color: #409eff!important;
}

/*button*/
:deep(.el-button)
{
  border-radius: 0;
}
</style>