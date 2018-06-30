var myconnect = require('../connect.js');
var express = require('express');
var router = express.Router();
var $sql = require('../sqlMap');
var query=(myconnect.myconn);

// 增加渠道经理日发展通报
router.get('/dayChannel/:date' , (req, res) => {
  var sql = $sql.channelDay;
  var date = req.params.date;
  var month=date.slice(0,6);
  var day=date.slice(6,10);

  query(sql.newAdd,[date]).then(value => {
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

});

module.exports = router;
