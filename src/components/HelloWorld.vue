<template>
  <div>
    <el-upload
      action="http://upload-z1.qiniu.com"
      :drag="true"
      :on-success="handleAvatarSuccess"
      :on-error="handleError"
      :before-upload="beforeAvatarUpload"
      :data="postData">
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em>      </div>
      <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不      超过500kb</div>
    </el-upload>


    <el-upload
      class="upload-demo"
      drag
      action="https://jsonplaceholder.typicode.com/posts/"
      multiple>
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>

    <div class="join_formitem">
      <label class="enquiry">验证码  <span>:</span></label>
      <div class = 'captcha'>
        <input type="text" placeholder="请输入验证码" class="yanzhengma_input" v-model="picLyanzhengma">
        <input type="button"  @click="createCode"  class="verification" v-model="checkCode"/>
      <button @click="ss">ssss</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name : 'MoUpload',
    props : {
      accepts : { //允许的上传类型
        type : String,
        default : 'image/jpeg,image/jpg,image/png,image/gif'
      },
      flag : [String, Number], //当前上传标识,以便于在同一个监听函数中区分不同的上传域
      maxSize : {
        type : Number,
        default : 0 //上传大小限制
      },
      code:'',
      checkCode:'',
      picLyanzengma:''
    },
    created(){
      this.createCode()
    },
    methods: {
// 图片验证码
      createCode(){
        //先清空验证码的输入
        this.code = "";
        this.checkCode = "";
        this.picLyanzhengma = "";
        //验证码的长度
        var codeLength = 4;
        //随机数
        var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');
        for(var i = 0; i < codeLength; i++) {
          //取得随机数的索引（0~35）
          var index = Math.floor(Math.random()*36);
          //根据索引取得随机数加到code上
          this.code += random[index];
        }
        //把code值赋给验证码
        this.checkCode = this.code;
      },
      ss(){
       if (this.checkCode == this.picLyanzhengma){
         alert("qqqqq")
       }
      },
      handleAvatarSuccess(res, file) {   //上传成功后在图片框显示图片
        this.imageUrl ='http://oq34prjoz.bkt.clouddn.com/'+ res.key
        console.log(res)
      },
      handleError(res) {   //显示错误
        console.log(res)
      },
      beforeAvatarUpload(file) {    //在图片提交前进行验证
        const isJPG = file.type === 'image/jpeg'
        const isPNG = file.type === 'image/png'
        const isLt2M = file.size / 1024 / 1024 < 2

        if (!isJPG&&!isPNG) {
          this.$message.error('上传头像图片只能是 JPG/PNG 格式!')
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!')
        }
        return isJPG && isPNG && isLt2m
      }
    }
  }
</script>
<style>
  .yanzhengma_input{
    font-family: 'Exo 2', sans-serif;
    border: 1px solid #fff;
    color: #fff;
    outline: none;
    border-radius: 12px;
    letter-spacing: 1px;
    font-size: 17px;
    font-weight: normal;
    background-color: rgba(82, 56, 76, 0.15);
    padding: 5px 0 5px 10px;
    margin-left: 30px;
    height: 30px;
    margin-top: 25px;
    border: 1px solid #e6e6e6;
  }
  .verification{
    border-radius: 12px;
    width:100px;
    letter-spacing:5px;
    margin-left: 50px;
    height: 40px;
    transform: translate(-15px,0);
  }
  .captcha{
    height: 50px;
    text-align: justify;
  }
</style>
<!--<template>-->
  <!--<div>-->
    <!--<ul v-for="(item,index) in arrData" :key="index" @click="getDataId(item.id)">-->
      <!--<li>{{item.title}}</li>-->
    <!--</ul>-->
  <!--</div>-->
<!--</template>-->
<!--<script>-->
  <!--export default {-->
    <!--data() {-->
      <!--return {-->
        <!--arrData: [-->
          <!--{-->
            <!--id: 1,title: '第一条数据'-->
          <!--},-->
          <!--{-->
            <!--id: 2,title: '第二条数据'-->
          <!--},-->
          <!--{-->
            <!--id: 3,title: '第三条数据'-->
          <!--},-->
          <!--{-->
            <!--id: 4,title: '第四条数据'-->
          <!--}-->
        <!--]-->
      <!--}-->
    <!--},-->
    <!--methods: {-->
      <!--getDataId(id) {-->
        <!--console.log(id)-->
      <!--}-->
    <!--}-->
  <!--}-->

<!--</script>-->
<!--<style>-->
  <!--ul li {-->
    <!--height: 30px;-->
    <!--line-height: 30px;-->
  <!--}-->
<!--</style>-->
<!--<template>-->
  <!--<div class="ft-plant-upload-button">-->
    <!--<Button type="ghost" icon="ios-cloud-upload-outline" @click="zh_uploadFile">选择文件</Button>-->
    <!--<input type="file" ref="evfile" @change="zh_uploadFile_change" style="display:none">-->
  <!--</div>-->
<!--</template>-->


<!--<script>-->
  <!--//七牛上传插件-->
  <!--import * as qiniu from 'qiniu-js';-->

  <!--export default {-->
    <!--data() {-->
      <!--return {}-->
    <!--},-->
    <!--methods: {-->
      <!--//选择上传文件-->
      <!--zh_uploadFile() {-->
        <!--this.$refs.evfile.click();-->
      <!--},-->
      <!--//选择文件后触发的事件-->
      <!--zh_uploadFile_change(evfile) {-->
        <!--//后端获取token-->
        <!--getQiniuToken().then(res => {-->
          <!--var uptoken = res.data.data-->
          <!--var file = evfile.target.files[0] //Blob 对象，上传的文件-->
          <!--var key = file.name  // 上传后文件资源名以设置的 key 为主，如果 key 为 null 或者 undefined，则文件资源名会以 hash 值作为资源名。-->

          <!--let config = {-->
            <!--useCdnDomain: true,   //表示是否使用 cdn 加速域名，为布尔值，true 表示使用，默认为 false。-->
            <!--region: qiniu.region.z2     // 根据具体提示修改上传地区,当为 null 或 undefined 时，自动分析上传域名区域-->
          <!--};-->

          <!--let putExtra = {-->
            <!--fname: "",  //文件原文件名-->
            <!--params: {}, //用来放置自定义变量-->
            <!--mimeType: null  //用来限制上传文件类型，为 null 时表示不对文件类型限制；限制类型放到数组里： ["image/png", "image/jpeg", "image/gif"]-->
          <!--};-->
          <!--var observable = qiniu.upload(file, key, uptoken, putExtra, config);-->
          <!--observable.subscribe({-->
            <!--next: (result) => {-->
              <!--// 主要用来展示进度-->
              <!--console.log(result)-->
            <!--},-->
            <!--error: (errResult) => {-->
              <!--// 失败报错信息-->
              <!--console.log(errResult)-->
            <!--},-->
            <!--complete: (result) => {-->
              <!--// 接收成功后返回的信息-->
              <!--console.log(result)-->
            <!--}-->
          <!--})-->
        <!--})-->
      <!--},-->
    <!--}-->
  <!--}-->
<!--</script>-->
