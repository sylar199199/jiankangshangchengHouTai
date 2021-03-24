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
            height: 500px;
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
                                padding: 20px 10px;
                                .line{
                                    display: inline-block;
                                    height: 8px;
                                    width: 3px;
                                    background: #eee;
                                    margin: 0 10px;
                                }
                                .productImg{
                                    max-width: 116px;
                                    max-height: 60px;
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
                            td:nth-of-type(2){
                                text-align: center;
                            }
                            td:nth-of-type(3){
                                .imgicon{
                                    display: inline-block;
                                    vertical-align: middle;
                                    height: 20px;
                                    width: 20px;
                                    padding-right: 10px;
                                }
                            }
                            td:nth-of-type(4){
                                padding-left: 16px;
                            }
                            .upimg{
                                display: inline-block;
                                vertical-align: middle;
                                height: 20px;
                                width: 20px;
                            }
                            .downimg{
                                display: inline-block;
                                vertical-align: middle;
                                height: 20px;
                                width: 20px;
                            }
                        }
                    }
                }
                .block{
                    position: fixed;
                    bottom: 30px;
                    right: 20px;
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
        <div class="dialogcontent">
            <i class="iconfont iconshanchu" @click="cancleButton"></i>
            <div class="bannercontent">
                <div class="dataGeneral backWhite">
                    <div class="channnelTitle">
                        <span class="colorblack font16 fontWeight marginright10">选择服务规格</span>
                    </div>
                    <div class="searchContent flex clear">
                        <div class="searchBox">
                            <span class="searchLable colorGrey font12">服务规格全称</span>
                            <input type="text" class="serchInput font12 colorblack" v-model="productPlanName" placeholder="请搜索规格全称"/>
                        </div>
                        <div class="bacButton cursor" @click="getGuigeList('chaxun')">查询</div>
                    </div>

                </div>
                <div class="dataGeneral bannerTable">
                    <table  v-if="noData" class="table">
                        <tr>
                            <th v-for="item in sortDatas" :key="item.name">
                                {{item.name}}
                                <i v-if="item.orderType == 'asc' && item.showBlue" @click='sortData(item)' class=" iconshangsheng color2087 iconfont cursor"></i>
                                <i v-if="item.orderType == 'desc' && item.showBlue"  @click='sortData(item)' class="iconjiang color2087 iconfont cursor"></i>
                                <i v-if="!item.showBlue && item.orderType == 'asc'" @click='sortData(item)' class="iconfont colorGrey cursor iconshangsheng"></i>
                                <i v-if="!item.showBlue && item.orderType == 'desc'" @click='sortData(item)' class="iconfont colorGrey cursor iconjiang"></i>
                            </th>
                        </tr>
                        <tr v-for="(item,index) in tableData" :key="item.id" :index="index">
                            <td>
                                {{item.productPlanNo}}
                            </td>
                            <!-- <td>
                                <span v-if="item.onlyRightsFlag == '01'">是</span>
                                 <span v-if="!item.onlyRightsFlag || item.onlyRightsFlag == '02'">否</span>
                            </td> -->
                            <td>
                                {{item.planPrice}}
                            </td>
                            <td>
                                {{item.productPlanName}}
                            </td>
                            <td>
                                {{item.productPlanShortName}}
                            </td>
                            <td>{{timetrans(item.createDate)}}</td>
                            <td v-if="item.status == 1">已下架</td>
                            <td v-if="item.status == 0">在售中</td>
                            <td>
                                <span class="color2087 font12 cursor" v-if="!item.isSelect" @click="selectItem(item)">选择</span>
                                <span class="colorGrey font12" v-if="item.isSelect">已选</span>
                            </td>

                        </tr>
                    </table>
                    <div v-if="!noData" class="noData">
                        <img class="nodataImg" src="../assets/images/nodatalist.png"/>
                        <p>暂无数据~</p>
                    </div>
                </div>
                <div class="block" v-if="noData">
                    <el-pagination
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page="page"
                            :page-size="size"
                            :page-sizes="[5,10]"
                            layout="total,sizes, prev, pager, next,jumper"
                            :total="total">
                    </el-pagination>
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
        name: "creatSaleleads",
        props:{
            guigeData:{
                type: Array
            },
            rightsFlag: {
                type: String
            }
        },
        data() {
            return {
                sortDatas: [{orderType:'asc',name: '规格编号',showBlue: true,orderField: 'productPlanNo'},{orderType:'',name: '销售最低价(元)',showBlue: false,orderField: ''},{orderType:'asc',name: '服务规格全称',showBlue: false,orderField: 'productPlanName'},{orderType:'asc',name: '服务规格简称',showBlue: false,orderField:'productPlanShortName'},{orderType:'desc',name:'创建时间',showBlue: false,orderField: 'createDate'},{orderType:'',name:'状态',showBlue: false},{orderType:'',name:'操作',showBlue: false}],
                productPlanName: '',
                orderField: 'productPlanNo',
                orderType: 'asc',
                total: null,
                size: 5,
                page: 1,
                statiusId: '',
                statiusOptions:[{name:'全部',id:''},{name:'已推荐',id:'0'},{name:'未推荐',id:'1'}],
                tableData: [],
                noData: true,
                bindTime: '',
                userInfo:'',
                showCompany: false,
                searchValue: "",
                showSearchBox: false,
                searchOption: [],
                permissions: [],
                isAdd: "",
                isDelete: '',
            };
        },
        created(){
            this.userInfo = JSON.parse(localStorage.getItem('user'));
            if(this.userInfo){
                this.permissions = this.userInfo.permissions;
            }
            this.getGuigeList('')
        },
        watch:{

        },
        mounted(){
        },
        methods: {
            selectItem(item){
                this.$emit('selectGuige',item);
                this.$emit('clickbanner', 'cancle')
            },
            sortData(item){
                for(let i in this.sortDatas){
                    this.sortDatas[i].showBlue = false;
                }
                item.showBlue = true;
                if(item.orderType == 'asc'){
                    item.orderType = 'desc';
                }else if(item.orderType == 'desc'){
                    item.orderType = 'asc';
                }
                this.orderType = item.orderType;
                this.orderField = item.orderField;
                this.getGuigeList('chaxun')
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
            judgeArr(arr,value){
                var num = 0;
                for(var i=0;i<arr.length;i++){
                    if(arr[i] == value){
                    }else{
                        num++;
                    }
                }
                return num
            },
            getTimedate(timeStr){
                return Filter.getTimedate(timeStr)
            },
            getGuigeList(str){
                var rightsFlag = '';
              
                if(this.rightsFlag === '01'){
                    rightsFlag = '';
                }else{
                     rightsFlag = this.rightsFlag;
                }
                
                if(str == ''){
                    var obj = {
                        onlyRightsFlag: rightsFlag,
                        endDate: "",
                        orderField: this.orderField,
                        orderType: this.orderType,
                        productPlanName: this.productPlanName,
                        productPlanNo: "",
                        startDate: "",
                        size: this.size,
                        page: this.page
                    }
                }else if(str == 'chaxun'){
                    this.page = 1;
                    var obj = {
                        onlyRightsFlag: rightsFlag,
                        endDate: "",
                        orderField: this.orderField,
                        orderType: this.orderType,
                        productPlanName: this.productPlanName,
                        productPlanNo: "",
                        startDate: "",
                        size: this.size,
                        page: this.page
                    }
                }
                Store.commit("setIsLoading", true);
                Service.goods().goodsPlan(obj).then(response => {
                    Store.commit("setIsLoading", false);
                    if(response.errorCode == 0){
                        this.total = response.data.total;
                        if(response.data.records.length != 0){
                            this.noData = true;
                            var tableData = response.data.records;
                            if(this.guigeData.length != 0){
                                    for(var j = 0;j < tableData.length;j++){
                                        for(var i = 0;i < this.guigeData.length;i++){
                                        tableData[j].isSelect = false;
                                        if(this.guigeData[i].planId == tableData[j].id){
                                            tableData[j].isSelect = true;
                                            break;
                                        }
                                    }
                                }
                            }else{
                                for(var j = 0;j < tableData.length;j++){
                                    tableData[j].isSelect = false;
                                }
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
            deleteCompany(){
                this.companyInfo = '';
                this.showCompany = false;
                this.searchValue = '';
                this.bindTime = '';
            },
         
            blureInput(){
                this.showSearchBox = false;
            },
            getValue(item){
                this.searchValue = item.name;
                this.companyInfo = item;
                this.showCompany = true;
                console.log(this.searchValue)
            },
            sureButton(){
                if(!this.watchChange('companyName','submit')){
                    return;
                }
                if(!this.watchChange('contact','submit')){
                    return;
                }
                if(!this.watchChange('phone','submit')){
                    return;
                }
                Store.commit("setIsLoading", true);
                Service.client().addLeads({
                    companyName: this.leadsInfo.companyName,
                    contact: this.leadsInfo.contact,
                    phone: this.leadsInfo.phone,
                    email: null,
                    remark: this.leadsInfo.remark,
                    source: this.leadsInfo.source
                }).then(response => {
                    Store.commit("setIsLoading", false);
                    if (response.errorCode == 0) {
                        Util.localStorageUtil.clear('leadsInfo');
                        this.$emit('clickbanner', 'sure');
                    } else {
                        this.$message.error(response.message)
                    }
                }, err => {
                })
            },
            cancleButton(){
                Util.localStorageUtil.set('leadsInfo',this.leadsInfo);
                this.$emit('clickbanner', 'cancle')
            },
        },
    }
</script>

