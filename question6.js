var readlineSync = require('readline-sync');

let maths=parseInt(readlineSync.question('your grade point in Maths:'));
let english=parseInt(readlineSync.question('your grade point in English:'));
let chemistry=parseInt(readlineSync.question('your grade point in Chemistry:'));
let physics=parseInt(readlineSync.question('your grade point in Physics:'));
let biology=parseInt(readlineSync.question('your grade point in Biology:'));
let language=parseInt(readlineSync.question('your grade point in 2nd language:'));

let total=((maths+english+chemistry+physics+biology+language)/60)*100

if(total>=60){console.log('passed');}
else{console.log('faild');}