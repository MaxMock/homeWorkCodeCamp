let fs = require('fs');
let arr=[];
let arrnew=[];
let newobj={};

fs.readFile('json.txt', 'utf8', function(err,jsondata) { 
    arr= JSON.parse(jsondata);
 let result = arr.filter(data =>{
  if(data.gender=="male"&&data.friends.length>=2)
  { 
    newobj["name"]=data.name
    newobj["gender"]=data.gender
    newobj["company"]=data.company
    newobj["email"]=data.email
    newobj["friends"]=data.friends
    newobj["balance"]="$"+ data.balance.replace("$","").replace(",","")/10 ;
    arrnew.push(newobj);
    newobj={}
  }
 })
console.log(arrnew);
});