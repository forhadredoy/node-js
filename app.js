const https = require('https');
var fs = require('fs'); 
const formidable = require('formidable');


https.createServer(function (req, res) {
    if (req.url == '/create') {
      var form = new formidable.IncomingForm();
      form.parse(req, function (err, fields, files) {
        res.write("file")
        res.end();
      });

    }
     else {
        fs.readFileSync('index.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
          });
    }

    
  }).listen();