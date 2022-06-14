var hei= require('querystring');
var q = hei.parse('year=2017&month=february&date=22');
console.log(q.date);