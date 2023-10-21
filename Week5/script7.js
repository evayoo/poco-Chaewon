// undefined. 

// object / string / Boolean  / 

// template string : 
// backticks dien't exist before ES6

let name = 'David';
let msg = `Welcome`;

document.body.textContent = "New text";

let elm = document.getElementById("demo");
let arr = elm.childNodes;
arr.forEach(function(el){
    el.textContent = "new text";
});

let urlDisplayElement = document.getElementById('urlDisplay');
let currentUrl = window.location;
urlDisplayElement.innerHTML = `Current url is: ${currentUrl}`
currentUrl.replace(urlDisplayElement, h3), 
currentUrl.textContent = "this would be rendered as html"

// let object = {
//     "someProperty": "something"
//      "someOtherProperty": "somethingElse"
// }

let userInput = document.getElementById('input').value;

document.getElementById('output').innerText = eval("object." + userInput)
.something; alert('hacked');