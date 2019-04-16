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
                    <router-link target="_blank" :to="{ path:'/search', query: { searchContent: searchVal} }">
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
            <a :href="'/u/'+users.id">
              <img class="bg-header" src="//s3.pstatp.com/site/tt_mfsroot/pc_img/bg_profile.png">
            </a>
            <div>
              <a :href="'/u/'+users.id">
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
            <el-tabs class="tab" v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="微头条" name="first">
                  <div style="min-height:200px;" >
                    <ul  v-for="article in articles " v-if="article.userId === users.id">
                      <li class="item" >
                        <div class="item-inner y-box">
                          <div class="normal  no-image">
                            <div class="rbox-inner">
                              <div>
                                <div id="aaa">
                                  <img :src="users.avatar" lazy="loaded" class="avatar">
                                  <span class="name">{{article.auther}}</span>
                                </div>
                                <div>
                                  <a :href="'/a/' + article.id" class="link" target="_blank">
                                    <span>{{article.header}}</span>
                                  </a>
                                </div>
                              </div>
                              <div class="y-box footer">
                                <div class="y-left">
                                  <a class="lbtn"target="_blank" href="/">
                                    &nbsp;⋅&nbsp;0赞</a>
                                  <a class="lbtn" target="_blank" href="/">
                                    &nbsp;⋅&nbsp;0评论</a>
                                  <span class="lbtn">&nbsp;⋅&nbsp;{{article.sendTime| formatDate}}</span>
                                </div>
                                <div class="y-right" v-if="article.userId === users.id">
                                  <span class="delete">
                                    <!--<i class="el-icon-delete"></i>-->
                                    <el-button type="primary" @click="deleteArticle(article.id)" icon="el-icon-delete" size="mini">
                                    </el-button>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="视频" name="second">视频1

                </el-tab-pane>
                <el-tab-pane label="收藏" name="third">
                  收藏2

                  <!--<li v-for="(item,index) in articles" @click="del(index,item.id)" :key="item.id">-->
                    <!--{{item.name}}-->
                  <!--<li/>-->
                  <tr v-for="(order, index) in articles">
                    <td>{{order.name}}</td>
                    <td>
                      <button type="button" @click="delet(index)">用索引删除</button>
                      <button type="button" @click="deleteByID(order.id)">用 ID 删除</button>
                    </td>
                  </tr>

                </el-tab-pane>
              </el-tabs>
          </div>
          <div class="right">
            <div riot-tag="statistics">
              <dl class="statistics">
                <dt>
                  <a :href=" '/u/'+users.id">
                    <h3><em><i>{{users.follow}}</i></em></h3>
                    <p>关注</p>
                </a>
                </dt>
                <dd>
                  <a :href=" '/u/'+users.id">
                    <h3><em><i>{{users.follower}}</i></em></h3>
                    <p>粉丝</p>
                  </a>
                </dd>
              </dl>
            </div>
          </div>
          <div>
            <span style="left:1234.5px"></span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import vHeader1 from './Header1'
  import {formatDate} from './time'

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
            activeName: 'first',
            articles:[],
          }
      },
      created(){
        var that=this
        this.$http
          .get('http://localhost:8080/user/'+this.$route.params.id)
          .then(function (response) {
            that.users=response.data
          }),
          this.$http
            .get('http://localhost:8080/article/all')
            .then(function (res) {
              that.articles=res.data
            })
      },
      methods: {
        handleClick(tab, event) {
          console.log(tab, event);
        },
        deleteArticle1(id){
          var that=this;
          this.$http
            .delete('http://localhost:8080/article/delete',{data:id})
            .then(function (res) {
              // that.articles=res.data
            })
          console.log(id)
        },
        deleteArticle(id){
          var that=this;
          this.$http
            .post('http://localhost:8080/article/delete'+{"id":id})
            .then(function (res) {
              that.articles=res.data
            })
          console.log(id)
        },

        delet(index) {
          // 用索引删除
          this.articles.splice(index, 1);
        },
        deleteByID(Id) {
          var that=this.Id
          this.articles.splice(this.articles.find( order => {
            return order.id ===that;
            console.log(that)
          }), 1);
        }
      },
      activated() {
        this.id = this.$route.params.id;
      },
      computed: function () {
        return this.users;
      },
      filters: {
        formatDate(time) {
          var date = new Date(time);
          return formatDate(date, 'yyyy-MM-dd hh:mm:ss');
        }
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
  .y-wrap .y-left {
    float: left;
  }
  li {
    list-style: none;
  }
  .y-right {
    float: right;
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
  .yheader>div .btn-publish {
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


  .link {
    color: #222;
  }

  .item {
    position: relative;
    min-height: 180px;
  }

  .delete{
    display:none;
  }
  .item:hover .delete{
    display:block;

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
  no-image {
    padding: 6px 10px;
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
  .trash {
    cursor: pointer;
    display: none;
  }
  span {
    display: inline-block;
    vertical-align: top;
    font-size: 14px;
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
