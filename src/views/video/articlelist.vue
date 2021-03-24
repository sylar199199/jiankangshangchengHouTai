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

            .searchbutton {
              position: absolute;
              right: 46px;
              bottom: 68px;
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
                  margin: 0 6px;
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
              td:nth-of-type(1) {
                min-width: 88px;
                max-width: 100px;
                text-align: center;
                word-break: break-all;
              }
              td:nth-of-type(2) {
                min-width: 90px;
                max-width: 90px;
                text-align: center;
                word-break: break-all;
              }

              td:nth-of-type(3) {
                text-align: left;
                min-width: 90px;
                max-width: 110px;
              }

              td:nth-of-type(4) {
                min-width: 80px;
                max-width: 80px;
                text-align: center;
              }

              td:nth-last-child(1) {
                min-width: 132px;
                max-width: 132px;
                text-align: center;
              }

              td:nth-of-type(5) {
                min-width: 80px;
                max-width: 80px;
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

  .fileBox {
    .applicaninfo {
      width: 120px;
      height: 40px;
      background-color: #f9f9f9;
      border-radius: 4px;
      text-align: center;
      position: relative;

      .imgBox {
        display: inline-block;
        width: 120px;
        height: 68px;

        .uploadtext {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 120px;
          height: 40px;
          color: #fff;
          text-align: center;
          background-color: #56ae97;
          border-radius: 20px;
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
             <div class="searchBox flex">
                <span class="searchLable searchName colorGrey font12">文章来源</span>
                 <input type="text" v-model="source" class="serchInput font12 colorblack" placeholder="文章来源"/>
              </div>
              <div class="searchBox flex">
                <span class="searchLable searchName colorGrey font12">文章状态</span>
                <el-select v-model="status" placeholder="">
                  <el-option
                    v-for="item in statusOption"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id">
                  </el-option>
                </el-select>
              </div>
              <div class="searchBox flex">
                <span class="searchLable searchName colorGrey font12">是否置顶</span>
                <el-select v-model="top" placeholder="">
                  <el-option
                    v-for="item in topoption"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id">
                  </el-option>
                </el-select>
              </div>
              <div class="searchBox">
                <span class="searchLable colorGrey font12">文章标题</span>
                <input type="text" v-model="title" class="serchInput font12 colorblack" placeholder="文章标题"/>
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
            
              <div class="searchBox flex">
                <span class="searchLable searchName colorGrey font12">标签</span>
                <el-select v-model="categoryId" placeholder="">
                  <el-option
                    v-for="item in payChannelOption"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id">
                  </el-option>
                </el-select>
              </div>
              <div class="searchBox flex">
                <div class="bacButton  cursor" v-show="articleView" @click="getcommodityData('search')">查询</div>
              </div>
            </div>
          </div>
          <div class="dataGeneral bannerTable">
            <div class="flex">
              <div class="bacButton  cursor" v-if="articleoperate"  style='margin: 0 15px;' @click="allpublish()">批量发布</div>
              <div class="bacButton  cursor" v-if="articleoperate" style='margin: 0 15px;' @click="alloff()">批量下架</div>
              <div class="bacButton  cursor" v-if="articleadd " @click="goDetail()">新建文章</div>
            </div>
            <table v-if="noData" class="table" v-show="articleView">
              <tr>
                <th v-if="articleoperate">
                    <i  class='iconfont iconchecked color2087' @click="selectALL()"  v-if='isSelect'></i>
                    <i  class='iconfont iconxuanze1 color2087' @click="selectALL()"  v-if='!isSelect'></i>
                    <span>全选</span>
                </th>
                <th v-for="item in sortDatas">
                  {{item.name}}
                </th>
              </tr>
              <tr v-for="(item,index) in tableData">
                <td v-if="articleoperate">
                    <div>
                      <span>
                          <i  class='iconfont iconchecked color2087' @click="selectAdver(item)" v-if='item.isSelect' ></i>
                          <i  class='iconfont iconxuanze1 color2087' @click="selectAdver(item)" v-if='!item.isSelect' ></i>
                      </span>
                    </div>
                </td>
                <td>
                  {{item.source}}
                </td>
                <td>
                  {{item.title}}
                </td>
                 <td>
                  {{item.categoryName}}
                </td>
                <td>
                  <span v-if="item.status == 0">已发布</span>
                  <span v-if="item.status == 1">已下架</span>
                </td>
                 <td>{{item.author}}</td>
                <td>
                  <span v-if="item.createDate"> {{timetrans(item.createDate)}}</span>
                  <span v-if="!item.createDate"></span>
                </td>
                <td>
                  <span class="color2087 font12 cursor" v-if="articleupdate" @click="goDetail(item.id)">编辑</span>
                  <span class="line"  v-if="item.status == 1&& articleoperate" ></span>
                  <span class="color2087 font12 cursor" v-if="item.status == 1&& articleoperate"  @click="onoffcarriage(item.id)">发布</span>
                  <span class="line" v-if="item.status == 0&& articleoperate"  ></span>
                  <span class="color2087 font12 cursor" v-if="item.status == 0 && articleoperate"   @click="undercarriage(item.id)">下架</span>
                  <span class="line"  v-if="item.status == 0 && item.top&& articleoperate" ></span>
                  <span class="color2087 font12 cursor"  v-if="item.status == 0 && item.top&& articleoperate"  @click="ctoparticle(item.id)">取消置顶</span>
                   <span class="line"  v-if="item.status == 0 && !item.top && articleoperate" ></span>
                  <span class="color2087 font12 cursor"  v-if="item.status == 0 && !item.top&& articleoperate"  @click="toparticle(item.id)">置顶</span>
                   <span class="line"  v-if="item.status == 1 && articledelete" ></span>
                  <span class="color2087 font12 cursor"  v-if="item.status == 1 && articledelete"  @click="delectCommodity(item.id)">删除</span>
                
                </td>
              </tr>
            </table>
            <div v-if="!noData" class="noData">
              <img class="nodataImg" src="../../assets/images/nodatalist.png"/>
              <p>暂无数据~</p>
            </div>
            <div class="block" v-if="noData && articleView" v-show="articleView">
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
  import Util from '@/common/util'
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
        status: '',
        source: '',
        selectId:[],
        articleno: '',
        checked2: true,
        isSelect: false,
        orderType: '',
        orderTypeOption: [{name: '全部', value: ''}, {name: '权益订单', value: '02'}, {name: '非权益订单', value: '01'}],
        upFileAction: '',
        headers: {
          shopId: 1,
        },
        orderId: '',
        express: {
          expressName: "",
          expressNo: ''
        },
        top: '',
        topoption: [{name: '全部',id:''},
          {name: '是',id: true}, {name: '否',id: false}],
        statusOption: [
          {name: '全部',id:''},
          {name: '已发布',id:'0'}, {name: '已下架',id:'1'}
        ],
        statusText: '全部',
        consigneeValue: "",
        userValue: '',
        usertype: 0,
        userPhone: '',
        userName: '',
        userOption: [{name: '账号姓名', value: 0}, {name: '手机号', value: 1}],
        consigneeOption: [{name: '姓名', value: 0}, {name: '手机号', value: 1}],
        sortDatas: [
          {orderType: '', name: '文章来源', showBlue: false, orderField: ''},
          {orderType: '', name: '标题', showBlue: false, orderField: ''},
           {orderType: '', name: '标签', showBlue: false, orderField: ''},
          {orderType: '', name: '文章状态', showBlue: false, orderField: ''},
          {orderType: '', name: '作者', showBlue: false, orderField: ''},
          {orderType: '', name: '创建时间', showBlue: false, orderField: ''},
          {orderType: '', name: '操作', showBlue: false, orderField: ''}
        ],
        endDate: "",
        consigneeType: 0,
        consigneeName: "",
        consigneePhone: '',
        startDate: "",
        title: '',
        categoryId: '',
        afsStatus: '',
        total: 0,
        size: 10,
        page: 1,
        payMethod: '',
        payMethodOption: [{name: '全部', id: ''}, {name: '支付宝', id: '1'}, {name: '微信', id: '2'}],
        payChannel: '',
        payChannelOption: [{name: '全部', id: ''}],
        channelId: '',
        channelsOption: [{name: '全部', id: ''}, {name: '昆仑保险App', id: '1'}, {name: '昆仑微信公众号', id: '2'}],
        insuranceDate: '',
        tableData: [],
        noData: true,
        statusTitle: "",
        articleView:false,
        articleadd:false,
        articleupdate:false,
        articleoperate: false,
        articledelete:false,
      };
    },
    created() {
      this.categorylist();
      var tokenVal = Util.localStorageUtil.get('access_token');
      this.headers = {token: tokenVal, shopId: 1};
      this.articleView = this.havePermissions('article:view')
      this.articleadd = this.havePermissions('article:add')
      this.articleupdate = this.havePermissions('article:update')
      this.articleoperate = this.havePermissions('article:operate')
      this.articledelete = this.havePermissions('article:delete')
      if (this.$route.query.page) {
        this.page = parseInt(this.$route.query.page);
      } else {
        this.page = 1;
      }
    },
    computed: {},
    watch:{
      '$route': function (newUrl, oldUrl) {
        if (newUrl != oldUrl) {
          if (this.$route.query.page) {
            this.page = parseInt(this.$route.query.page);

          } else {
            this.page = 1;
          }
          this.getcommodityData('');//获取商品列表
        }
      },
      'usertype': function () {
        if (this.usertype == 0) {
          this.userName = this.userValue;
          this.userPhone = ''
        }
        if (this.usertype == 1) {
          this.userPhone = this.userValue;
          this.userName = '';
        }
      },
      'consigneeType': function () {
        if (this.consigneeType == 0) {
          this.consigneeName = this.consigneeValue;
          this.consigneePhone = '';
        }
        if (this.consigneeType == 1) {
          this.consigneePhone = this.consigneeValue;
          this.consigneeName = '';
        }
      },
      'statusText': function () {
        if (this.statusText) {
          this.resetTitle(this.statusText);
        }
      },
    },
    mounted() {
      this.upFileAction = Global.requestUrl + "/kl-store/admin/order/import/express";
      if (this.$route.query.statius) {
        if (this.$route.query.statius == 1) {
          this.statusText = '待发货'
        }
        if (this.$route.query.statius == 2) {
          this.statusText = '退货中'
        }
        if (this.$route.query.statius == 3) {
          this.statusText = '退款中'
        }
      }
      if(this.articleView){
        this.getcommodityData('');//获取订单列表
      }
    },
    methods: {
      selectALL(){
        this.isSelect = !this.isSelect;
        this.selectId = [];
        if(this.isSelect){
            for(let i in this.tableData){
              this.tableData[i].isSelect = true
              if(this.tableData[i].id){
                this.selectId.push(this.tableData[i].id)
              }
            }
        }else{
          for(let i in this.tableData){
              this.tableData[i].isSelect = false;
            }
        }
        console.log(this.selectId)
        console.log(this.tableData)
      },
      selectAdver(item){
            item.isSelect = !item.isSelect;
          if(item.isSelect){//选中
              this.selectId.push(item.id)
              if(this.selectId.length == this.tableData.length){
                 this.isSelect = true;
              }
          }else{
            this.isSelect = false;
              var index = '';
              for(var i = 0 ;i <this.selectId.length;i++){
                  if(item.id == this.selectId[i]){
                      index = i;
                  }
              }
              console.log(index)
              this.selectId.splice(index, 1);
          }
          console.log(this.selectId)
          this.$forceUpdate()
      },
      submit() {
        this.$nextTick(() => {
          this.$refs.upload.submit()
        })
      },
      beforeAvatarUpload(file) {
        Store.commit("setIsLoading", true);
        var index = file.name.indexOf('.');
        const isExcel = file.name.substring(index + 1) === 'xlsx';
        const isExcel1 = file.name.substring(index + 1) === 'xls';
        if (!isExcel && !isExcel1) {
          this.$message.error('请上传正确的excel文件!');
          Store.commit("setIsLoading", false);
        }
        return (isExcel || isExcel1);
      },
      handleChange(file, fileList) {
      },
      errphoto(err, file, fileList) {

      },
      handleAvatarSuccess(res, file) {
        Store.commit("setIsLoading", false);
        this.getcommodityData('');//获取订单列表
        if (res.data) {
          this.$message.success('批量发货成功');
        } else {
          this.$message.success(res.message);
        }
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
            this.getcommodityData('')
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
       toparticle(id) {
        this.$confirm('是否置顶?', '', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          Service.article().toparticle({}, id).then(response => {
            if (response.errorCode == 0) {
              this.$message({
                type: 'success',
                message: '置顶成功!'
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
      ctoparticle(id) {
        this.$confirm('取消置顶?', '', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          Service.article().ctoparticle({}, id).then(response => {
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
      onoffcarriage(id) {
        this.$confirm('确认发布?', '', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          Service.article().onshelfarticle({}, id).then(response => {
            if (response.errorCode == 0) {
              this.$message({
                type: 'success',
                message: '发布成功!'
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
          Service.article().offshelfarticle({}, id).then(response => {
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
        this.$confirm('文章删除请谨慎操作，确定删除?', '', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          Service.article().deletearticle({}, id).then(response => {
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
      allpublish(){
        if(this.selectId.length == 0){
          this.$message.error('请选择文章')
          return
        }
         this.$confirm('文章批量上架，确定?', '', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          Service.article().allonshelfarticle(this.selectId).then(response => {
            if (response.errorCode == 0) {
              this.selectId = [];
              this.isSelect = false;
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
      alloff(){
        console.log(this.selectId)
          if(this.selectId.length == 0){
          this.$message.error('请选择文章')
          return
        }
         this.$confirm('文章批量下架，确定?', '', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          Service.article().alloffshelfarticle(this.selectId).then(response => {
            if (response.errorCode == 0) {
               this.selectId = [];
              this.isSelect = false;
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
      goDetail(id) {
        this.$router.push({name: 'articledetail', query: {id: id}})
      },
      handleSizeChange(val) {
        this.isSelect = false;
        this.size = val;
        this.getcommodityData('')
      },
      handleCurrentChange(val) {
        this.isSelect = false;
        this.$router.push({name: 'articlelist', query: {page: val}})
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
      Decode(arr) {
        var bstr = atob(arr), n = bstr.length, u8arr = new Uint8Array(n);
        while (n--) {
          u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
      },
    
      downloadtable(blobUrl) {
        const a = document.createElement('a');
        a.style.display = 'none';
        a.download = '订单表格.xlsx';
        a.href = blobUrl;
        a.click();
      },
      
      categorylist(){
        Service.article().categorylist({
        }).then(response => {
          if (response.errorCode == 0) {
            if (response.data.length == 0) {
            } else {
              var obj = {
                name: '全部',
                id:''
              }
              var records = response.data;
              records.unshift(obj)
              records.push({name: '其他',id: 0})
              this.payChannelOption = records
            }
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
        var endDate = '', startDate = '';
        if (this.endDate || this.startDate) {
          endDate = Date.parse(new Date(this.endDate.replace(/-/g, "/")));
          startDate = Date.parse(new Date(this.startDate.replace(/-/g, "/")));
        } else {
          endDate = this.endDate;
          startDate = this.startDate;
        }
        Service.article().articlelist({
          "endTime": endDate,
          "page": this.page,
          "size": this.size,
          "startTime": startDate,
          title: this.title,
          "status": this.status,
          "categoryId": this.categoryId,
          source: this.source,
          id: this.articleno,
          top: this.top
        }).then(response => {
          if (response.errorCode == 0) {
            if (response.data.records.length == 0) {
              this.noData = false;
            } else {
              this.noData = true;
              this.total = response.data.total;
              for (let i in response.data.records) {
                 response.data.records[i].isSelect = false
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

 