class Employee {
    constructor(firstname, lastname, salary,dressCode) {
        let self = this;
        this._salary = salary; // simulate private variable
        this.firstname=firstname;
        this.lastname=lastname;
        this.dressCode=dressCode;
    }
    setSalary(newSalary,employee) 
    { // simulate public method
        // return newSalary ถ้ามีเงินเดือนใหม่มีค่ามากกว่า this._salary
        // return false ถ้าเงินเดือนใหม่มีค่าน้อยกว่าเท่ากับ this._salary
        if(newSalary>employee._salary)
        {
            employee._salary=newSalary;
            return newSalary;
        }
        else
        {
            return newSalary=false;
         
        }
       
    }
    getSalary () {  // simulate public method
        return this._salary;
    };
    work(employee) {
        // leave blank for child class to be overidden
    }
    leaveForVacation(year, month, day) {

    }
}
exports.Employee=Employee;