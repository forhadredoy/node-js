const fs =require('fs');


const ourReadstream =fs.createReadStream(`${__dirname}/mynewfile.txt`)
const ourWritestream =fs.createWriteStream(`${__dirname}/hridoy.txt`)

 ourReadstream.on('data',(chunk)=>{
//   ourWritestream.write(chunk);
 })
 
ourReadstream.pipe(ourWritestream);