var books = [
  {
    title: "The Design of EveryDay Things",
    author: "Don Norman",
    cover: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Qo27inBKBKY4Q4Pgk5KkbQ.png",
    alreadyRead: false,
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1295465264i/8884400.jpg",
    alreadyRead: false,
  },
  {
    title: "Cycling the Silk road",
    author: "Chaewon Yoo",
    cover: "https://m.media-amazon.com/images/I/61P3Wwixi2S._SY522_.jpg",
    alreadyRead: true,
  },
  {
    title: "Pachinko",
    author: "Minjin Kim",
    cover: "https://m.media-amazon.com/images/I/81o8BAAayeL._SY522_.jpg",
    alreadyRead: true,
  },
  {
    title: "Norwegian Woods",
    author: "Murakami Haruki",
    cover: "https://m.media-amazon.com/images/I/81zqVhvbHbL._SY522_.jpg",
    alreadyRead: true,
  },
];

const ul = document.getElementById("bookList");

// let container = document.getElementById("bookListContainer");

books.forEach (book => {
    let li = document.createElement("li");
    let info_PTag = document.createElement("p");
    let title_StrongTag = document.createElement("strong");
    let cover_ImgTag = document.createElement("img");
    // let didnt = ""

    title_StrongTag.textContent =book.title;
    cover_ImgTag.src=book.cover;
    cover_ImgTag.width = 300;

    if (book.alreadyRead === false) {
        title_StrongTag.style.color = 'orange';
    }

    // if (!book.alreadyRead){
    //     didnt = "didn't "
    // }

    const didnt = book.alreadyRead ? "" : "didn't";
    
    info_PTag.textContent=`I ${didnt}read ${book.author}'s book titled `

    info_PTag.appendChild(title_StrongTag); 
    li.appendChild(info_PTag);
    li.appendChild(cover_ImgTag);
    ul.appendChild(li);
});

const h1Element = document.querySelector('h1');

h1Element.style.fontSize = '24px';
h1Element.style.textAlign = 'center';
h1Element.style.fontWeight = 'bold';

// FileList.appendChild(info_ptag);
// ul.appendChild(li);
// let p = document.createElement("p");

// let i = 0;
// while (i < books.length) {
//     console.log(books[i]);
//     i++;
// }



// console.log('test');


// check how to iterate over the array in javascript
    // for the practise console log each item
// create p element for each array item
// append created p element into the bookListContaier

// static html?
// how you expect to behave - with javascript /

// html : p / ul / li /
// css: images / styles

// p.textContent = `${book.title} by ${book.author}`;
// container.appendChild(p);
// let ul = document.createElement("ul");