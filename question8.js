var readlineSync = require('readline-sync');

let Age=(readlineSync.question('Ente your Age:'));

if(Age<=12 && Age>0){console.log('child');}
if(Age>12 && Age<=19){console.log('teenager');}
if(Age>19 && Age<=59){console.log('adult');}
if(Age>59){console.log('senior');}