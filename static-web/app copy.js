import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import http from "http";

dotenv.config({ path: "./config/config.env" });

let port = process.env.PORT;
let host = process.env.HOST;

let server = http.createServer((req, resp) => {
  console.log(req.url);
  fs.readFile(
    (path.join(process.cwd(), "static-web", "send", "index.html"),
    "utf-8",
    (err, data) => {
      if (err) throw err;
      resp.end(data);
    })
  );
});
server.listen(port, host, (err) => {
  if (err) throw err;
  console.log(`server running sucessfully : http://${host}:${port}`);
});
