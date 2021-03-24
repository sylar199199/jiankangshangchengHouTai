<style rel="stylesheet/scss" lang="scss"  scoped>
    $baseFontSize: 192;
    .deleteLeads{
        position: fixed;
        top:0;
        height: 100vh;
        width: 100%;
        left: 0;
        z-index: 10000;
        .dialogcontent{
            position: relative;
            height: 315px;
            background: #fff;
            width: 420px;
            display: flex;
            flex-direction: column;
            box-shadow: 0px 7px 59px 0px #cccccc;
            .addtitle{
                color: #929292;
                font-size: 16px;
                margin: 15px 20px;
                padding-bottom: 15px;
                display: flex;
                justify-content: space-between;
                .addimg{
                    color: #000;
                    font-size: 13px;
                }
                .iconfont{
                    color: #D0CFCF;
                    cursor: pointer;
                }
            }
            .bannercontent{
                flex:1;
                display: flex;
                overflow: auto;
                width: 380px;
                padding: 0 20px 0px;
                .imgContent{
                    .lianjie:first-child{
                        margin-top: 20px;
                    }
                    .addbutton{
                        margin-left: 20px;
                        .icon-weibiaoti2{
                            font-size: 12px;
                            color: #fff;
                            margin-right: 4px;
                        }
                    }
                    .beizhu{
                        display: flex;
                        .textareaBox{
                            width: 200px;
                        }
                    }
                    .lianjie{
                        font-size: 12px;
                        margin: 20px 20px 0;
                        color: #000;
                        position: relative;
                        .lableText{
                            color: #000;
                            display: inline-block;
                            min-width: 74px;
                        }
                        .labletext{
                           color: #999;
                        }
                        .lableIcon{
                            color: #FC786E;
                            margin-right: 5px;
                        }
                        .warmInput{
                            position: absolute;
                            left: 76px;
                            color: #FC786E;
                            bottom: -17px;
                        }
                    }
                }
            }
            .button{
                text-align: center;
                padding: 40px 0 ;
                font-size: 12px;
                width: 100%;
            }
        }
    }
</style>
<template>
    <div class="deleteLeads dialogbac">
        <div class="dialogcontent">
            <h3 class="addtitle">
                <span class="addimg">无机会放弃</span>
                <i class="iconfont icon-shanchu" @click="cancleButton"></i>
            </h3>
            <div class="bannercontent">
                <div class="imgContent">
                    <div class="lianjie" >
                        <span class='labletext'> 该线索无销售机会，主动放弃。请录入放弃原因。</span>
                    </div>
                    <div class="lianjie beizhu">
                        <span class="lableText"><span class="lableIcon">*</span>放弃原因 :</span>
                        <div class="textareaBox">
                            <el-input
                                    type="textarea"
                                    :rows="3"
                                    placeholder="请不要超过200字"
                                    v-model="reason" >
                            </el-input>
                        </div>
                        <span class="warmInput" v-if="sureName">请录入原因</span>
                    </div>
                </div>
            </div>
            <div class="button">
                <span class="smallsureButton cursor" @click="sureButton">确认</span>
                <span class="smallcancleButton cursor" @click="cancleButton">取消</span>
            </div>
        </div>
    </div>
</template>

<script>
    import Store from '@/vuex/index'
    import Service from '@/common/service'
    export default {
        name: "giveupResult",
        props:{
            deleteId:{
                type: Array
            },
            chanceId:{
                type: Number
            }
        },
        data() {
            return {
                sureName: true,
                reason: '',
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
                href: '',
            };
        },
        created(){
            console.log(this.deleteId)
        },
        watch:{
            'reason'(){
                this.reason = this.reason.replace(/(^\s*)|(\s*$)/g, "").substring(0,200)
            }

        },
        mounted(){
        },
        methods: {
            changeHref(){

            },
            sureButton(){
                if(this.reason == ''){
                    this.$message.error('请输入放弃原因');
                    return;
                }
                Store.commit("setIsLoading", true);
                Service.leads().postGiveup({
                    reason: this.reason,
                    chanceId: this.chanceId
                }).then(response => {
                    Store.commit("setIsLoading", false);
                    if (response.errorCode == 0) {
                        this.$emit('clickbanner', 'sureiveUp');
                    } else {
                        this.$message.error(response.message)
                    }
                }, err => {
                })
            },
            cancleButton(){
                this.$emit('clickbanner', 'cancle')
            },
        },
    }
</script>

