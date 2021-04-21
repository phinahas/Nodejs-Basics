function add(n1,n2,callback)
{let err=false
    if (n1===0)
     err=true
    callback(n1+n2,err)
}
 function multiply(n1,n2,callback){
     callback(n1*n2)
 }
function div(n1,n2,callback){
    callback(n1/n2)
}


    add(10,20,(sum,err)=>{
        if(err)
        console.log("first number is zero")

        else
        {
            console.log(sum)
            multiply(sum,sum,(product)=>{
                console.log(product)
                div(product,10,(qtnt)=>{
                    console.log(qtnt)
    
                })

            })

        }
        
    })


const { resolve, reject } = require('promise')
//Above callback can be done using promise
 const Promise = require('promise')
console.log("---------------------Promise------------------------------")

 function addPromise(n1,n2)
 {
      return new Promise((resolve,reject)=>{
          if(n1==0)
          {
              reject("First Number is zero")
          }
          resolve(n1+n2)
      })
 }

function multPromise(n1,n2){
    return new Promise((resolve,reject)=>{
        if(n1==300)
        reject("Value is 3000")
        resolve(n1*n2)
    })

}


 addPromise(100,200).then((sum)=>{
     console.log(sum)
     return multPromise(sum,sum)
 }).then((result)=>{
     console.log(result)
 }).catch((err)=>{
     console.log(err)
 })
 .catch((err)=>{
     console.log(err)
 })