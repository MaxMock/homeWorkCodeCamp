let fs = require('fs');

function ReadFile(textname)
{
    return new Promise(function(resolve, reject)
    {
        fs.readFile(textname, 'utf8', function(err, data)
        { if(err)
            reject(err);
            else
            resolve(data);
        });
    });
}

function functionaddYearSalary(row)
{
   row.yearSalary=row.salary*12
   return row;
}

function addNextSalary(currentSalary) {
    let next3YearSalary = [0, 0, 0];
    let a = next3YearSalary.map((salary, index) => {
       currentSalary += (parseInt(currentSalary)*10/100);
        return currentSalary
    });
 
    return a;
    
}; 

function cloneobj(employees)
{
    let arr= [];
    let Data={};
    
    for(i =0;i< employees.length;i++)
    {
        for(j in employees[i])
        {
            Data[j]=employees[i][j];
        }
        arr.push(Data);
        Data={};
    }
 return arr;
}



function  addAdditionalFields(employees) 
{  
        let arr= [];
        let Data={};

    for(j in employees)
    { 
        Data=functionaddYearSalary(employees[j]);
        Data.nextSalary=addNextSalary(parseInt(employees[j].salary));
        arr.push(Data);
        Data={};
    }
     
return arr;
}

async function  main() 
{
    try
    {
      
        let  jsondata = await ReadFile("homework1.json");
        
        let employees=JSON.parse(jsondata)
     let e=cloneobj(employees);

       let newEmployees=addAdditionalFields(e) 
     console.log(newEmployees[0]);
     console.log(employees[0]);
    }
    catch(error)
    {
        console.error(error);
    }

}
main();
