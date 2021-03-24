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
                position: relative;
                line-height: 20px;

                .iconshengjiangxu {
                  font-size: 16px;
                  margin-left: 5px;
                }

                .iconwenhao {
                  font-size: 16px;
                  margin-left: 5px;
                }

                .warmText {
                  display: inline-block;
                  width: 200px;
                  padding: 10px;
                  line-height: 20px;
                  position: absolute;
                  background-color: #ffffff;
                  box-shadow: 0px 2px 24px 0px rgba(199, 199, 199, 0.51);
                  border-radius: 4px;
                  left: -2px;
                  bottom: 45px;
                  z-index: 10;
                }
              }

              th:nth-child(3) {
                text-align: left;
              }

              td {
                text-align: center;
                padding: 20px 0;

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

  /deep/ .el-select {
    width: 110px;
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
                <span class="searchLable colorGrey font12">购买者姓名 </span>
                <input type="text" v-model="name" class="serchInput font12 colorblack" placeholder="购买者姓名"/>
              </div>
              <div class="searchBox">
                <span class="searchLable colorGrey font12">购买者手机号</span>
                <input type="text" v-model="phone" class="serchInput font12 colorblack" placeholder="购买者手机号"/>
              </div>
              <div class="searchBox">
                <span class="searchLable colorGrey font12">来源</span>
                <el-select v-model="userType" placeholder="">
                  <el-option
                    v-for="item in fromList"
                    :key="item.name"
                    :label="item.name"
                    :value="item.id">
                  </el-option>
                </el-select>
              </div>
              <div class="bacButton cursor" @click="customerList('search')" v-show="customerView">查询</div>
            </div>

          </div>
          <div class="dataGeneral bannerTable">
            <table v-if="noData" class="table" v-show="customerView">
              <tr>
                <th v-for="(item,index) in sortDatas">
                  <div>
                    {{item.name}}
                    <i v-if="item.orderType == 'asc' && item.showBlue" @click='sortData(item)'
                       class=" iconshangsheng color2087 iconfont cursor"></i>
                    <i v-if="item.orderType == 'desc' && item.showBlue" @click='sortData(item)'
                       class="iconjiang color2087 iconfont cursor"></i>
                    <i v-if="!item.showBlue && item.orderType == 'asc'" @click='sortData(item)'
                       class="iconfont colorGrey cursor iconshangsheng"></i>
                    <i v-if="!item.showBlue && item.orderType == 'desc'" @click='sortData(item)'
                       class="iconfont colorGrey cursor iconjiang"></i>
                    <i v-if="index == 6" @mouseover="showspan = true" @mouseout="showspan = false"
                       class="iconfont cursor iconwenhao color2087"></i>
                    <span v-if="showspan && index ==6" class="warmText">历史购买所有订单金额的平均值</span>
                  </div>
                  <div>
                    {{item.tip}}
                  </div>
                </th>
              </tr>
              <tr v-for="(item,index) in tableData">
                <td>
                  {{item.id}}
                </td>
                <td>
                  {{item.name}}
                </td>
                <td>
                  {{item.phone}}
                </td>
                <td>
                  <span v-if="item.userType == 1"> 健康商城</span>
                  <span v-if="item.userType == 2"> 乐兹商城</span>
                </td>
                <td>
                  {{timetrans(item.createDate)}}
                </td>
                <td>{{item.orderCount}}</td>
                <td v-if="item.orderAvgAmount">
                  {{parseInt(item.orderAvgAmount)}}
                </td>
                <td v-if="!item.orderAvgAmount">
                  0
                </td>
              </tr>
            </table>
            <div v-if="!noData" class="noData">
              <img class="nodataImg" src="../../assets/images/nodatalist.png"/>
              <p>暂无数据~</p>
            </div>
            <div class="block" v-if="noData" v-show="customerView">
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
        showspan: false,
        orderField: '',
        orderType: '',
        sortDatas: [
          {orderType: '', name: '序号', showBlue: false, orderField: ''},
          {orderType: '', name: '姓名', showBlue: false, orderField: ''},
          {orderType: '', name: '手机号', showBlue: false, orderField: ''},
          {orderType: '', name: '来源', showBlue: false, orderField: ''},
          {orderType: '', name: '成为客户时间', showBlue: false, orderField: ''},
          {orderType: 'desc', name: '购买次数', showBlue: true, orderField: 'orderCount'},
          {orderType: 'desc', name: '客单价(元)', showBlue: false, orderField: 'orderAvgAmount'},
        ],
        userType: null,
        fromList: [{id: null, name: '全部'}, {id: 1, name: '健康商城'}, {id: 2, name: '乐兹商城'}],
        name: "",
        phone: "",
        status: '',
        type: '',
        total: 0,
        size: 10,
        page: 1,
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
        channelview: false,
        customerView: false
      };
    },
    created() {
      this.userInfo = JSON.parse(localStorage.getItem('user'));
      this.customerView = this.havePermissions('customer:view')
      this.channelview = this.havePermissions('channel:view')
    },
    watch: {},
    mounted() {
      if (this.channelview) {
        this.getChannel();
      }
      if (this.customerView) {
        this.customerList('');//获取客户列表
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
        this.customerList('search')
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
              this.customerList('');//获取商品列表
            } else {
              this.$message.error(response.message)
            }

          }, err => {
          });

        }).catch(() => {

        });
      },
      goDetail(id) {
        this.$router.push({name: 'editorcommondity', query: {id: id}})
      },
      handleSizeChange(val) {
        this.size = val;
        this.customerList('')
      },
      handleCurrentChange(val) {
        this.page = val;
        this.customerList('')
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
            this.channelsOption = response.data
          } else {
            this.$message.error(response.message)
          }

        }, err => {
        });
      },
      customerList(str) {
        if (str == 'search') {
          this.page = 1;
        }
        Service.customer().getcustomer({
          "phone": this.phone,
          "name": this.name,
          "page": this.page,
          "size": this.size,
          orderType: this.orderType,
          orderField: this.orderField,
          userType: this.userType,
        }).then(response => {
          if (response.errorCode == 0) {
            if (response.data.records.length == 0) {
              this.noData = false;
              console.log(this.noData)
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

