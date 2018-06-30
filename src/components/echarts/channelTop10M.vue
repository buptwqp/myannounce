<template>

  <el-container>
    <el-aside width="50%" style="margin-top: 20px">
      <el-card class="box-card" style="line-height: 15px">
        <div slot="header" class="clearfix">
          <span>当月社会渠道新增发展TOP10</span>
        </div>
        <div v-for="item in newAddlist"  class="text item">
          {{item.channel_name +'   '+item.xz}}
        </div>
      </el-card>

    </el-aside>
    <el-main>

      <el-card class="box-card" style="line-height: 15px">
        <div slot="header" class="clearfix">
          <span>当月社会渠道保提转发展TOP10</span>
        </div>
        <div v-for="item in datalist"  class="text item">
          {{item.channel_name +'   '+item.btz}}
        </div>
      </el-card>
    </el-main>
  </el-container>



</template>

<script>

  export default{
    data (){
      return {
        msg:"123",
        valueDate:'20180615',
        datalist:'',
        newAddlist:''
      }
    },
    mounted (){
      this.getEcharts();
    },
    methods: {
      getEcharts() {
        this.$http.get('http://localhost:3000/api/echarts/channel/top10Month').then((value) => {
          console.log(value.body);
          var data=value.body;
          this.datalist=data[0];
          this.newAddlist=data[1];

        })


      }
    }

  }
</script>

<style scoped>
  .clear {
    margin: 0px;
    padding: 0px;
  }
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
</style>
