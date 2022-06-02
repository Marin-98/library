<template>
        <template v-for="menu in menuList" :key="menu.path">
          <el-sub-menu  v-if="menu.children||menu.nochild" :index="menu.path">
            <template #title>
              <el-icon>
                <component :is="menu.meta.icon"></component>
              </el-icon><span>{{ menu.meta.title }}</span>
            </template>
            <Aside style="color:#f4f4f5"  :menuList="menu.children">  </Aside>
          </el-sub-menu>

          <el-menu-item style="color:#f4f4f5" v-else :index="menu.path">
            <template #title>  
              <el-icon>
                <component :is="menu.meta.icon" />
              </el-icon><span>{{ menu.meta.title }}</span>
            </template>
          </el-menu-item>

        </template>
   
</template>
<script lang="ts" setup>
const props=defineProps(['menuList']) 

</script>

<style scoped lang="scss">
</style>