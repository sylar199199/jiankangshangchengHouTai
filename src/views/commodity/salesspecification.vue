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

            .bacButton {
              position: absolute;
              right: 46px;
              bottom: 15px;
            }

            .searchBox {
              margin-right: 15px;
              margin-bottom: 20px;

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

          .borderButton {
            margin: 0 20px;
          }

          .noData {
            text-align: center;
            padding-top: 30px;
          }

          .table {
            font-size: 12px;
            border: 1px solid #f6f6f6;
            margin: 10px 20px;
            width: 937px;

            th {
              font-size: 12px;
              text-align: center;
              background: #f6f6f6;

              .iconshengjiangxu {
                font-size: 16px;
                margin-left: 5px;
              }
            }

            tr {
              border-bottom: 1px solid #f6f6f6;

              td {
                text-align: center;
                padding: 20px 0;

                .productImg {
                  max-width: 116px;
                  max-height: 60px;
                }

                .productBox {
                  display: flex;
                  flex-direction: column;
                  height: 60px;
                  justify-content: space-between;
                  padding-left: 6px;

                  .productText {
                    margin-bottom: 0px;
                    margin-top: 0;
                  }
                }

              }

              td:nth-of-type(2) {
                min-width: 180px;
                max-width: 300px;
                text-align: center;
              }

              td:nth-of-type(3) {
                .imgicon {
                  display: inline-block;
                  vertical-align: middle;
                  height: 20px;
                  width: 20px;
                  padding-right: 10px;
                }
              }

              td:nth-of-type(5) {
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
                <span class="searchLable colorGrey font12">规格编号</span>
                <input type="text" class="serchInput font12 colorblack" v-model="productPlanNo" placeholder="规格编号"/>
              </div>
              <div class="searchBox flex">
                <span class="searchLable searchName colorGrey font12">权益规格</span>
                <el-select v-model="onlyRightsFlag" placeholder="">
                  <el-option
                    v-for="item in rightOption"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id">
                  </el-option>
                </el-select>
              </div>
              <div class="searchBox flex">
                <span class="searchLable searchName colorGrey font12">创建时间</span>
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
              <div class="searchBox">
                <span class="searchLable colorGrey font12">服务规格全称</span>
                <input type="text" class="serchInput font12 colorblack" v-model="productPlanName" placeholder="服务规格全称"/>
              </div>
              <div class="bacButton cursor" @click="getSalesspecification('search')" v-show="goodsplanview">查询</div>
            </div>

          </div>
          <div class="dataGeneral bannerTable">
            <table v-if="noData" class="table" v-show="goodsplanview">
              <tr>
                <th v-for="item in sortDatas">
                  {{item.name}}
                  <i v-if="item.orderType == 'asc' && item.showBlue" @click='sortData(item)'
                     class=" iconshangsheng color2087 iconfont cursor"></i>
                  <i v-if="item.orderType == 'desc' && item.showBlue" @click='sortData(item)'
                     class="iconjiang color2087 iconfont cursor"></i>
                  <i v-if="!item.showBlue && item.orderType == 'asc'" @click='sortData(item)'
                     class="iconfont colorGrey cursor iconshangsheng"></i>
                  <i v-if="!item.showBlue && item.orderType == 'desc'" @click='sortData(item)'
                     class="iconfont colorGrey cursor iconjiang"></i>
                </th>
              </tr>
              <tr v-for="(item,index) in tableData">
                <td>
                  {{item.productPlanNo}}
                </td>
                <td>
                  <span v-if="item.onlyRightsFlag == '01'">是</span>
                  <span v-if="!item.onlyRightsFlag || item.onlyRightsFlag == '02'">否</span>
                </td>
                <td>
                  {{item.productPlanName}}
                </td>
                <td>
                  {{item.productPlanShortName}}
                </td>
                <td>
                  <span v-if="item.entityFlag == '01'">实物商品</span>
                  <span v-if="item.entityFlag == '02' && item.entityCardFlag == '01' ">有实体卡</span>
                  <span v-if="item.entityFlag == '02' && item.entityCardFlag == '02' ">电子卡券</span>
                </td>
                <td>
                  {{item.planPrice}}
                </td>
                <td v-if="item.createDate">{{timetrans(item.createDate)}}</td>
                <td v-if="!item.createDate">-</td>
                <td v-if="item.planSalEndDate"> {{timetrans(item.planSalEndDate)}}</td>
                <td v-if="!item.planSalEndDate">-</td>

              </tr>
            </table>
            <div v-if="!noData" class="noData">
              <img class="nodataImg" src="../../assets/images/nodatalist.png"/>
              <p>暂无数据~</p>
            </div>
            <div class="block" v-if="noData" v-show="goodsplanview">
              <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="page"
                :page-size="size"
                :page-sizes="[5,10]"
                layout="total,sizes, prev, pager, next,jumper"
                :total="total">
              </el-pagination>
            </div>
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

  export default {
    name: "salecustomer",
    components: {
      Aside,
      KlTop,
    },
    data() {
      return {
        onlyRightsFlag: '',
        rightOption: [
          {name: '全部', id: ''},
          {name: '权益规格', id: '01'},
          {name: '非权益规格', id: '02'}
        ],
        orderField: 'productPlanNo',
        orderType: 'asc',
        sortDatas: [
          {orderType: 'asc', name: '规格编号', showBlue: true, orderField: 'productPlanNo'},
          {orderType: '', name: '权益规格', showBlue: false, orderField: ''},
          {orderType: 'asc', name: '服务规格全称', showBlue: false, orderField: 'productPlanName'},
          {orderType: 'asc', name: '服务规格简称', showBlue: false, orderField: 'productPlanShortName'},
          {orderType: '', name: '规格类型', showBlue: false, orderField: ''},
          {orderType: 'asc', name: '标准价 ', showBlue: false, orderField: 'planPrice'},
          {orderType: 'desc', name: '创建时间', showBlue: false, orderField: 'createDate'},
          {orderType: 'desc', name: '下架时间 ', showBlue: false, orderField: 'planSalEndDate'}
        ],
        isRecommend: false,
        insuranceDate: '',
        endDate: '',
        startDate: '',
        tableData: [],
        noData: true,
        total: null,
        page: 1,
        size: 10,
        showFour: false,
        dissipate: [],
        timer: null,
        username: '',
        userInfo: '',
        permissions: [],
        productPlanName: '',
        productPlanNo: '',

        goodsplanview: false
      };
    },
    created() {
      this.userInfo = JSON.parse(localStorage.getItem('user'));
      this.goodsplanview = this.havePermissions('goods:plan:view')

    },
    watch: {},
    mounted() {
      if(this.goodsplanview){
        this.getSalesspecification('');//获取规格
      }
    },
    methods: {
      handleSizeChange(val) {
        this.size = val;
        this.getSalesspecification('')
      },
      handleCurrentChange(val) {
        this.page = val;
        this.getSalesspecification('')
      },
      sortData(item) {
        for (let i in this.sortDatas) {
          this.sortDatas[i].showBlue = false;
        }
        item.showBlue = true;
        if (item.orderType == 'asc') {
          item.orderType = 'desc';
        } else if (item.orderType == 'desc') {
          item.orderType = 'asc';
        }
        this.orderType = item.orderType;
        this.orderField = item.orderField;
        this.getSalesspecification('search')
      },
      getbackData(str) {
        if (str == 'sure') {
          this.isRecommend = false;
        }
        if (str == 'cancle') {
          this.isRecommend = false;
        }
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
        getSeconds = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds();
        var newTime = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + getHours + ':' + getMinutes + ':' + getSeconds;
        return newTime
      },
      getSalesspecification(str) {
        if (str == 'search') {
          this.page = 1;
        }
        var endDate = '', startDate = '';
        if (this.endDate || this.startDate) {
          endDate = Date.parse(new Date(this.endDate));
          startDate = Date.parse(new Date(this.startDate));
        } else {
          endDate = this.endDate;
          startDate = this.startDate;
        }
        Service.goods().goodsPlan({
          onlyRightsFlag: this.onlyRightsFlag,
          "endDate": endDate,
          "productPlanNo": this.productPlanNo,
          "page": this.page,
          "size": this.size,
          "startDate": startDate,
          orderType: this.orderType,
          orderField: this.orderField,
          productPlanName: this.productPlanName
        }).then(response => {
          if (response.errorCode == 0) {
            if (response.data.records.length == 0) {
              this.noData = false;
            } else {
              this.noData = true;
              this.total = response.data.total;
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

