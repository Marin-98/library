<template>
    <el-card 
        :style="{
          boxShadow: `var(--el-box-shadow-dark)`,
        }"
        class="box-card">
        <template #header>
        <div class="card-header">
            <Search @searchHandle="searchHandle($event)"></Search>
        </div>
        </template>
        <el-table ref="multipleTableRef"
             :data="tableData.resdata"
             style="width: 100%"
             border>
            <el-table-column type="selection" width="55" />
            <el-table-column prop="name" label="阅览室" width="300px" />
            <el-table-column prop="updateTime" label="更新时间" width="400px"/>
            <el-table-column prop="row" label="行" width=“100px” />
            <el-table-column prop="lie" label="列" width=“100px” />
        </el-table>
        <br/>
        <el-pagination
            small
            background
            layout="prev, pager, next"
            :total="10"
            v-model:current-page="currentPage"
            :page-size="pageSize"
            class="mt-4"
        />
  </el-card>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import Search from '@/components/Layout/Search.vue'
import { GetReadingList } from '@/utils/serve';
    const tableData = reactive({
        resdata: [],
    });
     const currentPage = ref(1);
    const pageSize = ref(14);
     GetReadingList("",function(res){
         tableData.resdata = res;
    });
    
    const searchHandle = (event) => {
         GetReadingList(event,function(res){
            tableData.resdata = res;
         });
    }
</script>

<style scoped>
.box-card {
    width: auto;
    margin: 16px 16px;
    padding: 24px 24px;
    background-color: #fff;
}
/*card*/

.card-header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

:deep(.el-card__body){
    padding: 0;
}
:deep(.el-card__header){
    padding:15px 0px;
}

.el-pagination{
    padding: 0;
}
</style>