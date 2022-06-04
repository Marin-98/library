<template>
  <el-form
    ref="loginForm"
    :model="loginUser"
    :rules="rules"
    label-width="0px"
    class="loginForm sign-in-form"
  >
    <h2 class="form_title title">用户登录</h2>
    <el-form-item  prop="email">
      <el-input
        v-model="loginUser.email"
        placeholder="Email"
      ></el-input>
    </el-form-item>
    <el-form-item  prop="password">
      <el-input
        v-model="loginUser.password"
        type="password"
        placeholder="Password..."
      ></el-input>
    </el-form-item>

   <!-- 找回密码 -->
    <div class="tiparea">
      <a>忘记密码？ </a>
    </div>
    <el-form-item>
      <el-button
        @click="handleLogin('loginForm')"
        type="primary"
        class="submit-btn"
        >提交</el-button
      >
    </el-form-item>

   
  </el-form>
</template>

<script lang="ts">
import axios from "axios";
import { ref, getCurrentInstance, reactive } from "vue";
import { useRouter } from "vue-router";
export default {
  props: {
    loginUser: {
      type: Object,
      required: true,
    },
    rules: {
      type: Object,
      required: true,
    },
  },
  setup() {
    // @ts-ignore
    const { ctx } = getCurrentInstance();
    const router = useRouter();
    // 触发登录方法
    const handleLogin = (formName: string) => {
      ctx.$refs[formName].validate( (valid: boolean) => {
        if (valid) {
         axios({
            method: "post",
            url: "http://localhost:8888/user/Login",
            headers: {
              'Content-Type': "application/json",
            },
            data: {
              email:ctx.loginUser.email,
              password: ctx.loginUser.password,
            },
    }).then((res) => {
        if (res.data.code == 0) {
            localStorage.setItem('userInfo', JSON.stringify(res.data.data));
            router.push('/home');
        }else{
            alert(res.data.msg);
        }
     });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    };
    return { handleLogin };
  },
};
</script>
<style scoped>
.loginForm {
    display: flex;
    justify-content: center;
    background-color: #fff;
    box-shadow: 0px 5px 10px #cccc;
    border-radius: 5px;
    align-items: center;
    flex-direction: column;
    width: 80%;
    height: 60%;
}
.title {
    font-size: 24px;
    font-weight: 700;
    line-height: 2;
    color: #181818;
}

.el-input {
    width: 300px;
    height: 40px;
    margin: 4px 0px;
    /* padding-left: 25px; */
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
    width: 180px;
    height: 40px;
    border-radius: 25px;
    /* margin-top: 50px; */
    font-weight: 700;
    font-size: 14px;
    background-color: #8894ff;
    letter-spacing: 1.15px;
    /* background-color: #4B70E2; */
    color: #f9f9f9;
    box-shadow: 8px 8px 16px #d1d9e6, -8px -8px 16px #f9f9f9;
    border: none;
    outline: none;
}
.el-button:hover{
    width: 180px;
    height: 40px;
    border-radius: 25px;
    /* margin-top: 50px; */
    font-weight: 700;
    font-size: 14px;
    background-color: #8894ff;
    transform: scale(0.985);
    transition: 0.25s;
    letter-spacing: 1.15px;
    /* background-color: #4B70E2; */
    color: #f9f9f9;
    box-shadow: 8px 8px 16px #d1d9e6, -8px -8px 16px #f9f9f9;
    border: none;
    outline: none;
}
/* .submit-btn {
  width: 100%;
} */
.tiparea {
  /* margin-top: 10px; */
  margin-bottom:10px;
  /* text-align: right; */
  font-size: 16px;
  color: #333;
}
.tiparea p a {
  color: #68e070;
}
</style>