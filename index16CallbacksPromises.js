console.log("pankaj is a hacker");
console.log("sujeet is a hecker");

setTimeout(() =>{
    console.log("I am inside settimeout");
}, 2000);

console.log("The End");

const callback = (arg)=>{
    console.log(arg);
    
}

const loadScript = (src, callback)=> {
    let sc = document.createElement("script")
    sc.src = src;
    sc.onload = callback("Harry");
    document.head.append(sc)
}


loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)