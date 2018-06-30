<template>
    <div>
      <el-row>
        <el-col :span="12">
          <div class="grid-content" style="text-align: left">
            <el-tag class="el-tag-width my-choice" >日期</el-tag>
            <el-date-picker class="el-date-picker-width my-choice"
                            v-model="valueDate" format="yyyyMMdd"
                            type="date"
                            placeholder="选择日期" @change="TimeChange" value-format="yyyyMMdd">
            </el-date-picker>
            <!--<el-tag class="el-tag-width" >时间</el-tag>-->

            <!--<el-input  class="el-date-picker-width" v-model="dateTime" placeholder="通报时间"></el-input>-->
            <el-button type="primary" @click="choiceDate" >数据生成</el-button>
          </div>
        </el-col>
      </el-row >
    </div>
</template>

<script>
    export default {
      data() {
        return {
          name: "myDate",
          valueDate:''
        };
      },
    methods: {
      choiceDate() {
        console.log('test');
        this.$emit('test',{date:this.valueDate})
      },
      TimeChange(val){
        this.valueDate=val;
        console.log(val);
    }}}
</script>

<style scoped>

  .my-choice {
    height: 40px;
    line-height: 40px;
  }
  .el-tag-width{
    width: 10%;
  }

</style>
