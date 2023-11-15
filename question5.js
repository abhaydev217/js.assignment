var readlineSync = require('readline-sync');

let age=parseInt(readlineSync.question('age:'));
let agerequir=18
if(agerequir<=age){
    console.log('YOU ARE ELIGIBLE TO VOTE');
}
if(agerequir>age){
        console.log('YOU ARE NOT ELIGIBLE TO VOTE');}