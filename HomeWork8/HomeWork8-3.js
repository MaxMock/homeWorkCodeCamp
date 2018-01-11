const{Employee}=require("./employee.js");
const{CEO}=require("./ceo.js");
let  fs = require("fs");
const{Programmer}=require("./programmer.js");


async function copyFile () {
    try {
  
        let nan = new CEO("nan","susu",20000)
      await nan.getemployees(nan);
      console.log(nan.employees);
    } 
    catch (error) 
    {
    console.error (error);
    }
    }
    copyFile ();
