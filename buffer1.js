const http = require('http') 

 const server =http.createServer((req,res)=>{

   if (req.url === '/')
   {
       res.write('<html><head><title>Form</title></head></html>')
       res.write ('<body><form method="post" action ="/process"></input name="message"></form></body> ')
   }
    else if(req.url=='/process' && req.method =='post'){
        res.write("hello my name is ishpa");
        res.end();
    }
    else{
        res.write("Not found")
        res.end();
    }
    });

 server .listen(8000);