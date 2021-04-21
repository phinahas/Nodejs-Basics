let express = require('express')
let path = require('path')
let app =express()

app.use((req,res,next)=>{
    console.log("Start")
    next()
})


app.get("/",(req,res)=>{
    res.send("Welcome to express")
    res.end()
})
app.get("/signup",(req,res)=>{
    res.sendFile(path.join(__dirname,'signUp.html'))
    console.log("Middle")
    
})
app.post("/signup",(req,res)=>{
    res.send("Acoount created")
})



app.listen(3000,()=>{
    console.log("Server running")
})