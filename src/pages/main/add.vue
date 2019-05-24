<template>
  <div >
    <el-container>
      <el-header>
        <h1>
          个人设置
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
                <el-menu-item index="1-1" :plain="true" @click="open">个人信息</el-menu-item>
                <el-menu-item index="1-2">修改密码</el-menu-item>
                <el-menu-item index="1-3" :plain="true" @click="open">其他</el-menu-item>
                <el-menu-item index="1-3" :plain="true" @click="open"><i class="el-icon-d-arrow-right"></i><i class="el-icon-d-arrow-right"></i>
                </el-menu-item>
              </el-menu-item-group>

            </el-submenu>
          </el-menu>
        </el-aside>
        <el-container>
          <el-main >
            <div>
              <!-- Form -->
              <div class="aaaa">
                <el-button type="primary" @click="dialogFormVisible = true" class="bbbb">修改密码</el-button>
              </div>

              <el-dialog title="修改密码" :visible.sync="dialogFormVisible">
                <el-form :model="form">
                  <el-form-item label="新密码" :label-width="formLabelWidth">
                    <el-input v-model="form.password" autocomplete="off"></el-input>
                  </el-form-item>


                </el-form>
                <div slot="footer" class="dialog-footer">
                  <el-button @click="dialogFormVisible = false">取 消</el-button>
                  <el-button type="primary"  @click="aaa">确 定</el-button>
                </div>
              </el-dialog>
            </div>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
    <el-container>
      <el-footer>
        <h2>
          ©2019 - 2020  ywy
        </h2>
      </el-footer>
    </el-container>
  </div>
</template>
<script>
  import qs from 'qs';

  export default {
    data() {
      return {
        user:JSON.parse(localStorage.getItem('loginUser')),
        dialogFormVisible: false,
        form: {
          password: ''
        },
        formLabelWidth: '120px'
      }
    },
    methods: {
      aaa() {
        let postData = {
          "id": this.user.id,
          "password": this.form.password,
        }
        this.$http
          .post('http://localhost:8080/user/update/',qs.stringify(postData))
          .then(response=>{
            this.$message('修改成功')
          })
        this.dialogFormVisible = false ;
      },

      open() {
        this.$message({
          showClose: true,
          message: '功能正在开发哦',
          type: 'warning'
        });
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

  .aaaa{
    /*margin: 100px;*/
    text-align: left;

  }
  .bbbb{
    font-size: 30px ;
    width: 200px;
    /*margin: 100px;*/
  }
</style>
