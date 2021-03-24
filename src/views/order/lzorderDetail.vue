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
          margin-bottom: 20px;

          .searchContent {
            .statusBac {
              width: 976px;
              height: 152px;

              .orderDeatileTitle {
                padding: 55px 30px 6px;
              }

              .orderDeatilesecTitle {
                padding: 0px 30px;
              }
            }
          }

          .dataGenetalTitle {
            border-bottom: 1px solid #f6f6f6;
            padding-bottom: 20px;

            .addRemark {
              margin-top: -10px;
            }
          }

          .orderInfo {
            .infoLeft {
              min-width: 225px;
              .infoBox {
                margin-top: 27px;
               
                .borderButton {
                  border-radius: 12px;
                  display: inline-block;
                  height: 24px;
                  width: 74px;
                  line-height: 24px;
                }

                .number {
                  margin-left: 60px;
                  margin-top: 6px;
                }

                .inputText {
                  border: 1px solid #f6f6f6;
                }
              }
            }

            .infoRight {
              position: relative;
              margin-left: 130px;
                .headBox{
                  display: flex;
                  align-items: center;
                  .headimg{
                    height: 30px;
                    width: 30px;
                    border-radius: 50%;
                    margin-left: -10px;
                  }
                }
              .infoBox {
                margin-top: 27px;
                .timeSpan {
                  margin-right: 20px;
                }

              }

              .twoIcon {
                position: absolute;
                top: 30px;
                left: 55px;
              }

              .threeIcon {
                height: 94px;
                left: 76px;
              }

              .twoIconone {
                position: absolute;
                top: 30px;
                left: 76px;
              }

              .foureIcon {
                left: 76px;
                height: 140px;
                top: 28px;
              }
            }

            .orderDetailTable {
              width: 100%;
              border: 1px solid #f6f6f6;
              margin-top: 20px;

              tr:nth-of-type(2) {
                border-bottom: 1px solid #f6f6f6;
              }

              tr {
                th {
                  font-size: 12px;
                  text-align: center;
                  background: #f6f6f6;
                  color: #929292;
                }

                th:nth-child(1) {
                  text-align: left;
                  padding-left: 15px;
                }

                th:nth-child(3) {
                  text-align: right;
                  padding-right: 15px;

                }

                td {
                  text-align: center;
                  padding: 8px 0;

                  .productImg {
                    width: 116px;
                    height: 60px;
                    max-width: 116px;
                    max-height: 60px;
                  }

                  .productBox {
                    height: 60px;
                    padding-left: 10px;

                    .productText {
                      margin-bottom: 0px;
                      margin-top: 0;
                    }
                  }

                }

                td:nth-of-type(1) {
                  min-width: 200px;
                  max-width: 200px;
                  text-align: left;
                  padding-left: 15px;
                }

                td:nth-of-type(3) {
                  text-align: right;
                  padding-right: 15px;
                }

                td:nth-of-type(5) {
                  text-align: right;
                  padding-right: 15px;
                }
              }
            }

            .orderDetailTableone {
              tr {
                border-bottom: 1px solid #f6f6f6;

                th {
                  color: #929292;
                }

                td {
                  text-align: center;
                  padding: 20px 0;
                }

                td:nth-of-type(1) {
                  min-width: 100px;
                  max-width: 100px;
                  text-align: left;
                  padding-left: 15px;
                }

                td:nth-of-type(2) {
                  min-width: 300px;
                  max-width: 300px;
                  text-align: center;
                  padding-left: 15px;
                }
              }
            }

            .orderDetailTabletwo {
              tr {
                th:nth-of-type(1) {
                  text-align: center;
                }

                th:nth-of-type(3) {
                  text-align: center;
                }

                td {
                  text-align: center;
                }

                td:nth-of-type(1) {
                  min-width: 90px;
                  max-width: 90px;
                  text-align: center;
                  padding-left: 15px;
                }

                td:nth-of-type(2) {
                  min-width: 100px;
                  max-width: 100px;
                  text-align: center;
                  padding-left: 15px;
                }

                td:nth-of-type(3) {
                  text-align: center;
                }

                td:nth-of-type(6) {
                  text-align: center;
                  min-width: 120px;
                  max-width: 120px;
                }
              }
            }
          }
        }
      }
    }
  }

  .dialogone::after, .dialog::after, .dialogtwo::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 0;
    vertical-align: middle;
  }

  .dialogone, .dialog, .dialogtwo {
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
          <div class="dataGeneral">
            <div class="searchContent">
              <div class="statusBac" :style="{backgroundImage: 'url(' + imageUrl + ')',backgroundRepeat: 'no-repeat'}">
                <div class="orderDeatileTitle font16 colorblack fontWeight">
                  {{statusTitle}}
                </div>
                <div v-if="afs">
                  <div class="orderDeatilesecTitle colorGrey font12" v-if="afs.status == 2 || afs.status == 5">
                    拒绝原因：{{afs.message}}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="dataGeneral backWhite padding20">
            <div class="dataGenetalTitle">
              <span class="colorblack font16 fontWeight marginright10">订单信息</span>
            </div>
            <div class="orderInfo flex">
              <div class="infoLeft">
                <div class="infoBox">
                  <span class="colorGrey font12 marginright10">订单编号</span>
                  <span class="colorblack font12">{{orderDetail.orderNo}}</span>
                </div>
              </div>
              <div class="infoRight" v-if="(orderDetail.payTime)">
                <div class="infoBox">
                  <span class="colorGrey font12 timeSpan">支付时间</span>
                  <span class="colorblack font12">{{timetrans(orderDetail.payTime)}}</span>
                </div>
                <div class="infoBox">
                  <span class="colorGrey font12 timeSpan">创建订单</span>
                  <span class="colorblack font12">{{timetrans(orderDetail.createDate)}}</span>
                </div>
                 <div v-if="orderDetail.activityType == 7">
                    <div class="infoBox" v-if="groupPurchase.status == 2">
                      <span class="colorGrey font12 timeSpan">拼团成功</span>
                      <img class="headimg" v-for="item in groupPurchase.participantList" :key="item.id" :src="item.headImgUrl" />
                    </div>
                </div>
              </div>
              <div class="infoRight" v-if="!(orderDetail.payTime)">
                <div class="infoBox">
                  <span class="colorGrey font12 timeSpan">创建订单</span>
                  <span class="colorblack font12">{{timetrans(orderDetail.createDate)}}</span>
                </div>
              </div>
              <div class="infoRight" v-if="orderDetail.goodsType == 1 && invalidDate" >
                <div class="infoBox">
                  <span class="colorGrey font12 timeSpan">卡密失效时间</span>
                  <span class="colorblack font12">{{timetrans(invalidDate)}}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="dataGeneral backWhite padding20" v-if="orderDetail.consignee">
            <div class="dataGenetalTitle">
              <span class="colorblack font16 fontWeight marginright10">收货信息</span>
            </div>
            <div class="orderInfo">
              <div class="infoLeft">
                <div class="infoBox">
                  <span class="colorGrey font12 marginright10">收货信息</span>
                  <span class="colorblack font12">{{shouhuo}}</span>
                  <span class="copyAdress marginLeft10 font12 cursor color2087" @click="copyAdress('copyAdress')"
                        :data-clipboard-text="shouhuo">复制</span>
                </div>
                <div class="infoBox" v-if="orderDetail.express">
                  <span class="colorGrey font12 marginright10">发货物流</span>
                  <input class="colorblack font12 inputText" v-if="showInput" v-model="orderDetail.express.expressName"
                         @change="changeExpress()"/>
                  <span v-if="!showInput" class="colorblack font12">{{orderDetail.express.expressName}}</span><i
                  v-show="orderShipOperate" class="iconfont iconbianji marginLeft10 color2087 cursor" @click="showInput = true"></i>
                  <div class="colorblack number font12">
                    <input class="colorblack font12 inputText" v-if="showInput" type="text"
                           v-show="orderShipOperate" v-model="orderDetail.express.expressNo" @change="changeExpress()"/>
                    <span v-if="!showInput" class="colorblack font12">{{orderDetail.express.expressNo}}</span>
                    <span class="copyfahuo marginLeft10 font12 cursor color2087" @click="copyAdress('copyfahuo')"
                          :data-clipboard-text="orderDetail.express.expressName+','+orderDetail.express.expressNo"> 复制</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
           <div class="dataGeneral backWhite padding20" v-if="orderDetail.insuranceInfo">
            <div class="dataGenetalTitle">
              <span class="colorblack font16 fontWeight marginright10">用户信息</span>
            </div>
            <div class="orderInfo">
              <div class="infoLeft">
                <div class="infoBox">
                  <span class="colorGrey font12 marginright10">姓名</span>
                  <span class="colorblack font12">{{orderDetail.insuranceInfo.name}}</span>
                </div>
                <div class="infoBox">
                   <span class="colorGrey font12 marginright10">手机号</span>
                  <span class="colorblack font12">{{orderDetail.insuranceInfo.phone}}</span>
                </div>
                <div class="infoBox">
                   <span class="colorGrey font12 marginright10">身份证号</span>
                  <span class="colorblack font12">{{orderDetail.insuranceInfo.idNumber}}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="dataGeneral backWhite padding20" v-if="orderDetail.card">
            <div class="dataGenetalTitle">
              <span class="colorblack font16 fontWeight marginright10">使用信息</span>
            </div>
            <div class="orderInfo flex">
              <div class="infoLeft">
                <div class="infoBox">
                  <span class="colorGrey font12 marginright10">卡号</span>
                  <span class="colorblack font12">{{orderDetail.card.cardNumber}}</span>
                </div>
                <!--<div class="infoBox">-->
                <!--<span class="colorGrey font12 marginright10">姓名</span>-->
                <!--<span class="colorblack font12">{{orderDetail.card.cardNumber}}</span>-->
                <!--</div>-->
                <div class="infoBox">
                  <span class="colorGrey font12 marginright10">使用状态</span>
                  <span class="colorblack font12" v-if="orderDetail.planActivateNowFlag == '01'">待激活</span>
                  <span class="colorblack font12" v-if="orderDetail.planActivateNowFlag == '02'">已完成</span>
                  <span class="colorblack font12" v-if="orderDetail.planActivateNowFlag == '03'">已激活</span>
                  <span class="colorblack font12" v-if="orderDetail.planActivateNowFlag == '04'">已完成</span>
                </div>
              </div>
              <div class="infoRight">
                <!--<div class="infoBox">-->
                <!--<span class="colorGrey font12 marginright10">手机号码</span>-->
                <!--<span class="colorblack font12">17666251233</span>-->
                <!--</div>-->
                <!--<div class="infoBox">-->
                <!--<span class="colorGrey font12 marginright10">预约城市</span>-->
                <!--<span class="colorblack font12">上海</span>-->
                <!--</div>-->
              </div>
            </div>
          </div>
          <div class="dataGeneral backWhite padding20" v-if="orderDetail.afs">
            <div class="dataGenetalTitle">
              <span class="colorblack font16 fontWeight marginright10">售后信息</span>
            </div>
            <div class="orderInfo flex">
              <div class="infoLeft">
                <div class="infoBox" v-show="orderAfterSale">
                  <span class="colorGrey font12 marginright10">售后状态</span>
                  <span class="colorblack font12 marginright10">{{statusTitle}}</span>
                  <!--<span v-if="statusTitle == '退货中'&& orderDetail.goodsType == 1" @click="returnMoney()" class="cursor colorfff borderButton marginright10">立即退款</span>-->
                  <span v-if="statusTitle == '退货中'&& orderDetail.goodsType == 1" @click="refuseReturn()"
                        class="cursor colorfff borderButton marginright10">拒绝退款</span>
                  <span v-if="statusTitle == '退货中'&& orderDetail.goodsType == 1"
                        @click="agreeReturn(orderDetail.goodsType,orderDetail.status)"
                        class="cursor colorfff borderButton marginright10">立即退款</span>
                  <span v-if="statusTitle == '退货中'&& orderDetail.goodsType == 2 && orderDetail.status == 2"
                        @click="agreeReturn(orderDetail.goodsType,orderDetail.status)"
                        class="cursor colorfff borderButton marginright10">立即退款</span>
                  <span v-if="statusTitle == '退货中'&& orderDetail.goodsType == 2 && orderDetail.status == 2"
                        @click="refuseReturn(orderDetail.goodsType,orderDetail.status)"
                        class="cursor colorfff borderButton marginright10">拒绝退款</span>
                  <span v-if="statusTitle == '退货中'&& orderDetail.goodsType == 2 && orderDetail.status != 2"
                        @click="agreeReturn(orderDetail.goodsType,orderDetail.status)"
                        class="cursor colorfff borderButton marginright10">同意退货</span>
                  <span v-if="statusTitle == '退货中'&& orderDetail.goodsType == 2 && orderDetail.status != 2"
                        @click="refuseReturn()" class="cursor colorfff borderButton">拒绝退货</span>
                  <span class="cursor borderButton colorfff" v-if="statusTitle == '拒绝退货'|| statusTitle == '拒绝退款'"
                        @click="openrefuse()">拒绝原因</span>
                  <span class="cursor borderButton colorfff" v-if=" statusTitle == '退款中'"
                        @click="returnMoney()">立即退款</span>
                  <span class="cursor borderButton colorfff" v-if=" statusTitle == '退款中'"
                        @click="refuseMoney()">拒绝退款</span>
                  <span class="cursor borderButton colorfff" v-if="statusTitle == '已退款' "
                        @click="openDetail()">退款详情</span>
                </div>
                <div class="infoBox">
                  <span class="colorGrey font12 marginright10">退货原因</span>
                  <span class="colorblack font12">{{orderDetail.afs.reason}}</span>
                </div>
                <div class="infoBox">
                  <span class="colorGrey font12 marginright10">退货编号</span>
                  <span class="colorblack font12">{{orderDetail.afs.id}}</span>
                </div>
                <div class="infoBox" v-if="orderDetail.afs.expressName">
                  <span class="colorGrey font12 marginright10">退货物流</span>
                  <span class="colorblack font12">{{orderDetail.afs.expressName}}</span>
                  <div class="colorblack number" v-if="orderDetail.afs.expressNo">
                    <span class="colorblack font12">{{orderDetail.afs.expressNo}}</span>
                    <span class="copytuihuo marginLeft10 font12 cursor color2087" @click="copyAdress('copytuihuo')"
                          :data-clipboard-text="orderDetail.afs.expressName+','+orderDetail.afs.expressNo"> 复制</span>
                  </div>
                </div>
              </div>
              <div class="infoRight"
                   v-if="(orderDetail.afs.status == '4' || orderDetail.afs.status == '3') && (orderDetail.goodsType == 2)">
                <div class="infoBox">
                  <span class="colorGrey font12 timeSpan">商家同意退货</span>
                  <span class="colorblack font12">{{timetrans(orderDetail.afs.returnReviewTime)}}</span>
                </div>
                <div class="infoBox">
                  <span class="colorGrey font12 timeSpan">买家申请退货</span>
                  <span class="colorblack font12">{{timetrans(orderDetail.afs.createDate)}}</span>
                </div>
                <img class="twoIconone" src="../../assets/images/twoIcon.png">
              </div>
              <div class="infoRight" v-if="orderDetail.afs.status == '6' && (orderDetail.goodsType == 1)">
                <div class="infoBox">
                  <span class="colorGrey font12 timeSpan">退款成功时间</span>
                  <span class="colorblack font12">{{timetrans(orderDetail.afs.refundCompleteTime)}}</span>
                </div>
                <div class="infoBox">
                  <span class="colorGrey font12 timeSpan">商家确认退款</span>
                  <span class="colorblack font12">{{timetrans(orderDetail.afs.refundTime)}}</span>
                </div>
                <div class="infoBox">
                  <span class="colorGrey font12 timeSpan">买家申请退货</span>
                  <span class="colorblack font12">{{timetrans(orderDetail.afs.createDate)}}</span>
                </div>
                <img class="twoIconone threeIcon" src="../../assets/images/threeIcon.png">
              </div>
              <div class="infoRight" v-if="orderDetail.afs.status == '6' && (orderDetail.goodsType == 2)">
                <div class="infoBox">
                  <span class="colorGrey font12 timeSpan">退款成功时间</span>
                  <span class="colorblack font12">{{timetrans(orderDetail.afs.refundCompleteTime)}}</span>
                </div>
                <div class="infoBox">
                  <span class="colorGrey font12 timeSpan">商家确认退款</span>
                  <span class="colorblack font12">{{timetrans(orderDetail.afs.refundTime)}}</span>
                </div>
                <div class="infoBox">
                  <span class="colorGrey font12 timeSpan">商家同意退货</span>
                  <span class="colorblack font12">{{timetrans(orderDetail.afs.returnReviewTime)}}</span>
                </div>
                <div class="infoBox">
                  <span class="colorGrey font12 timeSpan">买家申请退货</span>
                  <span class="colorblack font12">{{timetrans(orderDetail.afs.createDate)}}</span>
                </div>
                <img class="twoIcon foureIcon" src="../../assets/images/foueIcon.png">
              </div>
              <div class="infoRight"
                   v-if="orderDetail.afs.status == '1' || (orderDetail.afs.status == '2' )||(orderDetail.afs.status == '5' )">
                <div class="infoBox">
                  <span class="colorGrey font12 timeSpan">买家申请退货</span>
                  <span class="colorblack font12">{{timetrans(orderDetail.afs.createDate)}}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="dataGeneral backWhite padding20">
            <div class="dataGenetalTitle">
              <span class="colorblack font16 fontWeight marginright10">商品信息</span>
            </div>
            <div class="orderInfo">
              <table class="orderDetailTable">
                <tr>
                  <th>商品</th>
                  <th>数量</th>
                  <th>小计</th>
                </tr>
                <tr>
                  <td>
                    <div class="flex">
                      <img class="productImg" :src="orderDetail.goodsImgUrl">
                      <div class="productBox">
                        <p class="colorblack font12 productText">{{orderDetail.goodsName}}</p>
                        <p class="colorGrey font12 productText">{{orderDetail.planName}}</p>
                      </div>
                    </div>
                  </td>
                  <td>{{orderDetail.quantity}}</td>
                  <td>{{orderDetail.points/orderDetail.quantity}}</td>
                </tr>
                <tr>
                  <td>
                  </td>
                  <td></td>
                  <td>商品总积分：{{orderDetail.points}}</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>运费：0</td>
                </tr>
                <tr>
                  <td>
                  </td>
                  <td></td>
                  <td class="colore6">消耗积分：{{orderDetail.points}}</td>
                </tr>
              </table>
            </div>
          </div>
          <div class="dataGeneral backWhite padding20" v-if="orderDetail.invoice">
            <div class="dataGenetalTitle">
              <span class="colorblack font16 fontWeight marginright10">发票信息</span>
            </div>
            <div class="orderInfo flex">
              <div class="infoLeft">
                <div class="infoBox">
                  <span class="colorGrey font12 marginright10">发票状态</span>
                  <span class="colorblack font12">已申请</span>
                </div>
                <div class="infoBox">
                  <span class="colorGrey font12 marginright10">发票类型</span>
                  <span class="colorblack font12" v-if="orderDetail.invoice.customerType == 1">个人</span>
                  <span class="colorblack font12" v-if="orderDetail.invoice.customerType == 2">企业</span>
                </div>
                <div class="infoBox">
                  <span class="colorGrey font12 marginright10">发票抬头</span>
                  <span class="colorblack font12">{{orderDetail.invoice.customerName}}</span>
                </div>
              </div>
              <div class="infoRight">
                <div class="infoBox" v-if="orderDetail.invoice.customerTaxno">
                  <span class="colorGrey font12 marginright10">纳税人识别号</span>
                  <span class="colorblack font12">{{orderDetail.invoice.customerTaxno}}</span>
                </div>
                <div class="infoBox">
                  <span class="colorGrey font12 marginright10">手机号</span>
                  <span class="colorblack font12">{{orderDetail.invoice.phone}}</span>
                </div>
                <!--<div class="infoBox">-->
                <!--<span class="colorGrey font12 marginright10">接收邮箱</span>-->
                <!--<span class="colorblack font12">{{orderDetail.invoice.email}}</span>-->
                <!--</div>-->
                <div class="infoBox">
                  <span class="colorGrey font12 marginright10">发票金额</span>
                  <span class="colorblack font12">{{orderDetail.invoice.amount}}元</span>
                </div>
              </div>
              <div class="infoRight">

              </div>
            </div>
          </div>
          <div class="dataGeneral backWhite padding20">
            <div class="dataGenetalTitle">
              <span class="colorblack font16 fontWeight marginright10">支付记录</span>
            </div>
            <div class="orderInfo">
              <table class="orderDetailTable  orderDetailTabletwo" v-if="paymentList.length != 0">
                <tr>
                  <th>商户订单号</th>
                  <th>支付状态</th>
                  <th>支付时间</th>
                  <th>退款状态</th>
                  <th>退款时间</th>
                  <th>退款失败原因</th>
                  <th>操作</th>
                </tr>
                <tr v-for="item in paymentList">
                  <td><span v-if="item.paymentNo">{{item.paymentNo}}</span><span v-if="!item.paymentNo">-</span></td>
                  <td v-if="item.paymentStatus == 0">未支付</td>
                  <td v-if="item.paymentStatus == 1">已支付</td>
                  <td>
                    <span v-if="item.paymentTime">{{timetrans(item.paymentTime)}}</span>
                    <span v-if="!item.paymentTime">-</span>
                  </td>
                  <td v-if="item.refundStatus == 0">未退款</td>
                  <td v-if="item.refundStatus == 1">退款成功</td>
                  <td v-if="item.refundStatus == 2">退款失败</td>
                  <td v-if="item.refundStatus == 3">退款中</td>
                  <td>
                    <span v-if="item.refundTime">{{timetrans(item.paymentTime)}}</span>
                    <span v-if="!item.refundTime">-</span>
                  </td>
                  <td>
                    <p style="word-break:break-all;" v-if="item.refundMessage">
                      {{item.refundMessage.substring(0,100)}}</p>
                    <p v-if="!item.refundMessage">-</p>
                  </td>
                  <td v-if="item.refundStatus == 2" class="cursor color2087" @click="refunding(item.id)">重新退款</td>
                  <td v-else> -</td>
                </tr>
              </table>
            </div>
          </div>
          <div class="dataGeneral backWhite padding20" v-show="operate">
            <div class="dataGenetalTitle">
              <span class="colorblack font16 fontWeight marginright10">服务备注</span>
              <div class="borderButton addRemark cursor fr" @click="openRemark()">新建备注</div>
            </div>
            <div class="orderInfo">
              <table class="orderDetailTable orderDetailTableone" v-if="remarkList.length != 0">
                <tr>
                  <th>备注时间</th>
                  <th>备注内容</th>
                  <th>备注人</th>
                </tr>
                <tr v-for="item in remarkList">
                  <td>
                    {{timetrans(item.createDate)}}
                  </td>
                  <td>{{item.content}}</td>
                  <td>{{item.updateBy}}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="dialogone">
      <div class="messge">
        <div class="messageHeader">
          <div class="messagetitle">
            <span>拒绝原因</span>
          </div>
        </div>
        <div class="messageContent">
          <div class="messagemessage">
            <span class="lableText colorblack font12">拒绝原因</span>
            <input type="text" @change="changeValue()" v-model="refuseMessage"
                   class="inputBox marginLeft10 colorblack font12" placeholder="拒绝原因不超过50字"/>
          </div>
        </div>
        <div class="messagebtns">
          <div class="button borderButton copyButton" @click="closeDiologone()">
            取消
          </div>
          <div class="button bacButton" @click="refuseReturnMessage()">
            确认
          </div>
        </div>
      </div>
    </div>
    <div class="dialogtwo">
      <div class="messge">
        <div class="messageHeader">
          <div class="messagetitle">
            <span>拒绝原因</span>
          </div>
        </div>
        <div class="messageContent">
          <div class="messagemessage">
            <span class="lableText colorblack font12">拒绝原因</span>
            <input type="text" @change="changeValue()" v-model="refuseMessage"
                   class="inputBox marginLeft10 colorblack font12" placeholder="拒绝原因不超过50字"/>
          </div>
        </div>
        <div class="messagebtns">
          <div class="button borderButton copyButton" @click="closeDiologone()">
            取消
          </div>
          <div class="button bacButton" @click="refuserefundMessage()">
            确认
          </div>
        </div>
      </div>
    </div>
    <div class="dialog">
      <div class="messge">
        <div class="messageHeader">
          <div class="messagetitle">
            <span>新建备注</span>
          </div>
        </div>
        <div class="messageContent">
          <div class="messagemessage">
            <span class="lableText colorblack font12">备注</span>
            <input type="text" @change="changeremarkValue()" v-model="remarkMessage"
                   class="inputBox marginLeft10 colorblack font12" placeholder="输入与客户的沟通信息"/>
          </div>
        </div>
        <div class="messagebtns">
          <div class="button borderButton copyButton" @click="closeDiolog()">
            取消
          </div>
          <div class="button bacButton" @click="addremarkMessage()">
            确认
          </div>
        </div>
      </div>
    </div>
    <Returnadress v-if="isshowadress" @getadressid='clickagreeReturn' @clickbanner="getbackData"></Returnadress>
  </div>
</template>

<script>
  import Aside from '@/components/aside'
  import Filter from '@/common/filter'
  import Service from '@/common/service'
  import Store from '@/vuex/index'
  import KlTop from '@/components/klTop'
  import Global from '@/common/global'
  import Returnadress from '@/components/returnadress'
  import Commodities from '@/components/commodities'

  export default {
    components: {
      Aside,
      KlTop,
      Commodities,
      Returnadress
    },
    data() {
      return {
         groupPurchase: [],
        isshowadress: false,
        showInput: false,
        remarkMessage: "",
        remarkList: '',
        refuseMessage: '',
        afs: null,
        orderDetail: '',
        orderId: '',
        shouhuo: '',
        statusTitle: '',
        imageUrl: '',
        paymentList: [],
        orderAfterSale: false,
        orderShipOperate: false,
        operate: false,
        invalidDate: null, // 订单失效时间
      };
    },
    created() {
      localStorage.setItem('shopId', 2)
      this.orderId = this.$route.params.id;
      this.orderAfterSale = this.havePermissions('order:after:sale[shopId=2]')
      this.orderShipOperate = this.havePermissions('order:ship:operate[shopId=2]')
      this.operate = this.havePermissions('order:remark:operate[shopId=2]')
    },
    watch: {},
    mounted() {
      this.getorderDetail();
      if (this.operate) {
        this.getremarkList();
      }
    },
    methods: {
      getbackData(str) {
        if (str == 'sure') {
          this.getorderDetail()
        }
        this.isshowadress = false;
      },
      refunding(paymentId) {
        Service.order().refundretry({}, paymentId
        ).then(response => {
          if (response.errorCode == 0) {
            this.getorderDetail();
          } else {
            this.$message.error(response.message)
          }
        }, err => {
        });
      },
      changeExpress() {
        this.orderDetail.express.expressName = this.orderDetail.express.expressName.replace(/(^\s*)|(\s*$)/g, "");
        if (this.orderDetail.express.expressName.length > 50 || this.orderDetail.express.expressName.length == 0) {
          this.$message.error('请输入正确的物流公司');
          return;
        }
        var reg = /^[a-zA-Z0-9]+$/;
        this.orderDetail.express.expressNo = this.orderDetail.express.expressNo.replace(/(^\s*)|(\s*$)/g, "");
        if (this.orderDetail.express.expressNo.length > 50 || this.orderDetail.express.expressNo.length == 0) {
          this.$message.error('请输入正确的物流单号');
          return;
        }
        if (!(reg.test(this.orderDetail.express.expressNo))) {
          this.$message.error('请输入正确的物流单号');
          return;
        }
        Service.order().resetorderShip({
            expressName: this.orderDetail.express.expressName,
            expressNo: this.orderDetail.express.expressNo,
            orderId: this.orderId
          },
        ).then(response => {
          if (response.errorCode == 0) {
            this.getorderDetail();
            this.showInput = true;
          } else {
            this.$message.error(response.message)
          }
        }, err => {
        });
      },
      openRemark() {
        $(".dialog").css({'display': 'block'});
      },
      changeremarkValue(type) {
        var on = true;
        if (this.remarkMessage.length != 0) {
          this.remarkMessage = this.remarkMessage.replace(/\s+/g, "");
          if (this.remarkMessage.length > 50 || this.remarkMessage.length < 2) {
            this.$message.error('请输入不少于2个字符或者多于100个字符的备注信息');
          }
        } else {
          this.$message.error('请输入注信息');
          on = false;
          return;
        }
        if (type == 'submit') {
          return on;
        }
      },
      changeValue(type) {
        var on = true;
        if (this.refuseMessage.length != 0) {
          this.refuseMessage = this.refuseMessage.replace(/\s+/g, "");
          if (this.refuseMessage.length > 50 || this.refuseMessage.length < 2) {
            this.$message.error('请输入不少于2个字符或者多于50个字符的拒绝原因');
          }
        } else {
          this.$message.error('请输入拒绝原因');
          on = false;
          return;
        }
        if (type == 'submit') {
          return on;
        }

      },
      returnMoney() {
        this.$confirm('同意退款，系统将订单款项原路退还给付款账号，请确认是否退款?', '', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          Service.order().agreerefund({
              message: '',
              orderId: this.orderId
            },
          ).then(response => {
            if (response.errorCode == 0) {
              this.getorderDetail();
            } else {
              this.$message.error(response.message)
            }
          }, err => {
          });
        }).catch(() => {

        });
      },
      // showadress(){
      //     this.isshowadress = true;
      // },
      agreeReturn(type, status) {
        var str = '';
        if (type == 1) {
          str = '同意退款，系统将订单款项原路退还给付款账号，请确认是否退款?'
          this.showconfirm(str);
        } else if (type == 2 && status == 2) {
          str = '同意退款，系统将订单款项原路退还给付款账号，请确认是否退款?'
          this.showconfirm(str);
        } else if (type == 2 && status != 2) {
          str = '请确认是否同意客户的退货申请?';
          this.isshowadress = true;
        }

      },
      showconfirm(str) {
        this.$confirm(str, '', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          Service.order().agreeAfs({
              message: '',
              orderId: this.orderId
            },
          ).then(response => {
            if (response.errorCode == 0) {
              this.getorderDetail();
            } else {
              this.$message.error(response.message)
            }
          }, err => {
          });
        }).catch(() => {

        });
      },
      clickagreeReturn(str) {
        var addressId = str;
        Service.order().agreeAfs({
            message: '',
            orderId: this.orderId,
            addressId: addressId
          },
        ).then(response => {
          if (response.errorCode == 0) {
            this.getorderDetail();
          } else {
            this.$message.error(response.message)
          }
        }, err => {
        });
      },
      // 拒绝退货
      refuseReturnMessage() {
        if (!this.changeValue('submit')) {
          return;
        }
        Service.order().refuseafs({
            message: this.refuseMessage,
            orderId: this.orderId
          },
        ).then(response => {
          if (response.errorCode == 0) {
            $(".dialogone").css({"display": 'none'});
            this.$message.success(response.message)
            this.getorderDetail();
          } else {
            this.$message.error(response.message)
          }
        }, err => {
        });
      },
      // 拒绝退款
      refuserefundMessage() {
        if (!this.changeValue('submit')) {
          return;
        }
        Service.order().refuserefund({
            message: this.refuseMessage,
            orderId: this.orderId
          },
        ).then(response => {
          if (response.errorCode == 0) {
            $(".dialogtwo").css({"display": 'none'});
            this.$message.success(response.message)
            this.getorderDetail();
          } else {
            this.$message.error(response.message)
          }
        }, err => {
        });
      },

      refuseReturn() {
        $(".dialogone").css({"display": 'block'});
      },
      refuseMoney() {
        $(".dialogtwo").css({"display": 'block'});
      },
      openrefuse() {
        var str = "<div style='text-align: center;'>" + this.orderDetail.afs.message + "</div>"
        this.$alert(str, '拒绝原因', {
          dangerouslyUseHTMLString: true
        });
      },
      openDetail() {
        var str = "<div style='text-align: left;margin-left: 30px;'>退款/返现总额：" + this.orderDetail.goodsPrice + "</div>" +
          "<div style='text-align: left;margin-left: 30px;'>订单编号：" + this.orderDetail.orderNo + "</div>" +
          "<div v-if='this.orderDetail.refundNo' style='text-align: left;margin-left: 30px;'>退款流水号：" + this.orderDetail.afs.refundNo + "</div>" +
          "<div  style='text-align: left;margin-left: 30px;'>申请时间：" + this.timetrans(this.orderDetail.afs.createDate) + "</div>" +
          "<div style='text-align: left;margin-left: 30px;'>退款方式  原路退</div>";
        this.$alert(str, '退款详情', {
          dangerouslyUseHTMLString: true
        });
      },
      getremarkList() {
        Service.order().getremarkList({},
          this.orderId
        ).then(response => {
          if (response.errorCode == 0) {
            this.remarkList = response.data;
          } else {
            this.$message.error(response.message)
          }

        }, err => {
        });
      },
      getorderDetail() {
        Service.order().getOrderdetail({},
          this.orderId
        ).then(response => {
          if (response.errorCode == 0) {
            this.orderDetail = response.data;
             this.groupPurchase = response.data.groupPurchase;
            if(this.orderDetail.card){
              this.invalidDate = this.orderDetail.card.invalidDate
            }
            this.paymentList = response.data.paymentList;
            this.afs = response.data.afs;
            if (this.orderDetail.consignee) {
              this.shouhuo = this.orderDetail.consignee.province + this.orderDetail.consignee.city + this.orderDetail.consignee.district + this.orderDetail.consignee.address + ',' + this.orderDetail.consignee.name + ',' + this.orderDetail.consignee.phone;
            }
            if (this.afs) {
              this.afsresetTitle(this.afs.status)
            } else {
               this.resetTitle(response.data.status,this.orderDetail.groupPurchase)
            }
          } else {
            this.$message.error(response.message)
          }

        }, err => {
        });
      },
      copyAdress(classname) {
        var clipboard = new this.Clipboard('.' + classname);
        console.log(clipboard);
        clipboard.on('success', e => {
          this.$message.success('复制成功');
          // 释放内存
          clipboard.destroy();
          $(".dialog").css({'display': 'none'})
        });
        clipboard.on('error', e => {
          // 不支持复制
          console.log('该浏览器不支持自动复制');
          // 释放内存
          clipboard.destroy()
        })
      },
      afsresetTitle(status) {
        switch (status) {
          case 1:
            this.statusTitle = '退货中';
            this.imageUrl = require('../../assets/images/tuihuozhong.png');
            break;
          case 2:
            this.statusTitle = '拒绝退货';
            this.imageUrl = require('../../assets/images/jujuetuihuo.png');
            break;
          case 3:
            this.statusTitle = '同意退货';
            this.imageUrl = require('../../assets/images/tongyituihuo.png');
            break;
          case 4:
            this.statusTitle = '退款中';
            this.imageUrl = require('../../assets/images/tuihuozhong.png');
            break;
          case 5:
            this.statusTitle = '拒绝退款';
            this.imageUrl = require('../../assets/images/jujuetuihuo.png');
            break;
          case 6:
            this.statusTitle = '已退款';
            this.imageUrl = require('../../assets/images/tuiguanchenggong.png');//没有
            break;
          default:
            this.statusTitle = '其他';
            break
        }
      },
      resetTitle(status,groupPurchase) {
        if(groupPurchase){
          var groupstatus = groupPurchase.status;
        }else{
           var groupstatus = '';
        }
        switch (status) {
          case 1:
            this.statusTitle = '待支付';
            this.imageUrl = require('../../assets/images/daizhifu.png');
            break;
          case 2:
            this.statusTitle = '待发货';
            this.imageUrl = require('../../assets/images/daifahuo.png');
            break;
          case 3:
            this.statusTitle = '待收货';
            this.imageUrl = require('../../assets/images/daifahuo.png');
            break;
          case 4:
             if (this.orderDetail.planActivateNowFlag == '04') {
              this.statusTitle = '交易成功';
            } else {
               this.statusTitle = '待激活';
            }
            this.imageUrl = require('../../assets/images/daishiyong.png');
            break;
          case 5:
            this.statusTitle = '已激活';
            this.imageUrl = require('../../assets/images/yishiyong.png');
            break;

          case 6:
            this.statusTitle = '交易关闭';
            this.imageUrl = require('../../assets/images/yiguanbi.png');
            break;
          case 7:
            this.statusTitle = '交易完成';
            this.imageUrl = require('../../assets/images/yishiyong.png');
            break;
          case 20:
            if(groupstatus == 1){
              this.statusTitle = '待成团';
            }
            this.imageUrl = require('../../assets/images/daishiyong.png');
            break;
          default:
            this.statusTitle = '其他';
            break
        }
      },
      addremarkMessage() {
        if (!this.changeremarkValue('submit')) {
          return;
        }
        console.log(this.remarkMessage)
        Service.order().addremark({
          content: this.remarkMessage
        }, this.orderId).then(response => {
          if (response.errorCode == 0) {
            $(".dialog").css({"display": 'none'});
            this.$message.success(response.message)
            this.getremarkList();
          } else {
            this.$message.error(response.message)
          }
        }, err => {
        });
      },
      closeDiologone() {
        $(".dialogone").css({"display": "none"})
      },
      closeDiolog() {
        $(".dialog").css({"display": "none"})
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
      addCommodity() {
        this.$router.push({name: 'editorcommondity'})
      },
      goDetail(id) {
        this.$router.push({name: 'editorcommondity', query: {id: id}})
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
    },

  }
</script>

