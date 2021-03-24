<style rel="stylesheet/scss" lang="scss"  scoped>
    $baseFontSize: 192;
    .personInfo{
        position: fixed;
        top:0;
        height: 100vh;
        width: 100%;
        left: 0;
        z-index: 1000;
        .dialogone::after,.dialog::after {
            content: "";
            display: inline-block;
            height: 100%;
            width: 0;
            vertical-align: middle;
        }
        .dialogone,.dialog{
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            text-align: center;
            z-index: 1001;
            background: rgba(0,0,0,0.5);
            .messge{
                display: inline-block;
                width: 460px;
                padding-bottom: 15px;
                vertical-align: middle;
                background-color: #fff;
                border-radius: 4px;
                font-size: 18px;
                -webkit-box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
                box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
                text-align: left;
                overflow: hidden;
                -webkit-backface-visibility: hidden;
                backface-visibility: hidden;
                .messageHeader{
                    text-align: center;
                    position: relative;
                    padding: 15px 15px 0px;
                    color: #000;
                    .messagetitle{
                    }
                }
                .messageContent{
                    position: relative;
                    padding: 20px 30px;
                    color: #606266;
                    font-size: 14px;
                     .adressBox{
                            margin-bottom: 24px;
                            .lableText{
                                display: inline-block;
                                width: 74px;
                                text-align: right;
                            }
                            .inputText{
                                border: 1px solid #e5e5e5;
                                width: 220px;
                                text-indent: 10px;
                            }
                        }
                }
                .messagebtns{
                    text-align: center;
                    padding: 0 0 30px;
                    .button{
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
                    .bacButton{
                        margin-left: 20px;
                    }
                }
            }
        }
        .dialogcontent{
            position: relative;
            height: 580px;
            background: #fff;
            width: 850px;
            display: flex;
            flex-direction: column;
            box-shadow: 0px 7px 59px 0px #cccccc;
            .iconshanchu{
                color: #D0CFCF;
                cursor: pointer;
                position: absolute;
                right: 16px;
                top: 10px;
            }
            .bannercontent{
                .dataGeneral{
                    padding: 20px 20px 0 20px;
                    .channnelTitle{
                        padding-bottom: 16px;
                    }
                    .searchContent{
                        flex-wrap: wrap;
                        position: relative;
                        .bacButton{
                            margin-top: -6px;
                        }
                        .searchBox{
                            margin-right:30px;
                            margin-bottom: 20px;
                            .searchLable{
                                margin-right: 6px;
                            }
                            .serchInput{
                                width: 200px;
                                height: 30px;
                                line-height: 30px;
                                border: 1px solid #e5e5e5;
                                text-indent: 10px;
                            }
                            .searchName{
                                display: inline-block;
                                width:56px;
                                line-height: 30px;
                                margin-right: 0;
                            }
                        }
                    }
                }
                .bannerTable{
                    background: #fff;
                    padding: 10px 0;
                    max-height: 300px;
                    overflow-y: auto;
                    .borderButton{
                        margin: 0 20px;
                    }
                    .noData{
                        text-align: center;
                        padding-top: 30px;
                    }
                    .table{
                        font-size: 12px;
                        border: 1px solid #f6f6f6;
                        margin: 0px  26px;
                        width: 800px;
                        th{
                            font-size: 12px;
                            text-align: center;
                            background: #f6f6f6;
                            .iconfont{
                                font-size: 16px;
                                margin-left: 5px;
                            }
                        }
                        tr{
                            border-bottom:1px solid #f6f6f6;
                            td{
                                text-align: center;
                                padding: 6px 10px;
                                position: relative;
                                .line{
                                    display: inline-block;
                                    height: 8px;
                                    width: 3px;
                                    background: #eee;
                                    margin: 0 10px;
                                }
                                .productImg{
                                    max-width: 70px;
                                    max-height: 70px;
                                }
                                .productBox{
                                    display: flex;
                                    flex-direction: column;
                                    height: 60px;
                                    justify-content: space-between;
                                    padding-left: 6px;
                                    .productText{
                                        margin-bottom: 0px;
                                        margin-top: 0;
                                    }
                                }
                            }
                            td:nth-of-type(1){
                                .iconfont{
                                    line-height: 70px;
                                    margin-right: 6px;
                                }
                                .selectIcon{
                                    height: 20px;
                                    width: 20px;
                                    margin-right: 6px;
                                    line-height: 70px;
                                }
                                min-width: 90px;
                                max-width: 90px;
                                text-align: center;
                                padding-left: 10px
                            }
                            td:nth-of-type(2){
                                text-align: center;
                            }
                            td:nth-of-type(3){
                                min-width: 300px;
                                max-width: 300px;
                            }
                        }
                    }
                }
                .block{
                    position: fixed;
                    bottom: 30px;
                    right: 20px;
                    margin-top: 10px;
                    width:100%;
                    .sureBox{
                        margin-top: 20px;
                        line-height: 30px;
                        justify-content: center;
                    }
                }

            }
            .button{
                text-align: center;
                padding: 40px 0;
                font-size: 12px;
                width: 100%;
            }
        }
    }
</style>
<template>
    <div class="personInfo dialogbac">
     <div class="dialog" v-if="showadddress">
            <div class="messge">
                <div class="messageHeader">
                    <div class="messagetitle">
                        <span>添加退货地址</span>
                    </div>
                </div>
                <div class="messageContent">
                    <div class="adressBox">
                        <span class="font12 colorGrey marginright10 lableText">退货地址名称</span>
                        <input type="text" @change="changeText('name','')" v-model="adressinfo.name" placeholder="请输入小于15个字符" class="inputText colorblack font12"/>
                    </div>
                    <div class="adressBox">
                        <span class="font12 colorGrey marginright10 lableText">退货联系人</span>
                        <input type="text" @change="changeText('contactName','')" v-model="adressinfo.contactName" placeholder="请输入小于15个字符" class="inputText colorblack font12"/>
                    </div>
                    <div class="adressBox">
                        <span class="font12 colorGrey marginright10 lableText">联系电话</span>
                        <input type="text" @change="changeText('contactTel','')" max-length="11" v-model="adressinfo.contactTel" placeholder="请输入联系人手机号" class="inputText colorblack font12"/>
                    </div>
                    <div class="adressBox ">
                        <span class="font12 colorGrey marginright10 lableText">联系地址</span>
                        <el-cascader
                                ref="cascaderAddr"
                                size="large"
                                :options="options"
                                v-model="selectedOptions"
                                @change="handleChange">
                        </el-cascader>
                    </div>
                    <div class="adressBox flex">
                        <span class="font12 colorGrey  lableText" style="margin-right: 30px;"></span>
                        <el-input
                                class="answerInput colorblack font12"
                                type="textarea"
                                autosize
                                placeholder="请输入小于50个字符"
                                v-model="adressinfo.addressDesc"
                                @change="changeText('addressDesc','')">
                        </el-input>
                    </div>

                </div>
                <div class="messagebtns">
                    <div class="button borderButton copyButton"  @click="showadddress = false">
                        取消
                    </div>
                    <div class="button bacButton" @click="addremarkMessage()">
                        确认
                    </div>
                </div>
            </div>
        </div>
        <div class="dialogcontent">
            <i class="iconfont iconshanchu" @click="cancleButton"></i>
            <div class="bannercontent">
                <div class="dataGeneral backWhite">

                    <div class="searchContent itemscenter  flexBetween">
                         <div class="channnelTitle">
                            <span class=" font14 marginright10">是否同意退货?</span>
                         </div>
                        <div class="searchBox itemscenter">
                            <div class="bacButton cursor marginright10 marginLeft10" @click="showadddress = true">添加退货地址</div>
                        </div>
                    </div>

                </div>
                <div class="dataGeneral bannerTable">
                    <table  v-if="noData" class="table">
                        <tr>
                            <th v-for="item in sortDatas" :key="item.name">
                                {{item.name}}
                            </th>
                        </tr>
                        <tr v-for="item in tableData" >
                            <td>
                                <div class="flexAround itemscenter">
                                    <div>
                                        <i  class='iconfont iconchecked color2087' @click="selectAdver(item)" v-if='item.isSelect'></i>
                                        <i  class='iconfont iconxuanze1 color2087' @click="selectAdver(item)" v-if='!item.isSelect'></i>
                                    </div>
                                     <span class="colorblack font12">{{item.name}}</span>
                                </div>
                            </td>
                            <td>{{item.contactName}}</td>
                            <td>
                               {{item.contactTel}}
                            </td>
                            <td>
                                {{(item.province)+(item.city)+(item.district)+(item.addressDesc)}}
                            </td>
                            <td>
                                <span class="color2087 font12 cursor" @click="deleteItem(item.id)">删除</span>
                             </td>

                        </tr>
                    </table>
                    <div v-if="!noData" class="noData">
                        <img class="nodataImg" src="../assets/images/nodatalist.png"/>
                        <p>暂无数据~</p>
                    </div>
                </div>
                <div class="block" v-if="noData">
                    <!--<el-pagination-->
                            <!--@size-change="handleSizeChange"-->
                            <!--@current-change="handleCurrentChange"-->
                            <!--:current-page="page"-->
                            <!--:page-size="size"-->
                            <!--layout="total,sizes, prev, pager, next,jumper"-->
                            <!--:total="total">-->
                    <!--</el-pagination>-->
                    <div class="sureBox flex">
                        <div class="smallsureButton cursor" @click="getGoods()">确定</div>
                        <div class="smallcancleButton cursor" @click="cancleButton()">取消</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Global from '@/common/global'
    import { regionData,CodeToText,TextToCode} from 'element-china-area-data'
    import patternRules from '@/common/patternRules'
    import Service from '@/common/service'
    import Util from '@/common/util'
    import  Filter from '@/common/filter'
    import Store from '@/vuex/index'
    export default {
        name: "creatSaleleads",
        props:{

        },
        data() {
            return {
                options: regionData,
                selectedOptions: null,
                 adressinfo: {
                     name: '',
                    contactName: '',
                    addressDesc: '',
                    city: "",
                    district: '',
                    province: '',
                    contactTel: ""
                },
                showadddress: false,
                goodsDatas: [],
                checked2: true,
                checkList: [],
                sortDatas: [{orderType:'',name: '退货地址名称',showBlue: true,orderField: ''},{orderType:'',name: '退货联系人',showBlue: true,orderField: ''},{orderType:'',name: '联系电话',showBlue: false,orderField: ''},{orderType:'asc',name: '退货地址',showBlue: false,orderField:''},{orderType:'asc',name: '操作',showBlue: false,orderField:''}],
                name: '',
                orderField: 'productPlanNo',
                orderType: 'asc',
                total: null,
                size: 10,
                page: 1,
                statiusId: '',
                tableData: [],
                noData: true,
                publishArr: [],
            };
        },
        created(){
            this.getGuigeList('')
        },
        watch:{

        },
        mounted(){
            // this.getAdress();
        },
        methods: {
            addremarkMessage(){
                if(!this.changeText('name','submit')){
                    return
                }
                if(!this.changeText('contactName','submit')){
                    return
                }
                if(!this.changeText('contactTel','submit')){
                    return
                }
                if(!this.adressinfo.city){
                    this.$message.error('请选择联系地址');
                    return
                }
                if(!this.changeText('addressDesc','submit')){
                    return
                }
                Service.returnadress().addadress(this.adressinfo).then(response => {
                    if(response.errorCode == 0){
                      this.$message.success('添加成功')
                      this.showadddress = false;
                      this.getGuigeList()
                    }else{
                        this.$message.error(response.message)
                    }

                }, err => {
                });
            },
            deleteItem(id){
                 Service.returnadress().deleteaddress({},id).then(response => {
                    if(response.errorCode == 0){
                      this.$message.success('删除成功')
                      this.getGuigeList()
                    }else{
                        this.$message.error(response.message)
                    }

                }, err => {
                });
            },
            handleChange (value) {
                this.adressinfo.province = CodeToText[value[0]];
                this.adressinfo.city = CodeToText[value[1]];
                this.adressinfo.district = CodeToText[value[2]];
            },
             changeText(name,type){
                var on = true;
                if(this.adressinfo[name].length != 0){
                    this.adressinfo[name] = this.adressinfo[name].replace(/\s+/g, "");
                }else{
                    on = false;
                }
                if(name == 'contactName' || name == 'name'){
                    if(this.adressinfo[name].length >15 ||  this.adressinfo[name].length < 2){
                        on = false;
                        this.$message.error('请输入小于15个字符或者不少于2个字符的联系人姓名或者退货地址名称');
                        return;
                    }
                }
                if(name == 'contactTel'){
                     var isMob=/^((0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/;
                     var num = /^\d{10}$/;
                     var value = this.adressinfo[name].replace(/-/g,'')
                    if(((patternRules.mobile).test(value)) || isMob.test(this.adressinfo[name]) || num.test(value)){
                    }else{
                        on = false;
                        this.$message.error('请输入正确的联系电话');
                        return;
                    }
                }
                if(name == 'addressDesc'){
                    if(this.adressinfo[name].length > 50 || this.adressinfo[name].length<2){
                        on = false;
                        this.$message.error('请输入小于50个字符或者不少于2个字符的联系地址');
                        return;
                    }
                }
                if(type == 'submit'){
                    return on
                }
            },
            // 勾选了商品
            getGoods(){
                if(this.publishArr.length == 0){
                    this.$message.error('请选择退货地址')
                     return
                }
                this.$emit('getadressid',this.publishArr[0].id)
                this.$emit('clickbanner', 'sure')
            },
            selectAdver(item){
                if(!item.isSelect && this.publishArr.length >=1){
                      this.$message.error('退货地址已经选择')
                    return;
                }
                item.isSelect = !item.isSelect;
                if(item.isSelect){//选中
                    if( this.publishArr.length >=1){
                        this.$message.error('退货地址已经选择')
                        item.isSelect = false;
                         this.$forceUpdate()
                        return
                    }
                    this.publishArr.push(item)
                }else{
                    var index = '';
                    for(var i = 0 ;i <this.publishArr.length;i++){
                        if(item.id == this.publishArr[i].id){
                            index = i;
                        }
                    }
                    this.publishArr.splice(index, 1);
                }
                this.$forceUpdate()
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
            getGuigeList(str){
                if(str == 'chaxun'){
                    this.page = 1;
                }
                Store.commit("setIsLoading", true);
                    Service.returnadress().queryaddress({
                    "name": this.name,
                    page: this.page,
                    size: this.size
                    }).then(response => {
                        Store.commit("setIsLoading", false);
                        if(response.errorCode == 0){
                            this.total = response.data.total;
                            if(response.data.records.length != 0){
                                this.noData = true;
                                var tableData = response.data.records;
                                 for(var j = 0;j < tableData.length;j++){
                                        tableData[j].isSelect = false;
                                }
                                this.$nextTick(()=>{
                                    this.tableData = tableData;
                                })
                            }else{
                                this.noData = false;
                            }
                        }else{
                            this.$message.error(response.message);
                            if(response.errorCode == 5001){
                                this.$router.push({"path":'/'})
                            }
                        }
                    }, err => {
                    });

            },
            handleSizeChange(val) {
                this .size = val;
                this.getGuigeList('')
            },
            handleCurrentChange(val) {
                this.page = val;
                this.getGuigeList('')
            },

            cancleButton(){
                this.$emit('clickbanner', 'cancle')
            },
        },
    }
</script>

