
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
            .imgFile {
                width: 139px;
                height: 107px;
                background-color: #f9f9f9;
                border-radius: 4px;
                position: relative;
                margin-right: 20px;
                .deleteIcon {
                  position: absolute;
                  right: -1px;
                  top: -1px;
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

              .applicaninfo {
                width: 140px;
                height: 107px;
                background-color: #f9f9f9;
                border-radius: 4px;
                text-align: center;

                .imgBox {
                  display: inline-block;
                  width: 140px;
                  height: 107px;

                  .uploadtext {
                    color: #979797;
                    position: relative;
                    margin-top: 50px;
                    height: 55px;

                    .uploadIcon {
                      font-size: 20px;
                      display: inline-block;
                      vertical-align: middle;
                      color: #56ae97;
                      position: absolute;
                      bottom: 60px;
                      right: 60px;
                    }
                  }
                }
              }
          .channnelTitle {
            padding-bottom: 20px;
            font-weight: 600;
            position: relative;

            .detailImg {
              height: 667px;
              width: 375px;
              position: absolute;
              top: 10px;
              z-index: 9999;
              border-radius: 10px;
              margin-left: 10px;
            }
          }
          .processContent {
            height: 64px;
            width: 300px;
            margin: 0 auto;
          }
          .flexcenter{
            display: flex;
            align-items: center;
          }
          .categoryBox {
            margin-bottom: 20px;
            flex-wrap: wrap;
            .iconadd {
              display: inline-block;
              vertical-align: middle;
              margin-right: 10px;
              font-size: 20px;
            }
            .categoryName {
              padding: 0 10px;
              height: 25px;
              line-height: 25px;
              border-radius: 13px;
              border: solid 1px #e5e5e5;
              margin-right: 10px;
            }
            .selectcategoryName {
              background-color: #56ae97;
            }
            .iconbianji {
              font-size: 14px;
            }


          }
        }
        .inputBox {
            border: 1px solid #e5e5e5;
            height: 30px;
            line-height: 30px;
            text-indent: 10px;
            width: 300px;

          }
        .baseInfo {
          .lableBox {
            margin-bottom: 24px;

            .radioBox {
              .iconxuanze {
                color: #e5e5e5;
              }

              .colorblack {
                margin-right: 30px;
              }
            }

            .timeSelect {
              margin-top: -4px;
            }

            .guigeTable {
              width: 92%;
              border: solid 1px #f6f6f6;

              tr {
                border-bottom: 1px solid #f6f6f6;

                th {
                  padding: 20px 10px;
                  background: #f6f6f6;
                  color: #929292;
                }

                td {
                  padding: 15px 10px;
                  color: #000;
                  line-height: 30px;

                  .iconbianji {
                    margin-left: 15px;
                  }

                  .editorInput {
                    text-align: center;
                  }

                  .borderBox {
                    width: 66px;
                    border: 1px solid #e5e5e5;
                    text-align: right;
                    padding-right: 5px;
                  }
                }
              }
            }

            .guigeBox {
              min-width: 168px;
              height: 46px;
              line-height: 46px;
              text-align: center;
              background-color: #f9f9f9;
              position: relative;
              margin-right: 20px;

              .iconcuowu {
                position: absolute;
                right: 0;
                top: -15px;
              }

              .iconiconjia {
                font-size: 12px;
                position: absolute;
                top: -6px;
                right: 78px;
              }

              .guigeText {
                position: absolute;
                top: 8px;
                right: 58px;
              }
            }

            .inputBox {
              text-indent: 10px;
              width: 730px;
              height: 30px;
              border: solid 1px #e5e5e5;
              line-height: 30px;
            }

            .yunfeibox {
              width: 243px;
            }

            }

          .commonProblem {
            .problemBox {
              position: relative;

              .iconcuowu {
                position: absolute;
                right: 106px;
                top: 26px;
              }

              .question {
                margin-bottom: 10px;

                .lableText {
                  margin-right: 12px;
                }

                .indexLable {
                  display: inline-block;
                  width: 30px;
                }

                .questionInput {
                  /*height: 30px;*/
                  line-height: 30px;
                  width: 735px;
                  border: solid 1px #e5e5e5;
                  min-height: 30px;
                  text-indent: 10px;
                }
              }

              .answer {
                margin-bottom: 10px;
                margin-left: 35px;

                .lableText {
                  margin-right: 14px;
                }

                .answerInput {
                  text-indent: 10px;
                  resize: none;
                  line-height: 30px;
                  width: 735px;
                }
              }
            }

            .addButton {
              width: 120px;
              line-height: 40px;
              height: 40px;
              border-radius: 10px;
              border: solid 1px #56ae97;
              text-align: center;
              margin: 30px 60px;
              color: #56ae97;
              font-size: 12px;

              .iconfont {
                font-size: 12px;
              }
            }
          }
        }

        .nextButoon {
          margin: 50px auto;
          text-align: center;
          justify-content: center;

          .bacButton {
            display: inline-block;
          }
        }
      }
    }
  }

  .dialogone::after,.dialog::after,.dialogtwo::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 0;
    vertical-align: middle;
  }

  .dialogone,.dialog,.dialogtwo {
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

        .rightIcon {
          position: absolute;
          right: 20px;
          top: 10px;
        }
      }

      .messageContent {
        position: relative;
        padding: 20px 30px;
        color: #606266;
        font-size: 14px;

        .messagemessage {
          margin-bottom: 12px;
          flex-wrap: wrap;
          .categoryName {
              padding: 0 10px;
              height: 25px;
              line-height: 25px;
              border-radius: 13px;
              border: solid 1px #e5e5e5;
              margin-right: 10px;
            }
            .selectcategoryName {
              background-color: #56ae97;
            }
          .inputBox {
            border: 1px solid #e5e5e5;
            height: 30px;
            line-height: 30px;
            text-indent: 10px;
            width: 300px;
          }

          .drageBox {
            height: 24px;
            padding: 0 10px;
            margin-bottom: 10px;
            background-color: #f9f9f9;
            border-radius: 4px;
            line-height: 24px;
            text-align: center;
            margin-right: 20px;
            position: relative;

            .iconcuowu {
              position: absolute;
              right: -9px;
              top: -9px;
              color: #929292;
            }
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
  .dialogtwo{
     z-index: 1001;
  }
</style>
<template>
  <div class="general">
    <KlTop></KlTop>
    <div class="salecustomercontent contaner">
      <Aside></Aside>
      <div class="content">
        <div class="contanternews">
            <div class="selectChannel backWhite padding20 baseInfo" v-show="categoryview">
               <div class="lableBox">
                  <span class="colorGrey font12 marginright10">文章标题</span>
                  <input type="text" class="colorblack font12 inputBox" v-model="title" @change="changeName('title')"
                        placeholder="请输入小于26个字符（含标点空格在内）"/>
              </div>
               <div class="lableBox">
                  <span class="colorGrey font12 marginright10">作者</span>
                  <input type="text" class="colorblack font12 inputBox" v-model="author" @change="changeName('author')"
                        placeholder="请输入作者"/>
              </div>
               <div class="lableBox">
                  <span class="colorGrey font12 marginright10">视频链接</span>
                  <input type="text" class="colorblack font12 inputBox" v-model=" videoUrl" @change="changeName(' videoUrl')"
                        placeholder="请输入视频链接"/>
              </div>
               <div class="lableBox">
                  <span class="colorGrey font12 marginright10">文章来源</span>
                  <input type="text" class="colorblack font12 inputBox" v-model="source" @change="changeName('source')"
                        placeholder="请输入文章来源"/>
              </div>
              <div class="categoryBox flexcenter">
                <span class="colorGrey font12 marginright10">列表隐藏作者和来源</span>
                <div class="radioBox marginLeft10" >
                    <i class="iconfont iconxuanzhong color2087 font20 cursor" v-if="hiddenSource == true"></i>
                    <i class="iconfont iconxuanze  font20 cursor" v-if="hiddenSource != true" @click="hiddenSource = true"></i>
                    <span class="colorblack font12">隐藏</span>
                    <i class="iconfont iconxuanzhong color2087 font20 cursor" v-if="hiddenSource == false"></i>
                    <i class="iconfont iconxuanze  font20 cursor" v-if="hiddenSource != false" @click="hiddenSource = false"></i>
                    <span class="colorblack font12">不隐藏</span>
                </div>
              </div>
              <div class="categoryBox flexcenter">
                  <span class="colorGrey font12 marginright10">选择标签</span>
                  <div @click="changeItemone(item)" :class="item.isSelectid?'categoryName cursor selectcategoryName':'categoryName cursor'"
                      class="categoryName font12" v-for="(item,index) in categoryList" :key="item.id" :index="index">
                    <span :class="item.isSelectid?'colorfff':'color2087'">{{item.name}}</span>
                  </div>
                  <div class="bacButton cursor  marginLeft10 " style="margin-top: 5px;" @click="opencategory()" v-if="categoryadd">新建标签</div>
                  <div class="bacButton cursor  marginLeft10 " style="margin-top: 5px;"  @click="openeditorcategory()" v-if="iscategoryupdate || categorydelete">标签管理</div>
                  <!-- <i class="iconfont iconadd marginLeft10 color2087 font18 cursor" ></i> -->
              </div>
              <div class="categoryBox flex">
                <span class="font12 marginright10 colorGrey">上传封面图</span>
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
              </div>
              <div class="categoryBox flex">
                  <span class="colorGrey font12 marginright10">文章正文</span>
                  <vue-ueditor-wrap v-model="description" :config="myConfig" @beforeInit="addCustomButtom" :key="1"></vue-ueditor-wrap>
              </div>
              <div class="categoryBox flexcenter">
                  <span class="colorGrey font12 marginright10">上架时间</span>
                  <div class="timeSelect marginLeft10" >
                      <el-date-picker
                              :picker-options="expireTimeOption"
                              @change="changeSelfTime()"
                              v-model="shelfTime"
                              type="datetime"
                              placeholder="选择日期时间"
                              default-time="12:00:00">
                      </el-date-picker>
                  </div>
              </div>
                    <!-- <div class="lableBox flex">
                        <span class="colorGrey font12 marginright10">下架时间</span>
                        <div class="timeSelect">
                            <el-date-picker
                                    :picker-options="expireTimeOption"
                                    @change="changeoffTime()"
                                    v-model="offTime"
                                    type="datetime"
                                    placeholder="选择日期时间"
                                    default-time="12:00:00">
                            </el-date-picker>
                        </div>
                    </div> -->
                      <div class="categoryBox flex">
                        <div class="button bacButton" @click="publisharticle()">确定</div>
                      </div>
            </div>

        </div>
      </div>
    </div>
     <div class="dialog">
      <div class="messge">
        <div class="messageHeader">
          <div class="messagetitle">
            <span>新增标签</span>
          </div>
          <div class="rightIcon">
            <i class="iconfont iconcuowu cursor colorGrey" @click="closeDiologone()"></i>
          </div>
        </div>
        <div class="messageContent">
          <div class="messagemessage">
            <span class="lableText colorblack font12">标签名称</span>
            <input type="text" v-model="category.name" @change="changeValue('name','')"
                   class="inputBox marginLeft10 colorblack font12" placeholder="请输入最少2个，最多6个字符"/>
          </div>
        </div>
        <div class="messagebtns">
          <div class="button borderButton copyButton" @click="closeDiologone()">
            取消
          </div>
          <div class="button bacButton" @click="addCategory()">
            确认
          </div>
        </div>
      </div>
    </div>
      <div class="dialogtwo">
      <div class="messge">
        <div class="messageHeader">
          <div class="messagetitle">
            <span>编辑标签</span>
          </div>
          <div class="rightIcon">
            <i class="iconfont iconcuowu cursor colorGrey" @click="closeDiologtwo()"></i>
          </div>
        </div>
        <div class="messageContent">
          <div class="messagemessage">
            <span class="lableText colorblack font12">标签名称</span>
            <input type="text" v-model="slectcategoryname" @change="changeValue('slectcategoryname','')"
                   class="inputBox marginLeft10 colorblack font12" placeholder="请输入最少2个，最多6个字符"/>
          </div>
        </div>
        <div class="messagebtns">
          <div class="button borderButton copyButton" @click="closeDiologtwo()">
            取消
          </div>
          <div class="button bacButton" @click="addCategory()">
            确认
          </div>
        </div>
      </div>
    </div>
    <div class="dialogone">
      <div class="messge">
        <div class="messageHeader">
          <div class="messagetitle">
            <span>标签管理</span>
          </div>
          <div class="rightIcon">
            <i class="iconfont iconcuowu cursor colorGrey" @click="closeDiologone()"></i>
          </div>
        </div>
        <div class="messageContent">
          <div class="messagemessage">
            <span class="lableText colorblack font12">标签排序</span>
            <span class="marginLeft10 colorGrey font12">拖动以下标签可以调整标签的展示排序</span>
          </div>
          <div class="messagemessage flex">
            <div @dragstart="handleDragStart($event,item)"
                 @dragover.prevent="handleDragOver($event,item)"
                 @dragenter="handleDragEnter($event,item,index)"
                 @dragend="handleDragEnd($event,item)" :draggable="iscategoryupdate"
                :class="item.isSelect?'categoryName cursor colorfff selectcategoryName':'categoryName color2087 cursor'" @click="changeItem(item)" v-for="(item,index) in categoryList" :key="item.id">
                    {{item.name}}
            </div>
          </div>
        </div>
        <div class="messagebtns">
          <div class="button borderButton copyButton"  v-if="categorydelete" @click="deleteCategory()">
            删除标签
          </div>
          <div class="button bacButton" v-if="iscategoryupdate" @click="opendialogtwo()">
            修改标签
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
 import '../../../static/UEditor/ueditor.config.js'
  import '../../../static/UEditor/ueditor.all.js'
  import '../../../static/UEditor/lang/zh-cn/zh-cn.js'
  import Util from '@/common/util'
  import Aside from '@/components/aside'
  import AddSpecs from '@/components/addSpecs'
  import GoumaiEditor from '@/components/goumaiEditor'
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
      AddSpecs,
      GoumaiEditor
    },
    data() {
      return {
        hiddenSource: false,
        videoUrl: '',
        author: '',
        source:'',
        upFileAction: '',
        imgUrl:'',
        slectcategoryname: '',
        selectcategoryId: '',
        shelfTime: '',
        offTime: '',
        description: '',
        headers: {},
        id:'',
        sort: '',
        category: {
          name: '',
          sort: '',
        },
        title: '',
         expireTimeOption:{
                    disabledDate(date) {
                        return date.getTime() < Date.now() - 8.64e7;
                    }
                },
        myConfig: {
                  autoHeightEnabled: false,
                  initialFrameHeight: 375,
                  initialFrameWidth: '640',
                  UEDITOR_HOME_URL: '../../../static/UEditor/',
                  serverUrl: ''
        },
        editorcategoryId: '',
        categoryId: '',
        categoryList: [],
        faqs: [],
        dragging: null,
        iscategoryupdate: false,
        categorydelete: false,
        categoryview: false, // 标签查询权限
        categoryadd: false,// 标签查询增加
        categorysort: false,
        categoryitemview: false,
        categoryitemadd: false, // 项目添加
        categoryitemupdate: false,
        categoryitemdelete: false,
      };
    },
    created() {
       var  tokenVal = Util.localStorageUtil.get('access_token');
      this.headers = {token: tokenVal,shopId: 1};
      this.myConfig.serverUrl = Global.requestUrl+"/kl-store/ueditor/index";
      this.id = this.$route.query.id;
      if(this.id){
        this.getDetail()
      }else{
       this.getcategoryList();
      }
      this.userInfo = JSON.parse(localStorage.getItem('user'));
      this.iscategoryupdate = this.havePermissions('articleCategory:update')
      this.categorydelete = this.havePermissions('articleCategory:delete')
      this.categoryview = this.havePermissions('articleCategory:view')
      this.categoryadd = this.havePermissions('articleCategory:add')
    },
    watch: {},
    mounted() {
      this.upFileAction = Global.requestUrl + "/kl-store/admin/upload/file";
    },
    methods: {
      publisharticle(){
        if(!this.changeName('title','submit')){
          return
        }
        if(!this.changeName('author','submit')){
          return
        }
        if(!this.changeName('videoUrl','submit')){
          return
        }
         if(!this.changeName('source','submit')){
          return
        }
        // if(!this.selectcategoryId){
        //   this.$message.error('请选择标签!');
        //   return
        // }
        if(!this.description){
          this.$message.error('请输入正文!');
          return
        }
        var publishTime = '';
         if(!this.shelfTime){
            this.$message.error('请选择上架时间!');
            return
          }else{
            publishTime = Date.parse(this.shelfTime)
          }
        // var publishTime = Date.parse(new Date());
        // if(this.shelvesType == 1){
        //   if(!this.shelfTime){
        //     this.$message.error('请选择上架时间!');
        //     return
        //   }else{
        //     publishTime = Date.parse(this.shelfTime)
        //   }
        // }
        if(this.id){
          Service.article().editarticle({
            author: this.author,
            categoryId: this.selectcategoryId,
            "content": this.description,
            "imgUrl": this.imgUrl,
            "offlineTime": "",
            "publishTime": publishTime,
            "source": this.source,
            "title": this.title,
            "videoUrl": this.videoUrl,
            hiddenSource: this.hiddenSource
          },this.id).then(response => {
            if (response.errorCode == 0) {
              this.$message.success('编辑成功');
              this.$router.push({name:'articlelist'})
            } else {
              this.$message.error(response.message)
            }
          }, err => {
          });
        }else{
          Service.article().addarticle({
            author: this.author,
            categoryId: this.selectcategoryId,
            "content": this.description,
            "imgUrl": this.imgUrl,
            "offlineTime": "",
            "publishTime": publishTime,
            "source": this.source,
            "title": this.title,
            "videoUrl": this.videoUrl,
            hiddenSource: this.hiddenSource
          }).then(response => {
            if (response.errorCode == 0) {
              this.$message.success('添加成功');
              this.$router.push({name:'articlelist'})
            } else {
              this.$message.error(response.message)
            }
          }, err => {
          });
        }

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
       delectImg() {
        this.imgUrl = '';
      },
    // 添加自定义按钮
        addCustomButtom (editorId) {
            window.UE.registerUI('test-button', function (editor, uiName) {
                // 注册按钮执行时的 command 命令，使用命令默认就会带有回退操作
                editor.registerCommand(uiName, {
                    execCommand: function () {
                        editor.execCommand('inserthtml', `<span>这是一段由自定义按钮添加的文字</span>`);
                    }
                });
                // 创建一个 button
                var btn = new window.UE.ui.Button({
                    // 按钮的名字
                    name: uiName,
                    // 提示
                    title: '鼠标悬停时的提示文字',
                    // 需要添加的额外样式，可指定 icon 图标，图标路径参考常见问题 2
                    cssRules: "background-image: url('/test-button.png') !important;background-size: cover;",
                    // 点击时执行的命令
                    onclick: function () {
                        // 这里可以不用执行命令，做你自己的操作也可
                        editor.execCommand(uiName);
                    }
                });
                // 当点到编辑内容上时，按钮要做的状态反射
                editor.addListener('selectionchange', function () {
                    var state = editor.queryCommandState(uiName);
                    if (state === -1) {
                        btn.setDisabled(true);
                        btn.setChecked(false);
                    } else {
                        btn.setDisabled(false);
                        btn.setChecked(state);
                    }
                });
                // 因为你是添加 button，所以需要返回这个 button
                return btn;
            }, 0 /* 指定添加到工具栏上的哪个位置，默认时追加到最后 */, editorId /* 指定这个 UI 是哪个编辑器实例上的，默认是页面上所有的编辑器都会添加这个按钮 */);
        },
        // 添加自定义弹窗
        addCustomDialog (editorId) {
            window.UE.registerUI('test-dialog', function (editor, uiName) {
                // 创建 dialog
                var dialog = new window.UE.ui.Dialog({
                    // 指定弹出层中页面的路径，这里只能支持页面，路径参考常见问题 2
                    iframeUrl: '/customizeDialogPage.html',
                    // 需要指定当前的编辑器实例
                    editor: editor,
                    // 指定 dialog 的名字
                    name: uiName,
                    // dialog 的标题
                    title: '这是一个自定义的 Dialog 浮层',
                    // 指定 dialog 的外围样式
                    cssRules: 'width:600px;height:300px;',
                    // 如果给出了 buttons 就代表 dialog 有确定和取消
                    buttons: [
                        {
                            className: 'edui-okbutton',
                            label: '确定',
                            onclick: function () {
                                dialog.close(true);
                            }
                        },
                        {
                            className: 'edui-cancelbutton',
                            label: '取消',
                            onclick: function () {
                                dialog.close(false);
                            }
                        }
                    ]
                });
                // 参考上面的自定义按钮
                var btn = new window.UE.ui.Button({
                    name: 'dialog-button',
                    title: '鼠标悬停时的提示文字',
                    cssRules: `background-image: url('/test-dialog.png') !important;background-size: cover;`,
                    onclick: function () {
                        // 渲染dialog
                        dialog.render();
                        dialog.open();
                    }
                });
                return btn;
            }, 0 /* 指定添加到工具栏上的那个位置，默认时追加到最后 */, editorId /* 指定这个UI是哪个编辑器实例上的，默认是页面上所有的编辑器都会添加这个按钮 */);
        },
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
       changeName(str, type) {
        var on = true;
        if (str == 'title') {
          if (this.title.length > 26 || this.title.length < 2) {
            this.$message.error('文章标题必须填写，最多26个字且不少于2个字');
            on = false;
            return;
          }
        }

        if (str == 'author') {
          if(this.author){
             if (this.author.length > 20 || this.author.length < 2) {
              this.$message.error('作者名称，最多20个字不少于2个字');
              on = false;
              return;
            }
          }
        }
        if (str == 'source') {
          if(this.source){
             if (this.source.length > 30 || this.source.length < 2) {
              this.$message.error('文章来源，最多30个字不少于2个字');
              on = false;
              return;
            }
          }
        }
        if (str == 'videoUrl') {
          if(this.videoUrl){
               var reg = /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/;
              if (!reg.test(this.videoUrl) && (this.videoUrl != '')) {
                  this.$message.error('请输入正确的视频链接地址');
                  on = false;
                  return;
              }
          }
        }
        if (type == 'submit') {
          return on;
        }
      },
        changeoffTime(type) {
          var on = true;
          if (Date.parse(new Date()) > Date.parse(this.offTime)) {
            on = false;
            this.$message.error('下架时间应晚于当前时间');
            this.offTime = '';
          }
          if (this.isShangjia == 2 && this.shelfTime) {
            if (Date.parse(this.shelfTime) >= Date.parse(this.offTime)) {
              on = false;
              this.$message.error('下架时间应晚于商品上架时间');
              this.offTime = '';
            }
          }
          if (type == 'submit') {
            return on
          }

      },
      changeSelfTime(type) {
        return
        var on = true;
        if (Date.parse(new Date()) > Date.parse(this.shelfTime)) {
          on = false;
          this.$message.error('上架时间应晚于当前时间');
          this.shelfTime = '';
        }
        if (this.isShangjia == 2 && this.shelfTime) {
          if (Date.parse(this.shelfTime) >= Date.parse(this.offTime)) {
            on = false;
            this.$message.error('上架时间应早于商品上架时间');
            this.shelfTime = '';
          }
        }
        if (type == 'submit') {
          return on;
        }
      },
      handleDragStart(e, item) {
        e.dataTransfer.setData("imgInfo", '')
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
        const newItems = [...this.categoryList];
        const src = newItems.indexOf(this.dragging);
        const dst = newItems.indexOf(item);
        newItems.splice(dst, 0, ...newItems.splice(src, 1));
        this.categoryList = newItems;
        var arrData = [];
        for (var i = 0; i < this.categoryList.length; i++) {
          var obj = {
            id: '',
            sort: ''
          };
          obj.id = this.categoryList[i].id;
          obj.sort = i + 1;
          arrData.push(obj)
        }
        this.sortCategory(arrData)
      },
      sortCategory(arrData) {
        Service.article().sortcategory(arrData).then(response => {
          if (response.errorCode == 0) {
            if (this.categoryId) {
              for (let i in arrData) {
                if (arrData[i].id == this.editorcategoryId) {
                  this.category.sort = arrData[i].sort;
                }
              }
            }
          } else {
            this.$message.error(response.message)
          }
        }, err => {
        });
      },
      // 选择修改的标签
      changeItem(item) {
        this.categoryId = item.id;
        this.slectcategoryname = item.name;
        this.sort = item.sort;
        // this.editorcategoryId = id;
        for (let i in this.categoryList) {
          this.categoryList[i].isSelect = false;
        }
        item.isSelect = true;
        this.$forceUpdate()
      },
      addCategory() {
        if(!this.categoryId){
          if (!this.changeValue('name', 'submit')) {
            return;
          }
          Service.article().addCategory({
            name: this.category.name,
            sort: ''
          }).then(response => {
            if (response.errorCode == 0) {
              this.$message.success('创建成功');
              this.category.name = '';
              $(".dialog").css({"display": 'none'});
              this.getcategoryList();
            } else {
              this.$message.error(response.message)
            }
          }, err => {
          });
        }else{
          if (!this.changeValue('slectcategoryname', 'submit')) {
            return;
          }
          Service.article().editorcategory({
            name: this.slectcategoryname,
            sort: this.sort
          }, this.categoryId).then(response => {
            if (response.errorCode == 0) {
              this.$message.success('编辑成功');
              this.categoryId = '';
              this.slectcategoryname = '';
              this.sort = '';
              $(".dialogtwo").css({"display": 'none'});
              $(".dialogone").css({"display": 'none'});
              this.getcategoryList();
            } else {
              this.$message.error(response.message)
            }
          }, err => {
          });
        }
      },
      changeValue(name, type) {
        var on = true;
        if(name == 'slectcategoryname'){
          if(this.slectcategoryname){
            this.slectcategoryname = this.slectcategoryname.replace(/\s+/g, "");
              if ( this.slectcategoryname.length < 2 ||  this.slectcategoryname.length > 6) {
                this.$message.error('标签名称最少2个，最多6个字符');
                on = false;
                return;
              }
          }else{
            this.$message.error('请输入标签名称');
              on = false;
              return;
          }
        }else{
            if (this.category[name].length != 0) {
              this.category[name] = this.category[name].replace(/\s+/g, "");
            } else {
              this.$message.error('请输入标签名称');
              on = false;
              return;
            }
            if (name == 'name') {
              if (this.category[name].length < 2 || this.category[name].length > 6) {
                this.$message.error('标签名称最少2个，最多6个字符');
                on = false;
                return;
              }
            }
        }
        if (type == 'submit') {
          return on;
        }
      },
      closeDiologone() {//取消弹框确认是否有删除标签
        // this.getcategoryList();
        $(".dialogone").css({"display": "none"})
        $(".dialog").css({"display": "none"})
      },
      closeDiologtwo(){
            $(".dialogtwo").css({"display": "none"})
      },
      opencategory(){
           $(".dialog").css({"display": "block"})
      },
      openeditorcategory() {
        event.stopPropagation();
        // if (!id) {
        //   this.title = '新增问题标签';
        //   this.category.name = '';
        //   this.editorcategoryId = '';
        // } else {
        //   this.title = '编辑问题标签';

        //   Service.article().getCategory({}, id).then(response => {
        //     if (response.errorCode == 0) {
        //       this.category.name = response.data.name;
        //       this.category.sort = response.data.sort;
        //     } else {
        //       this.$message.error(response.message)
        //     }
        //   }, err => {
        //   });
        // }
        $(".dialogone").css({'display': 'block'});
      },
      changeItemone(item){
        this.selectcategoryId = item.id;
         for (let i in this.categoryList) {
          this.categoryList[i].isSelectid = false;
        }
        item.isSelectid = true;
        this.$forceUpdate()
      },
     getcategoryList(){
        Service.article().categorylist({
        }).then(response => {
          if (response.errorCode == 0) {
            if (response.data.length == 0) {
            } else {
            var categoryList = response.data;
              if(this.selectcategoryId){
                for(let i in categoryList){
                  if(categoryList[i].id == this.selectcategoryId){
                    categoryList[i].isSelectid = true;
                  }
                }
              }
              this.categoryList = categoryList;
            }
          } else {
            this.$message.error(response.message)
          }
        }, err => {
        });
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
      getDetail(){
        Service.article().getarticle({
        },this.id).then(response => {
          if (response.errorCode == 0) {
              this.selectcategoryId = response.data.categoryId;
              this.title = response.data.title;
              this.description = response.data.content;
              this.imgUrl = response.data.imgUrl;
              this.source = response.data.source;
              this.videoUrl = response.data.videoUrl;
              this.hiddenSource = response.data.hiddenSource,
              this.author = response.data.author;
              var curtitme = Date.parse(new Date());
              this.shelfTime = this.timetrans(response.data.publishTime)
              this.selectcategoryId = response.data.categoryId;
              this.getcategoryList()
          } else {
            this.$message.error(response.message)
          }
        }, err => {
        });
      },
       opendialogtwo(){
        if(this.slectcategoryname){
           $(".dialogtwo").css({"display":'block'})
        }else{
          this.$message.error('请选择需要修改的标签')
        }
      },
      //删除标签
      deleteCategory() {
        if(this.categoryId){
            this.$confirm('删除后，该标签下面的文章中将没有标签，您可以重新修改标签，确认删除吗？?', '', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            Service.article().deletecategory({}, this.categoryId).then(response => {
              if (response.errorCode == 0) {
                if(this.categoryId == this.selectcategoryId){
                  this.selectcategoryId = '';
                }
                this.categoryId = '';
                this.slectcategoryname = '';
                this.sort = '';
                $(".dialogtwo").css({"display": 'none'});
                $(".dialogone").css({"display": 'none'});
                this.getcategoryList();
              } else {
                this.$message.error(response.message)
              }
            }, err => {
            });
          }).catch(() => {
          });
        }else{
          this.$message.error('请选择删除的标签')
        }
      },

    }
  }
</script>

