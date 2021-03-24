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
          min-height: 500px;

          .searchContent {
            flex-wrap: wrap;


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

          .treestyle {
            margin-top: 30px;
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
      width: 850px;
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

          .lableText {
            display: inline-block;
            width: 60px;
            text-align: right;
          }

          .treediv {
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

  .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;

    .button-group {
      margin-right: 60px;
    }

    .member {
      margin-right: 30px;
      font-size: 12px;
    }

    .time {
      font-size: 12px;
      color: #333333;
    }
  }

  /deep/ .el-tree-node__children .el-tree-node__children .el-tree-node {
    display: inline-block;
    width: 100%;
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
            <div class="searchBox itemscenter">
              <div class="bacButton cursor marginright10 marginLeft10" v-show="permAdd" @click="addFirst()">新增一级菜单权限
              </div>
            </div>
            <el-tree
              v-show="permView"
              class="treestyle"
              node-key="id"
              :data="treeData"
              :props="defaultProps"
              @node-drop="handleDrop"
              draggable
              :allow-drag="allowDrag"
              :allow-drop="allowDrop"
              default-expand-all
            >
      <span class="custom-tree-node" slot-scope="{ node }">
        <span>{{ node.data.name }}({{ node.data.code }})</span>
        <div>
          <span class="button-group">
            <el-button
              v-show="permAdd"
              type="text"
              size="mini"
              icon="el-icon-plus"
              @click.stop="() => actionNode(node, 'add')"
            >
              新增
            </el-button>
            <el-button
              v-show="permUpdate"
              type="text"
              size="mini"
              icon="el-icon-edit"
              @click.stop="() => actionNode(node, 'edit')"
            >
              编辑
            </el-button>
            <el-button
              type="text"
              size="mini"
              icon="el-icon-minus"
              v-show="permDelete"
              @click.stop="() => actionNode(node, 'delete')"
            >
              删除
            </el-button>
          </span>
          <span class="member">
            <span class="member-counts"> {{ node.data.count }}</span>
          </span>
          <span class="time">
            {{ node.data.createTime }}
          </span>
        </div>
      </span>
            </el-tree>
          </div>
        </div>
        <div class="dialogone">
          <div class="messge">
            <div class="messageHeader">
              <div class="messagetitle">
                <span>{{dialogoneTitle}}</span>
              </div>
            </div>
            <div class="messageContent">
              <div class="messagemessage">
                <span class="lableText colorblack font12"><span class="colore6">*&nbsp</span>菜单名称:</span>
                <input type="text" v-model="menu.name" @change="changeValue('name','')"
                       class="inputBox marginLeft10 colorblack font12" placeholder="请输入菜单名称"/>
              </div>
              <div class="messagemessage">
                <span class="lableText colorblack font12"><span class="colore6">*&nbsp</span>是否隐藏:</span>
                <i class="iconfont iconxuanzhong color2087 font20 cursor marginLeft10" v-if="menu.hidden"></i>
                <i class="iconfont iconxuanze  font20 cursor marginLeft10" v-if="!menu.hidden"
                   @click="menu.hidden = true"></i>
                <span class="typeText colorblack font12">是</span>
                <i class="iconfont iconxuanzhong color2087 font20 cursor marginLeft10" v-if="!menu.hidden"></i>
                <i class="iconfont iconxuanze  font20 cursor marginLeft10" v-if="menu.hidden"
                   @click="menu.hidden = false"></i>
                <span class="typeText colorblack font12">否</span>
              </div>
              <div class="messagemessage">
                <span class="lableText colorblack font12"><span class="colore6">*&nbsp</span>code:</span>
                <input type="text" @change="changeValue('code','')" v-model="menu.code"
                       class="inputBox marginLeft10 colorblack font12" placeholder="请输入code"/>
              </div>
              <div class="messagemessage">
                <span class="lableText colorblack font12"><span class="colore6">*&nbsp</span>类型 :</span>
                <i class="iconfont iconxuanzhong color2087 font20 cursor marginLeft10" v-if="menu.type == 1"></i>
                <i class="iconfont iconxuanze  font20 cursor marginLeft10" v-if="menu.type == 2"
                   @click="menu.type = 1"></i>
                <span class="typeText colorblack font12">菜单</span>
                <i class="iconfont iconxuanzhong color2087 font20 cursor marginLeft10" v-if="menu.type == 2"></i>
                <i class="iconfont iconxuanze  font20 cursor marginLeft10" v-if="menu.type == 1"
                   @click="menu.type = 2"></i>
                <span class="typeText colorblack font12">功能</span>
              </div>
              <div class="messagemessage">
                <span class="lableText colorblack font12">url :</span>
                <input type="text" v-model="menu.url"
                       class="inputBox marginLeft10 colorblack font12" placeholder="请输入url"/>
              </div>
              <div class="messagemessage">
                <span class="lableText colorblack font12">父级id :</span>
                <input type="text" v-model="menu.parentId"
                       class="inputBox marginLeft10 colorblack font12" placeholder="请输入父级id"/>
              </div>
              <div class="messagemessage">
                <span class="lableText colorblack font12">icon名称 :</span>
                <input type="text" v-model="menu.icon"
                       class="inputBox marginLeft10 colorblack font12" placeholder="请输入icon名称"/>
              </div>
              <div class="messagemessage">
                <span class="lableText colorblack font12">描述 :</span>
                <input type="text" v-model="menu.description"
                       class="inputBox marginLeft10 colorblack font12" placeholder="请输入描述"/>
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
          code: '',
          hidden: false,
          type: 1,
          parentId: '',
          icon: '',
          description: '',
          url: '',
        },
        editId: '',
        dialogoneTitle: '新增一级菜单',
        treeData: [],
        defaultProps: {
          children: 'children',
          name: 'label'
        },
        permView: false,
        permAdd: false,
        permUpdate: false,
        permDelete: false,
        dragedparentId: null, // 被拖拽节点的父级id
      }
    },
    created() {
      this.userInfo = JSON.parse(localStorage.getItem('user'));
      this.permView = this.havePermissions('perm:view')
      this.permAdd = this.havePermissions('perm:add')
      this.permUpdate = this.havePermissions('perm:update')
      this.permDelete = this.havePermissions('perm:delete')
    },
    methods: {
      getList() {
        Service.rolePermission().getPermissionTree({}).then(response => {
          if (response.errorCode == 0) {
            if (response.data.length) {
              this.treeData = response.data
            }
          } else {
            this.$message.error(response.message)
          }
        }, err => {
        });
      },
      addFirst() {
        $(".dialogone").css({"display": 'block'})
      },
      // 添加 删除节点
      actionNode({data}, methods) {
        if (methods == 'add') {
          this.menu.parentId = data.id
          $(".dialogone").css({"display": 'block'})
        } else if (methods == 'edit') {
          this.editId = data.id
          this.menu = data
          $(".dialogone").css({"display": 'block'})
        } else if (methods == 'delete') {
          this.deleteNode(data.id)
        }
      },
      deleteNode(id) {
        this.$confirm('权限节点删除请谨慎操作，确定删除?', '', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          Service.rolePermission().deletePermissionNode({}, id).then(response => {
            if (response.errorCode == 0) {
              this.getList()
            } else {
              this.$message.error(response.message)
            }
          })
        }).catch(() => {

        });

      },
      resizeMenu() {
        this.editId = '',
        this.menu = {
          name: '',
          code: '',
          hidden: false,
          type: 1,
          parentId: '',
          icon: '',
          description: '',
          url: '',
        }
      },
      // 树节点是否能被拖拽
      allowDrag(draggingNode) {
        this.dragedparentId = draggingNode.data.parentId
        return true;
      },
      //  树节点是否能被安放
      allowDrop(draggingNode, dropNode, type) {
        // 节点只能同级拖拽并且不能插入节点
        if ( dropNode.data.parentId === this.dragedparentId && type != 'inner') {
          return true;
        } else {
          return false;
        }
      },
      // 拖拽完成
      handleDrop(draggingNode, dropNode, dropType, ev) {
        let sortArr = dropNode.parent.childNodes.map((item, index)=>{
          return{
            sort: index+1,
            id: item.data.id
          }
        })
        Service.rolePermission().permSort(sortArr).then(response=>{
          if(response.errorCode == 0){
            this.$message.success(response.message)
          }else {
            this.$message.error(response.message)
          }
        })
      },
      centerUser() {
        if (!this.changeValue('name', 'submit')) {
          return;
        }
        if (!this.changeValue('code', 'submit')) {
          return;
        }
        if (this.editId) {
          delete this.menu.id
          Service.rolePermission().editPermissionNode(this.menu, this.editId).then(response => {
            if (response.errorCode == 0) {
              this.getList();
              this.editId = ''
              this.resizeMenu()
            } else {
              this.$message.error(response.message)
            }
          })
        } else {
          Service.rolePermission().addPermissionNode(this.menu).then(response => {
            if (response.errorCode == 0) {
              this.getList();
              this.resizeMenu()
            } else {
              this.$message.error(response.message)
            }
          })
        }
        $(".dialogone").css({"display": 'none'})
      },
      changeValue(name, type) {
        var on = true;
        if (name == 'name') {
          if (this.menu[name].length < 2 || this.menu[name].length > 20) {
            this.$message.error('菜单长度大于2且小于20');
            on = false;
            return;
          }
        } else if (name == 'code') {
          if (this.menu[name].length < 2 || this.menu[name].length > 40) {
            this.$message.error('请输入长度不少于2位，不多于40位的code名称');
            on = false;
            return;
          }
        }
        if (type == 'submit') {
          return on;
        }

      },

      closeDiologone() {
        this.resizeMenu()
        $(".dialogone").css({"display": 'none'})
      },

    },
    mounted() {
      this.getList()
    },

  }
</script>
