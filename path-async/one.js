import fs from 'fs';
import path from  'path';

let file_name=path.join(process.cwd(),"send","diskclick","hdfc","users","users.json")

fs.readFile(file_name,"utf-8",(err,data)=>{
    if(err)throw err

    fs.writeFile(path.join(process.cwd(),"Reciever","take","sbi","emp.json"),data,(err)=>{
        if(err)throw err
        console.log("suceed...!");
    })
})