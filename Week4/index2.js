let day = prompt("When is your favorite day?");
switch(day){
case "Monday":
console.log("Montag");
break;
case "Tuesday":
    console.log("Dienstag");
break;
case "Wednesday":
    console.log("Mittwoch");
break;d
case "Thursday":
    console.log("Donnerstag");
break;
case "Friday":
    console.log("Freitag");
break;
case "Saturday":
    console.log("Samstag");
break;
case "Sunday":
    console.log("Sonntag");}

//odd even reporter
let i = prompt("Enter a number between 0 and 20")
for (i = 0; i <=20; i++) {
    if (i%2 === 1)
    {
        console.log(`${i} is odd`);
    } else if(i%2 === 0){
        console.log(`${i} is even`);
    }
}


// multiplier table 
number1 = +prompt("Enter a number between 0 and 10");
result = number1*9

console.log(result);


    