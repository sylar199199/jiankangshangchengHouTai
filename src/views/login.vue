<style rel="stylesheet/scss" lang="scss" scoped>
  .phone {
    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.7);
    background: rgba(13, 13, 13, 0.1);
    color: #fff;
  }

  .logo {
    height: 68px;
    line-height: 68px;

    img {
      display: inline-block;
      vertical-align: middle;
      height: 35px;
      width: 117px;
      margin-top: -4px;
    }
  }

  .rightIcon {
    line-height: 68px;

    .icongeren-copy {
      font-size: 20px;
      display: inline-block;
      vertical-align: middle;
      margin-top: -2px;
    }
  }

  .bac {
    background-size: cover;
    width: 100%;

    .contaner {
      position: relative;

      .loginBox {
        width: 930px;
        padding-bottom: 70px;
        background-color: #ffffff;
        border-radius: 8px;
        margin: 60px auto;

        .loginTop {
          margin-bottom: 30px;
          text-align: center;
          font-weight: 600;
          padding-top: 70px;

          .xueanlogo {
            width: 170px;
            height: 47px;
          }
        }

        .inputBox {
          width: 330px;
          height: 40px;
          background-color: #f8f8f8;
          border-radius: 4px;
          position: relative;
          margin: 10px auto;

          .passBox {
            position: absolute;
            overflow: hidden;
            height: 78px;
            overflow-y: scroll;
            width: 100%;
            background: #fff;
            border-radius: 6px;
            border: 1px solid #e5e5e5;
            z-index: 100;
            color: #000;
            font-size: 14px;

            .passBoxList {
              padding: 10px;
            }

            .passBoxList:hover {
              background: #e5e5e5;
            }

            .passBoxListone {
              padding: 10px;
            }

            /*display: none;*/
          }

          input {
            height: 40px !important;
            line-height: 40px;
            width: 100%;
            color: #000;
            font-size: 14px;
            background: #f8f8f8;
            border-radius: 4px;
            text-indent: 10px;
          }
        }

        .buttonBox {
          width: 330px;
          height: 40px;
          margin: 10px auto;

          .passLeft {
            color: #000;
            font-size: 12px;

            .iconfont {
              font-size: 14px;
              margin-right: 6px;
            }

            .iconxuanze1 {
              color: #e5e5e5;
            }

            .iconchecked {
              color: #56ae97;
            }
          }

          .passRight {
            color: #000;
            font-size: 12px;
          }

          .login {
            display: inline-block;
            width: 100%;
            height: 40px;
            background-color: #56ae97;
            border-radius: 20px;
            line-height: 40px;
            text-align: center;
            color: #fff;
            font-size: 16px;
          }

          .login:hover {
            background: rgba(86, 174, 151, 0.8)
          }
        }
      }
    }
  }
</style>
<template>
  <div class="login">
    <div style="background: #fff;">
      <div class="contaner clear">
        <div class="logo fl">
          <img class="cursor" @click="goHome()" src="../assets/images/kunlun_logo.png">
        </div>
        <div class="fr rightIcon">
          <i class="iconfont icongeren-copy color2087"></i>
          <span class="font12 color2087 marginLeft10">登录</span>
        </div>
      </div>
    </div>

    <div class="bac">
      <div class="contaner">
        <div class="loginBox">
          <div class="loginTop">
            <img class="xueanlogo" src="../assets/images/kunlun_logo.png">
          </div>
          <div class="inputBox">
            <input type="text" v-model="userName" placeholder="请输入账号名称">
          </div>
          <div class="inputBox">
            <input type="password" v-model="userPassword" @focus="showPassword()" @keyup="keyPassword()"
                   @blur="closePassword()" placeholder="请输入登录密码">
          </div>
          <div class="buttonBox flexBetween">
            <div class="passLeft">
              <i class="iconfont  iconxuanze1 cursor" @click='selectPass = !selectPass' v-if="!selectPass"></i>
              <i class="iconfont iconchecked cursor" @click='selectPass = !selectPass' v-if="selectPass"></i>
              <span>记住密码</span>
            </div>
            <div class="passRight cursor" @click="goFindPassword()">忘记账号或密码？</div>
          </div>
          <div class="buttonBox">
            <span class="login cursor" id='submit_btn' @click='goLogin()'>登录</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import patternRules from '../common/patternRules'
  import Service from '../common/service'
  import Util from '../common/util'

  export default {
    name: "login",
    data() {
      return {
        passLen: 0,
        userName: '',
        userPassword: '',
        selectPass: true,
        showPass: false,
        sha256: '',
      };
    },
    watch: {},
    created() {
      // this.sha256 = require("js-sha256").sha256;//这里用的是require方法
      if (Util.localStorageUtil.get('userInfo')) {
        this.userName = Util.localStorageUtil.get('userInfo').name;
        this.userPassword = Util.localStorageUtil.get('userInfo').password;
      }
    },
    mounted() {
      var that = this;
      document.onkeydown = function (e) {
        if (!e) e = window.event;
        if ((e.keyCode || e.which) == 13) {
          var obtnLogin = document.getElementById("submit_btn");  //submit_btn为按钮ID
          obtnLogin.focus();
          that.goLogin();//提交按钮触发的方法
        }
      }
    },
    methods: {
      goFindPassword() {
        this.$confirm('请联系后台管理员查询账号或重置密码?', '忘记账号或密码?', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {

        }).catch(() => {

        });
      },
      goLogin() {
        var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{4,20}$|^(?![0-9_|\-]+$)(?![a-zA-Z]+$)[0-9A-Za-z_|\-]{4,20}$|^((?![_|\-]+$)(?![a-zA-Z]+$)[a-zA-Z_|\-]{4,20}$)|^[a-zA-Z]{4,20}$/;
        if (this.userName.length < 4 || this.userName.length > 20) {
          this.$message.error('请输入正确的登录名');
          return;
        }
        if (!reg.test(this.userName)) {
          this.$message.error('请输入正确的登录名');
          return;
        }
        var reg1 = /^[`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘’，。、0-9a-zA-Z]+$/;
        if (!reg1.test(this.userPassword)) {
          this.$message.error('请输入正确的密码');
          return
        }
        if (this.userPassword.length < 8 || this.userPassword.length > 20) {
          this.$message.error('请输入正确的密码');
          return
        }
        if (this.selectPass) {
          if ((this.userName) && (this.userPassword)) {
            var userInfo = {'name': this.userName, 'password': this.userPassword};
            Util.localStorageUtil.set('userInfo', userInfo)
          }
        } else {
          Util.localStorageUtil.clear('userInfo', userInfo)
        }
        // var userPassword = this.sha256(this.userPassword);
        Service.login().loginSms({
          username: this.userName,
          password: this.userPassword
        }).then(response => {
          if (response.errorCode == 0) {
            Util.localStorageUtil.set('access_token', response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data));
            localStorage.setItem('permissions', JSON.stringify(response.data.permissions));
            var obj = {
              index: 0,
              from: 'parent',
              childindex: '',
              thirdIndex: '',
            };
            localStorage.setItem('klparam', JSON.stringify(obj));
            Service.login().getUsermenu({}).then(response => {
              if (response.errorCode == 0) {
                localStorage.setItem('userMenu', JSON.stringify(response.data));
                this.$router.push({name: 'home'})
              } else {
                this.$message.error(response.message);
              }
            })
          } else {
            this.$message.error(response.message);
          }
        }, err => {
        });

      },
      showPassword() {
        this.showPass = true;
      },
      keyPassword(event) {
        if (this.userPassword == '') {
          this.showPass = true;
        } else {
          this.showPass = false;
        }
      },
      closePassword() {
        this.showPass = false;
      },
      goRegister() {
        this.$router.push({'path': '/managementEnd/user/register', query: {callback: this.$route.query.callback}})
      },
      goHome() {
        this.$router.push({'path': '/'})
      },

    }
  }
</script>

