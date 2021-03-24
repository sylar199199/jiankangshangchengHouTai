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
          .downLoadButton {
            color: #56ae97;
            display: flex;
            align-items: center;
            justify-content: center;

            .iconxiazai {
              color: #56ae97;
              font-size: 18px;
            }

            border-radius: 20px;
            height: 38px;
            border: 1px solid #56ae97;
            width: 120px;
            text-align: center;
          }

          .dataGenetalTitle {
            border-bottom: 1px solid #f6f6f6;
            padding-bottom: 20px;

            .flextitle {
              display: flex;
              // flex-direction: column;
              align-items: flex-end;
            }

          }

          .dataGenetalContent {
            padding-top: 20px;

            .tableBox {
              font-size: 12px;
              border: 1px solid #f6f6f6;
              margin: 0px 20px 10px;
              width: 937px;

              tr {
                border-bottom: 1px solid #f6f6f6;

                th {
                  font-size: 12px;
                  text-align: center;
                  background: #f6f6f6;
                  position: relative;
                  line-height: 40px;

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
                    text-align: left;
                  }
                }

                th:nth-child(3) {
                  text-align: center;
                }

                td {
                  text-align: center;
                  padding: 8px 0;

                }

                td:nth-of-type(2) {
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

                td:nth-of-type(3) {
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

                td:nth-of-type(4) {
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

              }
            }
          }
        }

        .waitThing {
          margin-top: 20px;
          background: #fff;

          #analysis {
            width: 937px;
            height: 300px;
          }

          .waitThingLeft {
            width: 476px;
            margin-right: 24px;

            .dataGenetalTitle {
              border-bottom: 0;
            }

            .waitBox {
              width: 146px;
              height: 180px;
              border-radius: 4px;
              border: solid 1px #f6f6f6;
              text-align: center;
              margin-right: 20px;

              .waitTitle {
                width: 146px;
                height: 48px;
                color: #fff;
                line-height: 48px;
              }

              .countNumber {
                margin-top: 40px;
              }
            }

            .waitBox:last-child {
              margin-right: 0;
            }
          }

          .waitThingRight {
            /*width: 476px;*/
            position: relative;
            /*padding-right: 60px;*/
            .dataGenetalTitle {
              border-bottom: 0;
            }

            #rankbox {
              height: 300px;
              width: 436px;
            }
          }
        }
      }
    }
  }

  .baobiao {
    width: 80%;
    margin-left: 10%;
  }
</style>
<template>
  <div class="general">
    <KlTop></KlTop>
    <div class="salecustomercontent contaner">
      <Aside></Aside>
      <div class="content">
        <div class="contanternews">
          <div class="dataGeneral  backWhite padding20 waitThing ">

            <div class="flex" style="margin: 16px 0;">
              <div class="searchBox">
                <el-select v-model="selectday" placeholder="">
                  <el-option
                    v-for="item in timeOption"
                    :key="item.value"
                    :label="item.name"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
              <div class="searchBox flex font12" style="margin-left: 5px;">
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
              <div class="searchBox" style="margin-left: 15px;">
                <el-select v-model="selectid" placeholder="">
                  <el-option
                    v-for="item in normOption"
                    :key="item.goodsId"
                    :label="item.goodsName"
                    :value="item.goodsId">
                  </el-option>
                </el-select>
              </div>
            </div>
            <div id='analysis' v-show="statsOrder"></div>
            <div class="flex flexBetween" v-show="orderexportGoods">
              <div></div>
              <div class="downLoadButton cursor" style='margin-top: -10px;margin-right: 24px;' @click="daochu()"><i
                class="iconfont iconxiazai"></i>下载报表
              </div>
            </div>
            <div class="dataGenetalContent" v-show="orderGoods">

              <table class="tableBox">
                <tr>
                  <th v-for="(item,index) in sortDatas" :key="item.name">
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
                <tr v-for="item in dataTable" :key="item.time">
                  <td>{{item.goodsId}}</td>
                  <td>{{item.goodsName}}</td>
                  <td>{{item.userCount}}</td>
                  <td>{{item.orderAmount}}</td>
                  <td>{{item.orderCount}}</td>
                </tr>

              </table>
              <div v-if="dataTable.length == 0" class="noData">
                <img class="nodataImg" src="../../assets/images/nodatalist.png"/>
                <p>暂无数据~</p>
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
    name: "salecustomer",
    components: {
      Aside,
      KlTop,
    },
    data() {
      return {
        href: '',
        dialogFormVisible: false,
        sortDatas: [
          {orderType: '', name: '商品编号', showBlue: false, orderField: ''},
          {orderType: '', name: '商品名称', showBlue: false, orderField: ''},
          {orderType: 'asc', name: '下单客户(人)', showBlue: false, orderField: 'userCount'},
          {orderType: 'asc', name: '收入金额(元)', showBlue: false, orderField: 'orderAmount'},
          {orderType: 'asc', name: '订单数(个)', showBlue: false, orderField: 'orderCount'}
        ],
        selectday: 2,
        timeOption: [
          {name: '今日', value: 1},
          {name: '最近7天', value: 2},
          {name: '最近30天', value: 3}
        ],
        selectid: '',
        normOption: [],
        orderType: '',
        orderField: '',
        today: null,
        showOne: false,
        showTwo: false,
        showThree: false,
        showFour: false,
        xData: [],
        yData: [],
        getoverviewCount: null,
        todoCount: null,
        startDate: '',
        endDate: '',
        insuranceDate: [],
        dataTable: [],
        dwstartDate: '',
        dwendDate: '',

        statsOrder: false, // 分析图
        orderGoods: false, // 分析数据统计
        orderexportGoods: false, // 导出数据统计

      };
    },
    created() {
      this.statsOrder = this.havePermissions('home:statsOrder[shopId=1]')
      this.orderGoods = this.havePermissions('home:orderGoods[shopId=1]')
      this.orderexportGoods = this.havePermissions('home:orderGoods:export[shopId=1]')
    },
    watch: {
      'selectday': function () {
        if (this.selectday) {
          if (this.selectday == 2) {
            this.getDay(-6, this.selectid)
          } else if (this.selectday == 1) {
            this.getDay(0, this.selectid)
          } else if (this.selectday == 3) {
            this.getDay(-29, this.selectid)
          }
        } else {
        }
      },
      'selectid': function () {
        if (this.selectday == 2) {
          this.getDay(-6, this.selectid)
        } else if (this.selectday == 1) {
          this.getDay(0, this.selectid)
        } else if (this.selectday == 3) {
          this.getDay(-29, this.selectid)
        }
      }
    },
    mounted() {
      if (this.statsOrder) {
        this.getDay(-6, '');
      }
      if (this.orderGoods) {
        this.goodsList();
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
        this.getGoods('', 'search')
      },
      daochu() {
        Service.home().goodsexport({
          startDate: this.dwstartDate,
          endDate: this.dwendDate,
          goodsId: this.selectid,
          orderType: this.orderType,
          orderField: this.orderField
        }).then(response => {
          if (response.errorCode == 0) {
            var blob = this.Decode(response.data);
            if (window.URL.createObjectURL(blob).indexOf(location.host) < 0) {//ie不支持
              this.href = window.navigator.msSaveOrOpenBlob(blob, '报表.xlsx');
            } else {
              this.href = URL.createObjectURL(blob);
            }
            this.downloadtable(this.href);
          } else {
            this.$message.error(response.message)
          }

        }, err => {
        });
      },
      downloadtable(blobUrl) {
        const a = document.createElement('a');
        a.style.display = 'none';
        a.download = '报表.xlsx';
        a.href = blobUrl;
        a.click();
      },
      goodsList() {
        Service.home().goodsList({}).then(response => {
          if (response.errorCode == 0) {
            var data = response.data;
            var obj = {goodsId: '', goodsName: '全部商品'};
            data.unshift(obj);
            this.normOption = data;
          } else {
            this.$message.error(response.message)
          }
        }, err => {
        });
      },
      Decode(arr) {
        var bstr = atob(arr), n = bstr.length, u8arr = new Uint8Array(n);
        while (n--) {
          u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
      },
      //商品订单
      getGoods(startDate, source) {
        if (!source) {
          if (startDate) {
            this.insuranceDate = [];
            var endDate = new Date().getTime();
            this.insuranceDate.push(new Date(startDate));
            this.insuranceDate.push(new Date())
            var startDate = startDate;
          } else {
            var endDate = Date.parse(new Date(this.endDate.replace(/-/g, "/")));
            var startDate = Date.parse(new Date(this.startDate.replace(/-/g, "/")));
          }
          this.dwstartDate = startDate;
          this.dwendDate = endDate;
        } else {
          var startDate = this.dwstartDate;
          var endDate = this.dwendDate
        }
        Service.home().goodsOrder({
          orderType: this.orderType,
          orderField: this.orderField,
          startDate: startDate,
          goodsId: this.selectid,
          endDate: endDate
        }).then(response => {
          if (response.errorCode == 0) {
            this.dataTable = response.data;
            this.gettodayorder(startDate, endDate)
          } else {
            this.$message.error(response.message)
          }
        }, err => {
        });
      },
      getDay(day, type, source) {
        var today = new Date();
        var targetday_milliseconds = today.getTime() + 1000 * 60 * 60 * 24 * day;
        today.setTime(targetday_milliseconds); //注意，这行是关键代码
        if (type == "getday") {
          var tYear = today.getFullYear();
          var tMonth = today.getMonth();
          var tDate = today.getDate();
          tMonth = this.doHandleMonth(tMonth + 1);
          tDate = this.doHandleMonth(tDate);
          return tYear + "-" + tMonth + "-" + tDate;
        } else {
          this.getGoods(targetday_milliseconds)
        }
      },
      enddateChange(val) {
        if (val) {
          this.startDate = this.timetrans(val[0], 'getday');
          this.endDate = this.timetrans(val[1], 'getday');
          this.selectday = '选择区间'
          this.getGoods('', '')
        } else {
          this.startDate = '';
          this.endDate = '';
        }
      },
      timetrans(timestamp, type) {
        var d = new Date(timestamp);
        if (type == 'getmonth') {
          var newTime = d.getFullYear() + '-' + (d.getMonth() + 1);
        } else if (type == 'getday') {
          var newTime = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
        }
        return newTime
      },
      //获取日订单
      gettodayorder(startDate, endDate) {
        Service.home().orderday({
          startDate: startDate,
          endDate: endDate,
          goodsId: this.selectid
        }).then(response => {
          if (response.errorCode == 0) {
            var data = response.data;
            var xdata = [], y1data = [], y2data = [], y3data = [];
            for (var i = 0; i < data.length; i++) {
              xdata.push(this.timetrans((data[i].date), 'getday'));
              y1data.push(data[i].userCount);
              y2data.push(data[i].orderAmount);
              y3data.push(data[i].orderCount);
            }
            this.resetpvuvData(xdata, y1data, y2data, y3data)
          } else {
            this.$message.error(response.message)
          }

        }, err => {
        });
      },

      //pv uv坐标抽
      resetpvuvData(xdata, y1data, y2data, y3data) {
        var myChart = this.echarts.init(document.getElementById('analysis'));
        myChart.clear();
        var option = {
          color: ['#56ae97', '#F7BF65'],
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              crossStyle: {
                color: '#999'
              }
            }
          },
          toolbox: {},
          legend: {
            data: ['下单客户', '订单数量', '订单收入']
          },
          xAxis: [
            {
              type: 'category',
              data: xdata,
              axisPointer: {
                type: 'shadow'
              }
            }
          ],
          yAxis: [
            {
              type: 'value',
              name: '数量',
              splitLine: {
                show: false
              },
              axisLabel: {
                formatter: '{value} '
              }
            },
            {
              type: 'value',
              name: '订单收入(元)',
              splitLine: {
                show: false
              },
              axisLabel: {
                formatter: '{value}'
              }
            }
          ],
          series: [
            {
              name: '下单客户',
              type: 'line',
              data: y1data
            },
            {
              name: '订单数量',
              type: 'line',
              data: y3data
            },

            {
              name: '订单收入',
              type: 'line',
              yAxisIndex: 1,
              data: y2data
            }
          ]
        };
        // var option = {
        //      color: ['#56ae97','#F7BF65','#2FC100'],
        //      tooltip: {
        //             trigger: 'axis',
        //             axisPointer: {
        //                 type: 'cross',
        //                 crossStyle: {
        //                     color: '#999'
        //                 }
        //             }
        //         },
        //     legend: {
        //         data: ['下单客户', '订单数量','订单收入']
        //     },
        //     xAxis: [
        //          {
        //             type: 'category',
        //             data: xdata,
        //             axisPointer: {
        //                 type: 'shadow'
        //             }
        //         }
        //     ],

        //     yAxis: [
        //         {
        //             type: 'value',
        //             name:'下单客户',
        //             axisLabel: {
        //                 formatter: '{value}'
        //             }
        //         },
        //         {
        //             type: 'value',
        //             name:'订单收入',
        //             axisLabel: {
        //                 formatter: '{value}'
        //             }
        //         }
        //     ],
        //     series: [
        //         {
        //             name: '下单客户',
        //             type: 'line',
        //             data: y1data,
        //         },

        //          {
        //             name: '订单收入',
        //             type: 'line',
        //             data: y2data
        //         },
        //     ]
        // };
        myChart.setOption(option)
      },


      doHandleMonth(month) {
        var m = month;
        if (month.toString().length == 1) {
          m = "0" + month;
        }
        return m;
      },
      getPassYearFormatDate(type) {
        var nowDate = new Date();
        var date = new Date(nowDate);
        date.setDate(date.getDate() - 365);
        if (type == 1) {//pv uv
          this.gettomonthuvpv(date.getTime())
        } else if (type == 2) {//注册用户
          this.gettomonthuser(date.getTime())
        } else if (type == 4) {//订单
          this.gettomonthorder(date.getTime())
        }
      },

      getanalysistwo(xd, y1d, y2d) {
        var myChart = this.echarts.init(document.getElementById('analysis'));
        myChart.clear()
        var option = {
          color: ['#56ae97', '#F7BF65'],
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              crossStyle: {
                color: '#999'
              }
            }
          },
          toolbox: {},
          legend: {
            data: ['注册用户', '注册转化率']
          },
          xAxis: [
            {
              type: 'category',
              data: xd,
              axisPointer: {
                type: 'shadow'
              }
            }
          ],
          yAxis: [
            {
              type: 'value',
              name: '注册用户(个)',

              axisLabel: {
                formatter: '{value} '
              }
            },
            {
              type: 'value',
              name: '注册转化率',

              axisLabel: {
                formatter: '{value}'
              }
            }
          ],
          series: [
            {
              name: '注册用户',
              type: 'line',
              data: y1d
            },

            {
              name: '注册转化率',
              type: 'line',
              yAxisIndex: 1,
              data: y2d
            }
          ]
        };
        myChart.setOption(option)
      },
    },

  }
</script>

