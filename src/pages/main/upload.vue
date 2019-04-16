<!--<template>-->
<!--<div>-->
<!--<tr v-for="(item, index) in articles" :key="index">-->
<!--<td>{{item.id}}</td>-->
<!--<td>{{item.name}}</td>-->
<!--<td>{{item.ctime}}</td>-->
<!--<td>-->
<!--<button @click="deleteData(item.id)">删除</button>-->
<!--</td>-->
<!--</tr>-->
<!--</div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--name: "upload",-->
<!--data(){-->
<!--return {-->
<!--id: this.$route.params.id,-->
<!--articles:[],-->
<!--}-->
<!--},-->
<!--created() {-->
<!--var that = this-->
<!--this.$http-->
<!--.get('http://localhost:8080/article/all')-->
<!--.then(function (res) {-->
<!--that.articles = res.data-->
<!--})-->
<!--},-->
<!--}-->

<!--var self = this;-->
<!--axios({-->
<!--method: 'delete',-->
<!--url: 'http://localhost:8080/article/' + id,-->
<!--data: {-->
<!--"id": id,-->
<!--}-->
<!--})-->
<!--.then(function (response) {-->
<!--data = response.data;-->
<!--if (data < 1) { // 删除失败-->
<!--humane.error("删除失败，您的页面可能已经过期，请更新您的页面！");-->
<!--return;-->

<!--} else {-->
<!--self.items.splice(index, 1);-->
<!--humane.success("操作成功！！！");-->
<!--}-->

<!--})-->
<!--.catch(function (response) {-->
<!--console.log(response);-->
<!--});-->
<!--</script>-->

<!--<style scoped>-->

<!--</style>-->
<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="Activity name">
        <el-input v-model="form.name"/>
      </el-form-item>
      <!--<el-form-item label="Activity zone">-->
        <!--<el-select v-model="form.region" placeholder="please select your zone">-->
          <!--<el-option label="Zone one" value="shanghai"/>-->
          <!--<el-option label="Zone two" value="beijing"/>-->
        <!--</el-select>-->
      <!--</el-form-item>-->
      <el-form-item label="Activity type">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="Online activities" name="type"/>
          <el-checkbox label="Promotion activities" name="type"/>
          <el-checkbox label="Offline activities" name="type"/>
          <el-checkbox label="Simple brand exposure" name="type"/>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="Activity form">
        <el-input v-model="form.desc" type="textarea"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button @click="onCancel">Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          type: [],
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        this.$message('submit!')

        var that=this;
        this.$http
          .post('http://localhost:8080/article/add'+{"id":id})
          .then(function (res) {
            that.articles=res.data
          })
        console.log(id)
      },
      onCancel() {
        this.$message({
          message: 'cancel!',
          type: 'warning'
        })
      }
    }
  }
</script>

<style scoped>
  .line{
    text-align: center;
  }
</style>
