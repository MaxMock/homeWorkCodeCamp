
class CEO extends Employee {
    constructor(firstname, lastname, salary) {
        super(firstname, lastname, salary);

        this.dressCode = 'suit';
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
    increaseSalary(employee, newSalary) {
        if(employee.setSalary(newSalary))
        {
            console.log( employee.firstname+"salary is less than before!!" )
            
        }
        else
        {
        
            console.log( employee.firstname+" salary has been set to "+newSalary )
           
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


let somchai = new CEO("Somchai","Sudlor",30000);
let somsri = new Employee("Somsri","Sudsuay",22000,"tshirt");
somchai.gossip(somsri,"Today is very cold!");
somchai.work(somsri);

somchai.increaseSalary(somsri, 20);
somchai.increaseSalary(somsri, 25000);
