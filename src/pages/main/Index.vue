<template>
  <div class="">
    <Layout>
      <Header style="background: #222">
        <!--<h3 class="layout-logo">南京</h3>-->
        <iframe class="layout-logo" width="360" scrolling="no" height="70" frameborder="0" allowtransparency="true" src="//i.tianqi.com/index.php?c=code&id=2&color=%23FFFFFF&bgc=%23&bdc=%23&icon=5&py=nanjing&num=2&site=12"></iframe>          <!--</div>-->
          <div class="layout-nav">
            <Menu mode="horizontal" theme="dark" active-name="1" style="background: #222">
              <!--<MenuItem name="1">-->
                <!--<Icon type="ios-paper" />-->
                <!--夜未央-->
              <!--</MenuItem>-->
              <MenuItem name="2">
                <router-link to="/write" >
                  <Icon type="ios-people" />
                  发文
                </router-link>
              </MenuItem>
              <Submenu name="3">
                <template slot="title">
                  <Icon type="ios-stats" />
                  设置
                </template>
                <MenuGroup title="帮助">
                  <MenuItem name="3-1">投诉</MenuItem>
                </MenuGroup>
                <MenuGroup title="头条">
                  <MenuItem name="3-4">反馈</MenuItem>
                </MenuGroup>
              </Submenu>
            </Menu>
          </div>
      </Header>
      <Layout class="aaa">
        <Sider hide-trigger class="layout-left">
          <Menu :theme="theme3" active-name="1" class="aaa">
            <MenuGroup name="11" class="aaa">
              <img :src="picUrl"/>
              <MenuItem name="1" class="aaa">
                <Icon type="md-document" />
                <a href="/" class="bbb">推荐</a>
              </MenuItem>
              <MenuItem name="2" class="aaa">
                <Icon type="md-chatbubbles" />
                <a href="/hot" class="bbb">热点</a>
              </MenuItem>
              <MenuItem name="3" class="aaa">
                <Icon type="md-chatbubbles" />
                <a href="/picture" class="bbb">图片</a>
              </MenuItem>
              <MenuItem name="4" class="aaa">
                <Icon type="md-chatbubbles" />
                <a href="/technology" class="bbb">科技</a>
              </MenuItem>
              <MenuItem name="5" class="aaa">
                <Icon type="md-chatbubbles" />
                <a href="/entertainment" class="bbb">娱乐</a>
              </MenuItem>
              <MenuItem name="6" class="aaa">
                <Icon type="md-chatbubbles" />
                <a href="/game" class="bbb">游戏</a>
              </MenuItem>
              <MenuItem name="7" class="aaa">
                <Icon type="md-chatbubbles" />
                <a href="/sport" class="bbb">体育</a>
              </MenuItem>
              <MenuItem name="8" class="aaa">
                <Icon type="md-chatbubbles" />
                <a href="/car" class="bbb">汽车</a>
              </MenuItem>
              <MenuItem name="9" class="aaa">
                <Icon type="md-chatbubbles" />
                <a href="/economics" class="bbb">财经</a>
              </MenuItem>
              <MenuItem name="10" class="aaa">
                <Icon type="md-chatbubbles" />
                <a href="/funny" class="bbb">搞笑</a>
              </MenuItem>
            </MenuGroup>
              <Dropdown placement="right-end" class="aaa">
                <a href="javascript:void(0)" class="bbb">
                  <Icon type="ios-stats"/>
                  更多
                  <Icon type="ios-arrow-forward"></Icon>
                </a>
                <DropdownMenu slot="list">
                  <!--<DropdownItem>军事</DropdownItem>-->
                  <MenuItem name="3-1" class="aaa">军事</MenuItem>
                  <MenuItem name="3-2" class="aaa">国际</MenuItem>
                  <MenuItem name="3-3" class="aaa">时尚</MenuItem>
                  <MenuItem name="3-4" class="aaa">旅游</MenuItem>
                  <MenuItem name="3-6" class="aaa">育儿</MenuItem>
                  <MenuItem name="3-8" class="aaa">美女</MenuItem>
                  <MenuItem name="3-9" class="aaa">历史</MenuItem>
                  <MenuItem name="3-10" class="aaa">美食</MenuItem>
                </DropdownMenu>
              </Dropdown>
          </Menu>
        </Sider>
        <Layout :style="{padding: '0 72px 24px'}">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </Layout>
      </Layout>

    </Layout>
    <BackTop :height="100" :bottom="100">
      <div class="back-top">返回顶端</div>
    </BackTop>
  </div>
</template>
<script>
  // <img :src="picUrl">
  import pic from "@/assets/tt.png";
  import vMain from './main.vue'


  export default {
      name: "Index",
      data(){
        return {
          picUrl:pic,
        }
      },
    components:{
      vMain
    }
  }
</script>
<style scoped>
  .back-top{
    padding: 10px;
    background: rgba(0, 153, 229, .7);
    color: #fff;
    text-align: center;
    border-radius: 2px;
  }
  h3{
    font-size: 30px;
  }
  .aaa{
    font-size:25px ;
  }
  .bbb{
    color: #666
  }
  .bbb:hover{
    color: rgba(0, 153, 229, .7);
  }
  .logo-img{
    width: 200px;
    height: 200px;
    text-align: right;
  }

  .layout-logo{
    float: left;
    color: black;
  }
  .layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 0;
  }
  .layout-left{
    margin-left: 100px;
    background: white;
  }
</style>
