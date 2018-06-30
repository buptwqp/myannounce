var myconnect = require('../connect.js');
var express = require('express');
var router = express.Router();
var $sql = require('../sqlMap');
var query=(myconnect.myconn);

// 增加渠道经理日发展通报
router.get('/self/:date' , (req, res) => {
  var sql = $sql.selfDay;
  var date = req.params.date;
  var month=date.slice(0,6);
  var day=date.slice(6,10);
  query(sql.community,[date]).then(value => {
    if(value.length!=0){

      Promise.all([query(sql.community,[date]),query(sql.customer,[date])]).then(value1 => {
        res.json(value1);})
      }else{
      Promise.all([query(sql.spNewAdd,[date,month]),query(sql.spBtz,[date,month]),
        query(sql.community,[date]),query(sql.customer,[date])]).then(value1 => {
        var myDate=[];
        myDate.push(value1[2]);
        myDate.push(value1[3]);
        res.json(myDate);

        })

    }
  })

});

module.exports = router;
