import express from "express"
import Products from "../Model/Products.js"

let ProductRoutes = express.Router()

ProductRoutes.get("/",(req,resp)=>{
    resp.send("this is a api request page")
})

ProductRoutes.post("/create",async(req,resp)=>{
    
    let {name,image,information,price,qty} = req.body
    let newProduct = {name,image,information,price,qty}
    

    // let newProduct={
    //     name:req.body.name,
    //     price:req.body.price,
    //     qty:req.body.qty,
    //     info:req.body.info,
    //     image:req.body.image
    // }

    let products = Products.findOne({name:newProduct.name})
    if(products){
        return resp.status(404).json({"msg": "Employee already Exists"})
    }
    products = new products(newProduct)
    products.save()
    resp.status(202).json({"msg": "Employee created successfully", "products":products})

})



export default ProductRoutes