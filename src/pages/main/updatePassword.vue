<template>
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
</template>

<script>
  import qs from 'qs';

  export default {
    name: "updatePassword",
    data(){
      return{
        user: JSON.parse(localStorage.getItem('loginUser')),
        dialogFormVisible: false,
        form: {
          password: ''
        },
        formLabelWidth: '120px'
      }
    },
    methods:{
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
      }
    }
  }
</script>

<style scoped>
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
