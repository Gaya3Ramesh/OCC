const express=require('express');
const server=express();
const port=3000;
server.use(express.json());
server.use(express.urlencoded({extended:true}));


server.get('/' , (req,res)=>{
    res.setHeader("content-Type" , "text/html")
    res.sendFile(__dirname + '/index.html')
})

server.get('/welcome' , (req,res)=>{
    const firstName = req.query.firstName;
    const lastName = req.query.lastName;
    const city = req.query.city;
    console.log(`firstName : ${firstName} , lastName : ${lastName} , city : ${city}`);
    res.sendFile(__dirname+'/welcome.html');
})


server.listen(port,(req,res)=>{
    console.log(`http://localhost:${port}`);
})