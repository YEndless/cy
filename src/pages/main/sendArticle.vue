<template>
  <div >
    <div >
      <div class="ugcBox-inner">
        <ul class="bui-box ugc-tab-list">
          <li class="bui-left ugc-tab-item current">发布图文</li>
          <li class="bui-left ugc-tab-item">发布视频</li>
        </ul>
        <div class="ugc-content">
          <div >
            <div class="upload-box">
                  <textarea @input="descInput"
                            v-model="desc"
                            placeholder="有什么新鲜事想告诉大家"
                            class="title-input"
                            maxlength="2000">
                  </textarea>
              <p class="words-number">{{txtVal}}/2000字</p>

              <div class="bui-box upload-footer">
                <div class="bui-left">
                      <span class="show-image-uploader show-uploader">
                        <img src="http://p3.pstatp.com/origin/b76b00091cadfe239a6a" class="icon">
                        <span>添加图片</span>
                      </span>
                  <span class="show-emoji">
                        <img src="http://p3.pstatp.com/origin/b76b00091cadfe239a6a" class="icon">
                      </span>
                </div>
                <div class="bui-right">
                  <span class="msg-tip"></span>
                  <a class="upload-publish">发布</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <v-article-title></v-article-title>
  </div>

</template>

<script>
    export default {
        name: "sendArticle",
      data(){
          return {
            txtVal: 0,
            desc:""
          }
      },
      methods: {
        descInput(){
          this.txtVal = this.desc.length;
        }
      },
    }
</script>

<style>
  .bui-left {
    float: left;
  }
  .ugcBox-inner {
    position: relative;
    border: 1px solid #e8e8e8;
    width: 100%;
  }
  .ugc-tab-list {
    height: 44px;
    border-bottom: 1px solid #e8e8e8;
  }

  .bui-box {
    display: block;
    zoom: 1;
  }

  ol, ul {
    list-style: none;
  }
  .ugc-tab-item.current {
    border-bottom-color: #ed4040;
    color: #ed4040;
  }
  .ugc-tab-item {
    margin-left: 19px;
    font-size: 15px;
    color: #222;
    line-height: 42px;
    border-bottom: 2px solid transparent;
    cursor: pointer;
  }
  li {
    display: list-item;
    text-align: -webkit-match-parent;
  }
  .upload-box {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    position: relative;
  }
  .upload-box .title-input {
    width: 100%;
    height: 100px;
    display: block;
    font-size: 14px;
    line-height: 1.4;
    padding: 13px 19px;
    border: 0;
    outline: 0;
    resize: none;
    /*background-color: #f4f5f6;*/
    background-color: #fff;
    transition: all .5s;
    animation-duration: .8s;
    animation-fill-mode: both;
  }
  .upload-box .words-number {
    position: absolute;
    z-index: 3;
    bottom: 50px;
    right: 10px;
    display: inline-block;
    background-color: rgba(0,0,0,.5);
    border-radius: 50px;
    padding: 0 8px;
    color: #fff;
  }
  .upload-footer {
    border-top: 1px solid #e8e8e8;
    height: 40px;
  }
  .upload-footer .show-uploader {
    color: #222;
    font-size: 14px;
    line-height: 39px;
    display: inline-block;
    vertical-align: middle;
    margin: 0 0 0 20px;
    cursor: pointer;
  }
  .upload-footer .show-uploader i, .upload-footer .show-uploader span {
    display: inline-block;
    vertical-align: middle;
  }
  .upload-footer .show-uploader i {
    margin-right: 3px;
  }
  .show-emoji {
    display: inline-block;
    height: 39px;
    margin-left: 20px;
    vertical-align: middle;
    cursor: pointer;
  }
  .show-emoji .icon {
    width: 20px;
    height: 20px;
    margin-top: 9px;
  }
  img {
    border-style: none;
  }
  .upload-footer .bui-right {
    text-align: right;
  }
  .bui-right {
    float: right;
  }
  .upload-footer .msg-tip {
    color: #ed4040;
    font-size: 12px;
    margin-right: 10px;
  }
  .upload-footer .upload-publish {
    display: inline-block;
    width: 120px;
    line-height: 40px;
    text-align: center;
    font-size: 14px;
    background-color: #f85959;
    color: #fff;
    opacity: .6;
  }
</style>
