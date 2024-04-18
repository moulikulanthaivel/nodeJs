import fs from "fs";

fs.readFile("data.txt", "utf-8", (err, data) => {
  console.log(typeof data);
  let emp = JSON.parse(data);
  console.log(emp);
});
