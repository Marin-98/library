<template>
    <div class="item" v-for="item in stuarr" :key=item.id>
        <img :src="item.imageurl" />
        <div class="list">
            <p>学号：{{ item.sno }}</p>
            <p>姓名：{{ item.sname }}</p>
            <p>电话：{{ item.stele }}</p>
        </div>
        <div class="delimg">
             <img class="del" @click="del(item.sno)" src="../assets/delete.png" />
        </div>
    </div>
    <img class="add" @click="add" src="../assets/add.png"/>
</template>

<script lang="ts">
import { reactive } from "vue";
import { DelStuInfo, getStuInfo } from "../utils/serve";

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
        
        const stuarr=reactive<IStuInfo []>(resdata)
        const add=()=>{
           const stu:IStuInfo={
                sno:"192000",
                sname:"123",
                stele:"123",
                imageurl:"../assets/add.png"
           }
           stuarr.push(stu)
        }
        const del=(sno:string)=>{
            
            // const {rescode}=DelStuInfo(sno);
            // alert("删除成功");
        }
        return {
            stuarr,
            add,
            del
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
</style>
