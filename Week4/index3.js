function greeting(){
    let userName = prompt("What's your name?");
 if (isNaN(userName)){return `Hello! ${userName}! Welcome.`
}}; 
greeting();



function countCha (){
    let character = prompt("Input a character")
 if (isNaN(character)){return length(character), character
}
};
countCha();

function printQuote(){
    let author = prompt("Enter your favorite author");
    let quote = prompt("Enter your favorite quote");
    if(isNaN(author) && isNaN(quote)){
        return (`${author} says, " + ${quote} + ".`)
    }
};
printQuote();
