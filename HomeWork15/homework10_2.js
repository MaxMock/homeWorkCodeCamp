
const db= require('./models/homework10_1.js');
async function name() {
 await db.insert("testfirstname10","testlastname10",10,"testrole10");
}
name();


