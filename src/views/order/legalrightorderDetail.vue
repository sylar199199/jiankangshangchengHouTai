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

          .bacButton {
            margin: 20px auto;
          }

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
            padding: 10px;

            .textpadding {
              margin-right: 16px;
            }

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

            .fankui {
              tr td {
                border: 1px solid #f4f4f4;
                padding: 10px 12px;
              }

              tr {
                .chakan {
                  display: inline-block;
                  width: 100px;
                  height: 30px;
                  line-height: 30px;
                  color: #fff;
                  text-align: center;
                  background-color: #56ae97;
                  border-radius: 6px;
                  cursor: pointer;
                }

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

  .dialogone::after, .dialog::after, .dialogtwo:after {
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

          .inputselectBox {
            height: 30px;
            line-height: 30px;
            text-indent: 10px;
            width: 300px;
          }

          .fankui {
            margin: 10px auto;

            tr td {
              border: 1px solid #f4f4f4;
              padding: 10px 12px;
            }

            tr {
              .chakan {
                display: inline-block;
                width: 100px;
                height: 30px;
                line-height: 30px;
                color: #fff;
                text-align: center;
                background-color: #56ae97;
                border-radius: 6px;
                cursor: pointer;
              }

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
                text-align: center;
                padding-left: 15px;
              }

              td:nth-of-type(2) {
                min-width: 100px;
                max-width: 100px;
                text-align: center;
                padding-left: 15px;
              }
            }
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
                  <span class="colorblack font12">{{orderDetail.id}}</span>
                </div>
                <div class="infoBox">
                  <span class="colorGrey font12 marginright10">权益名称</span>
                  <span class="colorblack font12">{{orderDetail.rightsName}}</span>
                </div>
                <div class="infoBox">
                  <span class="colorGrey font12 marginright10">领取人</span>
                  <span class="colorblack font12">{{orderDetail.userName}}</span>
                </div>
                <div class="infoBox">
                  <span class="colorGrey font12 timeSpan">领取时间</span>
                  <span class="colorblack font12">{{timetrans(orderDetail.createDate)}}</span>
                </div>
              </div>
              <div class="infoRight">
                <div class="infoBox">
                  <span class="colorGrey font12 timeSpan">服务名称</span>
                  <span class="colorblack font12">{{orderDetail.planName}}</span>
                </div>
                <div class="infoBox" v-if="orderDetail.branch">
                  <span class="colorGrey font12 timeSpan">机构名称</span>
                  <span class="colorblack font12">{{orderDetail.branch.branchName}}</span>
                </div>
                <div class="infoBox" v-if="orderDetail.branch">
                  <span class="colorGrey font12 timeSpan">渠道名称</span>
                  <span class="colorblack font12">{{orderDetail.branch.channelName}}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="dataGeneral backWhite padding20" v-if="showInfo">
            <div class="dataGenetalTitle">
              <span class="colorblack font16 fontWeight marginright10">预约信息</span>
            </div>
            <div class="orderInfo flex">
              <div class="infoLeft" v-if="orderDetail.subUser">
                <div class="infoBox">
                  <span class="colorGrey font12 marginright10">就诊人</span>
                  <span class="colorblack font12">{{orderDetail.subUser.name}}</span>
                </div>
                <div class="infoBox">
                  <span class="colorGrey font12 marginright10">手机号</span>
                  <span class="colorblack font12">{{orderDetail.subUser.phone}}</span>
                  <span class="copyAdress marginLeft10 font12 cursor color2087" @click="copyAdress('copyAdress')"
                        :data-clipboard-text="orderDetail.subUser.phone">复制</span>
                </div>
                <div class="infoBox">
                  <span class="colorGrey font12 marginright10">性别</span>
                  <span class="colorblack font12">{{orderDetail.subUser.sex == 1?'男':'女'}}</span>
                </div>
                <div class="infoBox" v-if="orderDetail.subUser.userCardNo">
                  <span class="colorGrey font12 marginright10">证件号码</span>
                  <span class="colorblack font12">{{orderDetail.subUser.userCardNo}}</span>
                </div>
                <div class="infoBox" v-if="orderDetail.subUser.birthDay">
                  <span class="colorGrey font12 marginright10">生日</span>
                  <span class="colorblack font12">{{timetrans1(orderDetail.subUser.birthDay)}}</span>
                </div>

              </div>
              <div class="infoLeft" v-if="orderDetail.reservation">
                <div class="infoBox">
                  <span class="colorGrey font12 marginright10">就诊人</span>
                  <span class="colorblack font12">{{orderDetail.reservation.name}}</span>
                </div>
                <div class="infoBox">
                  <span class="colorGrey font12 marginright10">手机号</span>
                  <span class="colorblack font12">{{orderDetail.reservation.phone}}</span>
                  <span class="copyAdress marginLeft10 font12 cursor color2087" @click="copyAdress('copyAdress')"
                        :data-clipboard-text="orderDetail.reservation.phone">复制</span>
                </div>

                <div class="infoBox">
                  <span class="colorGrey font12 marginright10" v-if="orderDetail.reservation.wechatId"> 微信号</span>
                  <span class="colorblack font12">{{orderDetail.reservation.wechatId}}</span>
                  <span class="colorGrey font12 marginright10" v-if="orderDetail.reservation.city">城市</span>
                  <span class="colorblack font12">{{orderDetail.reservation.city}}</span>
                </div>

              </div>

              <div class="infoRight">
                <div class="infoBox">
                  <span class="colorGrey font12 marginright10">服务类型</span>
                  <span class="colorblack font12">{{(serviceInfo.serviceTypeName)}}</span>
                </div>
                <div v-if="orderDetail.reservation">
                  <div class="infoBox" v-if="orderDetail.reservation.family1name">
                    <span class="colorGrey font12 marginright10">家属姓名</span>
                    <span class="colorblack font12">{{(orderDetail.reservation.family1name)}}</span>
                  </div>
                  <div class="infoBox" v-if="orderDetail.reservation.family1phone">
                    <span class="colorGrey font12 marginright10">家属手机号</span>
                    <span class="colorblack font12">{{(orderDetail.reservation.family1phone)}}</span>
                  </div>
                  <div class="infoBox" v-if="orderDetail.reservation.family1wechatId">
                    <span class="colorGrey font12 marginright10">家属微信号</span>
                    <span class="colorblack font12">{{(orderDetail.reservation.family1wechatId)}}</span>
                  </div>
                  <div class="infoBox" v-if="orderDetail.reservation.family2name">
                    <span class="colorGrey font12 marginright10">家属姓名</span>
                    <span class="colorblack font12">{{(orderDetail.reservation.family2name)}}</span>
                  </div>
                  <div class="infoBox" v-if="orderDetail.reservation.family2phone">
                    <span class="colorGrey font12 marginright10">家属手机号</span>
                    <span class="colorblack font12">{{(orderDetail.reservation.family2phone)}}</span>
                  </div>
                  <div class="infoBox" v-if="orderDetail.reservation.family2wechatId">
                    <span class="colorGrey font12 marginright10">家属微信号</span>
                    <span class="colorblack font12">{{(orderDetail.reservation.family2wechatId)}}</span>
                  </div>
                </div>
                <div v-if="orderDetail.inquery">
                  <div class="infoBox">
                    <span class="colorGrey font12 marginright10">病史描述</span>
                    <span class="colorblack font12">{{(orderDetail.inquery.medicalHistory)}}</span>
                  </div>
                </div>
                <div v-if="orderDetail.accompany">
                  <div class="infoBox">
                    <span class="colorGrey font12 marginright10">预约日期</span>
                    <span class="colorblack font12">{{timetrans(orderDetail.accompany.appointmentDate)}}</span>
                  </div>
                  <div class="infoBox">
                    <span class="colorGrey font12 marginright10">预约科室</span>
                    <span class="colorblack font12">{{(orderDetail.accompany.depart)}}</span>
                  </div>
                  <div class="infoBox">
                    <span class="colorGrey font12 marginright10">预约机构</span>
                    <span class="colorblack font12">{{(orderDetail.accompany.mechanism)}}</span>
                  </div>
                  <div class="infoBox">
                    <span class="colorGrey font12 marginright10">病史描述</span>
                    <span class="colorblack font12">{{(orderDetail.accompany.medicalHistory)}}</span>
                  </div>
                  <div class="infoBox">
                    <span class="colorGrey font12 marginright10">地址</span>
                    <span class="colorblack font12">{{(orderDetail.accompany.wholeAddress+orderDetail.accompany.addressDetails)}}</span>
                  </div>
                </div>
                <div v-if="orderDetail.diagnosis">
                  <div class="infoBox">
                    <span class="colorGrey font12 marginright10">二诊诉求</span>
                    <span class="colorblack font12">{{orderDetail.diagnosis.demands}}</span>
                  </div>
                  <div class="infoBox">
                    <span class="colorGrey font12 marginright10" v-if="orderDetail.diagnosis.depart">预约科室</span>
                    <span class="colorblack font12">{{orderDetail.diagnosis.depart}}</span>
                  </div>
                  <div class="infoBox">
                    <span class="colorGrey font12 marginright10" v-if="orderDetail.diagnosis.doctor">预约医生</span>
                    <span class="colorblack font12">{{orderDetail.diagnosis.doctor}}</span>
                  </div>
                  <div class="infoBox">
                    <span class="colorGrey font12 marginright10">病史描述</span>
                    <span class="colorblack font12">{{orderDetail.diagnosis.medicalHistory}}</span>
                  </div>
                  <div class="infoBox">
                    <span class="colorGrey font12 marginright10">预约医疗机构</span>
                    <span class="colorblack font12">{{orderDetail.diagnosis.organization}}</span>
                  </div>
                  <div class="infoBox">
                    <span class="colorGrey font12 marginright10">职称名称</span>
                    <span class="colorblack font12">{{orderDetail.diagnosis.title}}</span>
                  </div>
                  <div class="infoBox">
                    <span class="colorGrey font12 marginright10">期望报告日期</span>
                    <span class="colorblack font12">{{timetrans(orderDetail.diagnosis.expectedDate)}}</span>
                  </div>

                </div>
                <div v-if="orderDetail.exam">
                  <div class="infoBox">
                    <span class="colorGrey font12 marginright10">预约日期</span>
                    <span class="colorblack font12">{{timetrans(orderDetail.exam.appointmentDate)}}</span>
                  </div>
                  <div class="infoBox">
                    <span class="colorGrey font12 marginright10">预约城市</span>
                    <span class="colorblack font12">{{orderDetail.exam.province+orderDetail.exam.city+orderDetail.exam.district}}</span>
                  </div>
                  <div class="infoBox">
                    <span class="colorGrey font12 marginright10">选择平台</span>
                    <span class="colorblack font12">{{orderDetail.exam.hospital}}</span>
                  </div>
                  <div class="infoBox">
                    <span class="colorGrey font12 marginright10">选择分院</span>
                    <span class="colorblack font12">{{orderDetail.exam.mechanism}}</span>
                  </div>
                  <div class="infoBox">
                    <span class="colorGrey font12 marginright10">健康描述</span>
                    <span class="colorblack font12">{{orderDetail.exam.medicalHistory}}</span>
                  </div>
                  <div class="infoBox">
                    <span class="colorGrey font12 marginright10">预约时间段</span>
                    <span class="colorblack font12">{{orderDetail.exam.timeSlot==1?'上午':'下午'}}</span>
                  </div>
                </div>
                <div v-if="orderDetail.green">
                  <div class="infoBox">
                    <span class="colorGrey font12 marginright10">预约日期</span>
                    <span class="colorblack font12">{{timetrans(orderDetail.green.appointmentDate)}}</span>
                  </div>
                  <div class="infoBox">
                    <span class="colorGrey font12 marginright10" v-if="orderDetail.green.depart">预约科室</span>
                    <span class="colorblack font12">{{orderDetail.green.depart}}</span>
                  </div>
                  <div class="infoBox" v-if="orderDetail.green.doctor">
                    <span class="colorGrey font12 marginright10">预约医生</span>
                    <span class="colorblack font12">{{orderDetail.green.doctor}}</span>
                  </div>
                  <div class="infoBox">
                    <span class="colorGrey font12 marginright10">预约医院</span>
                    <span class="colorblack font12">{{orderDetail.green.organization}}</span>
                  </div>
                  <div class="infoBox">
                    <span class="colorGrey font12 marginright10">病史描述</span>
                    <span class="colorblack font12">{{orderDetail.green.medicalHistory}}</span>
                  </div>
                  <div class="infoBox">
                    <span class="colorGrey font12 marginright10">预约时间段</span>
                    <span class="colorblack font12">{{orderDetail.green.timeSlot==1?'上午':orderDetail.green.timeSlot==2?'下午':'夜间'}}</span>
                  </div>
                  <div class="infoBox">
                    <span class="colorGrey font12 marginright10">职称名称</span>
                    <span class="colorblack font12">{{orderDetail.green.title}}</span>
                  </div>
                </div>


              </div>
            </div>
            <div v-if="serviceInfo.status == 4 && (serviceInfo.serviceTypeId == 11 || serviceInfo.serviceTypeId == 12)"
                 class="bacButton" @click="finishcarriage()" v-show="rightsOrdercomplete">
              完成
            </div>
            <div v-if="serviceInfo.status == 1" class="bacButton" @click="undercarriage()" v-show="rightsOrderaudit">
              审核
            </div>
          </div>
          <div class="dataGeneral backWhite padding20" v-if="attachPath.length != 0">
            <div class="dataGenetalTitle">
              <span class="colorblack font16 fontWeight marginright10">上传资料</span>
            </div>
            <div class="orderInfo flex">
              <div class="infoBox">
                <table class="fankui">
                  <tr v-for="item in attachPath" :key="item.linkUrl">
                    <td>{{item.name}}</td>
                    <td><span class="chakan" @click="openUrl(item.linkUrl)">查看</span></td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <div class="dataGeneral backWhite padding20">
            <div class="dataGenetalTitle">
              <span class="colorblack font16 fontWeight marginright10">服务结果</span>
            </div>
            <div class="orderInfo flex">
              <div class="infoBox" v-if="serviceInfo">
                <table class="fankui"
                       v-if="(serviceInfo.caseSummary) || (serviceInfo.medicalReport) || (serviceInfo.secondReport)">
                  <tr v-if="serviceInfo.caseSummary">
                    <td>病例汇总</td>
                    <td><span class="chakan" @click="openRemark(caseSummary)">查看</span></td>
                  </tr>
                  <tr v-if="serviceInfo.medicalReport">
                    <td>体检报告</td>
                    <td><span class="chakan" @click="openRemark(medicalReport)">查看</span></td>
                  </tr>
                  <tr v-if="serviceInfo.secondReport">
                    <td>二诊报告</td>
                    <td><span class="chakan" @click="openRemark(secondReport)">查看</span></td>
                  </tr>
                </table>
                <div v-if="serviceInfo.conclusion" v-html='serviceInfo.conclusion'>

                </div>
              </div>

            </div>
          </div>
          <div class="dataGeneral backWhite padding20" v-if="serviceLogList.length != 0">
            <div class="dataGenetalTitle">
              <span class="colorblack font16 fontWeight marginright10">服务记录</span>
            </div>
            <div class="orderInfo flex" v-for="item in serviceLogList" :key="item.id">
              <div class="infoBox">
                <span class="textpadding">服务创建时间</span>
                <span class="textpadding">{{timetrans(item.createDate)}}</span>
                <span class="textpadding">{{item.statiusname}}</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
    <div class="dialogone">
      <div class="messge">
        <div class="messageHeader">
          <div class="messagetitle">
            <span>审核结果</span>
          </div>
        </div>
        <div class="messageContent">
          <div class="messagemessage">
            <span class="lableText colorblack font12">审核结果</span>
            <el-select v-model="auditid" placeholder="" class="inputselectBox">
              <el-option
                v-for="item in auditOption"
                :key="item.id"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
          </div>
          <div class="messagemessage" v-if="auditid == 2">
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
            <span>是否完成</span>
          </div>
        </div>
        <div class="messageContent">

        </div>
        <div class="messagebtns">
          <div class="button borderButton copyButton" @click="closeDiologtwo()">
            取消
          </div>
          <div class="button bacButton" @click="finishMessage()">
            确认
          </div>
        </div>
      </div>
    </div>
    <div class="dialog">
      <div class="messge">
        <div class="messageHeader">
          <div class="messagetitle">
            <span>服务结果</span>
          </div>
        </div>
        <div class="messageContent">
          <div class="messagemessage">
            <table class="fankui">
              <tr v-for="item in arrcontent" :key="item.name">
                <td>{{item.name}}</td>
                <td><span class="chakan" @click="chakanUrl(item.linkUrl)">查看</span></td>
              </tr>

            </table>
          </div>
        </div>
        <div class="messagebtns">
          <div class="button bacButton" @click="closeDiolog()">
            确认
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
        serviceLogList: [],
        attachPath: [],
        showInfo: false,
        auditid: 1,
        auditOption: [{name: '通过审核', id: 1}, {name: '拒绝预约', id: 2}],
        showInput: false,
        remarkMessage: "",
        refuseMessage: '',
        afs: null,
        orderDetail: '',
        orderId: '',
        shouhuo: '',
        statusTitle: '',
        imageUrl: '',
        serviceInfo: null,
        paymentList: [],
        caseSummary: [],
        medicalReport: [],
        secondReport: [],
        arrcontent: [],

        rightsOrdercomplete: false, // 完成
        rightsOrderaudit: false, // 审核
        rightsOrderexport: false, // 导出
      };
    },
    created() {
      this.orderId = this.$route.query.id;
      this.rightsOrdercomplete = this.havePermissions('rightsOrder:complete')
      this.rightsOrderaudit = this.havePermissions('rightsOrder:audit')
      this.rightsOrderexport = this.havePermissions('rightsOrder:export')
    },
    watch: {},
    mounted() {
        this.getorderDetail();
    },
    methods: {
      openUrl(linkUrl) {
        window.open(linkUrl)
      },
      openRemark(arrdata) {
        this.arrcontent = arrdata;
        console.log(this.arrdata)
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
      agreeReturn(type, status) {
        var str = '';
        if (type == 1) {
          str = '同意退款，系统将订单款项原路退还给付款账号，请确认是否退款?'
        } else if (type == 2 && status == 2) {
          str = '同意退款，系统将订单款项原路退还给付款账号，请确认是否退款?'
        } else if (type == 2 && status != 2) {
          str = '请确认是否同意客户的退货申请?'
        }

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
      refuseReturnMessage() {
        if (this.auditid == 1) {
          this.refuseMessage = '';
          Service.rightorder().auditapprove({
              reason: '',
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
        } else {
          if (!this.changeValue('submit')) {
            return;
          }
          Service.rightorder().auditrefuse({
              reason: this.refuseMessage,
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
        }

      },
      refuseReturn() {
        $(".dialogone").css({"display": 'block'});
      },
      openrefuse() {
        var str = "<div style='text-align: center;'>" + this.orderDetail.afs.message + "</div>"
        this.$alert(str, '拒绝原因', {
          dangerouslyUseHTMLString: true
        });
      },

      getorderDetail() {
        Service.rightorder().rightsorderDetail({},
          this.orderId
        ).then(response => {
          if (response.errorCode == 0) {
            this.orderDetail = response.data;
            console.log(this.orderDetail)
            this.serviceInfo = response.data.serviceInfo;
            this.serviceLogList = this.orderDetail.serviceLogList;
            if (this.serviceLogList.length != 0) {
              for (let i in this.serviceLogList) {
                this.serviceLogList[i].statiusname = this.afsresetTitle(this.serviceLogList[i].serviceStatus, 'back')
              }
            }
            if (this.orderDetail.consignee) {
              this.shouhuo = this.orderDetail.consignee.province + this.orderDetail.consignee.city + this.orderDetail.consignee.district + this.orderDetail.consignee.address + ',' + this.orderDetail.consignee.name + ',' + this.orderDetail.consignee.phone;
            }
            if (this.serviceInfo) {
              if (this.serviceInfo.serviceTypeId == 8 || this.serviceInfo.serviceTypeId == 9 || this.serviceInfo.serviceTypeId == 7) {
                this.showInfo = false
              } else {
                this.showInfo = true
              }
              this.afsresetTitle(this.serviceInfo.status)
              if (this.serviceInfo.caseSummary) {
                this.resetArr(this.serviceInfo.caseSummary, 'caseSummary')
              }
              if (this.serviceInfo.medicalReport) {
                this.resetArr(this.serviceInfo.medicalReport, 'medicalReport')
              }
              if (this.serviceInfo.secondReport) {
                this.resetArr(this.serviceInfo.secondReport, 'secondReport')
              }
            }

            if (this.orderDetail.accompany) {
              if (this.orderDetail.accompany.attachPath) {
                this.resetArr(this.orderDetail.accompany.attachPath, 'attachPath')
              }
            } else if (this.orderDetail.diagnosis) {
              if (this.orderDetail.diagnosis.attachPath) {
                this.resetArr(this.orderDetail.diagnosis.attachPath, 'attachPath')
              }
            } else if (this.orderDetail.exam) {
              if (this.orderDetail.exam.attachPath) {
                this.resetArr(this.orderDetail.exam.attachPath, 'attachPath')
              }
            } else if (this.orderDetail.green) {
              if (this.orderDetail.green.attachPath) {
                this.resetArr(this.orderDetail.green.attachPath, 'attachPath')
              }
            } else if (this.orderDetail.inquery) {
              if (this.orderDetail.inquery.attachPath) {
                this.resetArr(this.orderDetail.inquery.attachPath, 'attachPath')
              }
            }

          } else {
            this.$message.error(response.message)
          }

        }, err => {
        });
      },
      chakanUrl(url) {
        window.open(url)
      },
      resetArr(str, type) {
        this.caseSummary = [];
        this.medicalReport = [];
        this.secondReport = [];
        this.attachPath = [];
        var arr = str.split('*');
        for (var i = 0; i < arr.length; i++) {
          var index = arr[i].indexOf('|');
          var obj = {
            name: arr[i].substring(0, index),
            linkUrl: arr[i].substring(index + 1)
          }
          if (type == 'caseSummary') {
            this.caseSummary.push(obj)
          } else if (type == 'medicalReport') {
            this.medicalReport.push(obj)
          } else if (type == 'secondReport') {
            this.secondReport.push(obj)
          } else if (type == 'attachPath') {
            this.attachPath.push(obj)
          }
        }
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
      afsresetTitle(status, type) {
        switch (status) {
          case 1:
            this.statusTitle = '待审核';
            this.imageUrl = require('../../assets/images/tuihuozhong.png');
            if (type) {
              return this.statusTitle
            }
            break;
          case 2:
            this.statusTitle = '审核失败';
            this.imageUrl = require('../../assets/images/rightfail.png');
            if (type) {
              return this.statusTitle
            }
            break;
          case 3:
            this.statusTitle = '待服务';
            this.imageUrl = require('../../assets/images/daishiyong.png');//
            if (type) {
              return this.statusTitle
            }
            break;
          case 4:
            this.statusTitle = '服务中';
            this.imageUrl = require('../../assets/images/tuihuozhong.png');
            if (type) {
              return this.statusTitle
            }
            break;
          case 5:
            this.statusTitle = '已完成';
            this.imageUrl = require('../../assets/images/tuiguanchenggong.png');
            if (type) {
              return this.statusTitle
            }
            break;
          case 6:
            this.statusTitle = '已过期';
            this.imageUrl = require('../../assets/images/rightgq.png');
            if (type) {
              return this.statusTitle
            }
            break;
          case 7:
            this.statusTitle = '已关闭';
            this.imageUrl = require('../../assets/images/rightclose.png');
            if (type) {
              return this.statusTitle
            }
            break;
          default:
            this.statusTitle = '其他';
            if (type) {
              return this.statusTitle
            }
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
      closeDiologtwo() {
        $(".dialogtwo").css({'display': 'none'})
      },
      // 完成確定
      finishMessage() {
        Service.rightorder().auditcomplete({}, this.orderId).then(response => {
          if (response.errorCode == 0) {
            $(".dialogtwo").css({'display': 'none'})
            this.getorderDetail();
            this.$message.success(response.message)
          } else {
            this.$message.error(response.message)
          }
        }, err => {
        });
      },
      finishcarriage() {
        $(".dialogtwo").css({'display': 'block'})
      },
      undercarriage() {
        $(".dialogone").css({'display': 'block'})
      },
      addCommodity() {
        this.$router.push({name: 'editorcommondity'})
      },
      goDetail(id) {
        this.$router.push({name: 'editorcommondity', query: {id: id}})
      },
      timetrans1(timestamp) {
        var getSeconds = '', getMinutes = '', getHours = '';
        var d = new Date(timestamp);
        getHours = d.getHours() < 10 ? '0' + d.getHours() : d.getHours();
        getMinutes = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes();
        ;
        getSeconds = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds();
        ;
        var newTime = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
        return newTime
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

