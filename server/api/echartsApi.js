var myconnect = require('../connect.js');
var express = require('express');
var router = express.Router();
var $sql = require('../sqlMap');
var util = require('../util/commponts');
var query=(myconnect.myconn);


/*接口定义
*1:获取营业厅总体发展量
*2:获取渠道整体发展量
*/
router.get('/business/getPandect' , (req, res) => {
  var sql = $sql.echartsData;
  var month=util.formatDate(new Date());
  Promise.all([query(sql.newAddBusiness,[month]),
              query(sql.btzBusiness,[month,month])
  ]).then(value => {
    console.log(value);
    res.json(value);

  })

});

router.get('/business/businessEvery/newAdd' , (req, res) => {
  var sql = $sql.echartsData;
  var month=util.formatDate(new Date());
  Promise.all([query(sql.newAddBusinessEvery,[month]),
    query(sql.myDate,[month])
  ]).then(value => {
    console.log(value);
    res.json(value);

  })

});

router.get('/business/businessEvery/btz' , (req, res) => {
  var sql = $sql.echartsData;
  var month=util.formatDate(new Date());
  Promise.all([query(sql.btzBusinessEvery,[month,month]),
    query(sql.myDate,[month])
  ]).then(value => {
    console.log(value);
    res.json(value);

  })

});


router.get('/all/getPandect' , (req, res) => {
  var sql = $sql.echartsData;
  var month=util.formatDate(new Date());
  Promise.all([query(sql.newAdd,[month]),
    query(sql.btz,[month,month])
  ]).then(value => {
    console.log(value);
    res.json(value);

  })

});

router.get('/channel/getPandect' , (req, res) => {
  var sql = $sql.echartsData;
  var month=util.formatDate(new Date());
  Promise.all([
    query(sql.newAddChannel,[month,month]),
    query(sql.btzChannel,[month,month])
  ]).then(value => {
    console.log(value);
    res.json(value);

  })

});


router.get('/channel/top10Month' , (req, res) => {
  var sql = $sql.echartsData;
  var month=util.formatDate(new Date());
  Promise.all([
    query(sql.channelBtzTop10M,[month,month]),
    query(sql.channelNewAddTop10M,[month])
  ]).then(value => {
    console.log(value);
    res.json(value);

  })

});

router.get('/channel/top10Day' , (req, res) => {
  var sql = $sql.echartsData;
  var day=util.formatDateDay(new Date());
  console.log(day);
  Promise.all([
    query(sql.channelBtzTop10,[day,day]),
    query(sql.channelNewAddTop10,[day])
  ]).then(value => {
    console.log(value);
    res.json(value);

  })

});


router.get('/channel/manger/newAdd' , (req, res) => {
  var sql = $sql.echartsData;
  var month=util.formatDate(new Date());
  Promise.all([
    query(sql.newAddMangerEvery,[month]),
    query(sql.myDate,[month])
  ]).then(value => {
    res.json(value);

  })

});

router.get('/channel/manger/btz' , (req, res) => {
  var sql = $sql.echartsData;
  var month=util.formatDate(new Date());
  Promise.all([
    query(sql.btzChannelEvery,[month,month]),
    query(sql.myDate,[month])
  ]).then(value => {
    res.json(value);

  })

});
module.exports = router;
