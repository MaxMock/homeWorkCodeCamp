let fs = require('fs');
let obj ={};

let i=null;
let arr=[];
let arr2=[];
let objsl={};
    fs.readFile('homework1.json', 'utf8', function(err,jsondata) {
        arr= JSON.parse(jsondata);
       arr2=[...arr]
let re= arr2.filter(function(row)
        {
            row["fullname"]=row["firstname"]+" "+row["lastname"];          
            let slary1 =parseInt(row.salary)*110/100;
            let slary2 =slary1*110/100;
            let slary3 =slary2*110/100;
          
            row["salary"]=[slary1,slary2,slary3];
                     
        }
        );
        console.log(arr);
    });
   
