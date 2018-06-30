<template>
  <div v-loading="myLoading" element-loading-spinner="el-icon-loading" element-loading-text="数据正在拼命计算中，请稍等哈">
    <myDate v-on:test="addUser"></myDate>
    <el-col :span="24" v-show="show">
      <div class="grid-content">{{valueDate}}渠道经理新增日发展通报</div>
    </el-col>
    <myTable v-show="show" :list="listTitle"></myTable>
    <myTable v-show="show" :list="newAddList"></myTable>
    <el-col :span="24" v-show="show">
      <div class="grid-content">{{valueDate}}渠道经理保提转日发展通报</div>
    </el-col>
    <myTable v-show="show" :list="listTitle"></myTable>
    <warnDate v-show="alertShow"></warnDate>
    <myTable :list="btzList"></myTable>


  </div>
</template>
<script>
  import myDate from '../common/myDate'
  import myTable from './common'
  import warnDate from '../common/warnDate'

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
          channel: '渠道经理',
          channel_sum: '渠道数',
          target_month: '月指标',
          target_day: '日指标',
          yesterday: '日完成',
          ration_day: '完成率',
          finish_month: '月完成',
          ration_month: '完成率',
          average_month: '日均量',
          average_last_month: '上月日均',
          zero: '挂0渠道',
          zero_ration: '占比'


        }]
      };

    },
    components: {myDate, myTable, warnDate},
    methods: {

      addUser(value) {
        this.valueDate = value.date;
        this.myLoading = true;
        if (this.valueDate != '' && this.valueDate !== null) {
          this.alertShow = false;
          this.$http.get('http://localhost:3000/api/channel/dayChannel/' + this.valueDate).then((response) => {
            console.log((response.body));
            this.show = true;
            this.newAddList = (response.body)[0];
            this.btzList = (response.body)[1];
            this.myLoading = false;
          })
        } else {
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
  .el-tag-width {
    width: 10%;
  }

  .el-date-picker-width {
    width: 22%;

  }

  .table-line-height {
    line-height: 18px;
    font-size: small;
    border-bottom: 1px solid #000;
    /*border-left: 1px solid #000;*/
  }

  .el-col-style {
    border-left: 1px solid #000;

  }

  .el_border {
    /*border-top: 1px solid #000;*/
    border-left: 1px solid #000;
  }

  .el_border_top {
    border-top: 1px solid #000;
  }

  .el_border_right {
    border-right: 1px solid #000;
  }

  .my-choice {
    height: 40px;
    line-height: 40px;
  }

</style>
