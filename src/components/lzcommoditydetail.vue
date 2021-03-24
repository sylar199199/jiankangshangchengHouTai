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
          padding-bottom: 30px;

          .channnelTitle {
            padding-bottom: 20px;
          }

          .processContent {
            height: 64px;
            width: 300px;
            margin: 0 auto;
          }

          .channnelContent {
            margin-bottom: 20px;

            .channnelBox {
              margin-right: 20px;
              padding: 15px 35px;
              border: solid 1px #b7b7b7;
              text-align: center;
              position: relative;
            }

            .selectBox {
              margin-right: 20px;
              padding: 15px 35px;
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

            .imgUrlBox {
              flex-wrap: wrap;

              .imgFile {
                width: 139px;
                height: 107px;
                background-color: #f9f9f9;
                border-radius: 4px;
                margin-bottom: 12px;
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
            }
          }

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
</style>
<template>
  <div class="contanternews">
    <div class="selectChannel backWhite padding20">
      <div class="processContent ">
        <img src="../assets/images/producttwo.png">
      </div>
    </div>
    <div class="selectChannel backWhite padding20 baseInfo">
      <div class="channnelContent flex">
        <div @click="changeBox(item,index)"
             :class="item.isSelect?'selectBox cursor color2087 font12':'channnelBox cursor font12 colorGrey'"
             v-for="(item,index) in selectData" :key="item.name">
          <span> {{item.name}}</span>
          <img v-if='item.isSelect' class="selectIcon " src="../assets/images/selectIcon.png">
        </div>
      </div>
      <div class="editorBox flex" v-if="isDetail==0">
        <div class="preview">
          <span class="previewTitle">图文详情</span>
          <div class="previewcontent font12" v-html="goodsObj.description"></div>
        </div>
        <vue-ueditor-wrap v-model="goodsObj.description" :config="myConfig" @beforeInit="addCustomButtom"
                          :key="1"></vue-ueditor-wrap>
      </div>
      <div class="font12 colorGrey fr margin10" v-if="isDetail==0">注意：为保证前台良好的图片显示效果，请将图片宽度为：xx 像素</div>
      <div class="editorBox flex" v-if="isDetail==1">
        <div class="preview">
          <span class="previewTitle">常见问题</span>
          <div class="previewcontent font12" v-html="goodsObj.faqs"></div>
        </div>
        <vue-ueditor-wrap v-model="goodsObj.faqs" :config="myConfig" @beforeInit="addCustomButtom"
                          :key="1"></vue-ueditor-wrap>
      </div>
    </div>
    <div class="nextButoon flexBetween">
      <span class="borderButton" @click="goBack()">上一步</span>
      <span class="bacButton marginLeft10" @click="submitCommodity()">完成</span>
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
        type: Number
      }
    },
    data() {
      return {
        purchaseLimit: '',
        isDetail: 0,
        expireTimeOption: {
          disabledDate(date) {
            return date.getTime() < Date.now() - 8.64e7;
          }
        },
        isInstructions: 1,
        msgData: '',
        goumaimsg: '',
        shiyongmasg: '',
        myConfig: {
          autoHeightEnabled: false,
          initialFrameHeight: 375,
          initialFrameWidth: '640',
          UEDITOR_HOME_URL: '../../static/UEditor/',
          serverUrl: '', //图片上传的地址
        },
        isShangjia: 1,
        isGoumai: 1,
        uploadIndex: '',
        imgUrlData: [{imgurl: '', hasUrl: false}, {imgurl: '', hasUrl: false}, {imgurl: '', hasUrl: false}, {
          imgurl: '',
          hasUrl: false
        }],
        imageUrl: '',
        headers: {},
        selectData: [{'name': '图文详情', isSelect: true}, {'name': '常见问题', isSelect: false}],
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
        offTime: '',
        shelfTime: '',
      };
    },

    created() {
      console.log('goodsObj', this.goodsObj)
      var tokenVal = Util.localStorageUtil.get('access_token');
      localStorage.setItem('shopId', 2)
      this.headers = {token: tokenVal, shopId: 2};
      this.myConfig.serverUrl = Global.requestUrl + "/kl-store/ueditor/index";
    },
    watch: {
      'goodsObj.description': function () {
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
      },
      'goodsObj.faqs': function () {
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
      changeText(name, item, type) {
        var on = true;
        if (item[name]) {
          item[name] = item[name].replace(/(^\s*)|(\s*$)/g, "")
        }

        if (name == 'question') {
          if (item[name].length > 50 || item[name].length < 2) {
            this.$message.error('问题不得超过50个字或者少于2个字 ');
            on = false;
            return;
          }
        }
        if (name == 'answer') {
          if (item[name].length > 150 || item[name].length < 2) {
            this.$message.error('答案不得超过50个字或者少于2个字 ');
            on = false;
            return;
          }
        }
        if (type == 'submit') {
          return on;
        }
      },
      submitCommodity() {
        if (!this.goodsObj.description) {
          this.$message.error('请输入图文详情');
          return;
        }
        if (!this.goodsObj.faqs) {
          this.$message.error('请输入常见问题');
          return;
        }

        if (this.productId != 'addGoods') {
          Service.fxjactivity().editorgoods(
            this.goodsObj, this.productId
          ).then(response => {
            if (response.errorCode == 0) {
              this.$message.success('操作成功');
              this.$router.push({name: 'lzcommodityList'})
            } else {
              this.$message.error(response.message)
            }

          }, err => {
          });
        } else {
          Service.fxjactivity().addgoods(
            this.goodsObj
          ).then(response => {
            if (response.errorCode == 0) {
              this.$message.success('操作成功');
              this.$router.push({name: 'lzcommodityList'})
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

