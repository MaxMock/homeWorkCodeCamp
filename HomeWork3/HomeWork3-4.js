let fs = require('fs');
let obj={};
let arr=[];
let newobj={};
fs.readFile('json.txt', 'utf8', function(err, data) { 
obj =JSON.parse(data);
    obj.forEach(row =>{
        Object.keys(row).forEach(function(key) {        
            if(key=='name')
            {
                newobj[key]=row[key];             
            }
            if(key=='gender')
            {
                newobj[key]=row[key];              
            }
            if(key=='company')
            {
                newobj[key]=row[key];               
            }
            if(key=='email')
            {
                newobj[key]=row[key];               
            }
            if(key=='friends')
            {
                newobj[key]=row[key];               
            }                    
        });
        arr.push(newobj);
            newobj={};
   });
   console.log(arr);
});
