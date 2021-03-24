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
        .selectChannel {
          .channnelTitle {
            padding-bottom: 20px;
            position: relative;

            .detailImg {
              height: 356px;
              width: 200px;
              position: absolute;
              top: 10px;
              z-index: 9999;
              border-radius: 10px;
              margin-left: 10px;

            }
          }

          .processContent {
            height: 64px;
            width: 300px;
            margin: 0 auto;
          }

          .channnelContent {
            .channnelBox {
              margin-right: 20px;
              padding: 15px 35px;
              border: solid 1px #b7b7b7;
              text-align: center;
              position: relative;
            }

            .selectBox {
              margin-right: 20px;
              padding: 15px 35px;
              text-align: center;
              position: relative;
              border: solid 1px #56ae97;

              .selectIcon {
                height: 26px;
                width: 26px;
                position: absolute;
                top: 0;
                right: 0;
              }
            }
          }
        }

        .baseInfo {
          margin-top: 20px;

          .lableBox {
            margin-bottom: 24px;
            position: relative;

            .detailImg {
              height: 356px;
              width: 200px;
              position: absolute;
              top: 0px;
              z-index: 9999;
              border-radius: 10px;
              margin-left: 10px;
              left: 570px;
            }

            .radioBox {
              .iconfont {
                display: inline-block;
                vertical-align: middle;
                margin-top: -2px;
              }

              .iconxuanze {
                color: #e5e5e5;
              }

              .colorblack {
                margin-right: 30px;
              }
            }

            .timeSelect {
              margin-top: -4px;
            }

            .guigeTable {
              width: 92%;
              border: solid 1px #f6f6f6;

              tr {
                border-bottom: 1px solid #f6f6f6;

                th {
                  background: #f6f6f6;
                  color: #929292;
                  position: relative;

                  .iconwenhao {
                    font-size: 15px;
                    margin: 2px;
                  }

                  .warmText {
                    padding: 10px;
                    line-height: 20px;
                    position: absolute;
                    background-color: #ffffff;
                    box-shadow: 0px 2px 24px 0px rgba(199, 199, 199, 0.51);
                    border-radius: 4px;
                    left: -2px;
                    bottom: 40px;
                  }
                }

                td {
                  padding: 15px 10px;
                  color: #000;
                  line-height: 30px;

                  .iconbianji {
                    margin-left: 15px;
                  }

                  .editorInput {
                    text-align: center;
                  }

                  .borderBox {
                    width: 66px;
                    border: 1px solid #e5e5e5;
                    text-align: right;
                    padding-right: 5px;
                  }
                }
              }
            }

            .guigeBox {
              min-width: 168px;
              height: 46px;
              line-height: 46px;
              text-align: center;
              background-color: #f9f9f9;
              position: relative;
              margin-right: 20px;
              margin-bottom: 10px;

              .iconcuowu {
                position: absolute;
                right: 0;
                top: -15px;
                color: #929292;
              }

              .iconiconjia {
                font-size: 12px;
                position: absolute;
                top: -6px;
                right: 78px;
              }

              .guigeText {
                position: absolute;
                top: 8px;
                right: 58px;
              }
            }

            .inputBox {
              text-indent: 10px;
              width: 730px;
              height: 30px;
              border: solid 1px #e5e5e5;
              line-height: 30px;
            }

            .yunfeibox {
              width: 243px;
            }

            .imgUrlBox {
              flex-wrap: wrap;

              .imgFile {
                width: 139px;
                height: 107px;
                background-color: #f9f9f9;
                border-radius: 4px;
                margin-bottom: 12px;
                position: relative;
                margin-right: 20px;

                .deleteIcon {
                  position: absolute;
                  right: -1px;
                  top: -1px;
                  color: #929292;
                }

                .applicaninfoone {
                  width: 116px;
                  height: 80px;
                  margin: 14px 10px;
                  position: relative;

                  .bannerImg {
                    width: 116px;
                    height: 60px;
                    position: absolute;
                  }

                  .warmText {
                    position: absolute;
                    color: #fff;
                    width: 116px;
                    height: 18px;
                    left: 0px;
                    bottom: 2px;
                    text-align: center;
                  }

                  .imgBox {
                    display: inline-block;
                    width: 116px;
                    height: 80px;

                    .uploadtext {
                      width: 116px;
                      height: 80px;
                      color: #979797;
                      position: relative;
                    }
                  }
                }

                .websiteinput {
                  width: 300px;
                  height: 30px;
                  line-height: 30px;
                  text-indent: 10px;
                  border: solid 1px #e5e5e5;
                  margin-top: 40px;
                }
              }

              .applicaninfo {
                width: 140px;
                height: 107px;
                background-color: #f9f9f9;
                border-radius: 4px;
                text-align: center;

                .imgBox {
                  display: inline-block;
                  width: 140px;
                  height: 107px;

                  .uploadtext {
                    color: #979797;
                    position: relative;
                    margin-top: 50px;
                    height: 55px;

                    .uploadIcon {
                      font-size: 20px;
                      display: inline-block;
                      vertical-align: middle;
                      color: #56ae97;
                      position: absolute;
                      bottom: 60px;
                      right: 60px;
                    }
                  }
                }
              }
            }
          }

          .editorBox {
            .preview {
              margin-right: 20px;
              width: 267px;
              height: 473px;
              background-color: #ffffff;
              border: solid 1px #e5e5e5;

              .previewTitle {
                display: inline-block;
                text-align: center;
                color: #fff;
                width: 267px;
                height: 40px;
                line-height: 40px;
                background-color: #000000
              }

              .previewcontent {
                padding: 0 15px;
                max-height: 433px;
                overflow-y: auto;

                p {
                  line-height: 16px;
                  margin: 0 !important;
                }
              }

              .previewcontentone {
                padding: 0 15px;
                max-height: 433px;
                overflow-y: auto;

                p {
                  line-height: 16px;
                  margin: 0 !important;
                }
              }
            }
          }
        }

        .nextButoon {
          margin: 50px auto;
          text-align: center;

          .bacButton {
            display: inline-block;
          }
        }
      }
    }
  }

  .el-message-box__message {
    text-align: left;
  }
</style>
<template>
  <div class="general">
    <KlTop></KlTop>
    <div class="salecustomercontent contaner">
      <Aside></Aside>
      <div class="content">
        <div class="contanternews">
          <div class="selectChannel backWhite padding20">
            <div class="processContent ">
              <img src="../../assets/images/productone.png">
            </div>
          </div>
          <div class="selectChannel backWhite padding20 baseInfo">
            <div class="channnelTitle">
              <span class="colorblack font16 fontWeight marginright10">基本信息</span>
            </div>
            <div class="lableBox">
              <span class="colorGrey font12 marginright10">商品名称</span>
              <input type="text" class="colorblack font12 inputBox" v-model="goodsObj.name" @change="changeName('name')"
                     placeholder="请输入小于30个字符"/>
            </div>
            <div class="lableBox">
              <span class="colorGrey font12 marginright10">卖点简介</span>
              <input type="text" class="colorblack font12 inputBox" v-model="goodsObj.summary"
                     @change="changeName('summary')" placeholder="请输入小于80个字符"/>
            </div>
            <!-- <div class="lableBox">
                <span class="colorGrey font12 marginright10">服务说明</span>
                <input type="text" class="colorblack font12 inputBox" v-model="goodsObj.serviceNotes" @change="changeName('serviceNotes')" placeholder="请输入小于20个字符"/>
                <img class="detailImg" v-if="showNote" src="../../assets/images/shuoming.png"/>
                <i class="iconfont iconwenhao cursor color2087 font16"  @mouseover="showNote = true" @mouseout="showNote = false" ></i>
             </div> -->
            <div class="lableBox flex" style="margin-bottom: 0;">
              <span class="colorGrey font12 marginright10">详情头部</span>
              <div class="flexBetween imgUrlBox">
                <div class="imgFile flex" v-for='(item,index) in goodsObj.imgs' :key="item.productPlanName"
                     v-if="item.imgUrl" @dragstart="handleDragStart($event,item)"
                     @dragover.prevent="handleDragOver($event,item)"
                     @dragenter="handleDragEnter($event,item,index)"
                     @dragend="handleDragEnd($event,item)" draggable="true">
                  <i class="iconfont iconcuowu cursor deleteIcon" @click="delectImg(index,item)"></i>
                  <div class="applicaninfoone" @click="getIndex(index)">
                    <img class="bannerImg" :src="item.imgUrl">
                    <span class="warmText back2087 font12">更换图片</span>
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
                      <div class="uploadtext">
                      </div>
                    </el-upload>
                  </div>
                </div>
                <div class="applicaninfo" @click="uploadIndex = ''">
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
                    <div class="uploadtext">
                      <i class="iconfont iconiconjia color2087 uploadIcon"></i>
                      <span>添加图片<br>750*292像素</span>
                    </div>
                  </el-upload>
                </div>
              </div>
            </div>
          </div>
          <div class="selectChannel backWhite padding20 baseInfo">
            <div class="channnelTitle">
              <span class="colorblack font16 fontWeight marginright10">库存价格</span>
            </div>
            <div class="lableBox flex">
              <span class="colorGrey font12" style="display: inline-block; min-width: 56px;">服务规格</span>
              <div class="flex" style="flex-wrap: wrap;">
                <div class="guigeBox color2087 font12 cursor" v-for="(item,index) in guigeData"
                     @dragstart="handleDragStartguige($event,item)"
                     @dragover.prevent="handleDragOverguige($event,item)"
                     @dragenter="handleDragEnterguige($event,item)"
                     @dragend="handleDragEndguige($event,item)" draggable="true" :key='item.productPlanName'>
                  <span>{{item.productPlanName}}</span>
                  <i class="iconfont cursor iconcuowu font16" @click="delectGuige(index)"></i>
                </div>
                <div class="guigeBox color2087 font12 cursor" @click="addSpec()">
                  <i class="iconfont cursor iconiconjia color2087 font12"></i>
                  <span class="colorGrey guigeText">添加规格</span>
                </div>
              </div>

            </div>
            <div class="lableBox flex">
              <span class="colorGrey font12 marginright10">价格维护</span>
              <table class="guigeTable" v-if="guigeData.length != 0">
                <tr>
                  <th>规格编号</th>
                  <th>规格名称</th>
                  <th>是否需要审核</th>
                  <th>
                    销售价<i class="iconfont iconwenhao cursor color2087 font16" @mouseover="showSellWarm = true"
                          @mouseout="showSellWarm = false"></i>
                    <span class="warmText" v-if="showSellWarm">默认是标准价，请修改后的销售价>=标准价</span>
                  </th>
                  <th>划线价
                    <i class="iconfont iconwenhao cursor color2087 font16" @mouseover="showMarkWarm = true"
                       @mouseout="showMarkWarm = false"></i>
                    <span class="warmText" v-if="showMarkWarm">默认是0，请修改后的划线价>销售价</span>
                  </th>
                </tr>
                <tr v-for="item in guigeData" :key="item.productPlanNo">
                  <td>{{item.productPlanNo}}</td>
                  <td>{{item.productPlanName}}</td>
                  <td>
                    <div class="radioBox marginLeft10">
                      <i class="iconfont iconxuanzhong color2087 font20 cursor cursor" v-if="item.auditFlag == 1"></i>
                      <i class="iconfont iconxuanze  font20 cursor" v-if="item.auditFlag == 0"
                         @click="item.auditFlag = 1"></i>
                      <span class="colorblack font12">需要</span>
                      <i class="iconfont iconxuanzhong color2087 font20 cursor" v-if=" item.auditFlag == 0"></i>
                      <i class="iconfont iconxuanze  font20 cursor" v-if="item.auditFlag == 1"
                          @click="item.auditFlag = 0"></i>
                      <span class="colorblack font12">不需要</span>
                    </div>
                  </td>
                  <td>
                    ¥
                    <span class="valueSpan" v-if="!item.issellPriceEditor">{{item.sellPrice}}</span>
                    <input type="tel" class="editorInput borderBox" v-if="item.issellPriceEditor"
                           v-model="item.sellPrice" @blur="removsellPriceBorder(item,'')">
                    <i class="iconfont iconbianji color2087 font14 cursor" @click="item.issellPriceEditor = true"></i>
                  </td>
                  <td>
                    ¥
                    <span class="valueSpan" v-if="!item.ismarketPriceEditor">{{item.marketPrice}}</span>
                    <input type="tel" class="editorInput borderBox" v-if="item.ismarketPriceEditor"
                           v-model="item.marketPrice" @blur="removmarketPriceBorder(item,'')">
                    <i class="iconfont iconbianji color2087 font14 cursor" @click="item.ismarketPriceEditor = true"></i>
                  </td>
                </tr>
              </table>
            </div>
          </div>

          <div class="selectChannel backWhite padding20 baseInfo">
            <div class="channnelTitle">
              <span class="colorblack font16 fontWeight marginright10">用户权益领取须知</span>
            </div>
            <div class="lableBox flex">
              <span class="colorGrey font12 marginright10">客户是否需要勾选用户权益领取须知</span>
              <div class="radioBox marginLeft10">
                <i class="iconfont iconxuanzhong color2087 font20 cursor cursor"
                   v-if="goodsObj.receiveNotesFlag==1"></i>
                <i class="iconfont iconxuanze  font20 cursor" v-if="goodsObj.receiveNotesFlag != 1"
                   @click="goodsObj.receiveNotesFlag = 1"></i>
                <span class="colorblack font12">是</span>
                <i class="iconfont iconxuanzhong color2087 font20 cursor" v-if="goodsObj.receiveNotesFlag==0"></i>
                <i class="iconfont iconxuanze  font20 cursor" v-if="goodsObj.receiveNotesFlag !=0"
                   @click="goodsObj.receiveNotesFlag = 0"></i>
                <span class="colorblack font12">否</span>
              </div>
            </div>
            <div class="editorBox flex" v-if="goodsObj.receiveNotesFlag == 1">
              <div class="preview">
                <span class="previewTitle">预览页面</span>
                <div class="previewcontentone font12" v-html="goodsObj.receiveNotes"></div>
              </div>
              <vue-ueditor-wrap v-model="goodsObj.receiveNotes" :config="myConfig" @beforeInit="addCustomButtom"
                                :key="1"></vue-ueditor-wrap>
            </div>
          </div>
          <div class="selectChannel backWhite padding20 baseInfo">
            <div class="channnelTitle">
              <span class="colorblack font16 fontWeight marginright10">使用说明</span>
              <i @mouseover="showImg = true" @mouseout="showImg = false"
                 class="iconfont iconwenhao cursor  color2087 font16"></i>
              <img class="detailImg" v-if="showImg" src="../../assets/images/detailImg.png">
            </div>
            <div class="lableBox flex">
              <span class="colorGrey font12 marginright10">客户是否需要勾选使用说明</span>
              <div class="radioBox marginLeft10">
                <i class="iconfont iconxuanzhong color2087 font20 cursor cursor" v-if="goodsObj.useNotesFlag==1"></i>
                <i class="iconfont iconxuanze  font20 cursor" v-if="goodsObj.useNotesFlag !=1"
                   @click="goodsObj.useNotesFlag = 1"></i>
                <span class="colorblack font12">是</span>
                <i class="iconfont iconxuanzhong color2087 font20 cursor" v-if="goodsObj.useNotesFlag==0"></i>
                <i class="iconfont iconxuanze  font20 cursor" v-if="goodsObj.useNotesFlag !=0"
                   @click="goodsObj.useNotesFlag = 0"></i>
                <span class="colorblack font12">否</span>
              </div>
            </div>
            <div class="editorBox flex" v-if="goodsObj.useNotesFlag==1">
              <div class="preview">
                <span class="previewTitle">预览页面</span>
                <div class="previewcontent font12" v-html="goodsObj.useNotes"></div>
              </div>
              <vue-ueditor-wrap v-model="goodsObj.useNotes" :config="myConfig" @beforeInit="addCustomButtom"
                                :key="1"></vue-ueditor-wrap>
            </div>
          </div>


          <div class="selectChannel backWhite padding20 baseInfo">
            <div class="channnelTitle">
              <span class="colorblack font16 fontWeight marginright10">是否需要勾选信息采集协议</span>
            </div>
            <div class="lableBox flex">
              <span class="colorGrey font12 marginright10">是否需要勾选信息采集协议</span>
              <div class="radioBox marginLeft10">
                <i class="iconfont iconxuanzhong color2087 font20 cursor cursor" v-if="goodsObj.checkProtocol"></i>
                <i class="iconfont iconxuanze  font20 cursor" v-if="!goodsObj.checkProtocol"
                   @click="goodsObj.checkProtocol = true"></i>
                <span class="colorblack font12">勾选</span>
                <i class="iconfont iconxuanzhong color2087 font20 cursor" v-if=" !goodsObj.checkProtocol"></i>
                <i class="iconfont iconxuanze  font20 cursor" v-if="goodsObj.checkProtocol"
                    @click="goodsObj.checkProtocol = false"></i>
                <span class="colorblack font12">不勾选</span>
              </div>
            </div>
          </div>
          <div class="selectChannel backWhite padding20 baseInfo">
            <div class="channnelTitle">
              <span class="colorblack font16 fontWeight marginright10">权益等级类型</span>
            </div>
            <div class="lableBox flex">
              <span class="colorGrey font12 marginright10">权益等级类型</span>
              <div class="radioBox marginLeft10">
                <i class="iconfont iconxuanzhong color2087 font20 cursor cursor"
                   v-if="goodsObj.rightsLevelType == 1"></i>
                <i class="iconfont iconxuanze  font20 cursor" v-if="goodsObj.rightsLevelType != 1"
                   @click="goodsObj.rightsLevelType = 1"></i>
                <span class="colorblack font12">客户分级权益</span>
                <i class="iconfont iconxuanzhong color2087 font20 cursor" v-if=" goodsObj.rightsLevelType == 2"></i>
                <i class="iconfont iconxuanze  font20 cursor" v-if="goodsObj.rightsLevelType != 2"
                    @click="goodsObj.rightsLevelType = 2"></i>
                <span class="colorblack font12">渠道增值权益</span>
              </div>
            </div>
          </div>
          <!-- <div class="selectChannel backWhite padding20 baseInfo">
             <div class="channnelTitle">
                 <span class="colorblack font16 fontWeight marginright10">是否需要审核</span>
             </div>
             <div class="lableBox flex" style="margin-bottom: 16px;">
                 <span class="colorGrey font12 marginright10">是否需要审核</span>
                 <div class="radioBox marginLeft10"  >
                     <i class="iconfont iconxuanzhong color2087 font20 cursor cursor" v-if="examine == 1"></i>
                     <i class="iconfont iconxuanze  font20 cursor" v-if="examine == 0" @click="examine = 1"></i>
                     <span class="colorblack font12">需要</span>
                     <i class="iconfont iconxuanzhong color2087 font20 cursor" v-if=" examine == 0"></i>
                     <i class="iconfont iconxuanze  font20 cursor" v-if="examine == 1"  @click="examine = 0"></i>
                     <span class="colorblack font12">不需要</span>
                 </div>
             </div>
             <div class="" style="margin-left: 94px;">
                      <el-checkbox-group v-model="checkList" @change='changecheckList'>
                         <el-checkbox class="marginbottom10"  :label="item.productPlanNo" :name="item.productPlanName" v-for="item in guigeData" :key="item.productPlanName">{{item.productPlanName}}</el-checkbox>

                     </el-checkbox-group>
             </div>
         </div> -->
          <div class="nextButoon">
            <span class="bacButton cursor" @click="goDetail()">下一步</span>
          </div>
        </div>
      </div>
      <AddSpecs v-if="showSpecs" @selectGuige='getGuigeData' :rightsFlag="rightsFlag" @clickbanner="getbackData"
                :guigeData="guigeData"></AddSpecs>
    </div>
  </div>
</template>

<script>

  import Util from '@/common/util'
  import Aside from '@/components/aside'
  import AddSpecs from '@/components/addSpecs'
  import GoumaiEditor from '@/components/goumaiEditor'
  import Filter from '@/common/filter'
  import Service from '@/common/service'
  import Store from '@/vuex/index'
  import KlTop from '@/components/klTop'
  import Global from '@/common/global'
  import VueUeditorWrap from 'vue-ueditor-wrap' // ES6 Module
  export default {
    name: "salecustomer",
    components: {
      Aside,
      KlTop,
      AddSpecs,
      GoumaiEditor
    },
    data() {
      return {
        checkList: [],//需要审核的规格
        rightsFlag: '01',
        showSellWarm: false,
        showMarkWarm: false,
        showNote: false,
        showImg: false,
        goodsObj: {
          description: '',//产品详情
          checkProtocol: true,
          faqs: [{question: '', answer: '', id: '', sort: 1}, {
            question: '',
            answer: '',
            id: '',
            sort: 2
          }, {question: '', answer: '', id: '', sort: 3}],//常见疑问
          imgUrl: '',
          name: '',
          summary: '',
          serviceNotes: '',
          imgs: [],
          specs: [],
          receiveNotesFlag: 1,
          receiveNotes: '',
          useNotes: '',
          useNotesFlag: 1,
          rightsLevelType: 1,
        },
        productId: '',
        expireTimeOption: {
          disabledDate(date) {
            return date.getTime() < Date.now() - 8.64e7;
          }
        },
        shelfTime: '',
        offTime: '',
        isInstructions: 1,
        msgData: '',
        shiyongmasg: '',
        myConfig: {
          autoHeightEnabled: false,
          initialFrameHeight: 345,
          initialFrameWidth: '640',
          UEDITOR_HOME_URL: '../../../static/UEditor/',
          serverUrl: ''
        },
        isShangjia: 1,
        isGoumai: 1,
        showSpecs: false,
        guigeData: [],
        uploadIndex: '',
        upFileAction: '',
        imageUrl: '',
        headers: {},
        showOne: false,
        showTwo: false,
        showThree: false,
        showFour: false,
        dissipate: [],
        timer: null,
        username: '',
        userInfo: '',
        permissions: [],
        dragging: null,
        draggingguige: null,
      };
    },
    beforeDestroy() {
      if (this.guigeData.length != 0) {
        //  this.goodsObj.specs = [];
        for (var i = 0; i < this.guigeData.length; i++) {
          if (this.guigeData[i]) {
            var obj = {
              "id": this.guigeData[i].id,
              "marketPrice": this.guigeData[i].marketPrice,
              "planId": this.guigeData[i].planId,
              "sellPrice": this.guigeData[i].sellPrice,
              "sort": parseInt(i) + 1,
              "auditFlag": this.guigeData[i].auditFlag
            };
            this.goodsObj.specs.push(obj)
          }
        }
      }
      if (this.goodsObj.imgs.length != 0) {
        for (var i = 0; i < this.goodsObj.imgs.length; i++) {
          this.goodsObj.imgUrl = this.goodsObj.imgs[0].imgUrl;
          this.goodsObj.imgs[i].sort = parseInt(i) + 1;
        }
      }

      if (!this.productId) {
        Util.sessionStorageUtil.set('rightsguigeData', this.guigeData);
        Util.sessionStorageUtil.set('rightsgoodsObj', this.goodsObj);
      } else {
        Util.sessionStorageUtil.set('rightsguigeData' + this.productId, this.guigeData);
        Util.sessionStorageUtil.set('rightsgoodsObj' + this.productId, this.goodsObj);
      }
    },
    destroyed() {

    },
    created() {
      if (this.$route.query) {
        this.productId = this.$route.query.id;
        if (Util.sessionStorageUtil.get('rightsgoodsObj') && !this.productId) {
          this.goodsObj = Util.sessionStorageUtil.get('rightsgoodsObj');
          this.guigeData = Util.sessionStorageUtil.get('rightsguigeData');
          for (let i in this.selectData) {
            this.selectData[i].isSelect = false;
            if ((parseInt(i)) == this.goodsObj.visibleType) {
              this.selectData[i].isSelect = true;
            }
          }
          this.goodsObj.specs = [];
        }
        if (this.productId) {
          this.getCommodity(this.productId)
        }
      }
      var tokenVal = Util.localStorageUtil.get('access_token');
      this.headers = {token: tokenVal, shopId: 1};
      this.userInfo = JSON.parse(localStorage.getItem('user'));
      if (this.userInfo) {
      }

    },
    watch: {
      'goodsObj.useNotes': function () {
        this.$nextTick(() => {
          var img = $('.previewcontent ').find('img');
          for (var i = 0; i < img.length; i++) {
            // console.log($(img[i]).attr("style"))
            if ($(img[i]).width() > window.screen.width) {
              $(img[i]).css("cssText", "width:100% !important;box-sizing:border-box !important;word-wrap: break-word !important;")
            } else {
              $(img[i]).css({'max-width': '100%', 'height': 'auto'})
            }
          }
        })
      },
      'goodsObj.receiveNotes': function () {
        this.$nextTick(() => {
          var img = $('.previewcontentone').find('img');
          for (var i = 0; i < img.length; i++) {
            // console.log($(img[i]).attr("style"))
            if ($(img[i]).width() > window.screen.width) {
              $(img[i]).css("cssText", "width:100% !important;box-sizing:border-box !important;word-wrap: break-word !important;")
            } else {
              $(img[i]).css({'max-width': '100%', 'height': 'auto'})
            }
          }
        })
      }
    },
    mounted() {
      this.upFileAction = Global.requestUrl + "/kl-store/admin/upload/file"
      this.myConfig.serverUrl = Global.requestUrl+"/kl-store/ueditor/index";
    },
    methods: {
      changecheckList(ev) {
        console.log(ev)
        this.checkList = ev;
      },
      BrowserType() {//判断浏览器类型
        var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
        var isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器
        var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器
        var isEdge = userAgent.indexOf("Windows NT 6.1; Trident/7.0;") > -1 && !isIE; //判断是否IE的Edge浏览器
        var isFF = userAgent.indexOf("Firefox") > -1; //判断是否Firefox浏览器
        var isSafari = userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") == -1; //判断是否Safari浏览器
        var isChrome = userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1; //判断Chrome浏览器
        if (isIE) {
          var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
          reIE.test(userAgent);
          var fIEVersion = parseFloat(RegExp["$1"]);
          return {name: "IE", num: fIEVersion};
        }//isIE end

        if (isFF) {
          return {name: "FF", num: "FF"};
        }
        if (isOpera) {
          return {name: "Opera", num: "Opera"};
        }
        if (isSafari) {
          return {name: "Safari", num: "Safari"};
        }
        if (isChrome) {
          return {name: "Chrome", num: "Chrome"};
        }
        if (isEdge) {
          return {name: "Edge", num: "Edge"};
        }
      },
      getCommodity(productId) {
        Service.rights().getrights({}, productId
        ).then(response => {
          if (response.errorCode == 0) {
            this.goodsObj.name = response.data.name;
            this.goodsObj.imgUrl = response.data.imgUrl;
            this.goodsObj.description = response.data.description;
            this.goodsObj.imgs = response.data.imgList;
            this.goodsObj.receiveNotes = response.data.receiveNotes;
            this.goodsObj.faqs = response.data.faqList;
            this.goodsObj.receiveNotesFlag = response.data.receiveNotesFlag;
            this.goodsObj.serviceNotes = response.data.serviceNotes;
            this.goodsObj.summary = response.data.summary;
            this.goodsObj.useNotes = response.data.useNotes;
            this.goodsObj.useNotesFlag = response.data.useNotesFlag;
            this.goodsObj.checkProtocol = response.data.checkProtocol;
            this.goodsObj.rightsLevelType = response.data.rightsLevelType;
            if (response.data.specList) {
              for (var i = 0; i < response.data.specList.length; i++) {
                var obj = {
                  entityCardFlag: response.data.specList[i].plan.entityCardFlag,
                  entityFlag: response.data.specList[i].plan.entityFlag,
                  id: response.data.specList[i].id,
                  marketPrice: response.data.specList[i].marketPrice,
                  planId: response.data.specList[i].planId,
                  originalStock: response.data.specList[i].stock,
                  originalcardStock: response.data.specList[i].cardStock,
                  sellPrice: response.data.specList[i].sellPrice,
                  productPlanName: response.data.specList[i].plan.productPlanName,
                  productPlanShortName: response.data.specList[i].plan.productPlanShortName,
                  sort: response.data.specList[i].sort,
                  stock: response.data.specList[i].stock,
                  auditFlag: response.data.specList[i].auditFlag,
                  cardStock: response.data.specList[i].cardStock,
                  productPlanNo: response.data.specList[i].plan.productPlanNo,
                  isstockEditor: false,
                  isstockoneEditor: false,
                  issellPriceEditor: false,
                  ismarketPriceEditor: false,
                  originalsellPrice: response.data.specList[i].plan.planPrice,
                  originalmarketPrice: response.data.specList[i].marketPrice
                };
                this.guigeData.push(obj)
              }
            }
            this.goodsObj.specs = [];
          } else {
            this.$message.error(response.message)
          }

        }, err => {
        });
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
      changeName(str, type) {
        var on = true;
        if (str == 'name') {
          if (this.goodsObj[str].length > 30 || this.goodsObj[str].length < 2) {
            this.$message.error('商品名称必须填写，最多30个字且不少于2个字');
            on = false;
            return;
          }
        }
        if (str == 'summary') {
          if (this.goodsObj[str].length > 80 || this.goodsObj[str].length < 2) {
            this.$message.error('卖点简介必须填写，最多80个字不少于2个字');
            on = false;
            return;
          }
        }
        // if(str == 'serviceNotes'){
        //     if(this.goodsObj[str].length > 20 || this.goodsObj[str].length < 2){
        //         this.$message.error('服务说明必须填写，最多20个字不少于2个字');
        //         on = false;
        //         return;
        //     }
        // }
        if (type == 'submit') {
          return on;
        }
      },
      delectGuige(index) {
        this.checkList = [];
        this.guigeData.splice(index, 1)
      },
      //添加规格
      getGuigeData(str) {
        console.log(typeof str.planPrice)
        var obj = {
          auditFlag: 0,
          entityCardFlag: str.entityCardFlag,
          entityFlag: str.entityFlag,
          id: '',
          marketPrice: 0,
          planId: str.id,
          originalStock: 0,
          originalcardStock: 0,
          sellPrice: str.planPrice,
          productPlanName: str.productPlanName,
          productPlanShortName: str.productPlanShortName,
          sort: 0,
          stock: 0,
          cardStock: 0,
          productPlanNo: str.productPlanNo,
          isstockEditor: false,
          isstockoneEditor: false,
          issellPriceEditor: false,
          ismarketPriceEditor: false,
          originalsellPrice: str.planPrice,
          originalmarketPrice: 0
        };
        this.guigeData.push(obj)
      },
      handleDragStartguige(e, item) {
        e.dataTransfer.setData("imgInfo", '')
        this.draggingguige = item;
      },
      handleDragEndguige(e, item) {
        this.draggingguige = null
      },
      //首先把div变成可以放置的元素，即重写dragenter/dragover
      handleDragOverguige(e) {
        e.dataTransfer.dropEffect = 'move'// e.dataTransfer.dropEffect="move";//在dragenter中针对放置目标来设置!
      },
      handleDragEnterguige(e, item, index) {
        e.dataTransfer.effectAllowed = "move";//为需要移动的元素设置dragstart事件
        if (item === this.draggingguige) {
          return
        }
        const newItems = [...this.guigeData];
        const src = newItems.indexOf(this.draggingguige);
        const dst = newItems.indexOf(item);
        newItems.splice(dst, 0, ...newItems.splice(src, 1));
        this.guigeData = newItems;
      },
      handleDragStart(e, item) {
        this.dragging = item;
      },
      handleDragEnd(e, item) {
        this.dragging = null
      },
      //首先把div变成可以放置的元素，即重写dragenter/dragover
      handleDragOver(e) {
        e.dataTransfer.dropEffect = 'move'// e.dataTransfer.dropEffect="move";//在dragenter中针对放置目标来设置!
      },
      handleDragEnter(e, item, index) {
        e.dataTransfer.effectAllowed = "move";//为需要移动的元素设置dragstart事件
        if (item === this.dragging) {
          return
        }
        const newItems = [...this.goodsObj.imgs];
        const src = newItems.indexOf(this.dragging);
        const dst = newItems.indexOf(item);
        newItems.splice(dst, 0, ...newItems.splice(src, 1));
        this.goodsObj.imgs = newItems;
      },
      goDetail() {
        if (!this.changeName('name', 'submit')) {
          return;
        }
        if (!this.changeName('summary', 'submit')) {
          return;
        }
        // if(!this.changeName('serviceNotes','submit')){
        //     return;
        // }
        if (this.goodsObj.imgs.length == 0) {
          this.$message.error('请上传详情头部图片');
          return
        }

        if (this.guigeData.length == 0) {
          this.$message.error('请添加服务规格');
          return
        }
        // if(this.guigeData.length != 0){
        //    for(var i = 0;i < this.guigeData.length;i++){
        //        if(this.guigeData[i]){
        //            if(!this.removsellPriceBorder(this.guigeData[i],'submit')){
        //                return;
        //            }
        //            if(!this.removmarketPriceBorder(this.guigeData[i],'submit')){
        //                return;
        //            }
        //        }
        //    }
        // }
        if (this.goodsObj.receiveNotesFlag == 1) {
          if (this.goodsObj.receiveNotes == '') {
            this.$message.error('请输入权益领取须知');
            return;
          }
        }
        if (this.goodsObj.useNotesFlag == 1) {
          if (this.goodsObj.useNotes == '') {
            this.$message.error('请输入使用说明');
            return;
          }
        }
        if (this.goodsObj.useNotesFlag == 0) {
          this.goodsObj.useNotes = '';
        }

        for (var i = 0; i < this.goodsObj.imgs.length; i++) {
          this.goodsObj.imgs[i].sort = parseInt(i) + 1;
          this.goodsObj.imgUrl = this.goodsObj.imgs[0].imgUrl;
        }

        if (!this.productId) {
          Util.sessionStorageUtil.set('rightsguigeData', this.guigeData);
          Util.sessionStorageUtil.set('rightsgoodsObj', this.goodsObj);
        } else {
          Util.sessionStorageUtil.set('rightsguigeData' + this.productId, this.guigeData);
          Util.sessionStorageUtil.set('rightsgoodsObj' + this.productId, this.goodsObj);
        }
        this.$router.push({name: 'legalrightdetail', query: this.$route.query})
      },
      changeoffTime(type) {
        var on = true;
        if (Date.parse(new Date()) > Date.parse(this.offTime)) {
          on = false;
          this.$message.error('下架时间应晚于当前时间');
          this.offTime = '';
        }
        if (this.isShangjia == 2 && this.shelfTime) {
          if (Date.parse(this.shelfTime) >= Date.parse(this.offTime)) {
            on = false;
            this.$message.error('下架时间应晚于商品上架时间');
            this.offTime = '';
          }
        }
        if (type == 'submit') {
          return on
        }
      },
      changeSelfTime(type) {
        var on = true;
        if (Date.parse(new Date()) > Date.parse(this.shelfTime)) {
          on = false;
          this.$message.error('上架时间应晚于当前时间');
          this.shelfTime = '';
        }
        if (this.isShangjia == 2 && this.shelfTime) {
          if (Date.parse(this.shelfTime) >= Date.parse(this.offTime)) {
            on = false;
            this.$message.error('上架时间应早于商品上架时间');
            this.shelfTime = '';
          }
        }
        if (type == 'submit') {
          return on;
        }
      },
      // 添加自定义按钮
      addCustomButtom(editorId) {
        window.UE.registerUI('test-button', function (editor, uiName) {
          // 注册按钮执行时的 command 命令，使用命令默认就会带有回退操作
          editor.registerCommand(uiName, {
            execCommand: function () {
              editor.execCommand('inserthtml', `<span>这是一段由自定义按钮添加的文字</span>`);
            }
          });
          // 创建一个 button
          var btn = new window.UE.ui.Button({
            // 按钮的名字
            name: uiName,
            // 提示
            title: '鼠标悬停时的提示文字',
            // 需要添加的额外样式，可指定 icon 图标，图标路径参考常见问题 2
            cssRules: "background-image: url('/test-button.png') !important;background-size: cover;",
            // 点击时执行的命令
            onclick: function () {
              // 这里可以不用执行命令，做你自己的操作也可
              editor.execCommand(uiName);
            }
          });
          // 当点到编辑内容上时，按钮要做的状态反射
          editor.addListener('selectionchange', function () {
            var state = editor.queryCommandState(uiName);
            if (state === -1) {
              btn.setDisabled(true);
              btn.setChecked(false);
            } else {
              btn.setDisabled(false);
              btn.setChecked(state);
            }
          });
          // 因为你是添加 button，所以需要返回这个 button
          return btn;
        }, 0 /* 指定添加到工具栏上的哪个位置，默认时追加到最后 */, editorId /* 指定这个 UI 是哪个编辑器实例上的，默认是页面上所有的编辑器都会添加这个按钮 */);
      },
      // 添加自定义弹窗
      addCustomDialog(editorId) {
        window.UE.registerUI('test-dialog', function (editor, uiName) {
          // 创建 dialog
          var dialog = new window.UE.ui.Dialog({
            // 指定弹出层中页面的路径，这里只能支持页面，路径参考常见问题 2
            iframeUrl: '/customizeDialogPage.html',
            // 需要指定当前的编辑器实例
            editor: editor,
            // 指定 dialog 的名字
            name: uiName,
            // dialog 的标题
            title: '这是一个自定义的 Dialog 浮层',
            // 指定 dialog 的外围样式
            cssRules: 'width:600px;height:300px;',
            // 如果给出了 buttons 就代表 dialog 有确定和取消
            buttons: [
              {
                className: 'edui-okbutton',
                label: '确定',
                onclick: function () {
                  dialog.close(true);
                }
              },
              {
                className: 'edui-cancelbutton',
                label: '取消',
                onclick: function () {
                  dialog.close(false);
                }
              }
            ]
          });
          // 参考上面的自定义按钮
          var btn = new window.UE.ui.Button({
            name: 'dialog-button',
            title: '鼠标悬停时的提示文字',
            cssRules: `background-image: url('/test-dialog.png') !important;background-size: cover;`,
            onclick: function () {
              // 渲染dialog
              dialog.render();
              dialog.open();
            }
          });
          return btn;
        }, 0 /* 指定添加到工具栏上的那个位置，默认时追加到最后 */, editorId /* 指定这个UI是哪个编辑器实例上的，默认是页面上所有的编辑器都会添加这个按钮 */);
      },
      getbackData(str) {
        if (str == 'sure') {
          this.showSpecs = false;
        }
        if (str == 'cancle') {
          this.showSpecs = false;
        }
      },
      addSpec() {
        this.showSpecs = true;
      },
      changeExpress(type) {
        var on = true;
        var reg = /((^[1-9]\d*)|^0)(\.\d{0,2}){0,1}$/;
        if (!reg.test(this.goodsObj.expressFee)) {
          this.$message.error('请输入正确合理的运费价格');
          on = false;
        }
        if (type == 'submit') {
          return on
        }
      },
      removstockoneBorder(item, type) {
        var on = true;
        item.isstockoneEditor = false;
        var reg = /^[0-9]\d*$/;
        if (!reg.test(item.cardStock)) {
          on = false;
          this.$alert('修改库存可能会有如下问题：库存改为0时，前台会显示缺货,库存数超过实际库存可能导致超卖而增加后续退货的工作', '确认修改库存吗', {
            confirmButtonText: '确定',
            callback: action => {
              item.cardStock = item.originalcardStock;
            }
          });
          // this.$confirm( '修改库存可能会有如下问题：库存改为0时，前台会显示缺货,库存数超过实际库存可能导致超卖而增加后续退货的工作', '确认修改库存吗', {
          //     confirmButtonText: '确定',
          //     cancelButtonText: '取消',
          //     type: 'warning'
          // }).then(() => {
          //     item.cardStock = item.originalcardStock;
          // }).catch(() => {
          //     item.cardStock = item.originalcardStock;
          // });
        }
        if (type == 'submit') {
          return on;
        }
        this.$forceUpdate()
      },
      removstockBorder(item, type) {

        var on = true;
        item.isstockEditor = false;
        var reg = /^[0-9]\d*$/;
        if (item.entityFlag == '02' && item.entityCardFlag == '01') {
          reg = /^[0-9]\d*$/;
        }
        if (!reg.test(item.stock)) {
          on = false;
          this.$alert('修改库存可能会有如下问题：库存改为0时，前台会显示缺货,库存数超过实际库存可能导致超卖而增加后续退货的工作', '确认修改库存吗', {
            confirmButtonText: '确定',
            callback: action => {
              item.stock = item.originalStock;
            }
          });
        }
        if (type == 'submit') {
          console.log(on);
          return on;
        }
        this.$forceUpdate()
      },
      removsellPriceBorder(item, type) {
        return
        var on = true;
        item.issellPriceEditor = false;
        if (this.rightsFlag != '01') {
          var reg = /((^[1-9]\d*)|^0)(\.\d{0,2}){0,1}$/;
        } else if (this.rightsFlag == '01') {
          var reg = /((^[0-9]\d*)|^0)(\.\d{0,2}){0,1}$/;
        }
        if (!reg.test(item.sellPrice)) {
          on = false;
          this.$alert('请输入合理的销售价格', '销售价格修改提醒', {
            confirmButtonText: '确定',
            callback: action => {
              item.sellPrice = item.originalsellPrice;
            }
          });
        }
        if (item.sellPrice == 0 && this.rightsFlag != '01') {
          on = false;
          this.$alert('请输入合理的销售价格', '销售价格修改提醒', {
            confirmButtonText: '确定',
            callback: action => {
              item.sellPrice = item.originalsellPrice;
            }
          });
        }
        // else if(parseFloat(item.sellPrice) >= parseFloat(item.marketPrice)){
        //     console.log(item.sellPrice,item.marketPrice)
        //     on = false;
        //     this.$alert('为保持良好用户体验，注意销售价格低于划线价', '销售价格修改提醒', {
        //         confirmButtonText: '确定',
        //         callback: action => {
        //             item.sellPrice = item.originalsellPrice;
        //         }
        //     });
        // }
        // else if(parseFloat(item.originalsellPrice) > parseFloat(item.sellPrice)){
        //     on = false;
        //     this.$alert('销售价格请高于标准价，否则可能会导致低价销售', '销售价格修改提醒', {
        //         confirmButtonText: '确定',
        //         callback: action => {
        //             item.sellPrice = item.originalsellPrice;
        //         }
        //     });
        // }
        if (type == 'submit') {
          return on;
        }
        this.$forceUpdate()
      },
      removmarketPriceBorder(item, type) {
        return
        var on = true;
        item.ismarketPriceEditor = false;

        if (this.rightsFlag != '01') {
          var reg = /((^[1-9]\d*)|^0)(\.\d{0,2}){0,1}$/;
        } else if (this.rightsFlag == '01') {
          var reg = /((^[0-9]\d*)|^0)(\.\d{0,2}){0,1}$/;
        }
        if (!reg.test(item.marketPrice)) {
          on = false;
          this.$alert('请输入合理的标准价格', '标准价格修改提醒', {
            confirmButtonText: '确定',
            callback: action => {
              item.marketPrice = item.originalmarketPrice;
            }
          });
        }
        if (item.marketPrice == 0 && this.rightsFlag != '01') {
          on = false;
          this.$alert('请输入合理的标准价格', '标准价格修改提醒', {
            confirmButtonText: '确定',
            callback: action => {
              item.marketPrice = item.originalmarketPrice;
            }
          });
        }
        // else if(parseFloat(item.marketPrice) <= parseFloat(item.sellPrice)){
        //     on = false;
        //     this.$alert('为保持良好用户体验，注意销售价格低于划线价', '划线价格修改提醒', {
        //         confirmButtonText: '确定',
        //         callback: action => {
        //             item.marketPrice = item.originalmarketPrice;
        //         }
        //     });
        // }
        if (type == 'submit') {
          return on;
        }
        this.$forceUpdate()
      },
      handleDragStart(e, item) {
        this.dragging = item;
        console.log(this.dragging)
      },
      handleDragEnd(e, item) {
        this.dragging = null
      },
      //首先把div变成可以放置的元素，即重写dragenter/dragover
      handleDragOver(e) {
        e.dataTransfer.dropEffect = 'move'// e.dataTransfer.dropEffect="move";//在dragenter中针对放置目标来设置!
      },
      handleDragEnter(e, item) {
        e.dataTransfer.effectAllowed = "move";//为需要移动的元素设置dragstart事件
        if (item === this.dragging) {
          return
        }
        const newItems = [...this.goodsObj.imgs];
        const src = newItems.indexOf(this.dragging);
        const dst = newItems.indexOf(item);
        newItems.splice(dst, 0, ...newItems.splice(src, 1));
        this.goodsObj.imgs = newItems;
      },
      delectImg(index, item) {
        this.goodsObj.imgs.splice(index, 1);
        console.log(this.goodsObj.imgs);
        // console.log(item)
        // item.imgurl = '';
        this.$forceUpdate()
      },
      getIndex(index) {
        this.uploadIndex = index;
        console.log(this.uploadIndex)
      },
      beforeAvatarUpload(file) {
        var num = 0;
        for (var i = 0; i < this.goodsObj.imgs.length; i++) {
          if (this.goodsObj.imgs[i].imgUrl) {
            num++
          }
        }
        if ((num >= 4 && this.uploadIndex === '')) {
          this.$message.warning('上传数最多4张');
          return false
        } else {
          Store.commit("setIsLoading", true);
          const isLt2M = file.size / 1024 / 1024 < 2;
          var index = file.name.indexOf('.');
          // const isExcel = file.name.substring(index+1) === 'xlsx';
          // const isExcel1 = file.name.substring(index+1) === 'xls';
          // if (!isExcel && !isExcel1) {
          //     this.$message.error('请上传正确的excel文件!');
          // }
          if (!isLt2M) {
            Store.commit("setIsLoading", false);
            this.$message.error('上传文件大小不能超过2M!');
          }
          return isLt2M;
        }
      },
      errphoto(err, file, fileList) {
      },
      handleAvatarSuccess(res, file) {
        Store.commit("setIsLoading", false);
        if (res.data) {
          if (this.uploadIndex === '') {
            var obj = {
              id: '',
              imgUrl: res.data,
              sort: ''
            };
            this.goodsObj.imgs.push(obj);
            console.log(this.goodsObj.imgs)
          } else {
            for (var i = 0; i < this.goodsObj.imgs.length; i++) {
              if (this.uploadIndex == i) {
                this.goodsObj.imgs[i].imgUrl = res.data;
              }
            }
          }
          console.log(res.data)
          // this.totalPerson = this.tableData.length;
          // if(this.totalPerson == 0){
          //     this.$message.error('您上传的文件为空，请重新上传');
          // }else{
          //     this.totalpremium = (this.tableData.length)*this.premium;
          // }
        } else {
          this.$message.error(res.message);
        }
      },
      handleChange(file, fileList) {
      },
    },

  }
</script>

