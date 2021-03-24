<template>
    <div>
        <div class="generalTop clear">
            <div class="contaner">
                <div class="logoBox">
                    <img class='logo' src="../assets/images/kunlun_logo.png">
                </div>
                <div class="fr">
                    <i class="iconfont icongeren-copy" @click="openReset()"></i>
                    <span class="userName font12 cursor" @click="openReset()">{{userInfo.username}}</span>
                    <i class="iconfont  icontuichu cursor"></i>
                    <span class="userName font12 cursor" @click="loginOut()">退出登录</span>
                </div>
            </div>
        </div>
        <resetPassword @clickbanner="getbackData" v-if="showresetPassword"></resetPassword>
    </div>
</template>

<script>
    import Service from '@/common/service'
    import resetPassword from '@/components/resetPassword'
    export default {
        name: "klTop",
        components:{
            resetPassword,
        },
        data(){
            return{
                showresetPassword: false,
            }
        },
        created() {
            this.userInfo = JSON.parse(localStorage.getItem('user'));
        },
        methods:{
            getbackData(str){
                if(str == 'sure'){
                    this.showresetPassword = false;
                }
                if(str == 'cancle'){
                    this.showresetPassword = false;
                }
            },
            openReset(){
                console.log(this.showresetPassword)
                this.showresetPassword = true;

            },
            loginOut(){
                Service.login().loginOut({
                }).then(response => {
                    if(response.errorCode == 0){
                        localStorage.removeItem('user');
                        localStorage.removeItem('klparam');
                        localStorage.removeItem('contentnews');
                        localStorage.removeItem('type');
                        localStorage.removeItem('access_token');
                        this.$router.push({name: 'login'})
                    }else{
                        this.$message.error(response.message)
                    }
                }, err => {
                });
            },
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss"  scoped>
    $baseFontSize: 192;
    $bg2087: #56ae97;
    $bac97: #979797;
    .generalTop{
        height: 60px;
        line-height: 60px;
        position: fixed;
        top: 0;
        width: 100%;
        background: #fff;
        z-index: 1000;
        .logoBox{
            width: 96rem/$baseFontSize;
            text-align: center;
            float: left;
        }
        .logo{
            width: 125px;
            height: 35px;
            display: inline-block;
            vertical-align: middle;
        }
        .title{
            margin-left: 26px;
            color: #000;
            font-size:14px;
            display: inline-block;
            vertical-align: middle;
        }
        .fr{
            margin-right: 26rem/$baseFontSize;
            .iconfont{
                color: $bg2087;
                font-size: 20px;
                display: inline-block;
                vertical-align: middle;
                margin-right: 8px;
                margin-left: 24px;
            }
            .userName{
                display: inline-block;
                vertical-align: middle;
                color: $bg2087;

            }
        }
    }

</style>