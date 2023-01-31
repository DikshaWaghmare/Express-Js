const { response } = require("express");
let express = require("express");
let fs = require("fs");
let product = express();

product.get("/",(request, response)=>{
    //response.send("Welcome to port 3000!");
    response.sendFile(__dirname+"\\index.html");
})
product.get("/aboutus",(request, response)=>{
    response.sendFile(__dirname+"\\aboutus.html");
})
product.get("/login",(req,res)=>{
    res.sendFile(__dirname+"\\login.html");
})
product.get("/checkLogin",(req,res)=>{
    let name=req.query.name;
    let email=req.query.email;
    let pass=req.query.password;
    let costomer={cname:name,cemail:email,cpass:pass};
    console.log(costomer);
    fs.writeFileSync("customers.json",JSON.stringify(costomer));
    res.send("Successfully Login!");
})
product.get("/register",(req,res)=>{
    res.sendFile(__dirname+"\\register.html");
})
product.get("/p_register",(req,res)=>{
    let pname=req.query.name;
    let pid=req.query.id;
    let pprice=req.query.price;
    let purl=req.query.url;
    let item={product_name:pname,product_id:pid,product_price:pprice,product_url:purl};
    //console.log(item);
    //fs.writeFileSync("items.json",JSON.stringify(item));
    let data=fs.readFileSync(__dirname+"\\items.json");
    let items=JSON.parse(data.toString());
    if(items.length>=0){
        items.push(item);
        fs.writeFileSync("items.json",JSON.stringify(items));
    }
    res.send("Product Registered");
})
product.listen(3000,(console.log("Welcome to 3000 port")));