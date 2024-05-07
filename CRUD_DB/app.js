import mongoose from "mongoose"
import express from "express"
import dotenv from "dotenv"
import pRouter from "./Router/pRouter.js"
import morgan from "morgan"





dotenv.config({"path":"./setting/config.env"})
let port = process.env.PORT
let host = process.env.HOST
let db_url = process.env.DB_URL

const app = express()
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan("tiny"))

app.get("/",(req,resp)=>{
    resp.send("<h1>root req succesfully come here </h1>")
})

app.use("/products",pRouter)


mongoose.connect(db_url)
.then((resp)=>{console.log("database connected successfully");})
.catch((err)=>{console.log(err);})

app.listen(port,host,(err)=>{
    if(err) throw err
    console.log(`server running : http://${host}:${port}`);
})