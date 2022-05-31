<template>
    <div class="item" v-for="item in stuarr" :key=item.id >
        <img :src="item.imageurl" />
        <div class="list" @click="show(item)">
            <p>学号：{{ item.sno }}</p>
            <p>姓名：{{ item.sname }}</p>
            <p>电话：{{ item.stele }}</p>
        </div>
        <div class="delimg">
             <img class="del" @click="del(item.sno)" src="../assets/delete.png" />
        </div>
    </div>
    <img class="add" @click="dialogVisible = true" src="../assets/add.png"/>
    <el-dialog
    v-model="dialogVisible"
    title="添加学生"
    width="80%"
    max-width="600px"
  >
    <el-form :model="stu">
      <el-form-item label="学号" :label-width="formLabelWidth">
        <el-input v-model="stu.sno" autocomplete="off" />
      </el-form-item>
      <el-form-item label="姓名" :label-width="formLabelWidth">
        <el-input v-model="stu.sname" autocomplete="off"/>
      </el-form-item>
      <el-form-item label="电话" :label-width="formLabelWidth">
        <el-input v-model="stu.stele" autocomplete="off"/>
      </el-form-item>
      <el-form-item label="图片" :label-width="formLabelWidth">
        <el-input v-model="stu.imageurl" autocomplete="off" />
      </el-form-item>
    </el-form>  <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="add"
          >确定</el-button
        >
      </span>
    </template>
  </el-dialog>
    
     <el-dialog
    v-model="dialogVisible2"
    title="查看详情"
    width="80%"
    max-width="600px">
           <img :src="stu.imageurl" />
            <p>学号：{{ stu.sno }}</p>
            <p>姓名：{{ stu.sname }}</p>
            <p>电话：{{ stu.stele }}</p>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible2 = false">取消</el-button>
        <el-button type="primary" @click="clear">确定</el-button
        >
      </span>
    </template>
  </el-dialog>


</template>

<script lang="ts">
import { reactive, ref } from "vue";
import { DelStuInfo, getStuInfo } from "../utils/serve";
import {  ElMessage, ElMessageBox } from 'element-plus'
import { fa } from "element-plus/lib/locale";

interface IStuInfo {
    id?: number;
    sno: string;
    sname: string;
    stele: string;
    imageurl: string;
}
export default {
    setup() {
       
        const {resdata} = getStuInfo();
        const dialogVisible = ref(false);
        const dialogVisible2 = ref(false);
        const stuarr=ref<IStuInfo[]>(resdata)
        const stu=reactive<IStuInfo>({
                sno: "",
                sname: "",
                stele:"",
                imageurl: "http://q1.qlogo.cn/g?b=qq&nk=1263421991&s=640"
           })
        const add=()=>{

              stuarr.value.push(stu)
              dialogVisible.value=false
        }
        const clear=()=>{
          stu.sname="";
            stu.sno="";
            stu.stele="";
            dialogVisible2.value=false
        }
        const show=(item:IStuInfo)=>{
            dialogVisible2.value=true,
            stu.imageurl=item.imageurl,
            stu.sno=item.sno,
            stu.sname=item.sname,
            stu.stele=item.stele
        }
        const del=(sno:string)=>{
            
            ElMessageBox.confirm(
                '确认删除?',
                {
                confirmButtonText: 'OK',
                cancelButtonText: 'Cancel',
                type: 'warning',
                }
            )
                .then(() => {
                // const {rescode}=DelStuInfo(sno);
                stuarr.value.splice(stuarr.value.findIndex(item=>item.sno===sno),1)
                ElMessage({
                    type: 'success',
                    message: '删除成功',
                })
                })
                .catch(() => {
                ElMessage({
                    type: 'info',
                    message: '取消删除',
                })
                })
        }
            
        return {
            dialogVisible,
            dialogVisible2,
            // currstu,
            stu,
            stuarr,
            add,
            del,
            show,
            clear
        };
    },
};
</script>

<style scoped lang="scss">
*{
    margin: 0;
    padding: 0;
    
}
.item{
    margin-top: 10px;
}
p {
   margin-top: 0px;
   margin-bottom: 0px;
   color: #7d7d7d;
}
.list {
    // margin: 7px 0;
    width: 70%;
    font-size: small;
    display: inline-block;
}
img {
    width: 60px;
}
.delimg{
    width:5%;
    display: inline-block;
}
.del {
        width: 20px;
        // height: 100%;
        margin: 20px auto;
        cursor: pointer;
}
.add{
    position:fixed;
    bottom:10px;
    right:10px;
    cursor: pointer;
}
@media screen and (max-width: 750px) {
  .el-message-box {
    width: 60% !important;
  }
}
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
