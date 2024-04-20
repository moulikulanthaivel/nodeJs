import fs from "fs";

fs.readFile("data.txt", "utf-8", (err, data) => {
  if (err) throw err;
  fs.writeFile("users.txt", data, (err) => {
    if (err) throw err;
    console.log("data sussessfully");
  });
});
