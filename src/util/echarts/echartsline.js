exports.install = function (Vue, options) {
  Vue.prototype.barEcharts = function (date,data1,data2){
    let echarts = require('echarts/lib/echarts')
      var myChart = echarts.init(document.getElementById('main'));
      // 指定图表的配置项和数据
      var option = {
        tooltip: {},
        legend: {
          data:['新增','保提转']
        },
        xAxis: {
          data: date,
          boundaryGap: false
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          name: '新增',
          type: 'line',
          data: data1,
          label : {normal:{show: true}}
        },{
          name: '保提转',
          type: 'line',
          data: data2,
          label : {normal:{show: true}}
        }]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    Vue.prototype.mangerEcharts = function (date,data,id){
      let echarts = require('echarts/lib/echarts')

      var myChart = echarts.init(document.getElementById(id));
      // 指定图表的配置项和数据
      var option = {
        tooltip: {},
        legend: {
          data:['孙萍萍','李倩','薛亮','郭静']
        },
        xAxis: {
          data: date,
          boundaryGap: false
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          name: '孙萍萍',
          type: 'line',
          data: data[0],
          // label : {normal:{show: true}}
        },{
          name: '李倩',
          type: 'line',
          data: data[1],
          // label : {normal:{show: true}}
        },{
          name: '薛亮',
          type: 'line',
          data: data[2],
          // label : {normal:{show: true}}
        },{
          name: '郭静',
          type: 'line',
          data: data[3],
          // label : {normal:{show: true}}
        }
        ]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);

    },
    Vue.prototype.businessEcharts = function (date,data,id){
      let echarts = require('echarts/lib/echarts')

      var myChart = echarts.init(document.getElementById(id));
      // 指定图表的配置项和数据
      var option = {
        tooltip: {},
        legend: {
          data:['庆阳路','耿家庄','甘东','皋兰路','华德','火车站']
        },
        xAxis: {
          data: date,
          boundaryGap: false
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          name: '庆阳路',
          type: 'line',
          data: data[0],
          // label : {normal:{show: true}}
        },{
          name: '耿家庄',
          type: 'line',
          data: data[1],
          // label : {normal:{show: true}}
        },{
          name: '甘东',
          type: 'line',
          data: data[2],
          // label : {normal:{show: true}}
        },{
          name: '皋兰路',
          type: 'line',
          data: data[3],
          // label : {normal:{show: true}}
        },{
          name: '华德',
          type: 'line',
          data: data[4],
          // label : {normal:{show: true}}
        },{
          name: '火车站',
          type: 'line',
          data: data[5],
          // label : {normal:{show: true}}
        }
        ]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);


    },
    Vue.prototype.channelTop10 = function (name,date,id){
      let echarts = require('echarts/lib/echarts')

      var myChart = echarts.init(document.getElementById(id));
      // 指定图表的配置项和数据
      var option = {
        color: ['#3398DB'],
        tooltip : {
          trigger: 'axis',
          axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis : [
          {
            type : 'category',
            data : name,
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis : [
          {
            type : 'value'
          }
        ],
        series : [
          {
            name:'发展量',
            type:'bar',
            barWidth: '60%',
            data:date,
            label : {normal:{show: true}}
          }
        ]
      };


      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);


    }


}





