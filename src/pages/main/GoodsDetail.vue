<template>
  <div>
    <h3>王者荣耀{{ this.$route.query.id }}</h3>
    <li v-for="article in articles">
      <a target="_blank">{{article.id}}</a>
      <p>aaa</p>
    </li>
    <li v-for="article in users">
      <a target="_blank">{{article.id}}</a>
    </li>
  </div>
</template>

<script>
    export default {
      name: "GoodsDetail",

      data(){
        return {
          id: this.$route.params.id,
          users: [],
          articles:[]
        }
      },
      created(){
        var that=this
          this.$http
            .get('http://localhost:8080/article/getArticleByUserId/'+this.$route.params.id)
            .then(function (res) {
              that.articles=res.data
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

<style scoped>

</style>
