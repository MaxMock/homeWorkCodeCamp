

const{Employee}=require("./employee.js");
const{Programmer}=require("./programmer.js");
const{OfficeCleaner}=require("./OfficeCleaner.js");
let  fs = require("fs");

class CEO extends Employee {
    constructor(firstname, lastname, salary,employeesRaw,employees,id,dressCode) {
        super(firstname, lastname, salary); 
       this.id=id;
        this.dressCode = dressCode;
       this.employeesRaw=[];
this.id=id;
    }
     readFile()
    {  
        return new Promise( function (resolve, reject) {
           fs.readFile ('employee9.json','utf8', function (err, data) {
           if (err)
           reject(err);
           else
           resolve(data);
           });
           });  
    }
async getemployees()
{
    let e = new Employee('Employeename','Employeelastname ',30000,1001 ,'tshirt ');    
    try {
     let t = JSON.parse(await this.readFile());
     this.employeesRaw=t;
     this.employees=[];
     let ceo;
  let r=t.map((row,index)=>
   {
       if(row.role=="CEO")
       {
        ceo= new CEO(row.firstname,row.lastname,row.salary,t,'',row.id,row.dressCode)
        this.employees.push(ceo);
        //ceo.work(e);
        
       }
       if(row.role=="OfficeCleaner")
       {
          let  off=new OfficeCleaner(row.firstname,row.lastname,row.salary,row.id,row.dressCode)
        this.employees.push(off)
        //off.work(off);

       }
       if(row.role=="Programmer")
       {
           let pro =new Programmer(row.firstname,row.lastname,row.salary,row.id,row.type);
        this.employees.push(pro)
        //pro.work(pro);
      
       }
       return this.employees;
   })
        return r;
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
          
            console.log(" salary has been set to " )
        }
        else
        {
            console.log("salary is less than before!!" )
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
     talk(message)
     {
        console.log(message);
     }
     reportRobot(self, robotMessage) {
        self.talk(robotMessage);
        }

}

exports.CEO=CEO;
