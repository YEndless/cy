<template>
  <div style="height: 34px; background: #222;">
    <div class="y-box wtopbar">
      <div class="y-left y-nav-topbar">
        <div class="nav">
          <ul class="y-box nav-list">
            <li class="y-left nav-item">
              <a target="_blank" class="nav-link " href="/">推荐</a>
            </li>
            <li class="y-left nav-item">
              <a target="_blank" class="nav-link " href="/hot/" >热点</a>
            </li>
            <li class="y-left nav-item">
              <a target="_blank" class="nav-link " href="/picture">图片</a>
            </li>
            <li class="y-left nav-item">
              <a target="_blank" class="nav-link " href="/entertainment">娱乐</a>
            </li>
            <li class="y-left nav-item">
              <a target="_blank" class="nav-link " href="/technology">科技</a>
            </li>
            <li class="y-left nav-item">
              <a target="_blank" class="nav-link " href="/car/">汽车</a>
            </li>
            <li class="y-left nav-item">
              <a target="_blank" class="nav-link " href="/sport/">体育</a>
            </li>
            <li class="y-left nav-item">
              <a target="_blank" class="nav-link " href="/economics/">财经</a>
            </li>
            <li class="y-left nav-item">
              <a target="_blank" class="nav-link " href="/">军事</a>
            </li>
            <li class="y-left nav-item">
              <a target="_blank" class="nav-link " href="/">国际</a>
            </li>
            <li class="y-left nav-item">
              <a target="_blank" class="nav-link " href="/">时尚</a>
            </li>
            <li class="y-left nav-item">
              <a target="_blank" class="nav-link " href="/" >旅游</a>
            </li>

          </ul>
        </div>
      </div>
      <ul class="y-right mgr">
        <li class="tb-item userbox1">
          <div>
            <div class="y-box wuserbox">
              <div class="y-right username">
                <a class="user-head" target="_blank" rel="nofollow" :href="/u/+user.id">
                  <div class="user-image">
                    <img onload="this.style.opacity=1;" :src="user.avatar" style="opacity: 1;">
                  </div>
                  <span>{{user.nickName}}</span>
                </a>
              </div>
            </div>
          </div>
        </li>
        <li class="tb-item">
          <a class="tb-link" href="/feedback">反馈or投诉</a>
        </li>
        <!--<li class="tb-item">-->
          <!--<a class="tb-link" href="/feedback">投诉</a>-->
        <!--</li>-->
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Header1",
      data(){
          return{
            user:JSON.parse(localStorage.getItem('loginUser'))
          }
      }
    }
</script>

<style scoped>
  .wtopbar {
    position: relative;
    height: 34px;
    line-height: 34px;
    background: #222;
    font-size: 14px;
    color: #fff;
  }
   .y-left {
    float: left;
  }
  .y-nav-topbar .nav {
    position: relative;
    height: 34px;
    line-height: 34px;
    background: 0 0;
    color: #fff;
  }
  .y-nav-topbar .nav-list {
    padding: 0 20px;
  }
  .y-nav-topbar .nav-item {
    font-size: 13px;
    font-weight: 500;
    margin-right: 20px;
    width: 26px;
    white-space: nowrap;
  }
  li {
    list-style: none;
  }
  .y-nav-topbar .nav-link {
    color: #fff;
    border: 0;
  }
  .nav-more {
    position: relative;
    margin-right: 0;
  }
  .y-right {
    float: right;
  }

  .userbox1 {
    margin-left: 14px;
    height: 34px;
  }
  .tb-item {
    position: relative;
    float: left;
    border-left: 1px solid #3a3a3a;
  }
  .tb-link {
    padding: 0 10px;
    color: #fff;
  }
  .layer {
    display: none;
    position: absolute;
    border: 1px solid #d9d9d9;
    background: #fff;
    z-index: 20;
    font-size: 14px;
    right: 0;
    width: 116px;
  }
  .wuserbox {
    position: relative;
    font-size: 14px;
    padding-right: 14px;
    color: #fff;
  }
  .wuserbox .username {
    position: relative;
    text-align: center;
    font-size: 14px;
    color: #fff;
  }

  .wuserbox .user-head {
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 160px;
    color: #fff;
  }

  .wuserbox .user-head .user-image {
    display: inline-block;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    vertical-align: middle;
    margin-right: 6px;
    margin-top: -2px;
    background-color: #efefef;
  }
  .wuserbox .user-head img {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    vertical-align: middle;
    opacity: 0;
  }

  .wuserbox .username span {
    color: #fff;
  }
  .wuserbox .user-layer {
    display: none;
    position: absolute;
    top: 34px;
    right: 0;
    border: 1px solid #d9d9d9;
    background: #fff;
    z-index: 22;
    font-size: 14px;
    width: 130px;
  }

  .wuserbox .user-layer .layer-item {
    cursor: pointer;
    display: block;
    width: auto;
    height: 42px;
    line-height: 42px;
    color: #999;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    text-align: center;
  }
</style>
