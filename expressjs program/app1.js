
let express = require("express") //load the module
let app = express();    //creating reference of express module

app.get("/",(request,response)=>{
    response.send("Welcome Express JS Module");
})

app.get("/aboutus",(request,response)=>{
    response.send("Welcome Express JS Module about us page");
})

app.get("/contactus",(request,response)=>{
    response.send("Welcome Express JS Module contactus page");
})

app.listen(2000,()=>console.log("Server running on 2000 port no."));