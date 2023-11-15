var readlineSync = require('readline-sync');

let fno=parseInt(readlineSync.question('enter your first number :'));
let sno=parseInt(readlineSync.question('enter your second number :'))

console.log('sum of NO:',fno,'and',sno,'is',fno+sno);