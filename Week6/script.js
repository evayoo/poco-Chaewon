const imgTags = document.querySelectorAll("img");
imgTags.forEach(img => {
    img.addEventListener("error",() => {
        img.src = "hanbok.jpg";
    });
    img.addEventListener("mouseover", () => {
        alert("Hover over img-Tag");
        }, true);
});

const pTag = document.querySelector("p");
pTag.addEventListener("mouseover", () => {
    alert("Hover over p-Tag");
    const nestedImgTag = pTag.querySelector("img");
    nestedImgTag.removeEventListener("mouseover", handleMouseOver, true);
}, true);

const formTag = document.querySelector("form");
FormData.addEventListener("submit", handleFormSubmission);

function handleMouseOver(){
    alert("Hover over img-Tag");
}

function handleFormSubmission(event){
    event.preventDefault();
    const inputValue = document.querySelector("#fname").value;
    console.log(`Hello and Welcome, ${inputValue}`);
    console.table(event);
}

