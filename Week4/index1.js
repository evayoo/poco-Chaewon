// let userName = prompt("What's your name?");
// let greeting = `Hello! ${userName}! Welcome.`
// console.log(greeting);

// function greeting(userName){
//     let userName = prompt("What's your name?");
// } if (userName == NaN){return `Hello! ${userName}! Welcome.`
// }; 



let author = prompt("Enter your favorite author");
let quote = prompt("Enter your favorite quote");
console.log(`${author} + says, " + ${quote} + ".`)
if(true){
    console.log(quote);
}

//my age 

let birthYear;
console.log(birthYear);
birthYear = Number(prompt("Please enter your year of birth"));
console.log(birthYear);
birthYear = Number(birthYear);
if(birthYear<1 || isNaN(birthYear)){
    alert("The input is not correct. Please try again.")
    birthYear = prompt("Please enter your year of birth");
}

let targetYear;
targetYear = +prompt("Please enter the targeted year")
if(targetYear<1 || isNaN(targetYear)){
    alert("The input is not correct. Please try again.")
    targetYear = prompt("Please enter your target year");
}



if(targetYear >= birthYear){
    let age = targetYear - birthYear;
alert(`I will be either ${age-1} or ${age} in ` + targetYear);
} else {
    alert("I was not yet born in " + targetYear)
};

function getUserInput(promptMsg){
    let userInput = +prompt(promptMsg);
    while(isUserInputInvalid(userInput)){
        alert("The input is not correct. Please try again.")
        userInput = prompt(promptMsg);
} return userInput;
}

function isUserInputInvalid(userInput){
    if(userInput<1 || isNAN(userInput)){
        return false;
    }
    return true;
}









// let futureYear;
// do {
//     birthYear = +prompt("Please enter")
// } while (isNaN(futureYear) || futureYear === 0)

// if(futureYear >= birthYear){
//     let age = futureYear - birthYear;
//     console.log('I will be either ${age - 1} or ${age} in ${futureYear}');
// } else if





// = Number 
// if(isNaN(birthYear) || birthYear === empty) {
//     alert("This is not a num. ")
//     birthYear= +prompt("plz enter") 
// }








let number = 1;

console.log("beginning");
for(let number=1;number<=100;number++) {

    while(true){
        if(number % 5 === 0 && number % 7 === 0){
            console.log("PowerCoders");
        } else if (number % 5 === 0){
            console.log("Power");
        } else if (number % 7 === 0){
            console.log("Coders");
        }  else {
            console.log(number);
        }
}


    number++;
}
console.log("end of loop");

let direction = "left";
switch(direction){
    case "left":
        console.log("I go left");
    break;
    case "right":
        console.log("I go right");
    break;
    case "straight":
    default:
        console.log("I go straight");
}

// if(direction === "left"){
//     console.log("left");
// } else if () {direction === "right"
//     console.log("rifht");
// }   else {direction === "straight"
//     console.log("straight");
// }

// playlist.forEach(functions(song){
//     console.log(song);
// })


