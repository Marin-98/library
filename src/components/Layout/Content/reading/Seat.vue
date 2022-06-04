<template>
    <el-card 
        :style="{
          boxShadow: `var(--el-box-shadow-dark)`,
        }"
        class="box-card">
        <template #header>
        <div class="card-header">
            <el-button type="primary" size="mini" >
            <el-icon> <Edit /></el-icon>
                生成座位
            </el-button>
            <Search @searchHandle="searchHandle($event)"></Search>
        </div>
        </template>
        <el-table ref="multipleTableRef"
             :data="tableData"
             style="width: 100%"
             border>
              <el-table-column type="selection" width="55" />
            <el-table-column prop="date" label="Date" width="180" />
            <el-table-column prop="name" label="Name" width="180" />
            <el-table-column prop="address" label="Address" />
        </el-table>
        <br/>
        <el-pagination
            small
            background
            layout="prev, pager, next"
            :total="100"
            class="mt-4"
        />
  </el-card>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import Search from '@/components/Layout/Search.vue'
    const tableData = [
    {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    ]
    const searchHandle=(event)=>{
        console.log(event)
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