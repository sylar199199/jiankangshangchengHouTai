<style rel="stylesheet/scss" lang="scss" scoped>
  $baseFontSize: 192;
  $bg2087: #56ae97;
  $bac97: #929292;
  #aside {
    display: flex;

    .firstAside {
      width: 182px;
      background: #fff;
      padding-top: 0;
      min-height: 100vh;
      border-right: 1px solid #FAFAFA;
      font-size: 12px;

      .firstLi:first-child:hover {
        background: $bg2087;
        margin-bottom: 0px;
      }

      .firstLi {
        .secondUl {
          padding: 18px 0;
          background: #f9f9f9;

          .secondLi {
            color: $bac97;
            padding-left: 53px;
            margin-bottom: 18px;
            font-size: 12px;
            position: relative;
          }

          .secondLi:hover {
            color: $bg2087;
          }

          .subactive {
            color: $bg2087;
          }

          .subactive:before {
            content: '';
            display: block;
            position: absolute;
            height: 17px;
            width: 4px;
            background: $bg2087;
            left: 0;
          }

          .secondLi:last-child {
            margin-bottom: 0px;
          }
        }

        .firstTitle {
          height: 52px;
          line-height: 52px;
        }

        .logo {
          width: 91rem/$baseFontSize;
          height: 32rem/$baseFontSize;
        }

        .warmText {
          color: $bac97;
          font-size: 12px;
          display: inline-block;
          vertical-align: middle;
          margin-top: -2px;
          margin-left: 1px;
        }

        .iconfont {
          padding-left: 20px;
          font-size: 20px !important;
          display: inline-block;
          vertical-align: middle;
          margin-right: 10px;
        }

        .fontIcongrey {
          color: #b7b7b7;
        }

        .fontIconwhite {
          color: #fff;
        }
      }

      .liactive {
        background: $bg2087;

        .warmText {
          color: #fff;
        }
      }

      .firstLi:hover {

        .firstTitle {
          background: #fff;

          .warmText {
            color: $bg2087;
          }

          .iconfont {
            color: $bg2087;
          }
        }

        .liactive {
          background: $bg2087;

          .warmText {
            color: #fff;
          }

          .iconfont {
            color: #fff;
          }
        }
      }
    }

  }

</style>
<template>
  <div style="background: #fff;">
    <div id="aside">
      <ul class="firstAside">
        <li class='cursor firstLi' v-if="item.name != '设置' && item.name != '退出' && (item.isdelete == false)"
            v-for="(item,index) in items">
          <div class="firstTitle" :class="{liactive:item.isSubShow}" @click="showToggle(item,index)">
            <i :class='item.greyIcon' v-if="!item.showIcon"></i>
            <i v-if="item.showIcon" :class="item.greenIcon"></i>
            <span class="warmText">{{item.name}}</span>
          </div>
          <ul class="secondUl" v-if="item.showIcon && item.subItems.length != 0 ">
            <li :class="{subactive:ite.isSubShow}" class="secondLi cursor" v-if="ite.isdelete == false"
                v-for="(ite,indexsecond) in item.subItems" @click="jumpRouter(item.subItems,ite,index,indexsecond)">
              {{ite.name}}
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
  import Service from '@/common/service'

  export default {
    data() {
      return {
        title: '销售',
        userInfo: '',
        userType: null,
        secondContent: [],
        hasSales: '',
        hasLeads: '',
        hasCustomer: '',
        hasSettings: '',
        hasUser: '',
        hasRole: '',
        hasClient: '',
        hasCustomeruser: '',
        hasCustomerenterprise: '',
        hasOrder: '',
        hasOrderUser: '',
        hasOrderenterprise: '',
       /* items: [
          {
            name: '首页',
            greyIcon: 'iconzhuye iconfont fontIcongrey',
            greenIcon: 'iconzhuye iconfont fontIconwhite',
            isSubShow: false,
            showIcon: false,
            isShow: false,
            isdelete: false,
            subItems: [
              {
                isdelete: false,
                title: '健康商城概况',
                secTitlte: '',
                secgreyIcon: '',
                secgreenIcon: '',
                name: '健康商城概况',
                isSubShow: false,
                router: 'home',
                thirditems: []
              },
              {
                isdelete: false,
                title: '乐兹概况',
                secTitlte: '',
                secgreyIcon: '',
                secgreenIcon: '',
                name: '乐兹概况',
                isSubShow: false,
                router: 'lzhome',
                thirditems: []
              },
            ]
          },
          {
            name: '店铺装修',
            greyIcon: 'icondianpu iconfont fontIcongrey',
            greenIcon: 'icondianpu iconfont fontIconwhite',
            isSubShow: false,
            showIcon: false,
            isShow: false,
            isdelete: false,
            subItems: [
              {
                isdelete: false,
                title: '商城装修',
                secTitlte: '',
                secgreyIcon: '',
                secgreenIcon: '',
                name: '首页轮播海报',
                isSubShow: false,
                router: 'homeinfo',
                thirditems: []
              },
              {
                isdelete: false,
                title: '店铺装修',
                secTitlte: '',
                secgreyIcon: '',
                secgreenIcon: '',
                name: '图文导航',
                isSubShow: false,
                router: 'textnavigation',
                thirditems: []
              },
              {
                isdelete: false,
                title: '店铺装修',
                secTitlte: '',
                secgreyIcon: '',
                secgreenIcon: '',
                name: '图片广告',
                isSubShow: false,
                router: 'phontoads',
                thirditems: []
              },
              {
                isdelete: false,
                title: '店铺装修',
                secTitlte: '',
                secgreyIcon: '',
                secgreenIcon: '',
                name: '健康服务',
                isSubShow: false,
                router: 'healthservices',
                thirditems: []
              },
              {
                isdelete: false,
                title: '商城装修',
                secTitlte: '',
                secgreyIcon: '',
                secgreenIcon: '',
                name: '昆仑自营商品推荐',
                isSubShow: false,
                router: 'recommendcommodity',
                thirditems: []
              },
            ]
          },
          {
            name: '外采商品管理',
            greyIcon: 'iconshangpinguanli iconfont fontIcongrey',
            greenIcon: 'iconshangpinguanli iconfont fontIconwhite',
            isSubShow: false,
            showIcon: false,
            isShow: false,
            isdelete: false,
            subItems: [
              {
                title: '健康商城商品管理',
                secTitlte: '',
                isdelete: false,
                secgreyIcon: '',
                secgreenIcon: '',
                name: '健康商城商品管理',
                isSubShow: false,
                router: 'fxjcommodityList',
                thirditems: []
              },
              {
                isdelete: false,
                title: '健康商城商品分组',
                secTitlte: '',
                secgreyIcon: '',
                secgreenIcon: '',
                name: '健康商城商品分组',
                isSubShow: false,
                router: 'commoditygroup',
                thirditems: []
              },
              {
                isdelete: false,
                title: '乐兹商品管理',
                secTitlte: '',
                secgreyIcon: '',
                secgreenIcon: '',
                name: '乐兹商品管理',
                isSubShow: false,
                router: 'lzcommodityList',
                thirditems: []
              }
            ]
          },
          {
            name: '昆仑自营商品管理',
            greyIcon: 'icondingdan1 iconfont fontIcongrey',
            greenIcon: 'icondingdan1 iconfont fontIconwhite',
            isSubShow: false,
            showIcon: false,
            isShow: false,
            isdelete: false,
            subItems: [
              {
                isdelete: false,
                title: '商品管理',
                secTitlte: '',
                secgreyIcon: 'icon-icon-personal iconfont fontIcongrey',
                secgreenIcon: 'icon-icon-personal iconfont fontIconwhite',
                name: '商品管理',
                isSubShow: false,
                router: 'commoditymanage',
                thirditems: []
              },
              {
                isdelete: false,
                title: '销售规格库',
                secTitlte: '',
                secgreyIcon: 'icon-kehu1 iconfont fontIcongrey',
                secgreenIcon: 'icon-kehu1 iconfont fontIconwhite',
                name: '销售规格库',
                isSubShow: false,
                router: 'salesspecification',
                thirditems: []
              }
            ]
          },
          {
            name: '营销工具',
            greyIcon: 'iconyingxiao iconfont fontIcongrey',
            greenIcon: 'iconyingxiao iconfont fontIconwhite',
            isSubShow: false,
            showIcon: false,
            isShow: false,
            isdelete: false,
            subItems: [
              {
                title: '"健康商城抽奖福利',
                secTitlte: '',
                isdelete: false,
                secgreyIcon: '',
                secgreenIcon: '',
                name: '抽奖福利',
                isSubShow: false,
                router: 'rafflebenefits',
                thirditems: []
              },
              {
                title: '健康商城限时抢购',
                secTitlte: '',
                isdelete: false,
                secgreyIcon: '',
                secgreenIcon: '',
                name: '健康商城限时抢购',
                isSubShow: false,
                router: 'limitactiveList',
                thirditems: []
              },
              {
                title: '活动h5',
                secTitlte: '',
                isdelete: false,
                secgreyIcon: '',
                secgreenIcon: '',
                name: '活动h5',
                isSubShow: false,
                router: 'activeh5list',
                thirditems: []
              },
              {
                title: '健康商城兑换码',
                secTitlte: '',
                isdelete: false,
                secgreyIcon: '',
                secgreenIcon: '',
                name: '健康商城兑换码',
                isSubShow: false,
                router: 'convertmanage',
                thirditems: []
              },
              {
                title: '乐兹积分兑换',
                secTitlte: '',
                isdelete: false,
                secgreyIcon: '',
                secgreenIcon: '',
                name: '乐兹积分兑换',
                isSubShow: false,
                router: 'lzexchange',
                thirditems: []
              }
            ]
          },
          {
            name: '权益管理 ',
            greyIcon: 'iconquanyi iconfont fontIcongrey',
            greenIcon: 'iconquanyi iconfont fontIconwhite',
            isSubShow: false,
            showIcon: false,
            isShow: false,
            isdelete: false,
            subItems: [
              {
                isdelete: false,
                title: '权益管理',
                secTitlte: '',
                secgreyIcon: 'icon-icon-personal iconfont fontIcongrey',
                secgreenIcon: 'icon-icon-personal iconfont fontIconwhite',
                name: '权益管理',
                isSubShow: false,
                router: 'legalrightmanage',
                thirditems: []
              },
              {
                isdelete: false,
                title: '权益活动',
                secTitlte: '',
                secgreyIcon: 'icon-icon-personal iconfont fontIcongrey',
                secgreenIcon: 'icon-icon-personal iconfont fontIconwhite',
                name: '权益活动',
                isSubShow: false,
                router: 'legalactivity',
                thirditems: []
              },
              {
                isdelete: false,
                title: '销售规格库',
                secTitlte: '',
                secgreyIcon: 'icon-kehu1 iconfont fontIcongrey',
                secgreenIcon: 'icon-kehu1 iconfont fontIconwhite',
                name: '销售规格库',
                isSubShow: false,
                router: 'legalrighspecification',
                thirditems: []
              }
            ]
          },
          {
            name: '订单管理',
            greyIcon: 'icondingdan iconfont fontIcongrey',
            greenIcon: 'icondingdan iconfont fontIconwhite',
            isSubShow: false,
            showIcon: false,
            isShow: false,
            isdelete: false,
            subItems: [
              {
                title: '健康商城订单列表',
                secTitlte: '',
                isdelete: false,
                secgreyIcon: '',
                secgreenIcon: '',
                name: '健康商城订单列表',
                isSubShow: false,
                router: 'fxjorder',
                thirditems: []
              },
              {
                title: '昆仑自营订单列表',
                secTitlte: '',
                isdelete: false,
                secgreyIcon: '',
                secgreenIcon: '',
                name: '昆仑自营订单列表',
                isSubShow: false,
                router: 'orderlist',
                thirditems: []
              },
              {
                title: '乐兹订单列表',
                secTitlte: '',
                isdelete: false,
                secgreyIcon: '',
                secgreenIcon: '',
                name: '乐兹订单列表',
                isSubShow: false,
                router: 'lzorderlist',
                thirditems: []
              },
              {
                title: '权益列表',
                secTitlte: '',
                isdelete: false,
                secgreyIcon: '',
                secgreenIcon: '',
                name: '权益列表',
                isSubShow: false,
                router: 'legalrightList',
                thirditems: []
              }
            ]
          },
          {
            name: '视频管理 ',
            greyIcon: 'iconshipin2 iconfont fontIcongrey',
            greenIcon: 'iconshipin2 iconfont fontIconwhite',
            isSubShow: false,
            showIcon: false,
            isShow: false,
            isdelete: false,
            subItems: [
              {
                isdelete: false,
                title: '视频管理',
                secTitlte: '',
                secgreyIcon: 'icon-icon-personal iconfont fontIcongrey',
                secgreenIcon: 'icon-icon-personal iconfont fontIconwhite',
                name: '视频管理',
                isSubShow: false,
                router: 'videoManage',
                thirditems: []
              }
            ]
          },
          {
            name: '客户管理',
            greyIcon: 'iconkehu iconfont fontIcongrey',
            greenIcon: 'iconkehu iconfont fontIconwhite',
            isSubShow: false,
            showIcon: false,
            isShow: false,
            isdelete: false,
            subItems: [
              {
                title: '客户列表',
                secTitlte: '',
                isdelete: false,
                secgreyIcon: '',
                secgreenIcon: '',
                name: '客户列表',
                isSubShow: false,
                router: 'customerlist',
                thirditems: []
              }
            ]
          },
          {
            name: '数据中心',
            greyIcon: 'iconshuju iconfont fontIcongrey',
            greenIcon: 'iconshuju iconfont fontIconwhite',
            isSubShow: false,
            showIcon: false,
            isShow: false,
            isdelete: false,
            subItems: [
              {
                title: '健康商城实时概况',
                secTitlte: '',
                isdelete: false,
                secgreyIcon: '',
                secgreenIcon: '',
                name: '健康商城实时概况',
                isSubShow: false,
                router: 'realtime',
                thirditems: []
              },
              {
                title: '健康商城商品分析',
                secTitlte: '',
                isdelete: false,
                secgreyIcon: '',
                secgreenIcon: '',
                name: '健康商城商品分析',
                isSubShow: false,
                router: 'goodsanalysis',
                thirditems: []
              },
              {
                title: '健康商城商品排行',
                secTitlte: '',
                isdelete: false,
                secgreyIcon: '',
                secgreenIcon: '',
                name: '健康商城商品排行',
                isSubShow: false,
                router: 'goodsrank',
                thirditems: []
              },
              {
                title: '健康商城品类概况',
                secTitlte: '',
                isdelete: false,
                secgreyIcon: '',
                secgreenIcon: '',
                name: '健康商城品类概况',
                isSubShow: false,
                router: 'typesituation',
                thirditems: []
              },
              {
                title: '乐兹实时概况',
                secTitlte: '',
                isdelete: false,
                secgreyIcon: '',
                secgreenIcon: '',
                name: '乐兹实时概况',
                isSubShow: false,
                router: 'lzrealtime',
                thirditems: []
              },
              {
                title: '乐兹商品排行',
                secTitlte: '',
                isdelete: false,
                secgreyIcon: '',
                secgreenIcon: '',
                name: '乐兹商品排行',
                isSubShow: false,
                router: 'lzgoodsrank',
                thirditems: []
              },
            ]
          },
          {
            name: '权限管理',
            greyIcon: 'iconquanxian3 iconfont fontIcongrey',
            greenIcon: 'iconquanxian3 iconfont fontIconwhite',
            isSubShow: false,
            showIcon: false,
            isShow: false,
            isdelete: false,
            subItems: [
              {
                title: '角色管理',
                secTitlte: '',
                isdelete: false,
                secgreyIcon: '',
                secgreenIcon: '',
                name: '角色管理',
                isSubShow: false,
                router: 'userpermission',
                thirditems: []
              },
              {
                title: '账号权限',
                secTitlte: '',
                isdelete: false,
                secgreyIcon: '',
                secgreenIcon: '',
                name: '账号权限',
                isSubShow: false,
                router: 'accountpermission',
                thirditems: []
              },
              {
                title: '权限管理',
                secTitlte: '',
                isdelete: false,
                secgreyIcon: '',
                secgreenIcon: '',
                name: '权限管理',
                isSubShow: false,
                router: 'permissionManage',
                thirditems: []
              }
            ]
          },
          {
            name: '帮助中心',
            greyIcon: 'el-icon-s-tools iconfont fontIcongrey',
            greenIcon: 'el-icon-s-tools iconfont fontIconwhite',
            isSubShow: false,
            showIcon: false,
            isShow: false,
            isdelete: false,
            subItems: [
              {
                title: '问答管理',
                secTitlte: '',
                isdelete: false,
                secgreyIcon: '',
                secgreenIcon: '',
                name: '问答管理',
                isSubShow: false,
                router: 'questionmanage',
                thirditems: []
              },
              {
                title: '乐兹基础信息',
                secTitlte: '',
                isdelete: false,
                secgreyIcon: '',
                secgreenIcon: '',
                name: '乐兹基础信息',
                isSubShow: false,
                router: 'lzbasics',
                thirditems: []
              },
            ]
          }
        ],*/
        items: [],
        hasChannel: '',
        hasCommodity: '',
        hasProductManage: '',
        hasProductpromotion: '',
        haschannelordergroup: '',
        haschannelorderpersonal: '',
        hasCustomerauthentication: '',
        isShowLogo: false,
        hasGeneralView: '',
      }
    },
    created() {
      this.url = window.location.href;
      this.initItems();
      this.userInfo = JSON.parse(localStorage.getItem('user'));
    },
    mounted() {
      $('html , body').animate({scrollTop: 0}, 100);
    },
    methods: {
      // 初始话展开菜单
      initSub() {
        var params = JSON.parse(localStorage.getItem('klparam'));
        if (params) {
          if (params.index == 0) {
            this.isShowLogo = false;
          }
          if (params.from == 'parent') {
            for (let i in this.items) {
              if (params.index != i) {
                this.items[i].isSubShow = false;
                this.items[i].showIcon = false;
              } else {
                this.items[i].isSubShow = true;
                this.items[i].showIcon = true;
                for (let j in this.items[i].subItems) {
                  this.items[i].subItems[j].isSubShow = false;
                  if (params.childindex == j) {
                    this.items[i].subItems[j].isSubShow = true;
                  }
                }
              }
            }
          }
        }
        if (!params) {
          for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].name != '首页') {
              if (this.items[i].isdelete == false) {
                this.items[i].isSubShow = true;
                this.items[i].showIcon = true;
                for (let ite of this.items[i].subItems) {
                  if (ite.isdelete == false) {
                    ite.isSubShow = true;
                    break;
                  }
                }
                return;
              }
            }
          }
        }
      },
      // 初始话左侧菜单
      initItems() {
        let userMenu = JSON.parse(localStorage.getItem('userMenu'))
        this.items = userMenu.map((item) => {
          if (item.hasOwnProperty('children') && item.children.length) {
            return {
              name: item.name,
              greyIcon: `${item.icon} iconfont fontIcongrey`,
              greenIcon: `${item.icon} iconfont fontIconwhite`,
              isSubShow: false,
              showIcon: false,
              isShow: false,
              isdelete: item.hidden,
              subItems: item.children.map(itemChildren => {
                return {
                  title: itemChildren.name,
                  secTitlte: '',
                  isdelete: item.hidden,
                  secgreyIcon: '',
                  secgreenIcon: '',
                  name: itemChildren.name,
                  isSubShow: false,
                  router: itemChildren.url,
                  thirditems: []
                }
              })
            }
          }

        })
        this.changeRouter();
      },
      // 初始话跳转路由
      changeRouter() {

        for (var i = 0; i < this.items.length; i++) {
          for (var j = 0; j < this.items[i].subItems.length; j++) {
            if (this.items[i].subItems[j].thirditems.length == 0) {
              if (this.url.indexOf(this.items[i].subItems[j].router) > 0) {
                var obj = {
                  index: i,
                  from: 'parent',
                  childindex: j,
                  thirdIndex: '',
                };
                ;
                localStorage.setItem('klparam', JSON.stringify(obj))
              }
            } else {
              for (var k = 0; k < this.items[i].subItems[j].thirditems.length; k++) {
                if (this.url.indexOf(this.items[i].subItems[j].thirditems[k].router) > 0) {
                  var obj = {
                    index: i,
                    from: 'parent',
                    childindex: j,
                    thirdIndex: k,
                  };
                  ;
                  localStorage.setItem('klparam', JSON.stringify(obj))
                }
              }
            }
          }
        }
        this.initSub()
      },
      judgeArr(arr, value) {
        var num = 0;
        for (var i = 0; i < arr.length; i++) {
          if (arr[i] == value) {
          } else {
            num++;
          }
        }
        return num
      },
      enterStyle(item) {
        if (!item.showIcon) {
          item.showIcon = true;
        }
        item.isShow = true;
      },
      leaveStyle(item) {
        if (!item.isSubShow) {
          item.showIcon = false;
        }
        item.isShow = false;
      },
      showToggle(item, index) {//第一个侧边栏
        var obj = {
          index: index,
          from: 'parent',
          childindex: '',
          thirdIndex: '',
        };
        ;
        localStorage.setItem('klparam', JSON.stringify(obj));
        ;
        for (let ite of item.subItems) {
          if (ite.isdelete == false) {
            this.$router.push({name: ite.router});
            return;
          }
        }
      },
      jumpRouter(subItems, ite, index, indexsecond) {
        var obj = {
          index: index,
          from: 'parent',
          childindex: indexsecond,
          thirdIndex: '',
        };

        for (let i in subItems) {
          subItems[i].isSubShow = false;
        }
        ite.isSubShow = true;
        localStorage.setItem('klparam', JSON.stringify(obj));
        this.$router.push({name: ite.router});
        this.$forceUpdate()
      }
    }
  }</script>
