let http = require('http')
let fs  = require('fs')
let url = require('url')

http.createServer((req,res)=>{

    let Urls = url.parse(req.url,true)
    let rootUrl=Urls.pathname
    //console.log(rootUrl)
    if(rootUrl==='/')
    {
        res.write("Home Page")
        res.end()
    }
    else if(rootUrl==='/sign-up')
    {

        fs.readFile('signUp.html',(err,data)=>{
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(data)
            res.end()
        })
    }
    else if(rootUrl==='/signupaction')
    {
        //console.log("Signup action")
        console.log(Urls.query.lname)
        res.write(Urls.query.fname)
        res.end()
    }
    else
    {
        res.write("404")
        res.end()

    }

}).listen(7000,()=>console.log("Server running"))