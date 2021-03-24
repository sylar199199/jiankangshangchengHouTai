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
      height: 580px;
      background: #fff;
      width: 850px;
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
          padding: 20px 20px 0 20px;

          .channnelTitle {
            padding-bottom: 16px;
          }

          .searchContent {
            flex-wrap: wrap;
            position: relative;

            .bacButton {
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
          max-height: 382px;
          overflow-y: auto;
          border-bottom: 10px solid #f4f4f4;

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
            width: 800px;

            th {
              font-size: 12px;
              text-align: center;
              background: #f6f6f6;

              .iconfont {
                font-size: 16px;
                margin-left: 5px;
              }
            }

            tr {
              border-bottom: 1px solid #f6f6f6;

              td {
                text-align: center;
                padding: 6px 10px;
                position: relative;

                .line {
                  display: inline-block;
                  height: 8px;
                  width: 3px;
                  background: #eee;
                  margin: 0 10px;
                }

                .productImg {
                  max-width: 70px;
                  max-height: 70px;
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
              }
              td {
                text-align: center;
                padding: 20px 0;}

              td:nth-of-type(1) {
                text-align: center;
              }

              td:nth-of-type(2) {
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
          margin-top: 10px;
          width: 100%;

          .sureBox {
            margin-top: 20px;
            line-height: 30px;
            justify-content: center;
          }
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
      <div class="bannercontent">
        <div class="dataGeneral bannerTable">
          <table v-if="noData" class="table">
            <tr>
              <th v-for="item in sortDatas" :key="item.id">
                {{item.name}}
              </th>
            </tr>
            <tr v-for="(item,index) in tableData" :key="item.id">
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
              <td v-if="item.createDate">
                {{timetrans(item.createDate)}}
              </td>
              <td>
                <i class="cursor iconfont iconshangsheng fontIcongreen" v-if="index!=0"
                   @click='upSort(index,item)'></i>
                <i class="iconfont iconshangsheng fontIcongrey" v-if="index==0" ></i>
                <i class='cursor iconfont fontIcongreen iconjiang' @click='downSort(index,item)'
                   v-if="index!=(tableData.length-1)"></i>
                <i class='iconfont fontIcongrey iconjiang' v-if="index==(tableData.length-1)"></i>
              </td>
            </tr>
          </table>
          <div v-if="!noData" class="noData">
            <img class="nodataImg" src="../assets/images/nodatalist.png"/>
            <p>暂无数据~</p>
          </div>
        </div>
        <div class="block" v-if="noData">
          <div class="sureBox flex">
            <div class="smallsureButton cursor" @click="cancleButton()">确定</div>
            <div class="smallcancleButton cursor" @click="cancleButton()">取消</div>
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
      source: {
        type: String
      },
      groupId: {
        type: Number
      },
      limitgoodsdata: {
        type: Array
      },
      goodsdataq: {
        type: Object
      }

    },
    data() {
      return {
        page: 1,
        size: 10,
        goodsDatas: [],
        checked2: true,
        checkList: [],
        selectNumber: 0,
        sortDatas: [{orderType: '', name: '分组名称', showBlue: true, orderField: ''},
          {orderType: '', name: '首页精选', showBlue: false, orderField: ''},
          {orderType: '', name: '商品数', showBlue: false, orderField: ''},
          {orderType: '', name: '创建时间', showBlue: false, orderField: ''},
          {orderType: '', name: '排序', showBlue: false, orderField: ''},
        ],
        name: '',
        orderField: 'productPlanNo',
        orderType: 'asc',
        total: null,
        statiusId: '',
        statiusOptions: [{name: '全部', id: ''}, {name: '已推荐', id: '0'}, {name: '未推荐', id: '1'}],
        tableData: [],
        noData: true,
        bindTime: '',
        userInfo: '',
        showCompany: false,
        searchValue: "",
        showSearchBox: false,
        searchOption: [],
        permissions: [],
        isAdd: "",
        isDelete: '',
        publishArr: [],
        showRed: false
      };
    },
    created() {
      this.getGuigeList('')
    },
    methods: {
      upSort(index, item){
        var secondId = this.tableData[index - 1].id;
        var firstId = this.tableData[index].id;
        this.tableData[index] = this.tableData[index - 1];
        this.tableData[index - 1] = item;

        this.sortRecData(firstId, secondId);

      },
      downSort(index, item){
        var firstId = this.tableData[index + 1].id;
        var secondId = this.tableData[index].id;
        this.tableData[index] = this.tableData[index + 1];
        this.tableData[index + 1] = item;
        this.sortRecData(firstId, secondId);
      },
      sortRecData(firstId, secondId) {
        var str = '?firstId=' + firstId + '&secondId=' + secondId;
        Service.goodscategory().selectionsort({}, str).then(response => {
          if (response.errorCode == 0) {
            this.getGuigeList();
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
      getGuigeList(){
        Service.goodscategory().selection({}).then(response=>{
          if (response.errorCode == 0) {
            if (response.data.length == 0) {
              this.noData = false;
            }else {
              this.noData = true;
              this.tableData = response.data
            }
          }
        })
      },
      cancleButton() {
        this.$emit('closeShowselect', 'cancle')
      },

    },
  }
</script>

