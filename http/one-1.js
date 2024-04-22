
import http, { createServer } from "http"

let server=createServer((req,resp)=>{
    resp.end("<h1>hello mouli</h1>")
})
server.listen(8080,'127.0.0.1',(err)=>{
    if(err)throw err
    console.log(`server running : http://127.0.0.1:8080`);
})