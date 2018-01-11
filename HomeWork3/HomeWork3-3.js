let fs = require('fs');
let employees =
[
    {"id":"1001",'firstname':'Luke','lastname':'Skywalker'},
    {"id":"1002",'firstname':'Tony','lastname':'Stark'},
    {"id":"1003",'firstname':'Somchai','lastname':'Jaidee'},
    {"id":"1004",'firstname':'Monkey D','lastname':'Luffee'},
];
let companies = [
    {"id":"1001","company":"Walt Disney"},
    {"id":"1002","company":"Marvel"},
    {"id":"1003","company":"Love2work"},
    {"id":"1004","company":"One Piece"},
];
let salaries = [
    {"id":"1001","salary":"40000"},
    {"id":"1002","salary":"1000000"},
    {"id":"1003","salary":"20000"},
    {"id":"1004","salary":"9000000"},
];
let like = [
    {"id":"1001","like":"apple"},
    {"id":"1002","like":"banana"},
    {"id":"1003","like":"orange"},
    {"id":"1004","like":"papaya"},
];
let dislike = [
    {"id":"1001","dislike":"banana"},
    {"id":"1002","dislike":"orange"},
    {"id":"1003","dislike":"papaya"},
    {"id":"1004","dislike":"apple"},
];
let obj={};
let arr=[];
for(i=0;i<employees.length;i++)
{
  for(let j in employees[i])
  {
     obj[j]=employees[i][j];
    
  }
  for(let k in companies[i])
  {
      if(k!='id'){
        obj[k]=companies[i][k];
      }
     
    
  }
  for(let h in salaries[i])
  {
      if(h!='id'){
        obj[h]=salaries[i][h];
      }
     
    
  }
  for(let l in like[i])
  {
      if(l!='id'){
        obj[l]=like[i][l];
      }
     
    
  }
  for(let m in dislike[i])
  {
      if(m!='id'){
        obj[m]=dislike[i][m];
      }
     
    
  }
  arr.push(obj);
  obj={};
 
}
let str3= JSON.stringify(arr);
writerjson(str3);

function writerjson(str3) 
{
 return new Promise(function(resolve, reject) 
    {
       fs.writeFile('homework3-3.json',str3,'utf8', function(err) {
         if (err)
          reject(err);
           else 
           resolve(); 
       }); 
   }); 
}
console.log(arr);
