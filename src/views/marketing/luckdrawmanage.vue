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
                text-align: left;
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
</style>
<template>
  <div class="general">
    <KlTop></KlTop>
    <div class="salecustomercontent contaner">
      <Aside></Aside>
      <div class="content">
        <div class="contanternews">
          <div class="dataGeneral backWhite" v-show="flashSaleView">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
              <el-menu-item index="0">全部</el-menu-item>
              <el-menu-item index="1">未开始</el-menu-item>
              <el-menu-item index="2">进行中</el-menu-item>
              <el-menu-item index="3">已结束</el-menu-item>
              <el-menu-item index="4">已失效</el-menu-item>
            </el-menu>
          </div>
          <div class="dataGeneral bannerTable">
            <div class="itemscenter">
              <div class="borderButton cursor" v-show="flashSaleAdd" @click="addCommodity()">新建抽奖活动</div>
            </div>
            <table v-if="noData&&flashSaleView" class="table">
              <tr>
                <th v-for="item in sortDatas" :key="item.name">
                  {{item.name}}
                </th>
              </tr>
              <tr v-for="(item,index) in tableData" :key="item.id" :inde="index">
                <td>
                  {{item.name}}
                </td>
                <td>
                  {{timetrans(item.startTime)}} 至 <br>{{timetrans(item.endTime)}}
                </td>
                <td>
                  <span v-if="item.status == 1">未开始</span>
                  <span v-if="item.status == 2">进行中</span>
                  <span v-if="item.status == 3">已结束</span>
                  <span v-if="item.status == 4">已失效</span>
                </td>
                <td>
                  <span class="color2087 cursor fontWeight" v-show="flashSaleCopy" @click="goparticipantsNums(item.id)">查看</span>
                </td>
                <!-- <td>
                    <div class="color2087 cursor fontWeight"  @click="daochu(item.id)">导出</div>
                </td> -->
                <td>
                  {{item.prizedNums}}
                </td>
                <td>
                  <span class="color2087 font12 cursor fontWeight copyButton" v-if="item.type == 1" :data-clipboard-text="httpurl+'/'+item.id"
                        @click="copyItem()">复制链接</span>
                  <span class="color2087 font12 cursor fontWeight copyButton" v-if="item.type == 2" :data-clipboard-text="httpurl2+'/'+item.id"
                        @click="copyItem()">复制链接</span>
                  <span class="line"></span>
                  <span class="color2087 font12 cursor fontWeight" v-if="item.status != 2 || item.status != 4"
                        v-show="flashSaleUpdate" @click="goDetail(item.id)">编辑</span>
                  <span class="line" v-if="item.status != 2 || item.status != 4" v-show="flashSaleUpdate"></span>
                  <span class="color2087 font12 cursor fontWeight" @click="undercarriage(item.id)"
                        v-if="(item.status != 4)" v-show="flashSaleInvalid">使失效</span>
                  <span class="line" v-if="(item.status != 4)" v-show="flashSaleInvalid"></span>
                  <span class="color2087 font12 cursor fontWeight" v-show="flashSaleInvalid"
                        @click="enableGoods(item.id)" v-if="(item.status == 4)">使生效</span>
                  <span class="line" v-if="(item.status == 4)" v-show="flashSaleInvalid"></span>
                  <span class="color2087 font12 cursor fontWeight" v-show="flashSaleCopy"
                        @click="copyGoods(item.id)">复制</span>
                  <span class="line" v-show="flashSaleCopy"></span>
                  <span class="color2087 font12  cursor fontWeight" v-show="flashSaleDelete"
                        @click="delectCommodity(item.id)">删除</span>
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
        page: 1,
        size: 10,
        total: 0,
        showhelprules: false,
        httpurl: '',
        httpurl2: '',
        activeIndex: '0',
        orderField: 'saleStartDate',
        orderType: 'desc',
        sortDatas: [
          {orderType: '', name: '活动名称', showBlue: false, orderField: ''},
          {orderType: '', name: '有效时间', showBlue: false, orderField: ''},
          {orderType: '', name: '活动状态', showBlue: false, orderField: ''},
          {orderType: '', name: '参与人数', showBlue: false, orderField: ''},
          {orderType: '', name: '已发放奖品', showBlue: true, orderField: ''},
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
        flashSaleView: false,
        flashSaleAdd: false,
        flashSaleUpdate: false,
        flashSaleDelete: false,
        flashSaleInvalid: false,
        flashSaleCopy: false,
        flashSalequeryGoods: false,
        href: '',
      };
    },
    created() {
      this.userInfo = JSON.parse(localStorage.getItem('user'));
      this.flashSaleView = this.havePermissions('flashSale:view')
      this.flashSaleAdd = this.havePermissions('flashSale:add')
      this.flashSaleUpdate = this.havePermissions('flashSale:update')
      this.flashSaleDelete = this.havePermissions('flashSale:delete')
      this.flashSaleInvalid = this.havePermissions('flashSale:invalid')
      this.flashSaleCopy = this.havePermissions('flashSale:copy')
      this.flashSalequeryGoods = this.havePermissions('flashSale:queryGoods')
      if (this.userInfo) {
      }

    },
    watch: {},
    mounted() {
      if (Global.env == 'dev' || Global.env == 'test') {
        this.httpurl = 'https://testhealthmall.ifxj.com/welfare/ninegrid/new';
        this.httpurl2 = 'https://testhealthmall.ifxj.com/welfare/happyaround/new'
      } else {
        this.httpurl = 'https://healthmall.ifxj.com/welfare/ninegrid/new';
        this.httpurl2 = 'https://healthmall.ifxj.com/welfare/happyaround/new'
      }
      if(this.flashSaleView){
        this.getcommodityData('');//获取商品列表
      }
    },
    methods: {
      goparticipantsNums(id){
         this.$router.push({name: 'luckdrawparticipants', query: {id: id}})
      },
      Decode(arr) {
      var bstr = atob(arr), n = bstr.length, u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new Blob([u8arr], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
      },
      daochu(id) {
        Service.bigTurntable().daochu({},id).then(response => {
          if (response.errorCode == 0) {
            var blob = this.Decode(response.data);
            if (window.URL.createObjectURL(blob).indexOf(location.host) < 0) {//ie不支持
              this.href = window.navigator.msSaveOrOpenBlob(blob, '中奖表格.xlsx');
            } else {
              this.href = URL.createObjectURL(blob);
            }
            this.downloadtable(this.href);
          } else {
            this.$message.error(response.message)
          }
        }, err => {
        });
      },
      downloadtable(blobUrl) {
        const a = document.createElement('a');
        a.style.display = 'none';
        a.download = '中奖表格.xlsx';
        a.href = blobUrl;
        a.click();
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
        Service.bigTurntable().copybigTurntable({}, id).then(response => {
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
        Service.bigTurntable().sortactivity({}, str).then(response => {
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
      showflashSale(id, isHomepageShow) {
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
          Service.bigTurntable().showflashSale({}, id).then(response => {
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
          Service.bigTurntable().invalidbigTurntable({}, id).then(response => {
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
          Service.bigTurntable().invalidbigTurntable({}, id).then(response => {
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
          Service.bigTurntable().deletebigTurntable({}, id).then(response => {
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
        this.$router.push({name: 'addluckdraw'})
      },
      goDetail(id) {
        this.$router.push({name: 'addluckdraw', query: {id: id}})
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
        Service.bigTurntable().querybigTurntable({
          size: this.size,
          page: this.page,
          status: this.activeIndex == 0 ? '' : this.activeIndex,
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

