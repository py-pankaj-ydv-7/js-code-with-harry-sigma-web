function nice(name) {
    console.log("Hey " + name + " you are nice");    
    console.log("Hey " + name + " you are nice");    
    console.log("Hey " + name + " your tshirt is  nice");    
    console.log("Hey " + name + " your course is good too!");    
}

nice("pankaj")
nice("sujeet")

function sum(a,b, c=3){ // c name ka parameter optional hai.
//    console.log(a+b)   // c ko yaha bolte hai default value , default parameters
return a+b+c;
    
}
result1 = sum(2,5);
// result1 = sum(2); // nan ayega q ki hamne yaha sahi se no . ko nahi diya 
result2 = sum(7,6);
result3 = sum(9,6);

// console.log("The sum of these numbers is :", result1);
// console.log("The sum of these numbers is :", result2);
// console.log("The sum of these numbers is :", result3);


// reusability a jati hai 
// kuch argument pass kar dete hai



// Arrow functions .

const func1 = (x)=>{ // func1 ek variable bhi hai or ye variable ki tarh bhi use kar sakte hai
    console.log("I am an arrow function",x)    
}

func1(5)
func1(65)
func1(45)