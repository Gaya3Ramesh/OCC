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


server.post('/welcome',(req,resp)=>{
    resp.setHeader("Content-Type","text/html")
    const firstName=req.body.firstName;
    const lastName=req.body.LastName;
    const city = req.body.city;
    if(firstName.length==0||firstName===""){
        console.log("First Name is required ");
        resp.send('First Name is required');
    }
    if(city.length==0||city===""){
        console.log("City is required ");
        resp.send('City is required');
    }
    else{
    console.log("My First Name :"+firstName);    
    console.log("My last Name :"+lastName);  
    console.log("My City is :"+city);  
    resp.sendFile(__dirname+'/welcome.html');
    }
    
});


server.listen(port,()=>{
    console.log(`http://localhost:${port} started `);
});
