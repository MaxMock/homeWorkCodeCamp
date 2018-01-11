const{Employee}=require("./employee.js");

class OfficeCleaner extends Employee {
    constructor(firstname, lastname, salary,id,dressCode) {
        super(firstname, lastname, salary);
             this.firstname=firstname;
             this.lastname= lastname;
             this.id=id;
             this._salary=salary;
             this.dressCode=dressCode;
    }
 work(OfficeCleaner)
     {
       this.Clean(OfficeCleaner);
       this.KillCoachroach(OfficeCleaner);
       this.DecorateRoom(OfficeCleaner);
       this.WelcomeGuest(OfficeCleaner);
     }
     Clean(OfficeCleaner)
     {
         console.log(OfficeCleaner.firstname+" Clean "+"Dress with :"+OfficeCleaner.dressCode);
     }
     KillCoachroach(OfficeCleaner)
     {
         console.log(OfficeCleaner.firstname+" KillCoachroach "+"Dress with :"+OfficeCleaner.dressCode);
     }
     DecorateRoom(OfficeCleaner)
     {
         console.log(OfficeCleaner.firstname+" DecorateRoom "+"Dress with :"+OfficeCleaner.dressCode);
     }
     WelcomeGuest(OfficeCleaner)
     {
         console.log(OfficeCleaner.firstname+" WelcomeGuest "+"Dress with :"+OfficeCleaner.dressCode);
     }
}
exports.OfficeCleaner=OfficeCleaner;