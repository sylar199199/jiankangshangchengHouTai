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
                    padding: 20px 20px 40px;
                    .dataGenetalTitle{
                        padding-bottom: 20px;
                    }
                    .dataGenetalContent{
                        .adressBox{
                            margin-bottom: 24px;
                            .lableText{
                                display: inline-block;
                                width: 60px;
                                text-align: right;
                            }
                            .inputText{
                                border: 1px solid #e5e5e5;
                                width: 220px;
                                text-indent: 10px;
                            }
                        }
                    }
                }
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
                    <div class="dataGeneral backWhite padding20">
                        <div class="dataGenetalTitle">
                            <span class="colorblack font16 fontWeight marginright10">地址信息</span>
                        </div>
                        <div class="dataGenetalContent">
                            <div class="adressBox">
                                <span class="font12 colorGrey lableText marginright10">地址类型</span>
                                <el-select v-model="adressinfo.type" placeholder="">
                                    <el-option
                                            v-for="item in adressOption"
                                            :key="item.value"
                                            :label="item.name"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                                <span class="colorGrey font12 marginLeft10">用户申请退货被同意后，系统默认把以下地址展示给到用户端，请准确填写！</span>
                            </div>
                            <div class="adressBox">
                                <span class="font12 colorGrey marginright10 lableText">联系人</span>
                                <input type="text" @change="changeText('contact','')" v-model="adressinfo.contact" placeholder="请输入小于6个字符" class="inputText colorblack font12"/>
                            </div>
                            <div class="adressBox">
                                <span class="font12 colorGrey marginright10 lableText">联系电话</span>
                                <input type="text" @change="changeText('tel','')" v-model="adressinfo.tel" placeholder="请输入联系人手机号" class="inputText colorblack font12"/>
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
                                <span class="font12 colorGrey  lableText" style="margin-right: 20px;"></span>
                                <el-input
                                        class="answerInput colorblack font12"
                                        type="textarea"
                                        autosize
                                        placeholder="请输入小于50个字符"
                                        v-model="adressinfo.address"
                                        @change="changeText('address','')">
                                </el-input>
                            </div>
                            <div class="bacButton cursor" @click="submit()" style="margin-left: 120px;">提交</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Aside from '@/components/aside'
    import { regionData,CodeToText,TextToCode} from 'element-china-area-data'
    import  Filter from '@/common/filter'
    import Service from '@/common/service'
    import Store from '@/vuex/index'
    import KlTop from '@/components/klTop'
    import patternRules from '@/common/patternRules'
    import Global from '@/common/global'
    export default {
        name: "salecustomer",
        components:{
            Aside,
            KlTop,
        },
        data() {
            return {
                options: regionData,
                selectedOptions: null,
                showOne: false,
                showTwo: false,
                showThree: false,
                showFour: false,
                dissipate: [],
                timer: null,
                username: '',
                userInfo: '',
                permissions: [],
                adressOption:[{name: '退货地址',value: 1}],
                adressinfo: {
                    type: 1,
                    contact: '',
                    address: '',
                    city: "",
                    district: '',
                    province: '',
                    tel: ""
                },

            };
        },
        created(){
            this.userInfo = JSON.parse(localStorage.getItem('user'));
            if(this.userInfo){
            }
            this.getAdress()
        },
        watch:{
        },
        mounted(){

        },
        methods:{
            getAdress(){
                Service.adress().getAdress({},1).then(response => {
                    if(response.errorCode == 0){
                        this.adressinfo = {
                                 type: 1,
                                contact: response.data.contact,
                                address: response.data.address,
                                city: response.data.city,
                                district: response.data.district,
                                province: response.data.province,
                                tel: response.data.tel
                        };
                        if(response.data){
                            this.selectedOptions = [];
                            // 省份
                            this.selectedOptions.push(TextToCode[response.data.province].code);
                            // 城市
                            let cityCode = TextToCode[response.data.province][response.data.city].code;
                            this.selectedOptions.push(cityCode);
                            // 地区
                            let areaCode = TextToCode[response.data.province][response.data.city][response.data.district].code;
                            this.selectedOptions.push(areaCode);
                            this.$forceUpdate()
                        }
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
                if(name == 'contact'){
                    if(this.adressinfo[name].length >6 ||  this.adressinfo[name].length < 2){
                        on = false;
                        this.$message.error('请输入小于6个字符或者不少于2个字符的联系人姓名');
                        return;
                    }
                }
                if(name == 'tel'){
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
                if(name == 'address'){
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
            submit(){
                if(!this.changeText('contact','submit')){
                    return
                }
                if(!this.changeText('tel','submit')){
                    return
                }
                if(!this.adressinfo.city){
                    this.$message.error('请选择联系地址');
                    return
                }
                if(!this.changeText('address','submit')){
                    return
                }
                Service.adress().setAdress(this.adressinfo).then(response => {
                    if(response.errorCode == 0){
                      this.$message.success('保存成功')
                    }else{
                        this.$message.error(response.message)
                    }

                }, err => {
                });
            }
        },

    }
</script>

