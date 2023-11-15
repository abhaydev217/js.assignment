var readlineSync = require('readline-sync');

let lenght=parseInt(readlineSync.question('Lenght of the Rectangle :'));
let width=parseInt(readlineSync.question('Width of the Rectangle :'))
let product=lenght*width

console.log('Area of your Rectangle is',product,'sq.cm.');