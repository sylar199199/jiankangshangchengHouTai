<style rel="stylesheet/scss" lang="scss" scoped>
  $baseFontSize: 192;
  .salecustomercontent {
    display: flex;
    min-height: calc(100vh - 50px);
    margin-top: 60px;
     .applicaninfo{
      width: 100px;
      height: 70px;
      background-color: #f9f9f9;
      border-radius: 4px;
      text-align: center;
      position: relative;
      .bannerImg{
          width: 100px;
          height: 70px;
          position: absolute;
          left: 0;
      }
      .warmtext{
        position: absolute;
        left: 89px;
        bottom: 0;
        display: inline-block;
        min-width: 100px;

      }
      .imgBox{
          position: absolute;
          display: inline-block;
          width: 100px;
          height: 70px;
          left: 0;
          .el-upload{
            height: 100%;
          }
          .uploadtext{
              color: #979797;
              position: relative;
              margin-top: 25px;
              height: 55px;

              .uploadIcon{
                  font-size: 16px;
                  display: inline-block;
                  vertical-align: middle;
                  color: #56ae97;
                  position: absolute;
                  bottom: 54px;
                  right: 42px;
              }
          }
      }
    }
    .content {
      flex: 1;
      padding: 20px;

      .contanternews {
        .dataGeneral {
          padding: 0 20px 20px;

          .tableTitle {
            border-bottom: 1px solid #ececec;
            margin: 0 20px 10px 20px;
            padding-bottom: 10px;
          }
          .searchContent {
            flex-wrap: wrap;
            position: relative;
            margin-top: 20px;
            .tabbox{
              width: 100%;
              .channnelBox{
                padding: 10px 38px;
                text-align: center;
                 background: #fff;
                border: solid 1px #e5e5e5;
              }
              .selectBox{
                background: #56ae97;
              }
            }
            .renovationsbox {
              width: 100%;
            }
            .searchBox {
              width: 100%;
              margin-right: 6px;
              margin-bottom: 20px;

              .radioBox {
                .iconfont {
                  font-size: 18px;
                  margin-right: 4px;
                  display: inline-block;
                  vertical-align: middle;
                }

                .typeText {
                  display: inline-block;
                  vertical-align: middle;
                }

              }

              .inputBox {
                width: 60px;
                height: 30px;
                line-height: 30px;
                border: 1px solid #e5e5e5;
                text-indent: 10px;
                margin: 0 6px;
              }
              .inputBox1{
                width: 30px;
                height: 30px;
                line-height: 30px;
                border: 1px solid #e5e5e5;
                text-indent: 10px;
                margin: 0 3px;
              }

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
                width: 80px;
                line-height: 30px;
                margin-right: 0;
              }
            }
          }
        }

        .bannerTable {
          background: #fff;
          /*margin-top: 15px;*/
          padding: 20px 0 100px;

          .previewBox {
            width: 302px;
            margin: 20px 0 20px 20px;
            .channnelContent{
              margin-bottom: 10px;
                .channnelBox{
                    margin-right: 20px;
                    padding: 10px 38px;
                    border: solid 1px #b7b7b7;
                    text-align: center;
                    position: relative;
                }
                .selectBox{
                    margin-right: 20px;
                    padding: 10px 38px;
                    text-align: center;
                    position: relative;
                    border: solid 1px #56ae97;
                    .selectIcon{
                        height: 26px;
                        width: 26px;
                        position: absolute;
                        top: 0;
                        right: 0;
                    }
                }
              }
            .previewTitle {
              text-align: center;
              height: 40px;
              line-height: 40px;
              background: #ececec;
            }
            .scrollContent {
              border: 1px solid #ececec;
              width: 300px;
              height: 470px;
              overflow-y: auto;
              flex-wrap: wrap;
              background: url('../../assets/images/9gg.jpg') no-repeat center -100px;
              /*overflow-x: hidden;*/
              background-size: cover;
            }
             .scrollContent1 {
              border: 1px solid #ececec;
              width: 300px;
              height: 470px;
              overflow-y: auto;
              flex-wrap: wrap;
              background: url('../../assets/images/dzp.jpg') no-repeat center -200px;
              /*overflow-x: hidden;*/
              background-size: cover;
            }

            .previewContent {
              .contentTitle {
                margin: 10px 16px;
              }

              .productContent {
                width: 100%;
                margin-bottom: 10px;
                border-radius: 5px;

                .shop-theme {
                  width: 100%;
                  display: flex;
                  margin: 0;
                  padding: 0;
                  height: 80px;

                  .notice {
                    color: #fff;
                    background: #54af9d;
                    flex: 1;

                    .theme-title {
                      width: 100%;
                      text-align: center;
                      font-size: 14px;
                      margin-top: 23px;
                    }

                    .going {
                      width: 100%;
                      margin-top: 5px;
                      text-align: center;
                      font-size: 12px;
                      color: #54af9d;
                    }

                    .button {
                      width: 65px;
                      margin: 0 auto;
                      color: #54af9d;
                      background: #fff;
                      border-radius: 15px;
                      padding: 3px;
                    }

                  }

                  .progressing {
                    color: #54af9d;
                    background: #e9f6f4;
                    flex: 1;

                    .theme-title {
                      width: 100%;
                      text-align: center;
                      font-size: 14px;
                      margin-top: 23px;
                    }

                    .going {
                      width: 100%;
                      margin-top: 5px;
                      text-align: center;
                      font-size: 12px;
                      color: #54af9d;
                    }

                    .button {
                      width: 65px;
                      margin: 0 auto;
                      color: #54af9d;
                      padding: 3px;
                    }
                  }
                }

                .list {
                  padding: 10px 0;
                  margin: 0 10px;
                  border-bottom: 1px solid #efefef;

                  .listLeft {
                    flex-shrink: 1;

                    .listimgUrl {
                      height: 80px;
                      width: 80px;
                      border-radius: 10px;
                    }
                  }

                  .listRight {
                    margin-left: 6px;
                    flex-direction: column;
                    flex: 1;

                    .linethrouth {
                      text-decoration: line-through;
                    }

                    .button {
                      color: #fff;
                      background: #ea6c6b;
                      width: 80px;
                      height: 30px;
                      line-height: 30px;
                      border-radius: 20px;
                      text-align: center;
                    }
                  }
                }
              }
            }
          }

          .borderButton {
            margin: 0 20px;
          }

          .noData {
            text-align: center;
            padding-top: 30px;
          }

          .tableBox {
            margin: 0 20px;
          }

          .tableScrollBox {
            height: 300px;
            overflow-y: scroll;
            border-bottom: 3px solid #f6f6f6;
            margin-bottom: 10px;
          }

          .table {
            font-size: 12px;
            border: 1px solid #f6f6f6;

            width: 562px;

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
                padding-left: 10px;
              }
              th:nth-child(3) {
                text-align: center;
                padding-left: 10px;
              }

              th:nth-child(4) {
                text-align: center;
                padding-right: 10px
              }

              td {
                text-align: center;
                padding: 8px 0;
                .inputBox {
                  width: 60px;
                  height: 30px;
                  line-height: 30px;
                  border: 1px solid #e5e5e5;
                  text-indent: 10px;
                  margin: 0 6px;
                }
                .line {
                  display: inline-block;
                  height: 8px;
                  width: 3px;
                  background: #eee;
                  margin: 0 10px;
                }

                .productImg {
                  width: 70px;
                  height: 70px;
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

              td:nth-of-type(1) {
                text-align: left;
                padding-left: 10px;
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
                text-align: center;
                padding-right: 10px;
              }

            }
          }
          .tableone{
            tr{
              td{
                 .inputBox{
                  width: 40px;
                }
              }
               td:nth-of-type(1) {
                text-align: left;
                padding-left: 10px;
                min-width: 60px;
                max-width:60px;
                }
                td:nth-of-type(2) {
                  min-width: 70px;
                  text-align: center;
                  max-width:70px;
                }
                td:nth-of-type(3) {
                    text-align: center;
                    min-width: 64px;
                    max-width:64px;
                }
                td:nth-of-type(4) {
                    text-align: center;
                    min-width: 60px;
                    max-width:60px;
                }
                td:nth-of-type(5) {
                  text-align: center;
                  min-width: 60px;
                   max-width:60px;
                }
                  td:nth-of-type(6) {
                    text-align: center;
                    min-width: 346px;
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
  .marginbottom {
    margin-bottom: 8px;
  }

  .width30 {
    width: 30px;
  }

  .marginTop10 {
    margin-top: 10px;
  }
  .border999{
    border: #999999 1px solid;
  }
  .dialog::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 0;
    vertical-align: middle;
  }

  .dialog {
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
      width: 360px;
      padding-bottom: 15px;
      vertical-align: middle;
      background-color: #fff;
      border-radius: 4px;
      font-size: 12px;
      -webkit-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
      text-align: left;
      overflow: hidden;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      .messageContent {
        position: relative;
        padding: 20px 30px;
        color: #606266;
        font-size: 12px;
        .name{
          .bacButton{
            width: 100px;
            height: 30px;
            line-height: 30px;
            display: inline-block;
          }
        }
          .m20{
            margin: 20px;
          }
         
            .inputBox {
                width: 60px;
                height: 30px;
                line-height: 30px;
                border: 1px solid #e5e5e5;
                text-indent: 10px;
                margin: 0 6px;
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
      <div class="dialog">
          <div class="messge font12">
            <div class="messageContent">
                <div class="name">
                    <span>奖项：</span>
                    <span class="ml10">{{nametype}}</span>
                </div>
                <div class="name mt10" v-if="nametype != '谢谢参与'">
                  <span>奖品：</span>
                  <span class="ml10" v-if="goodsData">{{goodsData.name}}</span>
                  <span class="bacButton font12 curson" @click="showSpecs = true">选择奖品</span>
                </div>
                <div class="flex mt10">
                  <span>图片：</span>
                  <div  class="applicaninfo" @click="imgtype = ''">
                     <span class="warmtext colorGrey font12" v-if="winimgUrl">90*90像素</span>
                     <img class="bannerImg" :src="winimgUrl" v-if="winimgUrl">
                    <el-upload
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
                        <div  class="uploadtext" v-if="!winimgUrl">
                            <i class="iconfont iconiconjia color2087 uploadIcon"></i>
                            <span class="font12">添加图片<br>90*90</span>
                        </div>
                      </el-upload>
                  </div>
                </div>
                 <div class="name mt10" v-if="nametype != '谢谢参与'">
                    <span>数量：</span>
                    <input type="text" v-model="goodsnum" class="inputBox" />份
                </div>
                <div class="mt10 flex">
                    <div class="button borderButton copyButton mr10" @click="closeDiologone()">
                      取消
                    </div>
                    <div class="button bacButton ml10" @click="setGoods()">
                      确认
                    </div>
                </div>
            </div>
          </div>
      </div>
      <div class="content">
        <div class="contanternews">
          <div class="dataGeneral bannerTable">
            <div class="tableTitle colorblack font14">大转盘活动信息</div>
            <div class="flex contentFlex">
              <div class="previewBox">
                <div class="channnelContent flex">
                      <div @click="changeBox(item,index)" :class="item.isSelect?'selectBox cursor color2087 font12':'channnelBox cursor font12 colorGrey'" v-for="(item,index) in selectData" :key="item.name">
                          <span> {{item.name}}</span>
                          <img v-if='item.isSelect' class="selectIcon" src="../../assets/images/selectIcon.png">
                      </div>
                  </div>
                  <div class="previewTitle">活动效果浏览</div>
                  <div class="previewContent">
                    <div :class="luckdata.type==1?'scrollContent':'scrollContent1'">
                    </div>
                  </div>
              </div>
              <div class="tableBox">
                <div class="searchContent flex clear">
                    <div class="tabbox flex searchBox">
                      <div @click="changecontentBox(item,index)" v-for="(item,index) in contentselect" :key="item.name" class="setcontent" :class="item.isSelect?'selectBox channnelBox cursor colorfff font12':'channnelBox cursor font12 colorGrey'">
                        {{item.name}}
                      </div>
                    </div>
                    <div v-if="contentId == 1">
                         <div class="searchBox">
                            <span class="colorRed font12">*</span>
                            <span class="searchLable searchName colorGrey font12">活动名称</span>
                            <input type="text" v-model="luckdata.name" class="serchInput font12 colorblack" placeholder="请填写活动名称"/>
                        </div>
                        <div class="searchBox itemcenter">
                            <span class="colorRed font12 mr4">*</span>
                            <span class="searchLable searchName colorGrey font12">活动时间 </span>
                            <el-date-picker
                            @change="enddateChange"
                            v-model="insuranceDate"
                            type="datetimerange"
                            unlink-panels
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期">
                            </el-date-picker>
                        </div>
                        <div class="searchBox itemcenter">
                            <span class="searchLable searchName colorGrey font12">参与用户身份</span>
                            <div class="radioBox">
                                <div class="">
                                  <i class="iconfont iconxuanzhong color2087 font20 cursor" v-if="luckdata.toUserType == 1"></i>
                                    <i class="iconfont iconxuanze  font20 cursor" v-if="luckdata.toUserType != 1" @click="luckdata.toUserType = 1 "></i>
                                    <span class="typeText colorblack font12">所有用户</span>
                                    <i class="iconfont iconxuanzhong color2087 font20 cursor cursor" v-if="luckdata.toUserType == 2"></i>
                                    <i class="iconfont iconxuanze  font20 cursor" v-if="luckdata.toUserType != 2" @click="luckdata.toUserType = 2"></i>
                                    <span class="typeText colorblack font12 marginright10">新用户注册
                                        <input type="text" class="inputBox" v-model="luckdata.registerDays"/>天
                                    </span>
                                    <i class="iconfont iconxuanzhong color2087 font20 cursor marginLeft10" v-if="luckdata.toUserType == 3"></i>
                                    <i class="iconfont iconxuanze  font20 cursor marginLeft10" v-if="luckdata.toUserType != 3" @click="luckdata.toUserType = 3"></i>
                                    <span class="typeText colorblack font12">内外勤员工</span>
                                </div>
                            </div>
                        </div>
                        <div class="searchBox itemcenter">
                            <span class="searchLable searchName colorGrey font12">消耗积分</span>
                            <div class="radioBox">
                                <div class="">
                                  <i class="iconfont iconxuanzhong color2087 font20 cursor" v-if="ispoints == 1"></i>
                                    <i class="iconfont iconxuanze  font20 cursor" v-if="ispoints != 1" @click="ispoints = 1 "></i>
                                    <span class="typeText colorblack font12">不消耗</span>
                                    <i class="iconfont iconxuanzhong color2087 font20 cursor cursor" v-if="ispoints == 2"></i>
                                    <i class="iconfont iconxuanze  font20 cursor" v-if="ispoints != 2" @click="ispoints = 2"></i>
                                     <span class="typeText colorblack font12">消耗</span>
                                    <span class="typeText colorblack font12 marginright10"  v-if="ispoints == 2">
                                        <input type="text" class="inputBox" v-model="luckdata.consumePoints"/>
                                    </span>
                                </div>
                            </div>
                        </div>
                         <div class="searchBox ">
                           <div class="radioBox ">
                                <span class="searchLable searchName colorGrey font12">参与次数</span>
                                <i class="iconfont iconxuanzhong color2087 font20 cursor " v-if="luckdata.participantsNumsType == 1"></i>
                                <i class="iconfont iconxuanze  font20 cursor" v-if="luckdata.participantsNumsType != 1" @click="luckdata.participantsNumsType = 1 "></i>
                                <span class="typeText colorblack font12">每日抽奖次数设置</span>
                           </div>
                            <div class="mt6" v-if="luckdata.participantsNumsType == 1">
                               <span class="searchLable searchName colorGrey font12"></span>
                                每人每天有 <input type="text" class="inputBox" v-model="luckdata.baseParticipantsNums"/>次抽奖机会
                                每人每天分享额外增加 <input type="text" class="inputBox" v-model="luckdata.extraParticipantsNums"/>次抽奖机会
                            </div>
                             <div class="mt6">
                                <span class="searchLable searchName colorGrey font12"></span>
                                <i class="iconfont iconxuanzhong color2087 font20 cursor" v-if="luckdata.participantsNumsType == 2"></i>
                                <i class="iconfont iconxuanze  font20 cursor" v-if="luckdata.participantsNumsType != 2" @click="luckdata.participantsNumsType = 2 "></i>
                                <span class="typeText colorblack font12">每人抽奖次数设置</span>
                            </div>
                             <div class="mt10" v-if="luckdata.participantsNumsType == 2">
                               <span class="searchLable searchName colorGrey font12"></span>
                                每人一共有 <input type="text" class="inputBox" v-model="luckdata.baseParticipantsNums"/>次抽奖机会
                                <span class="marginleft10">每人分享额外增加</span> <input type="text" class="inputBox" v-model="luckdata.extraParticipantsNums"/>次抽奖机会
                            </div>
                         </div>
                        <div class="searchBox">
                            <span class="colorRed font12">*</span>
                            <span class="searchLable searchName colorGrey font12">每人中奖次数</span>
                            每人最多可中奖
                            <input type="text" v-model="luckdata.maxWinTimes" class="inputBox font12 colorblack" />次
                        </div>
                           <div class="flexCenter" style="margin: 10px auto">
                            <div class="bacButton" @click="gonext2()"  >
                              下一步
                            </div>
                        </div>
                    </div>
                    <div v-if="contentId == 2">
                      <table class="table">
                        <tr>
                          <th v-for="item in sortDatas" :key="item.name">
                              {{item.name}}
                          </th>
                        </tr>
                        <tr v-for="(item,index) in prizesdata" :key="item.type" :hidden="((item.type ==8 && luckdata.type == 2))">
                          <td>
                              <span v-if="item.type == 1">一等奖</span>
                              <span v-if="item.type == 2">二等奖</span>
                              <span v-if="item.type == 3">三等奖</span>
                              <span v-if="item.type == 8">幸运奖</span>
                              <span v-if="item.type == 9">谢谢参与</span>
                          </td>
                          <td>
                               {{item.name}}
                          </td>
                          <td>
                             <img v-if="item.imgUrl" :src='item.imgUrl' class="productImg">
                          </td>
                          <td>
                              {{item.nums}}
                          </td>
                          <td>
                              <span class="color2087 font12 cursor" @click="openEditor(item,index)">编辑</span>
                          </td>
                        </tr>
                      </table>
                        <div class="flexCenter" style="margin: 10px auto">
                            <div class="borbutton mr10" @click="contentId = 1">上一步</div>
                            <div class="bacButton" @click="gonext3()" >
                              下一步
                            </div>
                        </div>
                    </div>
                    <div v-if="contentId == 3">
                      <table class="table tableone">
                          <tr>
                            <th v-for="item in sortDatastwo" :key="item.name">
                              {{item.name}}
                            </th>
                          </tr>
                          <tr v-for="(item,index) in prizesdata" :key="item.type" :index="index" v-if="item.type != 9" :hidden="((item.type ==8 && luckdata.type == 2))">
                              <td>
                                  <span v-if="item.type == 1">一等奖</span>
                                  <span v-if="item.type == 2">二等奖</span>
                                  <span v-if="item.type == 3">三等奖</span>
                                  <span v-if="item.type == 8">幸运奖</span>
                                  <span v-if="item.type == 9">谢谢参与</span>
                              </td>
                              <td>
                                  {{item.nums}}
                              </td>
                               <td>
                                 <input type="text" class="inputBox" v-model="item.perWinRate"/>%
                              </td>
                              <td>
                                  {{item.launchedNums}}
                              </td>
                              <td>
                                  {{item.winedNums}}
                              </td>
                              <td>
                                <i class="iconfont iconxuanzhong color2087 font20 cursor" v-if="item.perPrizeType == 1"></i>
                                <i class="iconfont iconxuanze  font20 cursor" v-if="item.perPrizeType != 1" @click="item.perPrizeType = 1"></i>
                                <span class="typeText colorblack font12">1分钟</span>
                                <i class="iconfont iconxuanzhong color2087 font20 cursor" v-if="item.perPrizeType == 2"></i>
                                <i class="iconfont iconxuanze  font20 cursor" v-if="item.perPrizeType != 2" @click="item.perPrizeType = 2"></i>
                                <span class="typeText colorblack font12">1小时</span>
                                <i class="iconfont iconxuanzhong color2087 font20 cursor" v-if="item.perPrizeType == 3"></i>
                                <i class="iconfont iconxuanze  font20 cursor" v-if="item.perPrizeType != 3" @click="item.perPrizeType = 3"></i>
                                <span class="typeText colorblack font12">2小时</span>
                                <i class="iconfont iconxuanzhong color2087 font20 cursor" v-if="item.perPrizeType == 4"></i>
                                <i class="iconfont iconxuanze  font20 cursor" v-if="item.perPrizeType != 4" @click="item.perPrizeType = 4"></i>
                                <span class="typeText colorblack font12">12小时</span>
                                <i class="iconfont iconxuanzhong color2087 font20 cursor" v-if="item.perPrizeType == 5"></i>
                                <i class="iconfont iconxuanze  font20 cursor" v-if="item.perPrizeType != 5" @click="item.perPrizeType = 5"></i>
                                <span class="typeText colorblack font12">24小时</span>
                                <i class="iconfont iconxuanzhong color2087 font20 cursor" v-if="item.perPrizeType == 6"></i>
                                <i class="iconfont iconxuanze  font20 cursor" v-if="item.perPrizeType != 6" @click="item.perPrizeType = 6"></i>
                                <span class="typeText colorblack font12">48小时</span>
                              </td>
                        </tr>
                      </table>
                       <div class="flexCenter" style="margin: 10px auto">
                            <div class="borbutton mr10" @click="contentId = 2">上一步</div>
                            <div class="bacButton" @click="gonext4()"  >
                              下一步
                            </div>
                        </div>
                    </div>
                    <div v-if="contentId == 4" class="renovationsbox">
                      <div class="renovationsbox searchBox " v-for="(item,index) in renovations" :key="item.type"  :index="index">
                          <div class="itemcenter radioBox mb10 " v-if="item.type == 1">
                             <span  class="searchLable searchName colorGrey font12">背景音乐</span>
                             <div v-if="musicobj.name" class="typeText colorblack font12">{{musicobj.name}}</div>
                             <div class="bacButton curson ml10" @click="choosemusic()">选择音乐</div>
                              <!-- <div v-for="(ite,ind) in musicdata" class="radioBox mr10" :key="ite.id" :index="ind">
                                <i class="iconfont iconxuanzhong color2087 font20 cursor " v-if="ite.id == musicid"></i>
                                <i class="iconfont iconxuanze  font20 cursor"  v-if="ite.id != musicid" @click="musicid = ite.id"></i>
                                <span class="typeText colorblack font12">{{ite.name}}</span>
                              </div> -->
                          </div>
                          <div class="flex mb10" v-if="item.type != 1">
                            <span  class="searchLable searchName colorGrey font12 mr10" v-if="item.type == 2">页面背景图片</span>
                            <span class="searchLable searchName colorGrey font12 mr10" v-if="item.type == 3">转盘背景图片</span>
                            <span class="searchLable searchName colorGrey font12 mr10" v-if="item.type == 4">指针图片</span>
                            <span class="searchLable searchName colorGrey font12 mr10" v-if="item.type == 5">活动规则图片</span>
                            <span class="searchLable searchName colorGrey font12 mr10" v-if="item.type == 6">分享图片</span>
                            <div class="applicaninfo" @click="getType(item.type)">
                                <span class="warmtext font12 colorGrey"  v-if="item.resourceUrl">{{getpxdata(item.type)}}</span>
                                <img class="bannerImg" :src="item.resourceUrl	" v-if="item.resourceUrl">
                                <el-upload
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
                                    <div  class="uploadtext" v-if="!item.resourceUrl">
                                        <i class="iconfont iconiconjia color2087 uploadIcon"></i>
                                        <span class="font12">添加图片<br>{{getpxdata(item.type)}}</span>
                                    </div>
                                </el-upload>
                            </div>
                          </div>
                        </div>
                        <div class="flexCenter" style="margin: 10px auto">
                            <div class="borbutton mr10"  @click="contentId = 3">上一步</div>
                            <div class="bacButton" @click="addActiveProduct()"  >
                              完成
                            </div>
                        </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
       
        </div>
      </div>
      
    </div>
    <Musiclist v-if="showMusic" @selectMusic="getmusicbackData"  @clickbanner="getbackData" :musicobj="musicobj"></Musiclist>
    <Addcommodity v-if="showSpecs" @selectGuige='getgoodsdata' :source="source" :goodsdataq="goodsData"  @clickbanner="getbackData"></Addcommodity>
 
</div>
</template>

<script>
  import Util from '@/common/util'
  import Aside from '@/components/aside'
  import Musiclist from '@/components/musiclist'
  import Filter from '@/common/filter'
  import Service from '@/common/service'
  import Store from '@/vuex/index'
  import KlTop from '@/components/klTop'
  import Global from '@/common/global'
  import Commodities from '@/components/commodities'
  import Addcommodity from '@/components/addcommodity'

  export default {
    name: "salecustomer",
    components: {
      Aside,
      KlTop,
      Commodities,
      Addcommodity,
      Musiclist
    },
    data() {
      return {
        luckdata:{
          type: 1,//抽奖类型 1 9宫格 2 大转盘
          baseParticipantsNums: '',//抽奖次数
          consumePoints: '',//消耗积分
          endTime: "",
          startTime:'',
          extraParticipantsNums: '',//额外抽奖次数
          maxWinTimes: '',//最大中奖次数
          name: "",
          participantsNumsType: 1,//参与次数类型 1 每日抽奖次数 2 每人抽奖次数
          prizes: [],//奖项设置 和 中奖设置
          registerDays: 0,//注册天数
          renovations: [],//界面装修
          toUserType: 1,//面向用户类型 1 所有用户 2 新用户 3 内勤用户
        },
        endTime: "",
        startTime:'',
        ispoints: 1,
        musicid: 1,
        showMusic: false,
        musicobj:{name:'',id:'',resourceUrl:''},
        musicdata:[{id:1,name:'Teen清新的音乐',resourceUrl:'http://devapi.ifxj.com/upload/kunlun/25eeb4d71a2d5a3d9304024f1164c15c.wav'},{id:2,name:'民谣清新的音乐',resourceUrl:'http://devapi.ifxj.com/upload/kunlun/0fe56a342e013436b07cc495a4d3c803.wav'},{id:3,name:'民谣积极明快音乐',resourceUrl:'http://devapi.ifxj.com/upload/kunlun/fde411bcc0810137da3a1deb713576c7.wav'}],
        prizesdata:[{type: 1,name:'',id: '',goodsId: '',imgUrl: '',nums: '',perPrizeNums:'',perPrizeType:'',perWinRate:''},
        {type: 2,name:'',id: '',goodsId: '',imgUrl: '',nums: '',perPrizeNums:'',perPrizeType:'',perWinRate:''},
        {type: 3,name:'',id: '',goodsId: '',imgUrl: '',nums: '',perPrizeNums:'',perPrizeType:'',perWinRate:''},
        {type: 8,name:'',id: '',goodsId: '',imgUrl: '',nums: '',perPrizeNums:'',perPrizeType:'',perWinRate:''},
        {type: 9,name:'',id: '',goodsId: '',imgUrl: '',nums: '',perPrizeNums:'',perPrizeType:'',perWinRate:''}],
        renovations: [{name:'',id:'',resourceUrl:'',type:1},{name:'',id:'',resourceUrl:'',type:2},{name:'',id:'',resourceUrl:'',type:3},{name:'',id:'',resourceUrl:'',type:4},{name:'',id:'',resourceUrl:'',type:5},{name:'',id:'',resourceUrl:'',type:6}],
        contentId: 1,
        contentselect: [{'name':'基础信息',isSelect:true,id:1},{'name':'奖项设置',isSelect:false,id: 2},{'name':'中奖设置',isSelect:false,id:3},{'name':'页面装修',isSelect:false,id:4}],
        selectData:[{'name':'九宫格',isSelect:true,id:1},{'name':'大转盘',isSelect:false,id:2}],
        upFileAction:'',
        headers: {},
        source: 'addluckdraw',
        goodsnum: '',
        winimgUrl: '',
        goodsData: {},
        nametype: '',
        selectindex: '',
        isLimitSale: true,
        maxSaleNums: '',
        lotteryTime: '',
        isConsumePoints: false,
        lotteryNums: '',
        limitPeople: true,
        maxRegDays: '',
        minRegDays: '',
        isuserRegDaysLimit: 1,
        userRegDaysLimit: null,
        minParticipantsNums: '',
        activityid: '',
        showSpecs: false,
        shelvesType: 1,
        points: '',
        activeIndex: '1',
        imgtype: '',
        sortDatas: [
          {orderType: '', name: '奖项', showBlue: false, orderField: ''},
          {orderType: '', name: '奖品', showBlue: false, orderField: ''},
          {orderType: '', name: '图片', showBlue: false, orderField: ''},
          {orderType: '', name: '数量', showBlue: false, orderField: ''},
          {orderType: '', name: '操作', showBlue: false, orderField: ''}
        ],
        sortDatastwo:[
          {orderType: '', name: '奖项', showBlue: false, orderField: ''},
          {orderType: '', name: '数量', showBlue: false, orderField: ''},
          {orderType: '', name: '中奖率', showBlue: false, orderField: ''},
          {orderType: '', name: '已投放数', showBlue: false, orderField: ''},
          {orderType: '', name: '已中奖数', showBlue: false, orderField: ''},
          {orderType: '', name: '每个奖品投放时间', showBlue: false, orderField: ''}
        ],
        shopId: '',
        insuranceDate: [],
        endDate: "",
        name: "",
        startDate: "",
        status: '',
        type: '',
        total: 0,
        size: 10,
        page: 1,
        noData: false,
        userInfo: '',
        actionendtime: '',
        actionstarttime: ''
      };
    },
    created() {
      if(this.$route.query.shopId){
        this.shopId = this.$route.query.shopId;
        localStorage.setItem('shopId', 2)
      }
       var  tokenVal = Util.localStorageUtil.get('access_token');
        this.headers = {token: tokenVal};
        this.userInfo = JSON.parse(localStorage.getItem('user'));
        if (this.userInfo) {
        }
    },
    watch: {
      'luckdata.participantsNumsType':function(){
        // this.luckdata.baseParticipantsNums = '';
        // this.luckdata.extraParticipantsNums = '';
      }
    },
    mounted() {
      this.upFileAction = Global.requestUrl+"/kl-store/admin/upload/file";
      if (this.$route.query) {
        this.activityid = this.$route.query.id;
        if (this.activityid) {
          this.getcommodityData();//获取详情
        }
      }
    },
    methods: {
      choosemusic(){
        this.showMusic = true;

      },
      getpxdata(type){
        var str = '';
          if(type == 2 && this.luckdata.type == 1){
              str = '750*1964像素'
          }else if(type == 2 && this.luckdata.type == 2){
            str = '750*1996像素'
          }else if(type == 3 && this.luckdata.type == 1){//九宫格转盘背景
               str = '692*763像素'
          }else if(type == 3 && this.luckdata.type == 2){//大转盘转盘背景
               str = '652*652像素'
          }else if(type == 4 && this.luckdata.type == 1){//九宫格指针
              str = '186*186像素'
          }else if(type == 4 && this.luckdata.type == 2){//大转盘指针
              str = '258*268像素'
          }else if(type == 5){
              str = '697*611像素'
          }else if(type == 6){
             str = '300*300像素'
          }
          return str
      },
      closeDiologone(){
         $(".dialog").css({"display":'none'})
        this.goodsData = {};
        this.winimgUrl = '';
        this.goodsnum = '';
        this.nametype = '';
      },
      // 打开编辑
      openEditor(item,index){
          this.selectindex = index;
          console.log(item)
        if(item.goodsId){

          this.goodsData.name = item.name;
          this.goodsData.id = item.goodsId;
          this.winimgUrl = item.imgUrl;
          this.goodsnum = item.nums;
          this.nametype = this.resetname(item.type);
        }else{
           this.nametype = this.resetname(item.type);
        }
           console.log(this.goodsData)
        $(".dialog").css({"display":'block'})
      },
      resetname(type){
        var str = '';
        if(type == 1){
          str = '一等奖';
        }else if(type == 2){
          str = '二等奖';
        }else if(type == 3){
          str = '三等奖';
        }else if(type == 8){
          str = '幸运奖';
        }else if(type == 9){
          str = '谢谢参与';
        }
        return str
      },
      setGoods(){
        var index = parseInt(this.selectindex);
        console.log(this.goodsData)
        if(this.nametype != '谢谢参与'){
           if(!this.goodsData.id){
            this.$message.error('请选择奖品');
            return;
          }
        }
        if(!this.winimgUrl){
           this.$message.error('请上传奖品图片');
           return;
        }
         if(this.nametype != '谢谢参与'){
           if(!this.goodsnum){
            this.$message.error('请设置奖品数量');
            return;
          }
         }
         if(this.nametype != '谢谢参与'){
            this.prizesdata[index].name = this.goodsData.name;
            this.prizesdata[index].goodsId = this.goodsData.id;
            this.prizesdata[index].nums = this.goodsnum;
         }
          this.prizesdata[index].imgUrl = this.winimgUrl;
         this.closeDiologone()
         
      },
      getgoodsdata(obj) {
        if (obj.name) {
          if (obj.name.length > 12) {
            obj.name = obj.name.substring(0, 12) + '...'
          }
        }
        this.goodsData = obj;
        console.log(this.goodsData)

      },
   
       beforeAvatarUpload(file) {
           Store.commit("setIsLoading", true);
            const isLt2M = file.size / 1024 / 1024 < 2;
            var index = file.name.indexOf('.');
            console.log(file)
            if (!isLt2M) {
                Store.commit("setIsLoading", false);
                this.$message.error('上传文件大小不能超过2M!');
            }
            return isLt2M;
      },
      
      errphoto(err, file, fileList){
      },
     getType(type){
       this.imgtype = type;
       console.log(this.imgtype)
     },
      handleAvatarSuccess(res, file) {
          Store.commit("setIsLoading", false);
          if(res.data){
             console.log(this.imgtype)
               console.log(this.imgtype)
            if(this.imgtype){
              var imgtype = this.imgtype - 1;
              console.log(imgtype)
               this.renovations[imgtype].resourceUrl = res.data;
              console.log( this.renovations)
            }else{
              this.winimgUrl = res.data;
            }
          }else{
              this.$message.error(res.message);
          }
      },
    
    
    
      handleChange(file, fileList) {
      },
    
      changeValue(name, type, item, index) {
        var on = true;
        if (name == 'perReduceNums') {
          if (item.maxReduceNums && parseInt(item.perReduceNums) > parseInt(item.maxReduceNums)) {
            this.$message.error('每次扣减不能大于最大于扣减');
            this.goodsData[index].perReduceNums = ''
            on = false;
            return;
          } else if (parseInt(item.perReduceNums) >parseInt(item.stock) ) {
            this.$message.error(`每次扣减不能大于最大于库存${item.stock}件`);
            this.goodsData[index].perReduceNums = ''
            this.$forceUpdate();
            on = false;
            return;
          }
        }
        if (name == 'maxReduceNums') {
          if (parseInt(item.maxReduceNums)  > parseInt(item.stock)) {
            this.goodsData[index].maxReduceNums = ''
            this.$message.error(`扣减总数不能大于最大于库存${item.stock}件`);
            this.$forceUpdate();
            on = false;
            return;
          }
        }
        if (type == 'submit') {
          return on;
        }
      },
      upSort(index){
        this.goodsData[index] = this.goodsData.splice(index-1, 1, this.goodsData[index])[0]
      },
      downSort(index){
        this.goodsData[index] = this.goodsData.splice(index+1, 1, this.goodsData[index])[0]
      },
     
      resetTab(id){
        for(let i in this.contentselect){
          this.contentselect[i].isSelect = false;
          if(this.contentselect[i].id == id){
             this.contentselect[i].isSelect = true;
          }
        }
      },
      gonext2(type){
        var on = true;
        this.luckdata.name = this.luckdata.name.replace(/^\s*|\s*$/g, "");
        if (!this.luckdata.name) {
          this.$message.warning('请输入活动名称');
          on = false;
          return;
        }
        if (this.luckdata.name.length < 2 || this.luckdata.name.length > 30) {
          this.$message.warning('请输入短于2个字不超过30个字的活动名称');
           on = false;
          return;
        }
        if (!this.startTime || !this.endTime) {
          this.$message.warning('请选择生效时间');
          on = false;
          return;
        }
        var reg = /^[1-9]\d*$/;
        var reg1 = /^[0-9]\d*$/;
        if(this.luckdata.toUserType == 2){
            if(!reg1.test(this.luckdata.registerDays)){
                this.$message.warning('请输入正确的注册天数');
                on = false;
                return;
            }
        }
        if(this.ispoints == 2){
          if(!reg1.test(this.luckdata.consumePoints)){
                this.$message.warning('请输入正确的消耗积分');
                on = false;
                return;
            }
        }else{
          this.luckdata.consumePoints = 0;
        }
        if(!reg.test(this.luckdata.baseParticipantsNums)){
            this.$message.warning('请输入正确的抽奖次数');
            on = false;
            return;
        }
        if(!reg1.test(this.luckdata.extraParticipantsNums)){
            this.$message.warning('请输入正确的额外抽奖次数');
            on = false;
            return;
        }
        if(!reg.test(this.luckdata.maxWinTimes)){
            this.$message.warning('请输入正确的每人最多可中奖次数');
            on = false;
            return;
        }
         console.log(this.luckdata)
        if(type){
          return on
        }else{
          this.contentId = 2;
          this.resetTab(this.contentId)
        }
      },
      gonext3(type){
        var on = true;
        for(var i = 0;i < this.prizesdata.length;i++){
          if(!this.prizesdata[i].imgUrl){
            if(this.prizesdata[i].type == 8 && this.luckdata.type == 2){

            }else{
               this.$message.warning('请设置奖项');
                on = false;
                return;
            }
          }
        }
        if(type){
          return on
        }else{
          this.contentId = 3;
           this.resetTab(this.contentId)
        }
        console.log(this.luckdata)
      },
      gonext4(type){
        var reg = /^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/;
        var on = true;
        for(var i = 0;i < this.prizesdata.length;i++){
          if(this.prizesdata[i]){
            if(this.prizesdata[i].type != 9){
              console.log(this.prizesdata[i].perWinRate)
              if(this.prizesdata[i].type == 8 && this.luckdata.type == 2){
              }else{
                if(this.prizesdata[i].perWinRate != 0){
                  if(!reg.test(parseFloat(this.prizesdata[i].perWinRate))){
                    this.$message.warning('请设置中奖率');
                    on = false;
                    return;
                  }
                }
                if(!(this.prizesdata[i].perWinRate.toString())){
                   this.$message.warning('请设置中奖率');
                    on = false;
                    return;
                }
                  if(!this.prizesdata[i].perPrizeType){
                      this.$message.warning('请选择每个奖品投放时间');
                      on = false;
                      return;
                  }
              }
            }
          }
          
        }
        if(type){
          return on
        }else{
          this.contentId = 4;
          this.resetTab(this.contentId)
        }
      },
      addActiveProduct() {
        if(!this.gonext2('submit')){
          return;
        }
        if(!this.gonext3('submit')){
          return;
        }
        if(!this.gonext4('submit')){
          return;
        }
        console.log(this.musicobj)
        if(!this.musicobj.name){
          this.$message.error('请选择背景音乐');
          return;
        }
        this.renovations[0].resourceUrl = this.musicobj.resourceUrl;
        this.renovations[0].name = this.musicobj.name;

        // for(let i in this.musicdata){
        //   if(this.musicdata[i].id){
        //     if(this.musicdata[i].id == this.musicid){
        //       this.renovations[0].resourceUrl = this.musicdata[i].resourceUrl;
        //     }
        //   }
        // }
        for(let i in this.renovations){
          if(this.renovations[i].type){
            if(!this.renovations[i].resourceUrl){
              if(this.luckdata.type == 1 && this.renovations[i].type == 4){
              }else{
                this.$message.error('请完善页面装修');
                return;
              }
            }
          }
        }
        console.log(this.prizesdata)
        if(this.luckdata.type == 2){
          for(var i=0;i < this.prizesdata.length;i++){
            if(this.prizesdata[i].type === 8){
              console.log(i)
                this.prizesdata.splice(i,1)
            }
          }
        }
        console.log(this.prizesdata)
        this.luckdata.renovations = this.renovations;
        this.luckdata.prizes = this.prizesdata;
        var endDate = Date.parse(new Date(this.endTime.replace(/-/g, "/")));
        var startDate = Date.parse(new Date(this.startTime.replace(/-/g, "/")));
        this.luckdata.endTime = endDate;
        this.luckdata.startTime = startDate;
        console.log(this.luckdata)
        if(this.activityid){
            Service.bigTurntable().editorbigTurntable(this.luckdata,this.activityid).then(response => {
              if (response.errorCode == 0) {
                this.$message.success('编辑成功');
                  if(this.shopId){
                   this.$router.push({name: 'lzluckdrawlist'})
                }else{
                    this.$router.push({name: 'luckdrawmanage'})
                }
              } else {
                this.$message.error(response.message)
              }
            }, err => {
          });
        }else{
           Service.bigTurntable().addbigTurntable(this.luckdata).then(response => {
              if (response.errorCode == 0) {
                this.$message.success('添加成功');
                if(this.shopId){
                   this.$router.push({name: 'lzluckdrawlist'})
                }else{
                    this.$router.push({name: 'luckdrawmanage'})
                }
              } else {
                this.$message.error(response.message)
              }
            }, err => {
          });
        }
      },
      getRecList() {
        this.showSpecs = true;
      },
      changecontentBox(item,index){
        this.contentId = item.id;
         for(let i in this.contentselect){
              this.contentselect[i].isSelect = false;
          }
          item.isSelect = true;
          this.$forceUpdate()
      },
      changeBox(item,index){
          this.luckdata.type = item.id;
          console.log(this.luckdata.type)
          for(let i in this.selectData){
              this.selectData[i].isSelect = false;
          }
          item.isSelect = true;
          this.$forceUpdate()
      },
      getmusicbackData(obj){
        this.musicobj = obj;
      },
      getbackData(str) {
        if (str == 'sure') {
          this.showMusic = false;
          this.showSpecs = false
        }
        if (str == 'cancle') {
          this.showMusic = false;
           this.showSpecs = false
        }
      },
      addCommodity() {
        this.$router.push({name: 'editorcommondity'})
      },
      goDetail(id) {
        this.$router.push({name: 'editorcommondity', query: {id: id}})
      },
      enddateChange(val) {
        if (val) {
          this.startTime = this.timetrans(val[0]);
          this.endTime = this.timetrans(val[1])
        } else {
          this.startTime = '';
          this.endTime = '';
        }
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
      getcommodityData() {
        Service.bigTurntable().getbigTurntable({}, this.activityid).then(response => {
          if (response.errorCode == 0) {
            this.luckdata = response.data;
            this.startTime = this.timetrans(response.data.startTime);
            this.endTime = this.timetrans(response.data.endTime);
            this.insuranceDate.push(new Date(response.data.startTime));
            this.insuranceDate.push(new Date(response.data.endTime))
            this.renovations = response.data.renovations;
            if(!response.data.consumePoints){
              this.ispoints = 1;
            }else{
              this.ispoints = 2;
            }
            for(let i in this.selectData){
              this.selectData[i].isSelect = false;
              if(response.data.type == this.selectData[i].id){
                 this.selectData[i].isSelect = true;
              }
          }
            // for(let i in this.musicdata){
            //   if(this.musicdata[i].id){
            //     if(this.musicdata[i].resourceUrl == this.renovations[0].resourceUrl){
            //       this.musicid = this.musicdata[i].id;
            //     }
            //   }
            // }
            this.musicobj.name = this.renovations[0].name;
            this.musicobj.resourceUrl = this.renovations[0].resourceUrl;
            this.musicobj.id = this.renovations[0].id;
            var prizesdata = response.data.prizes;
            var num = 0;
            if(response.data.type == 2){
                for(let item of prizesdata){
                  if(item.type == 8){
                    num++;
                  }
                }
                if(num == 0){
                  var obj = {
                      type: 8,
                      name:'',
                      id: '',
                      goodsId: '',
                      imgUrl: '',
                      nums: '',
                      perPrizeNums:'',
                      perPrizeType:'',
                      perWinRate:''
                  }
                  prizesdata.splice(3,0,obj);
                }
            }
            console.log(prizesdata)
            this.prizesdata = prizesdata;
          } else {
            this.$message.error(response.message)
          }
        }, err => {
        });

      },
    },

  }
</script>

