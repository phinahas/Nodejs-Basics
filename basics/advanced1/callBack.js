let hello = function(name){
    console.log("hello:"+name)
}
let name = function(callback){
    callback("Phinahas")
}
name(hello)