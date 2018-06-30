<template>

  <div v-loading="myLoading" element-loading-spinner="el-icon-loading" element-loading-text="数据正在拼命计算中，请稍等哈">
    <myDate v-on:test="getData"></myDate>
    <el-alert v-if="alertShow"
              title="哎呦喂，主人是不是忘记输入日期啦~~~~"
              type="error"
              show-icon>
    </el-alert>

    <el-col el_border :span="24" v-show="show">
      <div class="grid-content">{{valueDate}}客户经理发展日通报</div>
    </el-col>

    <el-row v-show="show" class="table-line-height">
      <el-col class='el_border el_border_top' :span="2">\</el-col>
      <el-col class='el_border el_border_top' :span="11">新增</el-col>
      <el-col class='el_border el_border_top' :span="11">保提转</el-col>
    </el-row>

    <myTable v-show="show" :list="listTitle"></myTable>
    <myTable v-show="show" :list="customer"></myTable>
  </div>
</template>
<script>
  import myTable from './common'
  import myDate from '../common/myDate'
  export default {
    data() {
      return {
        valueDate: '',
        dateTime: '',
        community: '',
        customer: '',
        show: false,
        alertShow: false,
        myLoading: false,
        listTitle: [{
          self_name: '姓名',
          target_month_xz: '月指标',
          target_day_xz: '日指标',
          finish_day_xz: '当日完成',
          ration_day_xz: '日完成率',
          finish_month_xz: '累积量',
          ration_month_xz: '月完成率',
          target_month_btz: '月指标',
          target_day_btz: '日指标',
          finish_day_btz: '当日完成',
          ration_day_btz: '日完成率',
          finish_month_btz: '累积量',
          ration_month_btz: '月完成率'
        }]
      };

    },
    components: {myTable, myDate},
    methods: {

      getData(value) {
        this.valueDate = value.date;
        this.myLoading = true;
        if (this.valueDate != '') {
          this.alertShow = false;
          this.$http.get('http://localhost:3000/api/selfPerson/self/' + this.valueDate).then((response) => {
            console.log((response.body));
            this.show = true;
            this.customer = (response.body)[1];
            this.community = (response.body)[0];
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
