let a= [1,93,5,6,88]

// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     // console.log(element); 
    
// }

// console.log("for each loop");

// for each  loop

// a.forEach((value, index, arr)=>{
//     console.log(value, index, arr);
    
// })

/***
for each loop output...
1 0 [ 1, 93, 5, 6, 88 ]
93 1 [ 1, 93, 5, 6, 88 ]
5 2 [ 1, 93, 5, 6, 88 ]
6 3 [ 1, 93, 5, 6, 88 ]
88 4 [ 1, 93, 5, 6, 88 ] 

 */

// for in loop ek object k context k roop me use kiya jata hai 

// let obj = {
//     a:1,
//     b:2,
//     c:3,
// }

// for (const key in obj){
//     if(Object.hasOwnProperty.call(obj,key)){
//         const element = obj[key];
//         console.log(key,element);
        
//     }
// }


console.log("for of loop jo ki direct array k liye hota hai ");

for (const element of a) {
    console.log(element);
    
    
}

// map , filter , reduce is very important topics of aary