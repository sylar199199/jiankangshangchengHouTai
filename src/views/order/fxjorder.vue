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
                width: 180px;
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
                line-height: 16px;

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
                padding: 8px;
                word-break: break-all;

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
                min-width: 100px;
                max-width: 100px;
                text-align: left;
              }
              td:nth-of-type(5) {
                min-width: 70px;
                max-width: 100px;
                text-align: left;
              }
              td:nth-of-type(6) {
                min-width: 70px;
                max-width: 100px;
                text-align: left;
              }
              td:nth-of-type(7) {
                min-width: 70px;
                max-width: 100px;
                text-align: center;
              }
              td:nth-of-type(10) {
                min-width: 66px;
                max-width: 100px;
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
                min-width: 110px;
                max-width: 110px;
                text-align: center;
                word-break: break-all;
              }

              td:nth-last-child(1) {
                min-width: 80px;
                max-width: 80px;
                text-align: center;
              }
               td:nth-last-child(7) {
                min-width: 80px;
                max-width: 80px;
                text-align: center;
              }
               td:nth-last-child(8) {
                min-width: 80px;
                max-width: 80px;
                text-align: center;
              }

              td:nth-of-type(5) {
                min-width: 60px;
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
                <span class="searchLable colorGrey font12">订单编号 </span>
                <input type="text" v-model="orderNo" class="serchInput font12 colorblack" placeholder="订单编号"/>
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
                <span class="searchLable colorGrey font12">商品名称 </span>
                <input type="text" v-model="goodsName" class="serchInput font12 colorblack" placeholder="商品名称"/>
              </div>

              <div class="searchBox searchBoxone flex">
                <span class="searchLable searchName colorGrey font12">购买者</span>
                <el-select v-model="usertype" placeholder="">
                  <el-option
                    v-for="item in userOption"
                    :key="item.value"
                    :label="item.name"
                    :value="item.value">
                  </el-option>
                </el-select>
                <input type="text" v-model="userValue" class="serchInput font12 colorblack  marginLeft10"
                       placeholder="购买者"/>
              </div>
              <div class="searchBox searchBoxone flex">
                <span class="searchLable searchName colorGrey font12" style="width: 85px;">使用人/收货人</span>
                <el-select v-model="consigneeType" placeholder="">
                  <el-option
                    v-for="item in consigneeOption"
                    :key="item.value"
                    :label="item.name"
                    :value="item.value">
                  </el-option>
                </el-select>
                <input type="text" v-model="consigneeValue" class="serchInput font12 colorblack marginLeft10"
                       placeholder="使用人/收货人"/>
              </div>
              <div class="searchBox flex">
                <span class="searchLable searchName colorGrey font12">活动类型</span>
                <el-select v-model="activityType" placeholder="">
                  <el-option
                    v-for="item in channelsOption"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id">
                  </el-option>
                </el-select>
              </div>
               <div class="searchBox flex">
                <span class="searchLable searchName colorGrey font12">商品类型</span>
                <el-select v-model="goodsType" placeholder="">
                  <el-option
                    v-for="item in goodsoption"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id">
                  </el-option>
                </el-select>
              </div>
              <div class="searchBox flex">
                <span class="searchLable searchName colorGrey font12">支付渠道</span>
                <el-select v-model="payChannel" placeholder="">
                  <el-option
                    v-for="item in payChannelOption"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id">
                  </el-option>
                </el-select>
              </div>
              <div class="searchBox flex">
                <span class="searchLable searchName colorGrey font12">支付方式</span>
                <el-select v-model="payMethod" placeholder="">
                  <el-option
                    v-for="item in payMethodOption"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id">
                  </el-option>
                </el-select>
              </div>
              <div class="searchBox flex">
                <span class="searchLable searchName colorGrey font12" style="width: 90px;">是否使用兑换码</span>
                <el-select v-model="useRedeemCode" placeholder="">
                  <el-option
                    v-for="item in useRedeemoption"
                    :key="item.value"
                    :label="item.name"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
              <div class="searchBox flex">
                <span class="searchLable searchName colorGrey font12">下单时间</span>
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

              <div class="searchBox flex">
                <div class="bacButton  cursor" v-show="orderView" @click="getcommodityData('search')">查询</div>
                <div class="bacButton cursor" style='margin: 0 15px;' @click="daochu()">导出</div>
                <div class="fileBox" v-show="orderImportExpress">
                  <div class="applicaninfo">
                    <el-upload
                      ref="upload"
                      class="upload-demo imgBox"
                      name="file"
                      :action="upFileAction"
                      :headers="headers"
                      :on-change="handleChange"
                      :on-success="handleAvatarSuccess"
                      :before-upload="beforeAvatarUpload"
                      :on-error="errphoto"
                      :show-file-list="false"
                      accept="">
                      <div class="uploadtext">
                        <p>批量发货</p>
                      </div>
                    </el-upload>
                  </div>
                </div>
              </div>

            </div>

          </div>
          <div class="dataGeneral bannerTable">
            <table v-if="noData" class="table" v-show="orderView">
              <tr>
                <th v-for="item in sortDatas">
                  {{item.name}}
                </th>
              </tr>
              <tr v-for="(item,index) in tableData">
                <td>
                  {{item.orderNo}}
                </td>
                <td>
                  <div class="flex">
                    <!-- <img class="productImg" :src="item.goodsImgUrl"> -->
                    <div class="productBox">
                      <p class="colorblack font12 productText">{{item.goodsName}}</p>
                      <p class="colore6 font12 productText">￥{{item.goodsPrice}}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <span v-if="item.useRedeemCode">是</span>
                  <span v-if="!item.useRedeemCode">否</span>
                </td>
                <td v-if="item.activityType">
                  <span v-if="item.activityType == 1">商品分组</span>
                  <span v-if="item.activityType == 2">抽奖福利</span>
                  <span v-if="item.activityType == 3">限时抢购</span>
                  <span v-if="item.activityType == 4">活动h5</span>
                  <span v-if="item.activityType == 5">兑换活动</span>
                  <span v-if="item.activityType == 6">幸运大抽奖</span>
                  <span v-if="item.activityType == 7">多人拼团</span>
                </td>
                <td v-if="!item.activityType">
                </td>
                 <td v-if="item.goodsType">
                  <span v-if="item.goodsType == 1">卡券</span>
                  <span v-if="item.goodsType == 2">实物</span>
                  <span v-if="item.goodsType == 3">保险</span>
                </td>
                <td v-if="!item.goodsType">
                </td>
                <td>{{item.payNo}}</td>
                <td v-if="item.afsStatus">
                  <span v-if="item.afsStatus == 1">退货中</span>
                  <span v-if="item.afsStatus == 2">拒绝退货</span>
                  <span v-if="item.afsStatus == 3">同意退货</span>
                  <span v-if="item.afsStatus == 4">退款中</span>
                  <span v-if="item.afsStatus == 5">拒绝退款</span>
                  <span v-if="item.afsStatus == 6">已退款</span>
                  <!--{{afsresetTitle(item.afsStatus)}}-->
                </td>
                <td v-if="!item.afsStatus">
                  <span v-if="item.status == 1">待支付</span>
                   <span v-if="item.status == 2">待发货</span>
                  <span v-if="item.status == 3">待收货</span>
                  <span v-if="item.status == 4 && item.planActivateNowFlag == '04'">交易成功</span>
                  <span v-if="item.status == 4 && item.planActivateNowFlag != '04'">待激活</span>
                  <span v-if="item.status == 5 ">已激活</span>
                    <span v-if="item.status == 20 && item.groupStatus == 1">待成团</span>
                  <span v-if="item.status == 6">交易关闭</span>
                  <span v-if="item.status == 7">交易完成</span>
                  <!--{{resetTitleone(item.status)}}-->
                </td>
                <td>
                  {{item.userName}}
                  <br>
                  <span v-if="item.userPhone">{{item.userPhone}}</span>
                </td>
                <td>
                  <span v-if="item.consigneeName">{{item.consigneeName}}</span>
                  <br>
                  <span v-if="item.consigneePhone">{{item.consigneePhone}}</span>
                </td>
                <td>
                  <span v-if="item.payTime"> {{timetrans(item.payTime)}}</span>
                  <span v-if="!item.payTime"></span>

                </td>
                <td>
                  <span class="color2087 font12 cursor" @click="goDetail(item.id)">详情</span>
                  <span class="line" v-if="item.status == 2"></span>
                  <span class="color2087 font12 cursor" v-if="item.status == 2" v-show="orderImportExpress"
                        @click="ship(item.id)">发货</span>
                </td>
              </tr>
            </table>
            <div v-if="!noData" class="noData">
              <img class="nodataImg" src="../../assets/images/nodatalist.png"/>
              <p>暂无数据~</p>
            </div>
            <div class="block" v-if="noData" v-show="orderView">
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
        orderType: '',
        orderTypeOption: [{name: '全部', value: ''}, {name: '权益订单', value: '02'}, {name: '非权益订单', value: '01'}],
        upFileAction: '',
        headers: {},
        orderId: '',
        express: {
          expressName: "",
          expressNo: ''
        },
        statusOption: [
          {name: '全部'},
          {name: '待支付'}, {name: '待发货'}, {name: '待收货'}, {name: '待激活/交易成功'}, {name: '已激活'}, {name: '交易关闭'}, {name: '交易完成'}, {name: '退货中'},
          {name: '拒绝退货'}, {name: '同意退货'}, {name: '退款中'}, {name: '拒绝退款'}, {name: '已退款'},{name: '待成团'}
        ],
        statusText: '全部',
        consigneeValue: "",
        userValue: '',
        usertype: 0,
        userPhone: '',
        userName: '',
        userOption: [{name: '账号姓名', value: 0}, {name: '手机号', value: 1}],
        consigneeOption: [{name: '姓名', value: 0}, {name: '手机号', value: 1}],
        sortDatas: [
          {orderType: '', name: '订单编号', showBlue: false, orderField: ''},
          {orderType: '', name: '商品', showBlue: false, orderField: ''},
          {orderType: '', name: '是否使用兑换码', showBlue: false, orderField: ''},
          {orderType: '', name: '活动类型', showBlue: false, orderField: ''},
          {orderType: '', name: '商品类型', showBlue: false, orderField: ''},
          {orderType: '', name: '商户订单号', showBlue: false, orderField: ''},
          {orderType: '', name: '订单状态', showBlue: false, orderField: ''},
          // {orderType:'',name: '权益订单',showBlue: false,orderField: ''},
          {orderType: '', name: '购买者', showBlue: false, orderField: ''},
          {orderType: '', name: '使用人/收货人', showBlue: true, orderField: ''},
          {orderType: '', name: '下单时间', showBlue: false, orderField: ''},
          {orderType: '', name: '操作', showBlue: false, orderField: ''}
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
        payMethod: '',
        useRedeemCode: '',
        useRedeemoption: [{name: '全部', value: ''}, {name: '是', value: true}, {name: '否', value: false}],
        payMethodOption: [{name: '全部', id: ''}, {name: '支付宝', id: '1'}, {name: '微信', id: '2'}],
        payChannel: '',
        payChannelOption: [{name: '全部', id: ''}, {name: '昆仑微信公众号', id: '01'}, {
          name: '昆仑APP',
          id: '02'
        }, {name: '健康商城（分享家）', id: '03'}],
        goodsType: '',
        goodsoption:[{name: '全部', id: ''},{name: '卡券', id: '1'},{name: '实物', id: '2'},{name: '保险', id: '3'}],
        activityType: '',
       channelsOption: [{name: '全部', id: ''}, {name: '商品分组', id: '1'}, {name: '抽奖福利', id: '2'}, {
          name: '限时抢购',
          id: '3'
        }, {name: '活动h5', id: '4'},{name: '兑换活动', id: '5'},{name: '幸运大抽奖', id: '6'},{name: '多人拼团', id: '7'}],
        insuranceDate: '',
        tableData: [],
        noData: true,
        statusTitle: "",
        statusList: [],
        groupStatus:'',
        orderView: false,
        orderExport: false,
        orderImportExpress: false,
        orderShipOperate: false
      };
    },
    created() {
      var tokenVal = Util.localStorageUtil.get('access_token');
      this.headers = {token: tokenVal,shopId: 1};
      this.orderView = this.havePermissions('order:view[shopId=1]')
      this.orderExport = this.havePermissions('order:export[shopId=1]')
      this.orderImportExpress = this.havePermissions('order:importExpress[shopId=1]')
      this.orderShipOperate = this.havePermissions('order:ship:operate[shopId=1]')
      if (this.$route.query.page) {
        this.page = parseInt(this.$route.query.page);
      } else {
        this.page = 1;
      }
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
      if (this.$route.query.statius) {
        if (this.$route.query.statius == 1) {
          this.statusText = '待发货'
        }
        if (this.$route.query.statius == 2) {
          this.statusText = '退货中'
        }
        if (this.$route.query.statius == 3) {
          this.statusText = '退款中'
        }
      }
      if (this.orderView) {
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
          Store.commit("setIsLoading", false);
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
             this.statusList = [];
            this.groupStatus = '';
            this.status = '1';
            this.afsStatus = '';
            break;
          case '待发货':
             this.statusList = [];
            this.groupStatus = '';
            this.status = '2';
            this.afsStatus = '';
            break;
          case '待收货':
             this.statusList = [];
            this.groupStatus = '';
            this.status = '3';
            this.afsStatus = '';
            break;
          case '待激活/交易成功':
             this.statusList = [];
            this.groupStatus = '';
            this.status = '4';
            this.afsStatus = '';
            break;
          case '已激活':
             this.statusList = [];
            this.groupStatus = '';
            this.status = '5';
            this.afsStatus = '';
            break;
          case '交易关闭':
             this.statusList = [];
            this.groupStatus = '';
            this.status = '6';
            this.afsStatus = '';
            break;
          case '交易完成':
             this.statusList = [];
            this.groupStatus = '';
            this.status = '7';
            this.afsStatus = '';
            break;
          case '退货中':
             this.statusList = [];
            this.groupStatus = '';
            this.status = '';
            this.afsStatus = '1';
            break;
          case '拒绝退货':
             this.statusList = [];
            this.groupStatus = '';
            this.status = '';
            this.afsStatus = '2';
            break;
          case '同意退货':
             this.statusList = [];
            this.groupStatus = '';
            this.status = '';
            this.afsStatus = '3';
            break;
          case '退款中':
             this.statusList = [];
            this.groupStatus = '';
            this.status = '';
            this.afsStatus = '4';
            break;
          case '拒绝退款':
             this.statusList = [];
            this.groupStatus = '';
            this.status = '';
            this.afsStatus = '5';
            break;
          case '已退款':
            this.statusList = [];
            this.groupStatus = '';
            this.status = '';
            this.afsStatus = '6';
            break;
          case '待成团':
            this.status = '20';
            this.afsStatus = ''
            this.statusList = []
            this.groupStatus = 1
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
      undercarriage(id) {
        $(".dialogone").css({'display': 'block'})
      },
      goDetail(id) {
        this.$router.push({name: 'fxjorderDetail', query: {id: id}})
      },
      handleSizeChange(val) {
        this.size = val;
        this.getcommodityData('')
      },
      handleCurrentChange(val) {
        this.$router.push({name: 'fxjorder', query: {page: val}})
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
      daochu() {
        if (this.statusText) {
          this.resetTitle(this.statusText);
        }
        if (this.usertype == 0) {
          this.userName = this.userValue;
          this.userPhone = ''
        }
        if (this.usertype == 1) {
          this.userPhone = this.userValue;
          this.userName = '';
        }
        if (this.consigneeType == 0) {
          this.consigneeName = this.consigneeValue;
          this.consigneePhone = '';
        }
        if (this.consigneeType == 1) {
          this.consigneePhone = this.consigneeValue;
          this.consigneeName = '';
        }

        var endDate = '', startDate = '';
        if (this.endDate || this.startDate) {
          endDate = Date.parse(new Date(this.endDate.replace(/-/g, "/")));
          startDate = Date.parse(new Date(this.startDate.replace(/-/g, "/")));
        } else {
          endDate = this.endDate;
          startDate = this.startDate;
        }
        Service.order().daochu({
          groupStatus: this.groupStatus,
          goodsType: this.goodsType,
          useRedeemCode: this.useRedeemCode,
          activityType: this.activityType,
          orderType: this.orderType,
          paymentType: this.payMethod,
          payChannel: this.payChannel,
          "channelId": this.channelId,
          "endDate": endDate,
          "consigneeName": this.consigneeName,
          "page": this.page,
          "size": this.size,
          orderSource: 2,
          "startDate": startDate,
          consigneePhone: this.consigneePhone,
          goodsName: this.goodsName,
          "status": this.status,
          afsStatus: this.afsStatus,
          "orderNo": this.orderNo,
          userName: this.userName,
          userPhone: this.userPhone
        }).then(response => {
          if (response.errorCode == 0) {
            var blob = this.Decode(response.data);
            if (window.URL.createObjectURL(blob).indexOf(location.host) < 0) {//ie不支持
              this.href = window.navigator.msSaveOrOpenBlob(blob, '订单表格.xlsx');
            } else {
              console.log(this.download)
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
        if (this.usertype == 0) {
          this.userName = this.userValue;
          this.userPhone = ''
        }
        if (this.usertype == 1) {
          this.userPhone = this.userValue;
          this.userName = '';
        }
        if (this.consigneeType == 0) {
          this.consigneeName = this.consigneeValue;
          this.consigneePhone = '';
        }
        if (this.consigneeType == 1) {
          this.consigneePhone = this.consigneeValue;
          this.consigneeName = '';
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
        Service.order().orderList({
          groupStatus: this.groupStatus,
          goodsType: this.goodsType,
          useRedeemCode: this.useRedeemCode,
          activityType: this.activityType,
          orderType: this.orderType,
          paymentType: this.payMethod,
          payChannel: this.payChannel,
          "channelId": this.channelId,
          "endDate": endDate,
          "consigneeName": this.consigneeName,
          "page": this.page,
          "size": this.size,
          orderSource: 2,
          "startDate": startDate,
          consigneePhone: this.consigneePhone,
          goodsName: this.goodsName,
          "status": this.status,
          afsStatus: this.afsStatus,
          "orderNo": this.orderNo,
          userName: this.userName,
          userPhone: this.userPhone
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

