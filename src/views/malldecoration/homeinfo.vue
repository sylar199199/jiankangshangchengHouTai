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
          .channnelTitle {
            padding-bottom: 20px;
          }

          .channnelContent {
            .channnelBox {
              margin-right: 20px;
              padding: 20px 35px;
              border: solid 1px #b7b7b7;
              text-align: center;
              position: relative;
            }

            .selectBox {
              margin-right: 20px;
              padding: 20px 35px;
              text-align: center;
              position: relative;
              border: solid 1px #56ae97;

              .selectIcon {
                height: 26px;
                width: 26px;
                position: absolute;
                top: 0;
                right: 0;
              }
            }
          }
        }

        .baseInfo {
          margin-top: 20px;

          .lableBox {
            .inputBox {
              text-indent: 10px;
              width: 243px;
              height: 30px;
              border: solid 1px #e5e5e5;
              line-height: 30px;
            }
          }

          .imgUrlBox {
            flex-wrap: wrap;

            .imgFile {
              width: 456px;
              height: 107px;
              background-color: #f9f9f9;
              border-radius: 4px;
              margin-bottom: 12px;
              position: relative;

              .deleteIcon {
                position: absolute;
                right: 8px;
                top: 8px;
                color: #929292;
              }

              .applicaninfoone {
                width: 116px;
                height: 80px;
                margin: 14px 10px;
                position: relative;

                .bannerImg {
                  width: 116px;
                  height: 60px;
                  position: absolute;
                }

                .warmText {
                  position: absolute;
                  color: #fff;
                  width: 116px;
                  height: 18px;
                  left: 0px;
                  bottom: 2px;
                  text-align: center;
                }

                .imgBox {
                  display: inline-block;
                  width: 116px;
                  height: 80px;

                  .uploadtext {
                    width: 116px;
                    height: 80px;
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

          .fileBox {
            .applicaninfo {
              width: 456px;
              height: 107px;
              background-color: #f9f9f9;
              border-radius: 4px;
              line-height: 107px;
              text-align: center;

              .imgBox {
                display: inline-block;
                width: 450px;
                height: 107px;

                .uploadtext {
                  color: #979797;
                  position: relative;
                  margin-top: 20px;

                  .uploadIcon {
                    font-size: 20px;
                    display: inline-block;
                    vertical-align: middle;
                    color: #56ae97;
                    position: absolute;
                    bottom: 30px;
                    right: 220px;
                  }
                }
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
          <div class="selectChannel backWhite padding20" v-show="channelview">
            <div class="channnelTitle">
              <span class="colorblack font16 fontWeight marginright10">选择渠道</span>
            </div>
            <div class="channnelContent flex">
              <div @click="changeBox(item)"
                   :class="item.isSelect?'selectBox cursor color2087 font12':'channnelBox cursor font12 colorGrey'"
                   v-for="(item, index) in selectData" v-if="index<2">
                {{item.name}}
                <img v-if='item.isSelect' class="selectIcon " src="../../assets/images/selectIcon.png">
              </div>
            </div>
          </div>
          <div class="selectChannel backWhite padding20 baseInfo" v-show="channelview">
            <div class="channnelTitle">
              <span class="colorblack font16 fontWeight marginright10">基本信息</span>
            </div>
            <div class="lableBox" >
              <span class="colorGrey font12 marginright10">店铺名称</span>
              <input type="text" class="colorblack font12 inputBox" @change="titleChange()" v-model="title"
                     placeholder="请输入店铺名称"/>
            </div>
          </div>
          <div class="selectChannel backWhite padding20 baseInfo" v-show="bannerview">
            <div class="channnelTitle">
              <span class="colorblack font16 fontWeight marginright10">头部轮播图片</span>
            </div>
            <div class="flexBetween imgUrlBox">
              <div class="imgFile flex cursor" v-for='(item,index) in imgUrlData' v-if="item.imgUrl"
                   @dragstart="handleDragStart($event,item)"
                   @dragover.prevent="handleDragOver($event,item)"
                   @dragenter="handleDragEnter($event,item,index)"
                   @dragend="handleDragEnd($event,item)" :draggable="bannersort">
                <i class="iconfont iconcuowu cursor deleteIcon" @click="delectImg(index,item)" v-show="bannerdelete"></i>
                <div class="applicaninfoone" @click="getIndex(index)">
                  <img class="bannerImg" :src="item.imgUrl">
                  <span class="warmText back2087 font12" v-show="bannerupdate">更换图片</span>
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
                    accept="">
                    <div class="uploadtext">
                    </div>
                  </el-upload>
                </div>
                <input class="websiteinput" type="text" v-model="item.linkUrl" :readonly="!bannerupdate" @change="changeLinkUrl(item,index)"
                       placeholder="请输入网址"/>
              </div>
            </div>
            <div class="fileBox" v-show="banneradd">
              <div class="applicaninfo" @click="uploadIndex = ''">
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
                  accept="">
                  <div class="uploadtext">
                    <i class="iconfont iconiconjia uploadIcon"></i>
                    <span>116*60像素，上传数最少1张，最多4张</span>
                  </div>
                </el-upload>
              </div>
            </div>
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

  export default {
    name: "salecustomer",
    components: {
      Aside,
      KlTop,
    },
    data() {
      return {
        channelId: '',
        title: '',
        uploadIndex: '',
        imgUrlData: [],
        upFileAction: '',
        imageUrl: '',
        headers: {},
        selectData: [],
        showOne: false,
        showTwo: false,
        showThree: false,
        showFour: false,
        dissipate: [],
        timer: null,
        username: '',
        userInfo: '',
        permissions: [],
        dragging: null,

        channelview: false, // 渠道查血权限
        channelupdate: false, // 渠道更新权限
        bannerview: false, // 广告查血权限
        banneradd: false,
        bannerupdate: false,
        bannerdelete: false, //
        bannersort: false, //
      };
    },
    created() {
      var tokenVal = Util.localStorageUtil.get('access_token');
      this.headers = {token: tokenVal,shopId: 1};
      this.userInfo = JSON.parse(localStorage.getItem('user'));
      this.channelview = this.havePermissions('channel:view')
      this.channelupdate = this.havePermissions('channel:update')
      this.bannerview = this.havePermissions('banner:view')
      this.banneradd = this.havePermissions('banner:add')
      this.bannerupdate = this.havePermissions('banner:update')
      this.bannerdelete = this.havePermissions('banner:delete')
      this.bannersort = this.havePermissions('banner:sort')
    },
    watch: {
      'title'() {
      }
    },
    mounted() {
      this.upFileAction = Global.requestUrl + "/kl-store/admin/upload/file";
      if (this.channelview) {
        this.getChannel();
      }
    },
    methods: {
      BrowserType() {//判断浏览器类型
        var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
        var isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器
        var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器
        var isEdge = userAgent.indexOf("Windows NT 6.1; Trident/7.0;") > -1 && !isIE; //判断是否IE的Edge浏览器
        var isFF = userAgent.indexOf("Firefox") > -1; //判断是否Firefox浏览器
        var isSafari = userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") == -1; //判断是否Safari浏览器
        var isChrome = userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1; //判断Chrome浏览器
        if (isIE) {
          var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
          reIE.test(userAgent);
          var fIEVersion = parseFloat(RegExp["$1"]);
          return {name: "IE", num: fIEVersion};
        }//isIE end

        if (isFF) {
          return {name: "FF", num: "FF"};
        }
        if (isOpera) {
          return {name: "Opera", num: "Opera"};
        }
        if (isSafari) {
          return {name: "Safari", num: "Safari"};
        }
        if (isChrome) {
          return {name: "Chrome", num: "Chrome"};
        }
        if (isEdge) {
          return {name: "Edge", num: "Edge"};
        }
      },
      handleDragStart(e, item) {
        var Browser = this.BrowserType();
        if (Browser.name == "FF") {
          e.dataTransfer.setData("imgInfo", '')
          console.log(e.dataTransfer.setData("imgInfo", '')); // 火狐拖拽必须携带数据 IE偏偏不支持这个
        }
        this.dragging = item;
      },
      handleDragEnd(e, item) {
        this.dragging = null
      },
      //首先把div变成可以放置的元素，即重写dragenter/dragover
      handleDragOver(e) {
        e.dataTransfer.dropEffect = 'move'// e.dataTransfer.dropEffect="move";//在dragenter中针对放置目标来设置!
      },
      handleDragEnter(e, item, index) {
        e.dataTransfer.effectAllowed = "move";//为需要移动的元素设置dragstart事件
        if (item === this.dragging) {
          return
        }
        const newItems = [...this.imgUrlData];
        const src = newItems.indexOf(this.dragging);
        const dst = newItems.indexOf(item);
        newItems.splice(dst, 0, ...newItems.splice(src, 1));
        this.imgUrlData = newItems;
        var arrData = [];
        for (var i = 0; i < this.imgUrlData.length; i++) {
          var obj = {
            id: '',
            sort: ''
          };
          obj.id = this.imgUrlData[i].id;
          obj.sort = i + 1;
          arrData.push(obj)
        }
        this.sortBanner(arrData)
      },
      sortBanner(arrData) {
        Service.banner().sortBanner(arrData,).then(response => {
          if (response.errorCode == 0) {
            // this.getBanner()
          } else {
            this.$message.error(response.message)
          }

        }, err => {
        });
      },
      changeLinkUrl(item, index) {
        var reg = /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/;
        if (!reg.test(item.linkUrl) && (item.linkUrl != '')) {
          this.$message.error('请输入正确的链接地址');
          this.getBanner();

        } else {
          if (item.id) {
            this.editorBanner(item, index)
          }
          if (!item.id && item.imgUrl) {
            // this.addBanner()
          }

        }
      },
      addBanner(imgUrl) {
        Service.banner().addBanner({
          channelId: this.channelId,
          imgUrl: imgUrl,
          linkUrl: '',
          name: "",
          sort: ''
        },).then(response => {
          if (response.errorCode == 0) {
            this.getBanner();
          } else {
            this.$message.error(response.message)
          }

        }, err => {
        });
      },
      editorBanner(item, index) {
        Service.banner().editorBanner({
          channelId: this.channelId,
          imgUrl: item.imgUrl,
          linkUrl: item.linkUrl,
          name: item.name,
          sort: index + 1
        }, item.id).then(response => {
          if (response.errorCode == 0) {
            this.getBanner();
          } else {
            this.$message.error(response.message)
          }

        }, err => {
        });
      },
      titleChange() {
        this.title = this.title.replace(/(^\s*)|(\s*$)/g, "");
        if (this.title.length > 8) {
          this.title = this.title.substring(0, 8)
        } else if (this.title < 2) {

        } else {
          Service.channel().editorChannel({
            logo: null,
            title: this.title
          }, this.channelId).then(response => {
            if (response.errorCode == 0) {
              this.title = response.data.title;
              this.$message.success('店铺名称编辑成功')
            } else {
              this.$message.error(response.message)
            }

          }, err => {
          });

        }
      },
      getChannelDetail() {
        Service.channel().getChannelDetai({}, this.channelId).then(response => {
          if (response.errorCode == 0) {
            this.title = response.data.title
          } else {
            this.$message.error(response.message)
          }

        }, err => {
        });
      },
      getBanner() {
        Service.banner().getBanner({
          channelId: this.channelId
        },).then(response => {
          if (response.errorCode == 0) {
            this.imgUrlData = response.data
            // for(var i =0 ;i< response.data.length;i++){
            //     for(var j = 0;j< this.imgUrlData.length;j++){
            //         if(i == j){
            //             this.imgUrlData[j] = response.data[i]
            //         }
            //     }
            // }
          } else {
            this.$message.error(response.message)
          }

        }, err => {
        });
      },
      getChannel() {
        Service.channel().getChannel({}).then(response => {
          if (response.errorCode == 0) {
            var selectData = response.data;
            for (let i in selectData) {
              selectData[i].isSelect = false;
              if (i == 0) {
                selectData[0].isSelect = true;
                this.channelId = selectData[0].id;
                if(this.bannerview){
                  this.getChannelDetail();
                  this.getBanner()
                }
              }
            }
            this.selectData = response.data
          } else {
            this.$message.error(response.message)
          }

        }, err => {
        });
      },
      delectImg(index, item) {
        Service.banner().deleteBanner({}, item.id).then(response => {
          if (response.errorCode == 0) {
            this.getBanner();
          } else {
            this.$message.error(response.message)
          }
        }, err => {
        });
      },
      getIndex(index) {
        this.uploadIndex = index;
        console.log(this.uploadIndex)
      },
      beforeAvatarUpload(file) {
        var num = 0;
        for (var i = 0; i < this.imgUrlData.length; i++) {
          if (this.imgUrlData[i].imgUrl) {
            num++
          }
        }
        if ((num >= 4 && this.uploadIndex === '')) {
          this.$message.warning('上传数最多4张');
          return false
        } else {
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
        }
      },
      errphoto(err, file, fileList) {
      },
      handleAvatarSuccess(res, file) {
        console.log(this.uploadIndex);
        Store.commit("setIsLoading", false);
        if (res.data) {
          if (this.uploadIndex === '') {//添加banner
            console.log(res.data);
            this.addBanner(res.data)
            // for(var i = 0;i<this.imgUrlData.length;i++){
            //     if(!this.imgUrlData[i].imgurl){
            //         this.imgUrlData[i].imgurl = res.data;
            //
            //         return;
            //     }
            // }
          } else {
            for (var i = 0; i < this.imgUrlData.length; i++) {
              if (this.uploadIndex == i) {
                this.imgUrlData[i].imgUrl = res.data;
                this.editorBanner(this.imgUrlData[i])
              }
            }
          }

          // this.totalPerson = this.tableData.length;
          // if(this.totalPerson == 0){
          //     this.$message.error('您上传的文件为空，请重新上传');
          // }else{
          //     this.totalpremium = (this.tableData.length)*this.premium;
          // }
        } else {
          this.$message.error(res.message);
        }
      },
      handleChange(file, fileList) {
      },
      changeBox(item) {
        for (let i in this.selectData) {
          this.selectData[i].isSelect = false;
        }
        item.isSelect = true;
        this.$forceUpdate()
      },
    },

  }
</script>

