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