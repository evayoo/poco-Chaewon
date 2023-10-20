function goodMorning(name){
    console.log(`Good morning ${name}`)
return true;
}

goodMorning("Eva");


const sayHelloFunc = function(name){
    console.log(`Hello ${name}`);
}

// because it's without a name


const sayHello = name => {
    console.log(`Hello ${name}`);
}
sayHello("Sema");

// anoynoums, you can use them below. 
// it's better to use old fashion, because arrow f works just one time 


param => {
    console.log(param);
}

() => {
    console.log("Hello");
}

(a,b) => {
    console.log(a+b);
}

const sum = (a,b) => a+b;
const sumFunction = function(a,b) {
    return a+b;
}

const library = ["Bible", "Poem"];
library.forEach((book, index) => {
    console.log(book);
});

//arror function are used for anoynmous functions
// can't used for object methods. 

const book1 = {
    title: "Bible",
    author: "Peter",
    series: "version 1",
    year: 2002, 
    getBookInfo: function(){
        console.log(`${this.title} was written by ${this.author} and
        published in ${this.year}`);
    },
    getSeries(){
        console.log(`"${this.title} is of the series ${this.series}`);
    },
    getAllProperties(){
        console.log(Object.keys(this));
    }
}

book1.getBookInfo();
book1.getAllProperties();
// console.log(Object.values(book1));

condition? expr1 : expr2

function isUserValid(bool){
    return bool;
}

var answer = isUserValid(true)? "You may enter" : "Access denied";

var automatedAnswer = "Your account number is"
+ (isUserValid(false) ? "1234" : "not available") + "."

function experiencePoints(){
    if (winBattle()) {
        return 10;
    }   else {
        return 1;
    }
}

function myFunction(arg1, arg2, arg3){
    return arg1 + arg2 * arg3;
}

// function (a) {
//     return a + 100;
// }

(a) => {
    return a + 100;
}

const name = "first name";
const obj = {
    [name]: "Susanne",
    [5 + 13]: 38,
    experience: 13
}

Array.forEach((element, index) => {
    console.log("rank" + (index + 1 ) + ". competitor: "
 + element)});

 let list = ["doors", "windows", "rooms"];
 for (let x of list){
    console.log(x);
 }

 for(let ch of "hello"){
    console.log(ch);
 }

//  let obj = {doors: 2, windows: 8, rooms: 5};
//  for(let x in obj){
//     console.log(x);
//  }

//  let obj = {doors: 2, windows: 8, rooms: 5};
//  Object.keys(obj).forEach(function(property_name){
//     console.log(obj[property_name]);
//  });

//  let obj = {doors: 2, windows: 8, rooms: 5};
//  Object.values(obj).forEach(function(property_value){
//     console.log(property_value);
//  });

 function Person(name, age, married){
    this.name = name;
    this.age = age;
    this.isMarried = married;
    this.hello = function(){
        return "Hello" + this.name;
    }
 };

 //class 

class Person{
    constructor(name, age, married){
        this.name = name;
        this.age = age;
        this.isMarried = married;
    }
    hello() {
        return "Hello" + this.name;
     }
}

class Animal {
    constructor(name) {
        this.name = name;
    }
    jump() { console.log(`${this.name} is jump.`); }
}
class Bird extends Animal {
    fly() { console.log(`${this.name} is flying.`); }
}
class Dog extends Animal {
    bark() { console.log(`${this.name} says "Woof!".`); }
}

const myDog = new Dog("Luna");
console.log(myDog.name);
myDog.jump();
myDog.bark();
myDog.fly();




