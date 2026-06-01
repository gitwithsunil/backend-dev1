const fs = require('fs')
// synchronous
// fs.writeFileSync('./test.txt', 'Hello  World!')
 
// asynchronous
// fs.writeFile('./test.txt', "hello sunil" , (err) => {})

const result = fs.readFileSync('./contact.txt', 'utf-8');
console.log(result);
