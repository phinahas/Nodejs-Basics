var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/submitForm',(req,res)=>{
  MongoClient.connect("mongodb://localhost:27017",(err,client)=>{
                  if(err)
                  console.log(err)
                  else
                  {
                    console.log("Databse Connected")
                    client.db("sample").collection('users').insertOne(req.body)
                    console.log("Data added")

                  }
                  
  })
  //console.log(req.body)
  res.send("Loged In")
})
module.exports = router;
