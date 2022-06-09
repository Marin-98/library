<template>
    <el-card 
        :style="{
          boxShadow: `var(--el-box-shadow-dark)`,
        }"
        class="box-card">
        <template #header>
        <div class="card-header">
            学生选座
            <div class="search_page">
                <el-date-picker
                v-model="value1"
                type="date"
                placeholder="Select date and time"/>
                <el-button type="primary">
                    查询
                </el-button>
            </div>
        </div>
        </template>
        <div style="height: 600px">
            <el-auto-resizer>
                <template #default="{ height, width }">
                    <el-table-v2
                    :columns="columns"
                    :data="data.resdata"
                    :width="width"
                    :height="height"
                    v-on:click="handleClick"
                    fixed
                    />
                </template>
            </el-auto-resizer>
        </div>
  </el-card>
</template>

<script setup lang="ts">
import { getSeatOrderBytime, SubSeatOrder } from '@/utils/serve';
import { reactive, ref } from 'vue'
import { useRoute } from 'vue-router';
import { ElMessage, ElMessageBox } from 'element-plus'
import { inject } from 'vue-demi'
const reload = inject('reload')
const route = useRoute().query;
const value1 = ref('')
value1.value = new Date().toString()

const generateColumns = (length = 10, prefix = 'column-', props?: any) =>
  Array.from({ length }).map((_, columnIndex) => ({
    ...props,
    key: `${prefix}${columnIndex}`,
    dataKey: `${prefix}${columnIndex}`,
    title: ` ${columnIndex+1}列`,
    width: 120,
  }))
const generateData = (
    columns: ReturnType<typeof generateColumns>,
    length = 200,
    prefix = 'row-',
    ) =>
    Array.from({ length }).map((_, rowIndex) => {
        return columns.reduce(
        (rowData, column, columnIndex) => {
            rowData[column.dataKey] = `${rowIndex+1}排 - ${columnIndex+1}座`
            if (hasselect.value!=null) {
                for (let i = 0; i < hasselect.value.length; i++) {
                    if (hasselect.value[i].yaxis == rowIndex + 1 && hasselect.value[i].xaxis == columnIndex + 1) {
                        rowData[column.dataKey] = `已被预约！`
                    }
                }
            } 
        return rowData
      },
      {
        id: `${prefix}${rowIndex}`,
          parentId: null,
      }
    )
    })
const columns = generateColumns(Number(route.lie))
const data = reactive({
    resdata: [],
})
const hasselect = ref([])
getSeatOrderBytime(new Date(value1.value),route.roomid,function(res){
    hasselect.value = res;
     data.resdata=generateData(columns, Number(route.row))
});

const handleClick = (rowIndex) => {
    const arr = rowIndex.path[0].innerHTML.split("排 - ");
    const col = arr[1].split("座")[0];
     ElMessageBox.confirm(
                `确定预约${arr[0]}排${col}座吗？`,
                {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }
     ).then(() =>
     {

         SubSeatOrder(new Date(value1.value), Number(col), Number(arr[0]), route.roomid, route.id, function (res) {
             if (res.code == 0) {
                 ElMessage.success(res.msg);
                  reload();
             } else {
                 ElMessage.error(res.msg);
             }
         })
     });
        
}

</script>

<style scoped lang="scss">
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
.search_page {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>