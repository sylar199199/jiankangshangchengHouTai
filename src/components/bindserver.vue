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
            height: 622px;
            background: #fff;
            width: 422px;
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
                    padding: 20px 40px 0 30px;
                    .channnelTitle{
                        padding-bottom: 25px;
                        text-align: center;
                    }
                    .searchContent{
                        flex-wrap: wrap;
                        position: relative;
                        margin-left: 20px;
                        .gerybacButton{
                            margin-right: 20px;
                        }
                        .margintop20{
                            margin-top: 40px;
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
            <i class="iconfont iconshanchu" @click="cancleButton()"></i>
            <div class="bannercontent">
                <div class="dataGeneral backWhite">
                    <div class="channnelTitle">
                        <span class="colorblack font16 fontWeight marginright10">绑定服务</span>
                    </div>
                    
                    <div class="searchContent clear">
                         <div class="searchBox flex">
                                <span class="searchLable searchName colorGrey font12">服务类型</span>
                                <el-select v-model="serviceTypeId" placeholder="">
                                    <el-option
                                            v-for="item in servicetypedata"
                                            :key="item.id"
                                            :label="item.name"
                                            :value="item.id">
                                    </el-option>
                                </el-select>
                            </div>
                     
                        <div class="searchBox">
                            <span class="searchLable colorGrey font12">服务套餐id</span>
                            <input type="text" class="serchInput font12 colorblack" @change="watchChange('servicePackageId')" v-model="servicePackageId" placeholder="请输入服务套餐id"/>
                        </div>
                       
                         <div class="searchBox">
                            <span class="searchLable colorGrey font12">服务套餐产品id</span>
                            <input type="text" class="serchInput font12 colorblack" @change="watchChange('servicePackageProductId')" v-model="servicePackageProductId" placeholder="请输入服务套餐产品id"/>
                        </div>
                        <div class="searchBox">
                            <span class="searchLable colorGrey font12">服务产品id</span>
                            <input type="text" class="serchInput font12 colorblack" @change="watchChange('serviceProductId')" v-model="serviceProductId" placeholder="请输入服务产品id "/>
                        </div>
                        <div class="searchBox">
                            <span class="searchLable colorGrey font12">等级1服务产品id</span>
                            <input type="text" class="serchInput font12 colorblack"  @change="watchChange('serviceProductIdLevel1','',serviceProductIdLevel1)" v-model="serviceProductIdLevel1" placeholder="请输入等级服务产品id "/>
                        </div>
                        <div class="searchBox">
                            <span class="searchLable colorGrey font12">等级2服务产品id</span>
                            <input type="text" class="serchInput font12 colorblack"  @change="watchChange('serviceProductIdLevel2','',serviceProductIdLevel2)" v-model="serviceProductIdLevel2" placeholder="请输入等级服务产品id "/>
                        </div>
                        <div class="searchBox">
                            <span class="searchLable colorGrey font12">等级3服务产品id</span>
                            <input type="text" class="serchInput font12 colorblack"  @change="watchChange('serviceProductIdLevel3','',serviceProductIdLevel3)" v-model="serviceProductIdLevel3" placeholder="请输入等级服务产品id "/>
                        </div>
                        <div class="searchBox">
                            <span class="searchLable colorGrey font12">等级4服务产品id</span>
                            <input type="text" class="serchInput font12 colorblack"  @change="watchChange('serviceProductIdLevel4','',serviceProductIdLevel4)" v-model="serviceProductIdLevel4" placeholder="请输入等级服务产品id "/>
                        </div>
                        <div class="searchBox">
                            <span class="searchLable colorGrey font12">等级5服务产品id</span>
                            <input type="text" class="serchInput font12 colorblack"  @change="watchChange('serviceProductIdLevel5','',serviceProductIdLevel5)" v-model="serviceProductIdLevel5" placeholder="请输入等级服务产品id "/>
                        </div>
                        <div class="searchBox">
                            <span class="searchLable colorGrey font12">等级6服务产品id</span>
                            <input type="text" class="serchInput font12 colorblack" @change="watchChange('serviceProductIdLevel6','',serviceProductIdLevel6)" v-model="serviceProductIdLevel6" placeholder="请输入等级服务产品id "/>
                        </div>

                       <div class="flexCenter margintop20">
                           <div class="gerybacButton cursor" @click="cancleButton('chaxun')">解除绑定</div>
                            <div class="bacButton cursor" @click="sureButton()">绑定服务</div>
                       </div>
                        
                    </div>

                </div>
                <div class="dataGeneral bannerTable">
                   
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
            selectData:{
                type: Object
            }
        },
        data() {
            return {
                serviceProductIdLevel1: '',
                serviceProductIdLevel2: '',
                serviceProductIdLevel3: '',
                serviceProductIdLevel4: '',
                serviceProductIdLevel5: '',
                serviceProductIdLevel6: '',
                servicetypedata: [],
                servicePackageId: '',
                serviceProductId: '',
                serviceTypeId:'',
                servicePackageProductId: ''
                
            };
        },
        created(){
            this.userInfo = JSON.parse(localStorage.getItem('user'));
            if(this.userInfo){
                this.permissions = this.userInfo.permissions;
            }
          
        },
        watch:{

        },
        mounted(){
            console.log(this.selectData)
            this.serviceProductIdLevel1 = this.selectData.serviceProductIdLevel1;
            this.serviceProductIdLevel2 = this.selectData.serviceProductIdLevel2;
            this.serviceProductIdLevel3 = this.selectData.serviceProductIdLevel3;
            this.serviceProductIdLevel4 = this.selectData.serviceProductIdLevel4;
            this.serviceProductIdLevel5 = this.selectData.serviceProductIdLevel5;
            this.serviceProductIdLevel6 = this.selectData.serviceProductIdLevel6;
            this.servicePackageId = this.selectData.servicePackageId;
            this.serviceProductId = this.selectData.serviceProductId;
            this.serviceTypeId = this.selectData.serviceTypeId,
            this.servicePackageProductId = this.selectData.servicePackageProductId,
            this.servicetype()
        },
        methods: {
            
            timetrans(timestamp) {
                var getSeconds = '', getMinutes = '', getHours = '';
                var d = new Date(timestamp);
                getHours = d.getHours() < 10 ? '0' + d.getHours() : d.getHours();
                getMinutes = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes();
                getSeconds = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds();
                var newTime = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + getHours + ':' + getMinutes + ':' + getSeconds;
                return newTime
            },
           
            servicetype(){
                Service.rights().servicetype({
                }).then(response => {
                    if(response.errorCode == 0){
                        if(response.data.length == 0){
                            
                        }else{
                            var data = response.data;
                             var obj = {
                                    name: '请选择服务类型',
                                    id: ''
                                }
                                 data.unshift(obj)
                            this.$nextTick(()=>{
                                this.servicetypedata = data;
                            })
                        }
                    }else{
                        this.$message.error(response.message)
                    }
                }, err => {
                });
            },
            watchChange(name,type,value){
                 var reg = /^[0-9]\d*$/;
                 var on = true;
                 if(name == 'servicePackageId'){
                    if(!reg.test(this.servicePackageId)){
                        this.$message.error('请输入正确的服务套餐id');
                        on = false;
                    }
                 }
                 if(name == 'serviceProductId'){
                    if(!reg.test(this.serviceProductId)){
                        this.$message.error('请输入正确的服务产品id');
                        on = false;
                    }
                 }
                 if(name == 'servicePackageProductId'){
                     if(!reg.test(this.servicePackageProductId)){
                        this.$message.error('请输入正确的服务套餐产品id');
                        on = false;
                    }
                 }
                 if(name == 'serviceProductIdLevel'){
                     if(!reg.test(value)){
                        this.$message.error('请输入正确的等级服务产品id');
                        on = false;
                    }
                 }
                 if(type == 'submit'){
                     return on;
                 }
                
            },
            sureButton(){
                if(!this.serviceTypeId){
                       this.$message.error('请选择服务类型');
                       return
                }
              
                if(this.servicePackageProductId || this.servicePackageId){
                        if(!this.watchChange('servicePackageId','submit')){
                            return;
                        }
                        if(!this.watchChange('servicePackageProductId','submit')){
                            return;
                        }
                }
                 if(this.serviceProductId){
                    if(!this.watchChange('serviceProductId','submit')){
                        return;
                    }
                }
                if(this.serviceProductIdLevel1){
                    if(!this.watchChange('serviceProductIdLevel','submit',this.serviceProductIdLevel1)){
                        return;
                    }
                }
                if(this.serviceProductIdLevel2){
                    if(!this.watchChange('serviceProductIdLevel','submit',this.serviceProductIdLevel2)){
                        return;
                    }
                }
                if(this.serviceProductIdLevel3){
                    if(!this.watchChange('serviceProductIdLevel','submit',this.serviceProductIdLevel3)){
                        return;
                    }
                }
                if(this.serviceProductIdLevel4){
                    if(!this.watchChange('serviceProductIdLevel','submit',this.serviceProductIdLevel4)){
                        return;
                    }
                }
                if(this.serviceProductIdLevel5){
                    if(!this.watchChange('serviceProductIdLevel','submit',this.serviceProductIdLevel5)){
                        return;
                    }
                }
                if(this.serviceProductIdLevel6){
                    if(!this.watchChange('serviceProductIdLevel','submit',this.serviceProductIdLevel6)){
                        return;
                    }
                }
               
                Store.commit("setIsLoading", true);
                Service.goods().planservicebind({
                    serviceProductIdLevel1: this.serviceProductIdLevel1,
                    serviceProductIdLevel2: this.serviceProductIdLevel2,
                    serviceProductIdLevel3: this.serviceProductIdLevel3,
                    serviceProductIdLevel4: this.serviceProductIdLevel4,
                    serviceProductIdLevel5: this.serviceProductIdLevel5,
                    serviceProductIdLevel6: this.serviceProductIdLevel6,
                    palnId: this.selectData.palnId,
                    servicePackageProductId: this.servicePackageProductId,
                    servicePackageId: this.servicePackageId,
                    serviceProductId: this.serviceProductId,
                    serviceTypeId: this.serviceTypeId
                }).then(response => {
                    Store.commit("setIsLoading", false);
                    if (response.errorCode == 0) {
                        this.$message.success('绑定成功');
                        this.$emit('clickbanner', 'sure');
                    } else {
                        this.$message.error(response.message)
                    }
                }, err => {
                })
            },
            cancleButton(type){
                if(type){
                    Store.commit("setIsLoading", true);
                    Service.goods().planservicebind({
                        palnId: this.selectData.palnId,
                        servicePackageId: '',
                        serviceProductId: '',
                        serviceTypeId: '',
                        servicePackageProductId: ''
                    }).then(response => {
                        Store.commit("setIsLoading", false);
                        if (response.errorCode == 0) {
                             this.$message.success('解绑成功');
                            this.$emit('clickbanner', 'sure');
                        } else {
                            this.$message.error(response.message)
                        }
                    }, err => {
                    })
                }else{
                    this.$emit('clickbanner', 'cancle');
                }
                 
            },
        },
    }
</script>

