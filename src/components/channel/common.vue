<template>
  <div>
    <el-row v-for="item in list" class="table-line-height">
      <el-col class='el_border' :span="4">{{item.channel}}</el-col>
      <el-col class='el_border' :span="1">{{item.channel_sum}}</el-col>
      <el-col class='el_border' :span="1">{{item.target_month}}</el-col>
      <el-col class='el_border' :span="2">{{item.target_day}}</el-col>
      <el-col class='el_border' :span="2">{{item.yesterday}}</el-col>
      <el-col class='el_border' :span="2">{{item.ration_day}}%</el-col>
      <el-col class='el_border' :span="2">{{item.finish_month}}</el-col>
      <el-col class='el_border' :span="2">{{item.ration_month}}%</el-col>
      <el-col class='el_border' :span="2">{{item.average_month}}</el-col>
      <el-col class='el_border' :span="2">{{item.average_last_month}}</el-col>
      <el-col class='el_border' :span="2">{{item.zero}}</el-col>
      <el-col class='el_border el_border_right' :span="2">{{item.zero_ration}}%</el-col>
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
    line-height: 18px;
    font-size: small;
    border-bottom: 1px solid #000;
    /*border-left: 1px solid #000;*/
  }

  .el_border {
    /*border-top: 1px solid #000;*/
    border-left: 1px solid #000;
  }

  .el_border_right {
    border-right: 1px solid #000;
  }
</style>
