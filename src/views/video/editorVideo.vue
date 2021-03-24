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
          margin-bottom: 20px;
          min-height: 400px;

          .dataGenetalTitle {
            border-bottom: 1px solid #f6f6f6;
            padding-bottom: 20px;

          }

          .orderInfo {
            margin-top: 10px;

            .bacButton {
              margin: 30px auto;
            }

            .addButton {
              display: inline-block;
              margin-left: 10px;
            }

            .inputBox {
              margin: 20px 0;

              .inputText {
                text-indent: 10px;
                width: 330px;
                height: 30px;
                border: solid 1px #e5e5e5;
                line-height: 30px;
              }
            }

            .fileBox {
              margin-left: 20px;

              .applicaninfo {
                width: 120px;
                height: 68px;
                background-color: #f9f9f9;
                border-radius: 4px;
                text-align: center;

                .imgBox {
                  display: inline-block;
                  width: 120px;
                  height: 68px;

                  .uploadtext {
                    width: 120px;
                    height: 68px;
                    color: #979797;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;

                    .uploadIcon {
                      font-size: 20px;
                      display: inline-block;
                      vertical-align: middle;
                      color: #56ae97;
                    }
                  }
                }
              }

              .applicaninfo1 {
                width: 320px;
                height: 200px;
                background-color: #f9f9f9;
                border-radius: 4px;
                text-align: center;
                position: relative;

                .iconicon_video {
                  font-size: 30px;
                }

                .imgBox {
                  display: inline-block;
                  width: 320px;
                  height: 200px;

                  .uploadtext {
                    width: 320px;
                    height: 200px;
                    color: #979797;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;

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

            .videoBox {

              .imgFile {
                width: 320px;
                height: 200px;
                background-color: #f9f9f9;
                border-radius: 4px;
                margin-bottom: 12px;
                position: relative;
                margin-top: 20px;
                margin-left: 20px;
              }

              .videoUrl {
                position: absolute;
                width: 320px;
                height: 200px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
              }
            }

            .imgFile {
              width: 120px;
              height: 68px;
              background-color: #f9f9f9;
              border-radius: 4px;
              margin-bottom: 12px;
              position: relative;
              margin-left: 20px;

              .deleteIcon {
                position: absolute;
                right: -6px;
                top: -12px;
                color: #929292;
                z-index: 100;
              }

              .applicaninfotwo {
                background-color: #f9f9f9;
                width: 320px;
                height: 200px;
                position: relative;

                .imgBox {
                  display: inline-block;
                  width: 320px;
                  height: 200px;

                  .uploadtext {
                    width: 320px;
                    height: 200px;
                    color: #979797;
                    position: relative;
                  }
                }
              }

              .applicaninfoone {
                width: 120px;
                height: 68px;
                // margin: 14px 10px;
                position: relative;

                .bannerImg {
                  width: 120px;
                  height: 68px;
                  position: absolute;
                }

                .imgBox {
                  display: inline-block;
                  width: 120px;
                  height: 68px;

                  .uploadtext {
                    width: 120px;
                    height: 68px;
                    color: #979797;
                    position: relative;
                  }
                }
              }

              .websiteinput {
                width: 300px;
                height: 30px;
                line-height: 30px;
                text-indent: 10px;
                border: solid 1px #e5e5e5;
                margin-top: 40px;
              }
            }
          }
        }
      }
    }
  }

  .dialogone::after, .dialog::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 0;
    vertical-align: middle;
  }

  .dialogone, .dialog {
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

          <div class="dataGeneral backWhite padding20">
            <div class="dataGenetalTitle">
              <span class="colorblack font16 fontWeight marginright10">基本信息</span>
            </div>
            <div class="orderInfo">
              <div class="infoBox">
                <span v-if='categoryoption.length != 0' class="font12 marginright10">选择分类</span>
                <el-select v-if='categoryoption.length != 0' v-model="categoryId" placeholder="请选择分类">
                  <el-option
                    v-for="item in categoryoption"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id">
                  </el-option>
                </el-select>
                <span class="borderButton  addButton cursor" style="height: 33px;line-height: 33px;width:100px;" v-show="videoCategoryadd"
                      @click="iscategory = true">新建分类</span>
              </div>
              <div class="inputBox">
                <span class="font12 marginright10">视频标题</span>
                <input type="text" class="colorblack font12 inputText" v-model="title" @change="changeName('title')"
                       placeholder="请输入小于45个字符"/>
              </div>

              <div class="inputBox">
                <span class="font12 marginright10">上传封面图</span>
              </div>
              <div class="imgFile flex cursor" v-if="imgUrl">
                <i class="iconfont iconcuowu cursor deleteIcon" @click="delectImg()"></i>
                <div class="applicaninfoone">
                  <img class="bannerImg" :src="imgUrl">
                </div>
              </div>
              <div class="fileBox" v-if="!imgUrl">
                <div class="applicaninfo">
                  <el-upload
                    class="upload-demo imgBox"
                    name="file"

                    :limit="1"
                    :action="upFileAction"
                    :headers="headers"
                    :on-change="handleChange"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload"
                    :on-error="errphoto"
                    :show-file-list="false"
                    accept="">
                    <div class="uploadtext">
                      <i class="iconfont iconiconjia uploadIcon"></i>
                      <p>120*68像素</p>
                    </div>
                  </el-upload>
                </div>
              </div>
              <div class="inputBox videoBox">
                <span class="font12 marginright10">上传视频</span>
                <div class="imgFile flex cursor" v-if="videoUrl">
                  <i class="iconfont iconcuowu cursor deleteIcon" @click="delectvideo()"></i>
                  <div class="applicaninfotwo">
                    <div class="videoUrl">
                      <video webkit-playsinline width="100%;" height="200px" autoplay="autoplay" controls="controls"
                             loop="loop">
                        <source :src="videoUrl" type="video/mp4">
                      </video>
                    </div>
                  </div>
                </div>
              </div>
              <div class="fileBox" v-if="!videoUrl">
                <div class="applicaninfo1">
                  <el-upload
                    class="upload-demo imgBox"
                    name="file"
                    :limit="1"
                    :action="upFileAction"
                    :headers="headers"
                    :on-progress="uploadVideoProcess"
                    :on-change="handleChangevideo"
                    :on-success="handleAvatarSuccessvideo"
                    :before-upload="beforeAvatarUploadvideo"
                    :on-error="errphotovideo"
                    :show-file-list="false"
                    accept="">
                    <div class="uploadtext">
                      <i class="iconfont iconicon_video uploadIcon"></i>
                      <p>上传不超过100M</p>
                    </div>
                    <el-progress v-if="videoFlag == true" type="circle" :percentage="videoUploadPercent"
                                 style="margin-top:30px;position: absolute;top: 7px;left: 105px;"></el-progress>
                  </el-upload>
                </div>
              </div>

              <div class="bacButton cursor" @click="publishVideo()">
                保存并发布
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
    <div class="dialogone">
      <div class="messge">
        <div class="messageHeader">
          <div class="messagetitle">
            <span>拒绝原因</span>
          </div>
        </div>
        <div class="messageContent">
          <div class="messagemessage">
            <span class="lableText colorblack font12">拒绝原因</span>
            <input type="text" @change="changeValue()" v-model="refuseMessage"
                   class="inputBox marginLeft10 colorblack font12" placeholder="拒绝原因不超过50字"/>
          </div>
        </div>
        <div class="messagebtns">
          <div class="button borderButton copyButton" @click="closeDiologone()">
            取消
          </div>
          <div class="button bacButton" @click="refuseReturnMessage()">
            确认
          </div>
        </div>
      </div>
    </div>
    <div class="dialog">
      <div class="messge">
        <div class="messageHeader">
          <div class="messagetitle">
            <span>新建备注</span>
          </div>
        </div>
        <div class="messageContent">
          <div class="messagemessage">
            <span class="lableText colorblack font12">备注</span>
            <input type="text" @change="changeremarkValue()" v-model="remarkMessage"
                   class="inputBox marginLeft10 colorblack font12" placeholder="输入与客户的沟通信息"/>
          </div>
        </div>
        <div class="messagebtns">
          <div class="button borderButton copyButton" @click="closeDiolog()">
            取消
          </div>
          <div class="button bacButton" @click="addremarkMessage()">
            确认
          </div>
        </div>
      </div>
    </div>
    <category v-if="iscategory" @clickbanner="getbackData"></category>
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
  import category from '@/components/category'

  export default {
    name: "salecustomer",
    components: {
      Aside,
      KlTop,
      category
    },
    data() {
      return {
        iscategory: false,
        videoUploadPercent: 0,
        videoFlag: false,
        imgUrl: '',
        videoUrl: '',
        upFileAction: '',
        title: '',
        videoId: '',
        headers: {},
        categoryId: '',
        categoryoption: [],
        showInput: false,
        remarkMessage: "",
        remarkList: '',
        refuseMessage: '',
        afs: null,
        orderDetail: '',
        shouhuo: '',
        statusTitle: '',
        imageUrl: '',
        paymentList: [],
        videoCategoryadd: false
      };
    },
    created() {
      var tokenVal = Util.localStorageUtil.get('access_token');
      this.headers = {token: tokenVal, shopId: 1};
      this.videoCategoryadd = this.havePermissions('videoCategory:add')
      this.getcategory()

      if (this.$route.query.id) {
        this.videoId = this.$route.query.id;
        this.getVideoDetail()
      }

    },
    watch: {},
    mounted() {
      this.upFileAction = Global.requestUrl + "/kl-store/admin/upload/file";
    },
    methods: {
      changeName() {
        if (this.title.length >= 45) {
          this.$message.error('请输入不超过45字的视频标题');
          this.title = this.title.substring(0, 45);
          return;
        }
      },
      getVideoDetail() {
        Service.video().videoDetail({}, this.videoId).then(response => {
          if (response.errorCode == 0) {
            this.categoryId = response.data.categoryId;
            this.title = response.data.title;
            this.imgUrl = response.data.imgUrl;
            this.videoUrl = response.data.videoUrl;
            console.log(this.title)
          } else {
            this.$message.error(response.message)
          }
        }, err => {
        });
      },
      publishVideo() {
        if (!this.categoryId) {
          this.$message.error('请选择分类名称');
          return;
        }
        if (!this.title) {
          this.$message.error('请输入视频标题');
          return;
        }
        // if(!this.imgUrl){
        //     this.$message.error('请上传视频封面');
        //     return;
        // }
        if (!this.videoUrl) {
          this.$message.error('请上传视频');
          return;
        }
        Store.commit("setIsLoading", true);
        if (this.videoId) {
          Service.video().editorDetail({
            "categoryId": this.categoryId,
            "imgUrl": this.imgUrl,
            "title": this.title,
            "videoUrl": this.videoUrl
          }, this.videoId).then(response => {
            if (response.errorCode == 0) {
              this.$message.success('修改成功');
              this.$router.push({'name': 'videoManage'})
            } else {
              this.$message.error(response.message)
            }
          }, err => {
          });
        } else {
          Service.video().addVideo({
            "categoryId": this.categoryId,
            "imgUrl": this.imgUrl,
            "title": this.title,
            "videoUrl": this.videoUrl
          }).then(response => {
            if (response.errorCode == 0) {
              this.$message.success('上传成功');
              this.$router.push({'name': 'videoManage'})
            } else {
              this.$message.error(response.message)
            }
          }, err => {
          });
        }

      },
      getbackData(str) {
        if (str == 'sure') {
          this.iscategory = false;
          this.getcategory();
        }
        if (str == 'cancle') {
          this.iscategory = false;
          this.getcategory();
        }
      },
      delectImg() {
        this.imgUrl = '';
      },
      delectvideo() {
        this.videoUrl = '';
      },
      uploadVideoProcess(event, file, fileList) {
        this.videoFlag = true;
        this.videoUploadPercent = parseInt(file.percentage.toFixed(0));
        console.log(this.videoUploadPercent)

      },
      beforeAvatarUpload(file) {
        Store.commit("setIsLoading", true);
        const isLt2M = file.size / 1024 / 1024 < 2;
        var index = file.name.indexOf('.');
        // const isExcel = file.name.substring(index+1) === 'xlsx';
        // const isExcel1 = file.name.substring(index+1) === 'xls';
        // if (!isExcel && !isExcel1) {
        //     this.$message.error('请上传正确的excel文件!');
        // }
        if (!isLt2M) {
          Store.commit("setIsLoading", false);
          this.$message.error('上传文件大小不能超过2M!');
        }
        return isLt2M;
      },
      handleChange(file, fileList) {
      },
      errphoto(err, file, fileList) {

      },
      handleAvatarSuccess(res, file) {
        Store.commit("setIsLoading", false);
        if (res.data) {
          this.imgUrl = res.data;
        } else {
          this.$message.error(res.message);
        }
      },
      beforeAvatarUploadvideo(file) {
        Store.commit("setIsLoading", true);
        const isLtM = file.size / 1024 / 1024 < 100;
        var index = file.name.indexOf('.');
        // const isExcel = file.name.substring(index+1) === 'xlsx';
        // const isExcel1 = file.name.substring(index+1) === 'xls';
        // if (!isExcel && !isExcel1) {
        //     this.$message.error('请上传正确的excel文件!');
        // }
        if (!isLtM) {
          Store.commit("setIsLoading", false);
          this.$message.error('上传文件大小不能超过100M!');
        }
        return isLtM;
      },
      handleChangevideo(file, fileList) {
      },
      errphotovideo(err, file, fileList) {
        this.videoFlag = false;
        this.videoUploadPercent = 0;
      },
      handleAvatarSuccessvideo(res, file) {
        this.videoFlag = false;
        this.videoUploadPercent = 0;
        Store.commit("setIsLoading", false);
        if (res.data) {
          this.videoUrl = res.data;
        } else {
          this.$message.error(res.message);
        }
      },
      getcategory() {
        Service.video().getcategory({}).then(response => {
          if (response.errorCode == 0) {
            var data = response.data;
            this.categoryoption = data;
            if (this.$route.query.id) {
              this.videoId = this.$route.query.id;
              this.videoDetail();
            }
          } else {
            this.$message.error(response.message)
          }
        }, err => {
        });
      },
      changeremarkValue(type) {
        var on = true;
        if (this.remarkMessage.length != 0) {
          this.remarkMessage = this.remarkMessage.replace(/\s+/g, "");
          if (this.remarkMessage.length > 50 || this.remarkMessage.length < 2) {
            this.$message.error('请输入不少于2个字符或者多于100个字符的备注信息');
          }
        } else {
          this.$message.error('请输入注信息');
          on = false;
          return;
        }
        if (type == 'submit') {
          return on;
        }
      },
      changeValue(type) {
        var on = true;
        if (this.refuseMessage.length != 0) {
          this.refuseMessage = this.refuseMessage.replace(/\s+/g, "");
          if (this.refuseMessage.length > 50 || this.refuseMessage.length < 2) {
            this.$message.error('请输入不少于2个字符或者多于50个字符的拒绝原因');
          }
        } else {
          this.$message.error('请输入拒绝原因');
          on = false;
          return;
        }
        if (type == 'submit') {
          return on;
        }

      },

      agreeReturn(type, status) {
        var str = '';
        if (type == 1) {
          str = '同意退款，系统将订单款项原路退还给付款账号，请确认是否退款?'
        } else if (type == 2 && status == 2) {
          str = '同意退款，系统将订单款项原路退还给付款账号，请确认是否退款?'
        } else if (type == 2 && status != 2) {
          str = '请确认是否同意客户的退货申请?'
        }

        this.$confirm(str, '', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          Service.order().agreeAfs({
              message: '',
              orderId: this.orderId
            },
          ).then(response => {
            if (response.errorCode == 0) {
              this.getorderDetail();
            } else {
              this.$message.error(response.message)
            }
          }, err => {
          });
        }).catch(() => {

        });
      },
      refuseReturn() {
        $(".dialogone").css({"display": 'block'});
      },
      openrefuse() {
        var str = "<div style='text-align: center;'>" + this.orderDetail.afs.message + "</div>"
        this.$alert(str, '拒绝原因', {
          dangerouslyUseHTMLString: true
        });
      },
      openDetail() {
        var str = "<div style='text-align: left;margin-left: 30px;'>退款/返现总额：" + this.orderDetail.goodsPrice + "</div>" +
          "<div style='text-align: left;margin-left: 30px;'>订单编号：" + this.orderDetail.orderNo + "</div>" +
          "<div v-if='this.orderDetail.refundNo' style='text-align: left;margin-left: 30px;'>退款流水号：" + this.orderDetail.afs.refundNo + "</div>" +
          "<div  style='text-align: left;margin-left: 30px;'>申请时间：" + this.timetrans(this.orderDetail.afs.createDate) + "</div>" +
          "<div style='text-align: left;margin-left: 30px;'>退款方式  原路退</div>";
        this.$alert(str, '退款详情', {
          dangerouslyUseHTMLString: true
        });
      },
      getremarkList() {
        Service.order().getremarkList({},
          this.orderId
        ).then(response => {
          if (response.errorCode == 0) {
            this.remarkList = response.data;
          } else {
            this.$message.error(response.message)
          }

        }, err => {
        });
      },
      videoDetail() {

        Service.video().videoDetail({}, this.videoId).then(response => {
          if (response.errorCode == 0) {
            this.categoryId = response.data.categoryId;
          } else {
            this.$message.error(response.message)
          }
        }, err => {
        });
      },
      copyAdress(classname) {
        var clipboard = new this.Clipboard('.' + classname);
        console.log(clipboard);
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
      afsresetTitle(status) {
        switch (status) {
          case 1:
            this.statusTitle = '退货中';
            this.imageUrl = require('../../assets/images/tuihuozhong.png');
            break;
          case 2:
            this.statusTitle = '拒绝退货';
            this.imageUrl = require('../../assets/images/jujuetuihuo.png');
            break;
          case 3:
            this.statusTitle = '同意退货';
            this.imageUrl = require('../../assets/images/tongyituihuo.png');
            break;
          case 4:
            this.statusTitle = '退款中';
            this.imageUrl = require('../../assets/images/tuihuozhong.png');
            break;
          case 5:
            this.statusTitle = '拒绝退款';
            this.imageUrl = require('../../assets/images/jujuetuihuo.png');
            break;
          case 6:
            this.statusTitle = '已退款';
            this.imageUrl = require('../../assets/images/tuiguanchenggong.png');//没有
            break;
          default:
            this.statusTitle = '其他';
            break
        }
      },
      resetTitle(status) {
        switch (status) {
          case 1:
            this.statusTitle = '待支付';
            this.imageUrl = require('../../assets/images/daizhifu.png');
            break;
          case 2:
            this.statusTitle = '待发货';
            this.imageUrl = require('../../assets/images/daifahuo.png');
            break;
          case 3:
            this.statusTitle = '待收货';
            this.imageUrl = require('../../assets/images/daifahuo.png');
            break;
          case 4:
            this.statusTitle = '待激活';
            this.imageUrl = require('../../assets/images/daishiyong.png');
            break;
          case 5:
            this.statusTitle = '已激活';
            this.imageUrl = require('../../assets/images/yishiyong.png');
            break;

          case 6:
            this.statusTitle = '交易关闭';
            this.imageUrl = require('../../assets/images/yiguanbi.png');
            break;
          case 7:
            this.statusTitle = '交易成功';
            this.imageUrl = require('../../assets/images/yishiyong.png');
            break;
          default:
            this.statusTitle = '其他';
            break
        }
      },
      addremarkMessage() {
        if (!this.changeremarkValue('submit')) {
          return;
        }
        console.log(this.remarkMessage)
        Service.order().addremark({
          content: this.remarkMessage
        }, this.orderId).then(response => {
          if (response.errorCode == 0) {
            $(".dialog").css({"display": 'none'});
            this.$message.success(response.message)
            this.getremarkList();
          } else {
            this.$message.error(response.message)
          }
        }, err => {
        });
      },
      closeDiologone() {
        $(".dialogone").css({"display": "none"})
      },
      closeDiolog() {
        $(".dialog").css({"display": "none"})
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
      addCommodity() {
        this.$router.push({name: 'editorcommondity'})
      },
      goDetail(id) {
        this.$router.push({name: 'editorcommondity', query: {id: id}})
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
    },

  }
</script>

