<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="头条">
        <el-input v-model="form.header"></el-input>
      </el-form-item>
      <el-form-item label="类别">
        <el-select v-model="form.category" placeholder="请选择类别">
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
        <el-input type="textarea" v-model="form.content"></el-input>
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
  </div>
</template>
<script>
  import qs from 'qs';

  export default {
    data() {
      return {
        form: {
          auther:this.$route.params.nickName,
          category: "",
          header: "",
          content: "",
          "userId":""
        },
        id:this.$route.params.id,
      }
    },
    methods: {
      onSubmit() {
        let postData = {
          "auther":this.form.auther,
          "category": this.form.category,
          "header": this.form.header,
          "content": this.form.content,
          "userId":1
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

        console.log('submit!');
      }
    }
  }
</script>
