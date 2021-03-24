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
          padding: 0 20px 20px;

          .tableTitle {
            border-bottom: 1px solid #ececec;
            margin: 0 20px 10px 20px;
            padding-bottom: 10px;
          }

          .bacButton {
            margin-bottom: 15px;
          }

          .searchContent {
            flex-wrap: wrap;
            position: relative;
            margin-top: 20px;

            .searchBox {
              width: 100%;
              margin-right: 30px;
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
                width: 86px;
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
            width: 300px;
            border: 1px solid #ececec;
            margin: 20px 0 20px 20px;

            .previewTitle {
              text-align: center;
              height: 40px;
              line-height: 40px;
              background: #ececec;
            }

            .scrollContent {
              width: 300px;
              height: 470px;
              overflow-y: auto;
              flex-wrap: wrap;
              /*overflow-x: hidden;*/
            }

            .contentTitle {
              margin: 10px 16px;
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

          .yulanbox {
            width: 450px;
            margin-right: 10px;

            .lableBox {
              margin-bottom: 15px;
              margin-left: 15px;

              .inputBox {
                text-indent: 10px;
                width: 240px;
                height: 30px;
                border: solid 1px #e5e5e5;
                line-height: 30px;
              }

              .websiteinput {
                width: 240px;
                height: 30px;
                line-height: 30px;
                text-indent: 10px;
                border: solid 1px #e5e5e5;
              }
            }
          }

          .tableScrollBox {
            height: 300px;
            overflow-y: scroll;
          }

          .marginauto {
            margin: 20px auto;
          }

          .table {
            font-size: 12px;
            border: 1px solid #f6f6f6;
            width: 100%;

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
                padding-left: 10px
              }

              td {
                text-align: center;
                padding: 8px 0;

                .imgurl {
                  width: 57px;
                  height: 60px;
                  max-width: 57px;
                  max-height: 60px;
                  margin-right: 10px;
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
                min-width: 0px;
                max-width: 240px;
                text-align: left;
                padding-left: 10px
              }

              td:nth-of-type(2) {
                min-width: 180px;
                max-width: 240px;
                text-align: left;
                padding-left: 10px
              }

              input {
                width: 100%;
              }

              td:nth-of-type(3) {
                text-align: center;
                min-width: 50px;
                max-width: 50px;

                .imgicon {
                  display: inline-block;
                  vertical-align: middle;
                  height: 20px;
                  width: 20px;
                  padding-right: 10px;
                }
              }

              td:nth-of-type(4) {
                padding-right: 10px;
              }

            }
          }

          .imgUrlBox {
            flex-wrap: wrap;
            border: 1px solid #d5d5d5;
            padding: 25px 25px 0;
            flex: 1;
            margin-right: 25px;

            .marginauto {
              margin: 20px auto;
            }

            .goodsbox {
              border-bottom: 8px solid #f5f5f5;
            }

            .goodsbox:nth-last-child(1) {
              border-bottom: none;
            }

            .lableBox {
              margin-bottom: 15px;

              .inputBox {
                text-indent: 10px;
                width: 240px;
                height: 30px;
                border: solid 1px #e5e5e5;
                line-height: 30px;
              }

              .websiteinput {
                width: 240px;
                height: 30px;
                line-height: 30px;
                text-indent: 10px;
                border: solid 1px #e5e5e5;
              }
            }

            .addnavigation {
              margin: 20px auto 0;
            }

            .imgFile {
              width: 96px;
              height: 100px;
              background-color: #f9f9f9;
              border-radius: 4px;
              position: relative;
              margin: 0px 10px 0px 0;

              .deleteIcon {
                position: absolute;
                right: -6px;
                top: -6px;
                color: #929292;
                z-index: 100;
              }

              .applicaninfoone {
                width: 96px;
                height: 100px;
                position: relative;

                .bannerImg {
                  width: 96px;
                  height: 100px;
                  position: absolute;
                }

                .imgBox {
                  display: inline-block;
                  width: 96px;
                  height: 100px;

                  .uploadtext {
                    color: #979797;
                    position: relative;
                    width: 96px;
                    height: 100px;
                    margin-top: 26px;

                    .textwarm {
                      line-height: 20px;

                      .uploadIcon {
                        font-size: 20px;
                        display: inline-block;
                        vertical-align: middle;
                        color: #56ae97;
                      }
                    }
                  }
                }
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
      width: 420px;
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

      input {
        width: 100%;
        border: 1px solid #999999;
        border-radius: 8px;
      }

      .messageContent {
        position: relative;
        padding: 30px;
        color: #606266;
        font-size: 14px;
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

  .dialog::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 0;
    vertical-align: middle;
  }

  .marginTop30 {
    margin-top: 30px;
  }

  .marginTop10 {
    margin-top: 10px;
  }

  .marginbottom {
    margin-bottom: 8px;
  }

  .alignCenter {
    align-items: center;
  }

  /deep/ .el-date-editor .el-range-input {
    font-size: 12px;
  }
</style>
<template>
  <div class="general">
    <KlTop></KlTop>
    <div class="salecustomercontent contaner">
      <Aside></Aside>
      <div class="content">
        <div class="contanternews">
          <div class="dataGeneral bannerTable">
            <div class="tableTitle colorblack font16">活动h5</div>
            <div class="flex contentFlex">
              <div class="yulanbox">
                <div class="lableBox">
                  <span class="colorGrey font12 marginright10">活动名称</span>
                  <input type="text" class="colorblack font12 inputBox" v-model="title" placeholder="请输入活动名称"/>
                </div>
                <div class="lableBox flex alignCenter">
                  <span class="colorGrey font12 marginright10" style="width: 54px">活动时间</span>
                  <el-date-picker
                    @change="enddateChange"
                    v-model="insuranceDate"
                    type="datetimerange"
                    unlink-panels
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                  >
                  </el-date-picker>
                </div>
                <div class="lableBox flex alignCenter">
                  <span class="searchLable searchName colorGrey font12">限购限制</span>
                  <div class="radioBox marginLeft10">
                    <div class="marginbottom flex alignCenter">
                      <i class="iconfont iconxuanzhong color2087 font20 cursor cursor" v-if="isLimitSale"></i>
                      <i class="iconfont iconxuanze  font20 cursor" v-if="!isLimitSale"
                         @click="isLimitSale = true"></i>
                      <span class="typeText colorblack font12 marginright10">每人每种商品限兑<input type="text"
                                                                                            class="inputBox"
                                                                                            style="width: 60px;"
                                                                                            v-model="maxSaleNums"/>件</span>
                      <i class="iconfont iconxuanzhong color2087 font20 cursor marginLeft10" v-if="!isLimitSale"></i>
                      <i class="iconfont iconxuanze  font20 cursor marginLeft10" v-if="isLimitSale"
                         @click="isLimitSale = false"></i>
                      <span class="typeText colorblack font12">不限制</span>
                    </div>

                  </div>
                </div>
                <div class="lableBox"><span class="colorblack font14">页面图片广告展示顺序</span></div>

                <table v-if="tableData.length != 0" class="table">
                  <tr v-for="(item,index) in tableData" :key="item.id">
                    <td>
                      <img v-if="item.firstImgUrl" :src="item.firstImgUrl" @click="showBig(item.firstImgUrl)"
                           class="imgurl cursor"/>
                      <img v-if="item.secondImgUrl" :src="item.secondImgUrl" @click="showBig(item.secondImgUrl)"
                           class="imgurl cursor"/>
                      <img v-if="item.thirdImgUrl" :src="item.thirdImgUrl" @click="showBig(item.thirdImgUrl)"
                           class="imgurl cursor"/>
                    </td>
                    <td style="min-width: 0">
                      <i class="cursor iconfont iconshangsheng fontIcongreen" v-if="index!=0"
                         @click='upSort(index,item)'></i>
                      <i class="iconfont iconshangsheng fontIcongrey" v-if="index==0"></i>
                      <i class='cursor iconfont fontIcongreen iconjiang' @click='downSort(index,item)'
                         v-if="index!=(tableData.length-1)"></i>
                      <i class='iconfont fontIcongrey iconjiang' v-if="index==(tableData.length-1)"></i>
                    </td>
                    <td>
                      <span class="color2087 font12 cursor" @click="editItem(item, index)">编辑</span>
                    </td>
                    <td>
                      <span class="color2087 font12 cursor" @click="deleteItem(index)">删除</span>

                    </td>
                  </tr>
                </table>
                <div v-if="tableData.length == 0" class="noData">
                  <img class="nodataImg" src="../../assets/images/nodatalist.png"/>
                  <p>暂无数据~</p>
                </div>
                <div class="bacButton  marginauto" @click="addactivityh5()">保存</div>
              </div>
              <div class="imgUrlBox">
                <div class="lableBox">
                  <span class="colorGrey font12 marginright10">图文广告形式</span>
                  <i class="iconfont iconxuanzhong color2087 font20 cursor cursor" v-if="showType == 1"></i>
                  <i class="iconfont iconxuanze  font20 cursor" v-if="showType != 1" @click="showType = 1"></i>
                  <span class="typeText colorblack font12 marginright10">一行一图</span>
                  <i class="iconfont iconxuanzhong color2087 font20 cursor marginLeft10" v-if="showType == 2"></i>
                  <i class="iconfont iconxuanze  font20 cursor marginLeft10" v-if="showType != 2"
                     @click="showType = 2"></i>
                  <span class="typeText colorblack font12">一行二图</span>
                  <i class="iconfont iconxuanzhong color2087 font20 cursor marginLeft10" v-if="showType == 3"></i>
                  <i class="iconfont iconxuanze  font20 cursor marginLeft10" v-if="showType != 3"
                     @click="showType = 3"></i>
                  <span class="typeText colorblack font12">一行三图</span>
                </div>
                <div class="goodsbox" v-for="(item,index) in goodsArr">
                  <div class="lableBox flex " style="padding-top: 10px;">
                    <span class="colorGrey font12 marginright10">添加图片</span>
                    <div class="imgFile flex cursor">
                      <i class="iconfont iconcuowu cursor deleteIcon" v-if="item.imgurl"
                         @click="delectImg(index,item)"></i>
                      <div class="applicaninfoone" @click="getIndex(index)">
                        <img class="bannerImg" v-if="item.imgurl" :src="item.imgurl"/>
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
                          accept>
                          <div class="uploadtext">
                            <div class="textwarm" v-if="!item.imgurl">
                              <i class="iconfont iconiconjia uploadIcon"></i>
                              <div class="">上传照片</div>
                            </div>
                          </div>
                        </el-upload>
                      </div>
                    </div>
                    <span class="colorGrey font12" style="margin-top: 80px;" v-if="showType == 1">宽750像素</span>
                    <span class="colorGrey font12" style="margin-top: 80px;" v-if="showType == 2">宽375像素</span>
                    <span class="colorGrey font12" style="margin-top: 80px;" v-if="showType == 3">宽250像素</span>
                  </div>
                  <div class="marginTop30 flex">
                    <span class="colorGrey font12 marginright10">点击图片跳转方式</span>
                    <i class="iconfont iconxuanzhong color2087 font20 cursor marginLeft10"
                       v-if="item.blockType == 3"></i>
                    <i class="iconfont iconxuanze  font20 cursor marginLeft10" v-if="item.blockType != 3"
                       @click.stop="jumpEmpt(index)"></i>
                    <span @click.stop="jumpEmpt(index)" class="typeText colorGrey font12 marginright10">不跳转</span>

                    <i class="iconfont iconxuanzhong color2087 font20 cursor cursor" v-if="item.blockType == 1"></i>
                    <i class="iconfont iconxuanze  font20 cursor" v-if="item.blockType != 1"
                       @click.stop="jumpGoods(index)"></i>
                    <span class="colorGrey font12 marginright10" @click.stop="jumpGoods(index)">跳转商品</span>

                    <i class="iconfont iconxuanzhong color2087 font20 cursor marginLeft10"
                       v-if="item.blockType == 2"></i>
                    <i class="iconfont iconxuanze  font20 cursor marginLeft10" v-if="item.blockType != 2"
                       @click.stop="jumpUrl(index)"></i>
                    <span @click.stop="jumpUrl(index)" class="typeText colorGrey font12 marginright10">跳转链接</span>


                  </div>
                  <div class="bacButton cursor marginTop10" v-if="item.blockType == 1 "
                       @click="getRecList(index,item.goodsdata)">跳转商品
                  </div>
                  <div class="bacButton cursor marginTop10" v-if="item.blockType == 2 "
                       @click="getJumpurl(index)">跳转链接
                  </div>
                  <div class="bacButton cursor marginTop10" v-if="item.blockType == 3 " style="background: white">

                  </div>
                  <table v-if="(item.goodsdata && item.goodsdata.name) || item.paramsUrl" class="table">
                    <tr>
                      <th v-for="ite in sortDatas" :key="ite.name">
                        {{ite.name}}
                      </th>
                    </tr>
                    <tr>
                      <td>
                        <div class="flex">
                          <img class="productImg" :src="item.goodsdata&&item.goodsdata.imgUrl">
                          <div class="productBox">
                            <p class="colorblack font12 productText">{{item.goodsdata&&item.goodsdata.name}}</p>
                            <p class="colore6 font12 productText">￥{{item.goodsdata&&item.goodsdata.price}}</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <input type="text" v-model="item.paramsUrl" readonly>
                      </td>
                      <td>
                        <span class="color2087 font12 cursor" @click="delectCommodity(index,item)">删除</span>
                      </td>

                    </tr>
                  </table>
                </div>
                <div class="bacButton  marginauto" @click="addtableData()" v-if="!editStatus">添加图文广告</div>
                <div class="bacButton  marginauto" @click="addtableData()" v-if="editStatus">保存图文广告</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="dialog">
        <div class="messge">
          <div class="messageContent">
            <div class="messagemessage">
              <input class="colorblack font12 " v-model="paramsUrl" type="text" placeholder="请输入链接地址">
            </div>
          </div>
          <div class="messagebtns">
            <div class="button borderButton copyButton" @click="closeDiolog()">
              取消
            </div>
            <div class="button bacButton" @click="centerDiolog()">
              <span> 确认</span>
            </div>
          </div>
        </div>
      </div>
      <Addcommodity v-if="showSpecs" @selectGuige='getgoodsdata' :source="source" :goodsdataq="goodsData"
                    @clickbanner="getbackData"></Addcommodity>
    </div>
  </div>
</template>

<script>
  import Util from "@/common/util";
  import Aside from '@/components/aside'
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
      Addcommodity
    },
    data() {
      return {
        paramsUrl: '',//跳转链接
        goodsArr: [{goodsdata: null, imgurl: '', showType: 1, blockType: 3, paramsUrl: ''}],
        onearr: [{goodsdata: null, imgurl: '', showType: 1, blockType: 3, paramsUrl: ''}],
        twoarr: [{goodsdata: null, imgurl: '', showType: 2, blockType: 3, paramsUrl: ''}, {
          goodsdata: null,
          imgurl: '',
          showType: 2,
          blockType: 3,
          paramsUrl: ''
        }],
        threearr: [{goodsdata: null, imgurl: '', showType: 3, blockType: 3, paramsUrl: ''}, {
          goodsdata: null,
          imgurl: '',
          showType: 3, blockType: 3, paramsUrl: ''
        }, {goodsdata: null, imgurl: '', showType: 3, blockType: 3, paramsUrl: ''}],
        index: 0,
        secondImgUrl: "",
        showType: 1,
        tableData: [],
        isLimitSale: true,
        maxSaleNums: '',
        source: 'addactiveh5',
        lotteryTime: '',
        isConsumePoints: false,
        lotteryNums: '',
        limitPeople: true,
        maxRegDays: '',
        minRegDays: '',
        isuserRegDaysLimit: 1,
        userRegDaysLimit: null,
        minParticipantsNums: '',
        goodsid: '',
        showSpecs: false,
        shelvesType: 1,
        points: '',
        percent: '90%',
        activeIndex: '1',
        sortDatas: [
          {orderType: '', name: '商品', showBlue: false, orderField: ''},
          {orderType: '', name: '链接', showBlue: false, orderField: ''},
          {orderType: '', name: '操作', showBlue: false, orderField: ''}
        ],
        insuranceDate: [],
        endDate: "",
        name: "",
        startDate: "",
        status: '',
        type: '',
        total: 0,
        size: 10,
        page: 1,
        goodsData: null,
        noData: false,
        userInfo: '',
        actionendtime: '',
        actionstarttime: '',
        actionid: '',
        upFileAction: "",
        headers: {},
        title: '',
        editStatus: false,
        editStatusIndex: '',
        editIndex: '',
      };
    },
    created() {
      this.userInfo = JSON.parse(localStorage.getItem('user'));
      var tokenVal = Util.localStorageUtil.get("access_token");
      this.headers = {token: tokenVal, shopId: 1};

    },

    mounted() {
      this.upFileAction = Global.requestUrl + "/kl-store/admin/upload/file";
      if (this.$route.query) {
        this.goodsid = this.$route.query.id;
        if (this.goodsid) {
          this.getcommodityData();//获取商品列表
        }
      }
    },
    watch: {
      showType() {
        if (this.showType == 1) {
          this.goodsArr = this.onearr;
        } else if (this.showType == 2) {
          this.goodsArr = this.twoarr;
        } else if (this.showType == 3) {
          this.goodsArr = this.threearr;
        }
      }
    },
    methods: {
      editItem(obj, index) {
        this.editStatus = true
        this.editStatusIndex = index
        this.editIndex = index
        this.showType = obj.showType
        if (this.showType == 1) {
          this.onearr[0].blockType = obj.firstBlockType
          this.onearr[0].imgurl = obj.firstImgUrl
          this.onearr[0].paramsUrl = obj.firstLinkUrl
          if (obj.firstGoodsName) {
            this.onearr[0].goodsdata = {}
            this.onearr[0].goodsdata.imgUrl = obj.firstGoodsImgUrl
            this.onearr[0].goodsdata.price = obj.firstGoodsPrice
            this.onearr[0].goodsdata.name = obj.firstGoodsName
            this.onearr[0].goodsdata.id = obj.firstGoodsId
          } else {
            this.onearr[0].goodsdata = null
          }
          this.goodsArr = this.onearr;
        } else if (this.showType == 2) {
          this.twoarr[0].blockType = obj.firstBlockType
          this.twoarr[0].imgurl = obj.firstImgUrl
          this.twoarr[0].paramsUrl = obj.firstLinkUrl
          if (obj.firstGoodsName) {
            this.twoarr[0].goodsdata = {}
            this.twoarr[0].goodsdata.imgUrl = obj.firstGoodsImgUrl
            this.twoarr[0].goodsdata.price = obj.firstGoodsPrice
            this.twoarr[0].goodsdata.name = obj.firstGoodsName
            this.twoarr[0].goodsdata.id = obj.firstGoodsId
          } else {
            this.onearr[0].goodsdata = null
          }
          this.twoarr[1].blockType = obj.secondBlockType
          this.twoarr[1].imgurl = obj.secondImgUrl
          this.twoarr[1].paramsUrl = obj.secondLinkUrl
          if (obj.secondGoodsName) {
            this.twoarr[1].goodsdata = {}
            this.twoarr[1].goodsdata.imgUrl = obj.secondGoodsImgUrl
            this.twoarr[1].goodsdata.price = obj.secondGoodsPrice
            this.twoarr[1].goodsdata.name = obj.secondGoodsName
            this.twoarr[1].goodsdata.id = obj.secondGoodsId
          } else {
            this.twoarr[1].goodsdata = null
          }
          this.goodsArr = this.twoarr;
        } else if (this.showType == 3) {
          this.threearr[0].blockType = obj.firstBlockType
          this.threearr[0].imgurl = obj.firstImgUrl
          this.threearr[0].paramsUrl = obj.firstLinkUrl
          if (obj.firstGoodsName) {
            this.threearr[0].goodsdata = {}
            this.threearr[0].goodsdata.imgUrl = obj.firstGoodsImgUrl
            this.threearr[0].goodsdata.price = obj.firstGoodsPrice
            this.threearr[0].goodsdata.name = obj.firstGoodsName
            this.threearr[0].goodsdata.id = obj.firstGoodsId
          } else {
            this.threearr[0].goodsdata = null
          }
          this.threearr[1].blockType = obj.secondBlockType
          this.threearr[1].imgurl = obj.secondImgUrl
          this.threearr[1].paramsUrl = obj.secondLinkUrl
          if (obj.secondGoodsName) {
            this.threearr[1].goodsdata = {}
            this.threearr[1].goodsdata.imgUrl = obj.secondGoodsImgUrl
            this.threearr[1].goodsdata.price = obj.secondGoodsPrice
            this.threearr[1].goodsdata.name = obj.secondGoodsName
            this.threearr[1].goodsdata.id = obj.secondGoodsId
          } else {
            this.threearr[1].goodsdata = null
          }
          this.threearr[2].blockType = obj.thirdBlockType
          this.threearr[2].imgurl = obj.thirdImgUrl
          this.threearr[2].paramsUrl = obj.thirdLinkUrl
          if (obj.thirdGoodsName) {
            this.threearr[2].goodsdata = {}
            this.threearr[2].goodsdata.imgUrl = obj.thirdGoodsImgUrl
            this.threearr[2].goodsdata.price = obj.thirdGoodsPrice
            this.threearr[2].goodsdata.name = obj.thirdGoodsName
            this.threearr[2].goodsdata.id = obj.thirdGoodsId
          } else {
            this.threearr[2].goodsdata = null
          }

          this.goodsArr = this.threearr;
        }
      },
      jumpGoods(index) {
        this.goodsArr[index].blockType = 1
        this.goodsArr[index].paramsUrl = ''
      },
      jumpUrl(index) {
        this.goodsArr[index].blockType = 2
        this.goodsArr[index].goodsdata = null
      },
      jumpEmpt(index) {
        this.goodsArr[index].blockType = 3
        this.goodsArr[index].goodsdata = null
        this.goodsArr[index].paramsUrl = ''
      },
      deleteItem(index) {
        this.tableData.splice(index, 1)
      },

      downSort(index, item) {//降序
        this.tableData[index] = this.tableData[index + 1];
        this.tableData[index + 1] = item;
        this.$forceUpdate()
      },
      upSort(index, item) {//升序
        this.tableData[index] = this.tableData[index - 1];
        this.tableData[index - 1] = item;
        this.$forceUpdate()
      },

      addactivityh5() {
        if (!this.title) {
          this.$message.error('请输入活动名称')
          return;
        }
        let reg = /^[1-9]\d*$/;
        let maxSaleNums = '';
        if (this.isLimitSale) {
          if (!reg.test(this.maxSaleNums)) {
            this.$message.warning('请输入最大购买数');
            return;
          } else {
            maxSaleNums = this.maxSaleNums;
          }
        } else {
          maxSaleNums = ''
        }
        if (this.title.length < 2 || this.title.lenght > 20) {
          this.$message.error('请输入不小于2个字不大于20个字的活动名称')
          return;
        }
        if (this.tableData.length == 0) {
          this.$message.error('请添加图文广告')
          return;
        }
        var showEdits = [];
        for (var i = 0; i < this.tableData.length; i++) {
          var obj = {};
          if (this.tableData[i]) {
            obj = this.tableData[i];
            obj.sort = i;
            showEdits.push(obj)
          }
        }
        var endDate = Date.parse(new Date(this.endDate.replace(/-/g, "/")));
        var startDate = Date.parse(new Date(this.startDate.replace(/-/g, "/")));
        if (this.goodsid) {
          Service.activityh5().editoractivity({
            "showEdits": showEdits,
            name: this.title,
            maxSaleNums: this.maxSaleNums,
            isLimitSale: this.isLimitSale,
            endTime: endDate,
            startTime: startDate,
          }, this.goodsid).then(response => {
            Store.commit("setIsLoading", false);
            if (response.errorCode == 0) {
              this.$message.success('编辑成功')

              this.$router.push({"name": 'activeh5list'})
            } else {
              this.$message.error(response.message);
              if (response.errorCode == 5001) {
                this.$router.push({"path": '/'})
              }
            }
          }, err => {
          });
        } else {
          Service.activityh5().addactivityh5({
            "showEdits": showEdits,
            name: this.title,
            maxSaleNums: this.maxSaleNums,
            isLimitSale: this.isLimitSale,
            endTime: endDate,
            startTime: startDate,
          }).then(response => {
            Store.commit("setIsLoading", false);
            if (response.errorCode == 0) {
              this.$message.success('添加成功')
              this.$router.push({"name": 'activeh5list'})
            } else {
              this.$message.error(response.message);
              if (response.errorCode == 5001) {
                this.$router.push({"path": '/'})
              }
            }
          }, err => {
          });
        }

      },

      addtableData() {
        var obj = {};
        if (this.showType == 1) {
          obj.showType = 1;
          obj.firstBlockType = this.goodsArr[0].blockType;
          obj.secondBlockType = 3
          obj.thirdBlockType = 3
          if (!this.goodsArr[0].imgurl) {
            this.$message.error('请上传图片')
            return;
          }
          if (obj.firstBlockType == 1 && !this.goodsArr[0].goodsdata) {
            this.$message.error('请绑定跳转商品')
            return;
          }
          if (obj.firstBlockType == 2 && !this.goodsArr[0].paramsUrl) {
            this.$message.error('请绑定跳转链接')
            return;
          }
          if (obj.firstBlockType == 1) {
            obj.firstGoodsId = this.goodsArr[0].goodsdata.id;
            obj.firstGoodsName = this.goodsArr[0].goodsdata.name;
            obj.firstGoodsImgUrl = this.goodsArr[0].goodsdata.imgUrl;
            obj.firstGoodsPrice = this.goodsArr[0].goodsdata.price;
            obj.firstLinkUrl = ''
          } else if (obj.firstBlockType == 2) {
            obj.firstLinkUrl = this.goodsArr[0].paramsUrl;
            obj.firstGoodsId = '';
            obj.firstGoodsName = '';
            obj.firstGoodsPrice = '';
            obj.firstGoodsImgUrl = '';
          } else {
            obj.firstLinkUrl = '';
            obj.firstGoodsId = '';
            obj.firstGoodsName = '';
            obj.firstGoodsImgUrl = '';
            obj.firstGoodsPrice = '';
          }
          obj.firstImgUrl = this.goodsArr[0].imgurl;
          this.onearr = [{goodsdata: null, imgurl: '', showType: 1, blockType: 3, paramsUrl: ''}];
          this.goodsArr = this.onearr;
        } else if (this.showType == 2) {
          obj.showType = 2;
          obj.firstBlockType = this.goodsArr[0].blockType;
          obj.secondBlockType = this.goodsArr[1].blockType;
          obj.thirdBlockType = 3
          if (!this.goodsArr[0].imgurl || !this.goodsArr[1].imgurl) {
            this.$message.error('请上传图片')
            return;
          }
          if (obj.firstBlockType == 1 && !this.goodsArr[0].goodsdata) {
            this.$message.error('请绑定跳转商品')
            return;
          }
          if (obj.firstBlockType == 2 && !this.goodsArr[0].paramsUrl) {
            this.$message.error('请绑定跳转链接')
            return;
          }
          if (obj.secondBlockType == 1 && !this.goodsArr[1].goodsdata) {
            this.$message.error('请绑定跳转商品')
            return;
          }
          if (obj.secondBlockType == 2 && !this.goodsArr[1].paramsUrl) {
            this.$message.error('请绑定跳转链接')
            return;
          }
          obj.firstImgUrl = this.goodsArr[0].imgurl;
          obj.secondImgUrl = this.goodsArr[1].imgurl;
          if (obj.firstBlockType == 1) {
            obj.firstGoodsId = this.goodsArr[0].goodsdata.id;
            obj.firstGoodsName = this.goodsArr[0].goodsdata.name;
            obj.firstGoodsImgUrl = this.goodsArr[0].goodsdata.imgUrl;
            obj.firstGoodsPrice = this.goodsArr[0].goodsdata.price;
            obj.firstLinkUrl = ''
          } else if (obj.firstBlockType == 2) {
            obj.firstLinkUrl = this.goodsArr[0].paramsUrl;
            obj.firstGoodsId = '';
            obj.firstGoodsName = '';
            obj.firstGoodsImgUrl = '';
            obj.firstGoodsPrice = '';
          } else {
            obj.firstLinkUrl = '';
            obj.firstGoodsId = '';
            obj.firstGoodsName = '';
            obj.firstGoodsImgUrl = '';
            obj.firstGoodsPrice = '';
          }
          if (obj.secondBlockType == 1) {
            obj.secondGoodsId = this.goodsArr[1].goodsdata.id;
            obj.secondGoodsName = this.goodsArr[1].goodsdata.name;
            obj.secondGoodsImgUrl = this.goodsArr[1].goodsdata.imgUrl;
            obj.secondGoodsPrice = this.goodsArr[1].goodsdata.price;
            obj.secondLinkUrl = '';
          } else if (obj.secondBlockType == 2) {
            obj.secondLinkUrl = this.goodsArr[1].paramsUrl;
            obj.secondGoodsId = '';
            obj.secondGoodsName = '';
            obj.secondGoodsImgUrl = '';
            obj.secondGoodsPrice = '';
          } else {
            obj.secondLinkUrl = '';
            obj.secondGoodsId = '';
            obj.secondGoodsName = '';
            obj.secondGoodsImgUrl = '';
            obj.secondGoodsPrice = '';
          }
          this.twoarr = [{goodsdata: null, imgurl: '', showType: 2, blockType: 3, paramsUrl: ''}, {
            goodsdata: null,
            imgurl: '',
            showType: 2,
            blockType: 1,
            paramsUrl: ''
          }];
          this.goodsArr = this.twoarr;
        } else if (this.showType == 3) {
          obj.showType = 3;
          obj.firstBlockType = this.goodsArr[0].blockType;
          obj.secondBlockType = this.goodsArr[1].blockType;
          obj.thirdBlockType = this.goodsArr[2].blockType
          if (!this.goodsArr[0].imgurl || !this.goodsArr[1].imgurl || !this.goodsArr[2].imgurl) {
            this.$message.error('请上传图片')
            return;
          }
          if (obj.firstBlockType == 1 && !this.goodsArr[0].goodsdata) {
            this.$message.error('请绑定跳转商品')
            return;
          }
          if (obj.firstBlockType == 2 && !this.goodsArr[0].paramsUrl) {
            this.$message.error('请绑定跳转链接')
            return;
          }
          if (obj.secondBlockType == 1 && !this.goodsArr[1].goodsdata) {
            this.$message.error('请绑定跳转商品')
            return;
          }
          if (obj.secondBlockType == 2 && !this.goodsArr[1].paramsUrl) {
            this.$message.error('请绑定跳转链接')
            return;
          }
          if (obj.thirdBlockType == 1 && !this.goodsArr[2].goodsdata) {
            this.$message.error('请绑定跳转商品')
            return;
          }
          if (obj.thirdBlockType == 2 && !this.goodsArr[2].paramsUrl) {
            this.$message.error('请绑定跳转链接')
            return;
          }
          obj.firstImgUrl = this.goodsArr[0].imgurl;
          obj.secondImgUrl = this.goodsArr[1].imgurl;
          obj.thirdImgUrl = this.goodsArr[2].imgurl;
          if (obj.firstBlockType == 1) {
            obj.firstGoodsId = this.goodsArr[0].goodsdata.id;
            obj.firstGoodsName = this.goodsArr[0].goodsdata.name;
            obj.firstGoodsImgUrl = this.goodsArr[0].goodsdata.imgUrl;
            obj.firstGoodsPrice = this.goodsArr[0].goodsdata.price;
            obj.firstLinkUrl = ''
          } else if (obj.firstBlockType == 2) {
            obj.firstLinkUrl = this.goodsArr[0].paramsUrl;
            obj.firstGoodsId = '';
            obj.firstGoodsName = '';
            obj.firstGoodsPrice = '';
            obj.firstGoodsImgUrl = '';
          } else {
            obj.firstLinkUrl = '';
            obj.firstGoodsId = '';
            obj.firstGoodsName = '';
            obj.firstGoodsPrice = '';
            obj.firstGoodsImgUrl = '';
          }
          if (obj.secondBlockType == 1) {
            obj.secondGoodsId = this.goodsArr[1].goodsdata.id;
            obj.secondGoodsName = this.goodsArr[1].goodsdata.name;
            obj.secondGoodsImgUrl = this.goodsArr[1].goodsdata.imgUrl;
            obj.secondGoodsPrice = this.goodsArr[1].goodsdata.price;
            obj.secondLinkUrl = '';
          } else if (obj.secondBlockType == 2) {
            obj.secondLinkUrl = this.goodsArr[1].paramsUrl;
            obj.secondGoodsId = '';
            obj.secondGoodsName = '';
            obj.secondGoodsImgUrl = '';
          } else {
            obj.secondLinkUrl = '';
            obj.secondGoodsId = '';
            obj.secondGoodsName = '';
            obj.secondGoodsImgUrl = '';
          }
          if (obj.thirdBlockType == 1) {
            obj.thirdGoodsId = this.goodsArr[2].goodsdata.id;
            obj.thirdGoodsName = this.goodsArr[2].goodsdata.name;
            obj.thirdGoodsImgUrl = this.goodsArr[2].goodsdata.imgUrl;
            obj.thirdGoodsPrice = this.goodsArr[2].goodsdata.price;
            obj.thirdLinkUrl = ''
          } else if (obj.thirdBlockType == 2) {
            obj.thirdLinkUrl = this.goodsArr[2].paramsUrl;
            obj.thirdGoodsId = '';
            obj.thirdGoodsName = '';
            obj.thirdGoodsImgUrl = '';
          } else {
            obj.thirdLinkUrl = '';
            obj.thirdGoodsId = '';
            obj.thirdGoodsName = '';
            obj.thirdGoodsImgUrl = '';
          }

          this.threearr = [{goodsdata: null, imgurl: '', showType: 3, blockType: 3, paramsUrl: ''}, {
            goodsdata: null,
            imgurl: '',
            showType: 3,
            blockType: 1, paramsUrl: ''
          }, {goodsdata: null, imgurl: '', showType: 3, blockType: 3, paramsUrl: ''}];
          this.goodsArr = this.threearr;
        }
        if (this.editStatus) {
          this.tableData[this.editIndex] = obj
        } else {
          this.tableData.push(obj)
        }
        this.editIndex = ''
        this.editStatus = false
      },
      getPercent(num, num1) {
        num = parseFloat(num);
        num1 = parseFloat(num1);
        var total = parseFloat(num + num1);
        if (isNaN(num) || isNaN(total)) {
          return "-";
        }
        return total <= 0 ? "0%" : (Math.round(num / total * 10000) / 100.00) + "%";
      },
      addActiveProduct() {
        this.name = this.name.replace(/^\s*|\s*$/g, "");
        if (!this.name) {
          this.$message.warning('请输入活动名称');
          return;
        }
        if (this.name.length < 2 || this.name.length > 30) {
          this.$message.warning('请输入短于2个字不超过30个字的活动名称');
          return;
        }
        if (!this.startDate || !this.endDate) {
          this.$message.warning('请选择生效时间');
          return;
        }
        if (this.name.length < 2 || this.name.length > 30) {
          this.$message.warning('请输入短于2个字不超过30个字的活动名称');
          return;
        }
        if (!this.startDate || !this.endDate) {
          this.$message.warning('请选择生效时间');
          return;
        }
        var endDate = Date.parse(new Date(this.endDate.replace(/-/g, "/")));
        var startDate = Date.parse(new Date(this.startDate.replace(/-/g, "/")));
        var status = '';
        if (startDate <= Date.parse(new Date()) && endDate > Date.parse(new Date())) {
          status = 2//进行中
        } else if (startDate > Date.parse(new Date())) {
          status = 1//未开始
        } else if (endDate <= Date.parse(new Date())) {
          status = 3//已结束
        }
        if (this.actionid) {
          if (this.goodsid) {
            if (this.actionid != this.goodsid) {
              if (status == 2) {
                this.$message.warning('已存在正在进行中的活动，请重新设置活动生效时间');
                return;
              } else if (status == 1) {
                if (this.actionendtime >= startDate) {
                  this.$message.warning('已存在正在进行中的活动，请重新设置活动生效的开始时间');
                  return;
                }
              }
            }
          } else {
            if (status == 2) {
              this.$message.warning('已存在正在进行中的活动，请重新设置活动生效时间');
              return;
            } else if (status == 1) {
              if (this.actionendtime >= startDate) {
                this.$message.warning('已存在正在进行中的活动，请重新设置活动生效的开始时间');
                return;
              }
            }
          }
        }
        var maxSaleNums = '';
        var reg = /^[1-9]\d*$/;
        if (this.isLimitSale) {
          if (!reg.test(this.maxSaleNums)) {
            this.$message.warning('请输入最大购买数');
            return;
          } else {
            maxSaleNums = this.maxSaleNums;
          }
        } else {
          maxSaleNums = ''
        }
        var goodsIds = '';
        if (this.goodsData.length != 0) {
          // this.$message.warning('请添加活动商品');
          // return;
          for (var i = 0; i < this.goodsData.length; i++) {
            goodsIds += this.goodsData[i].id + ',';
          }
          goodsIds = goodsIds.substring(0, goodsIds.length - 1);
        }
        if (this.goodsid) {
          Service.flashSale().editoractivity({
            name: this.name,
            "endTime": endDate,
            "goodsIds": goodsIds,
            "startTime": startDate,
            isLimitSale: this.isLimitSale,
            maxSaleNums: maxSaleNums,
            status: status
          }, this.goodsid).then(response => {
            if (response.errorCode == 0) {
              this.$message.success('添加成功')
              this.$router.push({name: 'limitactiveList'})
            } else {
              this.$message.error(response.message)
            }
          }, err => {
          });
        } else {
          Service.flashSale().addactivity({
            name: this.name,
            "endTime": endDate,
            "goodsIds": goodsIds,
            "startTime": startDate,
            isLimitSale: this.isLimitSale,
            maxSaleNums: maxSaleNums,
            status: status
          }).then(response => {
            if (response.errorCode == 0) {
              this.$message.success('添加成功');
              this.$router.push({name: 'limitactiveList'})
            } else {
              this.$message.error(response.message)
            }
          }, err => {
          });
        }

      },
      getRecList(index, goodsdata) {
        if (goodsdata) {
          this.goodsData = goodsdata;
          console.log('goodsdata', goodsdata)
        } else {
          this.goodsData = null;
        }
        this.index = index;
        this.showSpecs = true;
      },
      getJumpurl(index) {
        this.index = index;
        $(".dialog").css({"display": 'block'})
      },
      closeDiolog() {
        this.paramsUrl = '';
        $(".dialog").css({"display": 'none'})
      },
      centerDiolog() {
        let i = this.index
        this.goodsArr[i].paramsUrl = this.paramsUrl
        this.closeDiolog()
      },
      getgoodsdata(obj) {
        if (obj) {
          if (obj.name.length > 15) {
            obj.name = obj.name.substring(0, 15) + '...'
          }
        }
        var index = this.index;
        this.goodsArr[index].goodsdata = obj;
        this.resetArr(obj);
      },
      resetArr(obj) {
        var index = this.index;
        if (this.showType == 1) {
          this.onearr[index].goodsdata = obj;
        } else if (this.showType == 2) {
          this.twoarr[index].goodsdata = obj;
        } else if (this.showType == 3) {
          this.threearr[index].goodsdata = obj;
        }
      },
      getbackData(str) {
        if (str == 'sure') {
          this.showSpecs = false;
        }
        if (str == 'cancle') {
          this.showSpecs = false;
        }
      },
      delectCommodity(index, item) {
        this.$confirm('商品删除请谨慎操作，确定删除?', '', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          item.goodsdata = null;
          item.paramsUrl = null
          this.$forceUpdate()
        }).catch(() => {

        });
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
          this.lotteryTime = this.endDate;
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
        getSeconds = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds();
        var newTime = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + getHours + ':' + getMinutes + ':' + getSeconds;
        return newTime
      },

      getcommodityData() {
        Service.activityh5().getactivityh5Detail({}, this.goodsid).then(response => {
          if (response.errorCode == 0) {
            this.title = response.data.name;
            this.tableData = response.data.shows;
            if (response.data.isLimitSale) {
              this.isLimitSale = response.data.isLimitSale;
              this.maxSaleNums = response.data.maxSaleNums;
            } else {
              this.isLimitPeople = false
              this.maxSaleNums = response.data.maxSaleNums;
            }
            this.name = response.data.name;
            this.startDate = this.timetrans(response.data.startTime);
            this.endDate = this.timetrans(response.data.endTime);
            this.insuranceDate.push(new Date(response.data.startTime));
            this.insuranceDate.push(new Date(response.data.endTime))
            if (this.tableData.length != 0) {
              this.noData = true;
            } else {
              this.noData = false;
            }
          } else {
            this.$message.error(response.message)
          }
        }, err => {
        });

      },
      getIndex(index) {
        this.index = index;
      },
      delectImg(index, item) {
        item.imgurl = '';
        this.$forceUpdate();
        this.restarrUrl(index, "")

      },
      restarrUrl(index, img) {
        if (this.showType == 1) {
          this.onearr[index].imgurl = img;
        } else if (this.showType == 2) {
          this.twoarr[index].imgurl = img;
        } else if (this.showType == 3) {
          this.threearr[index].imgurl = img;
        }
      },
      beforeAvatarUpload(file) {
        Store.commit("setIsLoading", true);
        const isLt2M = file.size / 1024 / 1024 < 2;
        var index = file.name.indexOf(".");
        // const isExcel = file.name.substring(index+1) === 'xlsx';
        // const isExcel1 = file.name.substring(index+1) === 'xls';
        // if (!isExcel && !isExcel1) {
        //     this.$message.error('请上传正确的excel文件!');
        // }
        if (!isLt2M) {
          Store.commit("setIsLoading", false);
          this.$message.error("上传文件大小不能超过2M!");
        }
        return isLt2M;
      },
      errphoto(err, file, fileList) {
      },
      handleAvatarSuccess(res, file) {
        var index = this.index;
        Store.commit("setIsLoading", false);
        if (res.data) {
          this.goodsArr[index].imgurl = res.data;
          this.restarrUrl(index, res.data);
        } else {
          this.$message.error(res.message);
        }
      },
      handleChange(file, fileList) {
      },
    },

  }
</script>

