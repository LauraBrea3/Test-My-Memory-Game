const cards = document.getElementsByClassName('memoryCard'); 
let isFlipped = false;
let firstCard;
let secondCard;
let disableBoard = false;


for (let i = 0; i < cards.length; i++) { 
cards[i].addEventListener('click', flipCard); 
}

function flipCard() { 
  if(disableBoard)return;
this.classList.add('flipCard'); 

if(!isFlipped){
  isFlipped = true;
  firstCard = this;
  return;
}
  secondCard = this;
  isFlipped = false;

  cardMatch();
}

function cardMatch(){
  if(firstCard.dataset.image === secondCard.dataset.image){
    disableCard();
    return;
  }
unflipCard();
}

function disableCard(){
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click',flipCard);
}

function unflipCard(){
  disableBoard= true;
  setTimeout(() =>{
    firstCard.classList.remove('flipCard');
    secondCard.classList.remove('flipCard');
    disableBoard= false;
  }, 1000);
}










