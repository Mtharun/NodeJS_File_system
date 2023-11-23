//console.log("NodeJS-FileSystem");
import express from "express";

import fs from "fs";
const app = express();
const PORT = process.env.PORT || 8000


app.get('/',(req,res)=>{
    let date = new Date()
    
    const fileName = date.toISOString().slice(0,19).replace(/:/g,'-');
    
    fs.writeFile(`${fileName}.txt`,`${fileName}`,`utf-8`,(err)=>{
        if(err)
        {
            console.log("Loging",err);
        }
    })

    fs.readFile(`${fileName}.txt`,`utf-8`,(err,data)=>{
        res.send(data)
    })
})

app.listen(8000,()=>console.log("listening to "+ 8000));
//const[, ,configpath]=process.argv;

/*



//Read a file
fs.readFile("2023-11-22T14-01-04.txt","utf-8",(err,data)=>{
    if(err){
        console.log("Error Occured :",err);
    }
    else{
        console.log(data);
    }
});

//write a file
const content = "2023-11-22T14-04-04"
fs.writeFile("./2023-11-22T14-04-04.txt", content,(err,data)=>{
    if(err){
        console.log("Error Occured :",err);
    }
    else
    {
        console.log("DATE ENTERED");
    }
})

//read the confiq files
fs.readFile(configpath, "utf-8",(err,data)=>{
    if(err){
        console.log("Error Occured :",err);
    }
    else{
        console.log(data);
        const config = JSON.parse(data);
        console.log(config);
    }
})

//update the file

const appendContent =`\n  2023-11-22T14-05-04`;
fs.appendFile("./2023-11-22T14-04-04.txt",appendContent,(err,data)=>{
    if(err)
    {
        console.log("error",err);
    }
    else{
        console.log("File updated successfully");
    }
});

//delete a file

fs.unlink("./2023-11-22T14-01-04.txt",(err)=>{
    if(err)
    {
        console.log("error",err);
    }
    else
    {
        console.log("File deleted successfully")
    }
});
*/


