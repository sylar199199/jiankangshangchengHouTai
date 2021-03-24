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
            height: 400px;
            background: #fff;
            width: 480px;
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
                width: 440px;
                height: 300px;
                padding: 0 20px 0px;
                .imgBox{
                    width: 440px;
                    height: 280px;
                    text-align: center;
                    margin: 0 20px;
                    line-height: 280px;
                    .imageUrl{
                        max-width: 440px;
                        max-height: 250px;
                        transform: scale(1);
                        display:inline-block;
                        vertical-align: middle;
                    }
                }
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
    .fade-enter-active,
    .fade-leave-active {
        transition: all .2s linear;
        transform: translate3D(0, 0, 0);
    }

    .fade-enter,
    .fade-leave-active {
        transform: translate3D(100%, 0, 0);
    }


    /* bigimg */

    .img-view {
        position: relative;
        width: 100%;
        height: 100%;
    }

    /*遮罩层样式*/
    .img-view .img-layer {
        position: fixed;
        z-index: 999;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.7);
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    /*不限制图片大小，实现居中*/
    .img-view .img img {
        max-width: 100%;
        display: block;
        position: absolute;
        left: 0;
        right: 0;
        margin: auto;
        z-index: 1000;
    }
</style>
<template>
    <div class="deleteLeads dialogbac">
        <div class="dialogcontent">
            <h3 class="addtitle">
                <span class="addimg">{{title}}</span>
                <i class="iconfont icon-shanchu" @click="cancleButton"></i>
            </h3>
            <div class="bannercontent">
                <div class="imgBox">
                    <img :src="imgUrl" class="imageUrl">
                </div>
                <!--<transition name="fade">-->
                    <!--<div class="img-view" @click="bigImg">-->
                        <!--&lt;!&ndash; 遮罩层 &ndash;&gt;-->
                        <!--<div class="img-layer"></div>-->
                        <!--<div class="img">-->
                            <!--<img :src="imgUrl">-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</transition>-->
            </div>
        </div>
    </div>
</template>

<script>
    import Store from '@/vuex/index'
    import Service from '@/common/service'
    export default {
        name: "viewsImg",
        props:{
            imgUrl:{
                type: String
            },
            title:{
                type: String
            }
        },
        data() {
            return {
            };
        },
        created(){
        },
        mounted(){
        },
        methods: {
            bigImg() {
                // 发送事件
                this.$emit('clickit')
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

