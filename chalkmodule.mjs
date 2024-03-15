import chalk from 'chalk'
 
console.log("Output Of Chalk Module");
console.log(chalk.blue.bold("Output Of Chalk Module"));
console.log(chalk.red.underline("Output with underline and in red color"));
 
console.log(chalk.red.bgCyan.bold("Welcome you all in my Nodejs project"));
 
//how to create variable for chalk
let error = chalk.bold.red;
let success = chalk.bold.green;
console.log(error("Something Went Wrong!"));
console.log(success("You Completed Succesfully!"));