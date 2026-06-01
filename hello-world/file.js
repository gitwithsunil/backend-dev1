const fs = require('fs')
// synchronous
// fs.writeFileSync('./test.txt', 'Hello  World!')
 
// asynchronous
// fs.writeFile('./test.txt', "hello sunil" , (err) => {})

//synchronous
// const result = fs.readFileSync('./contact.txt', 'utf-8');
// console.log(result);

//asynchronous
// fs.readFile('./contact.txt', 'utf-8', (err, result) => {  // utf-8 is used to convert buffer data into string
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(result);
//     }
// });

//append data to file
// fs.appendFileSync('./test.txt', new Date().getDate().toLocaleString())

// fs.appendFileSync('./test.txt', 'hello today is 1st day of june\n')
// fs.appendFileSync('./test.txt', `${Date.now()} hey there`)
