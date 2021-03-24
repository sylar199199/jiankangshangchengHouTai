<template>
  <div class="general">
    <KlTop></KlTop>
    <div class="salecustomercontent contaner">
      <Aside></Aside>
      <div class="content">
        <div class="contanternews">
          <div class="dataGeneral bannerTable">
            <table v-if="noData" class="table">
              <tr>
                <th v-for="item in sortDatas">
                  {{item.name}}
                </th>
              </tr>
              <tr v-for="(item,index) in tableData">

                <td>
                  {{item.name}}
                </td>
                <td>
                  <span> {{timetrans(updateTime)}}</span>
                </td>
                <td>
                  <span class="color2087 font12 cursor" v-show="redeemupdateRule" @click="editRule(item.id)">编辑</span>
                </td>
              </tr>
            </table>
            <div v-if="!noData" class="noData">
              <img class="nodataImg" src="../../assets/images/nodatalist.png"/>
              <p>暂无数据~</p>
            </div>
          </div>
        </div>
        <Helprules v-if="showhelprules" :title="exchangetitle" :productId="productId" @clickbanner="getbackData"></Helprules>
      </div>
    </div>
  </div>
</template>

<script>
  import Aside from '@/components/aside'
  import KlTop from '@/components/klTop'
  import Helprules from '@/components/helprules'
  import Service from '@/common/service'

  export default {
    name: "lzbasics",
    data() {
      return {
        tableData: [
          {name: '兑换规则'}
        ],
        updateTime: '',
        noData: true,
        sortDatas: [
          {orderType: '', name: '基础信息', showBlue: false, orderField: ''},
          {orderType: '', name: '更新时间', showBlue: false, orderField: ''},
          {orderType: '', name: '操作', showBlue: false, orderField: ''}
        ],
        total: 0,
        size: 10,
        page: 1,
        productId: '',
        exchangetitle: '兑换规则',
        showhelprules: false,
        userInfo: '',

        redeemupdateRule:false, //兑换规则更新
      }
    },
    components: {
      Aside,
      KlTop,
      Helprules
    },
    mounted() {
      this.getruleData('');//获取列表
    },
    created() {
      this.userInfo = JSON.parse(localStorage.getItem('user'));
      this.redeemupdateRule = this.havePermissions('redeem:updateRule')
    },
    methods:{
      getruleData(){
        Service.lzredeem().getexchangeRule({},).then(response => {
          if (response.errorCode == 0) {

            if (response.data) {
              this.updateTime = response.data.updateDate;
            }
          } else {
            this.$message.error(response.message)
          }


        }, err => {
        });
      },
      editRule(id){
        this.productId = id
        this.showhelprules = true
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
      getbackData(){
        this.showhelprules = false
      },
      handleSizeChange(val) {
        this.size = val;
        this.getcommodityData('')
      },
      handleCurrentChange(val) {
        this.$router.push({name: 'orderlist', query: {page: val}})
      },
    }
  }
</script>

<style scoped lang="scss">
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

              td:nth-of-type(2) {
                min-width: 120px;
                max-width: 120px;
                text-align: center;
              }

              td:nth-of-type(3) {
                text-align: center;

                .imgicon {
                  display: inline-block;
                  vertical-align: middle;
                  height: 20px;
                  width: 20px;
                  padding-right: 10px;
                }
              }

              td:nth-of-type(4) {
                min-width: 80px;
                max-width: 80px;
                text-align: center;
              }

              td:nth-last-child(1) {
                min-width: 80px;
                max-width: 80px;
                text-align: center;
              }

              td:nth-of-type(5) {
                min-width: 80px;
                max-width: 80px;
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

        .block {
          text-align: right;
          margin-top: 35px;
          margin-right: 20px;
        }

      }
    }
  }
</style>
