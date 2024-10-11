var http=require("http");
var url=require("url");
var storage=require("localStorage");


http.createServer((req,res)=>{
console.log(req.url);
console.log(url.parse(req.url,false).pathname)
var obj={
    username:"klmno",
    password:"Ra16nj08@"
}
var a=storage.setItem("u_data",JSON.stringify(obj));

 if(url.parse(req.url,false).pathname=="/users"&&req.method=="GET"){

 var b=JSON.parse(storage.getItem("u_data"));
 
         res.write(JSON.stringify(b));
   
  
 }
 else{
    res.write("hi");
 }

res.end();
    
}).listen(3010,()=>{
    console.log("connection established");
})