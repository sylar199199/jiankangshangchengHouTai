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
                text-align: left;
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
      width: 850px;
      height: 600px;
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
      position: relative;

      .messageHeader {
        text-align: left;
        position: relative;
        padding: 15px 15px 0px;
        color: #000;

        .messagetitle {
        }
      }

      .messageContent {
        position: relative;
        padding: 0 30px;
        margin-top: 20px;
        color: #606266;
        font-size: 14px;

        .messagemessage {
          margin-bottom: 12px;
          position: relative;

          .inputBox {
            border: 1px solid #e5e5e5;
            height: 30px;
            line-height: 30px;
            text-indent: 10px;
            width: 300px;
          }

          .lableText {
            display: inline-block;
            width: 60px;
            text-align: right;
          }
        }

        .treemessage {
          display: flex;
          align-items: baseline;
          height: 350px;
          overflow-y: scroll;

          .lableText {
            display: inline-block;
            width: 60px;
            text-align: right;
          }

          .treediv {
            min-width: 300px;
            position: relative;
            flex: 1;
            /* border: 1px solid #e5e5e5;*/
            border-radius: 3px;
            /* margin-left: 15px;*/
            padding: 0 10px;
            box-sizing: border-box;
          }
        }
      }

      .messagebtns {
        text-align: center;
        padding: 0 0 10px;
        position: absolute;
        width: 400px;
        bottom: 10px;
        left: 50%;
        margin-left: -200px;

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

  .required {
    color: red;
  }

  /deep/ .el-checkbox__inner {
    border-radius: 50%;
  }

  /deep/ .el-tree-node__children .el-tree-node__children .el-tree-node .el-tree-node__content {
  }
</style>

<template>
  <div class="general">
    <KlTop></KlTop>
    <div class="salecustomercontent contaner">
      <Aside></Aside>
      <div class="content">
        <div class="contanternews">

          <div class="dataGeneral bannerTable">
            <div class="borderButton cursor" v-show="roleAdd" @click="addUser()">添加角色</div>
            <table v-if="noData && roleView" class="table" >
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
                  {{item.description}}
                </td>
                <td>
                  <span class="color2087 font12 cursor" v-show="roleUpdate" @click="addUser(item.id)">编辑</span>
                  <span class="line"></span>
                  <span class="color2087 font12 cursor" v-show="roleDelete" @click="deleteRole(item.id)">删除</span>
                </td>
              </tr>
            </table>
            <div v-if="!noData" class="noData">
              <img class="nodataImg" src="../../assets/images/nodatalist.png"/>
              <p>暂无数据~</p>
            </div>
            <div class="block" v-if="noData">
              <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="page"
                :page-size="size"
                :page-sizes="[5,10]"
                layout="total,sizes,prev, pager, next,jumper"
                :total="total">
              </el-pagination>
            </div>
          </div>
        </div>
        <div class="dialogone">
          <div class="messge">
            <div class="messageHeader">
              <div class="messagetitle">
                <span>添加角色</span>
              </div>
            </div>
            <div class="messageContent">
              <div class="messagemessage">
                <span class="lableText colorblack font12"><span class="required">*&nbsp</span>角色名称:</span>
                <input type="text" v-model="menu.name" @change="changeValue('name','')"
                       class="inputBox marginLeft10 colorblack font12" placeholder="请输入角色名称"/>
              </div>
              <div class="messagemessage">
                <span class="lableText colorblack font12"><span class="required">*&nbsp</span>描述:</span>
                <input type="text" @change="changeValue('description','')" v-model="menu.description"
                       class="inputBox marginLeft10 colorblack font12" placeholder="请输入角色描述"/>
              </div>
              <div class="treemessage">
                <span class="lableText colorblack font12"><span class="required">*&nbsp;</span>权限:</span>
                <div class="treediv">
                  <el-tree
                    ref="tree"
                    :default-expand-all="false"
                    :data="treeData"
                    show-checkbox
                    node-key="id"
                    :props="defaultProps"
                    default-expand-all
                  >
                  </el-tree>
                </div>
              </div>
            </div>
            <div class="messagebtns">
              <div class="button borderButton copyButton" @click="closeDiologone()">
                取消
              </div>
              <div class="button bacButton" @click="centerUser()">
                确认
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
  import KlTop from '@/components/klTop'
  import Service from '@/common/service'

  export default {
    name: "userpermission",
    components: {
      Aside,
      KlTop,
    },
    data() {
      return {
        menu: {
          name: '',
          description: '',
          sort: null,
          status: 0,
          permissions: []
        },
        treeData: [],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        sortDatas: [
          {orderType: '', name: '角色名称', showBlue: false, orderField: ''},
          {orderType: '', name: '描述', showBlue: false, orderField: ''},
          {orderType: '', name: '操作', showBlue: false, orderField: ''}
        ],
        tableData: [],
        noData: true,
        total: 0,
        size: 10,
        page: 1,
        editId: '',
        roleAdd: false,
        roleUpdate: false,
        roleDelete: false,
        roleView: false
      }
    },
    created() {
      this.userInfo = JSON.parse(localStorage.getItem('user'));
      console.log('localStorage.getItem(\'permissions\')', localStorage.getItem('permissions'))
      
      this.roleView = this.havePermissions('role:view')
      this.roleAdd = this.havePermissions('role:add')
      this.roleUpdate = this.havePermissions('role:edit')
      this.roleDelete = this.havePermissions('role:delete')
    },
    methods: {
      getRoleList() {
        Service.rolePermission().getRoleListData({}, this.page, this.size).then(response => {
          if (response.errorCode == 0) {
            if (response.data.records.length == 0) {
              this.noData = false;
            } else {
              this.noData = true;
              this.total = response.data.total;
              this.$nextTick(() => {
                this.tableData = response.data.records;
              })
            }
          }
        })
      },
      handleSizeChange(val) {
        this.size = val;
        this.getRoleList()
      },
      handleCurrentChange(val) {
        this.page = val;
        this.getRoleList()
      },
      changeValue(name, type) {
        var on = true;
        if (name == 'name') {
          if (this.menu[name].length < 2 || this.menu[name].length > 20) {
            this.$message.error('角色名称长度大于2且小于20');
            on = false;
            return;
          }
        } else if (name == 'description') {
          if (this.menu[name].length < 2 || this.menu[name].length > 50) {
            this.$message.error('请输入长度不少于2位，不多于50位的描述');
            on = false;
            return;
          }
        }
        if (type == 'submit') {
          return on;
        }

      },
      deleteRole(id) {
        this.$confirm('角色删除请谨慎操作，确定删除?', '', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          Service.rolePermission().deletePermissionRole({}, id).then(response => {
            if (response.errorCode == 0) {
              this.$message({
                type: 'success',
                message: '删除成功!'
              });
              this.getRoleList();//获取商品列表
            } else {
              this.$message.error(response.message)
            }

          }, err => {
          });
        }).catch(() => {

        });
      },
      addUser(id) {
        Service.rolePermission().getPermissionTree({}).then(response => {
          if (response.errorCode == 0) {
            this.treeData = response.data
            if (id) {
              this.editId = id
              Service.rolePermission().getPermissionTreeById({}, id).then(response => {
                if (response.errorCode == 0) {
                  let {permIds, name, description} = response.data
                  this.menu.name = name
                  this.menu.description = description
                  this.$refs.tree.setCheckedKeys(permIds);
                  $(".dialogone").css({"display": 'block'})
                } else {
                  this.$message.error(response.message)
                }
              }, err => {
              });
            } else {
              $(".dialogone").css({"display": 'block'})
            }

          } else {
            this.$message.error(response.message)
          }
        }, err => {
        });


      },
      centerUser() {
        if (!this.changeValue('name', 'submit')) {
          return;
        }
        if (!this.changeValue('description', 'submit')) {
          return;
        }
        let getNodeArr = this.$refs.tree.getCheckedNodes(false, true);
        let newArr = []
        for (let item of getNodeArr) {
          newArr.push(item.id)
        }
        this.menu.permissions = newArr
        if (this.menu.permissions.length == 0) {
          this.$message.error('角色权限不能为空');
          return;
        }
        if (this.editId) {
          // 编辑
          Service.rolePermission().editRoleUser(this.menu, this.editId).then(response => {
            if (response.errorCode == 0) {
              this.resize()
              this.getRoleList()
            } else {
              this.$message.error(response.message)
            }
          })
        } else {
          // 新增
          Service.rolePermission().addRoleUser(this.menu).then(response => {
            if (response.errorCode == 0) {
              this.resize()
              this.getRoleList()
            } else {
              this.$message.error(response.message)
            }
          })
        }
      },
      closeDiologone() {
        this.resize()
      },
      resize() {
        $(".dialogone").css({"display": 'none'})
        this.editId = '';
        this.menu = {
          name: '',
          description: '',
          sort: null,
          status: 0,
          permissions: []
        }
        this.$refs.tree.setCheckedKeys([]);
      }
    },
    mounted() {
      this.getRoleList();
    },

  }
</script>
