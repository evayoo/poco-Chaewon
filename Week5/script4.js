// let author = +prompt("who's the author?")
// let quote = +prompt("what did she say?")

// function printQuote() {
// if (author == NaN || quote == NaN){
//     return `${author} says "${quote}."`;
// }
// }

// let input = +prompt("put a string");

// function countCha () {
//     if (input == NaN){
//         return input.length, input
//     }
// }

// let name = +prompt("what's your name?");
// function sayHello () {
//     if (name == NaN){
//         return `Hello ${name}`
//     }
// }

// using this array,
let array = ["Banana", "Apples", "Oranges", "Blueberries"];

console.log(array[2]);
array.shift();
array.sort();
array.push("kiwi");
array.shift();
array.reverse();
console.log(array);

// 
class Food{
    constructor (r1,r2,r3){
    this.r1 = r1;
    this.r2 = r2;
    this.r3 = r3;
    }

    favFood() {
        let arrayFood = [this.r1,this.r2,this.r3];
        for(let i=0; i<arrayFood.length; i++){
            console.log( `My #${i+1} choice is ${arrayFood[i]}.`);
        }
    }
};

let Ranking = new Food("kimbap", "kimchi", "thukpoki");
console.log(Ranking.favFood());

// 
class Recipe{
    constructor(title,serving,ingredients){
        this.title = title;
        this.serving = serving;
        this.ingredients = ingredients;
    }
    myRecipe(){
        let arraySoup = [this.title,this.serving,this.ingredients];
        for (let i=0; arraySoup.length > i; i++);
        console.log(`${arraySoup[0]}`)
        console.log(`Serves: ${arraySoup[1]}`)
        console.log(`Ingredients: ${arraySoup[2]}`)
    }
}

let Soup = new Recipe("Soup", 2, ["cinnamon", "cumin", "cocoa"]);
console.log(Soup.myRecipe());

// 

function ageCalculator(){        
    let thisYear = new Date().getFullYear();
    let workYear = retireAge - myAge
    if (myAge <= 0 || retireAge <= 0){    
        let myAge = +prompt("What is your age?")
    let retireAge = +prompt("When do you retire?")
    }
    else if (myAge > retireAge)
    {return `You already retired.` }
    else (myAge <= retireAge)
    {
        
        return `You have ${workYear} left until you can retire. 
        It's ${thisYear}, so you can retire in ${thisYear + workYear}` }
}
ageCalculator();