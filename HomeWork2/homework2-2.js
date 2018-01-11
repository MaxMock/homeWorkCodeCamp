let fields = ['id','firstname','lastname','company','salary'];
let employees = [
    ['1001','Luke','Skywalker','Walt Disney','40000'],
    ['1002','Tony','Stark','Marvel','1000000'],
    ['1003','Somchai','Jaidee','Love2work','20000'],
    ['1004','Monkey D','Luffee','One Piece','9000000']
                ];
let obj={};
let arr=[];
let fname;

for(let e=0;e<employees.length;e++)
{
    for(let ie=0 ;ie<employees[e].length;ie++)
    {
      obj[fields[ie]]=employees[e][ie];
    }
    arr.push(obj);
obj={};
}
console.log(arr);

