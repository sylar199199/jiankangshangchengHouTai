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
          .tableBox {
            .productImg {
              width: 116px;
              height: 60px;
              max-width: 116px;
              max-height: 60px;
            }

            .productBox {
              display: flex;
              height: 60px;
              line-height: 60px;
              justify-content: space-between;
              padding-left: 10px;

              .productText {
                margin-bottom: 0px;
                margin-top: 0;
                text-align: left;
                height: 60px;
                line-height: 60px;
              }
            }

            font-size: 12px;
            border: 1px solid #f6f6f6;
            width: 500px;

            tr {
              border-bottom: 1px solid #f6f6f6;

              th {
                font-size: 12px;
                text-align: center;
                background: #f6f6f6;
                position: relative;
                line-height: 40px;
              }

              th:nth-of-type(2) {
                text-align: left;
                padding-left: 10px;
              }

              td {
                text-align: center;
                padding: 8px 0;
              }

              td:nth-of-type(2) {
                width: 270px;
                position: relative;
                text-align: left;
                padding-left: 10px;
              }

              td:nth-of-type(3) {
              }

              td:nth-of-type(4) {
              }

            }
          }

          .noData {
            text-align: center;
            padding-top: 30px;
          }

          .dateTitle {
            display: flex;
            align-items: center;
          }

          .dataGenetalContent {
            padding-top: 20px;
          }

          .topDiv {
            .toptitle {
              margin: 30px 0;
            }

            display: flex;

            .topLeft {
              flex: 1;
            }

            .topRight {
              flex: 1;
              margin-left: 20px;
            }
          }
        }

        #analysis {
          width: 937px;
          height: 300px;
        }
      }
    }
  }

  .spaceBetween {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .baobiao {
    width: 80%;
    margin-left: 10%;
  }

  .marginTop10 {
    margin-top: 10px;
  }

  /deep/ .el-input__prefix {
    top: -1px;
  }
</style>
<template>
  <div class="general">
    <KlTop></KlTop>
    <div class="salecustomercontent contaner">
      <Aside></Aside>
      <div class="content">
        <div class="contanternews">
          <div class="dataGeneral  backWhite padding20">
            <div class="fontWeight font16 colorblack">健康商城商品排行
            </div>
            <div class="dateTitle marginTop10 spaceBetween">
              <div class="flex">
                <div>统计时间：</div>
                <el-select v-model="selectType" placeholder="" @change="changeType">
                  <el-option
                    v-for="item in typeOption"
                    :key="item.value"
                    :label="item.name"
                    :value="item.value">
                  </el-option>
                </el-select>
                <el-date-picker
                  v-if="selectType == 1"
                  class="marginLeft10"
                  v-model="contrastDate"
                  type="date"
                  align="right"
                  size="small"
                  placeholder="选择日期">
                </el-date-picker>
                <el-date-picker
                  v-if="selectType == 2"
                  class="marginLeft10"
                  v-model="contrastDate"
                  type="month"
                  align="right"
                  size="small"
                  placeholder="选择日期">
                  <i slot="suffix" class="el-input__icon el-icon-date"></i>
                </el-date-picker>
              </div>
              <div class="bacButton" @click="shaixuan()" v-show="visitranking">筛选</div>
            </div>
            <div class="topDiv" v-show="visitranking">
              <div class="topLeft">
                <div class="fontWeight font16 colorblack toptitle">访客数top20
                </div>
                <table class="tableBox" v-if="noDataLeft">
                  <tr>
                    <th v-for="(item,index) in sortDatasleft" :key="item.name">
                      {{item.name}}
                    </th>
                  </tr>
                  <tr v-for="(item, index) in tableDataLeft" :key="index">
                    <td>{{index+1}}</td>
                    <td>
                      <div class="flex">
                        <img class="productImg" :src="item.imgUrl">
                        <div class="productBox">
                          <p class="colorblack font12 productText marginLeft10">{{item.goodsName}}</p>
                        </div>
                      </div>
                    </td>
                    <td>{{item.uv}}</td>
                    <td>{{item.visitorToRedeemRate}}</td>
                  </tr>
                </table>
                <div v-if="!noDataLeft" class="noData">
                  <img class="nodataImg" src="../../assets/images/nodatalist.png"/>
                  <p>暂无数据~</p>
                </div>
              </div>
              <div class="topRight">
                <div class="fontWeight font16 colorblack toptitle">支付数top20
                </div>
                <table class="tableBox" v-if="noDataRight" v-show="pointsranking">
                  <tr>
                    <th v-for="(item,index) in sortDatasRight" :key="item.name">
                      {{item.name}}
                    </th>
                  </tr>
                  <tr v-for="(item, index) in tableDataRight" :key="index">
                    <td>{{index+1}}</td>
                    <td>
                      <div class="flex">
                        <img class="productImg" :src="item.imgUrl">
                        <div class="productBox">
                          <p class="colorblack font12 productText">{{item.goodsName}}</p>
                        </div>
                      </div>
                    </td>
                    <td>{{item.orderAmount}}</td>
                  </tr>

                </table>
                <div v-if="!noDataRight" class="noData">
                  <img class="nodataImg" src="../../assets/images/nodatalist.png"/>
                  <p>暂无数据~</p>
                </div>
              </div>
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

  export default {
    components: {
      Aside,
      KlTop,
    },
    data() {
      return {
        startTime: '',
        endTime: '',
        noDataLeft: true,
        noDataRight: true,
        totalLeft: '',
        totalRight: '',
        tableDataLeft: [],
        tableDataRight: [],
        contrastDate: this.defaultDate(), // 对比日期 默认昨天
        selectType: 1,
        typeOption: [
          {name: '自然日', value: 1},
          {name: '自然月', value: 2},
        ],
        sortDatasleft: [
          {orderType: '', name: '排名', showBlue: false, orderField: ''},
          {orderType: '', name: '商品', showBlue: false, orderField: ''},
          {orderType: '', name: '访客人数', showBlue: false, orderField: ''},
          {orderType: '', name: '访问兑换转化率', showBlue: false, orderField: ''},
        ],
        sortDatasRight: [
          {orderType: '', name: '排名', showBlue: false, orderField: ''},
          {orderType: '', name: '商品', showBlue: false, orderField: ''},
          {orderType: '', name: '实际支付金额', showBlue: false, orderField: ''},
        ],
        visitranking: false,
        pointsranking: false,
      };
    },
    watch:{
      contrastDate(val){
        // 改变查询日期
        if (this.selectType == 1) {
          this.startTime = this.timetrans(val)
          this.endTime = this.timetrans(val)
        }
        if (this.selectType == 2) {
          this.startTime = this.timetrans(val)
          this.endTime = this.mounthLast(val)
        }
      },
    },
    created() {
      this.visitranking = this.havePermissions('goods:visit:ranking[shopId=1]') // 访客数量排行
      this.pointsranking = this.havePermissions('goods:points:ranking[shopId=1]') // 支付数量排行
    },
    mounted() {
      this.startTime = this.contrastDate // 开始日期
      this.endTime = this.contrastDate
      if (this.visitranking) {
        this.goodsvisitData(); // 访客数量排行
      }
      if (this.pointsranking) {
        this.goodspointsData(); // 支付排行榜
      }
    },
    methods: {
      shaixuan() {
        this.goodsvisitData();
        this.goodspointsData();
      },
      defaultDate() {
        // 默认日期
        let now = new Date()
        now.setTime(now.getTime() - 24 * 60 * 60 * 1000);
        return now.getFullYear() + "/" + (now.getMonth() + 1) + "/" + now.getDate();
      },
      changeType(val) {
        if (this.selectType == 1) {
          this.contrastDate = this.transParseDate(new Date())
          this.startTime = this.transParseDate(new Date())
          this.endTime = this.transParseDate(new Date())
        }
        if (this.selectType == 2) {
          let d = new Date();
          this.contrastDate =  d.getFullYear()+'/' + (d.getMonth() + 1)
        }
      },
      mounthLast(timestamp) {
        // 当月的最后一天
        let d = new Date(timestamp);
        let newDataStr = null
        if (d.getMonth() == 11) {
          newDataStr = d.getFullYear() + 1 + '/' + 1 + '/' + d.getDate()
        } else {
          newDataStr = d.getFullYear() + '/' + (d.getMonth() + 2) + '/' + d.getDate()
        }
        let date = new Date(newDataStr);
        let result = date.getTime() - 1000 * 60 * 60 * 24;
        let time = new Date(result)
        let y = time.getFullYear();
        let m = time.getMonth() + 1;
        let day = time.getDate();
        return `${y}/${m}/${day}`
      },
      async goodsvisitData() { // 访客数量排行
        const rateResponse = await Service.lzdatacenter().visitData({
          page: 1,
          size: 100,
          startTime: this.startTime,
          endTime: this.endTime
        })
        if (rateResponse.errorCode != 0) {
          this.$message.error(rateResponse.message)
          this.noDataLeft = false
          return
        }
        if (rateResponse.data.records.length == 0) {
          this.noDataLeft = false
        } else {
          this.noDataLeft = true
          this.totalLeft = rateResponse.data.total
          this.$nextTick(() => {
            this.tableDataLeft = rateResponse.data.records
          })
        }
      },
      async goodspointsData() { // 支付排行榜
        const rateResponse = await Service.lzdatacenter().pointsData({
          page: 1,
          size: 100,
          startTime: this.startTime,
          endTime: this.endTime
        })
        if (rateResponse.errorCode != 0) {
          this.$message.error(rateResponse.message)
          this.noDataRight = false
          return
        }
        if (rateResponse.data.records.length == 0) {
          this.noDataRight = false
        } else {
          this.noDataRight = true
          this.totalRight = rateResponse.data.total
          this.$nextTick(() => {
            this.tableDataRight = rateResponse.data.records
          })
        }
      },
      transParseDate(d) {
        // 中国标准时间转 年月日
        let todayString = d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate();
        return todayString
      },
      timetrans(timestamp) {
        let d = new Date(timestamp);
        let newTime = d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate();
        return newTime
      },
    },

  }
</script>

