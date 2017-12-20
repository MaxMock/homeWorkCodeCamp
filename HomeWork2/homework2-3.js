let fs = require('fs');
let  obj={};
let arr=[];
fs.readFile('employee.txt','utf8',function(err, data)
 { 

 obj= JSON.parse(data);
for(let i=0;i<obj.length;i++)
   {
     console.log(obj[i].firstname+" "+obj[i].lastname)
   }
   
}); 