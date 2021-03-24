<style rel="stylesheet/scss" lang="scss" scoped>
  $baseFontSize: 192;
  .personInfo {
    position: fixed;
    top: 0;
    height: 100vh;
    width: 100%;
    left: 0;
    z-index: 1000;

    .dialogcontent {
      position: relative;
      height: 500px;
      background: #fff;
      width: 800px;
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

      .bannercontent {
        .dataGeneral {
          padding: 26px 20px 0 20px;

          .searchContent {
            flex-wrap: wrap;
            position: relative;

            .bacButton {
              /*position: absolute;*/
              /*right: 0;*/
              /*bottom: 15px;*/
              margin-top: -6px;
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
          padding: 10px 0;
          max-height: 300px;
          overflow-y: auto;

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
            margin: 0px 26px;
            width: 737px;

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
                padding: 10px 0;

                .line {
                  display: inline-block;
                  height: 8px;
                  width: 3px;
                  background: #eee;
                  margin: 0 10px;
                }

                .productImg {
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
                    margin-bottom: 0px;
                    margin-top: 0;
                  }
                }

                .inputEditor {
                  width: 60px;
                  border: 1px solid #e5e5e5;
                  text-align: center;
                }
              }

              td:nth-of-type(2) {
                min-width: 180px;
                max-width: 300px;
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

              td:nth-of-type(4) {
                padding-left: 16px;
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
          position: fixed;
          bottom: 30px;
          right: 20px;
        }

      }

      .button {
        text-align: center;
        padding: 40px 0;
        font-size: 12px;
        width: 100%;
      }
    }
  }
</style>
<template>
  <div class="personInfo dialogbac">
    <div class="dialogcontent">
      <i class="iconfont iconshanchu" @click="cancleButton"></i>
      <div class="bannercontent">
        <div class="dataGeneral backWhite">
          <div class="searchContent flex clear">
            <div class="searchBox">
              <input type="text" v-model="name" class="serchInput font12 colorblack" placeholder="请输入分类名称"/>
            </div>
            <div class="bacButton cursor" @click="addCategory()">新建分类</div>
          </div>
        </div>
        <div class="dataGeneral bannerTable">
          <table v-if="noData" class="table">
            <tr>
              <th v-for="item in sortDatas">
                {{item.name}}
                <i v-if="item.orderType == 'asc' && item.showBlue" @click='sortData(item)'
                   class=" iconshangsheng color2087 iconfont cursor"></i>
                <i v-if="item.orderType == 'desc' && item.showBlue" @click='sortData(item)'
                   class="iconjiang color2087 iconfont cursor"></i>
                <i v-if="!item.showBlue && item.orderType == 'asc'" @click='sortData(item)'
                   class="iconfont colorGrey cursor iconshangsheng"></i>
                <i v-if="!item.showBlue && item.orderType == 'desc'" @click='sortData(item)'
                   class="iconfont colorGrey cursor iconjiang"></i>
              </th>
            </tr>
            <tr v-for="(item,index) in tableData">
              <td>
                {{item.id}}
              </td>
              <td>
                <input v-if="item.showEditor" type="text" @blur="editorName(item)" v-model="item.name"
                       class="inputEditor">
                <span v-if="!item.showEditor"> {{item.name}}</span>
                <i class="iconfont iconbianji color2087 font14 cursor" v-show="Categoryupdate" @click="item.showEditor = true"></i>
              </td>
              <td>{{timetrans(item.createDate)}}</td>
              <td>
                <i class="cursor iconfont iconshangsheng fontIcongreen" v-if="index!=0" @click='upSort(index,item)' v-show="Categoryupdate"></i>
                <i class="iconfont iconshangsheng fontIcongrey" v-if="index==0" v-show="Categoryupdate"></i>
                <i class='cursor iconfont fontIcongreen iconjiang' @click='downSort(index,item)'
                   v-if="index!=(tableData.length-1)" v-show="Categoryupdate"></i>
                <i class='iconfont fontIcongrey iconjiang' v-if="index==(tableData.length-1)" v-show="Categoryupdate"></i>
              </td>
              <td>
                <span class="color2087 font12 cursor" @click="deleteCategory(item.id)" v-show="Categorydelete">删除</span>
              </td>

            </tr>
          </table>
          <div v-if="!noData" class="noData">
            <img class="nodataImg" src="../assets/images/nodatalist.png"/>
            <p>暂无数据~</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Global from '@/common/global'
  import patternRules from '@/common/patternRules'
  import Service from '@/common/service'
  import Util from '@/common/util'
  import Filter from '@/common/filter'
  import Store from '@/vuex/index'

  export default {
    name: "creatSaleleads",
    props: {
      companyname: {
        type: String
      },
      channelId: {
        type: Number
      }
    },
    data() {
      return {
        name: '',
        recommend: '',
        orderField: 'createDate',
        orderType: 'desc',
        sortDatas: [
          {orderType: '', name: '分类编号', showBlue: false, orderField: ''},
          {orderType: '', name: '分类名称', showBlue: false, orderField: ''},
          {orderType: '', name: '创建时间', showBlue: false, orderField: ''},
          {orderType: '', name: '排序', showBlue: false, orderField: ''},
          {orderType: '', name: '操作', showBlue: false, orderField: ''}
        ],
        total: null,
        size: 5,
        page: 1,
        statiusId: '',
        statiusOptions: [{name: '全部', value: ''}, {name: '已推荐', value: true}, {name: '未推荐', value: false}],
        tableData: [],
        noData: true,
        bindTime: '',
        userInfo: '',
        showCompany: false,
        searchValue: "",
        showSearchBox: false,
        searchOption: [],
        permissions: [],
        Categoryupdate:false,
        Categorydelete:false,
      };
    },
    created() {
      this.userInfo = JSON.parse(localStorage.getItem('user'));
      if (this.userInfo) {
        this.permissions = this.userInfo.permissions;
      }
      this.Categoryupdate = this.havePermissions('videoCategory:update')
      this.Categorydelete = this.havePermissions('videoCategory:delete')
      this.getcategory()
    },
    watch: {},
    mounted() {
    },
    methods: {
      editorName(item) {
        item.showEditor = false;
        if (item.name.length > 4 || item.name.length < 2) {
          this.$message.error('请输入不多于4个字，不少于2个字的分类名称');
          item.name = item.showname;
          return;
        }
        Service.video().editorcategory({name: item.name, sort: item.sort}, item.id).then(response => {
          if (response.errorCode == 0) {
            this.getcategory();
          } else {
            this.$message.error(response.message)
          }
        }, err => {
        });
      },
      addCategory() {
        if (this.name.length > 4 || this.name.length < 2) {
          this.$message.error('请输入不多于4个字，不少于2个字的分类名称');
          return;
        }
        Service.video().addcategory({name: this.name, sort: ''}).then(response => {
          if (response.errorCode == 0) {
            this.getcategory();
            this.name = '';
          } else {
            this.$message.error(response.message)
          }
        }, err => {
        });

      },
      downSort(index, item) {//降序
        this.tableData[index] = this.tableData[index + 1];
        this.tableData[index + 1] = item;
        this.sortRecData();
      },
      upSort(index, item) {//升序
        this.tableData[index] = this.tableData[index - 1];
        this.tableData[index - 1] = item;
        this.sortRecData();
      },
      sortRecData() {
        var arrdata = [];
        for (var i = 0; i < this.tableData.length; i++) {
          var obj = {
            id: this.tableData[i].id,
            sort: parseInt(i) + 1
          };
          arrdata.push(obj)
        }
        Service.video().sortcategory(arrdata).then(response => {
          if (response.errorCode == 0) {
            this.getcategory();
          } else {
            this.$message.error(response.message)
          }
        }, err => {
        });
      },
      deleteCategory(id) {
        var that = this;
        this.$confirm('删除后，该分类类下面的视频将没有分类，您可以去视频管理页修改分类，确认删除吗？', '是否删除?', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          // Store.commit("setIsLoading", true);
          that.deleteVideo(id)

        }).catch(() => {
        });
      },
      deleteVideo(id) {
        Service.video().deletecategory({}, id).then(response => {
          console.log(id)
          Store.commit("setIsLoading", false);
          if (response.errorCode == 0) {
            this.$message.success('删除成功');
            this.getcategory('')
          } else {
            this.$message.error(response.message);
            if (response.errorCode == 5001) {
              this.$router.push({"path": '/'})
            }
          }
        }, err => {
          console.log(id)
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
      judgeArr(arr, value) {
        var num = 0;
        for (var i = 0; i < arr.length; i++) {
          if (arr[i] == value) {
          } else {
            num++;
          }
        }
        return num
      },
      getTimedate(timeStr) {
        return Filter.getTimedate(timeStr)
      },
      handleSizeChange(val) {
        this.size = val;
        this.getcommodityData('')
      },
      handleCurrentChange(val) {
        this.page = val;
        this.getcommodityData('')
      },
      deleteCompany() {
        this.companyInfo = '';
        this.showCompany = false;
        this.searchValue = '';
        this.bindTime = '';
      },
      getcategory() {
        Service.video().getcategory({}).then(response => {
          if (response.errorCode == 0) {
            var data = response.data;
            for (let i in data) {
              data[i].showname = data[i].name;
              data[i].showEditor = false;
            }
            this.$nextTick(() => {
              this.tableData = data;
            })
          } else {
            this.$message.error(response.message)
          }
        }, err => {
        });

      },
      sureButton() {
        if (!this.watchChange('companyName', 'submit')) {
          return;
        }
        if (!this.watchChange('contact', 'submit')) {
          return;
        }
        if (!this.watchChange('phone', 'submit')) {
          return;
        }
        Store.commit("setIsLoading", true);
        Service.client().addLeads({
          companyName: this.leadsInfo.companyName,
          contact: this.leadsInfo.contact,
          phone: this.leadsInfo.phone,
          email: null,
          remark: this.leadsInfo.remark,
          source: this.leadsInfo.source
        }).then(response => {
          Store.commit("setIsLoading", false);
          if (response.errorCode == 0) {
            Util.localStorageUtil.clear('leadsInfo');
            this.$emit('clickbanner', 'sure');
          } else {
            this.$message.error(response.message)
          }
        }, err => {
        })
      },
      cancleButton() {
        Util.localStorageUtil.set('leadsInfo', this.leadsInfo);
        this.$emit('clickbanner', 'cancle')
      },
    },
  }
</script>

