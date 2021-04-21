
a=0;
try{
    if(a==0)
        throw"Use case not found"
}
catch(err)
{
    console.log(err)
}finally{
    console.log("Finally block will work at last")
}