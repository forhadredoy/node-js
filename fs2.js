// var fs = require('fs');

// fs.appendFile('mynewfile.txt', 'Hello content!', function (err,data) {
//   if (data) 
//   console.log('data');
// });
var fs = require('fs');

fs.open('mynewfile2.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});