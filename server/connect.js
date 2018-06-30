var models = require('./db');
var mysql = require('mysql');
function Settings(){}
// 连接数据库
var conn = mysql.createConnection(models.mysql);

conn.connect();
Settings.myconn=function(sql,pare){

  return new Promise((resolve,reject)=>{
    conn.query(sql,pare,function (error, result) {
      if (error) throw error;
      resolve( result);
    });
  });

}



module.exports = Settings;


