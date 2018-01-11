const{Employee}=require("./employee.js");
const{CEO}=require("./ceo.js");
let  fs = require("fs");
const{Programmer}=require("./programmer.js");


async function copyFile () {
    try {
        let Ceo = new CEO('firstname','lastname',30000,1006,'tshirt');
        let employees= await Ceo.getemployees();
        let emp= new Employee('Employeefirstname','Employeelastname',10000,1007,'tshirt');
        let employeeswork= employees.map((employees,index)=>{
            return  employees[index].work(employees[index]);
        })
    }
    catch (error) {
        console.error (error);
    }
}
copyFile ();