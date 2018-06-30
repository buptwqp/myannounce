<template>


  <div id="charts">
    <h4 class="clear">各渠道经理新增日发展趋势图</h4>
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
        this.$http.get('http://localhost:3000/api/echarts/channel/manger/newAdd').then((value) => {
          console.log(value.body);
          var data=value.body;

          var flag=0;
          var data_channel_xz=[];
          var tmp=[];
          var length=data[1].length;
          var myDate=[];
          for(var i=0;i<data[1].length;i++){
             myDate.push(data[1][i].date);
          }
          for(var i=0;i<data[0].length;i++){
            // console.log(i);
            if(flag<length){
              tmp.push(data[0][i].xz);
              flag++;

            }else{
              data_channel_xz.push(tmp);
              flag=0;
              tmp=[];
              tmp.push(data[0][i].xz);
              flag++;

            }
          }
          data_channel_xz.push(tmp);
          console.log(data_channel_xz);

          this.mangerEcharts(myDate,data_channel_xz,'main')

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
