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

              th:nth-child(3) {
                text-align: center;
              }

              td {
                text-align: center;
                padding: 8px;

                .undercarriageReason {
                  min-width: 120px;
                  position: absolute;
                  padding: 10px;
                  line-height: 20px;
                  background-color: #ffffff;
                  box-shadow: 0px 2px 24px 0px rgba(199, 199, 199, 0.51);
                  border-radius: 4px;
                  left: -44px;
                  top: -18px;
                }

                .line {
                  display: inline-block;
                  height: 8px;
                  width: 3px;
                  background: #eee;
                  margin: 0 10px;
                }

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
                  padding-left: 10px;

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
                text-align: center;

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
                <span class="searchLable colorGrey font12">权益名称 </span>
                <input type="text" v-model="name" class="serchInput font12 colorblack" placeholder="权益名称"/>
              </div>
              <div class="searchBox flex">
                <span class="searchLable searchName colorGrey font12">权益状态</span>
                <el-select v-model="shelfStatus" placeholder="">
                  <el-option
                    v-for="item in shelfStatusoption"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id">
                  </el-option>
                </el-select>
              </div>

              <div class="bacButton cursor" v-show="rightsView" @click="getcommodityData('search')">查询</div>
            </div>

          </div>
          <div class="dataGeneral bannerTable">
            <div class="borderButton cursor" @click="addCommodity()" v-show="rightsAdd">新增权益</div>
            <table v-if="noData" class="table" v-show="rightsView">
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
                  {{item.id}}
                </td>
                <td>
                  <div class="flex">
                    <img class="productImg" :src="item.imgUrl">
                    <div class="productBox">
                      <p class="colorblack font12 productText">{{item.name}}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <span v-if="(item.status == 0)">上架中</span>
                  <span v-if="item.status == 1">已下架</span>
                </td>
                <td>
                  <span class="color2087 font12 cursor" @click="goDetail(item.id)" v-show="rightsUpdate">编辑</span>
                  <span class="line" v-show="rightsUpdate"></span>
                  <span class="color2087 font12 cursor" @click="undercarriage(item.id)"
                        v-if="(item.status == 0)" v-show="rightsoffShelf">下架</span>
                  <span class="color2087 font12 cursor" @click="oncarriage(item.id)" v-if="(item.status == 1)" v-show="rightsonShelf">上架</span>
                  <span class="line"></span>
                  <span class="color2087 font12 cursor" v-show="rightsDelete" @click="delectCommodity(item.id)">删除</span>
                </td>
              </tr>
            </table>
            <div v-if="!noData" class="noData">
              <img class="nodataImg" src="../../assets/images/nodatalist.png"/>
              <p>暂无数据~</p>
            </div>
            <div class="block" v-if="noData">
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
        orderField: 'saleStartDate',
        orderType: 'desc',
        sortDatas: [
          {orderType: '', name: '编号', showBlue: false, orderField: ''},
          {orderType: '', name: '权益', showBlue: false, orderField: ''},
          {orderType: '', name: '状态', showBlue: false, orderField: ''},
          {orderType: '', name: '操作', showBlue: false, orderField: ''}
        ],
        endDate: "",
        name: "",
        startDate: "",
        type: '',
        total: 0,
        size: 10,
        page: 1,
        commodyId: '',
        shelfStatus: '',
        shelfStatusoption: [{name: '全部', id: ''}, {name: '下架', id: '1'}, {name: '已上架', id: '0'}],
        insuranceDate: '',
        tableData: [],
        noData: true,
        showOne: false,
        showTwo: false,
        showThree: false,
        showFour: false,
        dissipate: [],
        timer: null,
        username: '',
        userInfo: '',
        channelsOption: [],
        permissions: [],
        rightsView:false,
        rightsAdd:false,
        rightsUpdate:false,
        rightsDelete:false,
        rightsonShelf:false,
        rightsoffShelf:false,
        rightsServicetype:false,
      };
    },
    created() {
      this.userInfo = JSON.parse(localStorage.getItem('user'));
      this.rightsView = this.havePermissions('rights:view')
      this.rightsAdd = this.havePermissions('rights:add')
      this.rightsUpdate = this.havePermissions('rights:update')
      this.rightsDelete = this.havePermissions('rights:delete')
      this.rightsonShelf = this.havePermissions('rights:onShelf')
      this.rightsoffShelf = this.havePermissions('rights:offShelf')
      this.rightsServicetype = this.havePermissions('rights:servicetype')
    },
    watch: {},
    mounted() {
      if(this.havePermissions("getChannel:view")){
        this.getChannel();
      }
      if(this.rightsView){
        this.getcommodityData('');//获取列表
      }
    },
    methods: {
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
        this.getcommodityData('search')
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
      oncarriage(id) {
        this.$confirm('确认上架?', '', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          Service.rights().onshelfrights({}, id).then(response => {
            if (response.errorCode == 0) {
              this.$message({
                type: 'success',
                message: '上架成功!'
              });
              this.getcommodityData('');//获取商品列表
            } else {
              this.$message.error(response.message)
            }

          }, err => {
          });

        }).catch(() => {

        });
      },
      undercarriage(id) {
        this.$confirm('确认下架?', '', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          Service.rights().offshelfrights({}, id).then(response => {
            if (response.errorCode == 0) {
              this.$message({
                type: 'success',
                message: '下架成功!'
              });
              this.getcommodityData('');//获取商品列表
            } else {
              this.$message.error(response.message)
            }

          }, err => {
          });

        }).catch(() => {

        });
      },
      delectCommodity(id) {
        this.$confirm('权益删除请谨慎操作，确定删除?', '', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          Service.rights().deleterights({}, id).then(response => {
            if (response.errorCode == 0) {
              this.$message({
                type: 'success',
                message: '删除成功!'
              });
              this.getcommodityData('');//获取商品列表
            } else {
              this.$message.error(response.message)
            }

          }, err => {
          });
        }).catch(() => {

        });
      },

      addCommodity() {
        this.$router.push({name: 'editorlegalright'})
      },
      goDetail(id) {
        this.$router.push({name: 'editorlegalright', query: {id: id}})
      },
      handleSizeChange(val) {
        this.size = val;
        this.getcommodityData('')
      },
      handleCurrentChange(val) {
        this.page = val;
        this.getcommodityData('')
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
        ;
        getSeconds = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds();
        ;
        var newTime = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + getHours + ':' + getMinutes + ':' + getSeconds;
        return newTime
      },
      getChannel() {
        Service.channel().getChannel({}).then(response => {
          if (response.errorCode == 0) {
            var selectData = response.data;
            selectData.unshift({id: '', name: '全部'});
            ;
            this.channelsOption = response.data;
          } else {
            this.$message.error(response.message)
          }

        }, err => {
        });
      },
      getcommodityData(str) {
        if (str == 'search') {
          this.page = 1;
        }
        Service.rights().rightsquery({
          "name": this.name,
          "page": this.page,
          "size": this.size,
          "status": this.shelfStatus
        }).then(response => {
          if (response.errorCode == 0) {
            if (response.data.records.length == 0) {
              this.noData = false;
            } else {
              this.noData = true;
              this.total = response.data.total;
              for (let i in response.data.records) {
                response.data.records[i].isshowDes = false;
              }
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

