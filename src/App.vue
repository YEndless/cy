<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>

  #app {
    /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
    /*-webkit-font-smoothing: antialiased;*/
    /*-moz-osx-font-smoothing: grayscale;*/
    /*text-align: center;*/
    color: #2c3e50;
    /*margin-top: 60px;*/
  }

  @font-face {font-family: "iconfont";
    src: url('//at.alicdn.com/t/font_914065_11fcpx0kktp.eot?t=1542956266782'); /* IE9*/
    src: url('//at.alicdn.com/t/font_914065_11fcpx0kktp.eot?t=1542956266782#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
    url('//at.alicdn.com/t/font_914065_11fcpx0kktp.ttf?t=1542956266782') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('//at.alicdn.com/t/font_914065_11fcpx0kktp.svg?t=1542956266782#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-shoucangjia:before { content: "\e696"; }

  .icon-bofang:before { content: "\e65f"; }

  .icon-zhanghao:before { content: "\e64d"; }

  .icon-gouwuche1:before { content: "\e600"; }

  .icon-jia:before { content: "\e632"; }

  .icon-erji:before { content: "\e65a"; }

  .icon-mima:before { content: "\e626"; }

</style>
