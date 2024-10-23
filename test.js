const calc = require('./calc')

console.log('Hello Jerry');

function jerry() {
    console.log('Jerry will learn Node very fast');
}

setTimeout(jerry, 5000);

// setTimeout(() => {
//     console.log(global);
// }, 10000);


calc.add(5,2);
calc.sub(5,2);
calc.mul(1,2);
calc.div(10,2);

