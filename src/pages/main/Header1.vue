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
              <a target="_blank" class="nav-link " href="/ch/news_hot/" >热点</a>
            </li>
            <li class="y-left nav-item">
              <a target="_blank" class="nav-link " href="/ch/video/">视频</a>
            </li>
            <li class="y-left nav-item">
              <a target="_blank" class="nav-link " href="/ch/news_image/">图片</a>
            </li>
            <li class="y-left nav-item">
              <a target="_blank" class="nav-link " href="/ch/news_entertainment/">娱乐</a>
            </li>
            <li class="y-left nav-item">
              <a target="_blank" class="nav-link " href="/ch/news_tech/">科技</a>
            </li>
            <li class="y-left nav-item">
              <a target="_blank" class="nav-link " href="/ch/news_car/">汽车</a>
            </li>
            <li class="y-left nav-item">
              <a target="_blank" class="nav-link " href="/ch/news_sports/">体育</a>
            </li>
            <li class="y-left nav-item">
              <a target="_blank" class="nav-link " href="/ch/news_finance/">财经</a>
            </li>
            <li class="y-left nav-item">
              <a target="_blank" class="nav-link " href="/ch/news_military/">军事</a>
            </li>
            <li class="y-left nav-item">
              <a target="_blank" class="nav-link " href="/ch/news_world/">国际</a>
            </li>
            <li class="y-left nav-item">
              <a target="_blank" class="nav-link " href="/ch/news_fashion/">时尚</a>
            </li>
            <li class="y-left nav-item">
              <a target="_blank" class="nav-link " href="/ch/news_travel/" >旅游</a>
            </li>

          </ul>
        </div>
      </div>
      <ul class="y-right mgr">
        <li class="tb-item userbox1">
          <div>
            <div class="y-box wuserbox">
              <div class="y-right username">
                <a class="user-head" target="_blank" rel="nofollow" href="//www.toutiao.com/c/user/92287581804/">
                  <div class="user-image">
                    <img onload="this.style.opacity=1;" src="//p3.pstatp.com/thumb/5d4a000cdeed408dc66f" style="opacity: 1;">
                  </div>
                  <span>夜未央</span>
                </a>
                <div class="user-layer">
                  <ul>
                    <li>
                      <a class="layer-item" target="_blank" rel="nofollow" href="//www.toutiao.com/c/user/92287581804/?tab=favourite">我的收藏</a>
                    </li>
                    <li>
                      <a class="layer-item" target="_blank" rel="nofollow" href="//www.toutiao.com/c/user/relation/92287581804/?tab=following">我的关注</a>
                    </li>
                    <li>
                      <a class="layer-item" target="_blank" rel="nofollow" href="//www.toutiao.com/c/user/relation/92287581804/?tab=followed">我的粉丝</a>
                    </li>
                    <li>
                      <a href="https://sso.toutiao.com/logout/" class="layer-item" rel="nofollow">退出</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="tb-item">
          <a class="tb-link" href="javascript:void(0)">反馈</a>
        </li>
        <li class="tb-item">
          <a class="tb-link" href="" target="_blank">投诉侵权</a>
        </li>
        <li class="tb-item">
          <a class="tb-link" href="/about/">头条产品</a>
          <div class="layer">
            <ul>
              <li>
                <a href="" class="layer-item" target="_blank">问答</a>
              </li>
              <li>
                <a href="" class="layer-item" target="_blank" >头条号</a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Header1"
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
