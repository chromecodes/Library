
const AddBtn= document.getElementById("add")


let myLibrary = [];
n = 0 


function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function getBook(){
const title = document.getElementById("title").value;
const author = document.getElementById("author").value;
const pages = document.getElementById("pages").value;

myLibrary[n] = new Book(title, author, pages);

/*
console.log( myLibrary[n]);
console.table( myLibrary);
console.log( myLibrary[0].title);
console.log( myLibrary[0].author);
console.log( myLibrary[0].pages);
console.log( Book.title);
console.log( Book.author);
console.log( Book.pages);*/
showBook();
n++;
}

function showBook(){
  const shelf = document.getElementById("shelf");
  
  const card = document.createElement('div');
  card.classList.add('card')
  
  const lineOne = document.createElement('div');
  lineOne.classList.add('l-one');
  lineOne.textContent = myLibrary[n].title;

  card.appendChild(lineOne);

  const lineTwo = document.createElement('div');
  lineTwo.classList.add('l-two');
  lineTwo.textContent = myLibrary[n].author;

  card.appendChild(lineTwo);

  const lineThree = document.createElement('div');
  lineThree.classList.add('l-three');
  lineThree.textContent = myLibrary[n].pages;

  card.appendChild(lineThree);

  shelf.appendChild(card);
}


 AddBtn.addEventListener( "click", getBook )