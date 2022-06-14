const http = require('http') 

 const server =http.createServer((req,res)=>{

    if (req.url==='/'){
        res.write("hello my name is redoy");
        res.write("kire kmn achos?")
        res.end();
    }
    else if(req.url==='/about'){
        res.write("hello my name is ishpa");
        res.write(" kmn acho?")
        res.end();
    }
    else{
        res.write("Not found")
        res.end();
    }
    });

 server .listen(3000);
 

 console.log("server is running");