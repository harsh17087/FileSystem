// let greet = require('./mylocalmodule')

const data=require('./mylocalmodule')
const arith=require('./arithmetic')

console.log(data.greet);
console.log(data.areaOfCircle(8))

let num1=20,num2=10

console.log(`Addition of ${num1} and ${num2} is : ${arith.add(num1,num2)} `)
console.log(`Subtraction of ${num1} and ${num2} is : ${arith.sub(num1,num2)} `)
console.log(`Multiplication of ${num1} and ${num2} is : ${arith.mul(num1,num2)} `)
console.log(`Addition of ${num1} and ${num2} is : ${arith.div(num1,num2)} `)