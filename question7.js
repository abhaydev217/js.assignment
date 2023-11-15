var readlineSync = require('readline-sync');

let number=(readlineSync.question('Enter number:'));

if(number>0){console.log('your number is +ve');}
if(number<0){console.log('your number is -ve');}
if(number==0){console.log('your number is zero');}