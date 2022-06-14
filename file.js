var http = require('http');
var formidable = require('formidable');
var fs = require('fs');
var student = require("./student");


http.createServer(function (req, res) {
    if (req.url == "/create") {
      var form = new formidable.IncomingForm();
      form.parse(req, function (err, fields, files) {

        res.write(student.createAndShow(fields));
        res.end();
      });
    }


    else{
        let data = fs.readFileSync('./robiul.html')
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
    
    }
  }).listen(2300);

