<template>
  <div >
    <el-container>
      <el-header>
        <h1>
          反馈与投诉
        </h1>
      </el-header>
      <el-container>
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
          <el-menu :default-openeds="['1', '3']">
            <el-submenu index="1">
              <template slot="title"><i class="el-icon-menu"></i>导航</template>
              <el-menu-item-group>
                <el-menu-item index="1" :plain="true" @click="open">
                  <router-link to="/">
                    回首页
                  </router-link>
                </el-menu-item>
                <el-menu-item index="1-1" :plain="true" @click="open">反馈</el-menu-item>
                <el-menu-item index="1-2" :plain="true" @click="open">投诉</el-menu-item>
                <el-menu-item index="1-3" :plain="true" @click="open">编辑</el-menu-item>
                <el-menu-item index="1-3" :plain="true" @click="open"><i class="el-icon-d-arrow-right"></i><i class="el-icon-d-arrow-right"></i>
                </el-menu-item>
              </el-menu-item-group>

            </el-submenu>
          </el-menu>
        </el-aside>
        <el-container>
          <el-main >
            <el-form ref="form" :model="form" label-width="80px">
              <el-form-item label="类别">
                <el-select v-model="form.category" placeholder="反馈">
                  <el-option label="反馈" value="反馈"></el-option>
                  <el-option label="投诉" value="投诉"></el-option>
                  <el-option label="其他" value="其他"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="内容">
              <el-input type="textarea" v-model="form.content" :rows="10"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit">发送</el-button>
                <el-button>
                  <a href="/" >
                    取消
                  </a>
                </el-button>
              </el-form-item>
            </el-form>
          </el-main>
          <el-footer>
            <h2>
              ©2019 - 2020  ywy
            </h2>
          </el-footer>
        </el-container>
      </el-container>
    </el-container>

  </div>
</template>
<script>
  import qs from 'qs';

  export default {
    data() {
      return {
        form: {
          category: "",
          content: "",
        },
        user:JSON.parse(localStorage.getItem('loginUser')),
      }
    },
    methods: {
      open() {
        this.$message({
          showClose: true,
          message: '请在右边填写你的内容吧',
          type: 'warning'
        });
      },
      onSubmit() {
        if (this.form.content.length != 0){
          let postData = {
            "category": this.form.category,
            "content": this.form.content,
            "userName":this.user.nickName,
            "userId":this.user.id,
          }
          this.$http
            .post('http://localhost:8080/feedback/save',qs.stringify(postData))
            .then((res)=>{
              console.log(res)
              // alert(JSON.stringify(res.data));
            })
            .catch((res)=>{
              alert("失败");
              console.log(res,'失败')
            })
        } else {
          alert("请输入反馈消息");
        }
      }
    }
  }
</script>
<style>
  .el-header, .el-footer {
    background-color: #409EFF;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    /*text-align: center;*/
    line-height: 160px;
  }
  .content1{
    height: 400px;
  }
  .im{
    color: black;
  }
</style>
