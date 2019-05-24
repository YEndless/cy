<template>
    <el-card>
      <div v-for="item in imgList" :key="item.id">
        <img :src="item.adPic"/>
        <a :href="item.adUrl">
          <h5 style="text-align: center">海贼王来啦</h5>
        </a>
      </div>
    </el-card>
</template>

<script>
    export default {
      data() {
        return {
          imgList: [],
          user: JSON.parse(localStorage.getItem('loginUser')),

        }
      },
      methods: {
        created() {
          var that = this
          this.$http
            .get('http://localhost:8080/ad/all')
            .then(function (response) {
              // alert(JSON.stringify(response.data));
              that.imgList = response.data;
            })
        }
      }
    }
</script>

<style scoped>

</style>
