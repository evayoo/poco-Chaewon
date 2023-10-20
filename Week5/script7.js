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

