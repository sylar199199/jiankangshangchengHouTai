<style rel="stylesheet/scss" lang="scss"  scoped>
    $baseFontSize: 192;
    .salecustomercontent{
        display: flex;
        min-height:calc(100vh - 50px);
        margin-top:  60px;
        .content{
            flex:1;
            padding: 20px;
             .contanternews{
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
                                width: 86px;
                                line-height: 30px;
                            }
                        }
                    }
                }
                .bannerTable{
                    background: #fff;
                    padding: 10px 0;
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
                        width: 737px;
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
                                padding: 10px 0;
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
                                .inputEditor{
                                    width: 60px;
                                    border: 1px solid #e5e5e5;
                                    text-align: center;
                                }
                            }
                            td:nth-of-type(2){
                                min-width: 180px;
                                max-width: 300px;
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
 <div class="general">
        <KlTop></KlTop>
        <div class="salecustomercontent contaner">
            <Aside></Aside>
            <div class="content">
                <div class="contanternews">
                    <div class="dataGeneral bannerTable">
                       <div class="bannercontent">
                            <div class="dataGeneral backWhite">
                                <div class="searchContent ">
                                    <div class="searchBox">
                                        <span class="searchLable searchName colorGrey font12">兑换码名称</span>
                                        <input type="text"  v-model="name" class="serchInput font12 colorblack" placeholder="请输入兑换码名称"/>
                                    </div>
                                     <div class="searchBox">
                                        <span class="searchLable searchName colorGrey font12">兑换码有效时间 </span>
                                        <el-date-picker
                                                @change="enddateChange"
                                                v-model="insuranceDate"
                                                type="datetimerange"
                                                unlink-panels
                                                range-separator="至"
                                                start-placeholder="开始日期"
                                                end-placeholder="结束日期"
                                               >
                                        </el-date-picker>
                                    </div>
                                     <div class="searchBox">
                                        <span class="searchLable searchName colorGrey font12">兑换码数量</span>
                                        <span class="font12 colorblack" v-if="id">{{nums}}</span>
                                        <input type="text"  v-if="!id" v-model="nums" class="serchInput font12 colorblack" placeholder="请输入兑换码数量"/>
                                    </div>
                                     <div class="searchBox flex itemscenter">
                                        <span class="searchLable searchName colorGrey font12">添加商品</span>
                                        <div class="bacButton cursor" @click="getRecList()">关联商品</div>
                                        <span style="margin-left: 6px;"  class="colorGrey font12">仅可添加1个商品</span>
                                    </div>
                                    <div v-if="noData">
                                        <table  class="table">
                                            <tr>
                                                <th v-for="ite in sortDatas" :key="ite.name">
                                                    {{ite.name}}
                                                </th>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="flex">
                                                        <img class="productImg" :src="goodsData.imgUrl">
                                                        <div class="productBox">
                                                            <p class="colorblack font12 productText">{{goodsData.name}}</p>
                                                            <p class="colore6 font12 productText">￥{{goodsData.price}}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span class="color2087 font12 cursor" @click="delectCommodity()">删除</span>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                      <div class="bacButton" @click="addActiveProduct()" style="margin: 10px auto">
                                      保存
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Addcommodity v-if="showSpecs" @selectGuige = 'getgoodsdata' :source="source" :goodsdataq="goodsData" @clickbanner="getbackData"></Addcommodity>
                </div>
            </div>
        </div>
    </div>
 </div>
            
</template>

<script>
    import Aside from '@/components/aside'
    import Service from '@/common/service'
    import Store from '@/vuex/index'
    import KlTop from '@/components/klTop'
    import Global from '@/common/global'
    import patternRules from '@/common/patternRules'
    import Util from '@/common/util'
    import  Filter from '@/common/filter'
    import Addcommodity from '@/components/addcommodity'
    export default {
        name: "convertdetail",
         components:{
            Addcommodity,
            KlTop,
            Aside
        },
        props:{
            converId:{
                type: String
            }
        },
        data() {
            return {
                nums: '',
                id: '',
                showSpecs: false,
                 goodsData: null,
                 noData: false,
                 source: 'converdetail',
                 startDate: '',
                 endDate: '',
                name: '',
                insuranceDate: [],
                recommend: '',
                orderField: 'createDate',
                orderType: 'desc',
                sortDatas:[
                    {orderType:'',name: '商品',showBlue: false,orderField: ''},
                    {orderType:'',name: '操作',showBlue: false,orderField: ''}
                ],
                total: null,
                size: 5,
                page: 1,
                statiusId: '',
                statiusOptions:[{name:'全部',value:''},{name:'已推荐',value: true},{name:'未推荐',value:false}],
                tableData: [],
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
             if(this.$route.query){
                this.id = this.$route.query.id;
                if(this.id){
                    this.getcommodityData();//获取
                }
            }
            this.userInfo = JSON.parse(localStorage.getItem('user'));
            if(this.userInfo){
                this.permissions = this.userInfo.permissions;
            }
        },
        watch:{

        },
        mounted(){
        },
        methods: {
            addActiveProduct(){
                this.name = this.name.replace(/^\s*|\s*$/g,"");
                if(!this.name){
                    this.$message.warning('请输入活动名称');
                    return;
                }
                if(this.name.length < 2 || this.name.length > 30 ){
                    this.$message.warning('请输入短于2个字不超过30个字的活动名称');
                    return;
                }
                if(!this.startDate || !this.endDate){
                    this.$message.warning('请选择生效时间');
                    return;
                }
                var endDate = Date.parse(new Date(this.endDate.replace(/-/g, "/")));
                var startDate = Date.parse(new Date(this.startDate.replace(/-/g, "/")));
                var lotteryTime = endDate;
                var reg = /^[1-9]\d*$/;
                if(!reg.test(this.nums)){
                    this.$message.warning('请输入合理的数量');
                    return;
                } 
                console.log(this.goodsData)
                if(!this.goodsData){
                    this.$message.warning('请添加活动商品');
                    return;
                }
                var goodsId = this.goodsData.id;
                if(this.id){
                    Service.redeem().editorredeemCode({
                        name: this.name,
                        "endTime": endDate,
                        "goodsId": goodsId,
                        "startTime": startDate,
                        nums: this.nums
                    },this.id).then(response => {
                        if(response.errorCode == 0){
                            this.$message.success('编辑成功')
                            this.$router.push({name:'convertmanage'})
                        }else{
                            this.$message.error(response.message)
                        }
                    }, err => {
                    });
                }else{
                    Service.redeem().addredeemCode({
                        name: this.name,
                        "endTime": endDate,
                        "goodsId": goodsId,
                        "startTime": startDate,
                        nums: this.nums
                    }).then(response => {
                        if(response.errorCode == 0){
                            this.$message.success('添加成功');
                            this.$router.push({name:'convertmanage'})
                        }else{
                            this.$message.error(response.message)
                        }
                    }, err => {
                    });
                }

            },
            getcommodityData(){
                Service.redeem().getredeemCode({
                },this.id).then(response => {
                    if(response.errorCode == 0){
                            this.nums = response.data.nums
                            this.name =  response.data.name;
                            this.startDate = this.timetrans(response.data.startTime);
                            this.endDate = this.timetrans(response.data.endTime);
                            this.lotteryTime = this.endDate
                            this.insuranceDate.push(new Date(response.data.startTime));
                            this.insuranceDate.push(new Date(response.data.endTime))
                           
                            this.goodsData = response.data.goodsInfo;
                            if(this.goodsData){
                                this.noData = true;
                                this.goodsData.name = this.goodsData.name.substring(0,15)+'...';
                                console.log(this.noData)
                            }else{
                                this.noData = false;
                            }
                              console.log(this.noData)
                    }else{
                        this.$message.error(response.message)
                    }
                }, err => {
                });

            },
            getbackData(str){
                if(str == 'sure'){
                    this.showSpecs = false;
                }
                if(str == 'cancle'){
                    this.showSpecs = false;
                }
            },
            getgoodsdata(obj){
                if(obj){
                    if(obj.name.length > 15){
                        obj.name = obj.name.substring(0,15)+'...'
                    }
                    this.noData = true;
                }
                this.goodsData = obj;
                
            },
             delectCommodity(index,item){
                this.$confirm( '商品删除请谨慎操作，确定删除?', '', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.goodsData = null;
                    this.noData = false;
                    this.$forceUpdate()
                }).catch(() => {

                });
            },
            getRecList(){
                this.showSpecs = true;
            },
            enddateChange(val){
                if(val){
                    this.startDate = this.timetrans(val[0]);
                    this.endDate = this.timetrans(val[1])
                }else{
                    this.startDate = '';
                    this.endDate = '';
                }
            },
          
             sortRecData(){
                var arrdata = [];
                for(var i = 0;i < this.tableData.length;i++){
                    var obj = {
                        id: this.tableData[i].id,
                        sort:  parseInt(i)+1
                    };
                    arrdata.push(obj)
                }
                Service.video().sortcategory(arrdata).then(response => {
                    if(response.errorCode == 0){
                        this.getcategory();
                    }else{
                        this.$message.error(response.message)
                    }
                }, err => {
                });
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
                Service.redeem().addLeads({
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

