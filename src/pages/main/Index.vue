<template>
  <div class="">
    <Layout>
      <el-row :gutter="20" style="background: #222">
        <el-col :span="16"><div class="grid-content bg-purple">
          <iframe class="layout-logo" width="360" scrolling="no" height="70" frameborder="0" allowtransparency="true" src="//i.tianqi.com/index.php?c=code&id=2&color=%23FFFFFF&bgc=%23&bdc=%23&icon=5&py=nanjing&num=2&site=12"></iframe>
        </div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple">
          <div class="layout-nav">
            <Menu mode="horizontal"
                  theme="dark"
                  active-name="1"
                  style="background: #222"
                  class="header_left"
                  v-if="user != null">
              <MenuItem name="2">
                <router-link to="/write" style="font-size: 20px ;color: white">
                  <i class="el-icon-edit-outline"></i>发文
                </router-link>
              </MenuItem>
              <Submenu name="3">
                <template slot="title" style="font-size: 20px ;">
                  <i class="el-icon-question">帮助</i>

                </template>
                <!--<MenuGroup title="帮助">-->
                  <a href="/feedback">
                    <MenuItem name="3-1">投诉</MenuItem>
                  </a>
                  <a href="/feedback">
                    <MenuItem name="3-4">反馈</MenuItem>
                  </a>
                  <a href="/updatePassword">
                    <MenuItem name="3-4">修改密码</MenuItem>
                  </a>
                <!--</MenuGroup>-->
              </Submenu>
            </Menu>
          </div>
        </div></el-col>
      </el-row>
      <Layout class="aaa">
        <Sider hide-trigger class="layout-left">
          <Menu class="">
              <img :src="picUrl"/>
              <ul class="ccc">
                <li>
                  <router-link to="/" >
                    <el-button type="primary" class="ddd" round plain icon="el-icon-hot-water">
                      推荐
                    </el-button>
                  </router-link>
                </li>
                <li>
                  <router-link to="/hot" >
                    <el-button type="primary" class="ddd" round plain icon="el-icon-view">
                      热点
                    </el-button>
                  </router-link>
                </li>
                <li>
                  <router-link to="/picture" >
                    <el-button type="primary" class="ddd" round plain icon="el-icon-picture">
                      图片
                    </el-button>
                  </router-link>
                </li>
                <li>
                  <router-link to="/technology" >
                    <el-button type="primary" class="ddd" round plain icon="el-icon-s-platform">
                      科技
                    </el-button>
                  </router-link>
                </li>
                <li>
                  <router-link to="/entertainment" >
                    <el-button type="primary" class="ddd" round plain icon="el-icon-grape">
                      娱乐
                    </el-button>
                  </router-link>
                </li>
                <li>
                  <router-link to="/game" >
                    <el-button type="primary" class="ddd" round plain icon="el-icon-watermelon">
                      游戏
                    </el-button>
                  </router-link>
                </li>
                <li>
                  <router-link to="/sport" >
                    <el-button type="primary" class="ddd" round plain icon="el-icon-cherry">
                      体育
                    </el-button>
                  </router-link>
                </li>
                <li>
                  <router-link to="/car" >
                    <el-button type="primary" class="ddd" round plain icon="el-icon-pear">
                      汽车
                    </el-button>
                  </router-link>
                </li>
                <li>
                  <router-link to="/economics" >
                    <el-button type="primary" class="ddd" round plain icon="el-icon-orange">
                      财经
                    </el-button>
                  </router-link>
                </li>
                <li>
                  <router-link to="/funny" >
                    <el-button type="primary" class="ddd" round plain icon="el-icon-apple">
                      微头条
                    </el-button>
                  </router-link>
                </li>
              </ul>
              <Dropdown placement="right-end" class="aaa">
                <a href="javascript:void(0)" class="bbb">
                  <!--<Icon type="ios-stats"/>-->
                  <!--更多-->
                  <el-button type="primary" class="ddd" round plain>
                    更多
                    <i class="el-icon-arrow-right el-icon--right"></i>
                  </el-button>
                </a>
                <DropdownMenu slot="list">
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
  import pic from "@/assets/tt.png";
  import vMain from './main.vue'


  export default {
      name: "Index",
      data(){
        return {
          picUrl:pic,
          isCollapse: true,
          user:  JSON.parse(localStorage.getItem('loginUser')),

        }
      },
    components:{
      vMain
    }
    ,
    methods:{
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
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

  .ccc{
    /*text-align: right;*/
  }
  .ddd{
    width: 230px;
    height: 50px;
    margin-right: 10px;
    font-size: 25px;
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
  }

  .layout-left{
    margin-left: 100px;
    background: white;
  }
  .header_left{
    margin-left: 200px;
  }
</style>
