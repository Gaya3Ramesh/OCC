const calculator = require("./calculator");

let calcObj = new calculator();

console.log("Addition :" + calcObj.add(30,20));
console.log("Subtraction :" + calcObj.sub(23, 89));
console.log("Multiplication :" + calcObj.mul(11, 3));
console.log("Division :" + calcObj.div(99, 3));