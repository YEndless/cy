<template>
  <div>
    <ul>
      <li v-for="article in articles" v-if="article.category=== '科技'">
        <div class="mode">
          <div class="title-box">
            <a :href="'/a/' + article.id" class="link" target="_blank">
              {{article.name}}
            </a>
          </div >
          <div class="footer-bar">
            <div class="footer-bar-left">
              <a :href="'/a/' + article.id" target="_blank" class="footer-bar-action source">
                <img :src="article.avatar" lazy="loaded"
                     class="footer-bar-action media-avatar">
                &nbsp;{{article.auther}}&nbsp;⋅
              </a>
              <a :href="'/a/' + article.id" target="_blank" class="footer-bar-action source">&nbsp;{{article.count}}&nbsp;评论&nbsp;⋅</a>
              <span class="footer-bar-action">&nbsp;{{article.sendTime| formatDate}}</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
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
        user:[]
      }
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
    text-align: -webkit-match-parent;
  }
  .mode {
    position: relative;
    padding: 20px 0;
    border-bottom: 1px solid rgba(14, 1, 13, 0.43);
    width: 1200px;
    overflow: hidden;
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
</style>
