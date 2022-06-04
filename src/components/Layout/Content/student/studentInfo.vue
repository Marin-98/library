<template>
      <el-card class="box-card"
      :style="{
          boxShadow: `var(--el-box-shadow-dark)`,
        }">
          <div class="container">
            <div  class="tcommonBox">
                <header>
                    <h1>
                            个人信息
                        <!-- <span class="gotoEdit"><i class="fa fa-wa fa-edit"></i>编辑</span> -->
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
import { reactive } from 'vue';

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