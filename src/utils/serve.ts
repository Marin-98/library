import axios from "@/http";
import { ref } from "vue";

const getStuInfo=()=>{
    const resdata = ref(null)
    const rescode = ref(200)
    const resMsg=ref("")
    axios({
            method: "get",   url: "http://www.mrblogs.top:8888/stu/getStuInfo",
     }).then((res) => {
            // console.log(res);
         resdata.value = res.data.data;
         rescode.value = res.data.code
         resMsg.value=res.data.msg
     });
    return {
        resdata,
        rescode,
        resMsg
    }
} 
const DelStuInfo=(sno)=>{
    const resdata = ref(null)
    const rescode = ref(200)
    const resMsg=ref("")
    axios({
            method: "get",   url: "http://www.mrblogs.top:8888/stu/delStu?sno="+sno,
     }).then((res) => {
            // console.log(res);
         resdata.value = res.data.data;
         rescode.value = res.data.code
         resMsg.value=res.data.msg
     });
    return {
        resdata,
        rescode,
        resMsg
    }
} 
export {
    getStuInfo,
    DelStuInfo
}