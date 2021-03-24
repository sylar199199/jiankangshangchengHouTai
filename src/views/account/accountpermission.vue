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
          padding: 20px 20px 0 20px;

          .searchContent {
            flex-wrap: wrap;
            position: relative;

            .bacButton {
              position: absolute;
              right: -6px;
              bottom: 15px;
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
          margin-top: 15px;
          padding: 10px 0 100px;

          .borderButton {
            margin: 0 20px;
            font-size: 12px;
          }

          .noData {
            text-align: center;
            padding-top: 30px;
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
                text-align: left;
              }

              td {
                text-align: center;
                padding: 20px 0;

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
                  margin: 0 10px;
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
                min-width: 180px;
                max-width: 300px;
                text-align: center;
              }

              td:nth-of-type(3) {
                text-align: left;

                .imgicon {
                  display: inline-block;
                  vertical-align: middle;
                  height: 20px;
                  width: 20px;
                  padding-right: 10px;
                }
              }

              td:nth-of-type(5) {
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

  .dialog {
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
      width: 420px;
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
        padding: 15px 15px 10px;
        color: #000;

        .messagetitle {
        }
      }

      .messageContent {
        position: relative;
        padding: 30px;
        color: #606266;
        font-size: 14px;
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

  .dialog::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 0;
    vertical-align: middle;
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
      position: relative;
      display: inline-block;
      width: 840px;
      height: 600px;
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
        text-align: left;
        position: relative;
        padding: 15px 15px 0px;
        color: #000;

        .messagetitle {
        }
      }

      .messageContent {
        position: relative;
        padding: 20px 30px;
        color: #606266;
        font-size: 14px;

        .messagemessage {
          margin-bottom: 12px;
          position: relative;

          .lableText {
            display: inline-block;
            width: 100px;
            text-align: right;
          }

          .warmText {
            padding: 6px;
            line-height: 20px;
            position: absolute;
            background-color: #ffffff;
            box-shadow: 0px 2px 24px 0px rgba(199, 199, 199, 0.51);
            border-radius: 4px;
            right: -12px;
            bottom: -15px;
            font-size: 12px;
          }

          .inputBox {
            border: 1px solid #e5e5e5;
            height: 30px;
            line-height: 30px;
            text-indent: 10px;
            width: 300px;
          }
        }

        .treemessage {
          display: flex;
          align-items: baseline;
          height: 350px;
          overflow-y: scroll;

          .lableText {
            display: inline-block;
            width: 100px;
            text-align: right;
          }

          .treediv {
            flex: 1;
            min-width: 300px;
            position: relative;
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
        padding: 0 0 30px;
        position: absolute;
        width: 400px;
        bottom: -15px;
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

  /deep/ .el-checkbox__inner {
    border-radius: 50%;
  }

  /deep/ .el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background-color: #56ae97;
  }

  /deep/ .el-checkbox__input.is-disabled.is-checked .el-checkbox__inner {
    background-color: #56ae97;
  }

  /deep/ .el-checkbox__input.is-disabled.is-indeterminate .el-checkbox__inner::before {
    brder-color: #fff;
    background-color: #fff;
  }

  /deep/ .el-checkbox__input.is-disabled.is-checked .el-checkbox__inner::after {
    border-color: #fff;
  }

  /deep/ .el-select {
    min-width: 300px;
    max-width: 500px;
    min-height: 30px;
    max-height: 5000px;
  }
</style>
<template>
  <div class="general">
    <KlTop></KlTop>
    <div class="salecustomercontent contaner">
      <Aside></Aside>
      <div class="content">
        <div class="contanternews">
          <div class="dataGeneral backWhite">
            <div class="searchContent flex clear">
              <div class="searchBox">
                <span class="searchLable colorGrey font12">员工姓名 </span>
                <input type="text" v-model="name" class="serchInput font12 colorblack" placeholder="员工姓名"/>
              </div>
              <div class="searchBox">
                <span class="searchLable colorGrey font12">账号名称</span>
                <input type="text" v-model="username" class="serchInput font12 colorblack" placeholder="账号名称"/>
              </div>
              <div class="searchBox flex">
                <span class="searchLable searchName colorGrey font12">启用状态</span>
                <el-select v-model="enabled" placeholder="">
                  <el-option
                    v-for="item in enabledOption"
                    :key="item.value"
                    :label="item.name"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
              <div class="bacButton cursor" v-show="userView" @click="getAccount('search')">查询</div>
            </div>

          </div>
          <div class="dataGeneral bannerTable">
            <div class="borderButton cursor" v-show="userAdd" @click="addCommodity()">新建账号</div>
            <table v-if="noData&&userView" class="table">
              <tr>
                <th v-for="item in sortDatas">
                  {{item.name}}
                </th>
              </tr>
              <tr v-for="(item,index) in tableData">
                <td>
                  {{item.id}}
                </td>
                <td>
                  {{item.name}}
                </td>
                <td>
                  {{item.username}}
                </td>
                <td>
                  <span v-for="(items,index1) in item.roles" :key="index1">
                        {{items.name}}
                  </span>

                </td>
                <td v-if="item.enabled">
                  启用
                </td>
                <td v-if="!item.enabled">
                  禁用
                </td>
                <td>{{timetrans(item.createDate)}}</td>
                <td>
                  <span class="color2087 font12 cursor" v-show="userupdate" @click="addCommodity(item.id)">编辑</span>
                  <span class="line"></span>
                  <span :class="item.enabled?'colorGrey font12 cursor':'color2087 font12 cursor'" v-show="userEnable"
                        @click="enableUser(item)">启用</span>
                  <span class="line"></span>
                  <span :class="item.enabled?'color2087 font12 cursor':'colorGrey font12 cursor'" v-show="userDisable"
                        @click="disableUser(item)">禁用</span>
                  <span class="line"></span>
                  <span class="color2087 font12 cursor" v-show="userReset" @click="resetPassword(item.id)">重置密码</span>
                </td>
              </tr>
            </table>
            <div v-if="!noData&&userView" class="noData">
              <img class="nodataImg" src="../../assets/images/nodatalist.png"/>
              <p>暂无数据~</p>
            </div>
            <div class="block" v-if="noData&&userView">
              <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="page"
                :page-size="size"
                :page-sizes="[5,10]"
                layout="total,sizes, prev, pager, next,jumper"
                :total="total">
              </el-pagination>
            </div>
          </div>

        </div>
      </div>
    </div>
    <Commodities v-if="isRecommend" @clickbanner="getbackData"></Commodities>
    <div class="dialog">
      <div class="messge">
        <div class="messageHeader">
          <div class="messagetitle">
            <span>{{title}}</span>
          </div>
        </div>
        <div class="messageContent">
          <div class="messagemessage">
            <p>密码为{{resetword}}，请发给员工并提醒其及时修改密码!</p>
          </div>
        </div>
        <div class="messagebtns">
          <div class="button borderButton copyButton" :data-clipboard-text="resetword" @click="resetAfter()">
            复制密码
          </div>
          <div class="button bacButton" @click="closeDiolog()">
            <span> 确认</span>
          </div>
        </div>
      </div>
    </div>
    <div class="dialogone">
      <div class="messge">
        <div class="messageHeader">
          <div class="messagetitle">
            <span>新建账号</span>
          </div>
        </div>
        <div class="messageContent">
          <div class="messagemessage">
            <span class="lableText colorblack font12"><span class="colore6">*&nbsp</span>员工姓名:</span>
            <input type="text" v-model="user.name" @change="changeValue('name','')"
                   class="inputBox marginLeft10 colorblack font12" placeholder="请输入真实姓名"/>
          </div>
          <div class="messagemessage">
            <span class="lableText colorblack font12"><span class="colore6">*&nbsp</span>账号名称:</span>
            <input type="text" @change="changeValue('username','')" v-model="user.username"
                   class="inputBox marginLeft10 colorblack font12" placeholder="建议用员工姓名全称"/>
          </div>
          <div class="messagemessage">
            <span class="lableText colorblack font12"><span class="colore6">*&nbsp</span>请选择角色:</span>
            <el-select @change="selectRole" multiple class="marginLeft10 " v-model="roleIds"
                       placeholder=""
                       @remove-tag="removeTag"
            >
              <el-option
                v-for="item in roleOption"
                :key="item.id"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
          </div>
          <div class="treemessage">
            <span class="lableText colorblack font12"><span class="colore6">*&nbsp;</span>权限:</span>
            <div class="treediv">
              <el-tree
                ref="tree"
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
          <div class="button bacButton" @click="addUser()">
            确认
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
  import patternRules from '@/common/patternRules'
  import Commodities from '@/components/commodities'

  export default {
    name: "salecustomer",
    components: {
      Aside,
      KlTop,
      Commodities
    },
    data() {
      return {
        showImg: false,
        title: '',
        resetword: '',
        sortDatas: [
          {orderType: '', name: '序号', showBlue: false, orderField: ''},
          {orderType: '', name: '员工姓名', showBlue: false, orderField: ''},
          {orderType: '', name: '账户名称', showBlue: false, orderField: ''},
          {orderType: '', name: '角色', showBlue: false, orderField: ''},
          {orderType: '', name: '启用状态', showBlue: false, orderField: ''},
          {orderType: '', name: '创建时间', showBlue: false, orderField: ''},
          {orderType: '', name: '操作', showBlue: false, orderField: ''}
        ],
        roleOption: [],
        role: '',
        endDate: "",
        name: "",
        startDate: "",
        enabled: '',
        username: '',
        type: '',
        total: 0,
        size: 10,
        page: 1,
        commodyId: '',
        shelfStatusId: '',
        channelsOption: [],
        shelfStatus: [{name: '全部', id: ''}, {name: '在售中', id: '0'}, {name: '待上架', id: '1'}, {name: '已上架', id: '2'}],
        enabledOption: [{name: '全部', value: ''}, {name: '启用', value: true}, {name: '禁用', value: false}],
        isRecommend: false,
        insuranceDate: '',
        tableData: [],
        noData: true,
        dissipate: [],
        userInfo: '',
        permissions: [],
        user: {
          name: '',
          username: ''
        },
        treeData: [],
        roleIds: [],
        permissonIds: [],
        defaultProps: {
          children: 'children',
          label: 'label',
          disabled: this.disabledFn
        },
        editId: '', // id存在未修改 不存在为删除

        userView: false, // 账号查询权限
        userAdd: false,  // 账号新增权限
        userupdate: false, // 账号编辑权限
        userEnable: false, // 账号 启用权限
        userDisable: false, // 账号 禁用权限
        userReset: false, // 账号 重置
        channelview: false, //
      };
    },
    created() {
      this.userInfo = JSON.parse(localStorage.getItem('user'));
      this.userView = this.havePermissions('user:view')
      this.userAdd = this.havePermissions('user:add')
      this.userupdate = this.havePermissions('user:update')
      this.userEnable = this.havePermissions('user:enable')
      this.userDisable = this.havePermissions('user:disable')
      this.userReset = this.havePermissions('user:reset')
      this.channelview = this.havePermissions('channel:view')
    },
    watch: {},
    mounted() {
      if(this.channelview){
        this.getChannel();
      }
      this.getAccount('');//
      if (this.userView) {
        this.getAllrole();
      }
    },
    methods: {
      disabledFn(data, node) {
        return true
      },
      changeValue(name, type) {
        var on = true;
        if (this.user[name].length != 0) {
          this.user[name] = this.user[name].replace(/\s+/g, "");
        } else {
          this.$message.error('请输入账号信息');
          on = false;
          return;
        }
        if (name == 'name') {
          if (this.user[name].length < 2 || this.user[name].length > 20) {
            this.$message.error('请输入正确的员工姓名');
            on = false;
            return;
          }
          if (!(patternRules.name).test(this.user[name])) {
            this.$message.error('请输入员工中文姓名');
            on = false;
            return;
          }
        } else if (name == 'username') {
          if (this.user[name].length < 2 || this.user[name].length > 20) {
            this.$message.error('请输入长度不少于2位，不多于20位的账号名称');
            on = false;
            return;
          }
        }
        if (type == 'submit') {
          return on;
        }

      },

      getTreeData(id) {
        // 获取权限树
        Service.rolePermission().getPermissionTree({}).then(response => {
          if (response.errorCode == 0) {
            this.treeData = response.data
            // 如果是编辑
            if (id) {
              this.editId = id
              Service.account().getRoleById({}, id).then(response => {
                if (response.errorCode == 0) {
                  this.user.name = response.data.name
                  this.user.username = response.data.username
                  this.roleIds = response.data.roles.map(item => {
                    return item.id
                  })
                  if (this.roleIds.length > 0) {
                    let paramsKey = ''
                    for (var k = 0; k < this.roleIds.length; k++) {
                      if (k == 0) {
                        paramsKey += `?roleIds=${this.roleIds[k]}`
                      } else {
                        paramsKey += `&roleIds=${this.roleIds[k]}`
                      }
                    }
                    Service.rolePermission().getRolePermissionList({}, paramsKey).then(response => {
                      if (response.errorCode == 0) {
                        this.$refs.tree.setCheckedKeys(response.data);
                      }
                    })
                  }
                }
                $(".dialogone").css({"display": 'block'})
              })
            } else {
              $(".dialogone").css({"display": 'block'})
            }
          } else {
            this.$message.error(response.message)
          }
        })
      },
      getAllrole() {
        Service.rolePermission().getAllRoleList().then(response => {
          if (response.errorCode == 0) {
            this.roleOption = response.data.map(item => {
              return {
                id: item.id,
                name: item.name
              }
            })
          } else {
            this.$message.error(response.message)
          }

        }, err => {
        });
      },
      addUser() {
        if (!this.changeValue('name', 'submit')) {
          return;
        }
        if (!this.changeValue('username', 'submit')) {
          return;
        }
        if (this.roleIds.length == 0) {
          this.$message.error('请给账号添加角色')
          return;
        }
        if (this.editId) {
          // 修改保存
          Service.account().editUser({
            name: this.user.name,
            username: this.user.username,
            roleIds: this.roleIds
          }, this.editId).then(response => {
            if (response.errorCode == 0) {
              this.resize()
              this.resetword = response.data.password;
              this.title = '账号编辑成功';
            } else {
              this.$message.error(response.message)
            }
          }, err => {
          });

        } else {
          // 新建保存
          Service.account().addUser({
            name: this.user.name,
            username: this.user.username,
            roleIds: this.roleIds
          }).then(response => {
            if (response.errorCode == 0) {
              this.resize()
              this.resetword = response.data.password;
              this.title = '账号创建成功';
            } else {
              this.$message.error(response.message)
            }

          }, err => {
          });
        }

      },
      resize() {
        $(".dialogone").css({'display': 'none'})
        $(".dialog").css({"display": "block"})
        this.editId = '';
        this.user.name = '';
        this.user.username = '';
        this.treeData = []
        this.roleIds = []
      },
      // 合并数组后去重
      doArr(arr1, arr2) {
        let newArr = arr1.concat(arr2)
        return Array.from(new Set(newArr))
      },
      deleteArr(arr1, arr2) {
        for (let i = 1; i < arr2.length; i++) {
          let index = arr1.indexOf(arr2[i])
          arr1.splice(index, 1);
        }
        return arr1
      },
      // 数组去掉指定元素
      removeTag(val) {
        Service.rolePermission().getPermissionTreeById({}, val).then(response => {
          if (response.errorCode == 0) {
            let {permIds} = response.data
            this.permissonIds = this.deleteArr(this.permissonIds, permIds)
            this.$refs.tree.setCheckedKeys(this.permissonIds);
          } else {
            this.$message.error(response.message)
          }
        }, err => {
        });
      },
      selectRole(val) {
        if (val.length == 0) {
          this.$message.error('账号角色不能为空')
          this.permissonIds = []
          this.$refs.tree.setCheckedKeys([]);
          return
        }
        let paramsId = val[val.length - 1]
        Service.rolePermission().getPermissionTreeById({}, paramsId).then(response => {
          if (response.errorCode == 0) {
            let {permIds} = response.data
            this.permissonIds = this.doArr(this.permissonIds, permIds)
            this.$refs.tree.setCheckedKeys(this.permissonIds);
          } else {
            this.$message.error(response.message)
          }
        }, err => {
        });
      },
      closeDiolog() {
        this.getAccount()
        this.resize()
        $(".dialog").css({"display": "none"})
      },
      closeDiologone() {
        $(".dialogone").css({'display': 'none'})
        this.editId = '';
        this.user.name = '';
        this.user.username = '';
        this.treeData = []
        this.roleIds = []
      },
      resetPassword(id) {//重置密码
        this.$confirm('确定重置密码?', '', {
          confirmButtonText: '确定',
          cancelButtonText: '放弃',
          type: 'warning'
        }).then(() => {
          Service.account().resetPassword({}, id).then(response => {
            if (response.errorCode == 0) {
              this.resetword = response.data;
              this.title = '密码重置成功';
              $(".dialog").css({'display': 'block'})
            } else {
              this.$message.error(response.message)
            }

          }, err => {
          });

        }).catch(() => {

        });
      },
      resetAfter() {
        var clipboard = new this.Clipboard('.copyButton');
        clipboard.on('success', e => {
          this.$message.success('复制成功');
          // 释放内存
          clipboard.destroy();
          $(".dialog").css({'display': 'none'})
        });
        clipboard.on('error', e => {
          // 不支持复制
          // 释放内存
          clipboard.destroy()
        })
      },
      enableUser(item) {//启用账号
        Service.account().enableUser({}, item.id).then(response => {
          if (response.errorCode == 0) {
            this.$message({
              type: 'success',
              message: '账号已启用!'
            });
            this.getAccount('');//
          } else {
            this.$message.error(response.message)
          }

        }, err => {
        });
      },
      disableUser(item) {
        Service.account().disableUser({}, item.id).then(response => {
          if (response.errorCode == 0) {
            this.$message({
              type: 'success',
              message: '账号已禁用!'
            });
            this.getAccount('');
          } else {
            this.$message.error(response.message)
          }

        }, err => {
        });
      },
      showDes(item) {
        if (item.statusDesc) {
          for (let i in this.tableData) {
            this.tableData[i].isshowDes = false;
          }
          item.isshowDes = true;
        }
        this.$forceUpdate();

      },
      hideDes(item) {
        if (item.statusDesc) {
          for (let i in this.tableData) {
            this.tableData[i].isshowDes = false;
          }
        }
        this.$forceUpdate();
      },
      undercarriage(id) {
        this.$confirm('确认下架?', '', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          Service.goods().offShelfGoods({}, id).then(response => {
            if (response.errorCode == 0) {
              this.$message({
                type: 'success',
                message: '下架成功!'
              });
              this.getAccount('');//获取商品列表
            } else {
              this.$message.error(response.message)
            }

          }, err => {
          });

        }).catch(() => {

        });
      },
      delectCommodity(id) {
        this.$confirm('商品删除请谨慎操作，确定删除?', '', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          Service.goods().deleteGoods({}, id).then(response => {
            if (response.errorCode == 0) {
              this.$message({
                type: 'success',
                message: '删除成功!'
              });
              this.getAccount('');//获取商品列表
            } else {
              this.$message.error(response.message)
            }

          }, err => {
          });
        }).catch(() => {

        });
      },

      addCommodity(id) {
        this.getTreeData(id);
      },
      goDetail(id) {
        this.$router.push({name: 'editorcommondity', query: {id: id}})
      },
      handleSizeChange(val) {
        this.size = val;
        this.getAccount('')
      },
      handleCurrentChange(val) {
        this.page = val;
        this.getAccount('')
      },
      getbackData(str) {
        if (str == 'sure') {
          this.isRecommend = false;
        }
        if (str == 'cancle') {
          this.isRecommend = false;
        }
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
      getChannel() {
        Service.channel().getChannel({}).then(response => {
          if (response.errorCode == 0) {
            var selectData = response.data;
            selectData.unshift({id: '', name: '全部'});
            this.channelsOption = response.data
          } else {
            this.$message.error(response.message)
          }

        }, err => {
        });
      },
      getAccount(str) {
        if (str == 'search') {
          this.page = 1;
        }
        Service.account().getuserList({
          "name": this.name,
          "page": this.page,
          "size": this.size,
          "username": this.username,
          "enabled": this.enabled
        }).then(response => {
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
          } else {
            this.$message.error(response.message)
          }
        }, err => {
        });

      },
    },

  }
</script>

