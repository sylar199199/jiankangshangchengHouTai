<style rel="stylesheet/scss" lang="scss" scoped>
  $baseFontSize: 192;
  .salecustomercontent {
    display: flex;
    min-height: calc(100vh - 50px);
    margin-top: 60px;

    .personInfo {
      position: fixed;
      top: 0;
      height: 100vh;
      width: 100%;
      left: 0;
      z-index: 1000;

      .dialogcontent {
        position: relative;
        height: 640px;
        background: #fff;
        width: 1000px;
        display: flex;
        flex-direction: column;
        box-shadow: 0px 7px 59px 0px #cccccc;

        .iconshanchu {
          color: #D0CFCF;
          cursor: pointer;
          position: absolute;
          right: 16px;
          top: 10px;
        }

        .baseInfo {
          margin-top: 20px;

          .editorBox {
            .preview {
              margin-right: 20px;
              width: 267px;
              height: 500px;
              background-color: #ffffff;
              border: solid 1px #e5e5e5;

              .previewTitle {
                display: inline-block;
                text-align: center;
                color: #fff;
                width: 267px;
                height: 40px;
                line-height: 40px;
                background-color: #000000
              }

              .previewcontent {
                padding: 0 15px;
                max-height: 433px;
                overflow-y: auto;

                p {
                  line-height: 16px;
                  margin: 0 !important;
                }
              }
            }
          }
        }

        .nextButoon {
          /*margin: 0px auto;
          text-align: center;
          justify-content: center;*/
          position: absolute;
          bottom: 10px;
          left: 50%;
          margin-left: -120px;

          .bacButton {
            display: inline-block;
          }
        }
      }
    }
  }
</style>
<template>

  <div class="personInfo dialogbac">
    <div class="dialogcontent">
      <i class="iconfont iconshanchu" @click="goBack()"></i>

      <div class="contanternews backWhite padding20 baseInfo">
        <div class="editorBox flex">
          <div class="preview">
            <span class="previewTitle">{{title}}</span>
            <div class="previewcontent font12" v-html="description"></div>
          </div>
          <vue-ueditor-wrap v-model="description" :config="myConfig" @beforeInit="addCustomButtom"
                            :key="1"></vue-ueditor-wrap>
        </div>
      </div>
      <div class="nextButoon flexBetween">
        <span class="borderButton" @click="goBack()">取消</span>
        <span class="bacButton marginLeft10" @click="submitCommodity()">保存</span>
      </div>
    </div>
  </div>
</template>

<script>
  import '../../static/UEditor/ueditor.config.js'
  import '../../static/UEditor/ueditor.all.js'
  import '../../static/UEditor/lang/zh-cn/zh-cn.js'
  import Util from '@/common/util'
  import GoumaiEditor from '@/components/goumaiEditor'
  import Filter from '@/common/filter'
  import Service from '@/common/service'
  import Store from '@/vuex/index'
  import Global from '@/common/global'

  export default {
    name: "salecustomer",
    components: {
      GoumaiEditor
    },
    props: {
      goodsObj: {
        type: Object
      },
      productId: {
        type: String
      },
      title: {
        type: String
      }
    },
    data() {
      return {
        description: '',
        expireTimeOption: {
          disabledDate(date) {
            return date.getTime() < Date.now() - 8.64e7;
          }
        },
        isInstructions: 1,
        myConfig: {
          autoHeightEnabled: false,
          initialFrameHeight: 375,
          initialFrameWidth: '640',
          UEDITOR_HOME_URL: '../../static/UEditor/',
        },
        headers: {},
        dragging: null,

      };
    },

    created() {
      var tokenVal = Util.localStorageUtil.get('access_token');

      this.myConfig.serverUrl = Global.requestUrl+"/kl-store/ueditor/index";
      if (this.title == "助力规则") {
        this.gethelpRules()
        this.headers = {token: tokenVal, shopId: 1};
      } else if (this.title == "兑换规则") {
        this.headers = {token: tokenVal, shopId: 2};
        this.getexchangeRules()
      }
    },
    watch: {
      'description': function () {
        this.$nextTick(() => {
          var img = $('.previewcontent ').find('img');
          for (var i = 0; i < img.length; i++) {
            // console.log($(img[i]).attr("style"))
            if ($(img[i]).width() > window.screen.width) {
              $(img[i]).css("cssText", "width:100% !important;box-sizing:border-box !important;word-wrap: break-word !important;")
            } else {
              $(img[i]).css({'max-width': '100%', 'height': 'auto'})
            }
          }
        })
      }
    },
    mounted() {

    },
    methods: {
      goBack() {
        this.$emit('clickbanner', 'cancle')
      },
      gethelpRules() {
        Service.lottery().gethelpRules({},).then(response => {
          if (response.errorCode == 0) {
            if (response.data) {
              this.description = response.data.helpRules;
            }
          } else {
            this.$message.error(response.message)
          }

        }, err => {
        });
      },
      getexchangeRules() {
        Service.lzredeem().getexchangeRule({},).then(response => {
        if (response.errorCode == 0) {

            if (response.data) {
              this.description = response.data.value;
            }
          } else {
            this.$message.error(response.message)
          }


        }, err => {
        });
      },
      submitCommodity() {
        if (!this.description) {
          this.$message.error(`请输入${this.title}`);
          return;
        }
        if (this.title == '兑换规则') {
          Service.lzredeem().exchangeRules({value: this.description},).then(response => {
            if (response.errorCode == 0) {
              this.finish = true;
              this.$message.success('操作成功');
              this.$emit('clickbanner', 'sure')
            } else {
              this.$message.error(response.message)
            }

          }, err => {
          });
        } else if (this.title == '助力规则') {
          Service.lottery().addhelpRules({helpRules: this.description},).then(response => {
            if (response.errorCode == 0) {
              this.finish = true;
              this.$message.success('操作成功');
              this.$emit('clickbanner', 'sure')
            } else {
              this.$message.error(response.message)
            }

          }, err => {
          });

        }
      },
      deleteData(index) {
        this.goodsObj.faqs.splice(index, 1)
      },
      addButton() {
        var obj = {question: '', answer: '', id: '', sort: ''};
        if (this.goodsObj.faqs.length >= 10) {
          this.$message.error('常见疑问，不得超过10个')
        } else {
          this.goodsObj.faqs.push(obj)
        }
      },
      // 添加自定义按钮
      addCustomButtom(editorId) {
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
      addCustomDialog(editorId) {
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
      getbackData(str) {
        if (str == 'sure') {
          this.showSpecs = false;
        }
        if (str == 'cancle') {
          this.showSpecs = false;
        }
      },
      addSpec() {
        this.showSpecs = true;
      },
      handleDragStart(e, item) {
        this.dragging = item;
        console.log(this.dragging)
      },
      handleDragEnd(e, item) {
        this.dragging = null
      },
      //首先把div变成可以放置的元素，即重写dragenter/dragover
      handleDragOver(e) {
        e.dataTransfer.dropEffect = 'move'// e.dataTransfer.dropEffect="move";//在dragenter中针对放置目标来设置!
      },
      handleDragEnter(e, item) {
        e.dataTransfer.effectAllowed = "move";//为需要移动的元素设置dragstart事件
        if (item === this.dragging) {
          return
        }
        const newItems = [...this.guigeData];
        console.log(newItems);
        const src = newItems.indexOf(this.dragging);
        const dst = newItems.indexOf(item);
        newItems.splice(dst, 0, ...newItems.splice(src, 1));
        this.guigeData = newItems
      },
      delectImg(index, item) {
        console.log(item);
        item.imgurl = '';
        this.$forceUpdate()
      },
      getIndex(index) {
        this.uploadIndex = index;
        console.log(this.uploadIndex)
      },
      beforeAvatarUpload(file) {
        var num = 0;
        for (var i = 0; i < this.imgUrlData.length; i++) {
          if (this.imgUrlData[i].imgurl) {
            num++
          }
        }
        if ((num == 4 && this.uploadIndex === '')) {
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
          if (this.uploadIndex === '') {
            for (var i = 0; i < this.imgUrlData.length; i++) {
              if (!this.imgUrlData[i].imgurl) {
                this.imgUrlData[i].imgurl = res.data;
                return;
              }
            }
          } else {
            for (var i = 0; i < this.imgUrlData.length; i++) {
              if (this.uploadIndex == i) {
                this.imgUrlData[i].imgurl = res.data;
              }
            }
          }
        } else {
          this.$message.error(res.message);
        }
      },
      handleChange(file, fileList) {
      },
      changeBox(item, index) {
        for (let i in this.selectData) {
          this.selectData[i].isSelect = false;
        }
        item.isSelect = true;
        this.isDetail = index;
        this.$forceUpdate()
      },
    },

  }
</script>

