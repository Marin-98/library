<template>
  <el-form
    ref="registerForm"
    :model="registerUser"
    :rules="registerRules"
    label-width="0px"
    class="registerForm sign-up-form"
  >
    <h1 class="form_title title">注册</h1>
    <el-form-item  prop="name">
      <el-input
        v-model="registerUser.name"
        placeholder="UserName"
      ></el-input>
    </el-form-item>
    <el-form-item prop="email">
      <el-input
        v-model="registerUser.email"
        placeholder="Email"
      ></el-input>
    </el-form-item>
    <el-form-item  prop="password">
      <el-input
        v-model="registerUser.password"
        type="password"
        placeholder="Password"
      ></el-input>
    </el-form-item>
    <el-form-item  prop="password2">
      <el-input
        v-model="registerUser.password2"
        type="password"
        placeholder="Password Again"
      ></el-input>
    </el-form-item>

    <el-form-item>
      <el-select v-model="registerUser.role" placeholder="请选择身份">
        <el-option label="管理员" value="admin"></el-option>
        <el-option label="用户" value="user"></el-option>
        <!-- <el-option label="游客" value="visitor"></el-option> -->
      </el-select>
    </el-form-item>

    <el-form-item>
      <el-button
        @click="handleRegister('registerForm')"
        type="primary"
        class="submit-btn"
        >注册</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import axios from "axios";
import { ref, getCurrentInstance } from "vue";
export default {
  props: {
    registerUser: {
      type: Object,
      required: true,
    },
    registerRules: {
      type: Object,
      required: true,
    },
  },
  setup() {
    //@ts-ignore
    const { ctx } = getCurrentInstance();

    const handleRegister = (formName: string) => {
      ctx.$refs[formName].validate((valid: boolean) => {
        if (valid) {
          axios({
            method: "post",
            url: "http://localhost:8888/user/Register",
            data: ctx.registerUser,
          })
            .then((res) => {
              alert(res.data);
              // if (res.data.code === 200) {
              //   alert("注册成功");
              //   // ctx.$router.push("/login");
              // } else {
              //   ctx.$message.error(res.data.msg);
              // }
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    };
    return { 
      handleRegister 
    };
  },
};
</script>
<style scoped>
.registerForm {
    display: flex;
    justify-content: center;
    background-color: #fff;
    box-shadow: 0px 5px 10px #cccc;
    border-radius: 5px;
    align-items: center;
    flex-direction: column;
    width: 56%;
    height: 80%;
}
.title {
    font-size: 20px;
    font-weight: 700;
    line-height: 2;
    color: #181818;
}
:deep(div.el-input__wrapper){
  width: 195px;
}
.el-input {
    width: 217px;
    height: 30px;
    margin: 4px 0;
    font-size: 13px;
    letter-spacing: .15px;
    border: none;
    outline: none;
    font-family: 'Montserrat', sans-serif;
    background-color: #ecf0f3;
    transition: .25s ease;
    border-radius: 8px;
    box-shadow: inset 2px 2px 4px #d1d9e6, inset -2px -2px 4px #f9f9f9;
}
.el-button {
    width: 150px;
    height: 35px;
    border-radius: 25px;
    margin-top: 10px;
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 1.15px;
    background-color: #8894ff;
    color: #f9f9f9;
    box-shadow: 8px 8px 16px #d1d9e6, -8px -8px 16px #f9f9f9;
    border: none;
    outline: none;
}
.el-button:hover{
    width: 150px;
    height: 35px;
    border-radius: 25px;
    margin-top: 10px;
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 1.15px;
    background-color: #8894ff;
    color: #f9f9f9;
    box-shadow: 8px 8px 16px #d1d9e6, -8px -8px 16px #f9f9f9;
    border: none;
    outline: none;
    transform: scale(0.985); 
    transition: 0.25s;
    letter-spacing: 1.15px;
}
</style>