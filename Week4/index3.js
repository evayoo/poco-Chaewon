function greeting(){
    let userName = prompt("What's your name?");
 if (isNaN(userName)){return `Hello! ${userName}! Welcome.`
}}; 
greeting();




// 이건 아직 안  된다. 
function countCha (){
    let character = prompt("Input a character")
 if (isNaN(character)){return `${character}`, character.toString().length
}
};
countCha();

function countCha() {
    let character = prompt("Enter a character");
    if (character !== null) {  // Check if the user clicked "cancel"
        alert(`Character: ${character}, Length: ${character.length}`);
    }
}

countCha();

//example with birthYear
const birthYear = +prompt("Please enter the year you were born, e.g. YYYY");
if (isNaN(birthYear) || birthYear.toString().length !== 4) {
    alert("Please enter a number with 4 digits")};

outputDiv.textContent = `I will be either ${ageBeforeBirthday} or ${ageAfterBirthday} years old in ${futureYear}.`;


function printQuote(){
    let author = prompt("Enter your favorite author");
    let quote = prompt("Enter your favorite quote");
    if(isNaN(author) && isNaN(quote)){
        return (`${author} says, " + ${quote} + ".`)
    }
};
printQuote();
