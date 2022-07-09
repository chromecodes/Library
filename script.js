const modal = document.getElementById("modal")
const modalWrapper = document.getElementById("modalWrapper")
const modalOpen = document.getElementById("modalOpen")
const AddBtn= document.getElementById("add")


let myLibrary = [];
n = 0 

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function getBook(){
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");

myLibrary[n] = new Book(title.value, author.value, pages.value);
showBook();
n++;
title.value = "", author.value="", pages.value="";
modalCtrl();
}

function showBook(){
  const shelf = document.getElementById("shelf");
  
  const card = document.createElement('div');
  card.classList.add('card')
  
  const lineOne = document.createElement('div');
  lineOne.classList.add('l-one');
  lineOne.textContent = myLibrary[n].title;

  card.appendChild(lineOne);

  const cross = document.createElement('div');
  cross.classList.add('close');
  cross.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
  width="12" height="12"
  viewBox="0 0 24 24"
  style=" fill:#000000;"><path d="M 4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312 L 10.585938 12 L 4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031 L 12 13.414062 L 18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969 L 13.414062 12 L 19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688 L 12 10.585938 L 5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z"></path></svg>`
  card.appendChild(cross);

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

function modalCtrl (){
  modal.classList.toggle('active');             
}


 modalOpen.addEventListener("click", modalCtrl )
 window.addEventListener("click", function(event) {
  if (event.target == modal || event.target == modalWrapper ) {
    modal.classList.toggle('active');     
  }
});


AddBtn.addEventListener( "click", getBook ) 