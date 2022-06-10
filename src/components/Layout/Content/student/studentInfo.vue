<template>
      <el-card class="box-card"
      :style="{
          boxShadow: `var(--el-box-shadow-dark)`,
        }">
          <div class="container">
            <div v-show="!isEdit" class="tcommonBox">
                <header>
                    <h1>
                            编辑个人资料
                    </h1>
                </header>
                <section>
                    <ul class="userInfoBox" style="list-style:none">
                        <li class="avatarlist">
                            <span class="leftTitle">头像</span>
                            <!-- this.$store.state.host -->
                             <!-- action="http://www.vuebook.com/port/Userinfo/UploadImg" -->
                            <el-upload
                              class="avatar-uploader"
                              :action="'http://110.42.223.135:8888/Userinfo/UploadImg'"
                              :show-file-list="false"
                              :on-success="handleAvatarSuccess"
                              :before-upload="beforeAvatarUpload">
                              <img v-if="userInfoObj.avatar" :src="userInfoObj.avatar" class="avatar">
                              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                              <div slot="tip" class="el-upload__tip">点击上传头像，只能上传jpg/png文件，且不超过1mb</div>
                            </el-upload>
                        </li>
                        <li class="username">
                            <span class="leftTitle">昵称</span>
                            <el-input v-model="userInfoObj.username" placeholder="昵称"></el-input> <i  class="fa fa-wa fa-asterisk"></i>
                        </li>
                        <li>
                            <span class="leftTitle">电子邮件</span>
                            <span>{{userInfoObj.email}}</span>
                        </li>
                        <li>
                            <span class="leftTitle">性别</span>
                              <el-radio class="radio" v-model="userInfoObj.sex" label="0">男</el-radio>
                              <el-radio class="radio" v-model="userInfoObj.sex" label="1">女</el-radio>
                        </li>
                    </ul>
                    <div class="saveInfobtn">
                        <el-Button @click="isEdit=!isEdit">返 回</el-Button>
                        <el-Button @click="saveInfoFun()">保 存</el-Button>
                    </div>
                </section>
            </div>
            <div v-show="isEdit" class="tcommonBox">
                <header>
                    <h1>
                            个人信息
                        <span class="gotoEdit" v-on:click="isEdit=!isEdit">
                            <el-icon>
                                <Edit/>
                            </el-icon>编辑
                        </span>
                    </h1>
                </header>
                <section>
                    <ul class="userInfoBox" style="list-style:none">
                        <li class="avatarlist">
                            <span class="leftTitle">头像</span>
                            <div class="avatar-uploader">
                                <img  :src="userInfoObj.avatar?userInfoObj.avatar:'../img/tou.jpg'" class="avatar">
                            </div>
                        </li>
                        <li class="username">
                            <span class="leftTitle">昵称</span>
                            <span>{{userInfoObj.username?userInfoObj.username:"无"}}</span>

                        </li>
                        <li>
                            <span class="leftTitle">电子邮件</span>
                            <span>{{userInfoObj.email?userInfoObj.email:"无"}}</span>
                        </li>
                        <li>
                            <span class="leftTitle">性别</span>
                            <span>{{userInfoObj.sex==0?'女':'男'}}</span>
                        </li>
                    </ul>

                </section>
            </div>
        </div>
      </el-card>
</template>

<script setup lang="ts">
import { reactive, ref, toRefs } from 'vue';
import { ElMessage, ElMessageBox } from 'element-plus'
import { inject } from 'vue-demi'
import { UserInfoSave } from '@/utils/serve';
const reload = inject('reload')
    const isEdit =ref(true);
    const userInfoObj=reactive({
        avatar:'',
        username:'',
        email:'',
        sex:0,
    })
    if (localStorage.getItem('userInfo')) { //存储用户信息
        const user = JSON.parse(localStorage.getItem('userInfo'));
        userInfoObj.avatar=user.headPic;
        userInfoObj.username=user.username;
        userInfoObj.email=user.email;
        userInfoObj.sex=user.sex;
} 
    const beforeAvatarUpload=(file)=>{//判断头像大小
                const isJPG = file.type == 'image/png'||file.type=='image/jpg'||file.type=='image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 5;
                if (!isJPG) {
                    ElMessage.error('上传头像图片只能是 JPG/JPEG/PNG 格式!');
                }
                if (!isLt2M) {
                    ElMessage.error('上传头像图片大小不能超过 5MB!');
                }
                return isJPG && isLt2M;
    }
    const  handleAvatarSuccess=(res, file)=>{ //上传网站logo
                if(res.code==1001){//存储
                    userInfoObj.avatar = res.image_name;
                    ElMessage.success('上传图片成功');
                }else{
                    ElMessage.error('上传图片失败');
                }
    }
    const saveInfoFun = () => {//保存编辑的用户信息
                // if(userInfoObj.username!=null){ //昵称为必填
                //      ElMessage.error('昵称为必填项，请填写昵称');
                //      return;
                // }
        UserInfoSave(userInfoObj, function (res) {//保存信息接口，返回展示页
                 localStorage.setItem('userInfo', JSON.stringify(res.data));
                    ElMessage.success( '保存成功！');
                    isEdit.value = false;
                    reload();
                })
            }
</script>

<style scoped>
:deep(h1){
    text-align: center;
}
.box-card {
    width: auto;
    margin: 16px 16px;
    padding: 24px 24px;
    background-color: #fff;
}
.userInfoBox .avatarlist{
    position: relative;
}

.avatar-uploader {
    display: inline-block;
    vertical-align: top;
}
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    width: 120px;
    height: 120px;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #20a0ff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 120px;
    height: 120px;
    line-height: 120px;
    text-align: center;
    position: absolute;
    top:0;
    left:0;
  }
  .avatar {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    display: block;
    object-fit: cover;
  }
.gotoEdit{
    font-size: 15px;
    float:right;
    cursor: pointer;
    color:#999;
}
.gotoEdit:hover {
    color:#333;
}
/*个人设置*/
.userInfoBox .leftTitle{
    display: inline-block;
    width:100px;
    padding: 10px 0;
}
.userInfoBox .rightInner{
    display: inline-block;
    max-width: calc(100% - 140px);
    vertical-align: top;
}
.userInfoBox li{
    padding:20px;
    border-bottom: 1px solid #ddd;
}
.userInfoBox li:last-child{
    border-bottom: 1px solid transparent;
}
.userInfoBox  .el-input,.userInfoBox  .el-textarea{
    max-width:300px;
    min-width: 100px;
}

.userInfoBox .el-input__inner{
    border-radius: 4px;
}
.userInfoBox  .el-textarea{
    vertical-align: top;
}
.saveInfobtn{
    margin: 20px 0;
    text-align: center;
}
.saveInfobtn a{
    color:#fff;
    padding:6px 20px;
    margin:5px 10px;
    border-radius: 5px;
    font-size: 14px;
}
.userInfoBox .fa-asterisk{
    color: #DF2050;
}
</style>