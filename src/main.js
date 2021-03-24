// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'
import Service from './common/service'
import $ from 'jquery'
import Store from './vuex/index'

import Clipboard from 'clipboard';
import echarts from 'echarts';
import VueUeditorWrap from 'vue-ueditor-wrap' // ES6 Module
Vue.prototype.echarts = echarts;
Vue.prototype.Clipboard=Clipboard;
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.component('vue-ueditor-wrap', VueUeditorWrap);
Vue.prototype.havePermissions = function (permissionStr){
  let permissionsArr = localStorage.getItem('permissions')
  return !(permissionsArr.indexOf(permissionStr) == -1)
};
router.beforeEach((to, from, next) => {
    var userInfo = localStorage.getItem('user');
    localStorage.setItem('shopId', 1) // 页面跳转设置shopId为1（健康商城） 乐兹商品为2在页面中设置
    Store.commit("setshowPosition", to.name == 'login');
    if(to.name !== 'login'){
        if(!userInfo){
            next({"name":'login'})
        }else{
            next()
        }
    }else{
        next()
    }
    // if (to.matched.length === 0) {
    //     next('/')
    // }else{
    //     Service.login().accountInfo().then(response => {
    //         if(response.errorCode == 0){
    //             next()
    //         }
    //     }, err => {
    //         next()
    //     });
    // }
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App},
  template: '<App/>'
});
