<template>
  <div>
    <el-row v-for="item in list" class="table-line-height">
      <el-col class='el-col-style' :span="4">{{item.channel}}</el-col>
      <el-col class='el-col-style' :span="2">{{item.target_month}}</el-col>
      <el-col class='el-col-style' :span="2">{{item.target_day}}</el-col>
      <el-col class='el-col-style' :span="2">{{item.yesterday}}</el-col>
      <el-col class='el-col-style' :span="2">{{item.ration_day}}%</el-col>
      <el-col class='el-col-style' :span="3">{{item.finish_month}}</el-col>
      <el-col class='el-col-style' :span="3">{{item.ration_month}}%</el-col>
      <el-col class='el-col-style' :span="2">{{item.average_month}}</el-col>
      <el-col class='el-col-style el_border_right' :span="2">{{item.average_last_month}}</el-col>
      <el-col class='el-col-style el_border_right' :span="2">{{item.ration_infinite}}%</el-col>
    </el-row>
  </div>


</template>

<script>
  export default {
    name: "common",
    props: ['list']

  }
</script>

<style scoped>
  .table-line-height {
    line-height: 16px;
    font-size: small;
    border-bottom: 1px solid #000;
    /*border-left: 1px solid #000;*/
  }

  .el_border {
    border-top: 1px solid #000;
    border-left: 1px solid #000;
  }

  .el-col-style {
    border-left: 1px solid #000;

  }

  .el_border_right {
    border-right: 1px solid #000;
  }
</style>
