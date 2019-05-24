<template>
  <div>
    <div style="padding: 5px">
      <el-button type="primary" plain round @click="paixu">最新发布</el-button>
      <el-button type="primary" plain  round @click="paixuByLike">点赞排行</el-button>
    </div>
    <div>
      <el-row>
        <el-col :span="12" v-for="(item,index) in pictures" :key="index">
          <el-card :body-style="{ padding: '5px' }" style="width: 500px">
            <img :src="item.pic" class="image" v-image-preview style="max-width: 450px ;max-height:400px;"/>
            <!--<a :href="item.pic">-->
            <h5 style="text-align: center">{{item.header}}</h5>
            <!--</a>-->
            <div class="footer-bar">
              <div class="footer-bar-left">
                <img :src="item.userAvatar" class="media-avatar"/>&nbsp;
                <span>{{item.type}} &nbsp;</span>
                <span class="footer-bar-action source">&nbsp;{{item.zan}}&nbsp;赞⋅&nbsp;</span>
                <span class="footer-bar-action">&nbsp;{{item.sendTime | formatDate}}</span>
                <el-button type="primary" plain icon="el-icon-star-on" size="mini" round class="support1" @click="add(item.id,item.zan)">
                  {{item.zan}}
                </el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import {formatDate} from './time'
  import qs from 'qs'
  // let thumb1 = [];
  // for (let i = 0; i < 99; i++) {
  //   thumb1.push(0);
  // }
  export default {
    name: "",
    data(){
      return {
        id: this.$route.params.id,
        pictures: [],
        user:[],
        status:[] ,
        thumb1 :[] ,
      }
    },
    created(){
      var that = this
      this.$http
        .get('http://localhost:8080/picture/all')
        .then(function (response) {
          that.pictures = response.data;
        })

      // this.$http
      //   .get('http://localhost:8080/user/'+this.picture.id)
      //   .then(function (response) {
      //     // alert(JSON.stringify(response.data));
      //     that.user = response.data;
      //   })
      this.paixuByLike() ;
      this.paixu() ;
    },
    filters: {
      formatDate(time) {
        var date = new Date(time);
        return formatDate(date, 'yyyy-MM-dd hh:mm:ss');
      }
    },
    methods:{
      add(id,zan){
        if (this.status[id] != 0 ){
          let comm = {
            "id": id,
            "zan":zan ,
          }
          this.$http
            .post('http://localhost:8080/picture/zan',qs.stringify(comm))
            .then((res)=>{
              console.log(res)
            })
          this.$message({
            showClose: true,
            type:'success',
            message: '点赞成功'
          });
          this.status[id] = 0
        }else {
          let comm = {
            "id": id,
            "zan":zan =zan - 1
          }
          this.$http
            .post('http://localhost:8080/picture/zan',qs.stringify(comm))
            .then((res)=>{
              console.log(res)
            })
          this.$message({
            showClose: true,
            message: '取消点赞'
          });
          this.status[id] = 1
        }
      },

      paixuByLike (){
        var that = this
        this.$http
          .get('http://localhost:8080/picture/allByLike')
          .then(function (response) {
            that.pictures = response.data;
          })
      },
      paixu (){
        var that = this
        this.$http
          .get('http://localhost:8080/picture/all')
          .then(function (response) {
            that.pictures = response.data;
          })
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

  .image {
    width: 90%;
    display: block;
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
  .media-avatar {
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
</style>
