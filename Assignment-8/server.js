const express=require('express');
const server=express();
const port=3000;
server.use(express.json());
server.use(express.urlencoded({extended:true}));

server.get('/',(req,resp)=>{
    resp.setHeader("Content-Type","text/html")
    resp.sendFile(__dirname+'/index.html');
});

server.get('/validate.js',(req,resp)=>{
    resp.sendFile(__dirname+'/validate.js');
});

server.get('/welcome',(req,resp)=>{
    resp.setHeader("Content-Type","text/html")
    const firstName=req.query.firstName;
    const lastName=req.query.LastName;
    const city = req.query.city;
    if(firstName.length==0||firstName===""){
        console.log("First Name is required ");
        resp.sendFile(__dirname+'/index.html');
    }
    else{
    console.log("GET First Name :"+firstName);    
    console.log("GET last Name :"+lastName);  
    console.log("GET City :"+city);  
    resp.sendFile(__dirname+'/welcome.html');
    }
    
});


server.listen(port,()=>{
    console.log(`http://localhost:${port} started `);
});
