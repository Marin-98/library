<template>
    <el-card 
        :style="{
          boxShadow: `var(--el-box-shadow-dark)`,
        }"
        class="box-card">
        <template #header>
        <!-- <div class="card-header">
            <el-button type="primary" size="mini" >
            <el-icon> <Edit /></el-icon>
                选座
            </el-button>
            <Search @searchHandle="searchHandle($event)"></Search>
        </div> -->
        </template>
        <el-table ref="multipleTableRef"
             :data="tableData.resdata.slice((currentPage - 1) * pageSize, currentPage * pageSize)"
             style="width: 100%"
             border>
            <el-table-column type="selection" width="55" />
            <el-table-column prop="createTime" label="时间" width="300"/>
            <el-table-column prop="grade" label="积分"/>
            <el-table-column prop="cause" label="备注"/>
            <el-table-column prop="aggregateScore" label="总积分"/>
        </el-table>
        <br/>
        <el-pagination
            small
            background
            layout="prev, pager, next"
            :total="tableData.resdata.length"
            v-model:current-page="currentPage"
            :page-size="pageSize"
            class="mt-4"
        />
  </el-card>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import {GetIntegralList } from '@/utils/serve';
    const tableData = reactive({
        resdata: [],
    });
    const currentPage = ref(1);
    const pageSize = ref(14);

    if (localStorage.getItem('userInfo')) { //存储用户信息
        const userInfo = JSON.parse(localStorage.getItem('userInfo'));
        const userId = userInfo.id;
        GetIntegralList(userId,function(res){
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
  justify-content: space-between;
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