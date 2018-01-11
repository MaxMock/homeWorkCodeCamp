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
function  addAdditionalFields(employees) 
{
    let data =JSON.parse(employees);
        let arr= [];
    for(i=0;i<data.length;i++)
    {
        let Data={}
        Data =functionaddYearSalary(data[i]);
        Data.nextSalary=addNextSalary(parseInt(data[i].salary));
         arr.push(Data);
         
    }
  
return arr;
}

async function  main() 
{
    try
    {
      
        let employees = await ReadFile("homework1.json");
      employees = await addAdditionalFields(employees) ;
      console.log(employees);
       
    }
    catch(error)
    {
        console.error(error);
    }

}
main();
