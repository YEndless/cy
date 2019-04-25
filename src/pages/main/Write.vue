<template>
  <div >

    <el-container>
      <el-header>
        <h1>
          发布头条
        </h1>
      </el-header>
      <el-container>
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
          <el-menu :default-openeds="['1', '3']">
            <el-submenu index="1">
              <template slot="title"><i class="el-icon-menu"></i>导航</template>
              <el-menu-item-group>
                <el-menu-item index="1-1">写文章</el-menu-item>
                <el-menu-item index="1-2">
                  <a href="/">
                    回首页
                  </a>
                </el-menu-item>
                <el-menu-item index="1-3">
                  <a :href=" '/u/'+user.id" >我的主页</a>
                </el-menu-item>
              </el-menu-item-group>
              <!--<el-submenu index="1-4">-->
                <!--<template slot="title">选项4</template>-->
                <!--<el-menu-item index="1-4-1">选项4-1</el-menu-item>-->
              <!--</el-submenu>-->
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-container>
          <el-main >
            <el-form ref="form" :model="form" label-width="80px">
              <el-form-item label="头条">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="类别">
                <el-select v-model="form.category" placeholder="热点">
                  <el-option label="热点" value="热点"></el-option>
                  <el-option label="科技" value="科技"></el-option>
                  <el-option label="娱乐" value="娱乐"></el-option>
                  <el-option label="游戏" value="游戏"></el-option>
                  <el-option label="体育" value="体育"></el-option>
                  <el-option label="汽车" value="汽车"></el-option>
                  <el-option label="搞笑" value="搞笑"></el-option>
                  <el-option label="军事" value="军事"></el-option>
                  <el-option label="历史" value="历史"></el-option>
                  <el-option label="搞笑" value="搞笑"></el-option>
                  <el-option label="其他" value="其他"></el-option>
                </el-select>
              </el-form-item>

              <el-form-item label="内容">
                <el-input type="textarea" v-model="form.content" :rows="10"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit">立即发布</el-button>
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
          name:"",
          category: "",
          content: "",
        },
        id:this.$route.params.id,
        user:JSON.parse(localStorage.getItem('loginUser')),
      }
    },
    methods: {
      onSubmit() {

        if(this.form.name.length != 0){
          if (this.form.content.length != 0){
            let postData = {
              "category": this.form.category,
              "name": this.form.name,
              "content": this.form.content,
              "avatar":this.user.avatar,
              "auther":this.user.nickName,
              "userId":this.user.id,
              "categoryId":1,
              "isDelete":1,
              "count":0
            }
            this.$http
              .post('http://localhost:8080/article/save',qs.stringify(postData))
              .then((res)=>{
                console.log(res)
                alert(JSON.stringify(res.data));
              })
              .catch((res)=>{
                alert("失败");
                console.log(res,'失败')
              })
          } else {
            alert("什么都还没说呢");
          }
        }else{
          alert("给ta取一个名字吧");
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
</style>
