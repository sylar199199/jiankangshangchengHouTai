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
          padding: 20px 20px 0 20px;

          .searchContent {
            flex-wrap: wrap;
            position: relative;

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

              th:nth-child(3) {
                text-align: left;
              }

              td {
                text-align: center;
                padding: 8px;

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
                  width: 116px;
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
                    text-align: left;
                  }
                }

              }

              td:nth-of-type(2) {
                min-width: 180px;
                max-width: 300px;
                text-align: center;
              }

              td:nth-of-type(3) {
                text-align: left;

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
          <div class="dataGeneral backWhite">
            <div class="searchContent flex clear">
              <div class="searchBox">
                <span class="searchLable colorGrey font12">商品名称 </span>
                <input type="text" v-model="name" class="serchInput font12 colorblack" placeholder="商品名称"/>
              </div>
              <div class="searchBox flex">
                <span class="searchLable searchName colorGrey font12">收款渠道</span>
                <el-select v-model="collectionChannel" placeholder="">
                  <el-option
                    v-for="item in collectionChannelOption"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id">
                  </el-option>
                </el-select>
              </div>
              <div class="searchBox flex">
                <span class="searchLable searchName colorGrey font12">上架时间</span>
                <el-date-picker
                  @change="enddateChange"
                  v-model="insuranceDate"
                  type="daterange"
                  unlink-panels
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  :default-time="['00:00:00','23:59:59']">
                </el-date-picker>
              </div>
              <div class="searchBox flex">
                <span class="searchLable searchName colorGrey font12">所属渠道</span>
                <el-select v-model="channelId" placeholder="">
                  <el-option
                    v-for="item in channelsOption"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id">
                  </el-option>
                </el-select>
              </div>
              <div class="bacButton cursor" @click="getcommodityData('search')" v-show="goodsview">查询</div>
            </div>

          </div>
          <div class="dataGeneral bannerTable">
            <div class="borderButton cursor" @click="addCommodity()" v-show="goodsadd">新增商品</div>
            <table v-if="noData" class="table" v-show="goodsview">
              <tr>
                <th v-for="item in sortDatas" :key="item.name">
                  {{item.name}}
                  <i v-if="item.orderType == 'asc' && item.showBlue" @click='sortData(item)'
                     class=" iconshangsheng color2087 iconfont cursor"></i>
                  <i v-if="item.orderType == 'desc' && item.showBlue" @click='sortData(item)'
                     class="iconjiang color2087 iconfont cursor"></i>
                  <i v-if="!item.showBlue && item.orderType == 'asc'" @click='sortData(item)'
                     class="iconfont colorGrey cursor iconshangsheng"></i>
                  <i v-if="!item.showBlue && item.orderType == 'desc'" @click='sortData(item)'
                     class="iconfont colorGrey cursor iconjiang"></i>
                </th>
              </tr>
              <tr v-for="(item,index) in tableData" :key="item.id">
                <td>
                  {{item.id}}
                </td>
                <td>
                  <div class="flex">
                    <img class="productImg" :src="item.imgUrl">
                    <div class="productBox">
                      <p class="colorblack font12 productText">{{item.name}}</p>
                      <p class="colore6 font12 productText">￥{{item.minPrice}} - ￥{{item.maxPrice}}</p>
                    </div>
                  </div>
                </td>
                <td>
                  {{item.totalStock}}
                </td>
                <td>{{timetrans(item.saleStartDate)}}</td>
                <td>
                  <span v-if="(item.status == 0 && (item.saleStartDate <= Date.parse(new Date())))">在售中</span>
                  <span v-if="(item.status == 0 && (item.saleStartDate > Date.parse(new Date())))">待上架</span>
                  <span v-if="item.status == 1" @mouseover="showDes(item)" @mouseout="hideDes(item)">已下架</span>
                  <span v-if="item.isshowDes " class="undercarriageReason">{{item.statusDesc}}</span>
                </td>
                <td>
                  <span class="color2087 font12 cursor" v-show="goodsupdate" @click="goDetail(item.id)">编辑</span>
                  <span class="line" v-show="goodsupdate"></span>
                  <span class="color2087 font12 cursor" @click="undercarriage(item.id)"
                        v-show="goodsshelf"  v-if="(item.status == 0 && (item.saleStartDate <= Date.parse(new Date())))">下架</span>
                  <span class="line" v-show="goodsshelf" v-if="(item.status == 0 && (item.saleStartDate <= Date.parse(new Date())))"></span>
                  <span class="color2087 font12 cursor" @click="delectCommodity(item.id)" v-show="goodsdelete">删除</span>
                </td>

              </tr>
            </table>
            <div v-if="!noData" class="noData">
              <img class="nodataImg" src="../../assets/images/nodatalist.png"/>
              <p>暂无数据~</p>
            </div>
            <div class="block" v-if="noData" v-show="goodsview">
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
        rightsFlag: '',
        orderField: 'saleStartDate',
        orderType: 'desc',
        sortDatas: [
          {orderType: '', name: '编号', showBlue: false, orderField: ''},
          {orderType: '', name: '商品', showBlue: false, orderField: ''},
          {orderType: 'asc', name: '库存', showBlue: false, orderField: 'totalStock'},
          {orderType: 'desc', name: '上架时间', showBlue: true, orderField: 'saleStartDate'},
          {orderType: '', name: '状态', showBlue: false, orderField: ''},
          {orderType: '', name: '操作', showBlue: false, orderField: ''}
        ],
        endDate: "",
        name: "",
        startDate: "",
        status: '',
        type: '',
        total: 0,
        size: 10,
        page: 1,
        commodyId: '',
        shelfStatusId: '',
        channelId: '',
        collectionChannel: '',
        collectionChannelOption: [{name: '全部', id: ''}, {name: '昆仑', id: '1'}, {name: '分享家', id: '2'}],
        rightsOption: [{name: '全部', id: ''}, {name: '权益商品', id: '01'}, {name: '非权益商品', id: '02'}],
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
        channelsOption: [],
        permissions: [],

        goodsview: false,
        goodsadd: false,
        goodsupdate: false,
        goodsdelete: false,
        goodsshelf: false,
      };
    },
    created() {
      if (this.$route.query.page) {
        this.page = parseInt(this.$route.query.page);
      } else {
        this.page = 1;
      }

      this.goodsview = this.havePermissions("goods:view[shopId=1]")
      this.goodsadd = this.havePermissions("goods:add[shopId=1]")
      this.goodsupdate = this.havePermissions("goods:update[shopId=1]")
      this.goodsdelete = this.havePermissions("goods:delete[shopId=1]")
      this.goodsshelf = this.havePermissions("goods:offShelf[shopId=1]")
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
      if(this.goodsview){
        this.getcommodityData('');//获取商品列表
      }
      if(this.havePermissions("getChannel:view")){
        this.getChannel();
      }

    },
    methods: {
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
      undercarriage(id) {
        this.$confirm('确认下架?', '', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          Service.goods().offShelfGoods({}, id).then(response => {
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
          Service.goods().deleteGoods({}, id).then(response => {
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
        this.$router.push({name: 'editorcommondity'})
      },
      goDetail(id) {
        this.$router.push({name: 'editorcommondity', query: {id: id}})
      },
      handleSizeChange(val) {
        this.size = val;
        this.getcommodityData('')
      },
      handleCurrentChange(val) {
        this.$router.push({name: 'commoditymanage', query: {page: val}})
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
      getChannel() {
        Service.channel().getChannel({}).then(response => {
          if (response.errorCode == 0) {
            var selectData = response.data;
            selectData.unshift({id: '', name: '全部'});
            ;
            this.channelsOption = response.data;
            console.log(this.channelsOption)
          } else {
            this.$message.error(response.message)
          }

        }, err => {
        });
      },
      getcommodityData(str) {
        if (str == 'search') {
          this.page = 1;
        }
        var endDate = '', startDate = '';
        if (this.endDate || this.startDate) {
          endDate = Date.parse(new Date(this.endDate));
          startDate = Date.parse(new Date(this.startDate));
        } else {
          endDate = this.endDate;
          startDate = this.startDate;
        }
        Service.goods().getGoodsList({
          collectionChannel: this.collectionChannel,
          rightsFlag: this.rightsFlag,
          "channelId": this.channelId,
          "endDate": endDate,
          "name": this.name,
          "page": this.page,
          "size": this.size,
          "startDate": startDate,
          orderType: this.orderType,
          orderField: this.orderField,
          "status": '',
          "type": this.type,
          recommend: ''
        }).then(response => {
          if (response.errorCode == 0) {
            if (response.data.records.length == 0) {
              this.noData = false;
            } else {
              this.noData = true;
              this.total = response.data.total;
              for (let i in response.data.records) {
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

