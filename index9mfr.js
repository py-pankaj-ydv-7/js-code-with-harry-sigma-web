// this is map 

let arr = [1,13,5,7,11];



// let newArr = [];

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2)
    
// }

let newArr = arr.map((e)=>{
    return e**2
})
// console.log(newArr);

// let newArr = arr.map((e ,index, arr)=>{// is se value or index bhi print kara sakte hai .
//     return e**2 , index,arr
// })
// console.log(newArr);


// this is filter 

// const greaterThanSeven = (e)=>{
//     if(e>25){
//         return true
//     }
//     return false
// }

// console.log(newArr.filter(greaterThanSeven))

// Reduce methodj => Reduce an array to a single value

let arr2 = [1,2,3,4,5,6]

const red = (a,b)=>{
    return a+b
}


console.log(arr2.reduce(red));


// kisi bhi obj ko array me convert kar sakte hai arry.from se 

console.log(Array.from("pankaj"))