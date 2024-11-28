// // let obj={
// //     a:1,
// //     b:"Harry"
// // }

// // console.log(obj);

// // let animal = {
// //     eats: true
// // };

// // let rabbit = {
// //     jump: true
// // };

// // rabbit.__proto__ = animal; // sets rabbit.[[Prototype]] = animal

// // console.log(animal)


// class Animal {
//     constructor(name){ // hames run karega jab obj banega . isi ki help se obj bnta hai.
//         this.name =name
//     }

//  sum(a,b) {
//         return a+b     
//     }

//     eats()
//     {
//         console.log("kha raha hoon roar");
        
//     }

//     jumps()
//     {
//         console.log("kooond rha hu");
        
//     }

// }

// class Lion extends Animal{
//     constructor(name){
//         super(name)
//         // this.name = name
//         console.log("object is created and he is a lion .....");
//  }
// }

// let a = new Animal("nishant");
// console.log(a);

// // console.log(a.sum(2,5));

// let l = new Lion("Shera")
// console.log(l);


// getter setter

class User{
    constructor(name){
        //invokes the setter
        this.name = name ;
    }

    get name(){
        return this._name;
    }

    set name(value){
        if(value.length < 4){
            console.log("Name is too short. ");
            return ;
        }
        this._name = value;
    }
}

let user = new User("John");
console.log(user.name); // John

user = new User(""); // Name is too short.