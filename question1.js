var readlineSync = require('readline-sync');

let fnm=readlineSync.question('enter your first name');
let lnm=readlineSync.question('enter your last name')

console.log('WELCOME',fnm+lnm);