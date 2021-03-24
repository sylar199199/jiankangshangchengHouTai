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

          .addButton {
            margin: 0 20px;
          }

          .noData {
            width: 100%;
            text-align: center;
            margin-top: 54px;
            color: #929292;
            font-size: 12px;

            .nodataImg {
              height: 78px;
              width: 78px;
              margin-bottom: 16px;
            }

            .linkText {
              display: block;
              color: #929292;

              .goHome {
                color: #45b8c8;
              }
            }
          }

          .borderButton {
            margin: 0 20px;
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
                padding: 15px 8px;

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
                max-width: 180px;
                text-align: left;
              }

              td:nth-of-type(3) {
                text-align: center;
                justify-content: center;
                align-items: center;

                .iconbianji {
                  display: inline-block;
                  vertical-align: middle;
                  font-size: 20px;
                  margin-left: 4px;
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

  .dialogone::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 0;
    vertical-align: middle;
  }

  .dialogone {
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
      width: 460px;
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

      .messageHeader {
        text-align: center;
        position: relative;
        padding: 15px 15px 0px;
        color: #000;

        .messagetitle {
        }
      }

      .messageContent {
        position: relative;
        padding: 20px 30px;
        color: #606266;
        font-size: 14px;

        .messagemessage {
          margin-bottom: 12px;

          .inputBox {
            border: 1px solid #e5e5e5;
            height: 30px;
            line-height: 30px;
            text-indent: 10px;
            width: 300px;
          }
        }
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
                <span class="searchLable colorGrey font12">视频名称 </span>
                <input type="text" v-model="name" class="serchInput font12 colorblack" placeholder="视频名称"/>
              </div>
              <div class="searchBox flex">
                <span class="searchLable searchName colorGrey font12">视频分类</span>
                <el-select v-model="categoryId" placeholder="">
                  <el-option
                    v-for="item in categoryoption"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id">
                  </el-option>
                </el-select>
              </div>
              <div class="searchBox flex">
                <span class="searchLable searchName colorGrey font12">上架状态</span>
                <el-select v-model="statiusid" placeholder="">
                  <el-option
                    v-for="item in statiusOption"
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

              <div class="bacButton cursor" @click="getvideolist('search')" v-show="videoView">查询</div>
            </div>

          </div>
          <div class="dataGeneral bannerTable">
            <div class="borderButton  addButton cursor" @click="goeditor('')" v-show="videoadd">新增视频</div>
            <table v-if="noData" class="table" v-show="videoView">
              <tr>
                <th v-for="item in sortDatas">
                  {{item.name}}
                </th>
              </tr>
              <tr v-for="(item,index) in tableData">
                <td>
                  {{item.id}}
                </td>
                <td>
                  {{item.title}}
                </td>
                <td class="flex">
                  <span style="width: 95px;" v-if="!item.showTitle">{{resetcategory(item.categoryId)}}</span>
                  <div v-if="item.showTitle" style="width: 95px;text-aligin: center;">
                    <el-select style="text-aligin: center;" v-model="item.categoryId" placeholder=""
                               @blur="bluritem(item)" @focus="focusitem(item)" @change='blureselect(item)'>
                      <el-option
                        v-for="ite in categorydata"
                        :key="ite.id"
                        :label="ite.name"
                        :value="ite.id">
                      </el-option>
                    </el-select>
                  </div>
                  <i class="iconfont iconbianji color2087 font14 cursor" v-show="videoupdate" @click="openitem(item)"></i>
                </td>
                <td>
                  {{item.click}}
                </td>
                <td>
                  {{timetrans(item.createDate)}}
                </td>
                <td>
                  <span v-if="item.status == 0">上架中</span>
                  <span v-if="item.status == 1">已下架</span>
                </td>
                <td>
                  <span class="color2087 font12 cursor" v-if="item.topFlag && item.status == 0"
                        @click="cancleTop(item.id)" v-show="videooperate">取消置顶</span>
                  <span class="color2087 font12 cursor" v-if="!item.topFlag && item.status == 0"
                        @click="goTop(item.id)" v-show="videooperate">置顶</span>
                  <span class="line" v-if="item.status == 0"></span>
                  <span class="color2087 font12 cursor" @click="goeditor(item.id)" v-show="videoupdate">编辑</span>
                  <span class="line"></span>
                  <span class="color2087 font12 cursor" v-if="item.status == 0" @click="offshelf(item.id)" v-show="videooperate">下架</span>
                  <span class="color2087 font12 cursor" v-if="item.status == 1" @click="onshelf(item.id)" v-show="videooperate">上架</span>
                  <span class="line"></span>
                  <span class="color2087 font12 cursor" @click="deleteVideo(item.id)" v-show="videodelete">删除</span>
                </td>
              </tr>
            </table>
            <div v-if="!noData" class="noData">
              <img class="nodataImg" src="../../assets/images/nodatalist.png"/>
              <p>暂无数据~</p>
            </div>
            <div class="block" v-if="noData" v-show="videoView">
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
      </div>
    </div>
    <div class="dialogone">
      <div class="messge">
        <div class="messageHeader">
          <div class="messagetitle">
            <span>请录入发货物流信息</span>
          </div>
        </div>
        <div class="messageContent">
          <div class="messagemessage adressBox messagemessageone">
            <span class="lableText colorblack font12">物流公司</span>
            <input type="text" @change="changeValue('expressName','')" v-model="express.expressName"
                   class="inputBox marginLeft10 colorblack font12" placeholder="物流公司"/>

          </div>
          <div class="messagemessage">
            <span class="lableText colorblack font12">物流单号</span>
            <input type="text" @change="changeValue('expressNo','')" v-model="express.expressNo"
                   class="inputBox marginLeft10 colorblack font12" placeholder="物流单号"/>
          </div>
        </div>
        <div class="messagebtns">
          <div class="button borderButton copyButton" @click="closeDiologone()">
            取消
          </div>
          <div class="button bacButton" @click="shipGoods()">
            确认
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
        categoryoption: [],
        categorydata: [],
        categoryId: '',
        name: '',
        statiusOption: [
          {name: '全部', id: ''}, {name: '上架中', id: 0}, {name: '已下架', id: 1}
        ],
        statiusid: '',

        orderId: '',
        express: {
          expressName: "",
          expressNo: ''
        },
        sortDatas: [
          {orderType: '', name: '编号', showBlue: false, orderField: ''},
          {orderType: '', name: '标题', showBlue: false, orderField: ''},
          {orderType: '', name: '分类', showBlue: false, orderField: ''},
          {orderType: '', name: '总浏览量', showBlue: false, orderField: ''},
          {orderType: '', name: '创建时间', showBlue: false, orderField: ''},
          {orderType: '', name: '状态', showBlue: true, orderField: ''},
          {orderType: '', name: '操作', showBlue: false, orderField: ''}
        ],
        endDate: "",
        startDate: "",
        goodsName: '',
        status: '',
        afsStatus: '',
        total: 0,
        size: 10,
        page: 1,
        insuranceDate: '',
        tableData: [],
        noData: true,
        statusTitle: "",

        videoView:false,
        videoadd:false,
        videoupdate:false,
        videodelete:false,
        videooperate: false,
      };
    },
    created() {
      this.videoView = this.havePermissions('video:view')
      this.videoadd = this.havePermissions('video:add')
      this.videoupdate = this.havePermissions('video:update')
      this.videooperate = this.havePermissions('video:operate')
      this.videodelete = this.havePermissions('video:delete')
    },
    computed: {},
    watch: {},
    mounted() {
      if(this.videoView){
        this.getcategory()
      }
    },
    methods: {
      openitem(item) {
        item.showTitle = true;
        this.focusitem(item)
      },
      bluritem(item) {
        // item.showTitle = false;
        //  this.$forceUpdate();
        console.log(item.categoryId)
        console.log(item.showTitle)
      },
      focusitem(item) {
        var n = 0;
        for (let i in this.categorydata) {
          if (item.categoryId == this.categorydata[i].id) {
            n++
          }
        }
        this.$nextTick(() => {
          if (n == 0) {
            item.categoryId = '';
          }
        })
        this.$forceUpdate();

      },
      cancleTop(id) {
        Service.video().ctopVideo({}, id).then(response => {
          if (response.errorCode == 0) {
            this.$message.success(response.message);
            this.getvideolist('');//获取视频列表
          } else {
            this.$message.error(response.message)
          }
        }, err => {
        });
      },
      goTop(id) {
        Service.video().topVideo({}, id).then(response => {
          if (response.errorCode == 0) {
            this.$message.success(response.message);
            this.getvideolist('');//获取视频列表
          } else {
            this.$message.error(response.message)
          }
        }, err => {
        });
      },
      goeditor(id) {
        if (id) {
          this.$router.push({'name': 'editorVideo', query: {id: id}})
        } else {
          this.$router.push({'name': 'editorVideo'})
        }
      },
      offshelf(id) {
        this.$confirm('确认下架?', '', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          Service.video().offshelfVideo({}, id).then(response => {
            if (response.errorCode == 0) {
              this.$message({
                type: 'success',
                message: '下架成功!'
              });
              this.getvideolist('');
            } else {
              this.$message.error(response.message)
            }
          }, err => {
          });
        }).catch(() => {

        });
      },
      onshelf(id) {
        Service.video().onshelfVideo({}, id).then(response => {
          if (response.errorCode == 0) {
            this.$message({
              type: 'success',
              message: '已上架!'
            });
            this.getvideolist('');//获取视频列表
          } else {
            this.$message.error(response.message)
          }
        }, err => {
        });
      },
      deleteVideo(id) {
        this.$confirm('确认删除?', '', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          Service.video().deleteVideo({}, id).then(response => {
            if (response.errorCode == 0) {
              this.$message({
                type: 'success',
                message: '删除成功!'
              });
              this.getvideolist('');//获取视频列表
            } else {
              this.$message.error(response.message)
            }

          }, err => {
          });
        }).catch(() => {

        });
      },
      blureselect(item) {
        item.showTitle = false;
        console.log(item)
        Service.video().eidtorvideocategory({
          categoryId: item.categoryId,
          videoId: item.id
        }).then(response => {
          if (response.errorCode == 0) {
            this.getvideolist('');//获取订单列表
          } else {
            this.$message.error(response.message)
          }
        }, err => {
        });
        this.$forceUpdate();
      },
      resetcategory(id) {
        var title = '';
        for (let i in this.categorydata) {
          if (id == this.categorydata[i].id) {
            title = this.categorydata[i].name;
            return title
          }
        }
        this.$nextTick(() => {
          if (!title) {
            return '';
          }
        })
      },
      getcategory() {
        Service.video().getcategory({}).then(response => {
          if (response.errorCode == 0) {
            var obj = {'name': '全部', id: ''};
            var data = response.data;
            this.categorydata = data.slice();
            this.categoryoption = data;
            this.categoryoption.unshift(obj);
            this.getvideolist('');//获取订单列表
          } else {
            this.$message.error(response.message)
          }
        }, err => {
        });
      },
      shipGoods() {
        if (!this.changeValue('expressName', 'submit')) {
          return;
        }
        if (!this.changeValue('expressNo', 'submit')) {
          return;
        }
        Service.order().orderShip({
          expressName: this.express.expressName,
          expressNo: this.express.expressNo,
          orderId: this.orderId
        }).then(response => {
          if (response.errorCode == 0) {
            this.$message.success('发货成功');
            this.getvideolist('')
            $(".dialogone").css({'display': 'none'})
          } else {
            this.$message.error(response.message)
          }

        }, err => {
        });
      },
      changeValue(name, type) {
        var on = true;
        this.express[name] = this.express[name].replace(/(^\s*)|(\s*$)/g, "");
        if (name == 'expressName') {
          if (this.express[name].length > 50 || this.express[name].length == 0) {
            this.$message.error('请输入正确的物流公司');
            on = false;
            return;
          }
        }
        if (name == 'expressNo') {
          var reg = /^[a-zA-Z0-9]+$/;
          this.express[name] = this.express[name].replace(/(^\s*)|(\s*$)/g, "");
          if (this.express[name].length > 50 || this.express[name].length == 0) {
            this.$message.error('请输入正确的物流单号');
            on = false;
            return;
          }
          if (!(reg.test(this.express[name]))) {
            this.$message.error('请输入正确的物流单号');
            on = false;
            return;
          }
        }
        if (type == 'submit') {
          return on;
        }
      },

      ship(id) {
        this.orderId = id;
        $(".dialogone").css({'display': 'block'})
      },

      closeDiologone() {
        this.orderId = '';
        $(".dialogone").css({"display": "none"})
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
      undercarriage(id) {
        $(".dialogone").css({'display': 'block'})
      },
      goDetail(id) {
        this.$router.push({name: 'orderDetail', query: {id: id}})
      },
      handleSizeChange(val) {
        this.size = val;
        this.getvideolist('')
      },
      handleCurrentChange(val) {
        this.page = val;
        this.getvideolist('')
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
      getvideolist(str) {
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
        Service.video().getvideoList({
          "categoryId": this.categoryId,
          "endTime": endDate,
          "page": this.page,
          "size": this.size,
          "startTime": startDate,
          title: this.name,
          status: this.statiusid
        }).then(response => {
          if (response.errorCode == 0) {
            if (response.data.records.length == 0) {
              this.noData = false;
            } else {
              this.noData = true;
              this.total = response.data.total;
              for (let i in response.data.records) {
                response.data.records[i].showTitle = false;
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

