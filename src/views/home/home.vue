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
          .dataGenetalTitle {
            border-bottom: 1px solid #f6f6f6;
            padding-bottom: 20px;

            .flextitle {
              display: flex;
              // flex-direction: column;
              align-items: flex-end;
            }

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
          }

          .dataGenetalContent {
            padding-top: 20px;
            min-height: 270px;

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
              width: 136px;
              height: 180px;
              border-radius: 4px;
              border: solid 1px #f6f6f6;
              text-align: center;
              margin-right: 20px;
              margin-bottom: 14px;

              .waitTitle {
                width: 136px;
                height: 48px;
                color: #fff;
                line-height: 48px;
              }
              .blcakTitle {
                width: 136px;
                height: 48px;
                color: #000;
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
    width: 90%;
    margin-left: 5%;
    text-align: center;
  }

</style>
<template>
  <div class="general">
    <KlTop></KlTop>
    <div class="salecustomercontent contaner">
      <Aside></Aside>
      <div class="content">
        <div>
          <el-dialog title="下载报表" class="baobiao" :visible.sync="dialogFormVisible" center>
            <div class="font14">
              <div class="radioBox marginLeft10">
                <div>
                  <i class="iconfont iconxuanzhong color2087 font20 cursor cursor" v-if="shelvesType==0"></i>
                  <i class="iconfont iconxuanze  font20 cursor" v-if="shelvesType!= 0" @click="shelvesType = 0"></i>
                  <span class="colorblack font14">导出默认格式</span>
                </div>
                <div style="margin-top: 15px;">
                  <i class="iconfont iconxuanzhong color2087 font20 cursor" v-if="shelvesType==1"></i>
                  <i class="iconfont iconxuanze  font20 cursor" v-if="shelvesType !=1" @click="shelvesType = 1"></i>
                  <span class="colorblack font14">按天导出</span>
                </div>
                 <div style="margin-top: 15px;">
                  <i class="iconfont iconxuanzhong color2087 font20 cursor" v-if="shelvesType==2"></i>
                  <i class="iconfont iconxuanze  font20 cursor" v-if="shelvesType !=2" @click="shelvesType = 2"></i>
                  <span class="colorblack font14">按时间段导出</span>
                </div>

              </div>
              <div class="searchBox" v-if="shelvesType != 0" style="margin-top: 16px;margin-left: 10px;">
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
            </div>

            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="daochu()">确 定</el-button>
            </div>
          </el-dialog>
        </div>

        <div class="contanternews">
          <div class="dataGeneral backWhite padding20" v-if="showOverview">
            <div class="dataGenetalTitle flex flexBetween">
              <div class='flextitle'>
                <span class="colorblack font16 fontWeight marginright10">健康商城概况</span>
                <span class="colorGrey font12">{{today}}</span>
              </div>
              <div class="downLoadButton cursor" @click="dialogFormVisible = true" v-show="homeViewExport"><i class="iconfont iconxiazai"></i>下载报表
              </div>
            </div>

            <div class="dataGenetalContent">

              <table class="tableBox">
                <tr>
                  <th v-for="(item,index) in sortDatas" :key="item.name">
                    {{item.name}}
                    <i v-if="index == 1 || index == 2 || index == 3" @mouseover="item.showspan = true"
                       @mouseout="item.showspan = false" class="iconfont cursor iconwenhao color2087"></i>
                    <span v-if="item.showspan && index == 1" class="warmText">即通常说的PV（PageView）值，用户每打开1个网站页面，记录1个PV。用户多次打开同一页面PV累计多次</span>
                    <span v-if="item.showspan && index == 2" class="warmText">1天（00:00-24:00）之内，访问网站的不重复用户数（以浏览器cookie为依据），一天内同一访客多次访问网站只被计算1次。</span>
                    <span v-if="item.showspan && index == 3" class="warmText">平均每个独立访客产生的PV。人均浏览页数=浏览次数/独立访客。体现网站对访客的吸引程度</span>
                  </th>

                </tr>
                <tr v-for="item in dataTable" :key="item.time">
                  <td>{{item.time}}</td>
                  <td>{{item.pv}}</td>
                  <td>{{item.uv}}</td>
                  <td>{{item.puv}}</td>
                  <td>{{item.regUser}}</td>
                  <td>{{item.customerCount}}</td>
                  <td>{{item.orderCount}}</td>
                  <td>
                    <span v-if="item.orderAmount">{{item.orderAmount}}</span>
                    <span v-if="!item.orderAmount">0</span>
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div class="dataGeneral  backWhite padding20 waitThing" v-show="showtrend">
            <div class="dataGenetalTitle">
              <span class="colorblack font16 fontWeight marginright10">健康商城数据趋势图</span>
            </div>
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
              <div class="searchBox" style="margin-left: 10px;">
                <el-select v-model="selectnorm" placeholder="">
                  <el-option
                    v-for="item in normOption"
                    :key="item.value"
                    :label="item.name"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </div>
            <div id='analysis'></div>
          </div>
          <div class="dataGeneral   waitThing flex">
            <div class="waitThingLeft backWhite padding20" v-show="showtodo">
              <div class="dataGenetalTitle">
                <span class="colorblack font16 fontWeight marginright10" >健康商城自营商品待办事项</span>
              </div>
              <div class="flexWrap" v-if="todoCount" >
                <div class="waitBox cursor" @click="goList(1)" v-show="goList1">
                  <div class="waitTitle backf7 font12">待发货</div>
                  <p class="countNumber fontWeight colorblack font28">{{todoCount && todoCount.shipCount}}</p>
                </div>
                <div class="waitBox cursor"  v-show="goList2">
                  <div class="waitTitle back89 font12" @click="goList(2)">退货中</div>
                  <p class="countNumber fontWeight colorblack font28">{{todoCount && todoCount.returnCount}}</p>
                </div>
                <div class="waitBox cursor" v-show="goList2">
                  <div class="waitTitle backfb font12" @click="goList(3)" >退款中</div>
                  <p class="countNumber fontWeight colorblack font28">{{todoCount && todoCount.refundCount}}</p>
                </div>
                <div class="waitBox cursor" v-show="goright">
                  <div class="waitTitle backfb font12" @click="gorightList()">待审核</div>
                  <p class="countNumber fontWeight colorblack font28">{{todoCount && todoCount.auditCount}}</p>
                </div>
              </div>
            </div>
            <div class="waitThingRight backWhite padding20" v-show="showhotsale">
              <div class="dataGenetalTitle flexBetween">
                <span class="colorblack font16 fontWeight marginright10">热销商品TOP5</span>
                <span class="cursor colorblue font14" style="color:#56ae97;" @click="goGoods()">查看详情》</span>
              </div>
              <div id="rankbox">
              </div>
            </div>
          </div>
          <div class="dataGeneral   waitThing flex" v-if="showtodo">
            <div class="waitThingLeft backWhite padding20">
              <div class="dataGenetalTitle">
                <span class="colorblack font16 fontWeight marginright10">健康商城外采商品待办事项</span>
              </div>
              <div class="flexWrap" >
                <div class="waitBox cursor" @click="gofxjList(1)" v-show="gofxjList1">
                  <div class="waitTitle backf7 font12">待发货</div>
                  <p class="countNumber fontWeight colorblack font28">{{fxjtodoCount && fxjtodoCount.shipCount}}</p>
                </div>
                <div class="waitBox backf waitTitle cursor" @click="gofxjList(2)" v-show="gofxjList2">
                  <div class="waitTitle back89 font12">退货中</div>
                  <p class="countNumber fontWeight colorblack font28">{{fxjtodoCount && fxjtodoCount.returnCount}}</p>
                </div>
                <div class="waitBox cursor waitTitle" @click="gofxjList(3)" v-show="gofxjList2">
                  <div class="waitTitle backfb font12">退款中</div>
                  <p class="countNumber fontWeight colorblack font28">{{fxjtodoCount && fxjtodoCount.refundCount}}</p>
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
    name: "salecustomer",
    components: {
      Aside,
      KlTop,
    },
    data() {
      return {
        shelvesType: 0,
        href: '',
        pickerOptions: {
          disabledDate(time) {
            let curDate = (new Date()).getTime();
            let three = 90 * 24 * 3600 * 1000;
            let threeMonths = curDate - three;
            return time.getTime() < threeMonths;
          }
        },
        dialogFormVisible: false,
        sortDatas: [
          {orderType: '', name: '', showspan: false, orderField: ''},
          {orderType: '', name: '浏览次数(pv)', showspan: false, orderField: ''},
          {orderType: '', name: '独立访客(uv)', showspan: false, orderField: ''},
          {orderType: '', name: '人均浏览页数(pv/uv)', showspan: false, orderField: ''},
          {orderType: 'desc', name: '注册人数(人)', showspan: false, orderField: ''},
          {orderType: 'desc', name: '下单客户(人)', showspan: false, orderField: ''},
          {orderType: 'desc', name: '订单数(个)', showspan: false, orderField: ''},
          {orderType: 'desc', name: '订单收入(元)', showspan: false, orderField: ''}
        ],
        selectday: 1,
        timeOption: [
          {name: '最近30天', value: 1},
          {name: '最近7天', value: 2},
          {name: '最近12个月', value: 3}
        ],
        selectnorm: 1,
        normOption: [
          {name: '浏览指标（uv、pv）', value: 1},
          {name: '注册用户', value: 2},
          {name: '订单收入', value: 3},
          {name: '订单数量', value: 4}
        ],
        today: null,
        showOne: false,
        showTwo: false,
        showThree: false,
        showFour: false,
        xData: [],
        yData: [],
        getoverviewCount: null,
        todoCount: null,
        fxjtodoCount: null,
        startDate: '',
        endDate: '',
        insuranceDate: '',
        dataTable: [],
        userInfo: '',

        showOverview: false, // 数据概况权限
        showtrend: false, // 数据趋势图权限
        showtodo: false, // 代办事项权限
        showhotsale: false, // 热销上商品权限
        homeViewExport: false, // 导出

        gofxjList1: false,
        gofxjList2: false,
        goList1: false,
        goList2: false,
        goright: false,
      };
    },
    created() {
      this.today = this.getDay(0, 'getday');
      this.showOverview = this.havePermissions('home:overview[shopId=1]')
      this.showtrend = this.havePermissions('home:trend[shopId=1]')
      this.showtodo = this.havePermissions('home:todo[shopId=1]')
      this.showhotsale = this.havePermissions('home:hotsale[shopId=1]')
      this.homeViewExport = this.havePermissions('home:overview:export[shopId=1]')

      this.gofxjList1 = this.havePermissions('order:importExpress[shopId=1]')
      this.gofxjList2 = this.havePermissions('order:after:sale[shopId=1]')

      this.goList1 = this.havePermissions('kl:order:importExpress[shopId=1]')
      this.goList2 = this.havePermissions('kl:order:after:sale[shopId=1]')
      this.goright = this.havePermissions('rightsOrder:audit:approve')
    },
    mounted() {
      if(this.showOverview){
        this.overviewtable()//概览表格
      }
      if(this.showtrend){
        this.getDay(-29, this.selectnorm)//获取30天的
      }
      if(this.showhotsale){
        this.gethotsale();
      }
      if(this.showtodo){
        this.gettodo();
      }
    },
    watch: {
      'selectday': function () {
        if (this.selectday) {
          if (this.selectday == 1) {
            this.getDay(-29, this.selectnorm)
          } else if (this.selectday == 2) {
            this.getDay(-6, this.selectnorm)
          } else if (this.selectday == 3) {
            this.getPassYearFormatDate(this.selectnorm)
          }
        } else {
        }
      },
      'selectnorm': function () {
        if (this.selectnorm) {
          if (this.selectday == 1) {
            this.getDay(-29, this.selectnorm)
          } else if (this.selectday == 2) {
            this.getDay(-6, this.selectnorm)
          } else if (this.selectday == 3) {
            this.getPassYearFormatDate(this.selectnorm)
          }
        }
      }
    },
    methods: {
      handleClick(tab, event) {
      },
      gofxjList(statius) {
        this.$router.push({'name': 'fxjorder',query: {statius,}});
      },
      Decode(arr) {
        var bstr = atob(arr), n = bstr.length, u8arr = new Uint8Array(n);
        while (n--) {
          u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
      },
      //下载表格
      daochu() {
        if (this.shelvesType == 1) {
          var endDate = '', startDate = '';
          if (this.endDate || this.startDate) {
            endDate = Date.parse(new Date(this.endDate.replace(/-/g, "/")));
            startDate = Date.parse(new Date(this.startDate.replace(/-/g, "/")));
          } else {
            endDate = this.endDate;
            startDate = this.startDate;
          }
          Service.home().overviewexport({
            startDate: startDate,
            endDate: endDate
          }).then(response => {
            if (response.errorCode == 0) {
              var blob = this.Decode(response.data);
              if (window.URL.createObjectURL(blob).indexOf(location.host) < 0) {//ie不支持
                this.href = window.navigator.msSaveOrOpenBlob(blob, '报表.xlsx');
              } else {
                this.href = URL.createObjectURL(blob);
              }
              this.downloadtable(this.href);
              this.dialogFormVisible = false
            } else {
              this.$message.error(response.message)
            }

          }, err => {
          });
        } else if (this.shelvesType == 0) {
          Service.home().tableexport({}).then(response => {
            if (response.errorCode == 0) {
              var blob = this.Decode(response.data);
              if (window.URL.createObjectURL(blob).indexOf(location.host) < 0) {//ie不支持
                this.href = window.navigator.msSaveOrOpenBlob(blob, '报表.xlsx');
              } else {
                this.href = URL.createObjectURL(blob);
              }
              this.downloadtable(this.href);
              this.dialogFormVisible = false;
            } else {
              this.$message.error(response.message)
            }

          }, err => {
          });
        }else if(this.shelvesType == 2){
          var endDate = '', startDate = '';
          if (this.endDate || this.startDate) {
            endDate = Date.parse(new Date(this.endDate.replace(/-/g, "/")));
            startDate = Date.parse(new Date(this.startDate.replace(/-/g, "/")));
          } else {
            endDate = this.endDate;
            startDate = this.startDate;
          }
          Service.home().overviewperiodexport({
            startDate: startDate,
            endDate: endDate
          }).then(response => {
            if (response.errorCode == 0) {
              var blob = this.Decode(response.data);
              if (window.URL.createObjectURL(blob).indexOf(location.host) < 0) {//ie不支持
                this.href = window.navigator.msSaveOrOpenBlob(blob, '报表.xlsx');
              } else {
                this.href = URL.createObjectURL(blob);
              }
              this.downloadtable(this.href);
              this.dialogFormVisible = false
            } else {
              this.$message.error(response.message)
            }

          }, err => {
          });
        }
      },
      downloadtable(blobUrl) {
        const a = document.createElement('a');
        a.style.display = 'none';
        a.download = '报表.xlsx';
        a.href = blobUrl;
        a.click();
      },
      //概览表格
      overviewtable() {
        Service.home().overviewtable({}, 5).then(response => {
          if (response.errorCode == 0) {
            var data = response.data;
            for (let i in data) {
              if (data[i].pv == 0) {
                data[i].puv = 0
              } else {
                data[i].puv = (data[i].pv / data[i].uv).toFixed(2)
              }
            }
            this.dataTable = response.data;
            this.$nextTick(() => {
            })
          } else {
            this.$message.error(response.message)
          }

        }, err => {
        });
      },
      enddateChange(val) {
        if (val) {
          this.startDate = this.timetrans(val[0], 'getday');
          this.endDate = this.timetrans(val[1], 'getday')
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
      gettodayorder(startDate) {
        var endDate = new Date().getTime();
        Service.home().orderday({
          startDate: startDate,
          endDate: endDate
        }).then(response => {
          if (response.errorCode == 0) {
            var data = response.data;
            var xdata = [], y1data = [], y2data = [];
            for (var i = 0; i < data.length; i++) {
              xdata.push(this.timetrans((data[i].date), 'getday'));
              if (this.selectnorm == 4) {
                y1data.push(data[i].orderCount);
              } else if (this.selectnorm == 3) {
                y1data.push(data[i].orderAmount);
              }
            }
            if (this.selectnorm == 4) {
              this.gettodayuvpv(startDate, xdata, y1data)
            } else if (this.selectnorm == 3) {
              this.resetorderAmount(xdata, y1data)
            }
          } else {
            this.$message.error(response.message)
          }

        }, err => {
        });
      },
      //获取日用户
      gettodayuser(startDate) {
        var endDate = new Date().getTime();
        Service.home().userday({
          startDate: startDate,
          endDate: endDate
        }).then(response => {
          if (response.errorCode == 0) {
            var data = response.data;
            var xdata = [], y1data = [], y2data = [];
            for (var i = 0; i < data.length; i++) {
              xdata.push(this.timetrans((data[i].date), 'getday'));
              y1data.push(data[i].userCount);
            }
            this.gettodayuvpv(startDate, xdata, y1data)
          } else {
            this.$message.error(response.message)
          }

        }, err => {
        });
      },
      //获取日pv uv
      gettodayuvpv(startDate, xd, y1d) {
        var endDate = new Date().getTime();
        Service.home().puvday({
          startDate: startDate,
          endDate: endDate
        }).then(response => {
          if (response.errorCode == 0) {
            var data = response.data;
            var xdata = [], y1data = [], y2data = [], y2d = [];
            for (var i = 0; i < data.length; i++) {
              xdata.push(this.timetrans((data[i].date), 'getday'));
              y1data.push(data[i].pv);
              y2data.push(data[i].uv);
              if (xd) {
                if (y2data[i] == 0 || y1d[i] == 0) {
                  y2d.push(0)

                } else {
                  var uvnum = (y1d[i] / (data[i].uv)).toFixed(2)
                  y2d.push(uvnum)
                }

              }
            }
            if (y2d.length != 0) {
              this.getanalysistwo(xd, y1d, y2d)
            } else {
              this.resetpvuvData(xdata, y1data, y2data)
            }
          } else {
            this.$message.error(response.message)
          }

        }, err => {
        });
      },
      //月pvuv
      gettomonthuvpv(startDate, xd, y1d) {
        var endDate = new Date().getTime();
        Service.home().puvmonth({
          startDate: startDate,
          endDate: endDate
        }).then(response => {
          if (response.errorCode == 0) {
            var data = response.data;
            var xdata = [], y1data = [], y2data = [], y2d = [];
            for (var i = 0; i < data.length; i++) {
              xdata.push(this.timetrans((data[i].date), 'getmonth'));
              y1data.push(data[i].pv);
              y2data.push(data[i].uv);
              if (xd) {
                if (y2data[i] == 0 || y1d[i] == 0) {
                  y2d.push(0)
                } else {
                  var uvnum = (y1d[i] / (data[i].uv)).toFixed(2)
                  y2d.push(uvnum)
                }
              }
            }
            if (y2d.length != 0) {
              //双坐标
              this.getanalysistwo(xd, y1d, y2d)
            } else {
              this.resetpvuvData(xdata, y1data, y2data)
            }
          } else {
            this.$message.error(response.message)
          }

        }, err => {
        });
      },
      //月用户
      gettomonthuser(startDate) {
        var endDate = new Date().getTime();
        Service.home().usermoonth({
          startDate: startDate,
          endDate: endDate
        }).then(response => {
          if (response.errorCode == 0) {
            var data = response.data;
            var xdata = [], y1data = [], y2data = [];
            for (var i = 0; i < data.length; i++) {
              xdata.push(this.timetrans((data[i].date), 'getmonth'));
              y1data.push(data[i].userCount);
            }
            this.gettomonthuvpv(startDate, xdata, y1data)
          } else {
            this.$message.error(response.message)
          }

        }, err => {
        });
      },
      //月订单/收入
      gettomonthorder(startDate) {
        var endDate = new Date().getTime();
        Service.home().ordermonth({
          startDate: startDate,
          endDate: endDate
        }).then(response => {
          if (response.errorCode == 0) {
            var data = response.data;
            var xdata = [], y1data = [], y2data = [];
            for (var i = 0; i < data.length; i++) {
              xdata.push(this.timetrans((data[i].date), 'getmonth'));
              if (this.selectnorm == 4) {
                y1data.push(data[i].orderCount);
              } else if (this.selectnorm == 3) {
                y1data.push(data[i].orderAmount);
              }
            }
            if (this.selectnorm == 4) {
              this.gettomonthuvpv(startDate, xdata, y1data)
            } else if (this.selectnorm == 3) {
              this.resetorderAmount(xdata, y1data)
            }
          } else {
            this.$message.error(response.message)
          }

        }, err => {
        });
      },
      //pv uv坐标抽
      resetpvuvData(xdata, y1data, y2data) {
        var myChart = this.echarts.init(document.getElementById('analysis'));
        myChart.clear()
        var option = {
          color: ['#56ae97', '#F7BF65'],
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['浏览次数(PV)', '独立访客(UV)']
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: xdata
          },
          yAxis: {
            type: 'value',
            name: '次数',
            axisLabel: {
              formatter: '{value}'
            }
          },
          series: [
            {
              name: '浏览次数(PV)',
              type: 'line',
              data: y1data,
              markPoint: {
                data: [
                  {type: 'max', name: '最大值'},
                  {type: 'min', name: '最小值'}
                ]
              },
            },
            {
              name: '独立访客(UV)',
              type: 'line',
              data: y2data
            }
          ]
        };
        myChart.setOption(option)
      },
      //收入坐标轴
      resetorderAmount(xdata, ydata) {
        var myChart = this.echarts.init(document.getElementById('analysis'));
        myChart.clear()
        var option = {
          color: ['#56ae97'],
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['订单收入']
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: xdata
          },
          yAxis: {
            type: 'value',
            show: true,
            name: '订单收入(元)',
            axisLabel: {
              formatter: '{value}'
            }
          },
          series: [
            {
              name: '订单收入',
              type: 'line',
              data: ydata
            }
          ]
        };
        myChart.setOption(option)
      },
      getDay(day, type) {
        var today = new Date();
        var targetday_milliseconds = today.getTime() + 1000 * 60 * 60 * 24 * day;
        today.setTime(targetday_milliseconds); //注意，这行是关键代码
        if (type == 1) {//浏览指标
          this.gettodayuvpv(targetday_milliseconds)
        } else if (type == 2) {//注册用户
          this.gettodayuser(targetday_milliseconds)
        } else if (type == 4 || type == 3) {//订单
          this.gettodayorder(targetday_milliseconds)
        }

        if (type == "getday") {
          var tYear = today.getFullYear();
          var tMonth = today.getMonth();
          var tDate = today.getDate();
          tMonth = this.doHandleMonth(tMonth + 1);
          tDate = this.doHandleMonth(tDate);
          return tYear + "-" + tMonth + "-" + tDate;
        }


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
        } else if (type == 3) {//订单
          this.gettomonthorder(date.getTime())
        } else if (type == 4) {//订单
          this.gettomonthorder(date.getTime())
        }
      },
      gethotsale() {
        Service.home().gethotsale({}, 5).then(response => {
          if (response.errorCode == 0) {
            for (var i = 0; i < response.data.length; i++) {
              this.xData.push(response.data[i].name);
              this.yData.push(response.data[i].orderCount)
            }
            this.$nextTick(() => {
              this.getRank()
            })
          } else {
            this.$message.error(response.message)
          }

        }, err => {
        });
      },
      getoverview() {
        Service.home().getoverview({}).then(response => {
          if (response.errorCode == 0) {
            this.getoverviewCount = response.data;
          } else {
            this.$message.error(response.message)
          }

        }, err => {
        });
      },
      gettodo() {
        Service.home().gettodo({}, 1).then(response => {
          if (response.errorCode == 0) {
            this.todoCount = response.data;
          } else {
            this.$message.error(response.message)
          }
        }, err => {
        });
        Service.home().gettodo({}, 2).then(response => {
          if (response.errorCode == 0) {
            this.fxjtodoCount = response.data;
          } else {
            this.$message.error(response.message)
          }
        }, err => {
        });
      },
      goList(statius) {
        this.$router.push({'name': 'orderlist', query: {statius}},);
      },
      gorightList() {
        this.$router.push({'name': 'legalrightList', query: {statius: '1'}});
      },
      goGoods() {
        this.$router.push({'name': 'goodsanalysis'});
      },
      getanalysistwo(xd, y1d, y2d) {
        var myChart = this.echarts.init(document.getElementById('analysis'));
        myChart.clear()
        if (this.selectnorm == 2) {
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
                splitLine: {
                  show: false
                },

                axisLabel: {
                  formatter: '{value} '
                }
              },
              {
                splitLine: {
                  show: false
                },
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
        } else if (this.selectnorm == 4) {
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
              data: ['订单数量', '支付转化率']
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
                name: '订单数量(个)',
                splitLine: {
                  show: false
                },
                axisLabel: {
                  formatter: '{value}'
                }
              },
              {
                type: 'value',
                name: '支付转化率',
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
                name: '订单数量',
                type: 'line',
                data: y1d
              },

              {
                name: '支付转化率',
                type: 'line',
                yAxisIndex: 1,
                data: y2d
              }
            ]
          };
        }
        myChart.setOption(option)
      },
      getRank() {
        var myChart = this.echarts.init(document.getElementById('rankbox'));
// 绘制图表
        var option = {
          color: ['#56ae97'],
          tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
              type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            left: '3%',
            right: '15%',
            bottom: '3%',
            top: 30,
            containLabel: true
          },
          xAxis: [
            {
              type: 'category',
              data: this.xData,
              axisTick: {
                alignWithLabel: true
              },
              name: '商品名称',
              nameTextStyle: {
                fontSize: 12,
                color: '#979797'
              },
              axisLabel: {
                rotate: 30,
                textStyle: {
                  color: '#000',
                  fontSize: 12,
                  fontWeight: 500
                }
              }

            }
          ],
          yAxis: [
            {
              type: 'value',
              show: true,
              name: '累计销量(个)',
              nameTextStyle: {
                fontSize: 12,
                color: '#979797'
              }
            }
          ],
          series: [
            {
              name: '累计销量',
              type: 'bar',
              barWidth: '20%',
              data: this.yData
            }
          ]
        };
        myChart.setOption(option)
      },
    },

  }
</script>

