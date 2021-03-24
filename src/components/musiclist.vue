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
             .dialog::after {
                content: "";
                display: inline-block;
                height: 100%;
                width: 0;
                vertical-align: middle;
            }
            .dialog {
                display: none;
                position: fixed;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                text-align: center;
                z-index: 1000;
                background: rgba(0, 0, 0, 0.5);
                .messge {
                    display: inline-block;
                    width: 360px;
                    padding-bottom: 15px;
                    vertical-align: middle;
                    background-color: #fff;
                    border-radius: 4px;
                    font-size: 12px;
                    -webkit-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
                    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
                    text-align: left;
                    overflow: hidden;
                    -webkit-backface-visibility: hidden;
                    backface-visibility: hidden;
                    .messageContent {
                        position: relative;
                        padding: 20px 30px;
                        color: #606266;
                        font-size: 12px;
                        .name{
                            .bacButton{
                                width: 100px;
                                height: 30px;
                                line-height: 30px;
                                display: inline-block;
                            }
                        }
                        .m20{
                            margin: 20px;
                        }
                        .inputBox {
                            width: 120px;
                            height: 30px;
                            line-height: 30px;
                            border: 1px solid #e5e5e5;
                            text-indent: 10px;
                            margin: 0 6px;
                        }
                        .wordbreak{
                            word-break: break-all;
                        }
                    }
                }
            }
            .applicaninfo{
                width: 100px;
                height: 70px;
                background-color: #f9f9f9;
                border-radius: 4px;
                text-align: center;
                position: relative;
                .bannerImg{
                    width: 100px;
                    margin-top: 8px;
                    position: absolute;
                    left: 0;
                }
                .warmtext{
                    position: absolute;
                    left: 89px;
                    bottom: 0;
                    display: inline-block;
                    min-width: 100px;

                }
                .imgBox{
                    position: absolute;
                    display: inline-block;
                    width: 100px;
                    height: 70px;
                    left: 0;
                    .el-upload{
                        height: 100%;
                    }
                    .uploadtext{
                        color: #979797;
                        position: relative;
                        margin-top: 35px;
                        height: 55px;
                        .uploadIcon{
                            font-size: 16px;
                            display: inline-block;
                            vertical-align: middle;
                            color: #56ae97;
                            position: absolute;
                            bottom: 54px;
                            right: 42px;
                        }
                    }
                }
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
                                word-break: break-all;
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
            <div class="dialog">
                <div class="messge font12">
                    <div class="messageContent">
                       
                         <div class="name mt10" >
                            <span>音乐名称：</span>
                            <input type="text" v-model="adddata.name" class="inputBox" />
                        </div>
                        <div class="flex mt10">
                            <span>音乐：</span>
                            <div  class="applicaninfo" @click="imgtype = ''">
                                <audio  class="bannerImg" controls="controls"  :src="adddata.musicUrl" v-if="adddata.musicUrl" autoplay="autoplay"></audio>
                                <el-upload
                                        class="upload-demo imgBox"
                                        name="file"
                                        :action="upFileAction"
                                        :headers="headers"
                                        :on-change="handleChange"
                                        :on-success="handleAvatarSuccess"
                                        :before-upload="beforeAvatarUpload"
                                        :on-error="errphoto"
                                        :show-file-list="false"
                                        accept="">
                                    <div  class="uploadtext" v-if="!adddata.musicUrl">
                                        <i class="iconfont iconiconjia color2087 uploadIcon"></i>
                                        <span class="font12">添加音乐</span>
                                    </div>
                                </el-upload>
                            </div>
                        </div>
                        <div class="name mt10 flex" >
                            <span class="flexShrink">音乐地址：</span>
                            <span class="font12 wordbreak">{{adddata.musicUrl}}</span>
                        </div>
                        <div class="mt10 flex">
                            <div class=" borderButton copyButton mr10" @click="closeDiologone()">
                            取消
                            </div>
                            <div class=" bacButton ml10" @click="setGoods()">
                            确认
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <i class="iconfont iconshanchu" @click="cancleButton"></i>
            <div class="bannercontent">
                <div class="dataGeneral backWhite">
                    <div class="channnelTitle">
                        <span class="colorblack font16 fontWeight marginright10">选择音乐</span>
                    </div>
                    <div class="searchContent flex clear">
                        <div class="searchBox">
                            <span class="searchLable colorGrey font12">音乐名称</span>
                            <input type="text" class="serchInput font12 colorblack" v-model="name" placeholder="请搜索音乐名称"/>
                        </div>
                        <div class="bacButton cursor mr10" @click="getGuigeList('chaxun')">查询</div>
                        <div class="bacButton cursor" @click="openmusic()">添加音乐</div>
                    </div>

                </div>
                <div class="dataGeneral bannerTable">
                    <table  v-if="noData" class="table">
                        <tr>
                            <th v-for="item in sortDatas" :key="item.name">
                                {{item.name}}
                            </th>
                        </tr>
                        <tr v-for="(item,index) in tableData" :key="item.id" :index="index">
                            <td>
                                {{item.name}}
                            </td>
                            <td>
                                {{item.musicUrl}}
                            </td>
                            <td>
                                <span class="color2087 font12 cursor" v-if="!item.isSelect" @click="selectItem(item)">选择</span>
                                <span class="colorGrey font12" v-if="item.isSelect">已选</span>
                                <span class="line" ></span>
                                <span class="color2087 font12 cursor" @click="openmusic(item)">编辑</span>
                                <span class="line" ></span>
                                <span class="color2087 font12 cursor" @click="deletemusic(item.id)">删除</span>
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
            musicobj:{
                type: Object
            },
            rightsFlag: {
                type: String
            }
        },
        data() {
            return {
                adddata:{
                    name: '',
                    musicUrl: ''
                },
                selecId: '',
                upFileAction:'',
                headers: {},
                sortDatas: [{orderType:'asc',name: '音乐名称',showBlue: false,orderField: 'productPlanNo'},{orderType:'',name: '音乐地址',showBlue: false,orderField: ''},{orderType:'asc',name: '操作',showBlue: false,orderField: 'name'}],
                name: '',
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
            var  tokenVal = Util.localStorageUtil.get('access_token');
            this.headers = {token: tokenVal};
            this.userInfo = JSON.parse(localStorage.getItem('user'));
            if(this.userInfo){
                this.permissions = this.userInfo.permissions;
            }
            this.getGuigeList('')
        },
        watch:{

        },
        mounted(){
            this.upFileAction = Global.requestUrl+"/kl-store/admin/upload/file";
              console.log(this.upFileAction)
        },
        methods: {
            beforeAvatarUpload(file) {
                Store.commit("setIsLoading", true);
                    const isLt2M = file.size / 1024 / 1024 < 50;
                    var index = file.name.indexOf('.');
                    console.log(file)
                    if (!isLt2M) {
                        Store.commit("setIsLoading", false);
                        this.$message.error('上传文件大小不能超过50M!');
                    }
                    return isLt2M;
            },
            
            errphoto(err, file, fileList){
            },
            handleAvatarSuccess(res, file) {
                Store.commit("setIsLoading", false);
                if(res.data){
                    this.adddata.musicUrl = res.data;
                }else{
                    this.$message.error(res.message);
                }
            },
            handleChange(file, fileList) {
            },
            closeDiologone(){
                $(".dialog").css({"display":'none'})
                 this.adddata = {
                    name: '',
                    musicUrl: ''
                }
                this.selecId = '';
            },
            openmusic(item){
                 $(".dialog").css({"display":'block'})
                if(item){
                     this.adddata = {
                        name: item.name,
                        musicUrl: item.musicUrl
                    }
                    this.selecId = item.id
                }
            },
            setGoods(){
               this.adddata.name  = this.adddata.name.replace(/^\s*|\s*$/g, "");
                if (!this.adddata.name) {
                    this.$message.warning('请输入音乐名称');
                    return;
                }
                if (this.adddata.name.length < 2 || this.adddata.name.length > 10) {
                    this.$message.warning('请输入短于2个字不超过10个字的音乐名称');
                    return;
                }
                if(!this.adddata.musicUrl){
                    this.$message.warning('请上传音乐');
                    return;
                }
                if(this.selecId){
                     Service.music().editormusic(this.adddata,this.selecId).then(response => {
                        if (response.errorCode == 0) {
                            this.$message.success('编辑成功');
                             this.getGuigeList();
                            this.closeDiologone()
                        } else {
                            this.$message.error(response.message)
                        }
                        }, err => {
                    });
                }else{
                     Service.music().addmusic(this.adddata).then(response => {
                        if (response.errorCode == 0) {
                            this.$message.success('添加成功');
                             this.getGuigeList();
                            this.closeDiologone()
                        } else {
                            this.$message.error(response.message)
                        }
                        }, err => {
                    });
                }
            },
            selectItem(item){
                var obj = {
                    name: item.name,
                    id: item.id,
                    resourceUrl: item.musicUrl
                }
                this.$emit('selectMusic',obj);
                this.$emit('clickbanner', 'cancle')
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
            deletemusic(id) {
                this.$confirm('音乐删除请谨慎操作，确定删除?', '', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                    Service.music().deletemusic({}, id).then(response => {
                        if (response.errorCode == 0) {
                            this.$message({
                                type: 'success',
                                message: '删除成功!'
                            });
                            this.getGuigeList('');//获取列表
                        } else {
                            this.$message.error(response.message)
                        }
                    }, err => {
                    });
                }).catch(() => {
                });
            },
            getGuigeList(str){
              if(str == 'chaxun'){
                    this.page = 1;
                }
                var obj = {
                    name: this.name,
                    size: this.size,
                    page: this.page
                }
                Store.commit("setIsLoading", true);
                Service.music().querymusic(obj).then(response => {
                    Store.commit("setIsLoading", false);
                    if(response.errorCode == 0){
                        this.total = response.data.total;
                        if(response.data.records.length != 0){
                            this.noData = true;
                            var tableData = response.data.records;
                            if(this.musicobj){
                                    for(var j = 0;j < tableData.length;j++){
                                        tableData[j].isSelect = false;
                                        if(this.musicobj.resourceUrl == tableData[j].musicUrl){
                                            tableData[j].isSelect = true;
                                            break;
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

