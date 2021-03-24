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

                .shop-theme {
                  padding-left: 20px;

                  .titlename {
                    margin-top: 20px;
                    font-size: 18px;
                    font-weight: bold;
                  }

                  .daotime {
                    display: flex;
                    margin-top: 10px;
                    color: #333333;
                  }

                  .timgming {
                    margin-left: 10px;

                    .timemingword {
                      width: 20px;
                      text-align: center;
                      background: #000000;
                      color: #e5e5e5;
                      display: inline-block;
                      border-radius: 4px;
                    }
                  }
                }

                .listcontent {
                  display: flex;
                  margin-top: 30px;
                  padding: 0 20px;
                  box-sizing: border-box;
                  flex-wrap: wrap;
                }

                .list {
                  margin: 0 10px;
                  width: 100px;
                  margin-bottom: 30px;
                  .listTop {
                    .listimgUrl {
                      width: 100%;
                    }
                  }

                  .goodsname {
                    color: #333333;
                    width: 100%;
                    word-wrap:break-word;
                    margin-top: 20px;
                  }

                  .listBottom {
                    display: flex;
                    align-items: center;
                    margin-top:10px;

                    .linethrouth {
                      text-decoration: line-through;
                    }

                    .button {
                      color: #fff;
                      background: #ea6c6b;
                      width: 50px;
                      height: 20px;
                      line-height: 20px;
                      border-radius: 10px;
                      text-align: center;
                      font-size: 1px;
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
          <div class="dataGeneral bannerTable">
            <div class="tableTitle colorblack font14">活动信息</div>
            <div class="flex contentFlex">
              <div class="previewBox">
                <div class="previewTitle">活动效果预览</div>
                <div class="previewContent">
                  <div class="scrollContent">
                    <div class="productContent" v-if="goodsData.length !=0">
                      <div class="shop-theme">
                        <div class="titlename">{{name}}</div>
                        <div class="daotime" v-if="isShowTime">
                          <div class="daoword">距离活动结束</div>
                          <div class="timgming">
                            <span class="timemingword">1</span>
                            <span>天</span>
                            <span class="timemingword">20</span>
                            <span>:</span>
                            <span class="timemingword">05</span>
                            <span>:</span>
                            <span class="timemingword">36</span>
                          </div>
                        </div>

                      </div>
                      <div class="listcontent">
                        <div class="list" v-for="item in goodsData" :key="item.id">
                          <div class="listTop">
                            <img class="listimgUrl" :src="item.imgUrl">
                          </div>
                          <div class="goodsname colorblack">{{item.name}}</div>
                          <div class="flexBetween colorblack listBottom">
                            <span class="colorGrey linethrouth font12">￥{{item.price}}</span>
                            <div class="award button">
                              去兑换
                            </div>
                          </div>

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
                    <span class="searchLable searchName colorGrey font12">生效时间 </span>
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
                  <div class="searchBox flex">
                    <span class="searchLable searchName colorGrey font12">限购限制</span>
                    <div class="radioBox marginLeft10">
                      <div class="marginbottom">
                        <i class="iconfont iconxuanzhong color2087 font20 cursor cursor" v-if="isLimitRedeem"></i>
                        <i class="iconfont iconxuanze  font20 cursor" v-if="!isLimitRedeem"
                           @click="isLimitRedeem = true"></i>
                        <span class="typeText colorblack font12 marginright10">每人每种商品限兑<input type="text"
                                                                                              class="inputBox"
                                                                                              v-model="maxRedeemNums"/>件</span>
                        <i class="iconfont iconxuanzhong color2087 font20 cursor marginLeft10" v-if="!isLimitRedeem"></i>
                        <i class="iconfont iconxuanze  font20 cursor marginLeft10" v-if="isLimitRedeem"
                           @click="isLimitRedeem = false"></i>
                        <span class="typeText colorblack font12">不限制</span>
                      </div>
                    </div>
                  </div>
                  <div class="searchBox flex">
                    <span class="searchLable searchName colorGrey font12">活动倒计时</span>
                    <div class="radioBox">
                      <i class="iconfont iconxuanzhong color2087 font20 cursor marginLeft10" v-if="isShowTime"></i>
                      <i class="iconfont iconxuanze  font20 cursor marginLeft10" v-if="!isShowTime"
                         @click="isShowTime = true"></i>
                      <span class="typeText colorblack font12">显示</span>
                      <i class="iconfont iconxuanzhong color2087 font20 cursor marginLeft10" v-if="!isShowTime"></i>
                      <i class="iconfont iconxuanze  font20 cursor marginLeft10" v-if="isShowTime"
                         @click="isShowTime = false"></i>
                      <span class="typeText colorblack font12">不显示</span>
                    </div>
                  </div>
                  <div class="searchBox flex">
                    <span class="searchLable  colorGrey font12"></span>

                  </div>
                </div>
                <div class="flex" style="line-height: 40px;">
                  <div class="bacButton cursor" @click="getRecList()">添加活动商品</div>
                  <span class="colorblack font12 marginLeft10">共{{goodsData.length}}个商品</span>
                </div>
                <div class="tableScrollBox">
                  <table v-if="goodsData.length != 0" class="table">
                    <tr>
                      <th v-for="item in sortDatas" :key="item.name">
                        {{item.name}}
                      </th>
                    </tr>
                    <tr v-for="(item,index) in goodsData" :key="item.id">
                      <td>
                        <div class="flex">
                          <img class="productImg" :src="item.imgUrl">
                          <div class="productBox">
                            <p class="colorblack font12 productText">{{item.name}}</p>
                            <p class="colore6 font12 productText">￥{{item.price}}</p>
                          </div>
                        </div>
                      </td>

                      <td>
                        {{item.stock}}
                      </td>
                      <td>
                        <i class="cursor iconfont iconshangsheng fontIcongreen" v-if="index!=0"
                           @click='upSort(index,item)'></i>
                        <i class="iconfont iconshangsheng fontIcongrey" v-if="index==0"></i>
                        <i class='cursor iconfont fontIcongreen iconjiang' @click='downSort(index,item)'
                           v-if="index!=(goodsData.length-1)"></i>
                        <i class='iconfont fontIcongrey iconjiang' v-if="index==(goodsData.length-1)"></i>
                      </td>
                      <td>
                        <span class="color2087 font12 cursor" @click="delectCommodity(index)">删除</span>
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
      <Addcommodity v-if="showSpecs" @selectGuige='getgoodsdata' :source="source" :limitgoodsdata="goodsData"
                    @clickbanner="getbackData"></Addcommodity>
    </div>
  </div>
</template>

<script>
  import Aside from '@/components/aside'
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
        isLimitRedeem: true,
        isShowTime: true,
        maxRedeemNums: '',
        source: 'addexchange',
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
          {orderType: '', name: '排序', showBlue: false, orderField: ''},
          {orderType: '', name: '操作', showBlue: false, orderField: ''}
        ],
        insuranceDate: [],
        endDate: "",
        name: "",
        startDate: "",
        type: '',
        total: 0,
        size: 10,
        page: 1,
        goodsData: [],
        noData: false,
        userInfo: '',
      };
    },
    created() {
      this.userInfo = JSON.parse(localStorage.getItem('user'));
      localStorage.setItem('shopId', 2)
      if (this.userInfo) {
      }
    },
    watch: {},
    mounted() {
      this.goodsid = this.$route.params.id;
      if (this.goodsid !== 'add') {
        this.getcommodityData();//获取商品列表
      }
    },
    methods: {
      upSort(index){
        this.goodsData[index] = this.goodsData.splice(index-1, 1, this.goodsData[index])[0]
      },
      downSort(index){
        this.goodsData[index] = this.goodsData.splice(index+1, 1, this.goodsData[index])[0]
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
        var endDate = Date.parse(new Date(this.endDate.replace(/-/g, "/")));
        var startDate = Date.parse(new Date(this.startDate.replace(/-/g, "/")));
        var maxRedeemNums = null;
        var reg = /^[1-9]\d*$/;
        if (this.isLimitRedeem) {
          if (!reg.test(this.maxRedeemNums)) {
            this.$message.warning('请输入限兑数量');
            return;
          } else {
            maxRedeemNums = this.maxRedeemNums;
          }
        } else {
          maxRedeemNums = null
        }
        if (this.goodsData.length == 0) {
          this.$message.warning('请添加活动商品');
          return;
        }
        var goodsIds = [];
        for (var i = 0; i < this.goodsData.length; i++) {
          goodsIds.push(this.goodsData[i].id);
        }
        if (this.goodsid != 'add') {
          Service.lzredeem().lzeditoractivity({
            name: this.name,
            "endTime": endDate,
            "goodsIds": goodsIds,
            "startTime": startDate,
            isLimitRedeem: this.isLimitRedeem,
            maxRedeemNums: maxRedeemNums,
            isShowTime: this.isShowTime
          }, this.goodsid).then(response => {
            if (response.errorCode == 0) {
              this.$message.success('添加成功')
              this.$router.push({name: 'lzexchange'})
            } else {
              this.$message.error(response.message)
            }
          }, err => {
          });
        } else {
          Service.lzredeem().addlzredeem({
            name: this.name,
            endTime: endDate,
            goodsIds: goodsIds,
            startTime: startDate,
            isLimitRedeem: this.isLimitRedeem,
            maxRedeemNums: maxRedeemNums,
            isShowTime: this.isShowTime
          }).then(response => {
            if (response.errorCode == 0) {
              this.$message.success('添加成功');
              this.$router.push({name: 'lzexchange'})
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
        console.log(obj)
        for (var i = 0; i < obj.length; i++) {
          if (obj[i].name) {
            if (obj[i].name.length > 15) {
              obj[i].name = obj[i].name.substring(0, 15) + '...'
            }

          }
        }
        this.goodsData = obj;
        if (this.goodsData.length != 0) {
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
      delectCommodity(index) {
        this.$confirm('商品删除请谨慎操作，确定删除?', '', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.goodsData.splice(index, 1);
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
        Service.lzredeem().getredeemDetail({}, this.goodsid).then(response => {
          if (response.errorCode == 0) {
            this.isLimitRedeem = response.data.isLimitRedeem;
            if (response.data.isLimitRedeem) {
              this.maxRedeemNums = response.data.maxRedeemNums;
            } else {
              this.maxRedeemNums = null
            }
            this.name = response.data.name;
            this.isShowTime = response.data.isShowTime;
            this.startDate = this.timetrans(response.data.startTime);
            this.endDate = this.timetrans(response.data.endTime);
            this.insuranceDate.push(new Date(response.data.startTime));
            this.insuranceDate.push(new Date(response.data.endTime))
            var activityGoodsList = response.data.redeemGoodsVo;
            if (activityGoodsList.length != 0) {
              this.noData = true;
              for (var i = 0; i < activityGoodsList.length; i++) {
                if (activityGoodsList[i].activityGoodsVo.name.length > 15) {
                  activityGoodsList[i].activityGoodsVo.name = activityGoodsList[i].activityGoodsVo.name.substring(0, 15) + '...';
                }

                var obj = {
                  name: activityGoodsList[i].activityGoodsVo.name,
                  id: activityGoodsList[i].activityGoodsVo.id,
                  imgUrl: activityGoodsList[i].activityGoodsVo.imgUrl,
                  stock: activityGoodsList[i].activityGoodsVo.stock,
                  price: activityGoodsList[i].activityGoodsVo.price,
                  marketPrice: activityGoodsList[i].activityGoodsVo.marketPrice
                }
                this.goodsData.push(obj)
              }
            } else {
              this.noData = false;
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

