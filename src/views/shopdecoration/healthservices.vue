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
        .selectChannel {
          .dataGenetalTitle {
            border-bottom: 1px solid #f6f6f6;
            padding-bottom: 20px;
          }
        }

        .baseInfo {
          margin-top: 20px;

          .tableBox {
            width: 500px;

            .noData {
              text-align: center;
            }

            .table {
              font-size: 12px;
              border: 1px solid #f6f6f6;
              margin: 10px 20px;
              width: 500px;

              th {
                font-size: 12px;
                text-align: center;
                background: #f6f6f6;

                .iconshengjiangxu {
                  font-size: 16px;
                  margin-left: 5px;
                }
              }

              th:nth-of-type(2) {
                min-width: 130px;
                max-width: 130px;
                text-align: left;
              }

              tr {
                border-bottom: 1px solid #f6f6f6;

                td {
                  text-align: center;
                  padding: 8px 0;

                  .imgurlBox {
                    width: 57px;
                    height: 60px;
                    max-width: 57px;
                    max-height: 60px;
                  }

                  .line {
                    display: inline-block;
                    height: 8px;
                    width: 3px;
                    background: #eee;
                    margin: 0 6px;
                  }

                }

                td:nth-of-type(2) {
                  min-width: 96px;
                  max-width: 100px;
                  text-align: left;
                  word-break: break-all;
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

          .imgUrlBox {
            flex-wrap: wrap;
            border: 1px solid #d5d5d5;
            padding: 25px;
            max-height: 280px;

            .lableBox {
              margin-bottom: 15px;

              .inputBox {
                text-indent: 10px;
                width: 240px;
                height: 30px;
                border: solid 1px #e5e5e5;
                line-height: 30px;
              }

              .websiteinput {
                width: 240px;
                height: 30px;
                line-height: 30px;
                text-indent: 10px;
                border: solid 1px #e5e5e5;
              }
            }

            .addnavigation {
              margin: 20px auto 0;
            }

            .imgFile {
              width: 96px;
              height: 100px;
              background-color: #f9f9f9;
              border-radius: 4px;
              position: relative;
              margin: 0px 10px 0px 0;

              .deleteIcon {
                position: absolute;
                right: -6px;
                top: -6px;
                color: #929292;
                z-index: 100;
              }

              .applicaninfoone {
                width: 96px;
                height: 100px;
                position: relative;

                .bannerImg {
                  width: 96px;
                  height: 100px;
                  position: absolute;
                }

                .imgBox {
                  display: inline-block;
                  width: 96px;
                  height: 100px;

                  .uploadtext {
                    color: #979797;
                    position: relative;
                    width: 96px;
                    height: 100px;
                    margin-top: 26px;

                    .textwarm {
                      line-height: 20px;

                      .uploadIcon {
                        font-size: 20px;
                        display: inline-block;
                        vertical-align: middle;
                        color: #56ae97;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  .bigImg {
    height: 282px;
    width: 270px;
    margin: 0 auto;

    img {
      height: 282px;
      width: 270px;
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
        <div class='bigImg'>
          <img :src="bigImg">
        </div>
        <span slot="footer" class="dialog-footer">
                    <el-button @click="centerDialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="centerDialogVisible = false;name='';bigImg = ''">确 定</el-button>
                </span>
      </el-dialog>
      <div class="content">
        <div class="contanternews">
          <div class="selectChannel backWhite padding20 baseInfo">
            <div class="dataGenetalTitle">
              <span class="colorblack font16 fontWeight marginright10">首页图文导航</span>
            </div>
            <div class="padding20 colorGrey"> 最少设置2个</div>
            <div class="navigationBox flexBetween">
              <div class="tableBox">
                <table v-if="noData" class="table">
                  <tr>
                    <th v-for="item in sortDatas" :key="item.name">
                      {{item.name}}
                    </th>
                  </tr>
                  <tr v-for="(item,index) in tableData" :key="item.id">
                    <td><img :src="item.imgUrl" @click="showBig(item)" class="imgurlBox"/></td>
                    <td>
                      <div class="font2" style="margin-bottom: 2px;">{{item.title}}</div>
                      <div class="font2" style="margin-bottom: 8px;">{{item.subTitle}}</div>
                      <div class="colorGrey font2">{{item.linkUrl}}</div>
                    </td>
                    <td v-show="servingHealthSort">
                      <i class="cursor iconfont iconshangsheng fontIcongreen" v-if="index!=0"
                         @click='upSort(index,item)'></i>
                      <i class="iconfont iconshangsheng fontIcongrey" v-if="index==0"></i>
                      <i class='cursor iconfont fontIcongreen iconjiang' @click='downSort(index,item)'
                         v-if="index!=(tableData.length-1)"></i>
                      <i class='iconfont fontIcongrey iconjiang' v-if="index==(tableData.length-1)"></i>
                    </td>
                    <td>
                      <span class="color2087 font12 cursor" v-if="item.isHomepageShow&&servingHealthShow"
                            @click="cancleHome(item.id)">取消首页</span>
                      <span class="color2087 font12 cursor" v-if="!item.isHomepageShow&&servingHealthShow" @click="cancleHome(item.id)">首页显示</span>

                      <span class="line"></span>
                      <span class="color2087 font12 cursor" v-show="servingHealthDelete" @click="deleteItem(item.id)">删除</span>
                    </td>
                  </tr>
                </table>
                <div v-if="!noData" class="noData">
                  <img class="nodataImg" src="../../assets/images/nodatalist.png"/>
                  <p>暂无数据~</p>
                </div>
              </div>
              <div class="imgUrlBox" v-show="servingHealthAdd">
                <div class="lableBox">
                  <span class="colorGrey font12 marginright10">标题</span>
                  <input type="text" class="colorblack font12 inputBox" @change="titleChange('','title')"
                         v-model="title" placeholder="请输入不过10个字标题"/>
                </div>
                <div class="lableBox">
                  <span class="colorGrey font12 marginright10">副标题</span>
                  <input type="text" class="colorblack font12 inputBox" @change="titleChange('','subtitle')"
                         v-model="subtitle" placeholder="请输入不过10个字副标题标题"/>
                </div>
                <div class="lableBox flex">
                  <span class="colorGrey font12 marginright10">添加图片</span>
                  <div class="imgFile flex cursor">
                    <i class="iconfont iconcuowu cursor deleteIcon" v-if="imgUrl" @click="delectImg()"></i>
                    <div class="applicaninfoone">
                      <img class="bannerImg" v-if="imgUrl" :src="imgUrl"/>
                      <el-upload
                        class="upload-demo imgBox"
                        name="file"
                        :action="upFileAction"
                        :headers="headers"
                        :on-change="handleChange"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload"
                        :on-error="errphoto"
                        :show-file-list="false"
                        accept>
                        <div class="uploadtext">
                          <div class="textwarm" v-if="!imgUrl">
                            <i class="iconfont iconiconjia uploadIcon"></i>
                            <div class="">上传照片</div>
                          </div>
                        </div>
                      </el-upload>
                    </div>
                  </div>
                  <span class="colorGrey font12" style="margin-top: 80px;">270*282像素</span>
                </div>
                <div class="lableBox">
                  <span class="colorGrey font12 marginright10">链接地址</span>
                  <input class="websiteinput" type="text" v-model="linkUrl" @change="changeLinkUrl()"
                         placeholder="请输入网址"/>
                </div>
                <div class="smallButon addnavigation cursor" @click="addnavigation()">添加图文导航</div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Util from "@/common/util";
  import Aside from "@/components/aside";
  import Filter from "@/common/filter";
  import Service from "@/common/service";
  import Store from "@/vuex/index";
  import KlTop from "@/components/klTop";
  import Global from "@/common/global";

  export default {
    name: "salecustomer",
    components: {
      Aside,
      KlTop,
    },
    data() {
      return {
        name: '',
        centerDialogVisible: false,
        bigImg: '',
        sortDatas: [
          {orderType: '', name: '图片', showBlue: false, orderField: ''},
          {orderType: '', name: '导航标题/链接', showBlue: false, orderField: ''},
          {orderType: '', name: '显示顺序', showBlue: false, orderField: ''},
          {orderType: '', name: '操作', showBlue: false, orderField: ''}
        ],
        linkUrl: "",
        tableData: [],
        imgUrl: '',
        upFileAction: "",
        headers: {},
        title: '',
        subtitle: '',
        noData: false,
        servingHealthShow: false,
        servingHealthAdd: false,
        servingHealthDelete: false,
        servingHealthSort: false,
      };
    },
    created() {
      var tokenVal = Util.localStorageUtil.get("access_token");
      this.headers = {token: tokenVal, shopId: 1};
      this.servingHealthShow = this.havePermissions('servingHealth:show')
      this.servingHealthAdd = this.havePermissions('servingHealth:add')
      this.servingHealthDelete = this.havePermissions('servingHealth:delete')
      this.servingHealthSort = this.havePermissions('servingHealth:sort')
    },
    watch: {},
    mounted() {
      this.upFileAction = Global.requestUrl + "/kl-store/admin/upload/file";
      this.getnavigationList();
    },
    methods: {
      showBig(item) {
        this.name = '名称：' + item.title;
        this.bigImg = item.imgUrl;
        this.centerDialogVisible = true;
      },
      //   取消首页
      cancleHome(id) {
        Service.servicehealth().showhealth({}, id).then(response => {
          if (response.errorCode == 0) {
            this.getnavigationList();
          } else {
            this.$message.error(response.message)
          }
        }, err => {
        });
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
        Service.servicehealth().sorthealthlist({}, str).then(response => {
          if (response.errorCode == 0) {
            this.getnavigationList();
          } else {
            this.$message.error(response.message)
          }
        }, err => {
        });
      },
      // 删除
      deleteItem(id) {
        this.$confirm('确认删除?', '', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          Service.servicehealth().deletehealth({}, id).then(response => {
            if (response.errorCode == 0) {
              this.$message({
                type: 'success',
                message: '删除成功!'
              });
              this.getnavigationList();//获取列表
            } else {
              this.$message.error(response.message)
            }

          }, err => {
          });

        }).catch(() => {

        });
      },
      changeLinkUrl(type) {
        var on = true;
        var reg = /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/;
        if (!reg.test(this.linkUrl) && this.linkUrl != "") {
          this.$message.error("请输入正确的链接地址");
          on = false;
        }
        if (type) {
          return on
        }
      },
      // 添加图文导航
      addnavigation() {
        if (!this.titleChange("submit", 'title')) {
          return
        }
        if (!this.titleChange("submit", 'subtitle')) {
          return
        }
        if (!this.imgUrl) {
          this.$message.error("请上传图片")
        }
        if (!this.changeLinkUrl("submit")) {
          return
        }
        Service.servicehealth().addservice({
          title: this.title,
          imgUrl: this.imgUrl,
          linkUrl: this.linkUrl,
          subTitle: this.subtitle
        }).then(
          (response) => {
            if (response.errorCode == 0) {
              this.clearInput()
              this.getnavigationList();
            } else {
              this.$message.error(response.message);
            }
          },
          (err) => {
          }
        );
      },
      clearInput() {
        this.subtitle = '';
        this.title = '';
        this.imgUrl = '';
        this.linkUrl = '';
      },
      titleChange(type, name) {
        var on = true;
        if (name == 'title') {
          this.title = this.title.replace(/(^\s*)|(\s*$)/g, "");
          if (this.title.length > 10) {
            this.title = this.title.substring(0, 10);
            this.$message.error("请输入不超过10个字不低于2个字的标题")
            on = false;
          } else if (this.title.length < 2) {
            this.$message.error("请输入不超过10个字不低于2个字的标题")
            on = false;
          }
        } else if (name == 'subTitle') {
          this.subTitle = this.subTitle.replace(/(^\s*)|(\s*$)/g, "");
          if (this.subTitle.length > 10) {
            this.subTitle = this.subTitle.substring(0, 10);
            this.$message.error("请输入不超过10个字不低于2个字的标题")
            on = false;
          } else if (this.subTitle.length < 2) {
            this.$message.error("请输入不超过10个字不低于2个字的标题")
            on = false;
          }
        }

        if (type) {
          return on
        }
      },
      getnavigationList() {
        Service.servicehealth().gethealthlist({}).then(response => {
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

      delectImg() {
        this.imgUrl = ''
      },
      beforeAvatarUpload(file) {
        Store.commit("setIsLoading", true);
        const isLt2M = file.size / 1024 / 1024 < 2;
        var index = file.name.indexOf(".");
        // const isExcel = file.name.substring(index+1) === 'xlsx';
        // const isExcel1 = file.name.substring(index+1) === 'xls';
        // if (!isExcel && !isExcel1) {
        //     this.$message.error('请上传正确的excel文件!');
        // }
        if (!isLt2M) {
          Store.commit("setIsLoading", false);
          this.$message.error("上传文件大小不能超过2M!");
        }
        return isLt2M;
      },
      errphoto(err, file, fileList) {
      },
      handleAvatarSuccess(res, file) {
        Store.commit("setIsLoading", false);
        if (res.data) {
          this.imgUrl = res.data
        } else {
          this.$message.error(res.message);
        }
      },
      handleChange(file, fileList) {
      },
    },
  };
</script>

