async function sleep() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(45)
        },1000);
    })
    
}

function sum(a,b,c){
    return a+b+c
    
}

//iife imidiatly invoke
(async function main() {
// let a = await sleep()
// console.log(a);
// let b = await sleep()    
// console.log(b);

// let [x,y] = [1,5,7]
// console.log(x,y);

// let [x,y,  ...rest] = [1,5,7,8,9,45]
// console.log(x,y,rest);

// let obj = {
//     a:1,
//     b:2,
//     c:3,
//     d:4
// }

// let {a,b,...rest}=obj
// console.log(a,b,rest);


let arr = [1,4,6]
// console.log(arr[0] + arr[1] + arr[2]);

//simple tarika
console.log(sum(...arr));


})()

