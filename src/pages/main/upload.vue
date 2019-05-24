<template>
  <div>
    <el-upload
    action="http://prfxvd2me.bkt.clouddn.com"
    v-bind:show-file-list="false"
    v-bind:data="form"
    v-bind:before-upload="handleBeforeUpload"
    v-bind:on-success="handleSuccess"
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
      <img  :src="img" alt="">
    </el-upload>
    <el-upload
      action="http://prfxvd2me.bkt.clouddn.com/pic"
      list-type="picture-card"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove">
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        form: null,
        img: null,
        dialogImageUrl: '',
        dialogVisible: false
      }
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;

      },
      /** @argument
       * 上传文件前处理
       * @param {file} file
       */
      handleBeforeUpload (file) {
        let params = {
          fileName: file.name
        }
        return this.$http
          .get('http://localhost:8080/user/updataAvatar', {params})
          .then((res) => {
            if (res.data.code === '1') {
              this.form = {
                key: res.data.result.fileName,
                token: res.data.result.uploadToken
              }
            } else {
              this.$message.error('上传图片失败')
            }
          })
          .catch(() => {
            this.$message.error('上传图片失败')
          })
      },
      /** @argument
       * 文件上传成功后处理
       * @param {Object} response
       * @param {file} file
       * @param {fileList}
       */
      handleSuccess (response, file, fileList) {
        this.img = `http://prfxvd2me.bkt.clouddn.com/${response.key}`
      }
    }
  }
</script>
