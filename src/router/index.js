import Vue from 'vue'
import Router from 'vue-router'
import recommendcommodity from '@/views/malldecoration/recommendcommodity'//推荐商品
import homeinfo from '@/views/malldecoration/homeinfo'//首页信息
import salesspecification from '@/views/commodity/salesspecification'//销售规格
import commoditymanage from '@/views/commodity/commoditymanage'//商品管理
import editorcommondity from '@/views/commodity/editorcommondity'//编辑，新增产品
import commoditydetail from '@/views/commodity/commoditydetail'//商品详情
import userpermission from '@/views/account/userpermission'//角色管理
import accountpermission from '@/views/account/accountpermission'//账号权限
import permissionManage from '@/views/account/permissionManage'//账号权限
import adressset from '@/views/baseset/adressset'//地址设置
import questionmanage from '@/views/helpcenter/questionmanage'//问答管理
import lzbasics from '@/views/helpcenter/lzbasics'//问答管理
import customerlist from '@/views/customer/customerlist'//客户列表
import orderlist from '@/views/order/orderlist'//订单列表
import orderDetail from '@/views/order/orderDetail' //订单详情
import home from '@/views/home/home'
import lzhome from '@/views/home/lzhome'
import login from '@/views/login'
import vueEditor from '@/views/vueEditor'
import articlelist from '@/views/video/articlelist' //文章管理
import articledetail from '@/views/video/articledetail' //编辑文章
import videoManage from '@/views/video/videoManage'
import editorVideo from '@/views/video/editorVideo'
import goodsanalysis from '@/views/datacenter/goodsanalysis'
import goodsrank from '@/views/datacenter/goodsrank' //健康商城商品排行
import lzgoodsrank from '@/views/datacenter/lzgoodsrank' //乐兹商城商品排行
import typesituation from '@/views/datacenter/typesituation' // 健康商城商品类概况
import realtime from '@/views/datacenter/realtime' //实时概况
import lzrealtime from '@/views/datacenter/lzrealtime' //乐兹实时概况

import legalrighspecification from '@/views/legalright/legalrighspecification'//权益销售规格
import legalrightmanage from '@/views/legalright/legalrightmanage'//权益管理
import editorlegalright from '@/views/legalright/editorlegalright'//权益编辑，新增产品
import legalrightdetail from '@/views/legalright/legalrightdetail'//权益编辑新增产产品详情
import legalrightList from '@/views/order/legalrightList'//客户分级权益订单列表
import addedequitylist from '@/views/order/addedequitylist'//增值权益订单列表

import legalactivity from '@/views/legalright/legalactivity' //权益活动
import legalrightorderDetail from '@/views/order/legalrightorderDetail'//权益订单详情
import textnavigation from '@/views/shopdecoration/textnavigation'//图文导航
import phontoads from '@/views/shopdecoration/phontoads'//图文广告
import healthservices from '@/views/shopdecoration/healthservices'//健康服务
import commoditygroup from '@/views/commoditygroup/commoditygroup'//商品分组
import fxjcommodityList from '@/views/fxjcommodity/fxjcommodityList'//fxj商品管理
import lzcommodityList from '@/views/lzcommodity/lzcommodityList'//乐兹商品管理
import addlzcommodity from '@/views/lzcommodity/addlzcommodity'//乐兹新增编辑商品
import editorfxjcommodity from '@/views/fxjcommodity/editorfxjcommodity'//编辑、新增fxj商品管理
import limitactiveList from '@/views/marketing/limitactiveList'//限时抢购
import rafflebenefits from '@/views/marketing/rafflebenefits'//抽奖活动

import lzexchange from '@/views/marketing/lzexchange'//乐兹积分兑换
import addexchange from '@/views/marketing/addexchange'//新建积分兑换
import addrafflebenefits from '@/views/marketing/addrafflebenefits'//添加抽奖活动
import addlimitactive from '@/views/marketing/addlimitactive' //添加限时抢购活动
import activeh5list from '@/views/marketing/activeh5list' //活动h5列表
import addactiveh5 from '@/views/marketing/addactiveh5' //添加活动h5列表
import luckdrawmanage from '@/views/marketing/luckdrawmanage'//抽奖活动
import lzluckdrawlist from '@/views/marketing/lzluckdrawlist'//乐兹抽奖活动
import luckdrawparticipants from '@/views/marketing/luckdrawparticipants'//参与抽奖人

import addluckdraw from '@/views/marketing/addluckdraw' //添加抽奖活动
import multigroupmanage from '@/views/marketing/multigroupmanage' //多人拼团
import addmultigroup from '@/views/marketing/addmultigroup' //添加多人拼团
import fxjorderDetail from '@/views/order/fxjorderDetail' //分享家订单详情
import fxjorder from '@/views/order/fxjorder' //分享家订单列表
import lzorderlist from '@/views/order/lzorderlist' //乐兹家订单列表
import lzorderDetail from '@/views/order/lzorderDetail' //乐兹家订单详情
import convertmanage from '@/views/convertmanage/convertmanage' //兑换码管理
import convertdetail from '@/views/convertmanage/convertdetail'

Vue.use(Router);
;
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home/home',
      name: 'home',
      component: home
    },
    {
      path: '/home/lzhome',
      name: 'lzhome',
      component: lzhome
    },
    {
      path: '/convertmanage/convertdetail',
      name: 'convertdetail',
      component: convertdetail
    },
    {
      path: '/legalright/legalactivity',
      name: 'legalactivity',
      component: legalactivity
    },

    {
      path: '/convertmanage/convertmanage',
      name: 'convertmanage',
      component: convertmanage
    },
    {
      path: '/fxjcommodity/editorfxjcommodity',
      name: 'editorfxjcommodity',
      component: editorfxjcommodity
    },
    {
      path: '/order/fxjorderDetail',
      name: 'fxjorderDetail',
      component: fxjorderDetail
    },
    {
      path: '/order/fxjorder',
      name: 'fxjorder',
      component: fxjorder
    },
    {
      path: '/order/lzorderlist',
      name: 'lzorderlist',
      component: lzorderlist
    },
    {
      path: '/order/lzorderDetail/:id',
      name: 'lzorderDetail',
      component: lzorderDetail
    },
    {
      path: '/marketing/addactiveh5',
      name: 'addactiveh5',
      component: addactiveh5
    },
    {
      path: '/marketing/activeh5list',
      name: 'activeh5list',
      component: activeh5list
    },
    {
      path: '/marketing/limitactiveList',
      name: 'limitactiveList',
      component: limitactiveList
    },
    {
      path: '/marketing/addlimitactive',
      name: 'addlimitactive',
      component: addlimitactive
    },

    {
      path: '/marketing/rafflebenefits',
      name: 'rafflebenefits',
      component: rafflebenefits
    },

    {
      path: '/marketing/lzexchange',
      name: 'lzexchange',
      component: lzexchange
    },

    {
      path: '/marketing/addexchange/:id',
      name: 'addexchange',
      component: addexchange
    },

    {
      path: '/marketing/addrafflebenefits',
      name: 'addrafflebenefits',
      component: addrafflebenefits
    },
    {
      path: '/marketing/addmultigroup',
      name: 'addmultigroup',
      component: addmultigroup
    },
    {
      path: '/marketing/multigroupmanage',
      name: 'multigroupmanage',
      component: multigroupmanage
    },
    {
      path: '/marketing/addluckdraw',
      name: 'addluckdraw',
      component: addluckdraw  
    },
    {
      path: '/marketing/lzluckdrawlist',
      name: 'lzluckdrawlist',
      component: lzluckdrawlist  
    },
    {
      path: '/marketing/luckdrawparticipants',
      name: 'luckdrawparticipants',
      component: luckdrawparticipants  
    },
    {
      path: '/marketing/luckdrawmanage',
      name: 'luckdrawmanage',
      component: luckdrawmanage     
    },
    
    {
      path: '/fxjcommodity/fxjcommodityList',
      name: 'fxjcommodityList',
      component: fxjcommodityList
    },
    {
      path: '/lzcommodity/lzcommodityList',
      name: 'lzcommodityList',
      component: lzcommodityList
    },
    {
      path: '/lzcommodity/addlzcommodity/:productId',
      name: 'addlzcommodity',
      component: addlzcommodity
    },
    {
      path: '/shopdecoration/textnavigation',
      name: 'textnavigation',
      component: textnavigation
    },
    {
      path: '/shopdecoration/phontoads',
      name: 'phontoads',
      component: phontoads
    },
    {
      path: '/shopdecoration/healthservices',
      name: 'healthservices',
      component: healthservices
    },
    {
      path: '/commoditygroup/commoditygroup',
      name: 'commoditygroup',
      component: commoditygroup
    },
    
    {
      path: '/order/addedequitylist',
      name: 'addedequitylist',
      component: addedequitylist
    },
    {
      path: '/order/legalrightList',
      name: 'legalrightList',
      component: legalrightList
    },
    {
      path: '/order/legalrightorderDetail',
      name: 'legalrightorderDetail',
      component: legalrightorderDetail
    },
    {
      path: '/legalright/legalrighspecification',
      name: 'legalrighspecification',
      component: legalrighspecification
    },
    {
      path: '/legalright/legalrightdetail',
      name: 'legalrightdetail',
      component: legalrightdetail
    },
    {
      path: '/legalright/editorlegalright',
      name: 'editorlegalright',
      component: editorlegalright
    },
    {
      path: '/legalright/legalrightmanage',
      name: 'legalrightmanage',
      component: legalrightmanage
    },

    {
      path: '/commodity/salesspecification',
      name: 'salesspecification',
      component: salesspecification
    },

    {
      path: '/video/editorVideo',
      name: 'editorVideo',
      component: editorVideo

    },
    
    {
      path: '/video/articlelist',
      name: 'articlelist',
      component: articlelist
    },
    {
      path: '/video/articledetail',
      name: 'articledetail',
      component: articledetail
    },
    {
      path: '/video/videoManage',
      name: 'videoManage',
      component: videoManage

    },
    {
      path: '/datacenter/goodsanalysis',
      name: 'goodsanalysis',
      component: goodsanalysis

    },
    {
      path: '/datacenter/goodsrank',
      name: 'goodsrank',
      component: goodsrank
    },
    {
      path: '/datacenter/lzgoodsrank',
      name: 'lzgoodsrank',
      component: lzgoodsrank
    },
    {
      path: '/datacenter/typesituation',
      name: 'typesituation',
      component: typesituation
    },
    {
      path: '/datacenter/realtime',
      name: 'realtime',
      component: realtime
    },
    {
      path: '/datacenter/lzrealtime',
      name: 'lzrealtime',
      component: lzrealtime
    },
    {
      path: '/commodity/commoditymanage',
      name: 'commoditymanage',
      component: commoditymanage
    },
    {
      path: '/commodity/editorcommondity',
      name: 'editorcommondity',
      component: editorcommondity
    },
    {
      path: '/commodity/commoditydetail',
      name: 'commoditydetail',
      component: commoditydetail
    },
    {
      path: '/baseset/adressset',
      name: 'adressset',
      component: adressset
    },
    {
      path: '/helpcenter/questionmanage',
      name: 'questionmanage',
      component: questionmanage
    },
    {
      path: '/helpcenter/lzbasics',
      name: 'lzbasics',
      component: lzbasics
    },
    {
      path: '/customer/customerlist',
      name: 'customerlist',
      component: customerlist
    },
    {
      path: '/order/orderlist',
      name: 'orderlist',
      component: orderlist
    },
    {
      path: '/order/orderDetail',
      name: 'orderDetail',
      component: orderDetail
    },
    {
      path: '/account/userpermission',
      name: 'userpermission',
      component: userpermission
    },
    {
      path: '/account/accountpermission',
      name: 'accountpermission',
      component: accountpermission
    },
    {
      path: '/account/permissionManage',
      name: 'permissionManage',
      component: permissionManage
    },
    {
      path: '/malldecoration/recommendcommodity',
      name: 'recommendcommodity',
      component: recommendcommodity
    },
    {
      path: '/malldecoration/homeinfo',
      name: 'homeinfo',
      component: homeinfo
    },
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/vueEditor',
      name: 'vueEditor',
      component: vueEditor
    }
  ]
})
