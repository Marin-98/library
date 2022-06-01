<template>
        <template v-for="menu in menuList" :key="menu.path">
          <el-sub-menu  v-if="menu.children&&menu.children.length>0" :index="menu.path">
            <template #title>
              <el-icon>
                <component :is="menu.meta.icon"></component>
              </el-icon>{{ menu.meta.title }}
            </template>
            <Aside style="color:#f4f4f5"  :menuList="menu.children">  </Aside>
          </el-sub-menu>

          <el-menu-item v-else :index="menu.path">
            <template #title>  
              <el-icon>
                <component :is="menu.meta.icon" />
              </el-icon>{{ menu.meta.title }}
            </template>
          </el-menu-item>

        </template>
   
</template>
<script lang="ts" setup>
defineProps(['menuList']) 
</script>

<style scoped lang="scss">
</style>