<template>
<el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>原始文件上传</span>

  </div>
  <el-form  label-width="80px" >
    <el-form-item label="选择日期">
      <el-date-picker class="el-date-picker-width"
                      v-model="valueDate" format="yyyyMMdd"
                      type="date"
                      placeholder="选择日期"  value-format="yyyyMMdd">
      </el-date-picker>
    </el-form-item>
    <el-form-item label="文件类型">
      <el-radio v-model="radio" label="1">2301数据</el-radio>
      <el-radio v-model="radio" label="2">9400数据</el-radio>
    </el-form-item>
    <el-form-item label="选择文件">
      <el-upload
        enctype="multipart/form-data"
        class="upload-demo"
        ref="upload"
        action="http://localhost:3000/wqptest"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :data="param"
        :on-success="success"
        :limit="1"
        name="myfile"
        :file-list="fileList"
        :auto-upload="false">
        <el-button size="small" type="file" >点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只能上传execl</div>
      </el-upload>
    </el-form-item>
    <el-form-item>
      <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>

    </el-form-item>

  </el-form>
</el-card>
</template>
<style scoped>
  .box-card {
    /*width: 480px;*/
    width: 40%;
    /*margin: 50px 30% 0 30%;*/
    height: 400px;
    margin: 20px 30% 0px 30%;
    line-height: 20px;
  }
</style>
<script>
  export default {
    data() {
      return {
        valueDate: '',
        dateTime:'',
        radio:'',
        btzList:'',
        show:false,
        alertShow:false,
        fileList:[],
        param:{flag:1}
      };

    },
    methods: {
      submitUpload() {
        this.param.type=this.radio;
        this.param.date=this.valueDate;
        this.$refs.upload.submit();

      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      success(data){

          if(data.msg=='success'){
            this.$notify.success({
              title: '温馨提示',
              message: '哎呦喂，文件上传成功了~~',
              showClose: true
            });

          }else {
            this.$notify.error({
              title: '温馨提示',
              message: '哎呦喂，文件不知道啥原始上传失败了',
              showClose: true
            });

          }



      }

  }}
</script>
