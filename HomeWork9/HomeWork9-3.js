
const{MyUtility}=require("./MyUtility.js");
async function copyFile (){
  try {
    let array = [
      { 'dir': 'left', 'code': 97 },
      { 'dir': 'right', 'code': 100 }
    ];
    var objects = [{ 'a': 1 }, { 'b': 2 }];
    var users = [
      { 'user': 'barney', 'age': 36, 'active': true },
      { 'user': 'fred',   'age': 40, 'active': false }];
    var userssortby = [
      { 'user': 'fred',   'age': 48 },
      { 'user': 'barney', 'age': 36 },
      { 'user': 'fred',   'age': 40 },
      { 'user': 'barney', 'age': 34 }];

      let obj1={a:1,B:2};
      let uti = new MyUtility();

      let obj2=uti.assign({},obj1);
      let testtimes =uti.times(3,String);
      let testkeyby =uti.Keyby(array, 'dir');
      let testcloneDeep =uti.cloneDeep(objects);
      let testfilter=uti.filter(users,{'age': 36,'active': true});
      let testsortBy=uti.sortBy(userssortby,['user', 'age']);

      console.log("\n assign")
      console.log(obj2);
      console.log("\n times")
      console.log(testtimes);
      console.log("\n keyby")
      console.log(testkeyby);
      console.log("\n cloneDeep")
      console.log(testcloneDeep);
      console.log("\n filter")
      console.log(testfilter);
      console.log("\n Sortby")
      console.log(testsortBy);
    }
    catch (error) 
    {
    console.error (error);
    }
    }
    copyFile ();