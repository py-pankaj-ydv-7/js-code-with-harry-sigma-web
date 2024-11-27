console.log("pankaj");

// let boxes = document.getElementsByClassName("box")
// console.log(boxes);

// boxes[2].style.backgroundColor = "red"

// document.getElementById("redbox").style.backgroundColor = "red";

// document.querySelector(".box").style.backgroundColor = "green"

document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor = "green";
})

// queryselector use karne k liye loop use karke sabko access karna padta hai .
// ye multiple element iterate karta hai nodelist me 



