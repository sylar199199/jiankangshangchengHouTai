<style rel="stylesheet/scss" lang="scss" scoped>
  $baseFontSize: 192;
  .personInfo {
    position: fixed;
    top: 0;
    height: 100vh;
    width: 100%;
    left: 0;
    z-index: 1000;

    .dialogcontent {
      position: relative;
      height: 580px;
      background: #fff;
      width: 850px;
      display: flex;
      flex-direction: column;
      box-shadow: 0px 7px 59px 0px #cccccc;

      .iconshanchu {
        color: #D0CFCF;
        cursor: pointer;
        position: absolute;
        right: 16px;
        top: 10px;
      }

      .bannercontent {
        .dataGeneral {
          padding: 20px 20px 0 20px;

          .channnelTitle {
            padding-bottom: 16px;
          }

          .searchContent {
            flex-wrap: wrap;
            position: relative;

            .bacButton {
              margin-top: -6px;
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
          padding: 10px 0;
          max-height: 382px;
          overflow-y: auto;
          border-bottom: 10px solid #f4f4f4;

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
            margin: 0px 26px;
            width: 800px;

            th {
              font-size: 12px;
              text-align: center;
              background: #f6f6f6;

              .iconfont {
                font-size: 16px;
                margin-left: 5px;
              }
            }

            tr {
              border-bottom: 1px solid #f6f6f6;

              td {
                text-align: center;
                padding: 6px 10px;
                position: relative;

                .line {
                  display: inline-block;
                  height: 8px;
                  width: 3px;
                  background: #eee;
                  margin: 0 10px;
                }

                .productImg {
                  max-width: 70px;
                  max-height: 70px;
                }

                .productBox {
                  display: flex;
                  flex-direction: column;
                  height: 60px;
                  justify-content: space-between;
                  padding-left: 6px;

                  .productText {
                    margin-bottom: 0px;
                    margin-top: 0;
                  }
                }
              }

              td:nth-of-type(1) {
                .iconfont {
                  line-height: 70px;
                  margin-right: 6px;
                }

                .selectIcon {
                  height: 20px;
                  width: 20px;
                  margin-right: 6px;
                  line-height: 70px;
                }

                min-width: 150px;
                max-width: 300px;
                text-align: left;
                padding-left: 10px
              }

              td:nth-of-type(2) {
                text-align: center;
              }

              td:nth-of-type(3) {
                .imgicon {
                  display: inline-block;
                  vertical-align: middle;
                  height: 20px;
                  width: 20px;
                  padding-right: 10px;
                }
              }

              td:nth-of-type(4) {
                padding-left: 16px;
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
          position: fixed;
          bottom: 30px;
          right: 20px;
          margin-top: 10px;
          width: 100%;

          .sureBox {
            margin-top: 20px;
            line-height: 30px;
            justify-content: center;
          }
        }

      }

      .button {
        text-align: center;
        padding: 40px 0;
        font-size: 12px;
        width: 100%;
      }
    }
  }
</style>
<template>
  <div class="personInfo dialogbac">
    <div class="dialogcontent">
      <i class="iconfont iconshanchu" @click="cancleButton"></i>
      <div class="bannercontent">
        <div class="dataGeneral backWhite">

          <div class="searchContent itemscenter  flexBetween">
            <div class="channnelTitle">
              <span class="colorGrey font12 marginright10">已上架商品 <span v-if="showRed">（消耗积分大于0的商品）</span></span>
            </div>
            <div class="searchBox itemscenter">
              <span class="searchLable colorGrey font12">商品名称</span>
              <input type="text" class="serchInput font12 colorblack marginright10" v-model="name"
                     placeholder="请输入商品名称"/>
              <div class="bacButton cursor marginright10 marginLeft10" @click="getGuigeList('chaxun')">筛选</div>
            </div>
          </div>
        </div>
        <div class="dataGeneral bannerTable">
          <table v-if="noData" class="table">
            <tr>
              <th v-for="item in sortDatas" :key="item.name">
                {{item.name}}
              </th>
            </tr>
            <tr v-for="item in tableData">
              <td>
                <div class="flex">
                    <span v-if="source !='commoditygroup'">
                        <i class='iconfont iconchecked color2087' @click="selectAdver(item)"
                            v-if='item.isSelect &&(!item.hasSelect)'></i>
                        <i class='iconfont iconxuanze1 color2087' @click="selectAdver(item)"
                            v-if='!item.isSelect &&(!item.hasSelect)'></i>
                    </span>
                    <span v-if="source =='commoditygroup'">
                            <i class='iconfont iconchecked color2087' @click="selectAdver(item)"
                                v-if='item.isSelect &&(!item.hasSelect)'></i>
                            <i class='iconfont iconxuanze1 color2087' @click="selectAdver(item)"
                                v-if='!item.isSelect &&(!item.hasSelect)'></i>
                    </span>
                  <el-checkbox label="" v-if='item.isSelect &&(item.hasSelect)' class='selectIcon' disabled
                               v-model="checked2"></el-checkbox>
                  <img class="productImg" :src="item.imgUrl">
                  <div class="productBox">
                    <p class="colorblack font12 productText">{{item.name}}</p>
                    <p class="colore6 font12 productText">￥{{item.price}}</p>
                  </div>
                </div>
              </td>
              <td>
                <span v-if="source == 'addexchange'">{{item.points}}</span>
                <span v-if="source != 'addexchange' && item.consPoints"> {{item.consPoints}}</span>
                <span v-if="source != 'addexchange' && !item.consPoints">0</span>
              </td>
              <td>
                {{parseFloat(item.stock)}}
              </td>
              <td>{{timetrans(item.createDate)}}</td>
            </tr>
          </table>
          <div v-if="!noData" class="noData">
            <img class="nodataImg" src="../assets/images/nodatalist.png"/>
            <p>暂无数据~</p>
          </div>
        </div>
        <div class="block" v-if="noData">
          <div class="sureBox flex">
            <span class="selectText font12 colorGrey marginright10">已选{{selectNumber}}个商品</span>
            <div class="smallsureButton cursor" @click="getGoods()">确定</div>
            <div class="smallcancleButton cursor" @click="cancleButton()">取消</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Global from '@/common/global'
  import patternRules from '@/common/patternRules'
  import Service from '@/common/service'
  import Util from '@/common/util'
  import Filter from '@/common/filter'
  import Store from '@/vuex/index'

  export default {
    name: "creatSaleleads",
    props: {
      source: {
        type: String
      },
      groupId: {
        type: Number
      },
      limitgoodsdata: {
        type: Array
      },
      goodsdataq: {
        type: Object
      }
    },
    data() {
      return {
        page: 1,
        size: 10000,
        goodsDatas: [],
        checked2: true,
        checkList: [],
        selectNumber: 0,
        sortDatas: [{orderType: '', name: '商品', showBlue: true, orderField: ''}, {
          orderType: '',
          name: '消耗积分',
          showBlue: false,
          orderField: ''
        }, {orderType: 'asc', name: '剩余库存', showBlue: false, orderField: ''}, {
          orderType: 'desc',
          name: '创建时间',
          showBlue: false,
          orderField: ''
        }],
        name: '',
        orderField: 'productPlanNo',
        orderType: 'asc',
        total: null,
        statiusId: '',
        statiusOptions: [{name: '全部', id: ''}, {name: '已推荐', id: '0'}, {name: '未推荐', id: '1'}],
        tableData: [],
        noData: true,
        bindTime: '',
        userInfo: '',
        showCompany: false,
        searchValue: "",
        showSearchBox: false,
        searchOption: [],
        permissions: [],
        isAdd: "",
        isDelete: '',
        publishArr: [],
        showRed: false
      };
    },
    created() {
      if (this.source == 'addexchange') {
        this.showRed = true
      }
      if (this.goodsdataq) {
        this.goodsDatas.push(this.goodsdataq)
      }
      if (this.limitgoodsdata) {
        this.goodsDatas = this.limitgoodsdata;
      }
      this.userInfo = JSON.parse(localStorage.getItem('user'));
      if (this.userInfo) {
        this.permissions = this.userInfo.permissions;
      }
      this.getGuigeList('')
    },
    watch: {},
    mounted() {

    },
    methods: {
      handleSizeChange(val) {
        this.size = val;
        this.getcommodityData('')
      },
      handleCurrentChange(val) {
        this.page = val;
        this.getcommodityData('')
      },
      // 勾选了商品
      getGoods() {
        var goodsDatas = this.goodsDatas.concat(this.publishArr);
        if (goodsDatas.length > 1 && (this.source == 'addrafflebenefits' || this.source == 'addactiveh5' || this.source == 'converdetail' )) {
          this.$message.error('仅可选择1个商品')
          return
        }
        if (this.source == 'addrafflebenefits' || this.source == 'addactiveh5' || this.source == 'converdetail') {
          this.$emit('selectGuige', goodsDatas[0]);
        } else if (this.source == 'commoditygroup' || this.source == 'addmultigroup') {
          if(this.publishArr.length == 0){
             this.$message.error('请勾选需要关联的商品')
             return
          }
          if(this.source == 'commoditygroup'){
            this.$emit('selectGuige', this.publishArr);
          }else if(this.source == 'addmultigroup'){
            this.$emit('selectGuige', goodsDatas);
          }
        }else if (this.source == 'addluckdraw') {
            if(this.publishArr.length > 1){
              this.$message.error('仅可选择1个商品')
              return
            }
             this.$emit('selectGuige', this.publishArr[0]);
        } else {
          this.$emit('selectGuige', goodsDatas);
        }
        this.$emit('clickbanner', 'sure')
      },
      selectAdver(item) {
        item.isSelect = !item.isSelect;
        if (item.isSelect) {//选中
          this.publishArr.push(item)
        } else {
          var index = '';
          for (var i = 0; i < this.publishArr.length; i++) {
            if (item.id == this.publishArr[i].id) {
              index = i;
            }
          }
          this.publishArr.splice(index, 1);
        }
        console.log(this.publishArr)
        this.selectNumber = this.publishArr.length;
        this.$forceUpdate()
      },
      timetrans(timestamp) {
        var getSeconds = '', getMinutes = '', getHours = '';
        var d = new Date(timestamp);
        getHours = d.getHours() < 10 ? '0' + d.getHours() : d.getHours();
        getMinutes = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes();
        getSeconds = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds();
        var newTime = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + getHours + ':' + getMinutes + ':' + getSeconds;
        return newTime
      },
      getGuigeList(str) {
        if (str == 'chaxun') {
          this.page = 1;
        }
        Store.commit("setIsLoading", true);
        if (this.source == 'addlimitactive') {
          Service.flashSale().getlotterygoods({
            "name": this.name,
          }).then(response => {
            Store.commit("setIsLoading", false);
            if (response.errorCode == 0) {
              this.total = response.data.total;
              if (response.data.length != 0) {
                this.noData = true;
                var tableData = response.data;
                console.log()
                if (this.goodsDatas.length != 0) {
                  for (var j = 0; j < tableData.length; j++) {
                    for (var i = 0; i < this.goodsDatas.length; i++) {
                      tableData[j].isSelect = false;
                      tableData[j].hasSelect = false;
                      tableData[j].isSelect = false;
                      tableData[j].hasSelect = false;
                      tableData[j].isVirtualReduce = 0;
                      tableData[j].maxReduceNums = '';
                      tableData[j].perReduceNums = '';
                      tableData[j].perReduceSeconds = '';
                      if (this.goodsDatas[i] && tableData[j]) {
                        if (this.goodsDatas[i].id == tableData[j].id) {
                          tableData[j].isSelect = true;
                          tableData[j].hasSelect = true;
                          tableData[j].isVirtualReduce = this.goodsDatas[i].isVirtualReduce;
                          tableData[j].maxReduceNums = this.goodsDatas[i].maxReduceNums;
                          tableData[j].perReduceNums = this.goodsDatas[i].perReduceNums;
                          tableData[j].perReduceSeconds = this.goodsDatas[i].perReduceSeconds;
                          break;
                        }
                      }
                    }
                  }
                } else {
                  for (var j = 0; j < tableData.length; j++) {
                    tableData[j].isSelect = false;
                    tableData[j].hasSelect = false;
                  }
                }

                this.$nextTick(() => {
                  this.tableData = tableData;
                })
              } else {
                this.noData = false;
              }
            } else {
              this.$message.error(response.message);
              if (response.errorCode == 5001) {
                this.$router.push({"path": '/'})
              }
            }
          }, err => {
          });
        } else if (this.source == 'addrafflebenefits') {
          Service.lottery().getlotterygoods({
            "name": this.name,
             page: this.page,
            size: this.size,
          }).then(response => {
            Store.commit("setIsLoading", false);
            if (response.errorCode == 0) {
              this.total = response.data.total;
              if (response.data.length != 0) {
                this.noData = true;
                var tableData = response.data;
                if (this.goodsDatas.length != 0) {
                  for (var j = 0; j < tableData.length; j++) {
                    for (var i = 0; i < this.goodsDatas.length; i++) {
                      tableData[j].isSelect = false;
                      tableData[j].hasSelect = false;
                      if (this.goodsDatas[i] && tableData[j]) {
                        if (this.goodsDatas[i].id == tableData[j].id) {
                          tableData[j].isSelect = true;
                          tableData[j].hasSelect = true;
                          break;
                        }
                      }
                    }
                  }
                } else {
                  for (var j = 0; j < tableData.length; j++) {
                    tableData[j].isSelect = false;
                    tableData[j].hasSelect = false;
                  }
                }

                this.$nextTick(() => {
                  this.tableData = tableData;
                })
              } else {
                this.noData = false;
              }
            } else {
              this.$message.error(response.message);
              if (response.errorCode == 5001) {
                this.$router.push({"path": '/'})
              }
            }
          }, err => {
          });
        } else if (this.source == 'addactiveh5') {
          Service.activityh5().getactivityh5goods({
            "name": this.name,
             page: this.page,
            size: this.size,
          }).then(response => {
            Store.commit("setIsLoading", false);
            if (response.errorCode == 0) {
              this.total = response.data.total;
              if (response.data.length != 0) {
                this.noData = true;
                var tableData = response.data;
                if (this.goodsDatas.length != 0) {
                  for (var j = 0; j < tableData.length; j++) {
                    for (var i = 0; i < this.goodsDatas.length; i++) {
                      tableData[j].isSelect = false;
                      tableData[j].hasSelect = false;
                      if (this.goodsDatas[i] && tableData[j]) {
                        if (this.goodsDatas[i].id == tableData[j].id) {
                          tableData[j].isSelect = true;
                          tableData[j].hasSelect = true;
                          break;
                        }
                      }
                    }
                  }
                } else {
                  for (var j = 0; j < tableData.length; j++) {
                    tableData[j].isSelect = false;
                    tableData[j].hasSelect = false;
                  }
                }

                this.$nextTick(() => {
                  this.tableData = tableData;
                })
              } else {
                this.noData = false;
              }
            } else {
              this.$message.error(response.message);
              if (response.errorCode == 5001) {
                this.$router.push({"path": '/'})
              }
            }
          }, err => {
          });
        } else if (this.source == 'addluckdraw' || this.source == 'addmultigroup') {//抽奖只能选择一个商品，拼团可以多选
          Service.bigTurntable().getbigTurntablegoods({
            "name": this.name
          }).then(response => {
            Store.commit("setIsLoading", false);
            if (response.errorCode == 0) {
              this.total = response.data.total;
              if (response.data.length != 0) {
                this.noData = true;
                var tableData = response.data;
                this.selectNumber = this.goodsDatas.length;
                if (this.goodsDatas.length != 0) {
                  for (var j = 0; j < tableData.length; j++) {
                    for (var i = 0; i < this.goodsDatas.length; i++) {
                      tableData[j].isSelect = false;
                      tableData[j].hasSelect = false;
                      if (this.goodsDatas[i] && tableData[j]) {
                        if (this.goodsDatas[i].id == tableData[j].id) {
                          tableData[j].isSelect = true;
                          tableData[j].hasSelect = false;
                          this.publishArr.push(this.goodsDatas[i])
                          break;
                        }
                      }
                    }
                  }
                } else {
                  for (var j = 0; j < tableData.length; j++) {
                    tableData[j].isSelect = false;
                    tableData[j].hasSelect = false;
                  }
                }

                this.$nextTick(() => {
                  this.tableData = tableData;
                })
              } else {
                this.noData = false;
              }
            } else {
              this.$message.error(response.message);
              if (response.errorCode == 5001) {
                this.$router.push({"path": '/'})
              }
            }
          }, err => {
          });
        } else if (this.source == 'commoditygroup') {//其他活动的商品列表接口通用，分组的商品列表特殊
          Service.goodscategory().getlinkgoods({
            "name": this.name,
            activityId: this.groupId,
          }).then(response => {
            Store.commit("setIsLoading", false);
            if (response.errorCode == 0) {
              this.total = response.data.total;
              if (response.data.length != 0) {
                this.noData = true;
                var tableData = response.data;
                this.selectNumber = this.goodsDatas.length;
                if (this.goodsDatas.length != 0) {
                  for (var j = 0; j < tableData.length; j++) {
                    for (var i = 0; i < this.goodsDatas.length; i++) {
                      tableData[j].isSelect = false;
                      tableData[j].hasSelect = false;
                      if (this.goodsDatas[i] && tableData[j]) {
                        if (this.goodsDatas[i].id == tableData[j].id) {
                          tableData[j].isSelect = true;

                          this.publishArr.push(this.goodsDatas[i])
                          // tableData[j].hasSelect = true;
                          break;
                        }
                      }
                    }
                  }
                } else {
                  for (var j = 0; j < tableData.length; j++) {
                    tableData[j].isSelect = false;
                    tableData[j].hasSelect = false;
                  }
                }
                 console.log(this.goodsDatas)
                console.log(tableData)
                this.$nextTick(() => {
                  this.tableData = tableData;
                })
              } else {
                this.noData = false;
              }
            } else {
              this.$message.error(response.message);
              if (response.errorCode == 5001) {
                this.$router.push({"path": '/'})
              }
            }
          }, err => {
          });
        } else if (this.source == 'converdetail') {
          Service.redeem().redeemCodegoods({
            "name": this.name,
            soldOut: false,
            status: 0,
          }, str).then(response => {
            Store.commit("setIsLoading", false);
            if (response.errorCode == 0) {
              if (response.data.length != 0) {
                this.noData = true;
                var tableData = response.data;
                this.selectNumber = this.goodsDatas.length;
                if (this.goodsDatas.length != 0) {
                  for (var j = 0; j < tableData.length; j++) {
                    for (var i = 0; i < this.goodsDatas.length; i++) {
                      tableData[j].isSelect = false;
                      tableData[j].hasSelect = false;
                      if (this.goodsDatas[i] && tableData[j]) {
                        if (this.goodsDatas[i].id == tableData[j].id) {
                          tableData[j].isSelect = true;
                          tableData[j].hasSelect = true;
                          break;
                        }
                      }
                    }
                  }
                } else {
                  for (var j = 0; j < tableData.length; j++) {
                    tableData[j].isSelect = false;
                    tableData[j].hasSelect = false;
                  }
                }

                this.$nextTick(() => {
                  this.tableData = tableData;
                })
              } else {
                this.noData = false;
              }
            } else {
              this.$message.error(response.message);
              if (response.errorCode == 5001) {
                this.$router.push({"path": '/'})
              }
            }
          }, err => {
          });
        } else if (this.source == 'addexchange') {
          localStorage.setItem('shopId', 2)
          Service.lzredeem().getlzredeemgoods({
            "name": this.name,
            page: this.page,
            size: this.size,
            soldOut: false,
            status: 0,
          }).then(response => {
            Store.commit("setIsLoading", false);
            if (response.errorCode == 0) {
              if (response.data.length != 0) {
                this.noData = true;
                var tableData = response.data;
                this.selectNumber = this.goodsDatas.length;
                if (this.goodsDatas.length != 0) {
                  for (var j = 0; j < tableData.length; j++) {
                    for (var i = 0; i < this.goodsDatas.length; i++) {
                      tableData[j].isSelect = false;
                      tableData[j].hasSelect = false;
                      if (this.goodsDatas[i] && tableData[j]) {
                        if (this.goodsDatas[i].id == tableData[j].id) {
                          tableData[j].isSelect = true;
                          tableData[j].hasSelect = true;
                          break;
                        }
                      }
                    }
                  }
                } else {
                  for (var j = 0; j < tableData.length; j++) {
                    tableData[j].isSelect = false;
                    tableData[j].hasSelect = false;
                  }
                }

                this.$nextTick(() => {
                  this.tableData = tableData;
                })
              } else {
                this.noData = false;
              }
            } else {
              this.$message.error(response.message);
              if (response.errorCode == 5001) {
                this.$router.push({"path": '/'})
              }
            }
          }, err => {
          })
        }

      },
      handleSizeChange(val) {
        this.size = val;
        this.getGuigeList('')
      },
      handleCurrentChange(val) {
        this.page = val;
        this.getGuigeList('')
      },

      cancleButton() {
        this.$emit('clickbanner', 'cancle')
      },
    },
  }
</script>

