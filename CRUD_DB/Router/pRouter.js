import express from "express"
import product from "../model/product.js"


const pRouter = express.Router();

pRouter.get("/",(req,resp)=>{
    resp.send("<h1> this is our product level page  </h1>")
})


pRouter.get("/all",async(req,resp)=>{
    let products = await product.find()
    console.log(products);
    resp.status(200).json(products)
})

pRouter.post("/create",async(req,resp)=>{
let newProducts ={
    name:req.body.name,
    price:req.body.price,
    qty:req.body.qty,
    info:req.body.info,
    image:req.body.image,
}
let products = await product.findOne({name:newProducts.name})
if(products){
    return resp.status(401).json({msg:"employee already exists"})
}
 products =new product(newProducts)
await products.save()
resp.status(200).json({msg:"product created", "products":products});
})

pRouter.put("/update/:id",async(req,resp)=>{
    let productId = req.params.id
    console.log(productId);
    let products = product.findById(productId)
    console.log(products);
 let updateProducts={
        name:req.body.name,
        price:req.body.price,
        qty:req.body.qty,
        info:req.body.info,
        image:req.body.image,
    }
    products = await product.findByIdAndUpdate(productId, {$set:updateProducts},{})
    console.log(products);
    resp.status(200).json({msg:"employee update successfully", products:products})
})

pRouter.delete("/:id",async(req,resp)=>{
    let productId = req.params.id
    let products = await product.findById(productId);
if(!products){
return resp.status(401).json({msg:"products not exists"})
}
products =await product.findByIdAndDelete(productId)
resp.status(200).json({msg:"products deleted successfully"})
})


export default pRouter