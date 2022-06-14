const fs = require ('fs');

fs.readFile('ishpa.txt',(err,data)=>{

    console.log(data.toString());

})

console.log('hello world');