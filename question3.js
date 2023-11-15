var readlineSync = require('readline-sync');

let fnum=parseInt(readlineSync.question('enter your first number :'));
let snum=parseInt(readlineSync.question('enter your second number :'))
let product=fnum*snum
console.log('product of',fnum,'and',snum,'is',product);