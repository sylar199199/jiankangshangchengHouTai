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
          padding: 0px 20px 10px 20px;

          .searchContent {
            flex-wrap: wrap;
            position: relative;
            margin-top: 20px;

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
          /*margin-top: 15px;*/
          padding: 10px 0 100px;

          .borderButton {
            margin: 0 10px 0 20px;
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

              th:nth-child(1) {
                text-align: left;
                padding-left: 16px
              }

              th:nth-child(2) {
                text-align: left;
              }

              td:nth-child(2) {
                text-align: center;
              }

              td {
                text-align: center;
                padding: 20px 6px;

                .line {
                  display: inline-block;
                  height: 8px;
                  width: 3px;
                  background: #eee;
                  margin: 0 10px;
                }

              }

              td:nth-of-type(1) {
                text-align: left;
                padding-left: 16px
              }

              td:nth-of-type(3) {
                text-align: center;
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

  .showPreview {
    width: 90%;
    background: #fff;
    height: 500px;
    overflow-y: auto;
    margin: 0 auto;

    .firstImgUrl {
      width: 100%;
      height: auto;
    }

    .secondImgUrl {
      width: 50%;
      flex: 1;
      flex-shrink: 1;
    }

    .thirdImgUrl {
      width: 33%;
      flex: 1;
      flex-shrink: 1;
    }
  }
</style>
<template>
  <div class="general">
    <KlTop></KlTop>
    <div class="salecustomercontent contaner">
      <Aside></Aside>
      <el-dialog
        :title="name"
        :visible.sync="centerDialogVisible"
        width="30%"
        center>
        <div class="showPreview">
          <div v-for="ite in predata">
            <div v-if="ite.showType == 1">
              <img class="firstImgUrl" :src="ite.firstImgUrl">
            </div>
            <div v-if="ite.showType == 2" class="flex">
              <img class="secondImgUrl" :src="ite.firstImgUrl">
              <img class="secondImgUrl" :src="ite.secondImgUrl">
            </div>
            <div v-if="ite.showType == 3" class="flex">
              <img class="thirdImgUrl" :src="ite.firstImgUrl">
              <img class="thirdImgUrl" :src="ite.secondImgUrl">
              <img class="thirdImgUrl" :src="ite.thirdImgUrl">
            </div>
          </div>
        </div>
        <span slot="footer" class="dialog-footer">
                    <el-button @click="centerDialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="centerDialogVisible = false;name='';bigImg = ''">确 定</el-button>
                </span>
      </el-dialog>
      <div class="content">
        <div class="contanternews">
          <div class="dataGeneral bannerTable">
            <div class="itemscenter">
              <div class="borderButton cursor" v-show="h5Add" @click="addCommodity()">新建活动h5</div>
            </div>

            <table v-if="noData&&h5View" class="table">
              <tr>
                <th v-for="item in sortDatas">
                  {{item.name}}
                </th>
              </tr>
              <tr v-for="(item,index) in tableData" :key="item.id" :inde="index">
                <td>
                  {{item.name}}
                </td>
                <td>
                  {{timetrans(item.createDate)}}
                </td>

                <td>
                  {{item.visits}}
                </td>
                <td>
                  <span class="color2087 font12 cursor fontWeight copyButton" :data-clipboard-text="httpurl+'/'+item.id"
                        @click="copyItem()">复制链接</span>
                  <span class="line"></span>
                  <span class="color2087 font12 cursor fontWeight"
                        v-if="item.status == 1 || item.status == 2 || item.status == 4" v-show="h5Update"
                        @click="goDetail(item.id)">编辑</span>
                  <span class="colorGrey font12 cursor fontWeight" v-if="item.status == 3" v-show="h5Update">编辑</span>
                  <span class="line" v-show="h5Update"></span>
                  <span class="color2087 font12 cursor fontWeight" @click="showdata(item)">预览</span>

                  <span class="line"></span>
                  <span class="color2087 font12  cursor fontWeight" @click="delectCommodity(item.id)"
                        v-if="item.status == 1 || item.status == 2 || item.status == 4" v-show="h5Delete">删除</span>
                  <span class="colorGrey font12  cursor fontWeight"
                        v-if="item.status == 3" v-show="h5Delete">删除</span>
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
                layout="total,sizes,prev, pager, next,jumper"
                :total="total">
              </el-pagination>
            </div>
          </div>
        </div>
        <Helprules v-if="showhelprules" @clickbanner="getbackData"></Helprules>
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
  import Helprules from '@/components/helprules'

  export default {
    name: "salecustomer",
    components: {
      Aside,
      KlTop,
      Helprules
    },
    data() {
      return {
        centerDialogVisible: false,
        predata: [],
        page: 1,
        size: 10,
        total: 0,
        showhelprules: false,
        httpurl: '',
        activeIndex: '0',
        orderField: 'saleStartDate',
        orderType: 'desc',
        sortDatas: [
          {orderType: '', name: '活动名称', showBlue: false, orderField: ''},
          {orderType: '', name: '创建时间', showBlue: false, orderField: ''},
          {orderType: '', name: '访问次数', showBlue: false, orderField: ''},
          {orderType: '', name: '操作', showBlue: false, orderField: ''}
        ],

        endDate: "",
        name: "",
        startDate: "",
        commodyId: '',
        shelfStatusId: '',
        channelId: '',
        channelsOption: [],
        shelfStatus: [{name: '全部', id: ''}, {name: '在售中', id: '0'}, {name: '待上架', id: '1'}, {name: '已上架', id: '2'}],
        commodyType: [{name: '全部', id: ''}, {name: '电子卡券', id: '1'}, {name: '实物商品', id: '2'}],
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
        permissions: [],
        h5View: false,
        h5Add: false,
        h5Update: false,
        h5Delete: false,
      };
    },
    created() {
      this.userInfo = JSON.parse(localStorage.getItem('user'));
      this.h5View = this.havePermissions('h5:view')
      this.h5Add = this.havePermissions('h5:add')
      this.h5Update = this.havePermissions('h5:update')
      this.h5Delete = this.havePermissions('h5:delete')

    },
    watch: {},
    mounted() {
      if (Global.env == 'dev' || Global.env == 'test') {
        this.httpurl = 'https://testhealthmall.ifxj.com/product/new-activite'
      } else {
        this.httpurl = 'https://healthmall.ifxj.com/product/new-activite'
      }
      if (this.h5View) {
        this.getcommodityData('');//获取商品列表
      }

    },
    methods: {
      showdata(item) {
        this.centerDialogVisible = true;
        this.getcommoditydetail(item.id)
      },
      getcommoditydetail(id) {
        Service.activityh5().getactivityh5Detail({}, id).then(response => {
          if (response.errorCode == 0) {
            this.predata = response.data.shows;
          } else {
            this.$message.error(response.message)
          }
        }, err => {
        });

      },
      getbackData(str) {
        if (str == 'sure') {
          this.showhelprules = false;
        }
        if (str == 'cancle') {
          this.showhelprules = false;
        }
      },
      // 复制活动
      copyGoods(id) {
        this.$confirm('确定复制此活动?', '', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.copyactivity(id)
        }).catch(() => {
        });
      },
      copyactivity(id) {
        Service.activityh5().copyactivity({}, id).then(response => {
          if (response.errorCode == 0) {
            this.$message({
              type: 'success',
              message: '操作成功!'
            });
            this.getcommodityData('');//获取商品列表
          } else {
            this.$message.error(response.message)
          }

        }, err => {
        });
      },
      copyItem() {
        var clipboard = new this.Clipboard('.copyButton');
        clipboard.on('success', e => {
          this.$message.success('复制成功');
          // 释放内存
          clipboard.destroy();
          $(".dialog").css({'display': 'none'})
        });
        clipboard.on('error', e => {
          // 不支持复制
          // 释放内存
          clipboard.destroy()
        })
      },
      downSort(index, item) {//降序
        var firstId = this.tableData[index + 1].id;
        var secondId = this.tableData[index].id;
        this.tableData[index] = this.tableData[index + 1];
        this.tableData[index + 1] = item;
        this.sortRecData(firstId, secondId);
      },
      upSort(index, item) {//升序
        var secondId = this.tableData[index - 1].id;
        var firstId = this.tableData[index].id;
        this.tableData[index] = this.tableData[index - 1];
        this.tableData[index - 1] = item;

        this.sortRecData(firstId, secondId);
      },
      sortRecData(firstId, secondId) {
        var str = '?firstId=' + firstId + '&secondId=' + secondId;
        Service.activityh5().sortactivity({}, str).then(response => {
          if (response.errorCode == 0) {
            this.getcommodityData();
          } else {
            this.$message.error(response.message)
          }
        }, err => {
        });
      },
      handleSelect(key, keyPath) {
        this.activeIndex = key;
        this.getcommodityData('search')
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
      showactivityh5(id, isHomepageShow) {
        var str = ''
        if (isHomepageShow) {
          str = '是否取消显示在首页'
        } else {
          str = '是否显示在首页'
        }
        this.$confirm(str, '', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          Service.activityh5().showactivityh5({}, id).then(response => {
            if (response.errorCode == 0) {
              this.$message({
                type: 'success',
                message: '操作成功!'
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
      enableGoods(id) {
        this.$confirm('确认使活动生效?', '', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          Service.activityh5().invalidactivity({}, id).then(response => {
            if (response.errorCode == 0) {
              this.$message({
                type: 'success',
                message: '操作成功!'
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
        this.$confirm('确认使活动失效', '', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          Service.activityh5().invalidactivity({}, id).then(response => {
            if (response.errorCode == 0) {
              this.$message({
                type: 'success',
                message: '操作成功!'
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
        this.$confirm('活动删除请谨慎操作，确定删除?', '', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          Service.activityh5().deleteactivity({}, id).then(response => {
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
        this.$router.push({name: 'addactiveh5'})
      },
      goDetail(id) {
        this.$router.push({name: 'addactiveh5', query: {id: id}})
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
      getcommodityData(str) {
        if (str == 'search') {
          this.page = 1;
        }
        Service.activityh5().queryactivityh5({
          size: this.size,
          page: this.page,
          status: ''
        }).then(response => {
          if (response.errorCode == 0) {
            if (response.data.records.length == 0) {
              this.noData = false;
            } else {
              this.noData = true;
              this.total = response.data.total;
              for (var i = 0; i < response.data.records.length; i++) {
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

