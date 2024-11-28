let a = prompt("Enter first number")

let b = prompt("Enter second number")

if(isNaN(a) || isNaN(b)){// ye ayega is se , Uncaught SyntaxError: sorry this is not allowed (a
    throw SyntaxError("sorry this is not allowed")
}

let sum = parseInt(a) + parseInt(b);

// console.log("This sum is ", sum);

try{
console.log("This sum is ", sum*x);
}
catch (error){
    console.log("Error aa gaya bhai");
    
}
