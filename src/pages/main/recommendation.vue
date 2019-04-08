<template>
  <Row class="mg">
    <Col span="6" push="18">
      <div>
        <div class="outer">
          <div class="outer1">
            <!--<el-input placeholder="请输入搜索内容" class="search-input"></el-input>-->
            <Input  search size="large" enter-button placeholder="请输入搜索内容" />
          </div>
          <div class="inner">
            <div v-if="user === null" class="login">
              <p class="login-msg">
                登录后可以保存您的评论、收藏，可以发布头条等功能哦
              </p>
              <router-link to="/login">
                <button class="login-button">
                  登录
                </button>
              </router-link>
            </div>
            <div v-if="user != null">
              <div>
                <p class="logout">
                  <a href="/">
                    <el-header @click.native="logout">退出登录</el-header>
                  </a>
                </p>

                <div class="logout1">
                  <!--<a href="/u/" target="_blank">-->
                  <a :href=" '/u/'+user.id" class="avatar" target="_blank">
                    <img v-bind:src="user.avatar" class="head">
                  </a>
                  <p class="name">
                    <a :href=" '/u/'+user.id" class="avatar" target="_blank">
                      <span>{{user.nickName}}</span>
                    </a>
                  </p>
                </div>
              </div>
              <ul class="bottom">
                <li>
                  <a href="/c/user/92287/?tab=following" target="_blank">
                    <p class="num">2</p>
                    <br >
                    <p class="word">关注</p>
                  </a>
                </li>

                <li>
                  <a href="/c/user/relation/92/?tab=followed" target="_blank">
                    <p class="num">0</p>
                    <br>
                    <p class="word">粉丝</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Col>

    <Col span="18" pull="6">
      <div class="bui-left index-content">
        <div class="ugcBox">
          <v-send-article></v-send-article>
        </div>
        <v-article-title></v-article-title>
      </div>

    </Col>
  </Row>
</template>

<script>
  import vSendArticle from './sendArticle.vue'
  import 'jquery/dist/jquery.min'

  import vArticleTitle from './ArticleTitle'
    export default {
      name: "recommendation",
      components: {
        vArticleTitle,
        vSendArticle
      },
      data() {
        return {
          user: JSON.parse(localStorage.getItem('loginUser')),
          articleList:[],
        }
      },

      methods: {
        logout() {
          localStorage.removeItem('loginUser')
          this.$route.go(0);
        },
      },
      created(){
        var that=this
        this.$http
          .get('http://localhost:8080/article'+that.id)
          .then(function (response) {
            that.articleList=response.data
          })
      },

    }
</script>

<style scoped>
.mg{
  margin-right: 100px;
}
.outer {
  width: 360px;
  height: 400px;
  margin: 16px 0;
  padding: 20px;
  background: #f4f5f6;
}

.inner {
  text-align: center;
  background: #fff;
  border: 1px solid #e8e8e8;
  letter-spacing: 0;
}

.login{
  height: 196px;
  padding: 20px 28px 15px;
}

.login-msg{
  margin-top: 30px;
  font-size: 14px;
  line-height: 25px;
  color: #777;
}
.login-button{
  width: 240px;
  height: 40px;
  margin: 16px 0 14px;
  font-size: 14px;
  line-height: 20px;
  color: #fff;
  background: #ed4040;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.outer1{
  padding: 5px 0 5px 0;
  border: 1px solid #eee;
  font-size: 20px;
  background: #eee;
}
.logout{
  font-size: 12px;
  line-height: 17px;
  text-align: right;
}
.logout > a:visited {
  color: #999;
}
.logout > a{
  color: #222;
  background: 0 0;
  text-decoration: none;
  outline: 0;
  cursor: pointer;
  transition: color .2s ease;
}
.logout > a > span{
  color: #999;
  box-sizing: border-box;
}

.bottom{
  padding-top: 10px;
  font-size: 0;
  position: relative;
}
.bottom > li {
  display: inline-block;
  width: 50%;
}
.bottom > li > a {
  color: #222;
  background: 0 0;
  text-decoration: none;
  outline: 0;
  cursor: pointer;
  transition: color .2s ease;
}
.num {
  width: auto;
  margin-bottom: 2px;
  font-size: 30px;
  font-weight: 600;
  line-height: 28px;
  color: #222;
}
.word {
  color: #777;
}
.bottom > li > a > p {
  display: inline-block;
  font-size: 14px;
  line-height: 20px;
}
.logout1{

}
.logout1 > a{
  color: #222;
  background: 0 0;
  text-decoration: none;
  outline: 0;
  cursor: pointer;
  transition: color .2s ease;
}
.head {
  width: 56px;
  height: 56px;
  margin-top: -5px;
  border-radius: 50%;
  border: 1px solid #fff;
}
.name {
  margin-top: 7px;
  font-size: 16px;
  line-height: 22px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
  .index-content {
    /*width: 600px;*/
    width: 100%;
  }

  .bui-left {
    float: left;
  }
 .index-content .ugcBox {
    margin-bottom: 6px;
  }
  ol, ul {
    list-style: none;
  }
  li {
    display: list-item;
    text-align: -webkit-match-parent;
  }

</style>
