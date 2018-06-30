<template>


  <div id="charts">
    <h4 class="clear">渠道经理新增保提转日发展趋势图</h4>
    <div id="main"  :style="{width:'100%',height:'400px'}"></div>
  </div>


</template>

<script>

  export default{
    data (){
      return {
        msg:"123",
        valueDate:'20180615'
      }
    },
    mounted (){
      this.getEcharts();
    },
    methods: {
      getEcharts() {
        this.$http.get('http://localhost:3000/api/echarts/channel/getPandect').then((value) => {
          var data=value.body;
          var channelDate=[];
          var channelNewAdd=[];
          var channelBtz=[];
          for(var i=0;i<data[0].length;i++){
            channelDate.push(data[0][i].date);
            channelNewAdd.push(data[0][i].xz);
            channelBtz.push(data[1][i].btz);

          }
          this.barEcharts(channelDate,channelNewAdd,channelBtz);
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
</style>
