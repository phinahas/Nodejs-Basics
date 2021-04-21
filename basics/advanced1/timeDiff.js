

//Synchrounus 
var t = new Date()
console.log("Start")
for(i=0;i<10;i++)
{
    console.log("Lopping")
}
console.log("End")
console.log("Time diife:"+(new Date()-t))


function task(milleSecond)
{
    var tm = new Date()
    while((new Date()-tm)<=milleSecond)
    {
        
    }
}
console.log("Start")
task(2000)
console.log("Stop")

console.log("Start")
task(2000)
console.log("Stop")

console.log("Start")
task(2000)
console.log("Stop")
//---------------------------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------------------------
//Asynchronous

function displayEnd()
{
    console.log("End")
}

function task(milleSecond)
{
    var tm =new Date()
    while((new Date -tm)<=milleSecond)
    {

    }
}

console.log("Start")
setTimeout(displayEnd,2000)

console.log("Start")
setTimeout(displayEnd,2000)

console.log("Start")
setTimeout(displayEnd,2000)
