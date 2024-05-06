import http from "http";

let server = http.createServer((req, resp) => {
  console.log(req.url);
  resp.end("GM");
});
server.listen(8080, (err) => {
  if(err) throw err;
  console.log(`server running sucessfully`);
});
