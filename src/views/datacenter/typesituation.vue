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
          .tableBox {
            font-size: 12px;
            border: 1px solid #f6f6f6;
            width: 967px;

            tr {
              border-bottom: 1px solid #f6f6f6;

              th {
                font-size: 12px;
                text-align: center;
                background: #f6f6f6;
                position: relative;
                line-height: 40px;
              }

              th:nth-of-type(1) {
                text-align: left;
                padding-left: 50px;
              }

              td:nth-of-type(1) {
                text-align: left;
                padding-left: 50px;
              }

              td {
                text-align: center;
                padding: 8px 0;
              }

            }
          }

          .dateTitle {
            display: flex;
            align-items: center;
            margin: 30px 0;
          }

          .dataGenetalContent {
            padding-top: 20px;
          }
        }

        #analysis {
          width: 937px;
          height: 300px;
        }
      }
    }
  }

  .baobiao {
    width: 80%;
    margin-left: 10%;
  }

  .marginTop10 {
    margin-top: 10px;
  }

  /deep/ .el-input__prefix {
    top: -1px;
  }
</style>
<template>
  <div class="general">
    <KlTop></KlTop>
    <div class="salecustomercontent contaner">
      <Aside></Aside>
      <div class="content">
        <div class="contanternews">
          <div class="dataGeneral  backWhite padding20">
            <div class="fontWeight font16 colorblack">健康商城商品类概况
            </div>
            <div class="dateTitle marginTop10">
              <div>统计时间：</div>
              <el-date-picker
                @change="changeDate"
                class="marginLeft10"
                v-model="contrastDate"
                type="date"
                align="right"
                size="small"
                placeholder="选择日期">
                <i slot="suffix" class="el-input__icon el-icon-date"></i>

              </el-date-picker>
            </div>
            <table class="tableBox" v-if="noData">
              <tr>
                <th v-for="(item,index) in sortDatas" :key="item.name">
                  {{item.name}}
                </th>
              </tr>
              <tr v-for="(item, index) in tableData" :key="index">
                <td>{{item.categoryName}}</td>
                <td>{{item.pv}}</td>
                <td>{{item.uv}}</td>
              </tr>
            </table>
            <div v-if="!noData" class="noData">
              <img class="nodataImg" src="../../assets/images/nodatalist.png"/>
              <p>暂无数据~</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  import Aside from '@/components/aside'
  import Filter from '@/common/filter'
  import Service from '@/common/service'
  import Store from '@/vuex/index'
  import KlTop from '@/components/klTop'
  import Global from '@/common/global'

  export default {
    components: {
      Aside,
      KlTop,
    },
    data() {
      return {
        startTime: '',
        endTime: '',
        contrastDate: '',
        tableData: '',
        noData: true,
        sortDatas: [
          {orderType: '', name: '商品分组名称', showBlue: false, orderField: ''},
          {orderType: '', name: '访问次数', showBlue: false, orderField: ''},
          {orderType: '', name: '访客人数', showBlue: false, orderField: ''},
        ],
        categoryvisit: false,
      };
    },
    created() {
      this.categoryvisit = this.havePermissions('category:visit:ranking[shopId=1]')
    },
    mounted() {
      this.contrastDate = this.transParseDate(new Date())
      this.startTime = this.contrastDate // 开始日期
      this.endTime = this.contrastDate
      if (this.categoryvisit) {
        this.goodsList();
      }
    },
    methods: {
      changeDate(val) {
        this.startTime = this.timetrans(val)
        this.endTime = this.timetrans(val)
        this.goodsList()
      },
      goodsList() {
        Service.lzdatacenter().categoryRanking({
          page: 1,
          size: 100,
          startTime: this.startTime,
          endTime: this.endTime
        }).then(response => {
          if (response.errorCode == 0) {
            if (response.data.records.length == 0) {
              this.noData = false
            } else {
              this.tableData = response.data.records
            }
          } else {
            this.$message.error(response.message)
          }
        }, err => {
        });
      },
      transParseDate(d) {
        // 中国标准时间转 年月日
        let todayString = d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate();
        return todayString
      },
      timetrans(timestamp) {
        let d = new Date(timestamp);
        let newTime = d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate();
        return newTime
      },
    },

  }
</script>

