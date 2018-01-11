const{Employee}=require("./employee.js");
class Programmer extends Employee {
    constructor(firstname, lastname, salary,id,type) {
        super(firstname, lastname, salary);
             this.firstname=firstname;
             this.lastname= lastname;
             this.id=id;
             this._salary=salary;
             this.type=type;
    }

    work () {  // simulate public method
        this.CreateWebsite(); 
        this.FixPC(); 
        this.InstallWindows();
    }
   
   
    CreateWebsite()
     {
           console.log(employee.firstname+" CreateWebsite")
     }
     FixPC()
     {
        console.log(employee.firstname+" FixPC")
     }
     InstallWindows()
     {
         console.log(employee.firstname+" InstallWindows")
     }
}
exports.Programmer=Programmer;