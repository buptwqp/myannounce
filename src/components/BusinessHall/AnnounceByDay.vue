<template>
  <div v-loading="myLoading" element-loading-spinner="el-icon-loading" element-loading-text="数据正在拼命计算中，请稍等哈">
    <myDate v-on:test="getData"></myDate>
    <el-col el_border :span="24" v-show="show">
      <div class="grid-content">{{valueDate}}自办营业厅新增日发展通报</div>
    </el-col>
    <myTable v-show="show" :list="listTitle"></myTable>
    <myTable v-show="show" :list="newAddList"></myTable>
    <el-col :span="24" v-show="show">
      <div class="grid-content">{{valueDate}}自办营业厅保提转日发展通报</div>
    </el-col>
    <warnDate v-show="alertShow"></warnDate>
    <myTable_1 v-show="show" :list="listTitle"></myTable_1>
    <myTable_1 v-show="show" :list="btzList"></myTable_1>
  </div>
</template>
<script>
  import myTable from './common'
  import myTable_1 from './common_1'
  import warnDate from '../common/warnDate'
  import myDate from '../common/myDate'

  export default {
    data() {
      return {
        valueDate: '',
        dateTime: '',
        newAddList: '',
        btzList: '',
        show: false,
        alertShow: false,
        myLoading: false,
        listTitle: [{
          channel: '营业厅',
          target_month: '月指标',
          target_day: '日指标',
          yesterday: '当日完成',
          ration_day: '日完成率',
          finish_month: '累计完成',
          ration_month: '月完成率',
          average_month: '日均量',
          average_last_month: '上月日均',
          ration_infinite:'不限量占比'

        }]
      };

    },
    components: {myTable, warnDate, myDate,myTable_1},
    methods: {

      getData(value) {
        this.valueDate = value.date;
        this.myLoading = true;
        if (this.valueDate != '' && this.valueDate !== null) {
          this.alertShow = false;
          this.$http.get('http://localhost:3000/api/business/dayBusiness/' + this.valueDate).then((response) => {
            this.show = true;
            this.newAddList = (response.body)[0];
            this.btzList = (response.body)[1];
            this.myLoading = false;
          })
        } else {
          console.log('test1');
          console.log(this.valueDate);
          this.alertShow = true;
          this.myLoading = false;
        }

      },
      TimeChange(val) {
        this.valueDate = val;
        console.log(val);
      }
    }

  };
</script>
<style scoped>
  .my-choice {
    height: 40px;
    line-height: 40px;
  }

  .el-tag-width {
    width: 10%;
  }

  .el-date-picker-width {
    width: 22%;

  }

  .table-line-height {
    line-height: 16px;
    font-size: small;
    border-bottom: 1px solid #000;
    /*border-left: 1px solid #000;*/
  }

  .el-col-style {
    border-left: 1px solid #000;

  }


</style>
