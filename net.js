const net = require('net');  
var server =net.createServer();
server.listen(3000, () => { 
    console.log('opened server on port: ', 3000); 
  }); 