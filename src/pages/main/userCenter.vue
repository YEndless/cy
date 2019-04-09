<template>
    <div class="y-wrap">
      <div id="header">

        <v-header1></v-header1>

        <div class="middlebar">
          <div class="y-box middlebar-inner">
            <div class="y-left logo-box">
              <a class="logo-link" href="/">
                <img class="logo" src="//s3.pstatp.com/toutiao/resource/ntoutiao_web/static/image/logo_271e845.png">
              </a>
            </div>

            <div class="y-right">
              <div style="margin-top: 9px; width: 340px;">
                <div class="wsearch">
                  <div name="inputbox"
                       class="y-box input-group"
                       style="border-color: rgb(232, 232, 232);">
                    <input class="y-left input-text"
                           type="text"
                           placeholder="请输入关键字"
                           v-model="searchVal">
                    <router-link target="_blank" :to="{ path:'/goodsDetail', query: { searchContent: searchVal} }">
                      <el-button type="primary" icon="el-icon-search" class="icon-search">
                      </el-button>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="wrapper">
          <div riot-tag="yheader" class="yheader">
            <a href="/c/user/922/">
              <img class="bg-header" src="//s3.pstatp.com/site/tt_mfsroot/pc_img/bg_profile.png">
            </a>
            <div>
              <a href="/u/1">
                <!--<img class="avatar" src="//p3.pstatp.com/thumb/5d4a000cdeed408dc66f">-->
              <img :src="users.avatar" class="avatar">
              </a>
              <ul>
                <li class="title">
                  <a :href=" '/u/'+users.id">
                    <span class="name">{{users.nickName}}</span>
                  </a>
                </li>
                <li class="des">
                  <a :href=" '/u/'+users.id">
                  </a>
                </li>
              </ul>
              <span class="btn-publish ">
                <span>发布微头条</span>
              </span>
            </div>
          </div>
          <div class="left">
            <div riot-tag="tab">
              <ul class="tab tab-0">
                <li class="active">视频</li>
                <li>微头条</li>
                <li>收藏</li>
              </ul>
            </div>
          </div>
          <div class="right">
            <div riot-tag="statistics">
              <dl class="statistics">
                <dt>
                  <a :href=" '/u/'+users.id">
                    <h3>
                      <em>
                        <i>{{users.follow}}</i>
                      </em>
                    </h3>
                  <p>关注</p>
                </a>
                </dt>
                <dd>
                  <!--<a href="/c/user/relation/92/?tab=followed">-->
                  <a :href=" '/u/'+users.id">
                    <h3>
                      <em>
                        <i>{{users.follower}}</i>
                      </em>
                    </h3>
                    <p>粉丝</p>
                  </a>
                </dd>
              </dl>
            </div>
          </div>
          <div riot-tag="top">
            <span class="top" style="left:1234.5px"></span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import vHeader1 from './Header1'

    export default {
        name: "userCenter",
      components:{
          vHeader1
      },
      data(){
          return {
            id: this.$route.params.id,
            users: [],
            searchVal:"",
          }
      },
      created(){
        var that=this
        this.$http
          .get('http://localhost:8080/user/'+this.$route.params.id)
          .then(function (response) {
            that.users=response.data
          })
      },

      activated() {
        this.id = this.$route.params.id;
      },
      computed: function () {
        return this.users;
      },
      // mounted(){
      //     this.id = this.$route.query.id ;
      //     this.$http
      //       .get('http://localhost:8080/user'+this.id)
      //       .then((res)=> {
      //         this.aaa = res.data.id ;
      //       })
      // }
    }
</script>

<style>
  .y-wrap {
    min-height: 100%;
    margin-bottom: -72px;
  }
  .y-wrap {
    margin-right: auto;
    margin-left: auto;
    text-align: left;
    z-index: 1;
  }
  #header {
    width: 100%;
    background: #fff;
    margin-bottom: 16px;
    z-index: 2;
  }
  .y-wrap .y-box {
    display: block;
  }
  .wtopbar {
    position: relative;
    height: 34px;
    line-height: 34px;
    background: #222;
    font-size: 14px;
    color: #fff;
  }
  .y-wrap .y-left {
    float: left;
  }
  /*.y-nav-topbar .nav {*/
    /*position: relative;*/
    /*height: 34px;*/
    /*line-height: 34px;*/
    /*background: 0 0;*/
    /*color: #fff;*/
  /*}*/
  /*.y-nav-topbar .nav-list {*/
    /*padding: 0 20px;*/
  /*}*/
  /*.y-nav-topbar .nav-item {*/
    /*font-size: 13px;*/
    /*font-weight: 500;*/
    /*margin-right: 20px;*/
    /*width: 26px;*/
    /*white-space: nowrap;*/
  /*}*/
  li {
    list-style: none;
  }
  /*.y-nav-topbar .nav-link {*/
    /*color: #fff;*/
    /*border: 0;*/
  /*}*/
  /*.y-nav-topbar .nav-item.nav-more {*/
    /*position: relative;*/
    /*margin-right: 0;*/
  /*}*/
  .y-right {
    float: right;
  }

  .userbox1 {
    margin-left: 14px;
    height: 34px;
  }
  /*.wtopbar .tb-item:first-child {*/
  /*border: 0;*/
  /*}*/
  /*.tb-item {*/
    /*position: relative;*/
    /*float: left;*/
    /*border-left: 1px solid #3a3a3a;*/
  /*}*/
   /*.tb-link {*/
    /*padding: 0 10px;*/
    /*color: #fff;*/
  /*}*/
 /*.layer {*/
    /*display: none;*/
    /*position: absolute;*/
    /*border: 1px solid #d9d9d9;*/
    /*background: #fff;*/
    /*z-index: 20;*/
    /*font-size: 14px;*/
    /*right: 0;*/
    /*width: 116px;*/
  /*}*/
  /*.wuserbox {*/
    /*position: relative;*/
    /*font-size: 14px;*/
    /*padding-right: 14px;*/
    /*color: #fff;*/
  /*}*/
  /*.wuserbox .username {*/
    /*position: relative;*/
    /*text-align: center;*/
    /*font-size: 14px;*/
    /*color: #fff;*/
  /*}*/

  /*.wuserbox .user-head {*/
    /*display: inline-block;*/
    /*white-space: nowrap;*/
    /*overflow: hidden;*/
    /*text-overflow: ellipsis;*/
    /*max-width: 160px;*/
    /*color: #fff;*/
  /*}*/

  /*.wuserbox .user-head .user-image {*/
    /*display: inline-block;*/
    /*width: 24px;*/
    /*height: 24px;*/
    /*border-radius: 50%;*/
    /*vertical-align: middle;*/
    /*margin-right: 6px;*/
    /*margin-top: -2px;*/
    /*background-color: #efefef;*/
  /*}*/
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
  /*.wuserbox .user-layer {*/
    /*display: none;*/
    /*position: absolute;*/
    /*top: 34px;*/
    /*right: 0;*/
    /*border: 1px solid #d9d9d9;*/
    /*background: #fff;*/
    /*z-index: 22;*/
    /*font-size: 14px;*/
    /*width: 130px;*/
  /*}*/

  /*.wuserbox .user-layer .layer-item {*/
    /*cursor: pointer;*/
    /*display: block;*/
    /*width: auto;*/
    /*height: 42px;*/
    /*line-height: 42px;*/
    /*color: #999;*/
    /*white-space: nowrap;*/
    /*text-overflow: ellipsis;*/
    /*overflow: hidden;*/
    /*text-align: center;*/
  /*}*/

  #header .middlebar {
    position: relative;
    height: 58px;
    background: #fff;
    box-shadow: 0 1px 4px 0 rgba(0,0,0,.12);
  }
  #header .middlebar .middlebar-inner {
    width: 1200px;
    margin: 0 auto;
  }
  #header .middlebar .middlebar-inner .logo-box {
     line-height: 58px;
     overflow: hidden;
   }
  #header .middlebar .middlebar-inner .logo-box .logo-link {
    display: block;
  }
  #header .middlebar .middlebar-inner .logo-box .logo-link>img {
    width: 108px;
    height: 27px;
    vertical-align: middle;
  }
  .wsearch {
    position: relative;
  }
  .input-group {
    border: 1px solid #e8e8e8;
    background-color: #f5f6f7;
    border-radius: 2px;
  }
  .input-text {
    border: 0;
    color: #444;
    font-size: 14px;
    line-height: 20px;
    width: 280px;
    height: 39px;
    /*outline: 0;*/
    background: #f5f6f7;
    box-sizing: border-box;
    text-align: center;

  }

  #wrapper {
    width: 1200px;
    margin: 0 auto;
  }
  #wrapper .yheader {
    margin-bottom: 20px;
  }
  .yheader {
    background: #fff;
  }

  .yheader .bg-header {
    display: block;
    width: 100%;
    height: 160px;
  }
  .yheader>div {
    position: relative;
    min-height: 84px;
    padding: 16px 0 0 134px;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .yheader>div>a {
    position: absolute;
    left: 20px;
    top: -36px;
  }
  .yheader>div .avatar {
    width: 100px;
    height: 100px;
    border: 1px solid rgba(255,255,255,.2);
    border-radius: 100px;
  }
  .yheader>div .title {
    font-size: 24px;
    color: #222;
    letter-spacing: 0;
    line-height: 24px;
  }
  .yheader>div .title>a {
    display: table-cell;
    vertical-align: middle;
  }
  .yheader>div .title .name {
    color: #222;
  }
  .yheader>div .title span {
    font-weight: 700;
    display: table-cell;
  }
  .yheader>div .des a {
    font-size: 14px;
    color: #777;
    letter-spacing: 0;
    line-height: 20px;
    margin-top: 10px;
    padding-bottom: 14px;
    display: inline-block;
    width: 570px;
  }
  .yheader>div .btn-attention, .yheader>div .btn-publish {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 16px;
    font-weight: 400;
    color: #fff;
    line-height: 37px;
    width: 164px;
    background: #2a90d7;
    text-align: center;
    border: 1px solid #2a90d7;
    padding: 0;
    border-radius: 6px;
    cursor: pointer;
  }
  .yheader>div .btn-publish .y-icon {
    font-size: 15px;
  }
  .yheader>div .btn-publish span {
    display: inline-block;
    vertical-align: middle;
  }
  .yheader>div .btn-publish span {
    display: inline-block;
    vertical-align: middle;
  }
  #wrapper .left {
    display: table-cell;
    width: 840px;
    padding-right: 20px;
    vertical-align: top;
  }
  .tab {
    background: #fff;
    position: relative;
    border-bottom: 2px solid #E8E8E8;
    height: 46px;
    line-height: 46px;
    border-spacing: 40px 0;
  }
  .tab li.active {
    color: #E72418;
    border-bottom: 2px solid #e72418;
  }
  .tab li {
    display: table-cell;
    font-size: 18px;
    cursor: pointer;
    border-bottom: 2px solid transparent;
  }
  #wrapper .right {
     display: table-cell;
     width: 500px;
     vertical-align: top;
   }
  .statistics {
    display: table;
    width: 100%;
    background: #fff;
    margin-bottom: 20px;
  }
  .statistics>dt, .statistics>dd {
    display: table-cell;
    width: 50%;
    text-align: center;
    padding: 18px 0;
    position: relative;
  }
  .statistics>dt a, .statistics>dd a {
    display: block;
  }
  .statistics h3 {
    font-size: 24px;
    color: #222;
  }
  b, em, h1, h2, h3, h4, h5, h6, strong {
    font-weight: 400;
  }
  .statistics h3 i {
    font-weight: 700;
  }
  .statistics p {
    font-size: 14px;
    color: #777;
    margin-top: 4px;
  }


</style>
