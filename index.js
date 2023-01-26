const cards = document.getElementsByClassName('memoryCard'); 
const button = document.getElementById("restart");
let isFlipped = false;
let firstCard;
let secondCard;
let disableBoard = false;
let gameOver = false;
window.alert('Welcome! The goal is to match two cards at a time. When You have successfully matched all cards you have won the game! Press any card to begin.')

button.addEventListener('click', () => {
  console.log('restart button clicked');
});

for (let i = 0; i < cards.length; i++) { 
cards[i].addEventListener('click', flipCard); 
}

function flipCard() { 
  if(!isFlipped){
    isFlipped = true;
    firstCard = this;
    return;
  }
  
if(disableBoard)return;
this.classList.add('flipCard'); 

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










