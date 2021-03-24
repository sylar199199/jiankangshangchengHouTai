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
              margin-right: 30px;
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
                padding: 8px 0;

                .productImg {
                  width: 116px;
                  height: 60px;
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
                    text-align: left;
                    margin-bottom: 0px;
                    margin-top: 0;
                  }
                }

              }

              td:nth-of-type(2) {
                min-width: 180px;
                max-width: 200px;
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
                <span class="searchLable colorGrey font12">商品名称</span>
                <input type="text" v-model="name" class="serchInput font12 colorblack" placeholder="商品名称"/>
              </div>
              <div class="searchBox flex">
                <span class="searchLable searchName colorGrey font12">上架时间 </span>
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
              <div class="bacButton cursor" @click="getRecList()" v-show="goodsview">查询</div>
            </div>

          </div>
          <div class="dataGeneral bannerTable">
            <div class="borderButton cursor" @click="isRecommend = true" v-show="goodsrecadd">添加推荐商品</div>
            <table v-if="noData" class="table" v-show="goodsview">
              <tr>
                <th>编号</th>
                <th>商品</th>
                <th>上架时间</th>
                <th>修改排序</th>
                <th>操作</th>
              </tr>
              <tr v-for="(item,index) in tableData">
                <td>
                  {{item.id}}
                </td>
                <td>
                  <div class="flex">
                    <img class="productImg" :src="item.imgUrl">
                    <div class="productBox">
                      <p class="colorblack font12 productText">{{item.name}}</p>
                      <p class="colore6 font12 productText">￥{{item.minPrice}} - ￥{{item.maxPrice}}</p>
                    </div>
                  </div>
                </td>
                <td v-if="item.saleStartDate">{{timetrans(item.saleStartDate)}}</td>
                <td v-if="!item.saleStartDate"></td>
                <td>
                  <i class="cursor iconfont iconshangsheng fontIcongreen" v-if="index!=0"
                     @click='upSort(index,item)' v-show="goodssort"></i>
                  <i class="iconfont iconshangsheng fontIcongrey" v-if="index==0" v-show="goodssort"></i>
                  <i class='cursor iconfont fontIcongreen iconjiang' @click='downSort(index,item)'
                     v-if="index!=(tableData.length-1)" v-show="goodssort"></i>
                  <i class='iconfont fontIcongrey iconjiang' v-if="index==(tableData.length-1)" v-show="goodssort"></i>
                </td>
                <td><span class="color2087 font12 cursor" v-show="goodsdelete" @click="cancleRec(item)">取消推荐</span></td>

              </tr>
            </table>
            <div v-if="!noData" class="noData">
              <img class="nodataImg" src="../../assets/images/nodatalist.png"/>
              <p>暂无数据~</p>
            </div>
          </div>

        </div>
      </div>
    </div>
    <Commodities v-if="isRecommend" @clickbanner="getbackData"></Commodities>
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
        isRecommend: false,
        insuranceDate: '',
        endDate: '',
        startDate: '',
        tableData: [],
        noData: true,
        userInfo: '',
        name: '',

        goodsview: false, //商品查询
        goodssort: false, //商品添加
        goodsdelete: false, //取消推荐
        goodsrecadd: false,
      };
    },
    created() {
      this.userInfo = JSON.parse(localStorage.getItem('user'));

      this.goodsview = this.havePermissions("goods:rec:view[shopId=1]")
      this.goodssort = this.havePermissions("goods:rec:sort[shopId=1]")
      this.goodsdelete = this.havePermissions("goods:rec:delete[shopId=1]")
      this.goodsrecadd = this.havePermissions("goods:rec:add[shopId=1]")
    },
    watch: {},
    mounted() {
      if (this.goodsview) {
        this.getRecList();
      }

    },
    methods: {
      downSort(index, item) {//降序
        this.tableData[index] = this.tableData[index + 1];
        this.tableData[index + 1] = item;
        this.sortRecData();
      },
      upSort(index, item) {//升序
        this.tableData[index] = this.tableData[index - 1];
        this.tableData[index - 1] = item;
        this.sortRecData();
      },
      sortRecData() {
        var arrdata = [];
        for (var i = 0; i < this.tableData.length; i++) {
          var obj = {
            id: this.tableData[i].id,
            sort: parseInt(i) + 1
          };
          arrdata.push(obj)
        }
        Service.goods().recsortGoods(arrdata).then(response => {
          if (response.errorCode == 0) {
            this.getRecList();
          } else {
            this.$message.error(response.message)
          }
        }, err => {
        });
      },
      cancleRec(item) {
        this.$confirm('确认取消推荐吗？该商品将在商城首页下架！', '取消推荐?', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          Store.commit("setIsLoading", true);
          Service.goods().deleterecGoods({
            goodsId: item.id,
          }).then(response => {
            Store.commit("setIsLoading", false);
            if (response.errorCode == 0) {
              this.$message.success('操作成功');
              this.getRecList()
            } else {
              this.$message.error(response.message);
              if (response.errorCode == 5001) {
                this.$router.push({"path": '/'})
              }
            }
          }, err => {
          });
        }).catch(() => {
        });
      },
      getbackData(str) {
        if (str == 'sure') {
          this.isRecommend = false;
          this.getRecList();
        }
        if (str == 'cancle') {
          this.isRecommend = false;
          this.getRecList();
        }
      },
      enddateChange(val) {
        if (val) {
          this.startDate = this.timetrans(val[0]);
          this.endDate = this.timetrans(val[1])
          console.log(val[1])
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
      getRecList() {
        var endDate = '', startDate = '';
        if (this.endDate || this.startDate) {
          endDate = Date.parse(new Date(this.endDate));
          startDate = Date.parse(new Date(this.startDate));
        } else {
          endDate = this.endDate;
          startDate = this.startDate;
        }
        Service.goods().getrecGoods({
          "channelId": 1,
          "endDate": endDate,
          "name": this.name,
          "startDate": startDate
        }).then(response => {
          if (response.errorCode == 0) {
            if (response.data.length == 0) {
              this.noData = false;
            } else {
              this.noData = true;
              this.$nextTick(() => {
                this.tableData = response.data;
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

