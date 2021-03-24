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
                <span class="searchLable colorGrey font12">收件人姓名 </span>
                <input type="text" v-model="consigneeName" class="serchInput font12 colorblack" placeholder="收件人姓名"/>
              </div>
              <div class="searchBox">
                <span class="searchLable colorGrey font12">活动名称 </span>
                <input type="text" v-model="activityName" class="serchInput font12 colorblack" placeholder="活动名称"/>
              </div>
              <div class="searchBox">
                <span class="searchLable colorGrey font12">用户姓名 </span>
                <input type="text" v-model="userName" class="serchInput font12 colorblack" placeholder="用户姓名"/>
              </div>
              <div class="searchBox flex">
                <div class="bacButton  cursor" @click="getcommodityData('search')" v-show="participantView">查询</div>
                <div class="bacButton cursor" style='margin: 0 15px;' @click="daochu()" v-show="participantExport">导出</div>
                <div class="bacButton cursor" style='margin: 0 15px;' @click="sendMessage()" v-show="participantSendTemplate">发送模板通知</div>
              </div>
            </div>
          </div>
          <div class="dataGeneral bannerTable">
            <table v-if="noData" v-show="participantView" class="table">
              <tr>
                <th v-for="item in sortDatas">
                  {{item.name}}
                </th>
              </tr>
              <tr v-for="(item,index) in tableData">
                <td>
                  {{item.activityName}}
                </td>
                <td>
                  {{item.userName}}

                </td>
                <td>{{item.consigneeName}}</td>


                <td>
                  {{item.consigneePhone}}
                </td>
              </tr>
            </table>
            <div v-if="!noData" class="noData">
              <img class="nodataImg" src="../../assets/images/nodatalist.png"/>
              <p>暂无数据~</p>
            </div>
            <div class="block" v-if="noData" v-show="participantView">
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
        activityName: '',
        consigneeName: '',
        userName: '',
        orderType: '',
        orderTypeOption: [{name: '全部', value: ''}, {name: '权益订单', value: '02'}, {name: '非权益订单', value: '01'}],
        upFileAction: '',
        headers: {},
        sortDatas: [
          {orderType: '', name: '活动名称', showBlue: false, orderField: ''},
          {orderType: '', name: '用户姓名', showBlue: false, orderField: ''},
          {orderType: '', name: '收件人姓名', showBlue: false, orderField: ''},
          {orderType: '', name: '收件人手机号', showBlue: false, orderField: ''},
        ],
        endDate: "",
        consigneeType: 0,
        consigneeName: "",
        consigneePhone: '',
        startDate: "",
        goodsName: '',
        orderNo: '',
        status: '',
        afsStatus: '',
        total: 0,
        size: 10,
        page: 1,

        insuranceDate: '',
        tableData: [],
        noData: true,
        statusTitle: "",
        participantView:false,
        participantExport:false,
        participantSendTemplate:false,

      };
    },
    created() {
      var tokenVal = Util.localStorageUtil.get('access_token');
      this.headers = {token: tokenVal,shopId: 1};
      if (this.$route.query.page) {
        this.page = parseInt(this.$route.query.page);
      } else {
        this.page = 1;
      }
      this.participantView = this.havePermissions('rightsPromotion:participant:view')
      this.participantExport = this.havePermissions('rightsPromotion:participant:export')
      this.participantSendTemplate = this.havePermissions('rightsPromotion:participant:sendTemplate')
    },
    computed: {},
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
      'usertype': function () {
        if (this.usertype == 0) {
          this.userName = this.userValue;
          this.userPhone = ''
        }
        if (this.usertype == 1) {
          this.userPhone = this.userValue;
          this.userName = '';
        }
      },
      'consigneeType': function () {
        if (this.consigneeType == 0) {
          this.consigneeName = this.consigneeValue;
          this.consigneePhone = '';
        }
        if (this.consigneeType == 1) {
          this.consigneePhone = this.consigneeValue;
          this.consigneeName = '';
        }
      },
      'statusText': function () {
        if (this.statusText) {
          this.resetTitle(this.statusText);
        }
      },
    },
    mounted() {
      this.upFileAction = Global.requestUrl + "/kl-store/admin/order/import/express";
      if(this.participantView){
        this.getcommodityData('');//获取订单列表
      }
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
      afsresetTitle(status) {
        switch (status) {
          case 1:
            this.statusTitle = '退货中';
            break;
          case 2:
            this.statusTitle = '拒绝退货';
            break;
          case 3:
            this.statusTitle = '同意退货';
            break;
          case 4:
            this.statusTitle = '退款中';
            break;
          case 5:
            this.statusTitle = '拒绝退款';
            break;
          case 6:
            this.statusTitle = '已退款';
            break;
          default:
            this.statusTitle = '其他';
            break
        }
        return this.statusTitle;
      },
      resetTitleone(status) {
        switch (status) {
          case 1:
            this.statusTitle = '待支付';
            break;
          case 2:
            this.statusTitle = '待发货';
            break;
          case 3:
            this.statusTitle = '待收货';
            break;
          case 4:
            this.statusTitle = '待激活/交易成功';
            break;
          case 5:
            this.statusTitle = '已激活';
            break;

          case 6:
            this.statusTitle = '交易关闭';
            break;
          case 7:
            this.statusTitle = '交易完成';
            break;
          default:
            this.statusTitle = '其他';
            break
        }
        return this.statusTitle;
      },
      resetTitle(title) {
        switch (title) {
          case '待支付':
            this.status = '1';
            this.afsStatus = '';
            break;
          case '待发货':
            this.status = '2';
            this.afsStatus = '';
            break;
          case '待收货':
            this.status = '3';
            this.afsStatus = '';
            break;
          case '待激活/交易成功':
            this.status = '4';
            this.afsStatus = '';
            break;
          case '已激活':
            this.status = '5';
            this.afsStatus = '';
            break;
          case '交易关闭':
            this.status = '6';
            this.afsStatus = '';
            break;
          case '交易完成':
            this.status = '7';
            this.afsStatus = '';
            break;
          case '退货中':
            this.status = '';
            this.afsStatus = '1';
            break;
          case '拒绝退货':
            this.status = '';
            this.afsStatus = '2';
            break;
          case '同意退货':
            this.status = '';
            this.afsStatus = '3';
            break;
          case '退款中':
            this.status = '';
            this.afsStatus = '4';
            break;
          case '拒绝退款':
            this.status = '';
            this.afsStatus = '5';
            break;
          case '已退款':
            this.status = '';
            this.afsStatus = '6';
            break;
          default:
            this.status = '';
            this.afsStatus = '';
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
      handleSizeChange(val) {
        this.size = val;
        this.getcommodityData('')
      },
      handleCurrentChange(val) {
        this.$router.push({name: 'legalactivity', query: {page: val}})
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
      Decode(arr) {
        var bstr = atob(arr), n = bstr.length, u8arr = new Uint8Array(n);
        while (n--) {
          u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
      },
      sendMessage() {
        Service.rightpromotion().rightsendTemplate({
          activityName: this.activityName,
          consigneeName: this.consigneeName,
          userName: this.userName,
          "page": this.page,
          "size": this.size,
        }).then(response => {
          if (response.errorCode == 0) {
            this.$message.success('模板消息已经发送')
          } else {
            this.$message.error(response.message)
          }
        }, err => {
        });
      },
      daochu() {

        Service.rightpromotion().rightpromotionexport({
          activityName: this.activityName,
          consigneeName: this.consigneeName,
          userName: this.userName,
          "page": this.page,
          "size": this.size,
        }).then(response => {
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
      getcommodityData(str) {

        if (str == 'search') {
          this.page = 1;
        }

        Service.rightpromotion().rightpromotionquery({
          activityName: this.activityName,
          consigneeName: this.consigneeName,
          userName: this.userName,
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

