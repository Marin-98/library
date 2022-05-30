<template>
    <div class="body">
      <div class="main">
        <div class="container a-container" id="a-container">
            <RegisterForm
          :registerUser="registerUser"
          :registerRules="registerRules"/> 
        </div>
        
        <div class="container b-container" id="b-container">
            <LoginForm :loginUser="loginUser" :rules="rules"/>
        </div>

        <div class="switch" id="switch-cnt">
            <div class="switch__circle"></div>
            <div class="switch__circle switch__circle--t"></div>
            <div class="switch__container" id="switch-c1">
                <h2 class="switch__title title">登录账号</h2>
                <p class="switch__description description">
                    如果您已经有账号，请登录
                </p>
                <button class="switch__button button switch-btn" @click="change">登录</button>
            </div>
            <div class="switch__container is-hidden" id="switch-c2">
                <h2 class="switch__title title">注册账号</h2>
                <p class="switch__description description">
                    如果您还没有账号，请注册一个
                </p>
                <button class="switch__button button switch-btn" @click="change">注册</button>
            </div>
        </div>
    </div>
    </div>
</template>

<script lang="ts">
  
  import { loginUser, rules } from "@/utils/loginValidators";
  import { registerUser, registerRules } from "@/utils/registerValidators";
  import LoginForm from "@/components/LoginForm.vue";
  import RegisterForm from "@/components/RegisterForm.vue";
  export default{
    name: "LoginView",
    components: { LoginForm, RegisterForm },
    setup(){
     const change=()=>{
        const c1=document.getElementById("switch-c1");
        const c2=document.getElementById("switch-c2");
        const cnt=document.getElementById("switch-cnt");
        const aContainer=document.getElementById("a-container");
        const bContainer=document.getElementById("b-container");
        const switchCircle=document.getElementsByClassName("switch__circle");
        c1.classList.toggle("is-hidden");
        c2.classList.toggle("is-hidden");
        cnt.classList.add("is-gx");
        setInterval(()=>{
            cnt.classList.remove("is-gx");
        },1500);
        cnt.classList.toggle("is-txr");
        switchCircle[0].classList.toggle("is-txr");
        switchCircle[1].classList.toggle("is-txr");
        aContainer.classList.toggle("is-txl");
        bContainer.classList.toggle("is-txl");
        bContainer.classList.toggle("is-z200");
     }
     return{
        change,
        loginUser,
        rules,
        registerUser,
        registerRules
     }
    }
  };
</script>
<style scoped>
*,
*::after,
*::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    user-select: none;
} /* Generic */
.body {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
    /* background-color:#0d0d0d; */
    background: url(../assets/home-bg-2.png) 0% 0% / cover no-repeat;
    background-repeat: no-repeat;
    color: #a0a5a8;
} /**/
.main {
    position: relative;
    width: 1000px;
    min-width: 1000px;
    min-height: 600px;
    height: 600px;
    padding: 25px;
    /* background-color: #0d0d0d;; */
    /* box-shadow: 10px 10px 10px #d1d9e6, -10px -10px 10px #f9f9f9; */
    border-radius: 12px;
    overflow: hidden;
}
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    width: 600px;
    height: 100%;
    padding: 25px;
    background-color: #ecf0f3;
    transition: 1.25s;
}
.title {
    font-size: 34px;
    font-weight: 700;
    line-height: 3;
    color: #181818;
}
.description {
    font-size: 14px;
    letter-spacing: 0.25px;
    text-align: center;
    line-height: 1.6;
}
.button {
    width: 180px;
    height: 50px;
    border-radius: 25px;
    margin-top: 50px;
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 1.15px;
    background-color: #8894ff;
    color: #f9f9f9;
    box-shadow: 8px 8px 16px #d1d9e6, -8px -8px 16px #f9f9f9;
    border: none;
    outline: none;
} /**/
.a-container {
    z-index: 100;
    left: calc(100% - 600px);
}
.b-container {
    left: calc(100% - 600px);
    z-index: 0;
}
.switch {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 400px;
    padding: 50px;
    z-index: 200;
    transition: 1.25s;
    background-color: #ecf0f3;
    overflow: hidden;
    box-shadow: 4px 4px 10px #d1d9e6, -4px -4px 10px #f9f9f9;
}
.switch__circle {
    position: absolute;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background-color:  #8894ff;;
    /* box-shadow: inset 8px 8px 12px #d1d9e6, inset -8px -8px 12px #f9f9f9; */
    bottom: -60%;
    left: -60%;
    transition: 1.25s;
}
.switch__circle--t {
    top: -30%;
    left: 60%;
    width: 300px;
    height: 300px;
}
.switch__container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    width: 400px;
    padding: 50px 55px;
    transition: 1.25s;
}
.switch__button {
    cursor: pointer;
}
.switch__button:hover {
    /* box-shadow: 6px 6px 10px #d1d9e6, -6px -6px 10px #f9f9f9; */
    transform: scale(0.985);
    transition: 0.25s;
}
.switch__button:active,
.switch__button:focus {
    /* box-shadow: 2px 2px 6px #d1d9e6, -2px -2px 6px #f9f9f9; */
    transform: scale(0.97);
    transition: 0.25s;
} /**/
.is-txr {
    left: calc(100% - 400px);
    transition: 1.25s;
    transform-origin: left;
}
.is-txl {
    left: 0;
    transition: 1.25s;
    transform-origin: right;
}
.is-z200 {
    z-index: 200;
    transition: 1.25s;
}
.is-hidden {
    visibility: hidden;
    opacity: 0;
    position: absolute;
    transition: 1.25s;
}
.is-gx {
    animation: is-gx 1.25s;
}
@keyframes is-gx {
    0%,
    10%,
    100% {
        width: 400px;
    }
    30%,
    50% {
        width: 500px;
    }
}
</style>
