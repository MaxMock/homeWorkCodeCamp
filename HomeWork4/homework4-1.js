let arr= [1,2,3,4,5,6,7,8,9,10]; 
let result = arr.filter(arr => {
    if(arr%2 === 0){return arr;} }).map(x => x * 1000);
console.log(result) ;
