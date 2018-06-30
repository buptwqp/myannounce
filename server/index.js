const myconnect = require('./connect.js');
const query=(myconnect.myconn);
const businessApi = require('./api/businessApi');
const channelApi  = require('./api/channelApi');
const selfApi  = require('./api/selfApi');
const echarsApi  = require('./api/echartsApi');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const multer  = require('multer');
const node_xlsx = require('node-xlsx');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'upload/')
  },
  filename: function (req, file, cb) {
    cb(null,  Date.now()+file.originalname);
  }
})

const upload = multer({ storage: storage })
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

app.post('/wqptest', upload.single('myfile'),function(req, res, next) {
  var obj = node_xlsx.parse(req.file.path);
  var excelObj = obj[0].data;//取得第一个excel表的数据
  var num=0;//统计上传多少条记录
  console.log(req.body.type);
  var type=req.body.type;
  var flag=req.body.flag;
  var date=req.body.date;
  var month=date.slice(0,6);
  var day=date.slice(6,10);

  console.log(date);
  // res.json({msg:'success'});


  //获取上传文件分类，1 2301  2 9400

  if(type==1){
    var insertValues=[];
    for (var i=1;i<excelObj.length;i++){
      //渠道名称(channel_name）2//业务名称(busi_name) 4//手机号码(number) 9//员工姓名(boss_name) 3//日期(date) 16//月份(d_month) 18//标识(flag) 17
      var channel_name=(excelObj[i][2]);
      var busi_name=(excelObj[i][4]);
      var number=(excelObj[i][9]);
      var boss_name=(excelObj[i][3]);

      var insertArray=[channel_name,busi_name,number,boss_name,date+'',month+'',flag+''];
      insertValues.push(insertArray);
    };

    var insertSql=`insert into new_number(channel_name,busi_name,number,boss_name,date,d_month,flag) values ?`;
    var deleteSql=`delete from new_number where date=?`;
    var spSql_1='call sp_business_new_add_day(?,?,?)';
    var spSql_2='call sp_channel_new_add_day(?,?,?)';
    var spSql_3='call self_new_add_day(?,?)';
    query(deleteSql,[date]).then(Promise.resolve(query(insertSql,[insertValues])))
        .then(Promise.resolve( Promise.all[query(spSql_1,[date,month,day]),query(spSql_2,[date,month,day]),query(spSql_3,[date,month])]))
        .then(
          res.json({ msg: 'success' })
        ).catch(reason => {

      })


  }else if(type==2){
    var insertValues=[];
    for (var i=1;i<excelObj.length;i++){
      //渠道名称(channel_name）2
      //业务名称(busi_name) 6
      //手机号码(number) 4
      //员工姓名(boss_name) 3
      //日期(date) 9
      //月份(d_month) 11
      //标识(flag) 10
      var channel_name=(excelObj[i][2]);
      var busi_name=(excelObj[i][6]);
      var number=(excelObj[i][4]);
      var boss_name=(excelObj[i][3]);
      var insertArray=[channel_name,busi_name,number,boss_name,date+'',month+'',flag+''];
      insertValues.push(insertArray);

    };
    var insertSql=`insert into baotizhaun_number(channel_name,busi_name,number,boss_name,date,d_month,flag) values ?`;
    var deleteSql=`delete from baotizhaun_number where date=?`;
    var spSql_1='call sp_business_btz_day(?,?,?)';
    var spSql_2='call sp_channel_btz_day(?,?,?)';
    var spSql_3='call self_btz_day(?,?)';


    query(deleteSql,[date]).then(Promise.resolve(query(insertSql,[insertValues])))
      .then(

        Promise.resolve( Promise.all[query(spSql_1,[date,month,day]),query(spSql_2,[date,month,day]),query(spSql_3,[date,month])]).then(
          res.json({ msg: 'success' })
        )
      ).catch(reason => {

    })

  }
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// 后端api路由
app.use('/api/business', businessApi);
app.use('/api/channel', channelApi);
app.use('/api/fileUp', channelApi);
app.use('/api/selfPerson', selfApi);
app.use('/api/echarts', echarsApi);

// 监听端口
app.listen(3000);
console.log('success listen at port:3000......');
