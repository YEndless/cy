<template>
  <div class="y-wrap">
    <div id="header">

      <v-header1></v-header1>
      <el-container>
        <el-container>
          <el-aside width="200px">
            <div class="middlebar">
              <div class="y-box middlebar-inner">
                <div class="y-left logo-box">
                  <a class="logo-link" href="/">
                    <img class="logo" src="//s3.pstatp.com/toutiao/resource/ntoutiao_web/static/image/logo_271e845.png">
                  </a>
                </div>
              </div>
            </div>
          </el-aside>

          <el-container>
            <el-main>
              <div class="y-left">
                <div style="margin-top: 9px; width: 654px;">
                  <div class="wsearch">
                    <div name="inputbox"
                         class="y-box input-group"
                         style="border-color: rgb(232, 232, 232);">
                      <input class="y-left input-text"
                             type="text"
                             placeholder="请输入关键字"
                             v-model="searchVal">
                    </div>
                  </div>
                </div>
              </div>
            </el-main>
            <el-footer>
              <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="文章" name="first">
                  <div style="min-height:200px;">
                    <ul v-for="(article,index) in searchArticles" :key="index">
                      <li class="item" >
                        <div class="item-inner y-box">
                          <div class="normal ">
                            <div class="rbox-inner">
                              <div>
                                <div id="aaa">
                                  <img :src="article.avatar" class="avatar">
                                  <span class="name">{{article.auther}}</span>
                                </div>
                                <div>
                                  <a target="_blank" :href="'/a/'+article.id" class="t_word">
                                    {{article.name}}
                                  </a>
                                </div>
                              </div>
                              <div class="y-box footer">
                                <div class="y-left">
                                  <a class="lbtn"target="_blank" href="/">
                                    &nbsp;⋅&nbsp;{{article.count}}赞</a>
                                  <span class="lbtn">&nbsp;⋅&nbsp;{{article.sendTime| formatDate}}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="图片" name="second">接口待提供</el-tab-pane>
                <el-tab-pane label="用户" name="third">接口哪儿去了</el-tab-pane>
              </el-tabs>
            </el-footer>
          </el-container>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<script>
  import vHeader1 from './Header1'

    export default {
      name: "search",
      components:{
        vHeader1
      },
      data(){
        return {
          id: this.$route.params.id,
          users: [],
          searchVal:this.$route.query.searchContent,
          activeName: 'first',
          articles:[]
        }
      },
      methods: {
        handleClick(tab, event) {
          console.log(tab, event);
        }
      },
      computed:{
        searchArticles(){
          var that = this ;
          var Articles = [] ;
          this.articles.map(function (article) {
            if (article.name.search(that.searchVal) != -1){
              Articles.push(article) ;
            }
          });
          return Articles ;
        }
      },

      created(){
        var that = this
        this.$http
          .get('http://localhost:8080/article/all')
          .then(function (res) {
            that.articles = res.data ;
          })
      },
      filters: {
        formatDate: function (value) {
          let date = new Date(value);
          let y = date.getFullYear();
          let MM = date.getMonth() + 1;
          MM = MM < 10 ? ('0' + MM) : MM;
          let d = date.getDate();
          d = d < 10 ? ('0' + d) : d;
          let h = date.getHours();
          h = h < 10 ? ('0' + h) : h;
          let m = date.getMinutes();
          m = m < 10 ? ('0' + m) : m;
          let s = date.getSeconds();
          s = s < 10 ? ('0' + s) : s;
          return y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s;
        }
      }
    }
</script>

<style scoped>
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
  .y-wrap .y-left {
    float: left;
  }

  li {
    list-style: none;
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
    width: 654px;
    height: 39px;
    /*outline: 0;*/
    background: #f5f6f7;
    box-sizing: border-box;
    text-align: center;
  }
  .t_word{
    font-size: 20px;
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
  .item {
    position: relative;
    /*min-height: 180px;*/
    border-bottom: 1px solid grey;
  }

  .item-inner {
    position: relative;
    padding: 10px 0;
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
</style>
