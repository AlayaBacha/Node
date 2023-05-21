const fs = require("fs")

fs.readFile('./welcome.txt','utf8',(err,data)=>{
        if(err){
            console.log(err)
        }else{
            console.log(data)
        }
    })
    
    console.log(fs.readFileSync("./welcome.txt",'utf8'))