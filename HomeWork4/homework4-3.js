let fs = require('fs');
let arr=[];
let arrnew=[];
let obj={};
fs.readFile('homework1.json', 'utf8', function(err,jsondata) {
    let sumsalary =0;
    arr= JSON.parse(jsondata);
let final = arr.filter(fie => {
   if(fie.salary<100000)
   {        
       fie.salary=fie.salary*2;  
       return fie;  
   } 
}) 
let finalmore100k = arr.filter(fie2 => {
    if(fie2.salary>100000)
    {        
         
        return fie2;  
    } 
 }) 
let sumupsalary2 = final.reduce((sum,final) => 
{  
    return sum+final.salary 

}, 0) 
let sumupsalarymore100k = finalmore100k.reduce((sum,finalmore100k) => 
{  
    return sum+ parseInt(finalmore100k.salary) 

}, 0) 
sumsalary=sumupsalary2+sumupsalarymore100k;
console.log(final);
console.log(sumsalary);
});
