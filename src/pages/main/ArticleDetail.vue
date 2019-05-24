<template>
  <div>
    <v-header1></v-header1>
    <div>
      <el-breadcrumb class="mianbao">
        <el-breadcrumb-item :to="{ path: '/' }"><h2>首页</h2></el-breadcrumb-item>
        <el-breadcrumb-item><h2>{{art.category}}</h2></el-breadcrumb-item>
        <el-breadcrumb-item><h2>正文</h2></el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div>
      <el-row :gutter="20">
        <el-col :span="4">
          <div class="grid-content">
            <div class="share-box">
              <el-button type="danger"  class="eee" round ><h1>头条</h1></el-button>

              <el-button type="primary" class="ddd" round icon="el-icon-edit-outline">收藏</el-button>
              <el-button type="primary" class="ddd" round icon="el-icon-share">分享</el-button>
              <el-button type="primary" class="ddd" round icon="el-icon-s-promotion">评论</el-button>
            </div>
          </div>
        </el-col>
        <el-col :span="16" >
          <div class="bui-box container1">
            <p class="top-title">{{art.name}}</p>
            <br/>
            <div class="footer-bar">
              <div class="footer-bar-left footer-bar-action">
                  <!--<img :src="art.avatar" lazy="loaded"-->
                       <!--class="footer-bar-action media-avatar">-->
               {{art.auther}}&nbsp;⋅
                &nbsp;{{art.count}}赞&nbsp;
                ⋅<span class="footer-bar-action">&nbsp;{{art.sendTime| formatDate}}</span>&nbsp;
              </div>
            </div>
            <br/>
            <br/>

            <div v-html="art.content" class="content1">
              {{art.content}}
            </div>
            <br/>
            <div class="author-right-top">
            </div>
            <div class="support">
              <el-button type="danger" class="" round plain icon="el-icon-caret-top" @click="add">
                {{thumb1}}{{art.count}}
              </el-button>
            </div>
          </div>
          <div>
            <div style="min-height:100px;" >
              <ul  v-for="(comment,intdex) in comments "v-if="art.id === comment.articleId" :key="index">
                <li class="item" >
                  <div class="item-inner y-box">
                    <div class="normal  no-image">
                      <div class="rbox-inner">
                        <div>
                          <div id="aaa">
                            <img :src="comment.userAvatar" lazy="loaded" class="avatar">
                            <span class="name">{{comment.userNickname}}</span>
                          </div>
                          <div >
                            <div class="comm">
                              <p>{{comment.commentContent}}</p>
                            </div>
                            <div class="support1">
                              <el-button type="primary" class="" round plain icon="el-icon-caret-top" @click="addZan(comment.commentId,comment.zan)">
                                点赞
                              </el-button>
                            </div>
                          </div>
                          <div class="y-box footer">
                            <div class="y-left">
                              <p class="lbtn">{{comment.zan}}点赞&nbsp;&nbsp;</p>
                              <span class="lbtn">&nbsp;⋅&nbsp;{{comment.commentTime| formatDate}}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <el-row :gutter="24">
              <el-col :span="1">
                <div class="grid-content">
                  <img :src="user.avatar" class="avatar">
                </div>
              </el-col>
              <el-col :span="23">
                <div class="grid-content">
                  <el-input type="textarea" v-model="ping" ></el-input>
                </div>
              </el-col>
            </el-row>
            <el-row>
              <div class="grid-content1">
                <el-button type="primary" @click="onSubmit">发布评论</el-button>
              </div>
            </el-row>
          </div>
          <v-relation></v-relation>
        </el-col>
        <el-col :span="4">
          <div >
            <el-card>
              <div v-for="item in imgList" :key="item.id">
                <img :src="item.adPic" class="ad-content"/>
                <a :href="item.adUrl">
                  <h5 style="text-align: center">海贼王来啦</h5>
                </a>
              </div>
            </el-card>
          </div>
        </el-col>
      </el-row>
      <BackTop :height="100" :bottom="100">
        <div class="back-top">返回顶端</div>
      </BackTop>
  </div>
</div>
</template>

<script>
  import pic from "@/assets/pinglun.png";
  import vHeader1 from "./Header1"
  import qs from 'qs';
  import {formatDate} from './time'
  import vRelation from "./Relation"

  export default {
    name: "ArticleDetail",
    components :{
      vHeader1,
      vRelation
    },
    data () {
      return {
        id: this.$route.params.id,
        picUrl:pic,
        articles:[],
        art :[],
        com:[],
        comments:[],
        ping:'',
        user: JSON.parse(localStorage.getItem('loginUser')),
        searchUser:'',
        status1:0 ,
        thumb1:'点赞' ,
        imgList: [],
        status:[],

      }

    },
    created(){
      var that = this ;
      this.$http
        .get('http://localhost:8080/ad/all')
        .then(function (response) {
          // alert(JSON.stringify(response.data));
          that.imgList = response.data;
        })
      this.loadData();
    },
    methods:{
      addZan(commentId,zan){
        if (this.status[commentId] != 0 ){
          let comm = {
            "commentId": commentId,
            "zan":zan,
          }
          this.$http
            .post('http://localhost:8080/article/zan1',qs.stringify(comm))
            .then((res)=>{
              console.log(res)
            })
          this.$message({
            showClose: true,
            type:'success',
            message: '点赞成功'
          });
          this.status[commentId] = 0
        }else {
          let comm = {
            "commentId": commentId,
            "zan":zan = zan-1
          }
          this.$http
            .post('http://localhost:8080/article/zan1',qs.stringify(comm))
            .then((res)=>{
              console.log(res)
            })
          this.$message({
            showClose: true,
            message: '取消点赞'
          });
          this.status[commentId] = 1
        }
      },

      add(){
        if (this.status1 == 0 ){
          let comm = {
            "id": this.id,
            "count":this.art.count ++,
          }
          this.$http
            .post('http://localhost:8080/article/zan',qs.stringify(comm))
            .then((res)=>{
              console.log(res)
            })
          this.status1 = 1
          this.thumb1 = '取消点赞'
        }else {
          let comm = {
            "id": this.id,
            "count":this.art.count --
          }
          this.$http
            .post('http://localhost:8080/article/zan',qs.stringify(comm))
            .then((res)=>{
              console.log(res)
              // this.loadData();
            })
          this.status1 = 0
          this.thumb1 = '点赞'
        }
      },
      onSubmit(){
        let comm = {
          "commentContent" : this.ping,
          "articleId":this.$route.params.id,
          "userId":this.user.id,
          "userNickname": this.user.nickName,
          "userAvatar":this.user.avatar,
        }
        this.$http
          .post('http://localhost:8080/article/savecomment',qs.stringify(comm))
          .then((res)=>{
            console.log(res)
            this.loadData();
          })
          .catch((res)=>{
            alert("失败");
            console.log(res,'失败')
          })
      },
      loadData(){
        var that = this
        this.$http
          .get('http://localhost:8080/article/'+this.$route.params.id)
          .then(function (response) {
            that.art = response.data
            // alert(JSON.stringify(response.data)) ;
          }),
          this.$http
            .post('http://localhost:8080/article/allComments')
            .then(function (res) {
              that.comments = res.data ;
            })
        this.$http
          .get('http://localhost:8080/article/'+this.$route.params.id)
          .then(function (response) {
            that.com = response.data
            // alert(JSON.stringify(response.data)) ;
          })
      }
    },
    activated() {
      this.id = this.$route.params.id;
    },
    computed: function () {
      return this.articles;
    },
    filters: {
      formatDate(time) {
        var date = new Date(time);
        return formatDate(date, 'yyyy-MM-dd hh:mm:ss');
      }
    },
  }
</script>

<style>
  .back-top{
    padding: 10px;
    background: rgba(0, 153, 229, .7);
    color: #fff;
    text-align: center;
    border-radius: 2px;
  }

  .footer-bar {
    font-size: 14px;
    color: #999;
    margin-top: 10px;
  }
  .footer-bar-left {
    display: inline-block;
    vertical-align: middle;
    line-height: 20px;
    float: left;
  }
  .footer-bar-action {
    font-size: 18px;
    line-height: 1;
    display: inline-block;
    vertical-align: middle;
    border-color: #87a5b5;
    color: #87a5b5;
  }




  .container1 {
    /*width: 1170px;*/
    margin: 0 auto;
    min-height: 100px;
  }
.mianbao{
  margin-left: 17%;
  margin-bottom: 10px;
  padding: 10px;
}
  .bui-box {
    display: block;
    zoom: 1;
  }
  .share-box{
    width: 100px;
    text-align: center;
    margin-left: 40px;
    font-size: 30px;
  }

  .ddd{
    width: 130px;
    height: 50px;
    margin-right: 10px;
    margin-bottom: 2px;
    font-size: 30px;
  }
.eee{
  width: 160px;
  height: 60px;
  margin-right: 10px;
  font-size: 40px;
}
  .top-title{
    font-size: 34px;
    font-weight: 700;
    line-height: 44px;
    color: #222;
  }
  .support {
    min-height: 144px;
    padding: 20px 0;
    text-align: right;
    clear: both;
  }
  .support1 {
    text-align: right;
    /*clear: both;*/
  }
  .y-wrap .y-box {
    display: block;
  }
  li {
    list-style: none;
  }
  .wuserbox .user-head img {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    vertical-align: middle;
    opacity: 0;
  }
  .wuserbox .username span {
    color: #fff;
  }
  .item {
    position: relative;
    min-height: 100px;
  }
  .item-inner {
    position: relative;
    padding: 24px 0;
    /*margin: 0 24px;*/
    border-bottom: 1px solid #f4f5f6;
  }
  .y-box {
    display: block;
  }
  .normal {
    position: relative;
    font-size: 0;
    overflow: hidden;
  }
  .rbox-inner {
    display: inline-block;
    width: 100%;
    vertical-align: middle;
  }
  .avatar {
    width: 26px;
    height: 26px;
    display: inline-block;
    vertical-align: middle;
    margin-right: 5px;
    border-radius: 50%;
  }
  .name {
    display: inline-block;
    vertical-align: middle;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.4;
    margin-right: 5px;
  }
  .comm{
    font-size: 20px;
  }
  .footer {
    font-size: 12px;
    color: #999;
    height: 18px;
    line-height: 18px;
    margin-top: 10px;
  }
  .lbtn {
    float: left;
    display: inline-block;
    color: #777;
    font-size: 14px;
  }
  span {
    display: inline-block;
    vertical-align: top;
    font-size: 14px;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 70px;
  }
  .grid-content1{
    float: right;
  }
  .ad-content{
    width: 90%;
    height:90%;
  }
</style>
