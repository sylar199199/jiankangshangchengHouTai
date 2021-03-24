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

            .previewContent {
              .contentTitle {
                margin: 10px 16px;
              }

              .productContent {
                width: 100%;
                margin-bottom: 10px;
                border-radius: 5px;

                .productLeft {
                  text-align: center;

                  .productImg {
                    height: 240px;
                    width: 300px;
                    border-radius: 5px 5px 0 0;
                  }
                }

                .productRight {
                  background: url('../../assets/images/qgback.png') no-repeat center center;
                  width: 300px;
                  height: 68px;
                  background-size: 100% 100%;

                  .textLinethrough {
                    text-decoration: line-through;
                  }

                  .priceText {
                    color: #f24e43;
                    font-size: 20px;
                    font-weight: 600;
                  }

                  .gouqiicon {
                    height: 12px;
                    width: 8px;
                    display: inline-block;
                    vertical-align: middle;
                  }

                  .flexBetween {
                    margin: 6px;
                    line-height: 28px;

                    .borderSmallButton {
                      width: 55px;
                      height: 35px;
                      line-height: 35px;
                      text-align: center;
                      border-radius: 20px;
                      margin-top: 14px;
                      color: #fff;
                      background: #ea6c6b;
                    }
                  }

                  .productName {
                    line-height: 16px;
                    margin: 16px 6px 8px;
                  }

                  .percent {
                    text-align: right;
                    border-radius: 10px;
                    width: 130px;
                    height: 15px;
                    line-height: 15px;
                    background: #efefef;
                    margin: 6px;

                    .percentNumber {
                      background: -webkit-linear-gradient(0deg, #f6e1b0, #f3bacc);
                      border-radius: 10px 0 0 10px;
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
                padding-left: 10px
              }

              th:nth-child(4) {
                text-align: center;
                padding-right: 10px
              }

              td {
                text-align: center;
                padding: 8px 0;

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
                min-width: 180px;
                max-width: 300px;
                text-align: left;
                padding-left: 10px
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
                padding-right: 10px;
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
</style>
<template>
  <div class="general">
    <KlTop></KlTop>
    <div class="salecustomercontent contaner">
      <Aside></Aside>
      <div class="content">
        <div class="contanternews">
          <!--<div class="dataGeneral backWhite contentHead">-->
          <!--<div class="dataGenetalTitle">-->
          <!--<span class="colorblack font14 fontWeight marginright10">限时兑换 / 新建限时兑换</span>-->
          <!--</div>-->
          <!--</div>-->
          <div class="dataGeneral bannerTable">
            <div class="tableTitle colorblack font14">活动信息</div>
            <div class="flex contentFlex">
              <div class="previewBox">
                <div class="previewTitle">活动效果浏览</div>
                <div class="previewContent">
                  <div class="scrollContent">
                    <div class="productContent" v-if="goodsData">
                      <div class="productLeft">
                        <img :src="goodsData.imgUrl" class="productImg"/>
                      </div>
                      <div class="productRight">
                        <p class="marginLeft10  font12 colorfff">{{name}}</p>
                        <div class="colorfff font12 marginleft10">
                          奖品1件
                        </div>
                      </div>
                      <div class="">
                        <p class="marginLeft10 font14">奖品：{{goodsData.name}}</p>
                        <div class=" colorGrey font12 marginLeft10">
                          参与者达到{{minParticipantsNums}}人时自动开奖 <span class="colorRed">开奖时间{{lotteryTime}}</span>
                        </div>

                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div class="tableBox">
                <div class="searchContent flex clear">
                  <div class="searchBox">
                    <span class="searchLable searchName colorGrey font12">活动名称</span>
                    <input type="text" v-model="name" class="serchInput font12 colorblack" placeholder="请填写活动名称"/>
                  </div>
                  <div class="searchBox flex">
                    <span class="searchLable searchName colorGrey font12">抽奖活动时间 </span>
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
                  <div class="searchBox">
                    <span class="searchLable colorGrey font12">自动开奖时间</span>
                    <span class="font12 colorblack lotteryTime">{{lotteryTime}}</span>
                  </div>
                  <div class="searchBox flex">
                    <span class="searchLable searchName colorGrey font12">规则</span>
                    <div class="radioBox marginLeft10">
                      <div class="marginbottom">
                        <i class="iconfont iconxuanzhong color2087 font20 cursor cursor" v-if="limitPeople"></i>
                        <i class="iconfont iconxuanze  font20 cursor" v-if="!limitPeople"
                           @click="limitPeople = true"></i>
                        <span class="typeText colorblack font12 marginright10">参与人数最少<input type="text" class="inputBox"
                                                                                            v-model="minParticipantsNums"/>人</span>
                        <i class="iconfont iconxuanzhong color2087 font20 cursor marginLeft10" v-if="!limitPeople"></i>
                        <i class="iconfont iconxuanze  font20 cursor marginLeft10" v-if="limitPeople"
                           @click="limitPeople = false"></i>
                        <span class="typeText colorblack font12">不限制</span>
                      </div>
                      <div class="marginbottom">
                        <i class="iconfont iconxuanzhong color2087 font20 cursor cursor"></i>
                        <span class="typeText colorblack font12 marginright10">获奖人数<input type="text" class="inputBox"
                                                                                          v-model="lotteryNums"/></span>人
                      </div>
                      <div class="marginbottom">
                        <i class="iconfont iconxuanzhong color2087 font20 cursor " v-if="!isConsumePoints"></i>
                        <i class="iconfont iconxuanze  font20 cursor marginLeft10" v-if="isConsumePoints"
                           @click="isConsumePoints = false"></i>
                        <span class="typeText colorblack font12">不消耗积分</span>
                        <i class="iconfont iconxuanzhong color2087 font20 cursor marginLeft10"
                           v-if="isConsumePoints"></i>
                        <i class="iconfont iconxuanze  font20 cursor marginLeft10" v-if="!isConsumePoints"
                           @click="isConsumePoints = true"></i>
                        <span class="typeText colorblack font12 marginright10">消耗积分<input type="text" class="inputBox" v-model="points"/>分</span>
                      </div>
                    </div>
                  </div>
                  <div class="searchBox flex">
                    <span class="searchLable  colorGrey font12"></span>
                  </div>
                </div>
                <div class="flex" style="line-height: 40px;">
                  <div class="bacButton cursor" @click="getRecList()">添加活动商品</div>
                  <span class="colorblack font12 marginLeft10">仅可参加1个商品</span>
                </div>
                <div class="tableScrollBox">
                  <table v-if="goodsData" class="table">
                    <tr>
                      <th v-for="item in sortDatas" :key="item.name">
                        {{item.name}}
                      </th>
                    </tr>
                    <tr>
                      <td>
                        <div class="flex">
                          <img class="productImg" :src="goodsData.imgUrl">
                          <div class="productBox">
                            <p class="colorblack font12 productText">{{goodsData.name}}</p>
                            <p class="colore6 font12 productText">￥{{goodsData.price}}</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        {{goodsData.stock}}
                      </td>
                      <td>
                        <span class="color2087 font12 cursor" @click="delectCommodity()">删除</span>
                      </td>
                    </tr>
                  </table>
                  <div v-if="!goodsData" class="noData">
                    <img class="nodataImg" src="../../assets/images/nodatalist.png"/>
                    <p>暂无数据~</p>
                  </div>
                </div>

              </div>
            </div>
            <div class="bacButton" @click="addActiveProduct()" v-if="noData" style="margin: 10px auto">
              保存
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
        source: 'addrafflebenefits',
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
          {orderType: '', name: '剩余库存', showBlue: false, orderField: ''},
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
        goodsData: '',
        noData: false,
        userInfo: '',
      };
    },
    created() {
      this.userInfo = JSON.parse(localStorage.getItem('user'));
      if (this.userInfo) {
      }
    },
    watch: {},
    mounted() {
      if (this.$route.query) {
        this.goodsid = this.$route.query.id;
        if (this.goodsid) {
          this.getcommodityData();//获取商品列表
        }
      }
    },
    methods: {
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
        var endDate = Date.parse(new Date(this.endDate.replace(/-/g, "/")));
        var startDate = Date.parse(new Date(this.startDate.replace(/-/g, "/")));
        var lotteryTime = endDate;
        var minParticipantsNums = '';
        var reg = /^[1-9]\d*$/;
        if (this.limitPeople) {
          if (!reg.test(this.minParticipantsNums)) {
            this.$message.warning('请输入合理的参与人数');
            return;
          } else {
            minParticipantsNums = this.minParticipantsNums;
          }
        } else {
          minParticipantsNums = ''
        }
        if (!reg.test(this.lotteryNums)) {
          this.$message.warning('请输入合理的获奖人数');
          return;
        }
        if (!this.isConsumePoints) {
          this.points = 0;
        } else if (this.isConsumePoints) {
          if (!reg.test(this.points)) {
            this.$message.warning('请输入合理的消耗积分');
            return;
          }
        }
        if (!this.goodsData) {
          this.$message.warning('请添加活动商品');
          return;
        }
        var goodsIds = this.goodsData.id;
        var status = '';
        if (startDate <= Date.parse(new Date()) && endDate > Date.parse(new Date())) {
          status = 2
        } else if (startDate > Date.parse(new Date())) {
          status = 1
        } else if (endDate <= Date.parse(new Date())) {
          status = 3
        }
        if (this.goodsid) {
          Service.lottery().editoractivity({
            name: this.name,
            "endTime": endDate,
            "goodsId": goodsIds,
            "isHomepageShow": false,
            "isConsumePoints": this.isConsumePoints,
            "startTime": startDate,
            isLimitPeople: this.limitPeople,
            minParticipantsNums: minParticipantsNums,
            lotteryNums: this.lotteryNums,
            lotteryTime: lotteryTime,
            maxParticipantsNums: '',
            points: this.points,
            status: status
          }, this.goodsid).then(response => {
            if (response.errorCode == 0) {
              this.$message.success('添加成功')
              this.$router.push({name: 'rafflebenefits'})
            } else {
              this.$message.error(response.message)
            }
          }, err => {
          });
        } else {
          Service.lottery().addactivity({
            name: this.name,
            "endTime": endDate,
            "goodsId": goodsIds,
            "isHomepageShow": false,
            "isConsumePoints": this.isConsumePoints,
            "startTime": startDate,
            isLimitPeople: this.limitPeople,
            minParticipantsNums: minParticipantsNums,
            lotteryNums: this.lotteryNums,
            lotteryTime: lotteryTime,
            maxParticipantsNums: '',
            points: this.points,
            status: status
          }).then(response => {
            if (response.errorCode == 0) {
              this.$message.success('添加成功');
              this.$router.push({name: 'rafflebenefits'})
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
      getgoodsdata(obj) {
        if (obj.name) {
          if (obj.name.length > 15) {
            obj.name = obj.name.substring(0, 15) + '...'
          }
        }

        this.goodsData = obj;
        console.log(this.goodsData)
        if (this.goodsData) {
          this.noData = true;
        } else {
          this.noData = false;
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
      delectCommodity() {
        this.$confirm('商品删除请谨慎操作，确定删除?', '', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.goodsData = null
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
        Service.lottery().getlotteryDetail({}, this.goodsid).then(response => {
          if (response.errorCode == 0) {
            if (response.data.isLimitPeople) {
              this.isLimitPeople = response.data.isLimitPeople;
              this.minParticipantsNums = response.data.minParticipantsNums;
            } else {
              this.isLimitPeople = false
              this.minParticipantsNums = response.data.minParticipantsNums;
            }
            if (response.data.isConsumePoints) {
              this.isConsumePoints = response.data.isConsumePoints;
              this.points = response.data.points;
            } else {
              this.isConsumePoints = false
              this.points = 0
            }

            this.lotteryNums = response.data.lotteryNums
            this.name = response.data.name;
            this.startDate = this.timetrans(response.data.startTime);
            this.endDate = this.timetrans(response.data.endTime);
            this.lotteryTime = this.endDate
            this.insuranceDate.push(new Date(response.data.startTime));
            this.insuranceDate.push(new Date(response.data.endTime))
            this.goodsData = response.data.goodsInfoVo;
            if (this.goodsData) {
              this.noData = true;
              this.goodsData.name = this.goodsData.name.substring(0, 15) + '...';
              console.log(this.noData)
            } else {
              this.noData = false;
            }
            console.log(this.noData)
          } else {
            this.$message.error(response.message)
          }
        }, err => {
        });

      },
    },

  }
</script>

