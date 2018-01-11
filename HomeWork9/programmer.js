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

    work (programmer) {  // simulate public method
        this.CreateWebsite(programmer); 
        this.FixPC(programmer); 
        this.InstallWindows(programmer);
    }
   
   
    CreateWebsite(programmer)
     {
           console.log(programmer.firstname+" CreateWebsite")
     }
     FixPC(programmer)
     {
        console.log(programmer.firstname+" FixPC")
     }
     InstallWindows(programmer)
     {
         console.log(programmer.firstname+" InstallWindows")
     }
}
exports.Programmer=Programmer;