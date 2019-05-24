<template>
  <el-carousel :interval="2000" type="card" :height="imgHeight+'px'">
    <el-carousel-item v-for="item in imgList" :key="item.id">
      <el-row>
        <el-col :span="24">
          <img ref="imgHeight" :src="item.adPic" class="banner_img" @load="imgLoad"/>
          <a :href="item.adUrl" target="_blank">
            <h5 style="text-align: center">海贼王来啦</h5>
          </a>
        </el-col>
      </el-row>
    </el-carousel-item>
  </el-carousel>
</template>
<script>
  export default {
    name: "main",
    data(){
      return{
        imgList: [],
        imgHeight:[]
      }
    },
    methods:{
      imgLoad(){
        this.$nextTick(()=>{
          this.imgHeight=this.$refs.imgHeight[0].height
          console.log(this.$refs.imgHeight[0].height)
        })
      }
    },
    mounted(){
      this.imgLoad();
      window.addEventListener('resize',()=>{
        this.imgHeight = this.$refs.imgHeight[0].height
        this.imgLoad();
      })
    },

    created(){
      var that = this
      this.$http
        .get('http://localhost:8080/ad/all')
        .then(function (response) {
          // alert(JSON.stringify(response.data));
          that.imgList = response.data;
        })
    },
  }
</script>
<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
.banner_img{
  width: 100%;
  height: 100%;
}
</style>

