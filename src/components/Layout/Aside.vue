<template>
      <!-- <el-card> -->
        <template v-for="menu in menuList" :key="menu.path">
          <el-sub-menu  v-if="menu.children&&menu.children.length>0" :index="menu.path">
            <template #title>
              <el-icon>
                <component :is="menu.meta.icon"></component>
              </el-icon><span>{{ menu.meta.title }}</span>
            </template>
            <Aside style="color:#333"  :menuList="menu.children">  </Aside>
          </el-sub-menu>
          <el-menu-item style="color:#333" v-else :index="menu.path">
            <template #title>  
              <el-icon >
                <component :is="menu.meta.icon" />
              </el-icon><span>{{ menu.meta.title }}</span>
            </template>
          </el-menu-item>
        </template>
      <!-- </el-card> -->
   
</template>
<script lang="ts" setup>
const props=defineProps(['menuList']) 

</script>

<style scoped lang="scss">
// :deep(.el-card__body){
//   padding: 0px;

// }
</style>