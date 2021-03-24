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
      height: 540px;
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
            text-align: right;

            .bacButton {
              margin-top: -6px;
              display: inline-block;

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
          max-height: 300px;
          overflow-y: auto;

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
                padding: 20px 10px;

                .line {
                  display: inline-block;
                  height: 8px;
                  width: 3px;
                  background: #eee;
                  margin: 0 10px;
                }

                .productImg {
                  max-width: 116px;
                  max-height: 60px;
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
          <div class="channnelTitle">
            <span class="colorblack font16 fontWeight marginright10">兑换码列表</span>
          </div>
          <div class="searchContent flex clear">
            <div class="searchBox">
              <span class="searchLable colorGrey font12">兑换码</span>
              <input type="text" class="serchInput font12 colorblack" v-model="code" placeholder="请搜索兑换码内容"/>
            </div>
            <div class="bacButton cursor" v-show="redeemCodeCodesView" @click="getGuigeList('chaxun')">查询</div>
          </div>
          <div class="searchContent flexBetween itemscenter">
            <div class="font14">活动状态：<span v-if="status == 1">未开始</span> <span v-if="status == 2">进行中</span> <span
              v-if="status == 3">已结束</span><span v-if="status == 4">已失效</span><span style="margin-left: 10px;">活动名称：{{name}}</span>

            </div>
            <div class="bacButton cursor" v-show="redeemCodeExportCodes" @click="daochu('chaxun')">导出</div>
          </div>
        </div>
        <div class="dataGeneral bannerTable">
          <table v-if="noData&&redeemCodeCodesView" class="table">
            <tr>
              <th v-for="item in sortDatas" :key="item.name">
                {{item.name}}
              </th>
            </tr>
            <tr v-for="(item,index) in tableData" :key="item.id" :index="index">
              <td>
                {{item.goodsName}}
              </td>
              <td>
                {{item.participant}}
              </td>
              <td>
                <span v-if="item.usageTime">{{timetrans(item.usageTime)}}</span>
                <span v-if="!item.usageTime">--</span>
              </td>
              <td>
                <span v-if="item.usageStatus">已使用</span>
                <span v-if="!item.usageStatus">未使用</span>
              </td>
              <td>{{timetrans(item.startTime)}} 至 {{timetrans(item.endTime)}}</td>
              <td>
                {{item.code}}
              </td>
            </tr>
          </table>
          <div v-if="!noData" class="noData">
            <img class="nodataImg" src="../assets/images/nodatalist.png"/>
            <p>暂无数据~</p>
          </div>
        </div>
        <div class="block" v-if="noData">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="page"
            :page-size="size"
            :page-sizes="[10,20]"
            layout="total,sizes, prev, pager, next,jumper"
            :total="total">
          </el-pagination>
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
      status: {
        type: Number
      },
      activityid: {
        type: String
      },
      redeemCodeExportCodes: {
        type: Boolean,
      },
      redeemCodeCodesView: {
        type: Boolean,
      }
    },
    data() {
      return {
        code: '',
        name: '',
        sortDatas: [{orderType: 'asc', name: '绑定的商品', showBlue: false, orderField: 'productPlanNo'}, {
          orderType: 'asc',
          name: '使用人',
          showBlue: false,
          orderField: 'productPlanNo'
        }, {orderType: 'asc', name: '使用时间', showBlue: false, orderField: 'productPlanNo'}, {
          orderType: '',
          name: '状态',
          showBlue: false,
          orderField: ''
        }, {orderType: 'asc', name: '有效起止时间', showBlue: false, orderField: 'productPlanName'}, {
          orderType: 'asc',
          name: '兑换码',
          showBlue: false,
          orderField: 'productPlanShortName'
        }],
        productPlanName: '',
        orderField: 'productPlanNo',
        orderType: 'asc',
        total: null,
        size: 10,
        page: 1,
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
      };
    },
    created() {
      this.userInfo = JSON.parse(localStorage.getItem('user'));
      if (this.userInfo) {
        this.permissions = this.userInfo.permissions;
      }
      if(this.redeemCodeCodesView){
        this.getGuigeList('')
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
      //下载表格
      daochu() {
        Service.redeem().exportredeemCode({}, this.activityid).then(response => {
          if (response.errorCode == 0) {
            var blob = this.Decode(response.data);
            if (window.URL.createObjectURL(blob).indexOf(location.host) < 0) {//ie不支持
              this.href = window.navigator.msSaveOrOpenBlob(blob, '兑换码.xlsx');
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
        a.download = '兑换码.xlsx';
        a.href = blobUrl;
        a.click();
      },
      selectItem(item) {
        this.$emit('selectGuige', item);
        this.$emit('clickbanner', 'cancle')
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
        this.getGuigeList('chaxun')
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
      judgeArr(arr, value) {
        var num = 0;
        for (var i = 0; i < arr.length; i++) {
          if (arr[i] == value) {
          } else {
            num++;
          }
        }
        return num
      },
      getTimedate(timeStr) {
        return Filter.getTimedate(timeStr)
      },
      getGuigeList(str) {
        var obj = {
          size: this.size,
          page: this.page,
          activityId: this.activityid,
          code: this.code
        }
        Store.commit("setIsLoading", true);
        Service.redeem().redeemCodelist(obj).then(response => {
          Store.commit("setIsLoading", false);
          if (response.errorCode == 0) {
            this.total = response.data.total;
            if (response.data.length != 0) {
              this.noData = true;
              var tableData = response.data.records;
              this.name = tableData[0].name;
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
      },
      handleSizeChange(val) {
        this.size = val;
        this.getGuigeList('')
      },
      handleCurrentChange(val) {
        this.page = val;
        this.getGuigeList('')
      },
      deleteCompany() {
        this.companyInfo = '';
        this.showCompany = false;
        this.searchValue = '';
        this.bindTime = '';
      },

      blureInput() {
        this.showSearchBox = false;
      },
      getValue(item) {
        this.searchValue = item.name;
        this.companyInfo = item;
        this.showCompany = true;
        console.log(this.searchValue)
      },
      sureButton() {
        if (!this.watchChange('companyName', 'submit')) {
          return;
        }
        if (!this.watchChange('contact', 'submit')) {
          return;
        }
        if (!this.watchChange('phone', 'submit')) {
          return;
        }
        Store.commit("setIsLoading", true);
        Service.client().addLeads({
          companyName: this.leadsInfo.companyName,
          contact: this.leadsInfo.contact,
          phone: this.leadsInfo.phone,
          email: null,
          remark: this.leadsInfo.remark,
          source: this.leadsInfo.source
        }).then(response => {
          Store.commit("setIsLoading", false);
          if (response.errorCode == 0) {
            Util.localStorageUtil.clear('leadsInfo');
            this.$emit('clickbanner', 'sure');
          } else {
            this.$message.error(response.message)
          }
        }, err => {
        })
      },
      cancleButton() {
        this.$emit('clickbanner', 'cancle')
      },
    },
  }
</script>

