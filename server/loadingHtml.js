let http = require("http")
let fs = require("fs")

http.createServer(function(req,res){
    fs.readFile('sample.html',function(err,data){
        res.writeHead(200,{'content-type':'text/html'})
        res.write(data)
    })
}).listen(7000)