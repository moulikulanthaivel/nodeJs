import dotenv from "dotenv"


dotenv.config({'path':'./config.env'})

let PORT = process.env.PORT
let HOST = process.env.HOST
let DB= process.env.DB_URL


console.log(PORT);
console.log(HOST);
console.log(DB);