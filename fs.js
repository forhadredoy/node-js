const fs = require('fs')

fs.writeFileSync('ishpa.txt'," kmn acho? what about you");
fs.appendFileSync('ishpa.txt','tmr dinkal kmn zai bolo to?')

let data=fs.readFile('ishpa.txt')
console.log(data);