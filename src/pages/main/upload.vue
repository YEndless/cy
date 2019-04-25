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

    <div>
      <button @click="save1">save</button>
      <button @click="add1">add</button>
      <input v-model="rrr.reply" placeholder="edit me">
      <br/>
      <!--<p style="white-space: pre-line;">{{ message2 }}</p>-->
      <!--<br>-->
      <!--<textarea v-model="message2" placeholder="test">-->
      <!--</textarea>-->
    </div>

    <div>
      <form @submit.prevent="submit">
        <div>
          <input type="text" v-model="user.id">
        </div>
        <div>
          <input type="text" v-model="user.reply">
        </div>
        <div>
          <!--<label>-->
            <!--<input type="radio" value="1" v-model="user.gender"> 男-->
          <!--</label>-->
          <!--<label>-->
            <!--<input type="radio" value="2" v-model="user.reply"> 女-->
          <!--</label>-->
        </div>
        <input type="submit" value="提交" >
      </form>
    </div>
  </div>
</template>

<script>

  import qs from 'qs';

  export default {
    data() {
      return {
        form: {
          name: '',
          type: [],
          desc: '',
        },
        rrr:{
          reply:"",
        },
        article:{

        }
      }
    },
    methods: {
      onSubmit() {
        this.$message('submit!')
      },
      onCancel() {
        this.$message({
          message: 'cancel!',
          type: 'warning'
        })
      },

      submit: function() {
        var formData = JSON.stringify(this.user); // 表单数据
        this.$http
          .post('http://localhost:8080/reply/save',formData)
          .then((response) => {
          // success callback
          formData =response.data
          console.log(formData);
          console.log(response.data);
        }, (response) => {
          // error callback
        });
      },

      add1(){
        this.$http
          .post('http://localhost:8080/reply/save',this.rrr)
          .then((res)=>{
            console.log(res)
          })
          .catch((res)=>{
          console.log(res,'失败')
        })
      },
    }
  }
</script>

<style scoped>
  .line{
    text-align: center;
  }
</style>
