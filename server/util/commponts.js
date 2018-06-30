function util() {}
util.formatDate=function(dateString){
   var year=dateString.getFullYear();
   var month=dateString.getMonth()+1;
   var day=dateString.getDay();

   if(month<10){
     month='0'+month;
   }
   return year+''+month;
}

util.formatDateDay=function(dateString){
  var year=dateString.getFullYear();
  var month=dateString.getMonth()+1;
  var day=dateString.getDate()-1;

  if(month<10){
    month='0'+month;
  }
  if(day<10){
    day='0'+day;
  }
  return year+''+month+''+day;
}
module.exports=util;
