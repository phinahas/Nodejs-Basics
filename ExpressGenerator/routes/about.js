var express = require('express');
var router = express.Router();


router.get('/',(req,res,next)=>{
    const names=["Phinahas","Sreejith","Noel","Sonu","Paul"]
    const person ={name:"Phinahas",comments:{coment:"This is a simple coment",date:"01.12.2020"},admin:false}
    res.render('about',{text:"Founders",name:names,persons:person})
})
module.exports = router;