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
            margin-top: 20px;
            padding-bottom: 20px;
            .searchBox {
              margin-right: 30px;
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
          <div class="dataGeneral backWhite" v-show="bigTurntableView">
            <div class="searchContent itemcenter clear">
                 <div class="searchBox">
                    <span class="searchLable colorGrey font12">参与人姓名</span>
                    <input type="text" v-model="userName" class="serchInput font12 colorblack" placeholder="参与人姓名"/>
                </div>
                <div class="searchBox">
                    <span class="searchLable colorGrey font12">是否中奖</span>
                    <el-select v-model="isWin" placeholder="">
                      <el-option
                        v-for="item in isWinoption"
                        :key="item.value"
                        :label="item.name"
                        :value="item.value">
                      </el-option>
                    </el-select>
                </div>
                 <div class="bacButton  cursor"  @click="daochu()">中奖人导出</div>
                <div class="bacButton  cursor ml10 mr10"  @click="daochuuser()">参与人导出</div>
                 <div class="bacButton  cursor"  @click="getcommodityData('search')">查询</div>
            </div>
          </div>
          <div class="dataGeneral bannerTable">
            <table v-if="noData&&bigTurntableView" class="table">
              <tr>
                <th v-for="item in sortDatas" :key="item.name">
                  {{item.name}}
                </th>
              </tr>
              <tr v-for="(item,index) in tableData" :key="item.id" :inde="index">
                <td>
                  {{item.activityName}}
                </td>
                 <td>
                  {{item.userName}}
                </td>
                  <td>
                  {{item.phone}}
                </td>
                 <td>
                  <div v-if="item.isWin">是</div>
                  <div v-if="!item.isWin">否</div>
                  <div class="mt6" v-if="item.isWin">({{item.goodsName}})</div>
                  
                </td>
                  <td>
                  <span v-if="item.fromChannelName == 'healthmall'">健康商城</span>
                   <span v-if="item.fromChannelName == 'lz'">乐兹APP</span>
                </td>
                 <td>
                  {{item.fromUserName}}
                </td>
                  <td>
                  {{item.fromPhone}}
                </td>
              </tr>
            </table>
            <div v-if="!noData" class="noData">
              <img class="nodataImg" src="../../assets/images/nodatalist.png"/>
              <p>暂无数据~</p>
            </div>
            <div class="block" v-if="noData">
              <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="page"
                :page-size="size"
                :page-sizes="[5,10]"
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
    name: "salecustomer",
    components: {
      Aside,
      KlTop,
      Helprules
    },
    data() {
      return {
        isWin: '',
        isWinoption: [{name: '全部', value: ''}, {name: '是', value: true}, {name: '否', value: false}],
        userName:'',
        page: 1,
        size: 10,
        total: 0,
        showhelprules: false,
        orderField: 'saleStartDate',
        orderType: 'desc',
        sortDatas: [
          {orderType: '', name: '活动名称', showBlue: false, orderField: ''},
          {orderType: '', name: '参与人', showBlue: false, orderField: ''},
          {orderType: '', name: '参与人手机号', showBlue: false, orderField: ''},
          {orderType: '', name: '是否中奖', showBlue: false, orderField: ''},
           {orderType: '', name: '渠道', showBlue: false, orderField: ''},
          {orderType: '', name: '分享人', showBlue: false, orderField: ''},
          {orderType: '', name: '分享人手机号', showBlue: false, orderField: ''},
        ],
        endDate: "",
        startDate: "",
        insuranceDate: '',
        tableData: [],
        noData: true,
        showOne: false,
        showTwo: false,
        showThree: false,
        showFour: false,
        dissipate: [],
        timer: null,
        permissions: [],
        bigTurntableView: false,
        bigTurntableAdd: false,
        bigTurntableUpdate: false,
        bigTurntableDelete: false,
        bigTurntableInvalid: false,
        bigTurntableCopy: false,
        bigTurntablequeryGoods: false,
        href: '',
      };
    },
    created() {
     if(this.$route.query.shopId){
        localStorage.setItem('shopId', 2)
      }
      this.bigTurntableView = this.havePermissions('bigTurntable:view[shopId=1]')
      this.bigTurntableAdd = this.havePermissions('bigTurntable:add[shopId=1]')
      this.bigTurntableUpdate = this.havePermissions('bigTurntable:update[shopId=1]')
      this.bigTurntableDelete = this.havePermissions('bigTurntable:delete[shopId=1]')
      this.bigTurntableInvalid = this.havePermissions('bigTurntable:operate[shopId=1]')
      this.bigTurntableCopy = this.havePermissions('bigTurntable:operate[shopId=1]')
      this.bigTurntablequeryGoods = this.havePermissions('bigTurntable:queryGoods[shopId=1]')
      if (this.$route.query.id) {
            this.activityId = this.$route.query.id;
            if(this.bigTurntableView){
              this.getcommodityData('');//获取商品列表
            }
      }
    
    },
    watch: {},
    mounted() {
     
    
    },
    methods: {
       Decode(arr) {
      var bstr = atob(arr), n = bstr.length, u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new Blob([u8arr], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
      },
      daochu() {
        Service.bigTurntable().daochu({},this.activityId).then(response => {
          if (response.errorCode == 0) {
            var blob = this.Decode(response.data);
            if (window.URL.createObjectURL(blob).indexOf(location.host) < 0) {//ie不支持
              this.href = window.navigator.msSaveOrOpenBlob(blob, '表格.xlsx');
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
      daochuuser() {
        Service.bigTurntable().daochuuser({},this.activityId).then(response => {
          if (response.errorCode == 0) {
            var blob = this.Decode(response.data);
            if (window.URL.createObjectURL(blob).indexOf(location.host) < 0) {//ie不支持
              this.href = window.navigator.msSaveOrOpenBlob(blob, '表格.xlsx');
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
        a.download = '表格.xlsx';
        a.href = blobUrl;
        a.click();
      },
      getbackData(str) {
        if (str == 'sure') {
          this.showhelprules = false;
        }
        if (str == 'cancle') {
          this.showhelprules = false;
        }
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
        Service.bigTurntable().getusers({
          size: this.size,
          page: this.page,
          activityId: this.activityId,
          userName: this.userName,
          isWin: this.isWin
        }).then(response => {
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

