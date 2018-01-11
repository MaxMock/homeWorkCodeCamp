


// function cloneobject(input)
// {
//     let newarr=[];
//     let newobj={}; 

//     if(Array.isArray(input))
//     {
//         input.map((keys,index)=>{
//             if(typeof input[index]=="number")
//             {
//                 newarr.push(input[index]+1);
//             }
//             else
//             {
//                 Object.keys(keys).map((keysobj,index)=>
//                 {
//                     if(typeof keys[keysobj]=="object")
//                     {
                     
//                         Object.keys(keys[keysobj]).map((keysobj2,index)=>
//                         {
                            
//                             if(typeof keys[keysobj]=="object")
//                             {
//                                 newobj[keysobj]=keys[keysobj];
//                                 Object.keys(keys[keysobj]).map((keysobj2,index)=>
//                                 {                                
//                                     newobj[keysobj][keysobj2]=keys[keysobj][keysobj2]+1;                                       
//                                 })
//                             }
//                         })                   
//                     }
//                     else
//                     {
//                         newobj[keysobj]=keys[keysobj]+1;
//                     }
//                 })
//                 newarr.push(newobj)}
//             })
//             return newarr;
//         } 
//         else
//         {
//             Object.keys(input).map((keys,index) =>{
//                 newobj[keys]=input[keys]+1;
//             })
//             return newobj;
//         }
//     } 

function cloneobject(input) {
    let newarr=[];
    let newobj={};
        
    if(Array.isArray(input))
    {       
        input.map((keys,index)=>{
            if(typeof input[index]=="number")
            {
                newarr.push(input[index]+1);
            }
            else
            {
               newobj= cloneobject(input[index]);
               newarr.push(newobj);
            }
        })
        return newarr;
    }
    else
    { 
        Object.keys(input).map((keys,index) =>{
            if(typeof input[keys]=="number")
            {
                newobj[keys]=input[keys]+1;
            }
            else
            {
            let newobj2= cloneobject(input[keys]);
            newobj[keys]=newobj2;
            }
        })   
         return newobj; 
    }
}
function main()
{
    let input1 =[1,2,3];
    let input2={a: 1,b: 2};
    let input3=[1,2,{a:1,b:2}];
    let input4=[1,2,{a:1,b:{c:3,d:4}}];
    let newinput1 =cloneobject(input1)
    let newinput2 =cloneobject(input2)
    let newinput3 =cloneobject(input3)
    let newinput4 =cloneobject(input4)
    console.log("input");
   console.log(input1);
   console.log(input2);
   console.log(input3);
   console.log(input4);
   console.log("--------");
   console.log("--------");
   console.log("newinput");
   console.log(newinput1);
   console.log(newinput2);
   console.log(newinput3);
   console.log(newinput4);
}
main();