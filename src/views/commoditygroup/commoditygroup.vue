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
                padding: 20px 0;

                .line {
                  display: inline-block;
                  height: 8px;
                  width: 3px;
                  background: #eee;
                  margin: 0 14px;
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

          .block {
            text-align: right;
            margin-top: 35px;
            margin-right: 20px;
          }
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

          .lableText {
            display: inline-block;
            width: 80px;
            flex-shrink: 0;
          }

          .datebox {
            padding: 3px 5px;
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
          <div class="dataGeneral bannerTable">
            <div class="flex">
              <div class="borderButton cursor" v-show="goodsCategoryAdd" @click="openshowdialogone()">添加分组</div>
              <div class="borderButton cursor" v-show="goodsCategoryAdd" @click="selectedshowdialogone()">精选排序</div>
            </div>

            <table v-if="noData&&goodsCategoryView" class="table" >
              <tr>
                <th>分组名称</th>
                <th>首页精选</th>
                <th>商品数</th>
                <th>创建时间</th>
                <th>操作</th>
              </tr>
              <tr v-for="item in tableData" :key="item.id">
                <td>
                  {{item.name}}
                </td>
                <td>
                  <span v-if="item.isSelection">是</span>
                  <span v-if="!item.isSelection">否</span>
                </td>
                <td>
                  {{item.goodsNums}}
                </td>
                <td v-if="item.createDate">{{timetrans(item.createDate)}}</td>
                <td v-if="!item.createDate"></td>
                <td>
                  <span class="color2087 font12 copyButton cursor" :data-clipboard-text="httpurl+item.id"
                        v-show="goodsCategoryCopy"
                        @click="resetAfter()">复制链接</span>
                  <span class="line" v-show="goodsCategoryCopy"></span>
                  <span class="color2087 font12 cursor" @click="opencommodity(item)" v-show="linkGoods">关联商品</span>
                  <span class="line" v-show="linkGoods"></span>
                  <span class="color2087 font12 cursor" v-if="item.isSelection" v-show="goodsCategorSelection" @click="setselected(item)">取消精选</span>
                  <span class="color2087 font12 cursor" v-if="!item.isSelection" v-show="goodsCategorSelection" @click="setselected(item)">设为精选</span>
                  <span class="line" v-show="goodsCategorSelection"></span>
                  <span class="color2087 font12 cursor" v-show="goodsCategoryDelete" @click="deleteItem(item.id)">删除</span>
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
      </div>
    </div>
    <div class="dialogone" v-if="showdialogone">
      <div class="messge">
        <div class="messageHeader">
          <div class="messagetitle">
            <span>新建商品分组</span>
          </div>
        </div>
        <div class="messageContent">
          <div class="messagemessage adressBox messagemessageone">
            <span class="lableText colorblack font12">分组名称</span>
            <input type="text" @change="changeValue('name','')" v-model="name" class="inputBox colorblack font12"
                   placeholder="分组名称"/>
          </div>
          <div class="messagemessage  flex">
            <span class="lableText colorblack font12">新人特权限制</span>
            <div class="radioBox marginLeft10">
              <i class="iconfont iconxuanzhong color2087 font20 cursor cursor" v-if="isNewPrivilege == 1"></i>
              <i class="iconfont iconxuanze  font20 cursor" v-if="isNewPrivilege == 0" @click="isNewPrivilege = 1"></i>
              <span class="typeText colorblack font12">限制</span>
              <i class="iconfont iconxuanzhong color2087 font20 cursor marginLeft10" v-if="isNewPrivilege == 0"></i>
              <i class="iconfont iconxuanze  font20 cursor marginLeft10" v-if="isNewPrivilege == 1"
                 @click="isNewPrivilege = 0"></i>
              <span class="typeText colorblack font12">不限制</span>
            </div>
          </div>
          <div class="messagemessage  flex itemscenter" v-if="isNewPrivilege == 1">
            <span class="lableText colorblack font12">注册时间</span>
            <el-date-picker
              class='datebox'
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
        </div>
        <div class="messagebtns">
          <div class="button borderButton copyButton" @click="closeDiologone()">
            取消
          </div>
          <div class="button bacButton" @click="addGroup()">
            确认
          </div>
        </div>
      </div>
    </div>
    <addcommodity v-if="isRecommend" :groupId="groupId" :limitgoodsdata="goodsData" @selectGuige="getgoodsdata" :source="source"
                  @clickbanner="getbackData"></addcommodity>
    <selectedcommodity v-if="selectedshow"  @closeShowselect="closeShowselect"></selectedcommodity>
  </div>
</template>

<script>
  import Aside from '@/components/aside'
  import Filter from '@/common/filter'
  import Service from '@/common/service'
  import Store from '@/vuex/index'
  import KlTop from '@/components/klTop'
  import Global from '@/common/global'
  import addcommodity from '@/components/addcommodity'
  import selectedcommodity from '@/components/selectedcommodity'

  export default {
    name: "salecustomer",
    components: {
      Aside,
      KlTop,
      addcommodity,
      selectedcommodity
    },
    data() {
      return {
        isNewPrivilege: 0,
        goodsData: [],
        source: 'commoditygroup',
        total: 0,
        page: 1,
        size: 10,
        groupId: '',
        showdialogone: false,
        selectedshow: false,
        isRecommend: false,
        insuranceDate: [],
        endDate: '',
        startDate: '',
        tableData: [],
        noData: true,
        userInfo: '',
        name: '',
        httpurl: '',
        goodsCategoryView: false,
        goodsCategoryAdd: false,
        goodsCategoryUpdate: false,
        goodsCategoryDelete: false,
        goodsCategoryCopy: false,
        goodsCategorSelection: false,
        linkGoods: false,
      };
    },
    created() {
      if (Global.env == 'dev' || Global.env == 'test') {
        this.httpurl = 'https://testhealthmall.ifxj.com/product/goodsclassification/'
      } else {
        this.httpurl = 'https://healthmall.ifxj.com/product/goodsclassification/'
      }
      this.userInfo = JSON.parse(localStorage.getItem('user'));
      this.goodsCategoryView = this.havePermissions('goodsCategory:view')
      this.goodsCategoryAdd = this.havePermissions('goodsCategory:add')
      this.goodsCategoryUpdate = this.havePermissions('goodsCategory:update')
      this.goodsCategoryDelete = this.havePermissions('goodsCategory:delete')
      this.goodsCategoryCopy = this.havePermissions('goodsCategory:copy')
      this.goodsCategorSelection = this.havePermissions('goodsCategory:selection')
      this.linkGoods = this.havePermissions('goodsCategory:linkGoods')
      console.log('linkGoods', this.linkGoods)
    },
    watch: {},
    mounted() {
      if(this.goodsCategoryView){
        this.getRecList();
      }
    },
    methods: {
      // 获得选择的商品
      getgoodsdata(obj) {
        var goodsid = '';
        for (var i = 0; i < obj.length; i++) {
          goodsid += obj[i].id + ',';
        }
        goodsid = goodsid.substring(0, goodsid.length - 1);
        this.linkgoods(goodsid)
      },
      closeShowselect(){
        this.selectedshow = false
      },
      linkgoods(goodsid) {
        var str = this.groupId + '?goodsIds=' + goodsid
        Service.goodscategory().linkgoods({}, str).then(response => {
          if (response.errorCode == 0) {
            this.$message.success('关联成功');
            this.getRecList('')
            $(".dialogone").css({'display': 'none'})
          } else {
            this.$message.error(response.message)
          }

        }, err => {
        });
      },
      openshowdialogone() {
        this.showdialogone = true;
      },
      selectedshowdialogone() {
        this.selectedshow = true;
      },
      handleSizeChange(val) {
        this.size = val;
        this.getRecList()
      },
      handleCurrentChange(val) {
        this.page = val;
        this.getRecList()
      },
      opencommodity(item) {
        //  this.goodsData =
        this.gethaslinkgoods(item.id)
        this.groupId = item.id;
      },
      gethaslinkgoods(id) {
        this.goodsData = [];
        Service.goodscategory().gethaslinkgoods({}, id).then(response => {
          if (response.errorCode == 0) {
            if (response.data) {
              for (let i = 0; i < response.data.length; i++) {
                var obj = {
                  id: response.data[i].goodsId
                }
                this.goodsData.push(obj)
              }
              console.log(this.goodsData)
              this.isRecommend = true;
            }
          } else {
            this.$message.error(response.message)
          }

        }, err => {
        });
      },
      getbackData(str) {
        if (str == 'sure') {
          this.isRecommend = false;
        }
        if (str == 'cancle') {
          this.isRecommend = false;
        }
      },
      closeDiologone() {
        this.showdialogone = false;
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
      addGroup() {
        if (!this.changeValue('name', 'submit')) {
          return;
        }
        var endDate = '', startDate = '';
        if (this.endDate || this.startDate) {
          endDate = Date.parse(new Date(this.endDate.replace(/-/g, "/")));
          startDate = Date.parse(new Date(this.startDate.replace(/-/g, "/")));
        } else {
          endDate = this.endDate;
          startDate = this.startDate;
        }
        if (this.isNewPrivilege == 1) {
          if (!this.endDate || !this.startDate) {
            this.$message.error('请选择新人注册时间');
            return
          }
          endDate = Date.parse(new Date(this.endDate.replace(/-/g, "/")));
          startDate = Date.parse(new Date(this.startDate.replace(/-/g, "/")));
        }
        Service.goodscategory().addcategory({
          name: this.name,
          registerStartTime: startDate,
          registerEndTime: endDate,
          maxSaleNums: 1,
          isNewPrivilege: this.isNewPrivilege
        }).then(response => {
          if (response.errorCode == 0) {
            this.$message.success('添加分组成功');
            this.getRecList()
            this.showdialogone = false;
            this.isNewPrivilege = 0;
            this.startDate = '';
            this.endDate = '';
            this.insuranceDate = [];
            this.name = ''
          } else {
            this.$message.error(response.message)
          }

        }, err => {
        });
      },
      changeValue(name, type) {
        var on = true;
        this.name = this.name.replace(/(^\s*)|(\s*$)/g, "");
        if (name == 'name') {
          if (this.name.length > 50 || name.length == 0) {
            this.$message.error('请输入正确的分组名称');
            on = false;
            return;
          }
        }
        if (type == 'submit') {
          return on;
        }
      },
      resetAfter() {
        var clipboard = new this.Clipboard('.copyButton');
        clipboard.on('success', e => {
          this.$message.success('复制成功');
          // 释放内存
          clipboard.destroy();
          $(".dialog").css({'display': 'none'})
        });
        clipboard.on('error', e => {
          // 不支持复制
          console.log('该浏览器不支持自动复制');
          // 释放内存
          clipboard.destroy()
        })
      },
      setselected(item) {
        var str = '';
        if (item.selection) {
          str = '确认取消精选吗？'
        } else {
          str = '确认设为精选吗？'
        }
        this.$confirm(str, '', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          Store.commit("setIsLoading", true);
          Service.goodscategory().isselection({}, item.id).then(response => {
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
      deleteItem(id) {
        this.$confirm('确认删除该分组？', '', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          Store.commit("setIsLoading", true);
          Service.goodscategory().deletecategory({}, id).then(response => {
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
        Service.goodscategory().querygoodscategory({
          "page": this.page,
          "size": this.size
        }).then(response => {
          if (response.errorCode == 0) {
            if (response.data.records.length == 0) {
              this.noData = false;
            } else {
              this.total = response.data.total;
              var data = response.data.records;
              this.noData = true;
              for (let i in data) {
                data[i].urlLink = 'hhhhh' + data[i].id
              }
              this.$nextTick(() => {
                this.tableData = data;
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

