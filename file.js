const fs=require('fs')

// How to read file synchronously
let readData = fs.readFileSync("./MyReadFile.txt","utf-8",(err)=>{
    
})
// console.log(readData)

// Write data into file synchronously

fs.writeFileSync("MyWriteFile.txt",readData,(err)=>{})

// How to read file asynchronously
fs.readFile("./MyReadFile.txt","utf-8",(err,data)=>{
    console.log(data)

    // Write file asynchronously
    fs.writeFile("MyWriteFileTwo.txt",data,(err)=>{})

    fs.appendFile("MyWriteFileTwo.txt","You all are nice workers",(err)=>{
        console.log("append operation done successfully")
    })
})

// How to apend data asynchronously

