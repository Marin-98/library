import axios from "@/http";
import { ref } from "vue";
import moment from 'moment';
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
const GetReadingList=(name,callback)=>{
    axios({
            method: "get",   url: "http://localhost:8888/reading/getAllReading?name="+name,
    }).then((res) => {
         callback && callback(res.data.data);
     });
} 
const GetIntegralList=(studentId,callback)=>{
    axios({
            method: "get",   url: "http://localhost:8888/log-integral/getLogIntegral?studentId="+studentId,
    }).then((res) => {
         callback && callback(res.data.data);
     });
} 
const GetSeatOrder=(studentId,callback)=>{
    axios({
            method: "get",   url: "http://localhost:8888/seat-order/getSeatOrder?studentId="+studentId,
    }).then((res) => {
         callback && callback(res.data.data);
     });
} 
const getSeatOrderBytime = (time:Date, readingRoomId, callback) => {
    const mytime=moment(time).format('YYYY-MM-DD');
    axios({
            method: "get",   url: "http://localhost:8888/seat-order/getSeatOrderBytime?time="+mytime+"&readingRoomId="+readingRoomId,
    }).then((res) => {
         callback && callback(res.data.data);
     });
} 
const SubSeatOrder = (time:Date,x,y,readingRoomId,userid,callback) => {
    const mytime=moment(time).format('YYYY-MM-DD HH:mm:ss');
    axios({
            method: "get",   url: "http://localhost:8888/seat-order/SubSeatOrder?time="+mytime+"&readingRoomId="+readingRoomId+"&userid="+userid+"&x="+x+"&y="+y,
    }).then((res) => {
         callback && callback(res.data);
     });
} 
const CancelSeatOrder = (id,callback) => {
    axios({
            method: "get",   url: "http://localhost:8888/seat-order/CancelSeatOrder?id="+id,
    }).then((res) => {
         callback && callback(res.data);
     });
} 

const Signup = (id,callback) => {
    axios({
            method: "get",   url: "http://localhost:8888/seat-order/SignUp?id="+id,
    }).then((res) => {
         callback && callback(res.data);
     });
} 
export {
    getStuInfo,
    DelStuInfo,
    GetIntegralList,
    GetReadingList,
    GetSeatOrder,
    getSeatOrderBytime,
    SubSeatOrder,
    CancelSeatOrder,
    Signup
}

