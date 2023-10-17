const birthYear = 1990;
const products = [];
const product = {};

const elm = document.querySelector("#red");
console.log(elm);

const elm1 = document.querySelector(".blue");
console.log(elm1);

const elm2 = document.querySelector("p:nth-of-type(odd)");
console.log(elm2);

const elements = document.querySelectorAll("p");
console.log(elements);
elements.forEach(function(p, i){
    if(i===0){
        p.innerHTML = "<span>test</span><script></script>";
    }
    else if(i===1){
        p.textContent = "<span>test</span>";
        const span = document.createElement("span");
        span.textContent = "test";
        p.appendChild(span);
    } else {
        p.innerText = "<span>text</span>";
    } 
});

const h1 = document.querySelectorAll("h1");
h1.textContent = "Title - click me";
h1.addEventListener("click", function(){
    h1.textContent += "- Thanks";
});


// const h1elements = document.getElementsByTagName("h1")
// console.log(h1elements[0]);
// // let to assign values
// let anotherYear = prompt("Give me a year");
const numberList = [1,2,3,4,5];
numberList.push(6);
console.log(numberList);
// numberList.splice(1,7);
numberList.pop(1);
console.log(numberList);
numberList.unshift(1);
let newArray = numberList.concat([7,8,9]);
console.log(newArray);

const max = {
    fname: "Max",
    gender: "male",
    age: 29,
    married: true
};

console.log(addValues(numberList));

// let addValues = function(numbers){
//     let sum = 0;
//     numbers.forEach(function(number){
//         sum += number;
//     });
//     return sum;
// }

//we need arguments 
function addValues(numbers){
    let sum = 0;
    numbers.forEach(function(number){
        sum += number;
    });
    return sum;
}
// let i=0;
//     while(i<numbers.length){
//         i++;
//     }
//     return num1+num2;

// //for (let i=0; i<numbers.length;i++){
//     console.log(numbers[i]);
// }

//