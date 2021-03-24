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

            .searchbutton {
              position: absolute;
              right: 46px;
              bottom: 68px;
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

          .noData {
            width: 100%;
            text-align: center;
            margin-top: 54px;
            color: #929292;
            font-size: 12px;

            .nodataImg {
              height: 78px;
              width: 78px;
              margin-bottom: 16px;
            }

            .linkText {
              display: block;
              color: #929292;

              .goHome {
                color: #45b8c8;
              }
            }
          }

          .borderButton {
            margin: 0 20px;
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
                text-align: center;
              }

              td {
                text-align: center;
                padding: 16px 8px;

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
                  margin: 0 6px;
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
                min-width: 120px;
                max-width: 120px;
                text-align: center;
              }

              td:nth-of-type(3) {
                text-align: center;

                .imgicon {
                  display: inline-block;
                  vertical-align: middle;
                  height: 20px;
                  width: 20px;
                  padding-right: 10px;
                }
              }

              td:nth-of-type(4) {
                min-width: 80px;
                max-width: 80px;
                text-align: center;
              }

              td:nth-last-child(1) {
                min-width: 80px;
                max-width: 80px;
                text-align: center;
              }

              td:nth-of-type(5) {
                min-width: 80px;
                max-width: 80px;
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

  .fileBox {
    .applicaninfo {
      width: 120px;
      height: 40px;
      background-color: #f9f9f9;
      border-radius: 4px;
      text-align: center;
      position: relative;

      .imgBox {
        display: inline-block;
        width: 120px;
        height: 68px;

        .uploadtext {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 120px;
          height: 40px;
          color: #fff;
          text-align: center;
          background-color: #56ae97;
          border-radius: 20px;
        }
      }
    }

  }

  .dialogone::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 0;
    vertical-align: middle;
  }

  .dialogone {
    display: none;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 1000;
    background: rgba(0, 0, 0, 0.5);

    .messge {
      display: inline-block;
      width: 460px;
      padding-bottom: 15px;
      vertical-align: middle;
      background-color: #fff;
      border-radius: 4px;
      font-size: 18px;
      -webkit-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
      text-align: left;
      overflow: hidden;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;

      .messageHeader {
        text-align: center;
        position: relative;
        padding: 15px 15px 0px;
        color: #000;

        .messagetitle {
        }
      }

      .messageContent {
        position: relative;
        padding: 20px 30px;
        color: #606266;
        font-size: 14px;

        .messagemessage {
          margin-bottom: 12px;

          .inputBox {
            border: 1px solid #e5e5e5;
            height: 30px;
            line-height: 30px;
            text-indent: 10px;
            width: 300px;
          }
        }
      }

      .messagebtns {
        text-align: center;
        padding: 0 0 30px;

        .button {
          border-radius: 20px;
          display: inline-block;
          white-space: nowrap;
          cursor: pointer;
          text-align: center;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          outline: 0;
          margin: 0;
          height: 40px;
          width: 121px;
          line-height: 40px;
          font-size: 12px;
        }

        .bacButton {
          margin-left: 20px;
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
                <span class="searchLable colorGrey font12">机构名称 </span>
                <input type="text" v-model="branchName" class="serchInput font12 colorblack" placeholder="机构名称"/>
              </div>
              <div class="searchBox">
                <span class="searchLable colorGrey font12">渠道名称 </span>
                <input type="text" v-model="channelName" class="serchInput font12 colorblack" placeholder="渠道名称"/>
              </div>
              <div class="searchBox">
                <span class="searchLable colorGrey font12">订单编号 </span>
                <input type="text" v-model="id" class="serchInput font12 colorblack" placeholder="订单编号"/>
              </div>
              <div class="searchBox flex">
                <span class="searchLable searchName colorGrey font12">订单状态</span>
                <el-select v-model="statusText" placeholder="">
                  <el-option
                    v-for="item in statusOption"
                    :key="item.name"
                    :label="item.name"
                    :value="item.name">
                  </el-option>
                </el-select>
              </div>
              <div class="searchBox">
                <span class="searchLable colorGrey font12">权益名称 </span>
                <input type="text" v-model="rightsName" class="serchInput font12 colorblack" placeholder="权益名称"/>
              </div>
              <div class="searchBox">
                <span class="searchLable colorGrey font12">服务名称</span>
                <input type="text" v-model="planName" class="serchInput font12 colorblack" placeholder="服务名称"/>
              </div>
              <div class="searchBox flex">
                <span class="searchLable searchName colorGrey font12">领取时间</span>
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
              <div class="searchBox searchBoxone flex">
                <span class="searchLable searchName colorGrey font12">领取人</span>
                <input type="text" v-model="userName" class="serchInput font12 colorblack  marginLeft10"
                       placeholder="领取人"/>
              </div>
              <div class="searchBox searchBoxone flex">
                <span class="searchLable searchName colorGrey font12">会员等级</span>
                <el-select v-model='levelNo'>
                  <el-option
                    v-for="item in levelNoOption"
                    :key="item.name"
                    :label="item.name"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>


              <div class="searchBox flex">
                <div class="bacButton  cursor" @click="getcommodityData('search')">查询</div>
                <div class="bacButton cursor" style='margin: 0 15px;' @click="daochu()">导出</div>
              </div>

            </div>

          </div>
          <div class="dataGeneral bannerTable">
            <table v-if="noData" class="table">
              <tr>
                <th v-for="item in sortDatas">
                  {{item.name}}
                </th>
              </tr>
              <tr v-for="(item,index) in tableData">
                <td>
                  {{item.id}}
                </td>
                <td>
                  <span v-if="item.branch"> {{item.branch.branchName}}</span>
                </td>
                <td>
                  <span v-if="item.branch"> {{item.branch.channelName}}</span>
                </td>
                <td>
                  <span v-if="item.branch">{{item.branch.levelName}}</span>

                </td>
                <td>
                  {{item.rightsName}}
                </td>
                <td> {{item.planName}}</td>
                <td>
                  <div v-if="item.serviceInfo">
                    <span v-if="item.serviceInfo.status == 1">待审核</span>
                    <span v-if="item.serviceInfo.status == 2">审核失败</span>
                    <span v-if="item.serviceInfo.status == 3">待服务</span>
                    <span v-if="item.serviceInfo.status == 4">服务中</span>
                    <span v-if="item.serviceInfo.status == 5">已完成</span>
                    <span v-if="item.serviceInfo.status == 6">已过期</span>
                    <span v-if="item.serviceInfo.status == 7">已关闭</span>
                  </div>
                </td>
                <td>
                  {{item.userName}}

                </td>

                <td>
                  <span v-if="item.createDate"> {{timetrans(item.createDate)}}</span>
                  <span v-if="!item.createDate"></span>

                </td>
                <td>
                  <span class="color2087 font12 cursor" @click="goDetail(item.id)">详情</span>
                  <span class="line" v-if="item.status == 2"></span>
                  <span class="color2087 font12 cursor" v-if="item.status == 2" @click="ship(item.id)">发货</span>
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
      </div>
    </div>
    <div class="dialogone">
      <div class="messge">
        <div class="messageHeader">
          <div class="messagetitle">
            <span>请录入发货物流信息</span>
          </div>
        </div>
        <div class="messageContent">
          <div class="messagemessage adressBox messagemessageone">
            <span class="lableText colorblack font12">物流公司</span>
            <input type="text" @change="changeValue('expressName','')" v-model="express.expressName"
                   class="inputBox marginLeft10 colorblack font12" placeholder="物流公司"/>

          </div>
          <div class="messagemessage">
            <span class="lableText colorblack font12">物流单号</span>
            <input type="text" @change="changeValue('expressNo','')" v-model="express.expressNo"
                   class="inputBox marginLeft10 colorblack font12" placeholder="物流单号"/>
          </div>
        </div>
        <div class="messagebtns">
          <div class="button borderButton copyButton" @click="closeDiologone()">
            取消
          </div>
          <div class="button bacButton" @click="shipGoods()">
            确认
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Util from '@/common/util'
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
        rightsName: '',
        userName: '',
        id: '',
        planName: '',
        upFileAction: '',
        headers: {},
        orderId: '',
        express: {
          expressName: "",
          expressNo: ''
        },
        statusOption: [
          {name: '全部'},
          {name: '待审核'}, {name: '审核失败'}, {name: '待服务'}, {name: '服务中'}, {name: '已完成'}, {name: '已过期'}, {name: '已关闭'}],
        statusText: '全部',
        levelNo: '',
        levelNoOption: [
          {value: '', name: '全部等级'},
          {value: 'LV006', name: 'SVIP会员'},
          {value: 'LV005', name: '黑钻会员'},
          {value: 'LV004', name: '钻石会员'},
          {value: 'LV003', name: '铂金会员'},
          {value: 'LV002', name: '黄金会员'},
          {value: 'LV001', name: '普通会员'},
        ],
        consigneeValue: "",
        userValue: '',
        usertype: 0,
        userPhone: '',
        sortDatas: [
          {orderType: '', name: '订单编号', showBlue: false, orderField: ''},
          {orderType: '', name: '机构名称', showBlue: false, orderField: ''},
          {orderType: '', name: '渠道名称', showBlue: false, orderField: ''},
          {orderType: '', name: '会员等级', showBlue: false, orderField: ''},
          {orderType: '', name: '权益名称', showBlue: false, orderField: ''},
          {orderType: '', name: '服务名称', showBlue: false, orderField: ''},
          {orderType: '', name: '订单状态', showBlue: false, orderField: ''},
          {orderType: '', name: '领取人', showBlue: false, orderField: ''},
          {orderType: '', name: '服务领取时间', showBlue: false, orderField: ''},
          {orderType: '', name: '操作', showBlue: false, orderField: ''}
        ],
        endDate: "",
        consigneeType: 0,
        consigneeName: "",
        consigneePhone: '',
        startDate: "",
        goodsName: '',
        branchName: '',
        channelName: '',
        orderNo: '',
        status: '',
        afsStatus: '',
        total: 0,
        size: 10,
        page: 1,
        payMethod: '',
        payMethodOption: [{name: '全部', id: ''}, {name: '支付宝', id: '1'}, {name: '微信', id: '2'}],
        payChannel: '',
        payChannelOption: [{name: '全部', id: ''}, {name: '昆仑微信公众号', id: '01'}, {
          name: '昆仑APP',
          id: '02'
        }, {name: '健康商城（分享家）', id: '03'}],
        channelId: '',
        channelsOption: [{name: '全部', id: ''}, {name: '昆仑保险App', id: '1'}, {name: '昆仑微信公众号', id: '2'}],
        insuranceDate: '',
        tableData: [],
        noData: true,
        statusTitle: "",

        rightsOrderView: false,
        rightsOrderExport: false,
      };
    },
    created() {
      var tokenVal = Util.localStorageUtil.get('access_token');
      this.rightsOrderView = this.havePermissions('rightsOrder:view')
      this.rightsOrderExport = this.havePermissions('rightsOrder:export')


      this.headers = {token: tokenVal, shopId: 1};
      if (this.$route.query.page) {
        this.page = parseInt(this.$route.query.page);
      } else {
        this.page = 1;
      }
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
      },
      'statusText': function () {
        if (this.statusText) {
          this.resetTitle(this.statusText);
        }
      },
    },
    mounted() {
      if (this.$route.query.statius) {
        if (this.$route.query.statius == 1) {
          this.statusText = '待审核'
        }

      }
      this.upFileAction = Global.requestUrl + "/kl-store/admin/order/import/express";
      this.getcommodityData('');//获取订单列表
    },
    methods: {
      submit() {
        this.$nextTick(() => {
          this.$refs.upload.submit()
        })
      },
      beforeAvatarUpload(file) {
        Store.commit("setIsLoading", true);
        var index = file.name.indexOf('.');
        const isExcel = file.name.substring(index + 1) === 'xlsx';
        const isExcel1 = file.name.substring(index + 1) === 'xls';
        if (!isExcel && !isExcel1) {
          this.$message.error('请上传正确的excel文件!');
        }
        return (isExcel || isExcel1);
      },
      handleChange(file, fileList) {
      },
      errphoto(err, file, fileList) {

      },
      handleAvatarSuccess(res, file) {
        Store.commit("setIsLoading", false);
        this.getcommodityData('');//获取订单列表
        if (res.data) {
          this.$message.success('批量发货成功');
        } else {
          this.$message.success(res.message);
        }
      },
      shipGoods() {
        if (!this.changeValue('expressName', 'submit')) {
          return;
        }
        if (!this.changeValue('expressNo', 'submit')) {
          return;
        }
        Service.order().orderShip({
          expressName: this.express.expressName,
          expressNo: this.express.expressNo,
          orderId: this.orderId
        }).then(response => {
          if (response.errorCode == 0) {
            this.$message.success('发货成功');
            this.getcommodityData('')
            $(".dialogone").css({'display': 'none'})
          } else {
            this.$message.error(response.message)
          }

        }, err => {
        });
      },
      changeValue(name, type) {
        var on = true;
        this.express[name] = this.express[name].replace(/(^\s*)|(\s*$)/g, "");
        if (name == 'expressName') {
          if (this.express[name].length > 50 || this.express[name].length == 0) {
            this.$message.error('请输入正确的物流公司');
            on = false;
            return;
          }
        }
        if (name == 'expressNo') {
          var reg = /^[a-zA-Z0-9]+$/;
          this.express[name] = this.express[name].replace(/(^\s*)|(\s*$)/g, "");
          if (this.express[name].length > 50 || this.express[name].length == 0) {
            this.$message.error('请输入正确的物流单号');
            on = false;
            return;
          }
          if (!(reg.test(this.express[name]))) {
            this.$message.error('请输入正确的物流单号');
            on = false;
            return;
          }
        }
        if (type == 'submit') {
          return on;
        }
      },

      ship(id) {
        this.orderId = id;
        $(".dialogone").css({'display': 'block'})
      },
      resetTitle(title) {
        switch (title) {
          case '待审核':
            this.status = '1';
            break;
          case '审核失败':
            this.status = '2';
            break;
          case '待服务':
            this.status = '3';
            break;
          case '服务中':
            this.status = '4';
            break;
          case '已完成':
            this.status = '5';
            break;
          case '已过期':
            this.status = '6';
            break;
          case '已关闭':
            this.status = '7';
            break;
          default:
            this.status = '';
            break
        }
      },
      closeDiologone() {
        this.orderId = '';
        $(".dialogone").css({"display": "none"})
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
        $(".dialogone").css({'display': 'block'})
      },
      goDetail(id) {
        this.$router.push({name: 'legalrightorderDetail', query: {id: id}})
      },
      handleSizeChange(val) {
        this.size = val;
        this.getcommodityData('')
      },
      handleCurrentChange(val) {
        this.$router.push({name: 'legalrightList', query: {page: val}})
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
      getLastYearYestdy(date) {
        var strYear = date.getFullYear() - 1;
        var strDay = date.getDate();
        var strMonth = date.getMonth() + 1;
        if (strMonth < 10) {
          strMonth = "0" + strMonth;
        }
        if (strDay < 10) {
          strDay = "0" + strDay;
        }
        var datastr = strYear + "-" + strMonth + "-" + strDay + ' ' + '00:00:00';
        return datastr;
      },
      Decode(arr) {
        var bstr = atob(arr), n = bstr.length, u8arr = new Uint8Array(n);
        while (n--) {
          u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
      },
      daochu() {
        if (this.statusText) {
          this.resetTitle(this.statusText);
        }
        var endDate = '', startDate = '';
        if (this.endDate || this.startDate) {
          endDate = Date.parse(new Date(this.endDate.replace(/-/g, "/")));
          startDate = Date.parse(new Date(this.startDate.replace(/-/g, "/")));
          var date = this.getLastYearYestdy(new Date(endDate))
          var deadline = Date.parse(new Date(date.replace(/-/g, "/")));
          console.log(date, this.startDate)
          console.log(deadline, startDate)
          if (deadline > startDate) {
            this.$message.error('请选择12个月以内领取时间')
            return
          }
        } else {
          this.$message.error('请选择领取时间')
          return
          endDate = this.endDate;
          startDate = this.startDate;
        }
        Service.rightorder().rightsorderexport({
          rightsLevelType: 1,
          "endDate": endDate,
          "startDate": startDate,
          id: this.id,
          rightsId: '',
          rightsName: this.rightsName,
          branchName: this.branchName,
          channelName: this.channelName,
          "userId": '',
          "userName": this.userName,
          serviceStatus: this.status,
          planName: this.planName,
          "page": '',
          "size": '',
        }).then(response => {
          if (response.errorCode == 0) {
            var blob = this.Decode(response.data);
            if (window.URL.createObjectURL(blob).indexOf(location.host) < 0) {//ie不支持
              this.href = window.navigator.msSaveOrOpenBlob(blob, '订单表格.xlsx');
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
        a.download = '订单表格.xlsx';
        a.href = blobUrl;
        a.click();
      },
      getcommodityData(str) {
        if (this.statusText) {
          this.resetTitle(this.statusText);
        }

        if (str == 'search') {
          this.page = 1;
        }
        var endDate = '', startDate = '';
        if (this.endDate || this.startDate) {
          endDate = Date.parse(new Date(this.endDate.replace(/-/g, "/")));
          startDate = Date.parse(new Date(this.startDate.replace(/-/g, "/")));
        } else {
          endDate = this.endDate;
          startDate = this.startDate;
        }
        Service.rightorder().rightsorderList({
          rightsLevelType: 1,
          "endDate": endDate,
          "startDate": startDate,
          id: this.id,
          rightsId: '',
          rightsName: this.rightsName,
          branchName: this.branchName,
          channelName: this.channelName,
          "userId": '',
          "userName": this.userName,
          serviceStatus: this.status,
          planName: this.planName,
          levelNo: this.levelNo,
          "page": this.page,
          "size": this.size,
        }).then(response => {
          if (response.errorCode == 0) {
            if (response.data.records.length == 0) {
              this.noData = false;
            } else {
              this.noData = true;
              this.total = response.data.total;
              for (let i in response.data.records) {
                response.data.records[i].isshowDes = false;
                 if(response.data.records[i].goodsName){
                   if (response.data.records[i].goodsName.length > 12) {
                    response.data.records[i].goodsName =  response.data.records[i].goodsName.substring(0, 12) + '...'
                  }
                }
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

