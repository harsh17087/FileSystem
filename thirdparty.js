const validator = require('validator')

let myEmail="abc@gmail.com"
console.log(validator.isEmail(myEmail))
let yourEmail = "xyzgmail.com"
console.log(validator.isEmail(yourEmail))

let myName = "Harsh"
console.log(validator.isEmpty(myName))

let yourName=""
console.log(validator.isEmpty(yourName))