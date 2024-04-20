import fs from "fs";

fs.readFile("data.txt", "utf-8", (err, data) => {
    if(err) throw err
//    console.log(typeof data);
    let users=JSON.parse(data)
    // console.log(typeof users);
    let Male_emp=users.filter((user)=>{
        return user.gender ==="Male"
    })
    let str_male=JSON.stringify(Male_emp)
    fs.writeFile("Male.json",str_male,(err)=>{
        if(err) throw err;
        console.log("inserted successfully");
       
    })
});
