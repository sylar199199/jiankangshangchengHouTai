<style rel="stylesheet/scss" lang="scss" scoped>
  $baseFontSize: 192;
  .salecustomercontent {
    display: flex;
    min-height: calc(100vh - 50px);
    margin-top: 60px;

    .content {
      flex: 1;
      padding: 20px;

      .contanternews {
        .dataGeneral {
          padding: 0px 20px 10px 20px;

          .searchContent {
            flex-wrap: wrap;
            position: relative;
            margin-top: 20px;

            .bacButton {
              position: absolute;
              right: 46px;
              bottom: 15px;
            }

            .searchBox {
              margin-right: 30px;
              margin-bottom: 20px;

              .searchLable {
                margin-right: 6px;
              }

              .serchInput {
                width: 200px;
                height: 30px;
                line-height: 30px;
                border: 1px solid #e5e5e5;
                text-indent: 10px;
              }

              .searchName {
                display: inline-block;
                width: 56px;
                line-height: 30px;
                margin-right: 0;
              }
            }
          }
        }

        .bannerTable {
          background: #fff;
          /*margin-top: 15px;*/
          padding: 10px 0 100px;

          .borderButton {
            margin: 0 10px 0 20px;
          }

          .noData {
            text-align: center;
            padding-top: 30px;
          }

          .table {
            font-size: 12px;
            border: 1px solid #f6f6f6;
            margin: 10px 20px;
            width: 937px;

            tr {
              border-bottom: 1px solid #f6f6f6;

              th {
                font-size: 12px;
                text-align: center;
                background: #f6f6f6;

                .iconshengjiangxu {
                  font-size: 16px;
                  margin-left: 5px;
                }
              }

              th:nth-child(1) {
                text-align: left;
                padding-left: 16px
              }

              th:nth-child(2) {
                text-align: left;
              }

              td:nth-child(2) {
                text-align: left;
              }

              td {
                text-align: center;
                padding: 20px 6px;

                .line {
                  display: inline-block;
                  height: 8px;
                  width: 3px;
                  background: #eee;
                  margin: 0 10px;
                }

              }

              td:nth-of-type(1) {
                text-align: left;
                padding-left: 16px
              }

              td:nth-of-type(3) {
                text-align: center;
              }
            }
          }
        }

        .block {
          text-align: right;
          margin-top: 35px;
          margin-right: 20px;
        }
      }
    }
  }
</style>
<template>
  <div class="general">
    <KlTop></KlTop>
    <div class="salecustomercontent contaner">
      <Aside></Aside>
      <div class="content">
        <div class="contanternews">
          <div class="dataGeneral backWhite" v-show="redeemView">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
              <el-menu-item index="0">全部</el-menu-item>
              <el-menu-item index="1">未开始</el-menu-item>
              <el-menu-item index="2">进行中</el-menu-item>
              <el-menu-item index="3">已结束</el-menu-item>
              <el-menu-item index="4">已失效</el-menu-item>
            </el-menu>
          </div>
          <div class="dataGeneral bannerTable">
            <div class="itemscenter">
              <div class="borderButton cursor" v-show="redeemAdd" @click="addExchange()">新建积分兑换</div>
            </div>

            <table v-if="noData&&redeemView" class="table">
              <tr>
                <th v-if="activeIndex !=0" v-for="item in sortDatasone" :key="item.name">
                  {{item.name}}
                </th>
                <th v-if="activeIndex ==0" v-for="item in sortDatas">
                  {{item.name}}
                </th>
              </tr>
              <tr v-for="(item,index) in tableData" :key="item.id" :inde="index">
                <td>
                  {{item.name}}
                </td>
                <td>
                  {{timetrans(item.startTime)}} 至 <br>{{timetrans(item.endTime)}}
                </td>
                <td>
                  <span v-if="item.status == 1">未开始</span>
                  <span v-if="item.status == 2">进行中</span>
                  <span v-if="item.status == 3">已结束</span>
                  <span v-if="item.status == 4">已失效</span>
                </td>

                <td>
                  {{item.redeemUserNums}}
                </td>
                <td>
                  {{item.redeemOrderNums}}
                </td>
                <td>
                  {{item.totalPoints}}
                </td>
                <td v-if="activeIndex ==0">
                  <i class="cursor iconfont iconshangsheng fontIcongreen" v-if="index!=0"
                     @click='upSort(index,item)' v-show="redeemSort"></i>
                  <i class="iconfont iconshangsheng fontIcongrey" v-if="index==0" v-show="redeemSort"></i>
                  <i class='cursor iconfont fontIcongreen iconjiang' v-show="redeemSort" @click='downSort(index,item)'
                     v-if="index!=(tableData.length-1)"></i>
                  <i class='iconfont fontIcongrey iconjiang' v-show="redeemSort" v-if="index==(tableData.length-1)"></i>
                </td>
                <td>
                  <span class="color2087 font12 cursor fontWeight" v-if="item.status != 2 || item.status != 4"
                        @click="goDetail(item.id)" v-show="redeemUpdate">编辑</span>
                  <span class="line" v-show="redeemUpdate" v-if="item.status != 2 || item.status != 4"></span>
                  <span class="color2087 font12 cursor fontWeight" @click="undercarriage(item.id)"
                        v-if="(item.status != 4)" v-show="redeemInvalid">使失效</span>
                  <span class="line" v-if="(item.status != 4)" v-show="redeemInvalid"></span>
                  <span class="color2087 font12 cursor fontWeight" @click="enableGoods(item.id)"
                        v-if="(item.status == 4)" v-show="redeemInvalid">使生效</span>
                  <span class="line" v-if="(item.status == 4)" v-show="redeemInvalid"></span>
                  <span class="color2087 font12 cursor fontWeight" @click="copyGoods(item.id)"
                        v-show="redeemCopy">复制</span>
                  <span class="line" v-show="redeemCopy"></span>
                  <span class="color2087 font12  cursor fontWeight" v-show="redeemDelete"
                        @click="delectCommodity(item.id)">删除</span>
                </td>
              </tr>
            </table>
            <div v-if="!noData" class="noData">
              <img class="nodataImg" src="../../assets/images/nodatalist.png"/>
              <p>暂无数据~</p>
            </div>
            <div class="block" v-if="noData" v-show="redeemView">
              <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="page"
                :page-size="size"
                :page-sizes="[5,10,20]"
                layout="total,sizes,prev, pager, next,jumper"
                :total="total">
              </el-pagination>
            </div>
          </div>
        </div>
        <Helprules v-if="showhelprules" @clickbanner="getbackData"></Helprules>
      </div>
    </div>
  </div>
</template>

<script>
  import Aside from '@/components/aside'
  import Filter from '@/common/filter'
  import Service from '@/common/service'
  import Store from '@/vuex/index'
  import KlTop from '@/components/klTop'
  import Global from '@/common/global'
  import Helprules from '@/components/helprules'

  export default {
    components: {
      Aside,
      KlTop,
      Helprules
    },
    data() {
      return {
        page: 1,
        size: 10,
        total: 0,
        showhelprules: false,
        activeIndex: '0',
        orderField: 'saleStartDate',
        orderType: 'desc',
        sortDatas: [
          {orderType: '', name: '活动名称', showBlue: false, orderField: ''},
          {orderType: '', name: '有效时间', showBlue: false, orderField: ''},
          {orderType: '', name: '活动状态', showBlue: false, orderField: ''},
          {orderType: '', name: '兑换人数', showBlue: false, orderField: ''},
          {orderType: '', name: '兑换订单数', showBlue: false, orderField: ''},
          {orderType: '', name: '实际消耗积分', showBlue: true, orderField: ''},
          {orderType: '', name: '排序', showBlue: true, orderField: ''},
          {orderType: '', name: '操作', showBlue: false, orderField: ''}
        ],
        sortDatasone: [
          {orderType: '', name: '活动名称', showBlue: false, orderField: ''},
          {orderType: '', name: '有效时间', showBlue: false, orderField: ''},
          {orderType: '', name: '活动状态', showBlue: false, orderField: ''},
          {orderType: '', name: '兑换人数', showBlue: false, orderField: ''},
          {orderType: '', name: '兑换订单数', showBlue: false, orderField: ''},
          {orderType: '', name: '实际消耗积分', showBlue: true, orderField: ''},
          {orderType: '', name: '操作', showBlue: false, orderField: ''}
        ],

        endDate: "",
        name: "",
        startDate: "",
        commodyId: '',
        shelfStatusId: '',
        channelId: '',
        channelsOption: [],
        shelfStatus: [{name: '全部', id: ''}, {name: '在售中', id: '0'}, {name: '待上架', id: '1'}, {name: '已上架', id: '2'}],
        commodyType: [{name: '全部', id: ''}, {name: '电子卡券', id: '1'}, {name: '实物商品', id: '2'}],
        insuranceDate: '',
        tableData: [],
        noData: true,
        showOne: false,
        showTwo: false,
        showThree: false,
        showFour: false,
        dissipate: [],
        timer: null,
        username: '',
        userInfo: '',
        permissions: [],

        redeemView: false,
        redeemAdd: false,
        redeemUpdate: false,
        redeemDelete: false,
        redeemSort: false,
        redeemSortGoods: false,
        redeemInvalid: false,
        redeemCopy: false,
        redeemSelectGoods: false,
      };
    },
    created() {
      localStorage.setItem('shopId', 2)
      this.userInfo = JSON.parse(localStorage.getItem('user'));
      this.redeemView = this.havePermissions('redeem:view')
      this.redeemAdd = this.havePermissions('redeem:add')
      this.redeemUpdate = this.havePermissions('redeem:listupdate')
      this.redeemDelete = this.havePermissions('redeem:delete')
      this.redeemSort = this.havePermissions('redeem:sort')
      this.redeemSortGoods = this.havePermissions('redeem:sortGoods')
      this.redeemInvalid = this.havePermissions('redeem:invalid')
      this.redeemCopy = this.havePermissions('redeem:copy')
      this.redeemSelectGoods = this.havePermissions('redeem:selectGoods')

    },
    watch: {},
    mounted() {
      if (this.redeemView) {
        this.getcommodityData('');//获取商品列表
      }
    },
    methods: {
      getbackData(str) {
        if (str == 'sure') {
          this.showhelprules = false;
        }
        if (str == 'cancle') {
          this.showhelprules = false;
        }
      },
      // 复制活动
      copyGoods(id) {
        this.$confirm('确定复制此活动?', '', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.copyactivity(id)
        }).catch(() => {
        });
      },
      copyactivity(id) {
        Service.lzredeem().lzcopyactivity({}, id).then(response => {
          if (response.errorCode == 0) {
            this.$message({
              type: 'success',
              message: '操作成功!'
            });
            this.getcommodityData('');//获取商品列表
          } else {
            this.$message.error(response.message)
          }

        }, err => {
        });
      },
      downSort(index, item) {//降序
        var secondId = this.tableData[index + 1].id;
        var firstId = this.tableData[index].id;
        this.tableData[index] = this.tableData[index + 1];
        this.tableData[index + 1] = item;
        this.sortRecData(firstId, secondId);
      },
      upSort(index, item) {//升序
        var secondId = this.tableData[index - 1].id;
        var firstId = this.tableData[index].id;
        this.tableData[index] = this.tableData[index - 1];
        this.tableData[index - 1] = item;

        this.sortRecData(firstId, secondId);
      },
      sortRecData(firstId, secondId) {
        let str = '?firstId=' + firstId + '&secondId=' + secondId;
        Service.lzredeem().lzsortactivity({}, str).then(response => {
          if (response.errorCode == 0) {
            this.getcommodityData();
          } else {
            this.$message.error(response.message)
          }
        }, err => {
        });
      },
      handleSelect(key, keyPath) {
        this.activeIndex = key;
        this.getcommodityData('search')
      },
      sortData(item) {
        for (let i in this.sortDatas) {
          this.sortDatas[i].showBlue = false;
        }
        item.showBlue = true;
        if (item.orderType == 'asc') {
          item.orderType = 'desc';
        } else if (item.orderType == 'desc') {
          item.orderType = 'asc';
        }
        this.orderType = item.orderType;
        this.orderField = item.orderField;
        this.getcommodityData('search')
      },
      showDes(item) {
        if (item.statusDesc) {
          for (let i in this.tableData) {
            this.tableData[i].isshowDes = false;
          }
          item.isshowDes = true;
        }
        this.$forceUpdate();

      },
      hideDes(item) {
        if (item.statusDesc) {
          for (let i in this.tableData) {
            this.tableData[i].isshowDes = false;
          }
        }
        this.$forceUpdate();
      },
      showflashSale(id, isHomepageShow) {
        var str = ''
        if (isHomepageShow) {
          str = '是否取消显示在首页'
        } else {
          str = '是否显示在首页'
        }
        this.$confirm(str, '', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          Service.flashSale().showflashSale({}, id).then(response => {
            if (response.errorCode == 0) {
              this.$message({
                type: 'success',
                message: '操作成功!'
              });
              this.getcommodityData('');//获取商品列表
            } else {
              this.$message.error(response.message)
            }

          }, err => {
          });
        }).catch(() => {
        });
      },
      enableGoods(id) {
        this.$confirm('确认使活动生效?', '', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          Service.lzredeem().lzinvalidactivity({}, id).then(response => {
            if (response.errorCode == 0) {
              this.$message({
                type: 'success',
                message: '操作成功!'
              });
              this.getcommodityData('');//获取商品列表
            } else {
              this.$message.error(response.message)
            }

          }, err => {
          });
        }).catch(() => {
        });
      },
      undercarriage(id) {
        this.$confirm('确认使活动失效', '', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          Service.lzredeem().lzinvalidactivity({}, id).then(response => {
            if (response.errorCode == 0) {
              this.$message({
                type: 'success',
                message: '操作成功!'
              });
              this.getcommodityData('');//获取商品列表
            } else {
              this.$message.error(response.message)
            }

          }, err => {
          });
        }).catch(() => {
        });

      },
      delectCommodity(id) {
        this.$confirm('活动删除请谨慎操作，确定删除?', '', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          Service.lzredeem().lzdeleteactivity({}, id).then(response => {
            if (response.errorCode == 0) {
              this.$message({
                type: 'success',
                message: '删除成功!'
              });
              this.getcommodityData('');//获取商品列表
            } else {
              this.$message.error(response.message)
            }

          }, err => {
          });
        }).catch(() => {

        });
      },

      addExchange() {
        this.$router.push({name: 'addexchange', params: {id: 'add'}})
      },
      goDetail(id) {
        this.$router.push({name: 'addexchange', params: {id}})
      },
      handleSizeChange(val) {
        this.size = val;
        this.getcommodityData('')
      },
      handleCurrentChange(val) {
        this.page = val;
        this.getcommodityData('')
      },
      enddateChange(val) {
        if (val) {
          this.startDate = this.timetrans(val[0]);
          this.endDate = this.timetrans(val[1])
        } else {
          this.startDate = '';
          this.endDate = '';
        }
      },
      timetrans(timestamp) {
        var getSeconds = '', getMinutes = '', getHours = '';
        var d = new Date(timestamp);
        getHours = d.getHours() < 10 ? '0' + d.getHours() : d.getHours();
        getMinutes = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes();
        ;
        getSeconds = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds();
        ;
        var newTime = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + getHours + ':' + getMinutes + ':' + getSeconds;
        return newTime
      },
      getcommodityData(str) {
        if (str == 'search') {
          this.page = 1;
        }
        let status = this.activeIndex == 0 ? '' : this.activeIndex;
        Service.lzredeem().lzredeemList({}, this.page, this.size, status).then(response => {
          if (response.errorCode == 0) {
            if (response.data.records.length == 0) {
              this.noData = false;
            } else {
              this.noData = true;
              this.total = response.data.total;
              for (var i = 0; i < response.data.records.length; i++) {
                response.data.records[i].isshowDes = false;
              }
              this.$nextTick(() => {
                this.tableData = response.data.records;
              })
            }
          } else {
            this.$message.error(response.message)
          }
        }, err => {
        });

      },
    },

  }
</script>

