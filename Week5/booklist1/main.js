var books = [
    {
      title: 'The Design of EveryDay Things',
      author: 'Don Norman',
      alreadyRead: false,
      img: "https://blackwells.co.uk/jacket/500x500/9780465050659.webp"
    }, {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      alreadyRead: true, 
      img : "https://images.thalia.media/00/-/d2bd20cc4e1b4835ad6eee81b9ab2963/the-most-human-human-taschenbuch-brian-christian-englisch.jpeg"
    }
  ];

let rootUL = document.createElement("ul")

document.body.appendChild(rootUL);

books.forEach(el => {


    let HTMLresult = document.createElement("li")


    const resultPTitle = document.createElement("p");
    resultPTitle.textContent = `Title of the book: ${el.title}`;
    const resultPAuthor = document.createElement("p");
    resultPAuthor.textContent = `Title of the book: ${el.author}`;

    const resulImg = document.createElement("img");
    resulImg.src = el.img;


    HTMLresult.appendChild(resulImg); 
    HTMLresult.appendChild(resultPTitle); 
    HTMLresult.appendChild(resultPAuthor);
    HTMLresult.classList.add(`${el.alreadyRead ? "read" : "notread"}`);
    rootUL.appendChild(HTMLresult);


})