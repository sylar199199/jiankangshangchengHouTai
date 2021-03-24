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
          .searchContent {
            flex-wrap: wrap;
            position: relative;
            margin-top: 20px;

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
              background: url('../../assets/images/multigroup.jpg') no-repeat center center;
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
                max-width: 140px;
                min-width: 118px;
                text-align: left;
                padding-left: 10px;
                padding-right: 10px;
              }
              td:nth-of-type(2) {
                max-width: 100px;
                min-width: 88px;
                text-align: center;
              }
              td:nth-of-type(3) {
                max-width: 100px;
                min-width: 88px;
                text-align: center;
              }

              td:nth-of-type(4) {
               max-width: 100px;
                min-width: 88px;
                text-align: center;
                padding-right: 10px;
              }
              td:nth-of-type(5) {
                max-width: 100px;
                min-width: 88px;
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
                  
                  </div>

                </div>
              </div>
              <div class="tableBox">
                <div class="searchContent flex clear">
                    <div class="searchBox">
                        <span class="colorRed font12">*</span>
                        <span class="searchLable searchName colorGrey font12">活动名称</span>
                        <input type="text" v-model="groupData.name" class="serchInput font12 colorblack" placeholder="请填写活动名称"/>
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
                    <div class="searchBox">
                        <span class="colorRed font12">*</span>
                        <span class="searchLable searchName colorGrey font12">拼团商品折扣</span>
                        <input type="text" v-model="groupData.discount" class="serchInput font12 colorblack" @blur="changepoint()"  placeholder="请输入拼团商品折扣"/>
                        <span class="colorblack font12">%</span>
                    </div>
                    <div class="itemcenter searchBox" style="line-height: 40px;">
                        <span class="colorRed font12">*</span>
                        <span class="searchLable searchName colorGrey font12">拼团商品</span>
                        <div class="bacButton cursor" @click="getRecList()">添加拼团商品</div>
                        <span class="colorblack font12 marginLeft10">共{{goodsData.length}}个商品</span>
                    </div>
                    <div class="tableScrollBox" v-if="goodsData.length != 0">
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
                          <span>{{item.groupprice}}</span>
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
                  
                   
                    <div class="searchBox">
                        <span class="colorRed font12">*</span>
                        <span class="searchLable searchName colorGrey font12">拼团有效期</span>
                        <input type="text" v-model="day"   @change="changeValue('day')" class="inputBox1 font12 colorblack" />
                        <span class="colorblack  font12">天</span>
                        <input type="text" v-model="hour"   @change="changeValue('hour')" class="inputBox1 font12 colorblack" />
                        <span class="colorblack  font12">时</span>
                        <input type="text" v-model="minute"   @change="changeValue('minute')" class="inputBox1 font12 colorblack" />
                        <span class="colorblack  font12">分</span>
                        <span class="colorGrey font12">用户开团后，需要在指定时间内成团，超时则拼团失败，释放库存</span>
                    </div>
                  
                     <div class="searchBox">
                        <span class="colorRed font12">*</span>
                        <span class="searchLable searchName colorGrey font12">参团人数</span>
                        <input type="text" v-model="groupData.participantsNums" @change="changeValue('participantsNums')" class="serchInput font12 colorblack" placeholder="请输入2-100"/>
                         <span class="typeText colorblack font12">人</span>
                    </div>
                    <div class="searchBox">
                        <span class="searchLable searchName colorGrey font12">优惠叠加</span>
                        <span class="typeText colorblack font12">不叠加其他优惠活动</span>
                    </div>
                    <div class="searchBox itemcenter">
                        <span class="colorRed font12 mr4">*</span>
                        <span class="searchLable searchName colorGrey font12">限购限制</span>
                        <div class="radioBox marginLeft10">
                            <div class="">
                                <i class="iconfont iconxuanzhong color2087 font20 cursor cursor" v-if="groupData.isLimitSale"></i>
                                <i class="iconfont iconxuanze  font20 cursor" v-if="!groupData.isLimitSale" @click="groupData.isLimitSale = true"></i>
                                <span class="typeText colorblack font12 marginright10">每人限购
                                    <input type="text" class="inputBox" v-model="groupData.maxSaleNums" @change="changeValue('maxSaleNums')"/>件
                                </span>
                                <i class="iconfont iconxuanzhong color2087 font20 cursor marginLeft10" v-if="!groupData.isLimitSale"></i>
                                <i class="iconfont iconxuanze  font20 cursor marginLeft10" v-if="groupData.isLimitSale" @click="groupData.isLimitSale = false"></i>
                                <span class="typeText colorblack font12">不限制</span>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
            <div class="bacButton" @click="addActiveProduct()"  style="margin: 10px auto">
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
        day: '',
        hour: '',
        minute: '',
        groupData:{
          discount: '',
          endTime: '',
          goodsIds: [],
          isLimitSale: false,
          maxSaleNums: '',
          name: '',
          participantsNums: '',
          period: '',
          startTime: ''
        },
        startTime: '',
        endTime: '',
        source: 'addmultigroup',
        lotteryTime: '',
        isConsumePoints: false,
        lotteryNums: '',
        limitPeople: true,
        maxRegDays: '',
        minRegDays: '',
        isuserRegDaysLimit: 1,
        userRegDaysLimit: null,
        minParticipantsNums: '',
        activityId: '',
        showSpecs: false,
        shelvesType: 1,
        points: '',
        percent: '90%',
        activeIndex: '1',
        sortDatas: [
          {orderType: '', name: '商品', showBlue: false, orderField: ''},
          {orderType: '', name: '拼团价', showBlue: false, orderField: ''},
          {orderType: '', name: '剩余库存', showBlue: false, orderField: ''},
          {orderType: '', name: '排序', showBlue: false, orderField: ''},
          {orderType: '', name: '操作', showBlue: false, orderField: ''}
        ],
        insuranceDate: [],
        name: "",
        status: '',
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
      if (this.userInfo) {
      }
    },
    watch: {},
    mounted() {
      if (this.$route.query) {
        this.activityId = this.$route.query.id;
        if (this.activityId) {
          this.getcommodityData();//获详情
        }
      }
    },
    methods: {
      accMul(arg1,arg2){
            var m=0,s1=arg1.toString(),s2=arg2.toString();
            try{m+=s1.split(".")[1].length}catch(e){}
            try{m+=s2.split(".")[1].length}catch(e){}
            return Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m)
        },
      changepoint(type){
        var on = true;
         var reg = /^[1-9]\d*$/;
         if(!reg.test(this.groupData.discount)){
           this.$message.error('请输入正确的打折数')
            return
         }
         if(this.groupData.discount >= 100 || this.groupData.discount <= 0){
            this.$message.error('请输入正确的打折数')
            return
         }
         if(!type){
            if(this.goodsData.length != 0){
              for(let item of this.goodsData){
                var discount = this.accMul(this.groupData.discount,'0.01');
                  item.groupprice = this.accMul(item.price,discount).toFixed(2);
              }
              this.$forceUpdate()
            }
         }
         if(type){
           return on;
         }
        
      },
      changeVirtual(goodsIndex, num, stock) {
        if(!stock){
          this.$message.error('库存为0不能造势')
          return
        }
        this.goodsData[goodsIndex].isVirtualReduce = num
        this.$forceUpdate()
      },
      changeValue(name, type) {
        var reg = /^[0-9]\d*$/;
        var on = true;
        if (name == 'maxSaleNums') {
          if(!reg.test(this.groupData[name])){
            this.$message.error('请输入正确的限购数');
            on = false;
            return
          }
           if(this.groupData[name]<1){
            this.$message.error('请输入正确的限购数');
            on = false;
            return
          }
        }
        if (name == 'participantsNums') {
          if(!reg.test(this.groupData[name])){
            this.$message.error('请输入正确的拼团人数');
            on = false;
            return
          }
          if(this.groupData[name]<2 || this.groupData[name]>100){
            this.$message.error('请输入正确的2-100人');
            on = false;
            return
          }
        }
        if(name == 'day'){
          if(!reg.test(this.day)){
            this.$message.error('请输入正确的拼团有效期');
            on = false;
            return
          }
          
        }
         if(name == 'minute'){
          if(!reg.test(this.minute)){
            this.$message.error('请输入正确的拼团有效期');
            on = false;
            return
          }
          if(this.minute>59){
            this.$message.error('请输入正确的拼团有效期');
            on = false;
            return
          }
        }
         if(name == 'hour'){
          if(!reg.test(this.hour)){
            this.$message.error('请输入正确的拼团有效期');
            on = false;
            return
          }
          if(this.hour>59){
            this.$message.error('请输入正确的拼团有效期');
            on = false;
            return
          }
        }
        if(type == 'submit') {
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
      addActiveProduct() {
         console.log( this.groupData)
        this.groupData.name = this.groupData.name.replace(/^\s*|\s*$/g, "");
        if (!this.groupData.name) {
          this.$message.warning('请输入活动名称');
          return;
        }
        if (this.groupData.name.length < 2 || this.groupData.name.length > 30) {
          this.$message.warning('请输入短于2个字不超过30个字的活动名称');
          return;
        }
        if (!this.startTime || !this.endTime) {
          this.$message.warning('请选择生效时间');
          return;
        }
      
        if(!this.changepoint('submit')){
          return;
        }
        if (this.goodsData.length == 0) {
          this.$message.warning('请添加活动商品');
          return;
        }
        var goodsIds = '';
        for (var i = 0; i < this.goodsData.length; i++) {
          goodsIds += this.goodsData[i].id + ',';
        }
        goodsIds = goodsIds.substring(0, goodsIds.length - 1);
        this.groupData.goodsIds = goodsIds.split(",");
       
        if(!this.day && !this.minute && !this.hour){
          this.$message.warning('请输入拼团有效期');
          return;
        }
        this.groupData.period = parseInt(this.day)*24*60+parseInt(this.hour)*60+parseInt(this.minute);
        console.log( this.groupData.period)
         if (!this.changeValue("day","submit")) {
             return;
        } 
        if (!this.changeValue("minute","submit")) {
            return;
        } 
        if (!this.changeValue("hour","submit")) {
            return;
        } 
         if (!this.changeValue("participantsNums","submit")) {
            return;
        } 
         if (this.groupData.isLimitSale) {
          if (!this.changeValue("maxSaleNums","submit")) {
             return;
          } 
        } else {
          this.groupData.maxSaleNums = ''
        }
        var endTime = Date.parse(new Date(this.endTime.replace(/-/g, "/")));
        var startTime = Date.parse(new Date(this.startTime.replace(/-/g, "/")));
        this.groupData.endTime = endTime;
        this.groupData.startTime = startTime;
        console.log(this.groupData)
        if (this.activityId) {
          Service.groupPurchase().editorgroupPurchase(this.groupData, this.activityId).then(response => {
            if (response.errorCode == 0) {
              this.$message.success('添加成功')
              this.$router.push({name: 'multigroupmanage'})
            } else {
              this.$message.error(response.message)
            }
          }, err => {
          });
        } else {
          Service.groupPurchase().addgroupPurchase(this.groupData).then(response => {
            if (response.errorCode == 0) {
              this.$message.success('添加成功');
              this.$router.push({name: 'multigroupmanage'})
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
            if (obj[i].name.length > 12) {
              obj[i].name = obj[i].name.substring(0, 12) + '...'
            }
          }
        }
        this.goodsData = obj;
        if (this.goodsData.length != 0) {
          if(this.groupData.discount){
           for(let item of this.goodsData){
             var discount = this.accMul(this.groupData.discount,'0.01');
              item.groupprice = this.accMul(item.price,discount).toFixed(2);
           }
            this.$forceUpdate()
         }
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
        Service.groupPurchase().getgroupPurchase({}, this.activityId).then(response => {
          if (response.errorCode == 0) {
            this.groupData = {
              name: response.data.name,
              endTime: response.data.endTime,
              discount: response.data.discount,
              isLimitSale: response.data.isLimitSale,
              maxSaleNums: response.data.maxSaleNums,
              participantsNums: response.data.participantsNums,
              period: response.data.period,
              startTime: response.data.startTime,
              goodsIds: []
            };
            this.startTime = this.timetrans(response.data.startTime);
            this.endTime = this.timetrans(response.data.endTime);
            this.insuranceDate.push(new Date(response.data.startTime));
            this.insuranceDate.push(new Date(response.data.endTime))
            var goodsList = response.data.goodsList;
            var period = response.data.period;
            this.day = parseInt(period/60/24);
            this.hour = parseInt(period / 60) % 24 > 9 ? parseInt(period / 60) % 24 : '0' + parseInt(period / 60) % 24;
            this.minute = parseInt(period % 60) > 9 ? parseInt(period % 60) : '0' + parseInt(period % 60);
            if (goodsList.length != 0) {
              this.noData = true;
              for (var i = 0; i < goodsList.length; i++) {
                if (goodsList[i].name.length > 12) {
                  goodsList[i].name = goodsList[i].name.substring(0, 12) + '...';
                }
                var discount = this.accMul(this.groupData.discount,'0.01');
                goodsList[i].groupprice = this.accMul(goodsList[i].price,discount).toFixed(2);
              }
              this.goodsData = goodsList;
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

