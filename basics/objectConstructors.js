function person(name,age,place)
{
    this.name=name
    this.age=age
    this.place=place
    this.dis=function(){
        console.log("Name:"+this.name+".\n"+"Age:"+this.age+".\n"+"Place:"+place)
    }
}
var phinahas = new person("Phinahas",20,"Pathnamthitta")
var sonu = new person("Sonu",20,"Kozikode")
phinahas.dis()