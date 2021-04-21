class Hello
{
    constructor(n1,n2){
        this.n1=n1;
        this.n2=n2;

    }
      
    hello(name){
        console.log("Hello "+name)
    }
    displaySum(){
        console.log(this.n1 + this.n2)
    }
}

let obj = new Hello(10,20)
obj.displaySum()
obj.hello("Phinahas");