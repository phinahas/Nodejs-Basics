var read = require('readline-sync')
var1=read.question("Enter the first number")
var2 = read.question("Enter the second number");
if(var1>var2)
{
    console.log(var1+" is greatest of all")
}
else if(var2>var1)
console.log(var2+" is greates of all")


//compare
var n ="123"
var n1 =123
console.log(n==n1)
console.log(n===n1)