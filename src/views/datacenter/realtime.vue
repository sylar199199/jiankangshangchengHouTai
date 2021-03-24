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
            width: 937px;
            margin-bottom: 40px;

            tr {
              th {
                font-size: 12px;
                text-align: left;
                position: relative;
                line-height: 40px;
              }

              td {
                font-size: 16px;
                padding-left: 10px;
                font-weight: 600;
                text-align: left;
              }
            }
          }

          .dateTitle {
            display: flex;
            align-items: center;
          }

          .dataGenetalContent {
            padding-top: 20px;
          }
        }

        #analysis {
          width: 937px;
          height: 300px;
        }
      }
    }
  }

  .baobiao {
    width: 80%;
    margin-left: 10%;
  }

  /deep/ .el-input__prefix {
    top: -1px;
  }

  /deep/ .el-input {
    width: 150px;
  }
</style>
<template>
  <div class="general">
    <KlTop></KlTop>
    <div class="salecustomercontent contaner">
      <Aside></Aside>
      <div class="content">
        <div class="contanternews">
          <div class="dataGeneral  backWhite padding20"  v-show="realTimesurvey">
            <div class="fontWeight font16 colorblack">健康商城实时概况
            </div>
            <table class="tableBox">
              <tr>
                <th v-for="(item,index) in sortDatas" :key="item.name">
                  {{item.name}}
                </th>
              </tr>
              <tr>
                <td>{{contentData.pv}}</td>
                <td>{{contentData.uv}}</td>
                <td>{{contentData.orderCount}}</td>
                <td>{{contentData.orderAmount}}</td>
                <td>{{contentData.payedUserCount}}</td>
              </tr>
            </table>

            <div class="dateTitle">
              <div>对比日期：</div>
              <el-date-picker
                class="marginLeft10"
                v-model="contrastDate"
                type="date"
                align="right"
                size="small"
                @change="changeDate"
                placeholder="选择日期">
                <i slot="suffix" class="el-input__icon el-icon-date"></i>

              </el-date-picker>
            </div>

            <div id='analysis' v-show="prehoursurvey"></div>
            <div class="dataGenetalContent">
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
        todayDate: '',
        contrastDate: this.defaultDate(), // 对比日期 默认昨天
        sortDatas: [
          {orderType: '', name: '（今日）浏览量', showBlue: false, orderField: ''},
          {orderType: '', name: '（今日）访客数', showBlue: false, orderField: ''},
          {orderType: '', name: '（今日）支付订单数', showBlue: false, orderField: ''},
          {orderType: '', name: '（今日）支付订单金额', showBlue: false, orderField: ''},
          {orderType: '', name: '（今日）支付人数', showBlue: false, orderField: ''}
        ],
        contentData: {},
        erchartData: [],
        xdata: [],
        ydata: [],
        y2data: [],
        realTimesurvey: false,
        prehoursurvey: false,
      };
    },
    created() {
      this.userInfo = JSON.parse(localStorage.getItem('user'));

      this.realTimesurvey = this.havePermissions('realTime:survey[shopId=1]')
      this.prehoursurvey = this.havePermissions('prehour:survey[shopId=1]')
    },
    mounted() {
      if(this.prehoursurvey){
        this.getDataList(this.transParseDate(new Date()), this.defaultDate()); //
      }
      if(this.realTimesurvey){
        this.getTotalData(this.transParseDate(new Date())) // 获取日总数据
      }
    },
    methods: {
      async getTotalData(statsTime){
        // 今日数据获取
        const totalDate = await Service.lzdatacenter().lztotalsurvey({}, statsTime)
        if (totalDate.errorCode != 0) {
          let message = totalDate.message
          this.$message.error(message)
          return
        }
        this.contentData = totalDate.data
      },
      async getDataList(statsTime, yesterday) {
        // 初始化
        const todayDate = await Service.lzdatacenter().lzsurvey({}, statsTime)
        if (todayDate.errorCode != 0) {
          let message = totalDate.message
          this.$message.error(message)
        }
        this.xdata = todayDate.data.map(item => {
          return item.hourStr
        })
        this.ydata = todayDate.data.map(item => {
          return item.pv
        })
        // 对比数据获取
        const yesterdayDate = await Service.lzdatacenter().lzsurvey({}, yesterday)
        if (yesterdayDate.errorCode != 0) {this.$message.error(yesterdayDate.message)}
        this.y2data = yesterdayDate.data.map(item => {
          return item.pv
        })
        this.getanalysist(this.xdata, this.ydata, this.y2data)

      },
      // 生成echart
      getanalysist(xdata, ydata, y2data) {
        var myChart = this.echarts.init(document.getElementById('analysis'));
        myChart.clear();
        var option = {
          color: ['#41A3FC', '#F7BF65'],
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow',
            }
          },
          toolbox: {},
          legend: {
            data: ['今日浏览量', '对比浏览量']
          },
          xAxis: [
            {
              type: 'category',
              axisTick: {
                show: false
              },
              data: xdata,
              boundaryGap: false,
              axisPointer: {
                type: 'line',
              },
              axisLine: {
                lineStyle: {color: '#999999'}
              },
              axisLabel: {
                interval: 2,
              },
            }
          ],
          yAxis: [
            {
              type: 'value',
              axisTick: {
                show: false
              },
              name: '',
              axisLine: {
                lineStyle: {
                  width: 0,
                  color: '#999999'
                },
              },
              splitLine: {
                show: true,
                lineStyle: {
                  width: 1,
                  type: 'dotted'
                }
              },
              axisLabel: {
                formatter: '{value}'
              }
            },
          ],
          series: [
            {
              name: '今日浏览量',
              type: 'line',
              smooth: true,
              data: ydata
            },
            {
              name: '对比浏览量',
              type: 'line',
              smooth: true,
              data: y2data
            },
          ]
        };
        myChart.setOption(option)
      },
      defaultDate() {
        // 默认日期
        let now = new Date()
        now.setTime(now.getTime() - 24 * 60 * 60 * 1000);
        return now.getFullYear() + "/" + (now.getMonth() + 1) + "/" + now.getDate();
      },
      changeDate(val) {
        this.getDataList(this.transParseDate(new Date()), this.transParseDate(val))
      },
      sortData(item) {
        // 初始化列表
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
        this.getGoods('', 'search')
      },
      transParseDate(d) {
        let todayString = d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate();
        return todayString
      },

      // 日期转化
      timetrans(timestamp, type) {
        var d = new Date(timestamp);
        if (type == 'getmonth') {
          var newTime = d.getFullYear() + '-' + (d.getMonth() + 1);
        } else if (type == 'getday') {
          var newTime = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
        }
        return newTime
      },
    },

  }
</script>

