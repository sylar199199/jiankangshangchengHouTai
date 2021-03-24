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
            font-size: 12px;
            border: 1px solid #f6f6f6;
            width: 967px;

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
                overflow: hidden;
              }
            }

            tr {
              border-bottom: 1px solid #f6f6f6;

              th {
                font-size: 12px;
                text-align: center;
                background: #f6f6f6;
                position: relative;
                line-height: 40px;
              }

              th:nth-of-type(1) {
                width: 60px;
              }

              th:nth-of-type(2) {
                text-align: left;
                padding-left: 10px;
              }

              td {
                height: 10px;
                text-align: center;
                padding: 8px 0;
              }

              td:nth-of-type(2) {
                width: 270px;
                position: relative;
                text-align: left;
                padding-left: 10px;
              }
            }
          }

          .noData {
            text-align: center;
            padding-top: 30px;
          }

          .dateTitle {
            .serchInput {
              width: 200px;
              height: 30px;
              line-height: 30px;
              border: 1px solid #e5e5e5;
              text-indent: 10px;
              border-radius: 2px;
              margin-left: 10px;
            }

            .bacButton {
              margin-left: 20px;

            }

            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 30px 0;
          }
        }

      }
    }
  }

  .baobiao {
    width: 80%;
    margin-left: 10%;
  }

  .marginTop10 {
    margin-top: 10px;
  }

  .textRight {
    text-align: right;
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
            <div class="fontWeight font16 colorblack">乐兹商诚商品排行
            </div>
            <div class="dateTitle marginTop10">
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
                placeholder="月份">
              </el-date-picker>
              <label class="marginLeft10">商品名称:</label>
              <input type="text" v-model="goodsName" class="serchInput font12 colorblack" placeholder="商品名称"/>
              <div class="bacButton" @click="shaixuan()" v-show="redeemranking">筛选</div>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center">
              <div class="fontWeight font14 colorblack" v-show="visitranking">访客数排行</div>
              <div class="bacButton" @click="daochu()" v-show="visitgexport">导出</div>
            </div>

            <table class="tableBox marginTop10" v-if="noDataUp" v-show="visitranking">
              <tr>
                <th v-for="(item,index) in sortDatasUp" :key="item.name">
                  {{item.name}}
                </th>
              </tr>
              <tr v-for="(item, index) in tableDateUp" :key="index">
                <td>{{index+1}}</td>
                <td>
                  <div class="flex">
                    <img class="productImg" :src="item.imgUrl">
                    <div class="productBox">
                      <p class="colorblack font12 productText">{{item.goodsName}}</p>
                      <p class="colorblack font12 productText marginLeft10"></p>
                    </div>
                  </div>
                </td>
                <td>{{item.visitorNums}}</td>
                <td>{{item.redeemOrderNums}}</td>
                <td>{{item.visitorToRedeemRate}}</td>
              </tr>

            </table>
            <div v-if="!noDataUp" class="noData">
              <img class="nodataImg" src="../../assets/images/nodatalist.png"/>
              <p>暂无数据~</p>
            </div>
            <div class="block textRight" v-if="noDataUp" v-show="redeemranking">
              <el-pagination
                @size-change="handleSizeChangeUp"
                @current-change="handleCurrentChangeUp"
                :current-page="pageUp"
                :page-size="sizeUp"
                :page-sizes="[5,10]"
                layout="total,sizes, prev, pager, next,jumper"
                :total="totalUp">
              </el-pagination>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center">
              <div class="fontWeight font14 colorblack">兑换数排行</div>
              <div class="bacButton" @click="daochuDown()" v-show="redeemexport">导出</div>
            </div>
            <table class="tableBox marginTop10" v-if="noDataDown" v-show="redeemranking">
              <tr>
                <th v-for="(item,index) in sortDatasDown" :key="item.name">
                  {{item.name}}
                </th>
              </tr>
              <tr v-for="(item, index) in tableDateDown" :key="index">
                <td>{{index+1}}</td>
                <td>
                  <div class="flex">
                    <img class="productImg" :src="item.imgUrl">
                    <div class="productBox">
                      <p class="colorblack font12 productText">{{item.goodsName}}</p>
                      <p class="colorblack font12 productText marginLeft10"></p>
                    </div>
                  </div>
                </td>
                <td>{{item.redeemUserNums}}</td>
                <td>{{item.totalPoints}}</td>
              </tr>

            </table>
            <div v-if="!noDataDown" class="noData">
              <img class="nodataImg" src="../../assets/images/nodatalist.png"/>
              <p>暂无数据~</p>
            </div>
            <div class="block textRight" v-if="noDataDown" v-show="redeemranking">
              <el-pagination
                @size-change="handleSizeChangeDown"
                @current-change="handleCurrentChangeDown"
                :current-page="pageUp"
                :page-size="sizeUp"
                :page-sizes="[5,10]"
                layout="total,sizes, prev, pager, next,jumper"
                :total="totalDown">
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

  export default {
    components: {
      Aside,
      KlTop,
    },
    data() {
      return {
        startTime: '',
        endTime: '',
        goodsName: '',
        contrastDate: this.defaultDate(), // 对比日期 默认昨天
        selectType: 1,
        noDataUp: true,
        typeOption: [
          {name: '自然日', value: 1},
          {name: '自然月', value: 2},
        ],
        pageUp: 1,
        sizeUp: 10,
        totalUp: 0,
        sortDatasUp: [
          {orderType: '', name: '排名', showBlue: false, orderField: ''},
          {orderType: '', name: '商品', showBlue: false, orderField: ''},
          {orderType: '', name: '访客人数', showBlue: false, orderField: ''},
          {orderType: '', name: '兑换次数', showBlue: false, orderField: ''},
          {orderType: '', name: '访问兑换转化率', showBlue: false, orderField: ''},
        ],
        tableDateUp: [],
        noDataDown: true,
        sortDatasDown: [
          {orderType: '', name: '排名', showBlue: false, orderField: ''},
          {orderType: '', name: '商品', showBlue: false, orderField: ''},
          {orderType: '', name: '兑换次数', showBlue: false, orderField: ''},
          {orderType: '', name: '支付积分', showBlue: false, orderField: ''},
        ],
        tableDateDown: [],
        pageDown: 1,
        sizeDown: 10,
        totalDown: 0,
        rateranking: false,
        redeemranking: false,
        visitranking: false,
        visitgexport: false,
        redeemexport: false,
      };
    },
    created() {
      localStorage.setItem('shopId', 2);
      this.rateranking = this.havePermissions('goods:rate:ranking[shopId=2]')
      this.visitranking = this.havePermissions('goods:visit:ranking[shopId=2]')
      this.redeemranking = this.havePermissions('goods:redeem:ranking[shopId=2]')
      this.visitgexport = this.havePermissions('goods:visit:ranking:export[shopId=2]')
      this.redeemexport = this.havePermissions('goods:redeem:ranking:export[shopId=2]')
    },
    mounted() {
      this.startTime = this.contrastDate // 开始日期
      this.endTime = this.contrastDate
      if (this.visitranking) {
        this.goodsvisitData(); // 访问排行
      }
      if (this.redeemranking) {
        this.goodsRedeemData(); // 乐兹商品兑换排行榜
      }
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
    methods: {
      async shaixuan() {
        this.sizeUp = 10
        this.sizeDown = 10
        this.pageUp = 1
        this.pageDown = 1
       await this.goodsvisitData();
       await this.goodsRedeemData();
      },
      defaultDate() {
        // 默认日期
        let now = new Date()
        now.setTime(now.getTime() - 24 * 60 * 60 * 1000);
        return now.getFullYear() + "/" + (now.getMonth() + 1) + "/" + now.getDate();
      },
      handleSizeChangeUp(val) {
        this.sizeUp = val
        this.goodsvisitData();
        this.goodsRedeemData();
      },
      handleCurrentChangeUp(val) {
        this.pageUp = val
        this.goodsvisitData();
        this.goodsRedeemData();
      },
      handleSizeChangeDown(val) {
        this.sizeDown = val
        this.goodsRedeemData();
        this.goodsvisitData();
      },
      handleCurrentChangeDown(val) {
        this.pageDown = val
        this.goodsRedeemData();
        this.goodsvisitData();
      },
      async goodsvisitData() { // 访问排行
        const rateResponse = await Service.lzdatacenter().lzvisitData({
          goodsName: this.goodsName,
          page: this.pageUp,
          size: this.sizeUp,
          startTime: this.startTime,
          endTime: this.endTime
        })
        if (rateResponse.errorCode != 0) {
          this.$message.error(rateResponse.message)
          return
        }
        if (rateResponse.data.records.length == 0) {
          this.noDataUp = false
        } else {
          this.noDataUp = true
          this.totalUp = rateResponse.data.total
          this.$nextTick(() => {
            this.tableDateUp = rateResponse.data.records
          })

        }
      },
      async goodsRedeemData() { // 兑换排行榜数据
        const rateResponse = await Service.lzdatacenter().redeemData({
          goodsName: this.goodsName,
          page: this.pageDown,
          size: this.sizeDown,
          startTime: this.startTime,
          endTime: this.endTime
        })
        if (rateResponse.errorCode != 0) {
          this.$message.error(rateResponse.message)
        }
        if (rateResponse.data.records.length == 0) {
          this.noDataDown = false
        } else {
          this.noDataDown = true
          this.totalDown = rateResponse.data.total
          this.$nextTick(() => {
            this.tableDateDown = rateResponse.data.records
          })
        }
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

      transParseDate(d) {
        // 中国标准时间转 年月日
        let todayString = d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate();
        return todayString
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
      timetrans(timestamp) {
        let d = new Date(timestamp);
        let newTime = d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate();
        return newTime
      },
      daochu() {
        Service.lzdatacenter().daochu({
          page: this.pageUp,
          size: this.sizeUp,
          startTime: this.startTime,
          endTime: this.endTime
        }).then(response => {
          if (response.errorCode == 0) {
            var blob = this.Decode(response.data);
            if (window.URL.createObjectURL(blob).indexOf(location.host) < 0) {//ie不支持
              this.href = window.navigator.msSaveOrOpenBlob(blob, '访客排行榜.xlsx');
            } else {
              this.href = URL.createObjectURL(blob);
            }
            this.downloadtable(this.href, '访客排行榜');
          } else {
            this.$message.error(response.message)
          }
        }, err => {
        });
      },
      daochuDown() {
        Service.lzdatacenter().daochuRedeem({
          page: this.pageUp,
          size: this.sizeUp,
          startTime: this.startTime,
          endTime: this.endTime
        }).then(response => {
          if (response.errorCode == 0) {
            var blob = this.Decode(response.data);
            if (window.URL.createObjectURL(blob).indexOf(location.host) < 0) {//ie不支持
              this.href = window.navigator.msSaveOrOpenBlob(blob, '兑换排行榜.xlsx');
            } else {
              this.href = URL.createObjectURL(blob);
            }
            this.downloadtable(this.href, '兑换排行榜');
          } else {
            this.$message.error(response.message)
          }
        }, err => {
        });
      },
      downloadtable(blobUrl, excelName) {
        const a = document.createElement('a');
        a.style.display = 'none';
        a.download = excelName;
        a.href = blobUrl;
        a.click();
      },
      Decode(arr) {
        var bstr = atob(arr), n = bstr.length, u8arr = new Uint8Array(n);
        while (n--) {
          u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
      },
    },

  }
</script>

