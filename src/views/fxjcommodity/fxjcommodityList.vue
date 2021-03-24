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
          margin-top: 15px;
          padding: 10px 0 100px;

          .borderButton {
            margin: 0 20px;
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
                padding-left: 10px
              }

              td {
                text-align: center;
                padding: 8px 0;

                .undercarriageReason {
                  min-width: 120px;
                  position: absolute;
                  padding: 10px;
                  line-height: 20px;
                  background-color: #ffffff;
                  box-shadow: 0px 2px 24px 0px rgba(199, 199, 199, 0.51);
                  border-radius: 4px;
                  left: -44px;
                  top: -18px;
                }

                .line {
                  display: inline-block;
                  height: 8px;
                  width: 3px;
                  background: #eee;
                  margin: 0 10px;
                }

                .productImg {
                  width: 60px;
                  height: 60px;
                  max-width: 116px;
                  max-height: 60px;
                }

                .productBox {
                  display: flex;
                  flex-direction: column;
                  height: 60px;
                  justify-content: space-between;
                  padding-left: 10px;

                  .productText {
                    margin-bottom: 0px;
                    margin-top: 0;
                  }
                }

              }

              td:nth-of-type(1) {
                min-width: 168px;
                max-width: 200px;
                text-align: left;
                padding-left: 10px
              }

              td:nth-of-type(3) {
                text-align: center;

                .imgicon {
                  display: inline-block;
                  vertical-align: middle;
                  height: 20px;
                  width: 20px;
                  padding-right: 10px;
                }
              }

              td:nth-of-type(5) {
                position: relative;

                .warmtext {
                  position: absolute;
                  color: #fff;
                  font-size: 12px;
                  top: 50px;
                  background: #000;
                  padding: 4px 6px;
                  border-radius: 4px;
                }

                .imgicon {
                  display: inline-block;
                  vertical-align: middle;
                  height: 20px;
                  width: 20px;
                  margin-right: 20px;
                }
              }

              .upimg {
                display: inline-block;
                vertical-align: middle;
                height: 20px;
                width: 20px;
              }

              .downimg {
                display: inline-block;
                vertical-align: middle;
                height: 20px;
                width: 20px;
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
          <div class="dataGeneral backWhite" v-show="activityGoodsview">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
              <el-menu-item index="0">销售中</el-menu-item>
              <el-menu-item index="1">已售罄</el-menu-item>
              <el-menu-item index="2">仓库中</el-menu-item>
            </el-menu>

            <div class="searchContent flex clear">
              <div class="searchBox">
                <span class="searchLable colorGrey font12">商品名称 </span>
                <input type="text" v-model="name" class="serchInput font12 colorblack" placeholder="商品名称"/>
              </div>
              <div class="bacButton cursor" v-show="activityGoodsview" @click="getcommodityData('search')">筛选</div>
            </div>
          </div>
          <div class="dataGeneral bannerTable">
            <div class="borderButton cursor" v-if="activeIndex == 2" @click="addCommodity()" v-show="activityGoodsadd">
              新增商品
            </div>
            <table v-if="noData" class="table" v-show="activityGoodsview">
              <tr>
                <th v-for="item in sortDatas" :key="item.name">
                  {{item.name}}
                </th>
              </tr>
              <tr v-for="(item,index) in tableData" :key="item.id" :index="index">
                <td>
                  <div class="flex">
                    <img class="productImg" :src="item.imgUrl">
                    <div class="productBox">
                      <p class="colorblack font12 productText">{{item.name}}</p>
                      <p class="colore6 font12 productText">￥{{item.price}}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <span v-if="item.consPoints">{{item.consPoints}}</span>
                  <span v-if="!item.consPoints">0</span>
                </td>
                <td>
                  {{item.salesVolume}}
                </td>
                <td>
                  {{item.stock}}
                </td>
                 <td>
                   <span v-if="item.activityType == 1">商品分组</span>
                  <span v-if="item.activityType == 2">抽奖福利</span>
                  <span v-if="item.activityType == 3">限时抢购</span>
                  <span v-if="item.activityType == 4">活动h5</span>
                  <span v-if="item.activityType == 5">兑换活动</span>
                  <span v-if="item.activityType == 6">幸运大抽奖</span>
                  <span v-if="item.activityType == 7">多人拼团</span>
                </td>
                <td>
                  <span v-if="activeIndex == 0">销售中</span>
                  <span v-if="activeIndex == 1">已售罄</span>
                  <span v-if="activeIndex == 2">仓库中</span>
                </td>
                <td>{{timetrans(item.createDate)}}</td>
                <td>
                  <span class="color2087 font12 cursor" @click="goDetail(item.id)"
                        v-show="activityGoodsupdate">编辑</span>
                  <span class="line"  v-show="activityGoodsupdate"></span>
                  <span class="color2087 font12 cursor" 
                        @click="copyCommodity(item.id)" v-show="activityGoodsadd">复制</span>
                  <span class="line"  v-show="activityGoodsadd"></span>
                  <span class="color2087 font12 cursor" @click="undercarriage(item.goodsRelationId)" v-if="status == 0"
                        v-show="activityGoodsoffShelf">下架</span>
                  <!-- <span class="line" v-if="status == 0" v-show="activityGoodsonShelf"></span>
                  <span class="color2087 font12 cursor" @click="onoffcarriage(item.id)" v-if="status == 1"
                        v-show="activityGoodsonShelf">上架</span> -->
                  <span class="line" v-if="status == 0" v-show="activityGoodsoffShelf"></span>
                  <span class="color2087 font12 cursor" @click="delectCommodity(item.id)" v-show="activityGoodsdelete">删除</span>
                </td>

              </tr>
            </table>
            <div v-if="!noData" class="noData">
              <img class="nodataImg" src="../../assets/images/nodatalist.png"/>
              <p>暂无数据~</p>
            </div>
            <div class="block" v-if="noData" v-show="activityGoodsview">
              <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="page"
                :page-size="size"
                :page-sizes="[5,10]"
                layout="total,sizes, prev, pager, next,jumper"
                :total="total">
              </el-pagination>
            </div>
          </div>
        </div>
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
  import Commodities from '@/components/commodities'

  export default {
    name: "salecustomer",
    components: {
      Aside,
      KlTop,
      Commodities
    },
    data() {
      return {
        soldOut: false,
        activeIndex: '0',
        orderField: 'saleStartDate',
        orderType: 'desc',
        sortDatas: [
          {orderType: '', name: '商品价格', showBlue: false, orderField: ''},
          {orderType: '', name: '消耗积分', showBlue: false, orderField: ''},
          {orderType: '', name: '销量', showBlue: false, orderField: ''},
          {orderType: '', name: '剩余库存', showBlue: false, orderField: ''},
          {orderType: '', name: '活动类型', showBlue: false, orderField: ''},
          {orderType: '', name: '状态', showBlue: false, orderField: ''},
          {orderType: '', name: '创建时间', showBlue: true, orderField: 'saleStartDate'},
          {orderType: '', name: '操作', showBlue: false, orderField: ''}
        ],
        endDate: "",
        name: "",
        startDate: "",
        status: '0',
        type: '',
        total: 0,
        size: 10,
        page: 1,
        commodyId: '',
        shelfStatusId: '',
        channelId: '',
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

        activityGoodsview: false,
        activityGoodsadd: false,
        activityGoodsupdate: false,
        activityGoodsdelete: false,
        activityGoodsonShelf: false,
        activityGoodsoffShelf: false,
      };
    },
    created() {
      this.userInfo = JSON.parse(localStorage.getItem('user'));
      this.activityGoodsview = this.havePermissions("activityGoods:view[shopId=1]")
      this.activityGoodsadd = this.havePermissions("activityGoods:add[shopId=1]")
      this.activityGoodsupdate = this.havePermissions("activityGoods:update[shopId=1]")
      this.activityGoodsdelete = this.havePermissions("activityGoods:delete[shopId=1]")
      this.activityGoodsonShelf = this.havePermissions("activityGoods:onShelf[shopId=1]")
      this.activityGoodsoffShelf = this.havePermissions("activityGoods:offShelf[shopId=1]")
      if (this.$route.query.page) {
        this.page = parseInt(this.$route.query.page);
      } else {
        this.page = 1;
      }

    },
    watch: {
      '$route': function (newUrl, oldUrl) {
        if (newUrl != oldUrl) {
          if (this.$route.query.page) {
            this.page = parseInt(this.$route.query.page);

          } else {
            this.page = 1;
          }
          this.getcommodityData('');//获取商品列表
        }
      }
    },
    mounted() {
      if (this.activityGoodsview) {
        this.getcommodityData('');//获取商品列表
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        this.activeIndex = key;
        this.page = 1;
        if (this.activeIndex == 0 || this.activeIndex == 1) {
          this.status = 0;
          if (this.activeIndex == 0) {
            this.soldOut = false;
          } else {
            this.soldOut = true;
          }
        } else {
          this.status = 1
        }
        this.getcommodityData('');//获取商品列表
        // console.log(key, keyPath);
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
      copyCommodity(id) {
        this.$confirm('确认复制商品?', '', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          Service.fxjactivity().copyGoods({}, id).then(response => {
            if (response.errorCode == 0) {
              this.$message({
                type: 'success',
                message: '复制成功!'
              });
              this.getcommodityData('search')
            } else {
              this.$message.error(response.message)
            }

          }, err => {
          });

        }).catch(() => {

        });
      },
      onoffcarriage(id) {
        this.$confirm('确认上架?', '', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          Service.fxjactivity().onshelfoods({}, id).then(response => {
            if (response.errorCode == 0) {
              this.$message({
                type: 'success',
                message: '上架成功!'
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
        this.$confirm('确认下架?', '', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          Service.fxjactivity().offshelfoods({}, id).then(response => {
            if (response.errorCode == 0) {
              this.$message({
                type: 'success',
                message: '下架成功!'
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
        this.$confirm('商品删除请谨慎操作，确定删除?', '', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          Service.fxjactivity().deleteGoods({}, id).then(response => {
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

      addCommodity() {
        this.$router.push({name: 'editorfxjcommodity'})
      },
      goDetail(id) {

        this.$router.push({name: 'editorfxjcommodity', query: {id: id}})
      },
      handleSizeChange(val) {
        this.size = val;
        this.getcommodityData('')
      },
      handleCurrentChange(val) {
        // this.page = val;
        this.$router.push({name: 'fxjcommodityList', query: {page: val}})
        // this.getcommodityData()
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
        var soldOut = '';
        if (this.status == 0) {
          soldOut = this.soldOut;
        }
        Service.fxjactivity().getGoods({
          "name": this.name,
          "page": this.page,
          "size": this.size,
          "status": this.status,
          soldOut: soldOut
        }).then(response => {
          if (response.errorCode == 0) {
            if (response.data.records.length == 0) {
              this.noData = false;
            } else {
              this.noData = true;
              this.total = response.data.total;
              for (let i in response.data.records) {
                if (response.data.records[i].name.length > 18) {
                  response.data.records[i].name = response.data.records[i].name.substring(0, 18) + '...'
                }
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

