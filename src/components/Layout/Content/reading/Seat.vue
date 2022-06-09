<template>
    <el-card 
        :style="{
          boxShadow: `var(--el-box-shadow-dark)`,
        }"
        class="box-card">
        <template #header>
        <div class="card-header">
            <el-button type="primary" @click="seatchose" size="mini" >
            <el-icon> <Edit /></el-icon>
                选座
            </el-button>
            <Search @searchHandle="searchHandle($event)"></Search>
        </div>
        </template>
        <el-table ref="multipleTableRef"
             :data="tableData.resdata"
             style="width: 100%"
             @selection-change="handleSelectionChange"
             border>
            <el-table-column type="selection" width="55" />
            <!-- <el-table-column prop="date" label="Date" width="180" /> -->
            <el-table-column prop="createTime" label="创建时间"/>
            <el-table-column prop="name" label="阅览室" width="300"/>
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
import { useRouter } from "vue-router";
    const tableData = reactive({
        resdata: [],
    });
    const router = useRouter();
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
    const multipleSelection = ref();
    const handleSelectionChange = (val:[]) => {
        multipleSelection.value = val;
    }
const seatchose = () => {
        if(multipleSelection.value.length == 0){
            alert("请选择阅览室");
            return;
        }else if(multipleSelection.value.length > 1){
            alert("只能选择一个阅览室");
            return;
        }
        if (localStorage.getItem('userInfo')) { //存储用户信息
            const userInfo = JSON.parse(localStorage.getItem('userInfo'));
            router.push({
            path: '/SeatChose',
            query: {
                id:multipleSelection.value[0].id,
                roomid: tableData.resdata[multipleSelection.value[0].id-1].id,
                row: tableData.resdata[multipleSelection.value[0].id-1].row,
                lie: tableData.resdata[multipleSelection.value[0].id-1].lie,
                userid: userInfo.id
            }
        });
        } 
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