const http=require('http');
const port = 3000;

http.createServer(function(req, resp){
    resp.write("<h1>Good Morning</h1>");
    resp.end();
}).listen(port, function(){
    console.log(`custome server is working at http://localhost${port}`)
});

