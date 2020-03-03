const sum = require('./main.js').sum;
if(sum(1,2)===3){
    console.log('sum : pass');
} else {
    console.log('sum : fail');
    process.exit(1);
}
console.log(sum(1,2))