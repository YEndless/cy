<template>
  <div class="main">
    <div class="login">
      <div class="logo">
        <router-link to="/">
          <img :src="picUrl"/>
        </router-link>
      </div>
      <div class="account-password">
        <div class="title">
          <router-link to="/register">注册</router-link>
          <b>·</b>
          <router-link to="/login">登录</router-link>
        </div>
        <div class="input-account">
          <input type="text" placeholder="请输入账号" v-model="email"/>
          <i class="iconfont icon-zhanghao"></i>
        </div>
        <div class="input-password">
          <input type="password" placeholder="请输入密码" v-model="password"/>
          <i class="iconfont icon-mima"></i>
          <!--&#xe709;-->
        </div>
      </div>
      <div class="sign-in">
        <input type="button" class="bb" value="注册" @click="onClick">
      </div>
    </div>
  </div>
</template>

<script>
  import 'jquery/dist/jquery.min'
  import pic from "@/assets/tt.png";
  import qs from 'qs';

  export default {
    name:"Register" ,
    data() {
      return {
        email: '',
        password: '',
        picUrl:pic,
      }
    },
    methods: {
      onClick() {
        let postData = {
          "email": this.email,
          "password": this.password,
          "avatar": 'https://avatar.csdn.net/5/2/1/3_qq_39510798.jpg',
          "follow": '0',
          "follower": '0',
          "nickName":'TvT12345'
        }
        this.$http
          .post('http://localhost:8080/user/save',qs.stringify(postData))
          .then((res)=>{
            console.log(res)
            alert("成功");
            this.$router.push("/login")
          })
          .catch((res)=>{
            console.log(res,'失败')
          })
      }
    }
  }
</script>

<style scoped>
  .bg {
    background-color: #EEE;
    width: 100%;
    height: 1200px;
  }

  .logo {
    position: absolute;
    top: 50px;
    left: 50px;
  }

  input {
    outline: none;
  }

  li {
    position: relative;
    display: inline-block;
    padding: 8px 0;
    margin-bottom: -1px;
  }
  ul {
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 10px;
  }

  a {
    text-decoration: none;
  }
  .main {
    height: 100%;
    min-height: 500px;
    background-color: #f1f1f1;
    text-align: center;
    box-sizing: border-box;
    color: #969696;
    padding: 50px 50px 30px;
    width: 500px;
    margin: 50px auto 0 420px;
  }

  .logo {
    position: absolute;
    top: 56px;
    margin-left: 50px;
  }

  .title {
    font-size: 25px;
    font-weight: 700;
    color: #969696;
    margin-bottom: 60px;
  }

  .title a {
    color: #969696;
    padding: 10px;
    text-decoration: none;
    /*border-bottom: 2px solid;*/
  }

  .title a:hover {
    color: #ea6f5a;
    padding: 10px;
    text-decoration: none;
    border-bottom: 2px solid #ea6f5a;
  }

  .title a:nth-child(1) {
    color: #ea6f5a;
    border-bottom: 2px solid #ea6f5a;
  }

  .login {
    width: 400px;
    margin: 40px auto 0;
    padding: 50px 50px 30px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 0, 0, .1);
    display: inline-block;
    box-sizing: border-box;
  }

  .account-password {
    margin-bottom: 30px;
  }

  .input-account, .input-password {
    position: relative;
    width: 300px;
  }

  .account-password input {
    outline: none;
    border-radius: 4px 4px 0 0;
    height: 50px;
    padding: 4px 4px 0 40px;
    border: 1px solid #c8c8c8;
    background-color: hsla(0, 0%, 71%, .1);
    width: 100%;
    box-sizing: border-box;
  }

  .account-password i {
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: 24px;
    color: #969696;
  }

  .input-account > input {
    border-bottom: none;
  }

  .input-password > input {
    border-radius: 0 0 4px 4px;
  }

  .sign-in input {
    background-color: #3194d0;
    border-radius: 30px;
    font-size: 18px;
    padding: 9px 18px;
    color: #fff;
  }

  .bb{
    width: 200px
  }
</style>

