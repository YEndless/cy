<template>
  <div>
    <div v-if="users === null" class="please_login">
      请先登录<i class="el-icon-d-arrow-right"></i>
    </div>
      <!--<footer>-->
        <!--<button @click="prevPage()">-->
          <!--上一页-->
        <!--</button>-->
        <!--<span>第{{currentPage}}页/共{{totalPage}}页</span>-->
        <!--<button @click="nextPage()">-->
          <!--下一页-->
        <!--</button>-->
      <!--</footer>-->
    <div @click="noLogin">
      <ul>
        <li v-for="article in articles">
          <div class="mode" >
            <div class="title-box">
              <a :href="'/a/' + article.id" class="link" target="_blank">
                {{article.name}}
              </a>
            </div >
            <div class="footer-bar">
              <div class="footer-bar-left">
                <a :href="'/a/' + article.id" target="_blank" class="footer-bar-action tag">
                  <!--军事-->
                  {{article.category}}
                </a>
                <a :href="'/a/' + article.id" target="_blank" class="footer-bar-action source">
                  <img :src="article.avatar" lazy="loaded"
                       class="footer-bar-action media-avatar">
                  &nbsp;{{article.auther}}&nbsp;⋅
                </a>
                <a :href="'/a/' + article.id" target="_blank" class="footer-bar-action source">&nbsp;{{article.count}}&nbsp;点赞&nbsp;⋅</a>
                <span class="footer-bar-action cc">&nbsp;{{article.sendTime| formatDate}}</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {formatDate} from './time'
    export default {
        name: "ArticleTitle",
      data(){
          return {
            id: this.$route.params.id,
            articles: [],
            user:[],
            users:  JSON.parse(localStorage.getItem('loginUser')),
            totalPage: 1, // 统共页数，默认为1
            currentPage: 1, //当前页数 ，默认为1
            pageSize: 10, // 每页显示数量
        }
      },
      mounted() {
        // 计算一共有几页
        // this.totalPage = Math.ceil(this.articles.length / this.pageSize);
        // 计算得0时设置为1
        this.totalPage = this.totalPage == 0 ? 1 : this.totalPage;
        this.getCurrentPageData();
      },
      created(){
          var that = this
          this.$http
          .get('http://localhost:8080/article/all')
          .then(function (response) {
            // alert(JSON.stringify(response.data));
            that.articles = response.data;
          })

        this.$http
          .get('http://localhost:8080/user/'+this.article.id)
          .then(function (response) {
            // alert(JSON.stringify(response.data));
            that.user = response.data;
          })

      },
      filters: {
        formatDate(time) {
          var date = new Date(time);
          return formatDate(date, 'yyyy-MM-dd hh:mm:ss');
        }
      },
      methods:{
        noLogin(){
          if (this.users == null ){
            this.$router.push({path: '/login'});

          }
        },

        // 设置当前页面数据，对数组操作的截取规则为[0~9],[10~20]...,
        // 当currentPage为1时，我们显示(0*pageSize+1)-1*pageSize，当currentPage为2时，我们显示(1*pageSize+1)-2*pageSize...
        getCurrentPageData() {
          let begin = (this.currentPage - 1) * this.pageSize;
          let end = this.currentPage * this.pageSize;
          this.articles = this.articles.slice(
            begin,
            end
          );
        },
        //上一页
        prevPage() {
          console.log(this.currentPage);
          if (this.currentPage == 1) {
            return false;
          } else {
            this.currentPage--;
            this.getCurrentPageData();
          }
        },
        // 下一页
        nextPage() {
          if (this.currentPage == this.totalPage) {
            return false;
          } else {
            this.currentPage++;
            this.getCurrentPageData();
          }
        }
      }

      //方法2
      // filters: {
      //   formatDate: function (value) {
      //     let date = new Date(value);
      //     let y = date.getFullYear();
      //     let MM = date.getMonth() + 1;
      //     MM = MM < 10 ? ('0' + MM) : MM;
      //     let d = date.getDate();
      //     d = d < 10 ? ('0' + d) : d;
      //     let h = date.getHours();
      //     h = h < 10 ? ('0' + h) : h;
      //     let m = date.getMinutes();
      //     m = m < 10 ? ('0' + m) : m;
      //     let s = date.getSeconds();
      //     s = s < 10 ? ('0' + s) : s;
      //     return y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s;
      //   }
      // }


    }
</script>

<style scoped>
  ul {
    list-style: none;
  }
  li {
    display: list-item;
  }
  .mode {
    position: relative;
    padding: 20px 0;
    border-bottom: 1px solid #999999;
    /*float: left;*/
    width: 90%;
    overflow: hidden;
    /*border-bottom: 600px;*/
  }
  .title-box {
    display: block;
    font-size: 26px;
    line-height: 1.3;
    margin-bottom: 4px;
    font-weight: 700;
    max-height: 52px;
  }

  .link {
    color: #222;
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
  .footer-bar-action.tag {
    font-size: 18px;
    margin-right: 10px;
    padding: 1px 2px;
    border: 1px solid #eee;
  }
  a:visited {
    /*color: #999;*/
  }
  .footer-bar-action {
    font-size: 18px;
    line-height: 1;
    display: inline-block;
    vertical-align: middle;
    border-color: #87a5b5;
    color: #87a5b5;
  }
  a {
    color: black;
    background: 0 0;
    text-decoration: none;
    outline: 0;
    cursor: pointer;
  }

  .footer-bar-action.media-avatar {
    color: #fff;
    margin-right: 2px;
    width: 18px;
    height: 18px;
    line-height: 18px;
    text-align: center;
    font-size: 18px;
    border-radius: 50%;
    background-color: #eee;
    overflow: hidden;
  }
  .footer-bar-action.source {
    color: #777;
    font-size: 14px;
  }
  .bui-right {
    float: right;
  }
  .cc{
    color: rgba(26, 26, 26, 0.89);
  }
  .please_login{
    text-align: right;
  }
</style>
