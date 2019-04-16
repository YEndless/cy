<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to="/">返回</router-link>
    <a href="/">主页</a>
    <a href="/test">本网页</a>
    <a href="/test" target="_blank">新开网页</a>
    <!--<img src="./assets/logo.png">-->
    <Button type="primary">Primary</Button>
    <a href="/u">用户中心</a>
    <a href="/login">login</a>
    <h3>首页</h3>
    <router-link :to="{ path:'/goodsDetail', query: { id: 1} }">
      <button>显示
      </button>
    </router-link>
    <div v-for="article in articles" :key="articles.id">
      <a :href=" '/a/'+article.id ">
        <img v-bind:src="article.name" class="pic">
        <p class="name">{{article.id}}</p>
      </a>
    </div>
    <br/>
    <img v-image-preview src="https://avatar.csdn.net/5/2/1/3_qq_39510798.jpg"/>


    <div class="edit_container">
      <quill-editor
        v-model="content"
        ref="myQuillEditor"
        :options="editorOption"
        @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
        @change="onEditorChange($event)">
      </quill-editor>
    </div>


  </div>
</template>

<script>
  import { quillEditor } from "vue-quill-editor"; //调用编辑器
  import 'quill/dist/quill.core.css';
  import 'quill/dist/quill.snow.css';
  import 'quill/dist/quill.bubble.css';


  export default {
    name: 'HelloWorld',
    data () {
      return {
        id: 0,
        msg: 'Welcome to Your Vue.js App',
        articles:[],
        data:[],
        list:[],
        content: `<ol><li><strong><em>Or</em></strong></li><li><strong><em>rerew</em></strong></li><li><strong><em>rtrete</em></strong></li><li><strong><em>tytrytr</em></strong></li><li><strong><em>uytu</em></strong></li></ol>`,
        editorOption: {}
      }
    },
    created(){
      var that=this
      this.$http
        .get('http://localhost:8080/article/all')
        .then(function (response) {
          that.articles=response.data
        })
    },
    methods: {
      onEditorReady(editor) { // 准备编辑器

      },
      onEditorBlur(){}, // 失去焦点事件
      onEditorFocus(){}, // 获得焦点事件
      onEditorChange(){}, // 内容改变事件
    },
    computed: {
      editor() {
        return this.$refs.myQuillEditor.quill;
      },
    }

  }

</script>

<style>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }

</style>
