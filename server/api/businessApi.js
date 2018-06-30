var myconnect = require('../connect.js');
var express = require('express');
var router = express.Router();
var $sql = require('../sqlMap');
var query=(myconnect.myconn);

// 增加获取营业日数据接口
router.get('/dayBusiness/:date' , (req, res) => {
  var sql = $sql.businessDay;
  var date = req.params.date;
  var month=date.slice(0,6);
  var day=date.slice(6,10);
  query(sql.newAdd,[date]).then(value =>{
    console.log(value.length);
    if(value.length!=0){
      Promise.all([query(sql.newAdd,[date]),query(sql.btz,[date])])
         .then(values => {
           res.json(values);
         }).catch(reason => {
       });
    }else{

      Promise.all([query(sql.spNewAdd,[date,month,day]),query(sql.spBtz,[date,month,day]),query(sql.newAdd,[date]),query(sql.btz,[date])])
        .then(values => {
          var myDate=[];
          myDate.push(values[2]);
          myDate.push(values[3]);
          res.json(myDate);
        }).catch(reason => {
      });


    }

  })

  // Promise.all([query(sql.spNewAdd,[date,month,day]),query(sql.newAdd,[date]),query(sql.spBtz,[date,month,day]),query(sql.btz,[date])])
  //   .then(values => {
  //     res.json(values);
  //   }).catch(reason => {
  // });

});

module.exports = router;
