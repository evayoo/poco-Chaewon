// 내가 쓴 코딩


const myAge = parseInt(prompt("How old are you?"));
const retireAge = parseInt(prompt("What is your retirement age? "));
const workYears = retireAge - myAge;
const thisYear = new Date().getFullYear();
const retireYear = thisYear + workYears;

function retirementCalculator(retireYear, workYears){
    if (workYears > 0){
        return `You will retire on ${retireYear}, and you will have to work ${workYears} years.`
    } else if (workYears === 0) {
        return `You will retire this year.`;
    }
    return 'You have already retired.';
}

const result = retirementCalculator(retireYear, workYears);
console.log(result);

// 

const language = prompt("Which language do you speak? es/de/en?");

function HelloWorld() {
    if (language === "es") 
    {return "Hola, el mundo";}
   else if (language === "de") {
       return "Hallo, der Welt"; }
   else  {return "Hello World";
}
};
const result1 = HelloWorld();
console.log(result1);

// 
const num1 = parseInt(prompt("What's your number? "));
const num2 = parseInt(prompt("whats your second number? "));

function biggerNum () {
    if (num1 > num2) {
    console.log(`${num1} is bigger than ${num2}`);
} else if(num1 < num2) {
    console.log(`${num1} is smaller than ${num2}`);
} else {
    console.log(`${num1} and ${num2} are equal.`);
}
}

biggerNum();