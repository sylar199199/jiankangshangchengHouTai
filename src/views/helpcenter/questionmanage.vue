
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

            .iconbianji {
              font-size: 14px;
            }

            .selectcategoryName {
              background-color: #56ae97;
            }
          }
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
</style>
<template>
  <div class="general">
    <KlTop></KlTop>
    <div class="salecustomercontent contaner">
      <Aside></Aside>
      <div class="content">
        <div class="contanternews">
          <div class="selectChannel backWhite padding20 baseInfo" v-show="categoryview">
            <div class="channnelTitle font16 colorblack">问答管理
              <i @mouseover="showImg = true" @mouseout="showImg = false"
                 class="iconfont iconwenhao cursor  color2087 font18"></i>
              <img class="detailImg" v-if="showImg" src="../../assets/images/helpcenterImg.png">
            </div>
            <div class="categoryBox flex ">
              <div @click="changeItem(item)"
                   :class="item.isSelect?'categoryName cursor selectcategoryName':'categoryName cursor'"
                   class="categoryName font12" v-for="(item,index) in categoryList">
                <span :class="item.isSelect?'colorfff':'color2087'">{{item.name}}</span>
                <i @click="editorcategory(item.id)" v-show="categoryupdate"
                   :class="item.isSelect?'iconfont iconbianji colorfff':'color2087 iconfont iconbianji'"></i>
              </div>
              <i class="iconfont iconadd marginLeft10 color2087 font18 cursor" v-show="categoryadd" @click="editorcategory()"></i>

            </div>
            <div class="commonProblem">
              <div class="problemBox" v-for="(item,index) in faqs">
                <div class="question">
                  <span class="indexLable font16 colorblack">{{index+1}}</span>
                  <span class="lableText colorGrey font12">问</span>
                  <input type="text" v-model="item.question" @change="changeText('question',item)"
                         class="questionInput colorblack font12" placeholder="请输入小于50个字符"/>
                </div>
                <i class="iconfont iconcuowu font16 colorGrey cursor" v-show="categoryitemupdate" @click="deleteItem(item.id)"></i>
                <div class="answer flex">
                  <span class="lableText colorGrey font12">答</span>
                  <el-input
                    class="answerInput colorblack font12"
                    type="textarea"
                    autosize
                    placeholder="请输入小于150个字符"
                    v-model="item.answer"
                    @change="changeText('answer',item)">
                  </el-input>
                </div>
              </div>
              <div class="addButton cursor" @click="addButton()" v-show="categoryitemadd">
                <i class="iconfont iconiconjia font12 color2087"></i>
                增加问答
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--<AddSpecs v-if="showSpecs"  @clickbanner="getbackData"></AddSpecs>-->
    </div>
    <div class="dialogone">
      <div class="messge">
        <div class="messageHeader">
          <div class="messagetitle">
            <span>{{title}}</span>
          </div>
          <div class="rightIcon">
            <i class="iconfont iconcuowu cursor colorGrey" @click="closeDiologone()"></i>
          </div>
        </div>
        <div class="messageContent">
          <div class="messagemessage">
            <span class="lableText colorblack font12">分类名称</span>
            <input type="text" v-model="category.name" @change="changeValue('name','')"
                   class="inputBox marginLeft10 colorblack font12" placeholder="请输入分类名称"/>
          </div>
          <div class="messagemessage">
            <span class="lableText colorblack font12">分类排序</span>
            <span class="marginLeft10 colorGrey font12">拖动以下分类可以调整分类的展示排序</span>
          </div>
          <div class="messagemessage flex">
            <div @dragstart="handleDragStart($event,item)"
                 @dragover.prevent="handleDragOver($event,item)"
                 @dragenter="handleDragEnter($event,item,index)"
                 @dragend="handleDragEnd($event,item)" :draggable="categoryupdate"
                 class="marginRight10 drageBox cursor color2087 font12" v-for="(item,index) in categoryList">
              {{item.name}}
              <i class="iconfont iconcuowu cursor" @click="deleteCategory(item.id)" v-show="categorydelete"></i>
            </div>
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
  </div>
</template>

<script>
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
        showImg: false,
        category: {
          name: '',
          sort: '',
        },
        title: '',
        editorcategoryId: '',
        categoryId: '',
        categoryList: [],
        faqs: [],
        dragging: null,
        categoryupdate: false,
        categorydelete: false,
        categoryview: false, // 分类查询权限
        categoryadd: false,// 分类查询增加
        categorysort: false,
        categoryitemview: false,
        categoryitemadd: false, // 项目添加
        categoryitemupdate: false,
        categoryitemdelete: false,
      };
    },
    created() {
      this.userInfo = JSON.parse(localStorage.getItem('user'));

      this.categoryupdate = this.havePermissions('category:update')
      this.categorydelete = this.havePermissions('category:delete')
      this.categoryview = this.havePermissions('category:view')
      this.categoryadd = this.havePermissions('category:add')
      this.categorysort = this.havePermissions('category:sort')
      this.categoryitemview = this.havePermissions('category:item:view')
      this.categoryitemadd = this.havePermissions('category:item:add')
      this.categoryitemupdate = this.havePermissions('category:item:update')
      this.categoryitemdelete = this.havePermissions('category:item:delete')
    },
    watch: {},
    mounted() {
      if(this.categoryitemview){
        this.getcategoryList();
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
        Service.help().sortCategory(arrData).then(response => {
          if (response.errorCode == 0) {
            if (this.editorcategoryId) {
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
      addCategory() {
        if (!this.changeValue('name', 'submit')) {
          return;
        }
        if (this.editorcategoryId) {
          Service.help().editorCategory({
            name: this.category.name,
            sort: this.category.sort
          }, this.editorcategoryId).then(response => {
            if (response.errorCode == 0) {
              this.$message.success('编辑成功');
              this.category.name = '';
              this.category.sort = '';
              $(".dialogone").css({"display": 'none'});
              this.getcategoryList();
            } else {
              this.$message.error(response.message)
            }
          }, err => {
          });
        } else {
          Service.help().addCategory({
            name: this.category.name,
            sort: ''
          }).then(response => {
            if (response.errorCode == 0) {
              this.$message.success('创建成功');
              this.category.name = '';
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
        if (this.category[name].length != 0) {
          this.category[name] = this.category[name].replace(/\s+/g, "");
        } else {
          this.$message.error('请输入分类名称');
          on = false;
          return;
        }
        if (name == 'name') {
          if (this.category[name].length < 2 || this.category[name].length > 6) {
            this.$message.error('分类名称最少2个，最多6个字符');
            on = false;
            return;
          }
        }
        if (type == 'submit') {
          return on;
        }
      },
      changeItem(item) {
        this.categoryId = item.id;
        for (let i in this.categoryList) {
          this.categoryList[i].isSelect = false;
        }
        item.isSelect = true;
        this.getItem();
        this.$forceUpdate()
      },
      getItem() {
        Service.help().categoryItemlist({},
          this.categoryId).then(response => {
          if (response.errorCode == 0) {
            var data = response.data;
            this.faqs = data;
          } else {
            this.$message.error(response.message)
          }
        }, err => {
        });
      },
      closeDiologone() {//取消弹框确认是否有删除分类
        this.getcategoryList();
        $(".dialogone").css({"display": "none"})
      },
      editorcategory(id) {
        event.stopPropagation();
        if (!id) {
          this.title = '新增问题分类';
          this.category.name = '';
          this.editorcategoryId = '';
        } else {
          this.title = '编辑问题分类';
          this.editorcategoryId = id;
          Service.help().getCategory({}, id).then(response => {
            if (response.errorCode == 0) {
              this.category.name = response.data.name;
              this.category.sort = response.data.sort;
            } else {
              this.$message.error(response.message)
            }
          }, err => {
          });
        }
        $(".dialogone").css({'display': 'block'});
      },
      getcategoryList() {
        Service.help().categoryList({}
        ).then(response => {
          if (response.errorCode == 0) {
            var data = response.data;
            if (data.length != 0) {
              for (let i in data) {
                data[i].isSelect = false;
                if (!this.categoryId) {
                  this.categoryId = data[0].id;
                  if (i == 0) {
                    data[i].isSelect = true;
                  }
                } else {
                  if (this.categoryId == data[i].id) {
                    data[i].isSelect = true;
                  }
                }
              }
              this.$nextTick(() => {
                this.categoryList = data;
              });
              this.getItem();
            }
          } else {
            this.$message.error(response.message)
          }

        }, err => {
        });
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
        if (on == true) {
          if (item.question && item.answer && item.id) {
            this.editorItem(item)
          } else if (item.question && item.answer && !item.id) {
            this.addItem(item)
          }
        }
      },
      addItem(data) {
        Service.help().addcategoryItem({
          "answer": data.answer,
          "categoryId": this.categoryId,
          "question": data.question,
          "sort": ''
        }).then(response => {
          if (response.errorCode == 0) {
          } else {
            this.$message.error(response.message)
          }
        }, err => {
        });
      },
      editorItem(data) {
        Service.help().editorCategoryitem({
          "answer": data.answer,
          "categoryId": this.categoryId,
          "question": data.question,
          "sort": ''
        }, data.id).then(response => {
          if (response.errorCode == 0) {
          } else {
            this.$message.error(response.message)
          }
        }, err => {
        });
      },
      deleteItem(id) {
        this.$confirm('此操作将永久删除问题, 是否继续?', '', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          Service.help().deleteCategoryitem({}, id).then(response => {
            if (response.errorCode == 0) {
              this.$message({
                type: 'success',
                message: '删除成功!'
              });
              this.getItem()
            } else {
              this.$message.error(response.message)
            }
          }, err => {
          });
        }).catch(() => {
        });
      },
      deleteCategory(id) {
        this.$confirm('此操作将永久删除该分类, 是否继续?', '', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          Service.help().deleteCategory({}, id).then(response => {
            if (response.errorCode == 0) {
              if (this.editorcategoryId == id) {
                this.category.name = '';
                this.category.sort = '';
                this.closeDiologone()
              }
              this.getcategoryList();
            } else {
              this.$message.error(response.message)
            }
          }, err => {
          });
        }).catch(() => {
        });

      },
      addButton() {
        var obj = {question: '', answer: '', id: '', sort: ''};
        if (this.faqs.length >= 30) {
          this.$message.error('常见疑问，不得超过30个')
        } else {
          this.faqs.push(obj)
        }
      },
    }
  }
</script>

