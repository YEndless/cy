<template>
  <div class="ugcBox-inner">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="发布微头条" name="first" style="height: 180px">
        <div class="ugc-content">
          <div >
            <div class="upload-box">
              <input v-model="name" placeholder="微头条" class="title-input"/>
              <textarea @input="descInput"
                        v-model="desc"
                        placeholder="有什么新鲜事想告诉大家"
                        class="title-input1"
                        maxlength="2000">
                  </textarea>
              <p class="words-number">{{txtVal}}/2000字</p>

              <div class="bui-box upload-footer">
                <div class="bui-left">
                  <span class="show-emoji">
                    <img src="http://p3.pstatp.com/origin/b76b00091cadfe239a6a" class="icon">
                  </span>
                </div>
                <div class="bui-right">
                  <el-button type="primary" @click="onSubmit">立即发布</el-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="发布图片" name="second" style="height: 180px">

        <div class="ugc-content">
          <div >
            <div class="upload-box">
              <input v-model="header" placeholder="标题" class="title-input"/>
              <input v-model="pic" placeholder="图片地址" class="title-input1"/>
              <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="类别">
                  <el-select v-model="form.type1" placeholder="类型">
                    <el-option label="卡通动漫" value="卡通动漫"></el-option>
                    <el-option label="壁纸" value="壁纸"></el-option>
                    <el-option label="游戏" value="游戏"></el-option>
                    <el-option label="植物花卉" value="植物花卉"></el-option>
                    <el-option label="汽车" value="汽车"></el-option>
                    <el-option label="影视" value="影视"></el-option>
                    <el-option label="动物" value="动物"></el-option>
                    <el-option label="风景" value="风景"></el-option>
                    <el-option label="明星" value="明星"></el-option>
                    <el-option label="其他" value="其他"></el-option>
                  </el-select>
                </el-form-item>
              </el-form>
              <div class="bui-box upload-footer">
                <div class="bui-left">
                  <span class="show-emoji">
                    <img src="http://p3.pstatp.com/origin/b76b00091cadfe239a6a" class="icon">
                  </span>
                </div>
                <div class="bui-right">
                  <el-button type="primary" @click="onSubmitPic">立即发布</el-button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import qs from 'qs';

  export default {
        name: "sendArticle",
      data(){
          return {
            txtVal: 0,
            desc:"",
            id:this.$route.params.id,
            user:JSON.parse(localStorage.getItem('loginUser')),
            name:"",
            activeName: 'first',

            form:{
              type1:'',
            },
            header:'',
            pic:'',
          }
      },
      methods: {
        descInput(){
          this.txtVal = this.desc.length;
        },
        handleClick(tab, event) {
          console.log(tab, event);
        },
        onSubmit() {
          if(this.name.length != 0){
            if (this.desc.length != 0){
              let postData = {
                "avatar":this.user.avatar,
                "auther":this.user.nickName,
                "name":this.name,
                "category": "微头条",
                "content": this.desc,
                "userId":this.user.id,
                "categoryId":1,
                "isDelete":1,
                "count":0
              }
              this.$http
                .post('http://localhost:8080/article/save',qs.stringify(postData))
                .then((res)=>{
                  if (res === null) {
                    return null ;
                  }
                  console.log(res)
                  // alert(JSON.stringify(res.data)+"发布成功");
                  // this.$message('发布成功!')
                  this.$router.go(0)
                  // alert("发布成功");
                  this.$message({
                    message: '发布成功',
                    type: 'success'
                  });
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
        },
        onSubmitPic() {
          if(this.header.length != 0){
            if (this.pic.length != 0){
              let postPic = {
                "userAvatar":this.user.avatar,
                "userId":this.user.id,
                "header":this.header,
                "type": this.form.type1,
                "pic": this.pic,
                "user":this.user.nickName,
                "zan":0
              }
              this.$http
                .post('http://localhost:8080/picture/save',qs.stringify(postPic))
                .then((res)=>{
                  if (res === null) {
                    return null ;
                  }
                  console.log(res)
                  // alert(JSON.stringify(res.data)+"发布成功");
                  // this.$message('发布成功!')
                  this.$router.go(0)
                  this.$message({
                    message: '发布成功',
                    type: 'success'
                  });
                })
                .catch((res)=>{
                  alert("失败");
                  console.log(res,'失败')
                })
            } else {
              alert("图片呢");
            }
          }else{
            alert("给ta取一个名字吧");
          }
        }
      },
    }
</script>

<style>
  .bui-left {
    float: left;
  }
  .ugcBox-inner {
    position: relative;
    border: 1px solid #e8e8e8;
    width: 100%;
  }
  .bui-box {
    display: block;
    zoom: 1;
  }

  ol, ul {
    list-style: none;
  }
  li {
    display: list-item;
  }
  .upload-box {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    position: relative;
  }
  .upload-box .title-input {
    width: 100%;
    height: 30px;
    display: block;
    font-size: 24px;
    padding: 13px 19px;
    resize: none;
    /*background-color: rgba(249, 249, 249, 0.93);*/
    transition: all .5s;
    border: 1px solid rgba(214, 214, 214, 0.93);
  }
  .upload-box .title-input1 {
    width: 100%;
    height: 100px;
    display: block;
    font-size: 14px;
    line-height: 1.4;
    padding: 13px 19px;
    border: 0;
    resize: none;
    /*background-color: #f4f5f6;*/
    background-color: #fff;
    transition: all .5s;
  }
  .upload-box .words-number {
    position: absolute;
    z-index: 3;
    bottom: 50px;
    right: 10px;
    display: inline-block;
    background-color: rgba(0,0,0,.5);
    border-radius: 50px;
    padding: 0 8px;
    color: #fff;
  }
  .upload-footer {
    border-top: 1px solid #e8e8e8;
    height: 40px;
  }
  .upload-footer .show-uploader i, .upload-footer .show-uploader span {
    display: inline-block;
    vertical-align: middle;
  }
  .upload-footer .show-uploader i {
    margin-right: 3px;
  }
  .show-emoji {
    display: inline-block;
    height: 39px;
    margin-left: 20px;
    vertical-align: middle;
    cursor: pointer;
  }
  .show-emoji .icon {
    width: 20px;
    height: 20px;
    margin-top: 9px;
  }
  img {
    border-style: none;
  }
  .upload-footer .bui-right {
    text-align: right;
  }
  .bui-right {
    float: right;
  }
</style>
