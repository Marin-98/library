<template>
    <el-card 
        :style="{
          boxShadow: `var(--el-box-shadow-dark)`,
        }"
        class="box-card">
        <template #header>
        <div class="card-header">
            <el-button type="primary" size="mini" @click="cancelSub()">
            <el-icon> <Delete /></el-icon>
                取消预约
            </el-button>
        </div>
        </template>
        <el-table ref="multipleTableRef"
             :data="tableData.resdata.slice((currentPage - 1) * pageSize, currentPage * pageSize)"
             style="width: 100%"
              @selection-change="handleSelectionChange"
             border>
            <el-table-column type="selection" width="55" />
            <el-table-column prop="subscribeTime" label="预约时间"  />
            <el-table-column prop="readingRoomName" label="阅览室" width="200"/>
            <el-table-column prop="subscribestate" label="预约状态" width="255" />
            <el-table-column prop="signResult" label="签到状态" width="100">
                <template #default="scope">
                    <span v-if="scope.row.signResult == '0'">已签到</span>
                    <span v-else-if="scope.row.signResult == '1'">未签到</span>
                    <span v-else>
                        <el-button type="primary" size="mini" @click="signuphandle(tableData.resdata[tableData.resdata.length-1].id)">签到</el-button>
                    </span>
                </template>
            </el-table-column>
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
import { CancelSeatOrder, GetSeatOrder, Signup } from '@/utils/serve';
import { inject } from 'vue-demi'
import moment from 'moment';
const reload = inject('reload')
    const tableData = reactive({
        resdata: [],
    });
    const currentPage = ref(1);
const pageSize = ref(14);
    const userInfo = ref(null)
    if (localStorage.getItem('userInfo')) { //存储用户信息
       userInfo.value = JSON.parse(localStorage.getItem('userInfo'));
    }
    GetSeatOrder(userInfo.value.id,function(res){
        tableData.resdata = res;
        tableData.resdata.forEach(item => {
            const date = new Date(item.subscribeTime);
            const now = new Date();
            if (moment(now) < moment(date).add(1, 'days')&&item.signResult === "-1") {
                item.subscribestate = "进行中";
            } else {
                item.subscribestate = "往期记录";
            }
        });
    });
    const multipleSelection = ref();
    
    const handleSelectionChange = (val:[]) => {
        multipleSelection.value = val;
    }
    const cancelSub = () => {
        multipleSelection.value.forEach(item => {
            if (item.signResult == "-1") {
                CancelSeatOrder(item.id, function (res) {
                if (res.code == 0) {
                    alert("取消预约成功");
                    reload();
                } else {
                    alert("取消预约失败");
                }
            });
           }
        });
    }
    const signuphandle=(id)=>{
        Signup(id,function(res){
            if(res.code == 0){
                alert("签到成功");
                reload();
            }
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