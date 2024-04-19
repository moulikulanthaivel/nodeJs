import http, { createServer } from 'http';

let create=http.createServer((req,resp)=>{
    resp.end("hi mouli")
})
Server.listen(8080,(err)=>{
    if(err)throw err
    console.log(`server running on : 8080`);
})

// const http =require('http')
// let server=http.createServer((req,resp)=>{
//     resp.end("<h1>Good Afternoon!...</h1> ")
// })
// server.listen(8080,(err)=>{
//    if(err) throw err
   
//    console.log(`Server Running on port : 8080`)
// })