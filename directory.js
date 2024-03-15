const fs = require('fs')

// How to remove file

fs.unlink("MyWriteFile.txt",()=>{})

// how to create directory asynchronously

// fs.mkdir("newDir",(err)=>{})

// How to remove directory
// fs.rmdir("newDir",(err)=>{})

// Create directory, read file and write file

fs.mkdir("newDir",(err)=>{
    fs.readFile("MyWriteFileTwo.txt","utf-8",(err,rdata)=>{
        fs.writeFile("newDir/myWriteFileThree.txt",rdata,(err)=>{
            console.log("Operation is done successfully")
        })
    })
})

// How to delete directory containing filr
fs.unlink("newDir/MyWriteFileThree.txt",(err)=>{
    fs.rmdir("newDir",(err)=>{
        console.log("Directory removed successfullt with file")
    })
})