const modal = document.getElementById("modal");
const modalWrapper = document.getElementById("modalWrapper");
const modalOpen = document.getElementById("modalOpen");
const AddBtn= document.getElementById("add");



let myLibrary = [];
n = myLibrary.length 

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

function getBook(){
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const status = document.getElementById("readSts");

myLibrary[n] = new Book(title.value, author.value, pages.value, status.checked) ;
showBook();
n++;
title.value = "", author.value="", pages.value="",status.checked=false;
modalCtrl();
}

function showBook(){
  const shelf = document.getElementById("shelf");
  
  const card = document.createElement('div');
  card.classList.add('card');
  
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

  const delBtn = document.createElement('button');
  delBtn.classList.add('delete');

  card.appendChild(delBtn);


  const readed = document.createElement('input');
  readed.classList.add('readed');

  card.appendChild(delBtn);

  
  const stateBg = document.createElement('div');
  stateBg.classList.add('read-bg');

 
  const stateFor = document.createElement('label');
  stateFor.setAttribute('for', 'read')
  stateFor.classList.add('read');

  const state = document.createElement('input');
  state.setAttribute('type', 'checkbox')
  state.setAttribute('id','read');
  
  stateFor.appendChild(state);

  stateBg.appendChild(stateFor);

  card.appendChild(stateBg);

  shelf.appendChild(card);
}
function checkSts(){
  if(myLibrary[n] == true){
    t
  }
}
function modalCtrl (){
  modal.classList.toggle('active');             
}

 const state = document.getElementById('read-bg')

state.addEventListener("click", function(e) {
  console.log(e)
})

 modalOpen.addEventListener("click", modalCtrl )
 window.addEventListener("click", function(event) {
  if (event.target == modal || event.target == modalWrapper ) {
    modal.classList.toggle('active');     
  }
});


AddBtn.addEventListener( "click", getBook );
