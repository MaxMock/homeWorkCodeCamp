const{Employee}=require("./employee.js");
const{CEO}=require("./ceo.js");


let somchai = new CEO("Somchai","Sudlor",30000);
let somsri = new Employee("Somsri","Sudsuay",22000,"tshirt");
somchai.gossip(somsri,"Today is very cold!");
somchai.work(somsri);

somchai.increaseSalary(somsri, 20);
somchai.increaseSalary(somsri, 25000);
