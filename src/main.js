// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import jquery from 'jquery'
import axios from  'axios'
import 'element-ui/lib/theme-chalk/display.css';
import ElementUI from 'element-ui';
import iView from 'iview';
import 'iview/dist/styles/iview.css';

import VueDirectiveImagePreviewer from 'vue-directive-image-previewer'
import 'vue-directive-image-previewer/dist/assets/style.css'
import VueQuillEditor from 'vue-quill-editor'

import Vuex from 'vuex' //引入状态管理
Vue.use(Vuex)
Vue.use(ElementUI)
Vue.use(VueQuillEditor)
Vue.use(VueDirectiveImagePreviewer)
Vue.use(jquery)


import qs from 'qs';
Vue.prototype.$qs = qs;
Vue.prototype.$http = axios

Vue.config.productionTip = false
Vue.use(ElementUI);

Vue.use(iView);
new Vue({
  el: '#app',
  router,
  render: h => h(App)
  // components: { App },
  // template: '<App/>'
})
