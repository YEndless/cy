<template>
  <div>
    <!--<ul >-->
      <!--<li v-for="comment in comments">-->
        <!--<p>213</p>-->
        <!--<div>-->
          <!--<div>-->
            <!--{{comment.commentContent}}-->
          <!--</div>-->
          <!--<div>-->
            <!--<div>-->
              <!--<span>&nbsp;{{comment.commentTime| formatDate}}</span>-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
      <!--</li>-->
    <!--</ul>-->
    <div style="min-height:200px;" >
      <ul  v-for="comment in comments ">
        <li class="item" >
          <div class="item-inner y-box">
            <div class="normal  no-image">
              <div class="rbox-inner">
                <div>
                  <div id="aaa">
                    <img :src="users.avatar" lazy="loaded" class="avatar">
                    <span class="name">{{comment.commentId}}</span>
                  </div>
                  <div>
                    <a :href="'/a/' + comment.id" class="link" target="_blank">
                      <span>{{comment.commentContent}}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>

  </div>
</template>
<script>


  export default {
    data() {
      return {
        comments:[],
        id:this.$route.params.id,
      }
    },
    created:function(){
      var that = this ;
      this.$http
        .post('http://localhost:8080/article/allComments')
        .then(function (res) {
          that.comments = res.data ;
        })
    },
    methods: {

    },
  }
</script>
