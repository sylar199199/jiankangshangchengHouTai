import Vue from 'vue'
// import Vuex from 'vuex'
import axios from 'axios'
import Global from './global'
import Util from './util'
import Store from '../vuex/index'
import {Message} from 'element-ui';

axios.interceptors.request.use(config => {
  Store.commit("setIsLoading", true);
  return config
}, error => {
  return Promise.reject(error)
});

axios.interceptors.response.use(response => {
  if (Global.env == 'prod' && response.data) {
    // 防止谷歌浏览器 https域名下 不支持http图片
    let replaceData = JSON.stringify(response.data)
    let transData = replaceData.replace(/http\:\/\/106\.38\.29\.201/g, "https://mall.kunlunhealth.com");
    response.data = JSON.parse(transData)
  }
  return response
}, error => {
  return Promise.resolve(error.response)
});

function errorState(response) {
  Store.commit("setIsLoading", false);
  ;
  // 如果http状态码正常，则直接返回数据
  //if(response && (response.status === 200 || response.status === 304 || response.status === 400)) {
  if (response.status == '200') {

  } else {
    Message.error('请求超时，请稍后再试!')
  }

}

function successState(response) {
  Store.commit("setIsLoading", false);
  //统一判断后端返回的错误码
  if (response.status == '200') {
    if (response.data.errorCode == 0) {
    } else if (response.data.errorCode == -1) {
      // Message.error('服务端错误，请联系管理员');
    } else if (response.data.errorCode == 1) {
      // Message.error(response.data.message);
    } else if (response.data.errorCode == 5001) {
      Util.localStorageUtil.clear('leadsInfo');
      localStorage.removeItem('user');
      localStorage.removeItem('param');
      localStorage.removeItem('contentnews');
      localStorage.removeItem('type');
      localStorage.removeItem('access_token');
      window.location.href = document.location.protocol + '//' + window.location.host + '/'
    } else {
      Message.error(response.data.message)
    }
  } else {
    Message.error('网络请求错误');
  }
}

const getResource = (opts, data) => {
  var tokenVal;
  let shopId = localStorage.getItem('shopId');
  if (Util.localStorageUtil.get('access_token')) {
    tokenVal = Util.localStorageUtil.get('access_token');
  }
  let contentType = 'application/json; charset=UTF-8';
  if (opts.url.indexOf('/xunan/admin/leads/import') >= 0) {
    contentType = 'multipart/form-data'
  }
  let httpDefaultOpts = { //http默认配置
    method: opts.method,
    baseURL: Global.requestUrl,
    url: opts.url,
    timeout: 20000,
    params: data,
    data: data,
    headers: opts.method == 'get' ? {
      'X-Requested-With': 'XMLHttpRequest',
      "Accept": "application/json",
      "Content-Type": "application/json; charset=UTF-8",
      'token': tokenVal,
      'shopId': shopId,
    } : {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': contentType,
      'token': tokenVal,
      'shopId': shopId,
    }
  };

  if (opts.method == 'get') {
    delete httpDefaultOpts.data
  } else {
    delete httpDefaultOpts.params
  }

  let promise = new Promise(function (resolve, reject) {
    axios(httpDefaultOpts).then(
      (response) => {
        successState(response);
        resolve(response.data)
      }
    ).catch(
      (error) => {
        errorState(error);
        reject(error)
      }
    )

  });
  return promise
};

export default {
  login() {
    return {
      loginSms(data) {
        // 登录
        return getResource({
          url: '/kl-store/admin/account/login',
          method: 'post'
        }, data)
      },
      getUsermenu(data) {
        // 获取用户菜单
        return getResource({
          url: '/kl-store/admin/account/menu',
          method: 'post'
        }, data)
      },
      loginOut(data) {
        // 登出
        return getResource({
          url: '/kl-store/admin/account/logout',
          method: 'post'
        }, data)
      },
      changePassword(data) {
        // 重置密码
        return getResource({
          url: '/kl-store/admin/account/password',
          method: 'post'
        }, data)
      },
      accountInfo(data) {
        return getResource({
          url: '/xunan/admin/account/info',
          method: 'GET'
        }, data)
      },
      editorInfo(data) {
        return getResource({
          url: '/xunan/admin/account/info',
          method: 'post'
        }, data)
      }
    }

  },
  // 退货地址
  returnadress() {
    return {
      // 添加退货地址
      addadress(data, key) {
        return getResource({
          url: `/kl-store/admin/return/address`,
          method: 'post'
        }, data)
      },

      //获取退货地址
      getadress(data, key) {
        return getResource({
          url: `/kl-store/admin/return/address/${key}`,
          method: 'get'
        }, data)
      },
      // 删除
      deleteaddress(data, key) {
        return getResource({
          url: `/kl-store/admin/return/address/${key}`,
          method: 'DELETE'
        }, data)
      },

      //    退货地址查询
      queryaddress(data, key) {
        return getResource({
          url: `/kl-store/admin/return/address/query`,
          method: 'post'
        }, data)
      },
    }
  },
  // 商品分组
  goodscategory() {
    return {
      // 添加分组
      addcategory(data, key) {
        return getResource({
          url: `/kl-store/admin/goods/category`,
          method: 'post'
        }, data)
      },
      // 分组排序
      selectionsort(data, key) {
        return getResource({
          url: `/kl-store/admin/goods/category/selection/sort/${key}`,
          method: 'put'
        }, data)
      },
// 精选分组get
      selection(data, key) {
        return getResource({
          url: `/kl-store/admin/goods/category/selection`,
          method: 'get'
        }, data)
      },

      //导航栏详情
      gethealth(data, key) {
        return getResource({
          url: `/kl-store/admin/service/health/${key}`,
          method: 'get'
        }, data)
      },
      // 删除
      deletecategory(data, key) {
        return getResource({
          url: `/kl-store/admin/goods/category/${key}`,
          method: 'DELETE'
        }, data)
      },
      //关联商品保存
      linkgoods(data, key) {
        return getResource({
          url: `/kl-store/admin/goods/category/link/goods/${key}`,
          method: 'post'
        }, data)
      },
      //    商品分组查询
      querygoodscategory(data, key) {
        return getResource({
          url: `/kl-store/admin/goods/category/query`,
          method: 'get'
        }, data)
      },
      //获取可以关联的商品
      getlinkgoods(data, key) {
        return getResource({
          url: `/kl-store/admin/goods/category/query/link/goods`,
          method: 'get'
        }, data)
      },
      //获得已经关联的商品
      gethaslinkgoods(data, key) {
        return getResource({
          url: `/kl-store/admin/goods/category/query/linked/goods/${key}`,
          method: 'get'
        }, data)
      },
      //商品分组是否精选
      isselection(data, key) {
        return getResource({
          url: `/kl-store/admin/goods/category/selection/${key}`,
          method: 'put'
        }, data)
      },


    }
  },

  // 店铺装修健康服务导航
  servicehealth() {
    return {
      // 导航栏添加
      addservice(data, key) {
        return getResource({
          url: `/kl-store/admin/serving/health`,
          method: 'post'
        }, data)
      },

      //导航栏详情
      gethealth(data, key) {
        return getResource({
          url: `/kl-store/admin/serving/health/${key}`,
          method: 'get'
        }, data)
      },
      // 删除
      deletehealth(data, key) {
        return getResource({
          url: `/kl-store/admin/serving/health/${key}`,
          method: 'DELETE'
        }, data)
      },
      //导航栏列表
      gethealthlist(data, key) {
        return getResource({
          url: `/kl-store/admin/serving/health/list`,
          method: 'get'
        }, data)
      },

      showhealth(data, key) {
        return getResource({
          url: `/kl-store/admin/serving/health/show/${key}`,
          method: 'put'
        }, data)
      },
      //排序导航栏列表
      sorthealthlist(data, key) {
        return getResource({
          url: `/kl-store/admin/serving/health/sort${key}`,
          method: 'put'
        }, data)
      },


    }
  },
  article(){
    return {
      // 添加
      addarticle(data, key) {
        return getResource({
          url: `/kl-store/admin/article`,
          method: 'post'
        }, data)
      },
      //批量下架
      alloffshelfarticle(data, key) {
        return getResource({
          url: `/kl-store//admin/article/batch/offshelf`,
          method: 'post'
        }, data)
      },
      //批量上架
      allonshelfarticle(data, key) {
        return getResource({
          url: `/kl-store/admin/article/batch/onshelf`,
          method: 'post'
        }, data)
      },
      // 编辑
      editarticle(data, key) {
        return getResource({
          url: `/kl-store/admin/article/${key}`,
          method: 'post'
        }, data)
      },

      //详情
      getarticle(data, key) {
        return getResource({
          url: `/kl-store/admin/article/${key}`,
          method: 'get'
        }, data)
      },
      // 删除
      deletearticle(data, key) {
        return getResource({
          url: `/kl-store/admin/article/${key}`,
          method: 'DELETE'
        }, data)
      },
      // 取消置顶
      ctoparticle(data, key) {
        return getResource({
          url: `/kl-store/admin/article/${key}/ctop`,
          method: 'post'
        }, data)
      },
      //置顶
      toparticle(data, key) {
        return getResource({
          url: `/kl-store/admin/article/${key}/top`,
          method: 'post'
        }, data)
      },

      offshelfarticle(data, key) {
        return getResource({
          url: `/kl-store/admin/article/${key}/offshelf`,
          method: 'post'
        }, data)
      },
      onshelfarticle(data, key) {
        return getResource({
          url: `/kl-store/admin/article/${key}/onshelf`,
          method: 'post'
        }, data)
      },
      //分类列表
      categorylist(data, key) {
        return getResource({
          url: `/kl-store/admin/article/category`,
          method: 'get'
        }, data)
      },
       //添加分类列表
       addCategory(data, key) {
        return getResource({
          url: `/kl-store/admin/article/category`,
          method: 'post'
        }, data)
      },
       //分类详情
       categorydetail(data, key) {
        return getResource({
          url: `/kl-store/admin/article/category/${key}`,
          method: 'get'
        }, data)
      },
        //修改分类
        editorcategory(data, key) {
          return getResource({
            url: `/kl-store/admin/article/category//${key}`,
            method: 'post'
          }, data)
        },
        deletecategory(data, key) {
          return getResource({
            url: `/kl-store/admin/article/category/${key}`,
            method: 'DELETE'
          }, data)
        },
          //排序分类
          sortcategory(data, key) {
            return getResource({
              url: `/kl-store/admin/article/category/sort`,
              method: 'post'
            }, data)
          },
          //修改文章分类
          changecategory(data, key) {
            return getResource({
              url: `/kl-store/admin/article/change/category`,
              method: 'post'
            }, data)
          },
          articlelist(data, key) {
            return getResource({
              url: `/kl-store/admin/article/query`,
              method: 'post'
            }, data)
          },
    }
  },
  // 店铺装修图文导航
  navigation() {
    return {
      // 导航栏添加
      addbanner(data, key) {
        return getResource({
          url: `/kl-store/admin/navigation`,
          method: 'post'
        }, data)
      },
      // 编辑导航
      editbanner(data, key) {
        return getResource({
          url: `/kl-store/admin/navigation`,
          method: 'put'
        }, data)
      },

      //导航栏详情
      getnavigation(data, key) {
        return getResource({
          url: `/kl-store/admin/navigation/${key}`,
          method: 'get'
        }, data)
      },
      // 删除
      deletenavigation(data, key) {
        return getResource({
          url: `/kl-store/admin/navigation/delete/${key}`,
          method: 'DELETE'
        }, data)
      },
      // 获取详情
      navigationdetail(data, key) {
        return getResource({
          url: `/kl-store/admin/navigation/${key}`,
          method: 'get'
        }, data)
      },
      //导航栏列表
      getnavigationlist(data, key) {
        return getResource({
          url: `/kl-store/admin/navigation/list`,
          method: 'get'
        }, data)
      },

      shownavigation(data, key) {
        return getResource({
          url: `/kl-store/admin/navigation/show/${key}`,
          method: 'put'
        }, data)
      },
      //排序导航栏列表
      sortnavigationlist(data, key) {
        return getResource({
          url: `/kl-store/admin/navigation/sort${key}`,
          method: 'put'
        }, data)
      },


    }
  },
  // 店铺装修图片广告
  activitybanner() {
    return {
      // 图文广告
      getbanner(data, key) {
        return getResource({
          url: `/kl-store/admin/activity/banner/show/${key}`,
          method: 'put'
        }, data)
      },
      addBanner(data, key) {
        return getResource({
          url: `/kl-store/admin/activity/banner`,
          method: 'post'
        }, data)

      },
      getBannerList(data, key) {
        return getResource({
          url: `/kl-store/admin/activity/banner/query`,
          method: 'get'
        }, data)

      },
      //删除图文广告
      deletebanner(data, key) {
        return getResource({
          url: `/kl-store/admin/activity/banner/delete/${key}`,
          method: 'DELETE'
        }, data)
      },

    }
  },
  music(){
    return {
      addmusic(data, key) {
        //添加
        return getResource({
          url: `/kl-store/admin/music`,
          method: 'post'
        }, data)
      },
      editormusic(data, key) {
        //编辑
        return getResource({
          url: `/kl-store/admin/music/${key}`,
          method: 'put'
        }, data)
      },
        //获取详情
        getmusic(data, key) {
          return getResource({
            url: `/kl-store/admin/music/${key}`,
            method: 'get'
          }, data)
        },
        // 删除
        deletemusic(data, key) {
          return getResource({
            url: `/kl-store/admin/music/${key}`,
            method: 'DELETE'
          }, data)
        },
       // 查询活动
       querymusic(data, key) {
        return getResource({
          url: `/kl-store/admin/music/query`,
          method: 'get'
        }, data)
      },
    }
  },
  bigTurntable(){
    return {
      addbigTurntable(data, key) {
        //活动添加
        return getResource({
          url: `/kl-store/admin/activity/bigTurntable`,
          method: 'post'
        }, data)
      },
      editorbigTurntable(data, key) {
        //活动编辑
        return getResource({
          url: `/kl-store/admin/activity/bigTurntable/${key}`,
          method: 'put'
        }, data)
      },
        //获取活动详情
        getbigTurntable(data, key) {
          return getResource({
            url: `/kl-store/admin/activity/bigTurntable/${key}`,
            method: 'get'
          }, data)
        },
        // 删除活动
        deletebigTurntable(data, key) {
          return getResource({
            url: `/kl-store/admin/activity/bigTurntable/${key}`,
            method: 'DELETE'
          }, data)
        },
        // 生效活动
        invalidbigTurntable(data, key) {
            return getResource({
              url: `/kl-store/admin/activity/bigTurntable/invalid/${key}`,
              method: 'put'
            }, data)
        },
      // 复制活动
      copybigTurntable(data, key) {
        return getResource({
          url: `/kl-store/admin/activity/bigTurntable/copy/${key}`,
          method: 'put'
        }, data)
      },
        // 活动中奖人导出
        daochu(data, key) {
          return getResource({
            url: `/kl-store/admin/activity/bigTurntable/exportWinner/${key}`,
            method: 'get'
          }, data)
        },
         // 活动参与人导出
         daochuuser(data, key) {
          return getResource({
            url: `/kl-store/admin/activity/bigTurntable/exportUser/${key}`,
            method: 'get'
          }, data)
        },
       // 查询活动
       querybigTurntable(data, key) {
        return getResource({
          url: `/kl-store/admin/activity/bigTurntable/query`,
          method: 'get'
        }, data)
      },
      // 获取可参加活动的商品
      getbigTurntablegoods(data, key) {
        return getResource({
          url: `/kl-store/admin/activity/bigTurntable/goods/query`,
          method: 'get'
        }, data)
      },
       // 参与人列表
       getusers(data, key) {
        return getResource({
          url: `/kl-store/admin/activity/bigTurntable/users`,
          method: 'get'
        }, data)
      },
    }
  },
  groupPurchase(){
    return {
      addgroupPurchase(data, key) {
        //活动添加
        return getResource({
          url: `/kl-store/admin/activity/groupPurchase`,
          method: 'post'
        }, data)
      },
      editorgroupPurchase(data, key) {
        //活动编辑
        return getResource({
          url: `/kl-store/admin/activity/groupPurchase/${key}`,
          method: 'post'
        }, data)
      },
        //获取活动详情
        getgroupPurchase(data, key) {
          return getResource({
            url: `/kl-store/admin/activity/groupPurchase/${key}`,
            method: 'get'
          }, data)
        },
        // 删除活动
        deletegroupPurchase(data, key) {
          return getResource({
            url: `/kl-store/admin/activity/groupPurchase/${key}`,
            method: 'DELETE'
          }, data)
        },
        // 生效活动
        enablegroupPurchase(data, key) {
            return getResource({
              url: `/kl-store/admin/activity/groupPurchase/${key}/enable`,
              method: 'post'
            }, data)
        },
         // 失效活动
         disablegroupPurchase(data, key) {
          return getResource({
            url: `/kl-store/admin/activity/groupPurchase/${key}/disable`,
            method: 'post'
          }, data)
      },
      // 复制活动
      copygroupPurchase(data, key) {
        return getResource({
          url: `/kl-store/admin/activity/groupPurchase/${key}/copy`,
          method: 'post'
        }, data)
      },
      
       // 查询活动
       querygroupPurchase(data, key) {
        return getResource({
          url: `/kl-store/admin/activity/groupPurchase/query`,
          method: 'post'
        }, data)
      },
      
    
    }
  },
  activityh5() {
    return {
      addactivityh5(data, key) {
        //活动添加
        return getResource({
          url: `/kl-store/admin/activity/h5`,
          method: 'post'
        }, data)
      },
      editoractivity(data, key) {
        //活动编辑
        return getResource({
          url: `/kl-store/admin/activity/h5/${key}`,
          method: 'put'
        }, data)
      },


      //获取活动详情
      getactivityh5Detail(data, key) {
        return getResource({
          url: `/kl-store/admin/activity/h5/${key}`,
          method: 'get'
        }, data)
      },
      // 删除活动
      deleteactivity(data, key) {
        return getResource({
          url: `/kl-store/admin/activity/h5/${key}`,
          method: 'DELETE'
        }, data)
      },
      // 查询活动
      queryactivityh5(data, key) {
        return getResource({
          url: `/kl-store/admin/activity/h5/query`,
          method: 'get'
        }, data)
      },
      // 获取可参加活动的商品
      getactivityh5goods(data, key) {
        return getResource({
          url: `/kl-store/admin/activity/h5/query/goods`,
          method: 'get'
        }, data)
      },
      // H5活动查询展示信息
      showactivityh5(data, key) {
        return getResource({
          url: `/kl-store/admin/activity/h5/show/${key}`,
          method: 'get'
        }, data)
      },
      // H5活动添加展示信息
      postshowactivityh5(data, key) {
        return getResource({
          url: `/kl-store/admin/activity/h5/show/${key}`,
          method: 'post'
        }, data)
      },

    }
  },
  flashSale() {
    return {
      getOn(data, key) {
        //抽奖活动添加
        return getResource({
          url: `/kl-store/admin/activity/flashSale/getOn`,
          method: 'get'
        }, data)
      },
      addactivity(data, key) {
        //抽奖活动添加
        return getResource({
          url: `/kl-store/admin/activity/flashSale`,
          method: 'post'
        }, data)
      },
      editoractivity(data, key) {
        //抽奖活动编辑
        return getResource({
          url: `/kl-store/admin/activity/flashSale/${key}`,
          method: 'put'
        }, data)
      },
      sortactivity(data, key) {
        //抽奖活动编辑
        return getResource({
          url: `/kl-store/admin/activity/flashSale/sort/${key}`,
          method: 'put'
        }, data)
      },


      //获取活动详情
      getlotteryDetail(data, key) {
        return getResource({
          url: `/kl-store/admin/activity/flashSale/${key}`,
          method: 'get'
        }, data)
      },
      // 删除活动
      deleteactivity(data, key) {
        return getResource({
          url: `/kl-store/admin/activity/flashSale/${key}`,
          method: 'DELETE'
        }, data)
      },
      // 复制抽奖活动
      copyactivity(data, key) {
        return getResource({
          url: `/kl-store/admin/activity/flashSale/copy/${key}`,
          method: 'POST'
        }, data)
      },
      // 失效
      invalidactivity(data, key) {
        return getResource({
          url: `/kl-store/admin/activity/flashSale/invalid/${key}`,
          method: 'put'
        }, data)
      },
      // 查询活动
      queryactivity(data, key) {
        return getResource({
          url: `/kl-store/admin/activity/flashSale/query`,
          method: 'get'
        }, data)
      },
      // 获取可参加活动的商品
      getlotterygoods(data, key) {
        return getResource({
          url: `/kl-store/admin/activity/flashSale/query/goods`,
          method: 'get'
        }, data)
      },
      // 首页是否显示
      showlottery(data, key) {
        return getResource({
          url: `/kl-store/admin/activity/flashSale/show/${key}`,
          method: 'put'
        }, data)
      },

    }
  },
  redeem() {
    return {
      addredeemCode(data, key) {
        //添加兑换活动
        return getResource({
          url: `/kl-store/admin/activity/redeemCode`,
          method: 'post'
        }, data)
      },
      getredeemCode(data, key) {
        //获取活动
        return getResource({
          url: `/kl-store/admin/activity/redeemCode/${key}`,
          method: 'get'
        }, data)
      },
      editorredeemCode(data, key) {
        //活动编辑
        return getResource({
          url: `/kl-store/admin/activity/redeemCode/${key}`,
          method: 'put'
        }, data)
      },
      // 删除活动
      deleteredeemCode(data, key) {
        return getResource({
          url: `/kl-store/admin/activity/redeemCode/${key}`,
          method: 'DELETE'
        }, data)
      },
      // 兑换码列表
      redeemCodelist(data, key) {
        return getResource({
          url: `/kl-store/admin/activity/redeemCode/codes`,
          method: 'get'
        }, data)
      },
      // 导出
      exportredeemCode(data, key) {
        return getResource({
          url: `/kl-store/admin/activity/redeemCode/export/${key}`,
          method: 'post'
        }, data)
      },
      // 查询活动
      queryredeemCodelist(data, key) {
        return getResource({
          url: `/kl-store/admin/activity/redeemCode/query`,
          method: 'get'
        }, data)
      },
      // 失效
      invalidredeemCode(data, key) {
        return getResource({
          url: `/kl-store/admin/activity/redeemCode/invalid/${key}`,
          method: 'put'
        }, data)
      },
      // 兑换活动关联商品
      redeemCodegoods(data, key) {
        return getResource({
          url: `/kl-store/admin/activity/redeemCode/goods`,
          method: 'get'
        }, data)
      },
    }
  },
  //乐兹积分兑换
  lzredeem() {
    return {

      lzredeemList(data, page, size, status) {
        //兑换列表
        return getResource({
          url: `/kl-store/admin/activity/redeem/query?page=${page}&size=${size}&status=${status}`,
          method: 'get'
        }, data)
      },
      lzsortactivity(data, key) {
        //列表排序
        return getResource({
          url: `/kl-store/admin/activity/redeem/sort${key}`,
          method: 'put'
        }, data)
      },
      lzcopyactivity(data, key) {
        //复制商品
        return getResource({
          url: `/kl-store/admin/activity/redeem/copy/${key}`,
          method: 'post'
        }, data)
      },
      lzdeleteactivity(data, key) {
        //删除商品
        return getResource({
          url: `/kl-store/admin/activity/redeem/${key}`,
          method: 'DELETE'
        }, data)
      },
      lzinvalidactivity(data, key) {
        //乐兹活动失效
        return getResource({
          url: `/kl-store/admin/activity/redeem/invalid/${key}`,
          method: 'put'
        }, data)
      },
      getredeemDetail(data, key) {
        //活动详情
        return getResource({
          url: `/kl-store/admin/activity/redeem/${key}`,
          method: 'get'
        }, data)
      },
      getruleList(data, key) {
        //规则列表
        return getResource({
          url: `/kl-store/admin/activity/redeem/${key}`,
          method: 'get'
        }, data)
      },
      getexchangeRule(data) {
        // 获取兑换规则详情
        return getResource({
          url: `/kl-store/admin/activity/redeem/rule/get`,
          method: 'get'
        }, data)
      },
      exchangeRules(data, key) {
        //编辑兑换规则
        return getResource({
          url: `/kl-store/admin/activity/redeem/rule`,
          method: 'post'
        }, data)
      },
      getlzredeemgoods(data, key) {
        //兑换商品列表
        return getResource({
          url: `/kl-store/admin/activity/redeem/goods/list`,
          method: 'get'
        }, data)
      },
      addlzredeem(data, key) {
        //乐兹活动添加
        return getResource({
          url: `/kl-store/admin/activity/redeem`,
          method: 'post'
        }, data)
      },
      lzeditoractivity(data, key) {
        //乐兹活动编辑
        return getResource({
          url: `/kl-store/admin/activity/redeem/${key}`,
          method: 'put'
        }, data)
      },
    }
  },
  //抽奖
  lottery() {
    return {
      gethelpRules(data, key) {
        //获取活动规则
        return getResource({
          url: `/kl-store/admin/activity/lottery/helpRules`,
          method: 'get'
        }, data)
      },
      addhelpRules(data, key) {
        //添加活动规则
        return getResource({
          url: `/kl-store/admin/activity/lottery/helpRules`,
          method: 'post'
        }, data)
      },
      addactivity(data, key) {
        //抽奖活动添加
        return getResource({
          url: `/kl-store/admin/activity/lottery`,
          method: 'post'
        }, data)
      },
      editoractivity(data, key) {
        //抽奖活动编辑
        return getResource({
          url: `/kl-store/admin/activity/lottery/${key}`,
          method: 'put'
        }, data)
      },
      sortactivity(data, key) {
        //排序活动编辑
        return getResource({
          url: `/kl-store/admin/activity/lottery/sort/${key}`,
          method: 'put'
        }, data)
      },


      //获取活动详情
      getlotteryDetail(data, key) {
        return getResource({
          url: `/kl-store/admin/activity/lottery/${key}`,
          method: 'get'
        }, data)
      },
      // 删除活动
      deleteactivity(data, key) {
        return getResource({
          url: `/kl-store/admin/activity/lottery/${key}`,
          method: 'DELETE'
        }, data)
      },
      // 复制抽奖活动
      copyactivity(data, key) {
        return getResource({
          url: `/kl-store/admin/activity/lottery/copy/${key}`,
          method: 'POST'
        }, data)
      },
      // 失效
      invalidactivity(data, key) {
        return getResource({
          url: `/kl-store/admin/activity/lottery/invalid/${key}`,
          method: 'put'
        }, data)
      },
      // 查询活动
      queryactivity(data, key) {
        return getResource({
          url: `/kl-store/admin/activity/lottery/list?status=${key}`,
          method: 'get'
        }, data)
      },
      // 获取可参加活动的商品
      getlotterygoods(data, key) {
        return getResource({
          url: `/kl-store/admin/activity/lottery/query/goods`,
          method: 'get'
        }, data)
      },
      // 首页是否显示
      showlottery(data, key) {
        return getResource({
          url: `/kl-store/admin/activity/lottery/show/${key}`,
          method: 'put'
        }, data)
      },

    }
  },
  // fxj商品
  fxjactivity() {
    return {
      addgoods(data, key) {
        //添加fxj商品
        return getResource({
          url: `/kl-store/admin/activity/goods`,
          method: 'post'
        }, data)
      },
      //获取商品
      getgoodsDetail(data, key) {
        return getResource({
          url: `/kl-store/admin/activity/goods/${key}`,
          method: 'get'
        }, data)
      },
      //编辑商品
      editorgoods(data, key) {
        return getResource({
          url: `/kl-store/admin/activity/goods/${key}`,
          method: 'post'
        }, data)
      },
      deleteGoods(data, key) {
        return getResource({
          url: `/kl-store/admin/activity/goods/${key}`,
          method: 'DELETE'
        }, data)
      },
      //下架商品
      offshelfoods(data, key) {
        return getResource({
          url: `/kl-store/admin/activity/goods/${key}/offshelf`,
          method: 'POST'
        }, data)
      },
      //上架商品
      onshelfoods(data, key) {
        return getResource({
          url: `/kl-store/admin/activity/goods/${key}/onshelf`,
          method: 'POST'
        }, data)
      },
      //商品列表
      getGoods(data, key) {
        return getResource({
          url: `/kl-store/admin/activity/goods/query`,
          method: 'POST'
        }, data)
      },
      //归属渠道列表
      getsupplier(data) {
        return getResource({
          url: `/kl-store/adminn/activity/supplier`,
          method: 'get'
        }, data)
      },
      //复制商品
      copyGoods(data, key) {
        return getResource({
          url: `/kl-store/admin/activity/goods/${key}/copy`,
          method: 'post'
        }, data)
      },
    }
  },
  video() {
    return {
      getcategory(data, key) {
        //获取分类列表
        return getResource({
          url: `/kl-store/admin/video/category`,
          method: 'get'
        }, data)
      },
      getvideoList(data) {
        //获取视频列表
        return getResource({
          url: '/kl-store/admin/video/query',
          method: 'post'
        }, data)
      },
      //视频详情
      videoDetail(data, key) {
        return getResource({
          url: `/kl-store/admin/video/${key}`,
          method: 'get'
        }, data)
      },
      //修改视频
      editorDetail(data, key) {
        return getResource({
          url: `/kl-store/admin/video/${key}`,
          method: 'post'
        }, data)
      },
      //添加视频
      addVideo(data, key) {
        return getResource({
          url: `/kl-store/admin/video`,
          method: 'post'
        }, data)
      },
      //删除视频
      deleteVideo(data, key) {
        return getResource({
          url: `/kl-store/admin/video/${key}`,
          method: 'DELETE'
        }, data)
      },
      //取消视频置顶
      ctopVideo(data, key) {
        return getResource({
          url: `/kl-store/admin/video/${key}/ctop`,
          method: 'POST'
        }, data)
      },
      //下架视频
      offshelfVideo(data, key) {
        return getResource({
          url: `/kl-store/admin/video/${key}/offshelf`,
          method: 'POST'
        }, data)
      },
      //上架视频
      onshelfVideo(data, key) {
        return getResource({
          url: `/kl-store/admin/video/${key}/onshelf`,
          method: 'POST'
        }, data)
      },
      //置顶视频
      topVideo(data, key) {
        return getResource({
          url: `/kl-store/admin/video/${key}/top`,
          method: 'POST'
        }, data)
      },
      //添加分类
      addcategory(data, key) {
        return getResource({
          url: `/kl-store/admin/video/category`,
          method: 'POST'
        }, data)
      },
      //修改分类
      editorcategory(data, key) {
        return getResource({
          url: `/kl-store/admin/video/category/${key}`,
          method: 'POST'
        }, data)
      },
      //删除分类
      deletecategory(data, key) {
        return getResource({
          url: `/kl-store/admin/video/category/${key}`,
          method: 'DELETE'
        }, data)
      },
      //排列分类
      sortcategory(data, key) {
        return getResource({
          url: `/kl-store/admin/video/category/sort`,
          method: 'post'
        }, data)
      },
      //修改分类
      eidtorvideocategory(data, key) {
        return getResource({
          url: `/kl-store/admin/video/change/category`,
          method: 'post'
        }, data)
      },
    }
  },
  channel() {
    return {
      getChannelDetai(data, key) {
        //获取渠道详情
        return getResource({
          url: `/kl-store/admin/channel/${key}`,
          method: 'get'
        }, data)
      },
      getChannel(data) {
        //获取渠道列表
        return getResource({
          url: '/kl-store/admin/channel',
          method: 'get'
        }, data)
      },
      editorChannel(data, key) {
        return getResource({
          url: `/kl-store/admin/channel/${key}`,
          method: 'post'
        }, data)
      }
    }

  },
  banner() {
    return {
      addBanner(data, key) {
        //添加
        return getResource({
          url: `/kl-store/admin/banner`,
          method: 'post'
        }, data)
      },
      getBanner(data) {
        //获取banner列表
        return getResource({
          url: '/kl-store/admin/banner',
          method: 'get'
        }, data)
      },
      editorBanner(data, key) {
        //编辑
        return getResource({
          url: `/kl-store/admin/banner/${key}`,
          method: 'post'
        }, data)
      },
      sortBanner(data, key) {
        //排序
        return getResource({
          url: `/kl-store/admin/banner/sort`,
          method: 'post'
        }, data)
      },
      deleteBanner(data, key) {
        //删除
        return getResource({
          url: `/kl-store/admin/banner/${key}`,
          method: 'DELETE'
        }, data)
      },

    }

  },
  goods() {
    return {
      planservicebind(data, key) {
        //规格绑定服务
        return getResource({
          url: `/kl-store/admin/goods/plan/servicebind`,
          method: 'post'
        }, data)
      },
      getGoodsList(data, key) {
        //获取商品列表
        return getResource({
          url: `/kl-store/admin/goods/query`,
          method: 'post'
        }, data)
      },
      onshelfGoods(data, key) {
        //上架商品
        return getResource({
          url: `/kl-store/admin/goods/${key}/onshelf`,
          method: 'post'
        }, data)
      },
      offShelfGoods(data, key) {
        //下架商品
        return getResource({
          url: `/kl-store/admin/goods/${key}/offshelf`,
          method: 'post'
        }, data)
      },
      deleteGoods(data, key) {
        //删除商品
        return getResource({
          url: `/kl-store/admin/goods/${key}`,
          method: 'DELETE'
        }, data)
      },
      goodsPlan(data, key) {
        //商品规格查询
        return getResource({
          url: `/kl-store/admin/goods/plan/query`,
          method: 'post'
        }, data)
      },
      editorGoods(data, key) {
        //编辑商品
        return getResource({
          url: `/kl-store/admin/goods/${key}`,
          method: 'post'
        }, data)
      },
      getGoods(data, key) {
        //获取商品
        return getResource({
          url: `/kl-store/admin/goods/${key}`,
          method: 'get'
        }, data)
      },
      addGoods(data, key) {
        //添加商品
        return getResource({
          url: `/kl-store/admin/goods`,
          method: 'post'
        }, data)
      },
      getrecGoods(data, key) {
        //推荐商品列表
        return getResource({
          url: `/kl-store/admin/goods/rec/query`,
          method: 'post'
        }, data)
      },
      addrecGoods(data, key) {
        //添加推荐商品
        return getResource({
          url: `/kl-store/admin/goods/rec`,
          method: 'post'
        }, data)
      },
      recsortGoods(data, key) {
        //排列推荐商品
        return getResource({
          url: `/kl-store/admin/goods/rec/sort`,
          method: 'post'
        }, data)
      },
      deleterecGoods(data, key) {
        //删除推荐商品
        return getResource({
          url: `/kl-store/admin/goods/rec`,
          method: 'DELETE'
        }, data)
      },

    }
  },
  rolePermission() {
    return {
      getPermissionTree(data, key) {
        //获取权限树
        return getResource({
          url: `/kl-store/admin/perm/tree`,
          method: 'get'
        }, data)
      },
      getRolePermissionList(data, key) {
        //获取角色权限列表
        return getResource({
          url: `/kl-store/admin/role/permissions${key}`,
          method: 'get'
        }, data)
      },

      addRoleUser(data, key) {
        // 添加角色
        return getResource({
          url: `/kl-store/admin/role`,
          method: 'post'
        }, data)
      },
      editRoleUser(data, key) {
        // 编辑角色
        return getResource({
          url: `/kl-store/admin/role/${key}`,
          method: 'post'
        }, data)
      },
      addPermissionNode(data, key) {
        //新增权限树节点
        return getResource({
          url: `/kl-store/admin/perm`,
          method: 'post'
        }, data)
      },
      permSort(data, key) {
        //权限树排序
        return getResource({
          url: `/kl-store/admin/perm/sort`,
          method: 'post'
        }, data)
      },
      deletePermissionNode(data, key) {
        //删除权限树节点
        return getResource({
          url: `/kl-store/admin/perm/${key}`,
          method: 'DELETE'
        }, data)
      },
      editPermissionNode(data, key) {
        //编辑权限节点
        return getResource({
          url: `/kl-store/admin/perm/${key}`,
          method: 'post'
        }, data)
      },
      getPermissionTreeById(data, key) {
        //获取权限树通过id
        return getResource({
          url: `/kl-store/admin/role/${key}`,
          method: 'get'
        }, data)
      },
      getAllRoleList(data, key) {
        //获取全部角色
        return getResource({
          url: `/kl-store/admin/role/all`,
          method: 'get'
        }, data)
      },
      getRoleListData(data, page, size) {
        //获取账号列表
        return getResource({
          url: `/kl-store/admin/role?page=${page}&size=${size}`,
          method: 'get'
        }, data)
      },
      deletePermissionRole(data, key) {
        //删除权限角色
        return getResource({
          url: `/kl-store/admin/role/${key}`,
          method: 'DELETE'
        }, data)
      },
    }
  },

  account() {
    return {
      getuserList(data, key) {
        //获取账号列表
        return getResource({
          url: `/kl-store/admin/user/query`,
          method: 'post'
        }, data)
      },
      getRoleById(data, key) {
        //获取权限树
        return getResource({
          url: `/kl-store/admin/user/${key}`,
          method: 'get'
        }, data)
      },
      addUser(data) {
        //添加账号
        return getResource({
          url: `/kl-store/admin/user/add`,
          method: 'post'
        }, data)
      },
      editUser(data, key) {
        //添加账号
        return getResource({
          url: `/kl-store/admin/user/${key}`,
          method: 'post'
        }, data)
      },
      resetPassword(data, key) {
        //重置密码
        return getResource({
          url: `/kl-store/admin/user/${key}/reset/password`,
          method: 'post'
        }, data)
      },
      enableUser(data, key) {
        //启用账号
        return getResource({
          url: `/kl-store/admin/user/${key}/enable`,
          method: 'post'
        }, data)
      },
      disableUser(data, key) {
        //禁用账号
        return getResource({
          url: `/kl-store/admin/user/${key}/disable`,
          method: 'post'
        }, data)
      },
    }
  },
  adress() {
    return {
      setAdress(data, key) {
        //修改地址
        return getResource({
          url: `/kl-store/admin/address`,
          method: 'post'
        }, data)
      },
      getAdress(data, key) {
        //获取地址
        return getResource({
          url: `/kl-store/admin/address?type=${key}`,
          method: 'get'
        }, data)
      },
    }
  },
  help() {
    return {
      categoryList(data, key) {
        //分类列表
        return getResource({
          url: `/kl-store/admin/help/category`,
          method: 'get'
        }, data)
      },
      addCategory(data, key) {
        //添加分类
        return getResource({
          url: `/kl-store/admin/help/category`,
          method: 'post'
        }, data)
      },
      sortCategory(data, key) {
        //排列分类
        return getResource({
          url: `/kl-store/admin/help/category/sort`,
          method: 'post'
        }, data)
      },
      getCategory(data, key) {
        //获取分类
        return getResource({
          url: `/kl-store/admin/help/category/${key}`,
          method: 'get'
        }, data)
      },
      editorCategory(data, key) {
        //修改分类
        return getResource({
          url: `/kl-store/admin/help/category/${key}`,
          method: 'post'
        }, data)
      },
      deleteCategory(data, key) {
        //删除分类
        return getResource({
          url: `/kl-store/admin/help/category/${key}`,
          method: 'DELETE'
        }, data)
      },
      categoryItemlist(data, key) {
        //项目列表
        return getResource({
          url: `/kl-store/admin/help/item?categoryId=${key}`,
          method: 'get'
        }, data)
      },
      addcategoryItem(data, key) {
        //添加项目
        return getResource({
          url: `/kl-store/admin/help/item`,
          method: 'post'
        }, data)
      },
      getcategoryItem(data, key) {
        //获取项目
        return getResource({
          url: `/kl-store/admin/help/item/${key}`,
          method: 'get'
        }, data)
      },
      editorCategoryitem(data, key) {
        //修改项目
        return getResource({
          url: `/kl-store/admin/help/item/${key}`,
          method: 'post'
        }, data)
      },
      deleteCategoryitem(data, key) {
        //删除项目
        return getResource({
          url: `/kl-store/admin/help/item/${key}`,
          method: 'DELETE'
        }, data)
      },
    }
  },
  order() {
    return {
      daochu: function (data, key) {//导出
        return getResource({
          url: `/kl-store/admin/order/export`,
          method: 'post'
        }, data)
      },
      refundretry: function (data, key) {//重新退款
        return getResource({
          url: `/kl-store/admin/order/refund/retry/${key}`,
          method: 'post'
        }, data)
      },
      getOrderdetail: function (data, key) {//获取订单详情
        return getResource({
          url: `/kl-store/admin/order/${key}`,
          method: 'get'
        }, data)
      },
      getremarkList: function (data, key) {//获取订单备注列表
        return getResource({
          url: `/kl-store/admin/order/${key}/remark`,
          method: 'get'
        }, data)
      },
      addremark: function (data, key) {//添加备注
        return getResource({
          url: `/kl-store/admin/order/${key}/remark`,
          method: 'post'
        }, data)
      },
      agreeAfs: function (data, key) {//同意退货
        return getResource({
          url: `/kl-store/admin/order/afs/agree`,
          method: 'post'
        }, data)
      },
      agreerefund: function (data, key) {//同意退款
        return getResource({
          url: `/kl-store/admin/order/afs/refund/agree`,
          method: 'POST'
        }, data)
      },
      refuserefund: function (data, key) {//拒绝退款
        return getResource({
          url: `/kl-store/admin/order/afs/refund/refuse`,
          method: 'POST'
        }, data)
      },
      refuseafs: function (data, key) {//拒绝退货
        return getResource({
          url: `/kl-store/admin/order/afs/refuse`,
          method: 'POST'
        }, data)
      },
      orderList: function (data, key) {//订单查询
        return getResource({
          url: `/kl-store/admin/order/query`,
          method: 'POST'
        }, data)
      },
      orderShip: function (data, key) {//发货
        return getResource({
          url: `/kl-store/admin/order/ship`,
          method: 'POST'
        }, data)
      },
      resetorderShip: function (data, key) {//编辑发货
        return getResource({
          url: `/kl-store/admin/order/ship`,
          method: 'put'
        }, data)
      }
    }
  },
  customer() {
    return {
      getcustomer: function (data, key) {//客户列表
        return getResource({
          url: `/kl-store/admin/customer/query`,
          method: 'post'
        }, data)
      },
    }
  },
  home() {
    return {
      tableexport: function (data, key) {//概览表格导出
        return getResource({
          url: `/kl-store/admin/home/overview/table/export`,
          method: 'post'
        }, data)
      },
      goodsexport: function (data, key) {//导出商品订单
        return getResource({
          url: `/kl-store/admin/home/stats/order/goods/export`,
          method: 'post'
        }, data)
      },
      overviewexport: function (data, key) {//导出概览
        return getResource({
          url: `/kl-store/admin/home/overview/export`,
          method: 'post'
        }, data)
      },
      overviewperiodexport: function (data, key) {//导出时间段概览
        return getResource({
          url: `/kl-store/admin/home/overview/export/period`,
          method: 'post'
        }, data)
      },
      goodsOrder: function (data, key) {//商品订单
        return getResource({
          url: `/kl-store/admin/home/stats/order/goods`,
          method: 'post'
        }, data)
      },
      goodsList: function (data, key) {//商品列表
        return getResource({
          url: `/kl-store/admin/home/order/goods`,
          method: 'get'
        }, data)
      },
      puvmonth: function (data, key) {//月pv uv
        return getResource({
          url: `/kl-store/admin/home/stats/puv/month`,
          method: 'post'
        }, data)
      },
      puvday: function (data, key) {//日pv uv
        return getResource({
          url: `/kl-store/admin/home/stats/puv/day`,
          method: 'post'
        }, data)
      },
      userday: function (data, key) {//日用户
        return getResource({
          url: `/kl-store/admin/home/stats/user/day`,
          method: 'post'
        }, data)
      },
      usermoonth: function (data, key) {//月用户
        return getResource({
          url: `/kl-store/admin/home/stats/user/month`,
          method: 'post'
        }, data)
      },
      orderday: function (data, key) {//日订单
        return getResource({
          url: `/kl-store/admin/home/stats/order/day`,
          method: 'post'
        }, data)
      },
      ordermonth: function (data, key) {//月订单
        return getResource({
          url: `/kl-store/admin/home/stats/Order/month`,
          method: 'post'
        }, data)
      },
      overviewtable: function (data, key) {//概览表格
        return getResource({
          url: `/kl-store/admin/home/overview/table`,
          method: 'get'
        }, data)
      },
      gethotsale: function (data, key) {//热销商品
        return getResource({
          url: `/kl-store/admin/home/hotsale?count=${key}`,
          method: 'get'
        }, data)
      },
      getoverview: function (data, key) {//数据概览
        return getResource({
          url: `/kl-store/admin/home/overview`,
          method: 'get'
        }, data)
      },
      gettodo: function (data, key) {//待办统计
        return getResource({
          url: `/kl-store/admin/home/todo?orderSource=${key}`,
          method: 'get'
        }, data)
      },
    }
  },


  dashboard() {
    return {
      groupStats(data) {
        // 团单统计
        return getResource({
          url: '/xunan/admin/dashboard/order/group/stats',
          method: 'post'
        }, data)
      },
      personalStats(data) {
        // 个单统计
        return getResource({
          url: '/xunan/admin/dashboard/order/personal/stats',
          method: 'post'
        }, data)
      },
      dashboardStats(data) {
        // 客户指标
        return getResource({
          url: '/xunan/admin/dashboard/user/stats',
          method: 'post'
        }, data)
      },
      dashboardleadsStats(data) {
        // 销售指标
        return getResource({
          url: '/xunan/admin/dashboard/leads/stats',
          method: 'post'
        }, data)
      },


    }
  },

  role() {
    return {
      getRoles: function (data) {
        return getResource({
          url: '/xunan/admin/perm/role',
          method: 'get'
        }, data)
      },
      resourceTree: function (data) {
        return getResource({
          url: '/xunan/admin/perm/resource/tree',
          method: 'get'
        }, data)
      },
      getDetailrole: function (data, key) {
        return getResource({
          url: `xunan/admin/perm/role/${key}`,
          method: 'GET'
        }, data)
      },
      editorRole: function (data, key) {
        return getResource({
          url: `xunan/admin/perm/role/${key}`,
          method: 'POST'
        }, data)
      },
      addRole: function (data, key) {
        return getResource({
          url: `/xunan/admin/perm/role`,
          method: 'POST'
        }, data)
      },
      deleteRole: function (data, key) {
        return getResource({
          url: `xunan/admin/perm/role/${key}`,
          method: 'DELETE'
        }, data)
      },
    }
  },
  staf() {
    return {
      getstafs: function (data) {
        return getResource({
          url: '/xunan/admin/perm/user',
          method: 'get'
        }, data)
      },
      addStaf: function (data) {
        return getResource({
          url: '/xunan/admin/perm/user',
          method: 'POST'
        }, data)
      },
      editorStaf: function (data, key) {
        return getResource({
          url: `/xunan/admin/perm/user/${key}`,
          method: 'POST'
        }, data)
      },
      getDetailstaf: function (data, key) {
        return getResource({
          url: `xunan/admin/perm/user/${key}`,
          method: 'GET'
        }, data)
      },
      deleteStaf: function (data, key) {
        return getResource({
          url: `xunan/admin/perm/user/${key}`,
          method: 'DELETE'
        }, data)
      },
      getAllRole: function (data) {
        return getResource({
          url: '/xunan/admin/perm/role/all',
          method: 'get'
        }, data)
      },
      chabgePermissions: function (data, key) {
        return getResource({
          url: `/xunan/admin/perm/role/permissions`,
          method: 'get'
        }, data)
      },
    }
  },
  product() {
    return {
      productQuery: function (data) {//商品查询
        return getResource({
          url: '/xunan/admin/product/query',
          method: 'post'
        }, data)
      },
      productStats: function (data) {//商品统计
        return getResource({
          url: '/xunan/admin/product/stats',
          method: 'get'
        }, data)
      },
      companyQuery: function (data) {//保险公司
        return getResource({
          url: '/xunan/admin/product/query/company',
          method: 'get'
        }, data)
      },
      addPromotion: function (data) {//添加推广
        return getResource({
          url: '/xunan/admin/product/promotion',
          method: 'post'
        }, data)
      },
      promotionproductQuery: function (data) {//推广商品查询
        return getResource({
          url: '/xunan/admin/product/promotion/query',
          method: 'post'
        }, data)
      },
      searchChannel: function (data, key) {//搜索渠道
        return getResource({
          url: `/xunan/admin/product/promotion/search/channel`,
          method: 'get'
        }, data)
      },
      searchProduct: function (data, key) {//商品搜索
        return getResource({
          url: `/xunan/admin/product/promotion/search/product`,
          method: 'get'
        }, data)
      },
      edtorPromotion: function (data, key) {
        return getResource({
          url: `/xunan/admin/product/promotion/${key}`,
          method: 'post'
        }, data)
      },
      promotionDetail: function (data, key) {
        return getResource({
          url: `/xunan/admin/product/promotion/${key}`,
          method: 'get'
        }, data)
      },
      deletePromotion: function (data, key) {
        return getResource({
          url: `/xunan/admin/product/promotion/${key}`,
          method: 'DELETE'
        }, data)
      },

    }
  },
  rights() {
    return {
      rightsquery: function (data) {//权益列表
        return getResource({
          url: '/kl-store/admin/rights/query',
          method: 'post'
        }, data)
      },
      editorrights: function (data, key) {//编辑权益
        return getResource({
          url: `/kl-store/admin/rights/${key}`,
          method: 'post'
        }, data)
      },
      addrights: function (data, key) {//添加权益
        return getResource({
          url: `/kl-store/admin/rights`,
          method: 'post'
        }, data)
      },
      getrights: function (data, key) {//获取权益
        return getResource({
          url: `/kl-store/admin/rights/${key}`,
          method: 'get'
        }, data)
      },
      deleterights: function (data, key) {//删除权益
        return getResource({
          url: `/kl-store/admin/rights/${key}`,
          method: 'DELETE'
        }, data)
      },
      offshelfrights: function (data, key) {//下架权益
        return getResource({
          url: `/kl-store/admin/rights/${key}/offshelf`,
          method: 'post'
        }, data)
      },
      onshelfrights: function (data, key) {//上架权益
        return getResource({
          url: `/kl-store/admin/rights/${key}/onshelf`,
          method: 'post'
        }, data)
      },
      servicetype: function (data, key) {//服务类型
        return getResource({
          url: `/kl-store/admin/rights/servicetype`,
          method: 'post'
        }, data)
      },
    }
  },
  rightpromotion() {
    return {
      rightpromotionexport: function (data, key) {//权益导出
        return getResource({
          url: `/kl-store/admin/rights/promotion/participant/export`,
          method: 'get'
        }, data)
      },
      rightpromotionquery: function (data, key) {//列表
        return getResource({
          url: `/kl-store/admin/rights/promotion/participant/query`,
          method: 'get'
        }, data)
      },
      rightsendTemplate: function (data, key) {//发送
        return getResource({
          url: `/kl-store/admin/rights/promotion/participant/sendTemplate`,
          method: 'post'
        }, data)
      },


    }
  },
  rightorder() {
    return {
      rightsorderList: function (data, key) {//权益订单列表
        return getResource({
          url: `/kl-store/admin/rights/order/query`,
          method: 'post'
        }, data)
      },
      rightsorderexport: function (data, key) {//导出权益订单列表
        return getResource({
          url: `/kl-store/admin/rights/order/export`,
          method: 'post'
        }, data)
      },
      rightsorderDetail: function (data, key) {//权益订单详情
        return getResource({
          url: `/kl-store/admin/rights/order/order/${key}`,
          method: 'get'
        }, data)
      },
      auditrefuse: function (data, key) {//审核拒绝
        return getResource({
          url: `/kl-store/admin/rights/order/audit/refuse`,
          method: 'post'
        }, data)
      },
      auditapprove: function (data, key) {//审核通过
        return getResource({
          url: `/kl-store/admin/rights/order/audit/approve`,
          method: 'post'
        }, data)
      },
      auditcomplete: function (data, key) {//完成
        return getResource({
          url: `/kl-store/admin/rights/order/${key}/complete`,
          method: 'post'
        }, data)
      },

    }
  },
  enterprise() {
    return {

      enterpriseQuery: function (data) {//企业查询
        return getResource({
          url: '/xunan/admin/enterprise/query',
          method: 'post'
        }, data)
      },
      getenterpriseDetail: function (data, key) {//企业详情
        return getResource({
          url: `/xunan/admin/enterprise/${key}`,
          method: 'GET'
        }, data)
      },
      getenterpriseOrderStats: function (data, key) {//企业订单统计
        return getResource({
          url: `/xunan/admin/enterprise/${key}/stats`,
          method: 'GET'
        }, data)
      },
      getenterpriseStats: function (data, key) {//企业统计
        return getResource({
          url: `/xunan/admin/enterprise/stats`,
          method: 'GET'
        }, data)
      },
      ordergroupQuery: function (data) {//推广团单查询
        return getResource({
          url: '/xunan/admin/enterprise/channel/order/group',
          method: 'post'
        }, data)
      },
      ordergroupPersonal: function (data) {//推广个单查询
        return getResource({
          url: '/xunan/admin/enterprise/channel/order/personal',
          method: 'post'
        }, data)
      },
    }
  },
  user() {
    return {
      userQuery: function (data) {//个人查询
        return getResource({
          url: '/xunan/admin/user/query',
          method: 'post'
        }, data)
      },
      getuserDetail: function (data, key) {//用户详情
        return getResource({
          url: `/xunan/admin/user/${key}`,
          method: 'GET'
        }, data)
      },
      getuserOrderStats: function (data, key) {//用户订单统计
        return getResource({
          url: `/xunan/admin/user/${key}/stats`,
          method: 'GET'
        }, data)
      },
      getuserStats: function (data, key) {//用户统计
        return getResource({
          url: `/xunan/admin/user/stats`,
          method: 'GET'
        }, data)
      },
    }
  },
  lzdatacenter() {
    return {
      lzsurvey: function (data, key) {//乐兹每小时数据
        return getResource({
          url: `/kl-store/admin/datacenter/prehour/survey?statsTime=${key}`,
          method: 'get'
        }, data)
      },
      lztotalsurvey: function (data, key) {//乐兹日总数居
        return getResource({
          url: `/kl-store/admin/datacenter/realtime/survey?statsTime=${key}`,
          method: 'get'
        }, data)
      },
      visitData: function (data, key) {//健康商城访问旁行榜
        return getResource({
          url: `/kl-store/admin/datacenter/all/goods/visit/ranking`,
          method: 'get'
        }, data)
      },
      lzvisitData: function (data, key) {//乐兹访问旁行榜
        return getResource({
          url: `/kl-store/admin/datacenter/goods/visit/ranking`,
          method: 'get'
        }, data)
      },
      redeemData: function (data, key) {//兑换排行榜
        return getResource({
          url: `/kl-store/admin/datacenter/goods/redeem/ranking`,
          method: 'get'
        }, data)
      },
      daochu: function (data, key) {//访问排行榜导出
        return getResource({
          url: `/kl-store/admin/datacenter/goods/visit/ranking/export`,
          method: 'get'
        }, data)
      },
      daochuRedeem: function (data, key) {//兑换排行榜导出
        return getResource({
          url: `/kl-store/admin/datacenter/goods/redeem/ranking/export`,
          method: 'get'
        }, data)
      },
      pointsData: function (data, key) {//支付排行榜
        return getResource({
          url: `/kl-store/admin/datacenter/all/goods/points/ranking`,
          method: 'get'
        }, data)
      },
      categoryRanking: function (data, key) {//分组排行榜
        return getResource({
          url: `/kl-store/admin/datacenter/category/visit/ranking`,
          method: 'get'
        }, data)
      },
    }
  }
}


