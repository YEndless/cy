<template>
  <div>
  <v-header1></v-header1>

    <div class="bui-box container1">
    <div class="bui-left index-left">
      <div class="share-box">
        <a href="/" class="share-count">
          <img :src="picUrl"/>
          <span>318</span>
        </a>
      </div>
    </div>
      <p class="top-title">{{art.name}}</p>
    <br/>
        <div class="author-right-top">
          <p class="author-name">{{art.content}}</p>
        </div>
    <br/>
    <div class="author-right-top">
      <!--<p class="author-name">{{art.avatar}}</p>-->
    </div>
      <div class="support">
        <p class="support-text">关注我</p>
        <div class="btn btn-pay">赞赏支持</div>
      </div>
    <!--</div>-->
  </div>

</div>
</template>

<script>
  import pic from "@/assets/pinglun.png";
  import vHeader1 from "./Header1"

  export default {
    name: "ArticleDetail",
    components :{
      vHeader1
    },
    data () {
      return {
        id: this.$route.params.id,
        picUrl:pic,
        articles:[],
        art :[]
      }

    },
    created(){
      var that = this
      this.$http
        .get('http://localhost:8080/article/'+this.$route.params.id)
        .then(function (response) {
          that.art = response.data
          // alert(JSON.stringify(response.data)) ;
        })

    },
    activated() {
      this.id = this.$route.params.id;
    },
    computed: function () {
      return this.articles;
    },
  }
</script>

<style>
  /*.middlebar {*/
    /*height: 45px;*/
    /*background: #fff;*/
    /*box-shadow: 0 1px 4px 0 rgba(0,0,0,.12);*/
  /*}*/
  /*.middlebar .middlebar-inner {*/
    /*margin: 0 0 0 120px;*/
  /*}*/
  /*.clearfix {*/
    /*zoom: 1;*/
  /*}*/
  /*.middlebar .middlebar-inner .logo-box {*/
    /*line-height: 45px;*/
    /*overflow: hidden;*/
  /*}*/

  /*.middlebar .middlebar-inner .logo-box .logo-link {*/
    /*display: block;*/
  /*}*/

  /*.middlebar .middlebar-inner .logo-box .logo-link>img {*/
    /*width: 108px;*/
    /*height: 27px;*/
    /*vertical-align: middle;*/
  /*}*/
  /*img {*/
    /*border-style: none;*/
  /*}*/
  /*.bui-left {*/
    /*float: left;*/
  /*}*/
  /*a {*/
    /*color: #222;*/
    /*background: 0 0;*/
    /*text-decoration: none;*/
    /*outline: 0;*/
    /*cursor: pointer;*/
    /*transition: color .2s ease;*/
  /*}*/
  /*.middlebar .middlebar-inner .logo-box .logo-link>img {*/
    /*width: 108px;*/
    /*height: 27px;*/
    /*vertical-align: middle;*/
  /*}*/
  /*img {*/
    /*border-style: none;*/
  /*}*/

  /*.middlebar .middlebar-inner .chinese-tag {*/
    /*font-size: 20px;*/
    /*margin-left: 30px;*/
    /*line-height: 45px;*/
  /*}*/
  /*.middlebar .middlebar-inner .chinese-tag a {*/
    /*color: #444;*/
  /*}*/
  /*.middlebar .middlebar-inner .chinese-tag span {*/
    /*color: #999;*/
  /*}*/
  /*.outer1{*/
    /*padding: 5px 0 5px 0;*/
    /*!*border: 1px solid #eee;*!*/
    /*font-size: 20px;*/
    /*!*background: #f5f6f7;*!*/
  /*}*/
  /*.bui-right {*/
    /*float: right;*/
    /*margin-left: 600px;*/
  /*}*/

  .container1 {
    width: 1170px;
    margin: 0 auto;
    margin-top: 16px;
    min-height: 1500px;
  }

  .bui-box {
    display: block;
    zoom: 1;
  }
  .share-box {
    margin-top: 20px;
  }
  .share-box .share-count {
    display: block;
    margin-bottom: 14px;
  }
  .top-title{
    font-size: 34px;
    font-weight: bold;
  }
  .padding-set{
    padding-left: 22%;
    padding-right: 22%;
    margin-top: 5%;
    /*background: gainsboro;*/
  }

  .author-name{
    font-size: 17px;
  }

  .author-right-top{
    display: flex;
  }

  .button-set input value{
    margin-top: -3px;
  }
  .text{
    margin-top: 6%;
  }
  .support-text{
    padding: 0 30px;
    margin-bottom: 20px;
    min-height: 24px;
    font-size: 17px;
    font-weight: 700;
    color: #969696;
  }
  .btn-pay {
    margin-bottom: 20px;
    padding: 8px 25px;
    font-size: 16px;
    color: #fff;
    background-color: #ea6f5a;
    border-radius: 20px;
  }
  .support {
    min-height: 144px;
    padding: 20px 0;
    text-align: center;
    clear: both;
  }
</style>
