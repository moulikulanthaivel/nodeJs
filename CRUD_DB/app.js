import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import morgan from "morgan"
import chalk from "chalk"
import ProductRoutes from "./Routes/ProductRoutes.js"

dotenv.config({"path":"./config/config.env"})

let port = process.env.PORT
let host = process.env.HOST
let DB_URL = process.env.LOCAL_DB_URL
const app = express()

app.get("/",(req,resp)=>{
    resp.send("this is my root request part")
})

app.use("/products",ProductRoutes)

mongoose.connect(DB_URL)
.then((response)=>{console.log("database connected successfully");})
.catch((err)=>{console.log(err)
    process.exit(1);})


app.listen(port,host,(err)=>{
    if(err) throw err
    console.log(chalk.blue(`server Running successfully : http://${host}:${port}`));
})