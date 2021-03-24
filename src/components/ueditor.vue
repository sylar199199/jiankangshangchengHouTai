<template>
  <div>
    <script id="editor" type="text/plain" >
    </script>
  </div>
</template>

<script>
  import '../../static/ueditor/ueditor.config.js'
  import '../../static/ueditor/ueditor.all.js'
  import '../../static/ueditor/lang/zh-cn/zh-cn.js'
  import Service from '../common/service'
  export default {
    name: "UEditor",
    props: {
        setid: {
          type: Number
      },
      config: {
          type: Object
      },
        source:{
            type: String
        }
    },
    data() {
      return {
        editor: null,
        contentData:'',
      }
    },
      watch:{
      },
      created(){

      },

    mounted() {
      //初始化UE
      const _this = this;
      this.config.toolbars = [[
        		'fullscreen', 'source', '|', 'undo', 'redo', '|',
        		'bold', 'italic', 'underline', 'fontborder', 'strikethrough', 'superscript', 'subscript', 'removeformat', 'formatmatch', 'autotypeset', 'blockquote', 'pasteplain', '|', 'forecolor', 'backcolor', 'insertorderedlist', 'insertunorderedlist', 'selectall', 'cleardoc', '|',
        		'rowspacingtop', 'rowspacingbottom', 'lineheight', '|',
        		'customstyle', 'paragraph', 'fontfamily', 'fontsize', '|',
        		'directionalityltr', 'directionalityrtl', 'indent', '|',
        		'justifyleft', 'justifycenter', 'justifyright', 'justifyjustify', '|', 'touppercase', 'tolowercase', '|',
        		'link', 'unlink', 'anchor', '|', 'imagenone', 'imageleft', 'imageright', 'imagecenter', '|',
        		'simpleupload', 'insertimage', 'emotion', 'scrawl', 'attachment', 'insertframe', 'insertcode', 'pagebreak', 'template', 'background', '|',
        		'horizontal', 'date', 'time', 'spechars', 'snapscreen', 'wordimage', '|',
        		'inserttable', 'deletetable', 'insertparagraphbeforetable', 'insertrow', 'deleterow', 'insertcol', 'deletecol', 'mergecells', 'mergeright', 'mergedown', 'splittocells', 'splittorows', 'splittocols', 'charts', '|',
        		'print', 'preview', 'searchreplace', 'drafts', 'help'
        ]];
      this.editor = UE.delEditor("editor");
      this.editor = UE.getEditor('editor',this.config);
      this.getarticle()
    },
    destoryed() {
      this.editor.destory();
    },
    methods:{
        dealDetail(data){
            if(data.content){
                this.contentData = data;
                this.$nextTick(()=>{
                    var img = $('.articleContent ').find('img');
                    for(var i = 0;i < img.length;i ++){
                        if($(img[i]).width()>window.screen.width){
                            $(img[i]).css("cssText", "width:100% !important;box-sizing:border-box !important;word-wrap: break-word !important;")
                        }else{
                            $(img[i]).css({'max-width': '100%','height': 'auto'})
                        }
                    }
                    var ue = UE.getEditor('editor');
                    var that = this;
                    ue.ready(function() {
                        ue.setContent(that.contentData.content);
                    });
                })
            }
        },
        getarticle(){
            if(this.setid == '' || !this.setid){
                var ue = UE.getEditor('editor');
                ue.ready(function() {
                    ue.setContent('<p></p>');
                });
                return;
            }
            if(this.source == 'news'){
                Service.news().getNewsDetail({},this.setid).then(response => {
                    if(response.errorCode == 0){
                        if(response.data != null){
                            this.dealDetail(response.data)
                        }
                    }else{
                        this.$message.error(response.message)
                    }

                }, err => {
                });
            }else{
                var categoryId = '';
                if(this.source == 'healthinquiry'){
                    categoryId = 3;
                }else if( this.source == 'healthnews'){
                    categoryId = 2;
                }else if( this.source == 'healthvoice'){
                    categoryId = 1;
                }
                Service.article().getArticleDetail({},categoryId,this.setid).then(response => {
                    if(response.errorCode == 0){
                        if(response.data != null){
                            this.dealDetail(response.data)
                        }
                    }else{
                        this.$message.error(response.message)
                    }
                }, err => {
                });
            }

        },
      getUEContent: function(){
       return this.editor.getContent();
      },
      getContentTxt: function(){
        return this.editor.getContentTxt();
      }
    }
  }
</script>
<style>
    .edui-editor-imagescale{
        display:none !important;
    }
    .edui-default .edui-toolbar{
        background: #fff;
    }
     .edui-editor{
        border: solid 1px #dcdfe6;
    }
    .edui-editor div{
        z-index: 10000;
    }
</style>
