<template>
  <div>
    <el-row v-for="item in list" class="table-line-height">
      <el-col class='el_border ' :span="2">{{item.self_name}}</el-col>
      <el-col class='el_border' :span="2">{{item.target_month_xz}}</el-col>
      <el-col class='el_border' :span="2">{{item.target_day_xz}}</el-col>
      <el-col class='el_border' :span="2">{{item.finish_day_xz}}</el-col>
      <el-col class='el_border' :span="2">{{item.ration_day_xz}}%</el-col>
      <el-col class='el_border' :span="1">{{item.finish_month_xz}}</el-col>
      <el-col class='el_border' :span="2">{{item.ration_month_xz}}%</el-col>
      <el-col class='el_border' :span="2">{{item.target_month_btz}}</el-col>
      <el-col class='el_border' :span="1">{{item.target_day_btz}}</el-col>
      <el-col class='el_border' :span="2">{{item.finish_day_btz}}</el-col>
      <el-col class='el_border' :span="2">{{item.ration_day_btz}}%</el-col>
      <el-col class='el_border' :span="2">{{item.finish_month_btz}}</el-col>
      <el-col class='el_border el_border_right' :span="2">{{item.ration_month_btz}}%</el-col>
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
    line-height: 15px;
    font-size: small;
    border-bottom: 1px solid #000;
    /*border-left: 1px solid #000;*/
  }

  .el_border_top {
    border-top: 1px solid #000;

  }

  .el_border {
    /*border-top: 1px solid #000;*/
    border-left: 1px solid #000;
  }

  .el_border_right {
    border-right: 1px solid #000;
  }
</style>
