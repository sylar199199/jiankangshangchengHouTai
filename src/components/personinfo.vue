<style rel="stylesheet/scss" lang="scss"  scoped>
    .personInfo{
        position: fixed;
        top:0;
        height: 100vh;
        width: 100%;
        left: 0;
        z-index: 10000;
        .dialogcontent{
            position: relative;
            height: 550px;
            background: #fff;
            width: 600px;
            display: flex;
            flex-direction: column;
            box-shadow: 0px 7px 59px 0px #cccccc;
            .addtitle{
                color: #929292;
                font-size: 16px;
                padding: 20px;
                border-bottom: 1px solid #eee;
                .addimg{
                    color: #0abf9b;
                }
            }
            .bannercontent{
                flex:1;
                overflow: auto;
                width: 560px;
                padding: 0 20px 20px;
                .imgContent{
                    .lianjie:first-child{
                        margin-top: 20px;
                    }
                    .lianjie{
                        margin: 30px auto;
                        font-size: 14px;
                        .labletext{
                            display: inline-block;
                            min-width: 120px;
                            text-align: right;
                            padding-right: 5px;
                        }
                        input{
                            height: 30px;
                            border: 1px solid #dcdcdc;
                            text-indent: 5px;
                            width: 314px;
                        }
                    }
                    .juese{
                        display: flex;
                        margin-bottom:0;
                        .labletext{
                            padding-right: 7px;
                        }
                        .checkbox{
                            margin-bottom: 8px;
                        }
                        .treeData{
                            padding: 20px 20px 0;
                            min-width:140px;
                        }
                    }
                }
            }
            .button{
                text-align: center;
                padding: 20px 0 ;
                border-top: 1px solid #eee;
                font-size: 14px;
                width: 100%;
            }
        }
    }
</style>
<template>
    <div class="personInfo dialogbac">
        <div class="dialogcontent">
            <h3 class="addtitle"><span class="addimg">个人信息</span></h3>
            <div class="bannercontent">

                <div class="imgContent">
                    <div class="lianjie">
                        <span class='labletext' >账&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号 : </span>
                        {{userInfo.phone}}
                    </div>
                    <div class="lianjie" >
                        <span class='labletext'>员工姓名 : </span>
                        <input type="text" v-model="userInfo.name" placeholder="请输入员工登录账号">
                    </div>
                    <div class="lianjie">
                        <span class='labletext'>邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱 : </span>
                        <input type="text" v-model="userInfo.email" placeholder="请输入员工邮箱">
                    </div>
                    <div class="lianjie juese">
                        <span class='labletext'>角&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;色 :
                        </span>
                        <div>
                            <span v-for="item in roles">{{item.name}}&nbsp;&nbsp;</span>
                        </div>

                    </div>
                    <div class="lianjie juese">
                        <span class='labletext'>权&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;限 :
                        </span>
                        <div class="treeData">
                            <el-tree ref="roles"
                                     :data="data"
                                     node-key="id"
                                     default-expand-all
                                     :props="defaultProps"></el-tree>
                        </div>
                    </div>
                </div>
            </div>
            <div class="button">
                <span class="smallsureButton cursor" @click="sureImg">确定</span>
                <span class="smallcancleButton cursor" @click="cancleImg">取消</span>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import PatternRules from '../common/patternRules'
    import Service from '../common/service'
    export default {
        name: "addstaf",
        data() {
            return {
                name: '',
                data: [],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                },
                textarea: '',
                roles:  [],
                dialogImageUrl: '',
                dialogVisible: false,
                imgUrl: '',
                radio: '1',
                publish: '1',
                userInfo:'',
            };
        },
        created(){
            this.userInfo = JSON.parse(localStorage.getItem('user'));
            this.name = this.userInfo.name;
            this.roles = this.userInfo.roles;
            this.getInfo();
            // this.getTree()
        },
        watch:{
            'userInfo.name'(){
                this.userInfo.name = this.userInfo.name.substring(0,8)
            },
        },
        mounted(){
            // var width = document.body.clientWidth;
            // var left = 0.5*(width- 600);
            // var height = document.body.offsetHeight,
            //     scrollTop = document.body.scrollTop,
            //     top = 0.5*(height-scrollTop-550);
            // $('.dialogcontent').css({'top': top});
    },
        methods: {
            getTree(){
                Service.role().resourceTree().then(response => {
                    if(response.errorCode == 0){
                        for(var i=0;i<response.data.length;i++){
                            response.data[i].disabled = true;
                            for(var j=0;j<response.data[i].children.length;j++){
                                response.data[i].children[j].disabled = true;
                                if(response.data[i].children[j].children.length != 0){
                                    for(var k=0;k<response.data[i].children[j].children.length;k++){
                                        response.data[i].children[j].children[k].disabled = true;
                                    }
                                }
                            }
                        }
                        this.data = response.data;
                        this.getPermissions();
                    }
                }, err => {
                });
            },
            getInfo(){
                Service.login().accountInfo().then(response => {
                   if(response.errorCode == 0){
                        this.userInfo.phone = response.data.phone;
                       this.userInfo.name = response.data.name;
                       this.userInfo.email = response.data.email;
                       this.roles = response.data.roles;
                       this.data = response.data.permissions;

                   }
                }, err => {
                });
            },
            sureImg(){
                if(this.userInfo.name == ''|| this.userInfo.name.length<2 || this.userInfo.name == null){
                    this.$message.warning('请输入不少于2位的中文员工姓名');
                    return;
                }
                if(!((PatternRules.name).test(this.userInfo.name))){
                    this.$message.warning('请输入中文姓名');
                    return
                }
                if(!this.userInfo.email){
                    this.$message.warning('请输入正确邮箱');
                    return;
                }
                if(!(PatternRules.mail.test(this.userInfo.email))){
                    this.$message.warning('请输入正确邮箱');
                    return;
                }
                Service.login().editorInfo({'name': this.userInfo.name,email: this.userInfo.email}).then(response => {
                    if(response.errorCode == 0){
                        this.$emit('clickperson', 'closeDialog')
                    }else{
                        this.$message.error(response.message)
                    }
                }, err => {
                });

            },
            cancleImg(){
                this.$emit('clickperson', 'closeDialog')
            },
        },
    }
</script>

