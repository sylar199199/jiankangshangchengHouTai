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
            width: 1000px;
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
                    padding: 26px 20px 0 20px;
                    .searchContent{
                        flex-wrap: wrap;
                        position: relative;
                        .bacButton{
                            /*position: absolute;*/
                            /*right: 0;*/
                            /*bottom: 15px;*/
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
                        width: 937px;
                        th{
                            font-size: 12px;
                            text-align: center;
                            background: #f6f6f6;
                            .iconshengjiangxu{
                                font-size: 16px;
                                margin-left: 5px;
                            }
                        }
                        tr{
                            border-bottom:1px solid #f6f6f6;
                            td{
                                text-align: center;
                                padding: 20px 0;
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
                                min-width: 180px;
                                max-width: 300px;
                                text-align: left;
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
                    <div class="searchContent flex clear">
                        <div class="searchBox">
                            <span class="searchLable colorGrey font12">商品名称 </span>
                            <input type="text"  v-model="name" class="serchInput font12 colorblack" placeholder="商品名称"/>
                        </div>
                        <div class="searchBox flex">
                            <span class="searchLable searchName colorGrey font12">推荐状态</span>
                            <el-select v-model="recommend" placeholder="">
                                <el-option
                                        v-for="item in statiusOptions"
                                        :key="item.value"
                                        :label="item.name"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                        <div class="bacButton cursor" @click="getcommodityData('search')">查询</div>
                    </div>
                </div>
                <div class="dataGeneral bannerTable">
                    <table  v-if="noData" class="table">
                        <tr>
                            <th v-for="item in sortDatas">
                                {{item.name}}
                                <i v-if="item.orderType == 'asc' && item.showBlue" @click='sortData(item)' class=" iconshangsheng color2087 iconfont cursor"></i>
                                <i v-if="item.orderType == 'desc' && item.showBlue"  @click='sortData(item)' class="iconjiang color2087 iconfont cursor"></i>
                                <i v-if="!item.showBlue && item.orderType == 'asc'" @click='sortData(item)' class="iconfont colorGrey cursor iconshangsheng"></i>
                                <i v-if="!item.showBlue && item.orderType == 'desc'" @click='sortData(item)' class="iconfont colorGrey cursor iconjiang"></i>
                            </th>
                        </tr>
                        <tr v-for="(item,index) in tableData">
                            <td>
                                {{item.id}}
                            </td>
                            <td>
                                <div class="flex">
                                    <img class="productImg" :src="item.imgUrl">
                                    <div class="productBox">
                                        <p class="colorblack font12 productText">{{item.name}}</p>
                                        <p class="colore6 font12 productText">￥{{item.minPrice}} - ￥{{item.maxPrice}}</p>
                                    </div>
                                </div>
                            </td>
                            <td v-if="item.saleStartDate">{{timetrans(item.saleStartDate)}}</td>
                            <td v-if="!item.saleStartDate"></td>
                            <td>
                                <span class="color2087 font12 cursor" @click="sureRec(item)" v-if="!item.recommend">推荐</span>
                                <span class="colorGrey font12 " v-if="item.recommend">推荐</span>
                                <span class="line"></span>
                                <span class="color2087 font12 cursor" @click="cancleRec(item)" v-if="item.recommend">取消推荐</span>
                                <span class="colorGrey font12 " v-if="!item.recommend">取消推荐</span>
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
            companyname:{
                type: String
            },
            channelId:{
                type: Number
            }
        },
        data() {
            return {
                name: '',
                recommend: '',
                orderField: 'createDate',
                orderType: 'desc',
                sortDatas:[
                    {orderType:'',name: '编号',showBlue: false,orderField: ''},
                    {orderType:'',name: '商品',showBlue: false,orderField: ''},
                    {orderType:'desc',name: '上架时间',showBlue: true,orderField: 'saleStartDate'},
                    {orderType:'',name: '操作',showBlue: false,orderField: ''}
                ],
                total: null,
                size: 5,
                page: 1,
                statiusId: '',
                statiusOptions:[{name:'全部',value:''},{name:'已推荐',value: true},{name:'未推荐',value:false}],
                tableData: [],
                noData: true,
                bindTime: '',
                userInfo:'',
                showCompany: false,
                searchValue: "",
                showSearchBox: false,
                searchOption: [],
                permissions: [],
            };
        },
        created(){
            this.userInfo = JSON.parse(localStorage.getItem('user'));
            if(this.userInfo){
                this.permissions = this.userInfo.permissions;
            }
            this.getcommodityData('')
        },
        watch:{

        },
        mounted(){
        },
        methods: {
            sureRec(item){
                Store.commit("setIsLoading", true);
                Service.goods().addrecGoods({
                    goodsId: item.id,
                }).then(response => {
                    Store.commit("setIsLoading", false);
                    if(response.errorCode == 0){
                        this.$confirm( '已经推荐成功，该商品将在商城首页露出，请到【推荐商品】菜单下进行管理', '', {
                            confirmButtonText: '确定',
                            cancelButtonText: '取消',
                            type: 'warning'
                        }).then(() => {
                            this.$emit('clickbanner', 'sure')
                        }).catch(() => {
                            this.getcommodityData('')
                        });
                    }else{
                        this.$message.error(response.message);
                        if(response.errorCode == 5001){
                            this.$router.push({"path":'/'})
                        }
                    }
                }, err => {
                });
            },
            cancleRec(item){
                this.$confirm( '确认取消推荐吗？该商品将在商城首页下架！', '取消推荐?', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    Store.commit("setIsLoading", true);
                    Service.goods().deleterecGoods({
                        goodsId: item.id,
                    }).then(response => {
                        Store.commit("setIsLoading", false);
                        if(response.errorCode == 0){
                            this.$message.success('操作成功');
                            this.getcommodityData('')
                        }else{
                            this.$message.error(response.message);
                            if(response.errorCode == 5001){
                                this.$router.push({"path":'/'})
                            }
                        }
                    }, err => {
                    });
                }).catch(() => {
                });

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
                this.getcommodityData('search')
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
            handleSizeChange(val) {
                this .size = val;
                this.getcommodityData('')
            },
            handleCurrentChange(val) {
                this.page = val;
                this.getcommodityData('')
            },
            deleteCompany(){
                this.companyInfo = '';
                this.showCompany = false;
                this.searchValue = '';
                this.bindTime = '';
            },
            getcommodityData(str){
                if(str == 'search'){
                    this.page = 1;
                }
                var endDate = '',startDate = '';
                if(this.endDate || this.startDate){
                    endDate = Date.parse(new Date(this.endDate));
                    startDate = Date.parse(new Date(this.startDate));
                }else{
                    endDate = this.endDate;
                    startDate = this.startDate;
                }
                Service.goods().getGoodsList({
                    "channelId": 1,
                    "endDate":'',
                    "name": this.name,
                    "page": this.page,
                    "size": this.size,
                    "startDate": startDate,
                    orderType: this.orderType,
                    orderField: this.orderField,
                    "status": '',
                    "type": this.type,
                     recommend: this.recommend
                }).then(response => {
                    if(response.errorCode == 0){
                        if(response.data.records.length == 0){
                            this.noData = false;
                        }else{
                            this.noData = true;
                            this.total = response.data.total;
                            for(let i in  response.data.records){
                                response.data.records[i].isshowDes = false;
                            }
                            this.$nextTick(()=>{
                                this.tableData = response.data.records;
                            })
                        }
                    }else{
                        this.$message.error(response.message)
                    }
                }, err => {
                });

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

