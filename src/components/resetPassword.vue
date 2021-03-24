<style rel="stylesheet/scss" lang="scss"  scoped>
    $baseFontSize: 192;
    .personInfo{
        position: fixed;
        top:0;
        height: 100vh;
        width: 100%;
        left: 0;
        z-index: 1000;
        .dialogcontent{
            position: relative;
            height: 400px;
            background: #fff;
            width: 800px;
            display: flex;
            flex-direction: column;
            box-shadow: 0px 7px 59px 0px #cccccc;
            .titleText{
            }
            .iconshanchu{
                color: #D0CFCF;
                cursor: pointer;
                position: absolute;
                right: 16px;
                top: 10px;
            }
            .wordBox{
                padding-bottom: 30px;
                .inputBox{
                    width: 330px;
                    margin: 0 auto;
                    .textButton{
                        margin: 40px auto;
                        width: 330px;
                        text-align: center;
                        .sureButton{
                            display: inline-block;
                            text-align: center;
                            width: 120px;
                            height: 40px;
                            background-color: #56ae97;
                            border-radius: 20px;
                            line-height: 40px;
                        }
                    }
                    .inputText{
                        margin-bottom: 15px;
                        position: relative;
                        .text{
                            color: #000000;
                            margin-right:10px;
                            background: #f8f8f8;
                            height: 38px!important;
                            width: 330px;
                            line-height: 40px;
                            text-indent: 10px;
                            border-radius: 4px;
                        }
                        .warmBox{
                            position: absolute;
                            margin-left: 340px;
                            top: 10px;
                            min-width:110px;
                            font-size: 12px;
                            .warmTextone{
                                color: #fd786a;
                            }
                        }
                        .passStyle{
                            border: 1px solid #e5e5e5;
                            border-radius: 20px;
                            width:104px;
                            height: 22px;
                            font-size: 14px;
                            margin-top: -3px;
                            .warmText{
                                position: relative;
                                padding: 2px 10px;
                                display: inline-block;
                            }
                            .warmTextheight{
                                padding: 6px 10px;
                            }
                            .redText{
                                color: #fd786a;
                            }
                            .originText{
                                color: #faa41a;
                            }
                            .blueText{
                                color: #56ae97;
                            }
                            .warmText:after{
                                position: absolute;
                                margin-left: 7px;
                                display: inline-block;
                                content: '';
                                height: 14px;
                                width: 2px;
                                background: #e5e5e5;
                                border-radius: 1px;
                                top: 5px;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
<template>
    <div class="personInfo dialogbac">
        <div class="dialogcontent">
            <div class="titleText colorblack font16 padding20">设置密码</div>
            <i class="iconfont iconshanchu" @click="cancleButton"></i>
            <div class="bannercontent">
                <div class="wordBox">
                    <div class="inputBox">
                        <div class="inputText">
                            <input type="password" class="text font14" v-model="oldpassword" placeholder="请输入旧密码">
                        </div>
                        <div class="inputText">
                            <input type="password" class="text font14" v-model="password" @blur="changePassword('blur')" @keyup="changePassword('keyup')" placeholder="请输入新的登录密码">
                            <div class="warmBox passStyle"><span :class="isLower?'warmText redText':'warmText'">弱</span><span :class="isMiddle?'warmText originText':'warmText'">中</span><span :class="isHeight?'warmTextheight blueText':'warmTextheight'" >高</span></div>
                        </div>
                        <div class="inputText">
                            <input class="text font14" v-model="repassword" @change="watchPassword()" type="password" placeholder="请再次输入您的密码">
                            <div class="warmBox" v-if="validatepassword"><span class="warmTextone" >密码不一致</span></div>
                        </div>
                        <div class="textButton">
                            <span class="sureButton cursor" @click="goFinish()">确定</span>
                        </div>
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
    import  Filter from '@/common/filter'
    import Store from '@/vuex/index'
    export default {
        name: "resetPassword",

        props:{
            guigeData:{
                type: Array
            },
            channelId:{
                type: Number
            }
        },
        data() {
            return {
                password: '',
                repassword: '',
                validatepassword: false,
                isMiddle: false,
                isLower: false,
                isHeight: false,
                oldpassword: ''
            };
        },
        created(){

        },
        watch:{

        },
        mounted(){
        },
        methods:{
            goFinish(){
                if(this.oldpassword == ''){
                    this.$message.error("请输入旧的登录密码")
                    return
                }
                var reg = /^[`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘’，。、0-9a-zA-Z]+$/;
                if(!reg.test(this.password)){
                    this.$message.error("请输入带有数字、大小写字母、或其它特殊符号至少两种组合的密码")
                    return
                }
                if(this.isLower){
                    this.$message.error("请输入带有数字、大小写字母、或其它特殊符号至少两种组合的密码")
                    return
                }
                if(this.password.length<8 || this.password.length>20){
                    this.$message.error('为保障你的账户安全，密码位数请至少设置8位数！')
                    return
                }
                if(!this.repassword || (this.repassword != this.password)){
                    this.validatepassword = true;
                    this.$message.error('请再次输入密码')
                    return
                }
                Service.login().changePassword({
                    oldPassword: this.oldpassword,
                    newPassword: this.password
                }).then(response => {
                    if(response.errorCode == 0){
                        this.$message.success(response.message)
                        this.$emit('clickbanner', 'sure')
                    }else{
                        this.$message.error(response.message)
                    }
                }, err => {
                });
            },
            watchPassword(){
                if(this.repassword != this.password){
                    this.validatepassword = true;
                }else{
                    this.validatepassword = false;
                }
            },
            changePassword(type){
                var reg = /^[`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘’，。、0-9a-zA-Z]+$/;
                var num = false,Capital = false,Lowercase = false,specail = false ;
                this.password = this.password.replace(/\s+/g, "").substring(0,20);
                if(reg.test(this.password)){
                    if(this.password.length>7){
                        var reg1 = /^[`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘’，。、]+$/;
                        var reg2 = /^[a-z]+$/;
                        var reg3 = /^[A-Z]+$/;
                        var reg4 = /^[0-9]+$/;
                        var passWord = [];
                        passWord = this.password.split('');
                        for(var i=0;i<passWord.length;i++){
                            if(reg1.test(passWord[i])){
                                specail = true;
                            }
                            if(reg2.test(passWord[i])){
                                Lowercase = true;
                            }
                            if(reg3.test(passWord[i])){
                                Capital = true;
                            }
                            if(reg4.test(passWord[i])){
                                num = true;
                            }
                        }
                        if((num&&!Capital&&!Lowercase&&!specail) || (!num&&Capital&&!Lowercase&&!specail) || (!num&&!Capital&&Lowercase&&!specail)|| (!num&&!Capital&&!Lowercase&&specail)){
                            this.isLower = true;
                            this.isMiddle = false;
                            this.isHeight = false;
                        }
                        if((!num&&!Capital&&Lowercase&&specail) || (!num&&Capital&&!Lowercase&&specail) || (!num&&Capital&&Lowercase&&!specail)|| (num&&!Capital&&!Lowercase&&specail)|| (num&&!Capital&&Lowercase&&!specail)|| (num&&Capital&&!Lowercase&&!specail)){
                            this.isMiddle = true;
                            this.isLower = false;
                            this.isHeight = false;
                        }
                        if((!num&&Capital&&Lowercase&&specail) || (num&&!Capital&&Lowercase&&specail) || (num&&Capital&&!Lowercase&&specail)|| (num&&Capital&&Lowercase&&!specail)|| (num&&Capital&&Lowercase&&specail)){
                            this.isHeight = true;
                            this.isLower = false;
                            this.isMiddle = false;
                        }
                    }else{
                        this.isMiddle = false;
                        this.isLower = true;
                        this.isHeight = false;
                    }
                }else{
                    if(type=='blur'){
                        this.$message.error("请输入带有数字、大小写字母、或其它特殊符号至少两种组合的密码")
                    }
                    this.isMiddle = false;
                    this.isLower = false;
                    this.isHeight = false;
                }
            },
            cancleButton(){
                this.$emit('clickbanner', 'cancle')
            },
        }
    }
</script>

