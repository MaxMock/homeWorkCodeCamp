

const{Employee}=require("./employee.js");
const{Programmer}=require("./programmer.js");
let  fs = require("fs");

class CEO extends Employee {
    constructor(firstname, lastname, salary,employeesRaw,employees) {
        super(firstname, lastname, salary); 
       let s=this;
        this.dressCode = 'suit';
       this.employeesRaw=[];
   

    }
     readFile()
    {  
        return new Promise( function (resolve, reject) {
           fs.readFile ('homework1.json','utf8', function (err, data) {
           if (err)
           reject(err);
           else
           resolve(data);
           });
           });  
    }
async getemployees(ceo)
{
    try {
     let t = JSON.parse(await this.readFile());
     this.employeesRaw=t;
     this.employee=[];
   for(let i=0;i<t.length;i++)
   {
  this.employee.push(new Programmer(t[i].firstname,t[i].lastname,t[i].salary,t[i].id,"fontend")) 
   }
 ceo.employees= this.employee;
     console.log(this.employee);
  } 
    catch (error) 
    {
    console.error (error);
    }
    

}
    getSalary(){  // simulate public method
        return super.getSalary()*2;
    };
    work (employee) {  // simulate public method
        this._fire(employee);
        this._hire(employee);
        this._seminar();
        this._golf();
        
      
    }
    increaseSalary(employee,newSalary) {
        if(employee.setSalary(newSalary,employee))
        {
          
            console.log( employee.firstname+" salary has been set to "+newSalary )
        }
        else
        {
            console.log( employee.firstname+"salary is less than before!!" )
        }
    }
    _golf () { // simulate private method
        this.dressCode = 'golf_dress';
        console.log("He goes to golf club to find a new connection." + " Dress with :" + this.dressCode);
        
    };
    _seminar () { // simulate private method
  
        console.log("He is going to seminar " + " Dress with :" + this.dressCode);
        
    };
    _fire(employee)
    {
       console.log( employee.firstname+ " has been fired!" + " Dress with :" + employee.dressCode)
    }
    _hire(employee)
    {
        console.log( employee.firstname+ " has been hired back!"+ " Dress with :" + employee.dressCode)
     }
     gossip(employee,text)
     {
           console.log("Hey "+employee.firstname+", "+text)
     }

  

}

exports.CEO=CEO;
