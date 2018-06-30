<template>


    <div id="charts">
      <h4 class="clear">营业厅新增保提转日发展趋势图</h4>
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
          this.$http.get('http://localhost:3000/api/echarts/business/getPandect').then((value) => {
            var data=value.body;
            var businessDate=[];
            var businessNewAdd=[];
            var businessBtz=[];
            for(var i=0;i<data[0].length;i++){
              businessDate.push(data[0][i].date);
              businessNewAdd.push(data[0][i].xz);
              businessBtz.push(data[1][i].btz);
            }
            this.barEcharts(businessDate,businessNewAdd,businessBtz);
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
