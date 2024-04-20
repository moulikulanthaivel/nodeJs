import http, { createServer } from "http"

let server=createServer((req,resp)=>{
    resp.end("hieeeee mouli")
})
server.listen(8080,(err)=>{
    if(err) throw err
    console.log("success");
})