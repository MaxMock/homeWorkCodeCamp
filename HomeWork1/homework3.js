let peopleSalary= [
  {"id":"1001","firstname":"Luke","lastname":"Skywalker","company":"Walt Disney","salary":"40000"},
 {"id":"1002","firstname":"Tony","lastname":"Stark","company":"Marvel","salary":"1000000"},
 {"id":"1003","firstname":"Somchai","lastname":"Jaidee","company":"Love2work","salary":"20000"},
 {"id":"1004","firstname":"Monkey D","lastname":"Luffee","company":"One Piece","salary":"9000000"}
]
let peopleSalaryarray=[];

let peopleSalaryobj={};

for(let x in peopleSalary)
{
for(let i in peopleSalary[x] )
{  
  if (i=="salary"){ 
    let salary=peopleSalary[x][i];
    let salary3year=[];
    for(j=0;j<3;j++) {
      salary=salary*110/100;
      salary3year.push(salary);
    }
    peopleSalaryobj[i]=salary3year; 
 }
   else 
   {
    peopleSalaryobj[i]=peopleSalary[x][i]; 
   }               
}
  
  peopleSalaryarray.push(peopleSalaryobj);
  
  peopleSalaryobj={};
 
}

console.log(peopleSalaryarray);