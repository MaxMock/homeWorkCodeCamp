
const db= require('./models/homework10_1.js');
async function name() {
 await db.insert("testfirstname","testlastname",1000,"testrole");
}
name();


