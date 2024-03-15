const path=require('path')

console.log(__dirname)
console.log(__filename)

console.log(path.basename(__dirname)) // it will return last portion of path
console.log(path.extname(__filename)) // it will return extension of file
console.log(path.isAbsolute(__dirname)) // it will return true if path is absolute
console.log(path.isAbsolute("../"+__dirname)) // it will return false if path is not absolute i.e. relative
console.log(path.join("../../"+__dirname)) // used to join two diferent path