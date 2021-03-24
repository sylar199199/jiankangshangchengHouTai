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
               min-width: 120px;
               max-width: 189px;
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
                td:nth-of-type(6) {
                 text-align: center;
                 padding-right: 10px;
              }
                td:nth-of-type(7) {
                   min-width: 70px;
                  text-align: center;
                  padding-right: 10px;
              }
               td:nth-of-type(8) {
                   min-width: 70px;
                  text-align: center;
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

  .width30 {
    width: 30px;
  }

  .marginTop10 {
    margin-top: 10px;
  }
  .border999{
    border: #999999 1px solid;
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
                <div class="previewTitle">活动效果浏览</div>
                <div class="previewContent">
                  <div class="scrollContent">
                    <div class="productContent" v-if="goodsData.length !=0">
                      <div class="shop-theme">
                        <div data-v-18d32e72="" class="notice">
                          <div data-v-18d32e72="" class="theme-title"></div>
                          <div data-v-18d32e72="" class="going">
                            <div data-v-18d32e72="" class="button">抢购中</div>
                          </div>
                        </div>
                        <div data-v-18d32e72="" class="progressing">
                          <div data-v-18d32e72="" class="theme-title white"></div>
                          <div data-v-18d32e72="" class="going">
                            <div data-v-18d32e72="" class="button"> 预告</div>
                          </div>
                        </div>
                      </div>
                      <div class="list flex" v-for="item in goodsData" :key="item.id">
                        <div class="listLeft">
                          <img class="listimgUrl" :src="item.imgUrl">
                        </div>
                        <div class="listRight flexBetween">
                          <div class="goodsname colorblack">{{item.name}}</div>
                          <div class="flexBetween colorblack">
                            <div style="line-height: 30px;">
                              <span class="colorRed font14">￥{{item.price}}</span>
                              <span class="colorGrey linethrouth font12">{{item.marketPrice}}</span>
                            </div>
                            <div class="award button">
                              马上抢
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
                        <i class="iconfont iconxuanzhong color2087 font20 cursor cursor" v-if="isLimitSale"></i>
                        <i class="iconfont iconxuanze  font20 cursor" v-if="!isLimitSale"
                           @click="isLimitSale = true"></i>
                        <span class="typeText colorblack font12 marginright10">每人每种商品限兑<input type="text"
                                                                                              class="inputBox"
                                                                                              v-model="maxSaleNums"/>件</span>
                        <i class="iconfont iconxuanzhong color2087 font20 cursor marginLeft10" v-if="!isLimitSale"></i>
                        <i class="iconfont iconxuanze  font20 cursor marginLeft10" v-if="isLimitSale"
                           @click="isLimitSale = false"></i>
                        <span class="typeText colorblack font12">不限制</span>
                      </div>

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
                        <i class="iconfont iconxuanzhong color2087 font20 cursor" v-if="item.isVirtualReduce"
                           @click="changeVirtual(index, 0, item.stock)"></i>
                        <i class="iconfont iconxuanze color2087 font20 cursor" v-if="!item.isVirtualReduce"
                           @click="changeVirtual(index, 1, item.stock)"></i>
                      </td>
                      <td>
                        <input v-if="item.isVirtualReduce" type="text" v-model="item.perReduceNums"
                               class="font12 colorblack width30 border999" @change="changeValue('perReduceNums','',item, index)"
                               placeholder=""/>
                      </td>
                      <td>
                        <input v-if="item.isVirtualReduce" type="text" v-model="item.perReduceSeconds"
                               class="font12 colorblack width30 border999" @change="changeValue('perReduceSeconds','',item, index)"
                               placeholder=""/>
                      </td>
                      <td>
                        <input v-if="item.isVirtualReduce" type="text" v-model="item.maxReduceNums"
                               class="font12 colorblack width30 border999" @change="changeValue('maxReduceNums','',item, index)"
                               placeholder=""/>
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
        isLimitSale: true,
        maxSaleNums: '',
        source: 'addlimitactive',
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
          {orderType: '', name: '是否造势', showBlue: false, orderField: ''},
          {orderType: '', name: '每次扣减（个）', showBlue: false, orderField: ''},
          {orderType: '', name: '扣减间隔（秒）', showBlue: false, orderField: ''},
          {orderType: '', name: '扣减总数', showBlue: false, orderField: ''},
          {orderType: '', name: '剩余库存', showBlue: false, orderField: ''},
          {orderType: '', name: '排序', showBlue: false, orderField: ''},
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
        goodsData: [],
        noData: false,
        userInfo: '',
        actionendtime: '',
        actionstarttime: '',
        actionid: '',
      };
    },
    created() {
      this.userInfo = JSON.parse(localStorage.getItem('user'));
      if (this.userInfo) {
      }
    },
    watch: {},
    mounted() {
      this.getgoon();
      if (this.$route.query) {
        this.goodsid = this.$route.query.id;
        if (this.goodsid) {
          this.getcommodityData();//获取商品列表
        }
      }
    },
    methods: {
      changeVirtual(goodsIndex, num, stock) {
        if(!stock){
          this.$message.error('库存为0不能造势')
          return
        }
        this.goodsData[goodsIndex].isVirtualReduce = num
        this.$forceUpdate()
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
      getPercent(num, num1) {
        num = parseFloat(num);
        num1 = parseFloat(num1);
        var total = parseFloat(num + num1);
        if (isNaN(num) || isNaN(total)) {
          return "-";
        }
        return total <= 0 ? "0%" : (Math.round(num / total * 10000) / 100.00) + "%";
      },
      getgoon() {
        Service.flashSale().getOn({},).then(response => {
          if (response.errorCode == 0) {
            if (response.data) {
              this.actionendtime = response.data.endTime;
              this.actionstarttime = response.data.startTime;
              this.actionid = response.data.id;
            }

          } else {
            this.$message.error(response.message)
          }
        }, err => {
        });
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
            this.$message.warning('请输入合理的限购数');
            return;
          } else {
            maxSaleNums = this.maxSaleNums;
          }
        } else {
          maxSaleNums = ''
        }
        if (this.goodsData.length == 0) {
          this.$message.warning('请添加活动商品');
          return;
        }
        for (let item of this.goodsData) {
          if(item.isVirtualReduce && !item.perReduceNums){
            this.$message.error('请输入每次扣减')
            return;
          }
          if(item.isVirtualReduce && !item.perReduceSeconds){
            this.$message.error('请输入扣减间隔')
            return;
          }

          if(item.isVirtualReduce && !item.maxReduceNums){
            this.$message.error('请输入扣减总数')
            return;
          }
          if (parseInt(item.maxReduceNums) > parseInt(item.stock)) {
            this.$message.error('扣减总数不能大于库存')
            return;
          }
          if (parseInt(item.perReduceNums) > parseInt(item.maxReduceNums)) {
            debugger
            this.$message.error('每次扣减不能大于扣减总数')
            return;
          }
        }
        let goodsEdits = this.goodsData.map(item => {
          return {
            goodsId: item.id,
            isVirtualReduce: item.isVirtualReduce,
            maxReduceNums: item.maxReduceNums,
            perReduceNums: item.perReduceNums,
            perReduceSeconds: item.perReduceSeconds,
          }
        })
        var goodsIds = '';
        for (var i = 0; i < this.goodsData.length; i++) {
          goodsIds += this.goodsData[i].id + ',';
        }
        goodsIds = goodsIds.substring(0, goodsIds.length - 1);
        if (this.goodsid) {
          Service.flashSale().editoractivity({
            goods: goodsEdits,
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
            goods: goodsEdits,
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
      getRecList() {
        this.showSpecs = true;
      },
      getgoodsdata(obj) {
        console.log('obj', obj)
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
        Service.flashSale().getlotteryDetail({}, this.goodsid).then(response => {
          if (response.errorCode == 0) {
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
            var activityGoodsList = response.data.activityGoodsList;
            if (activityGoodsList.length != 0) {
              this.noData = true;
              for (var i = 0; i < activityGoodsList.length; i++) {
                if (activityGoodsList[i].goodsName.length > 15) {
                  activityGoodsList[i].goodsName = activityGoodsList[i].goodsName.substring(0, 15) + '...';
                }

                var obj = {
                  name: activityGoodsList[i].goodsName,
                  id: activityGoodsList[i].activityGoodsVo.id,
                  imgUrl: activityGoodsList[i].activityGoodsVo.imgUrl,
                  stock: activityGoodsList[i].activityGoodsVo.stock,
                  price: activityGoodsList[i].activityGoodsVo.price,
                  marketPrice: activityGoodsList[i].activityGoodsVo.marketPrice,
                  isVirtualReduce: activityGoodsList[i].isVirtualReduce,
                  maxReduceNums: activityGoodsList[i].maxReduceNums,
                  perReduceNums: activityGoodsList[i].perReduceNums,
                  perReduceSeconds: activityGoodsList[i].perReduceSeconds,
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

