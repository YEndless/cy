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
                        <!--<el-button type="primary" icon="el-icon-search" class="icon-search">-->
                        <!--</el-button>-->
                    </div>
                  </div>
                </div>
              </div>
            </el-main>
            <el-footer>
              <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="文章" name="first">
                  <div style="min-height:816px;">
                    <ul>
                      <li v-for="(article,index) in searchArticles" :key="index" >
                        <a target="_blank" :href="'/a/'+article.id">{{article.name}}</a>
                      </li>
                    </ul>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="视频" name="second">视频1</el-tab-pane>
                <el-tab-pane label="用户" name="third">用户1</el-tab-pane>
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
          var _this = this ;
          var Articles = [] ;
          this.articles.map(function (article) {
            if (article.name.search(_this.searchVal) != -1){
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
</style>
