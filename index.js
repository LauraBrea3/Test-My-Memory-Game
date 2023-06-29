const cards = document.getElementsByClassName('memoryCard'); 
let isFlipped = false;
let firstCard;
let secondCard;
let disableBoard = false;
window.alert('Welcome! The goal is to match two cards at a time. When You have successfully matched all cards you have won the game! Press any card to begin.')

/*button.addEventListener('click', () => {
  console.log('restart button clicked');
});*/

//makes cards flip
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
/*this is what checks to see if the cards match and if they do then both cards
 are disabled and cannot be clicked again, if they don't match then they will flip back*/
function cardMatch(){
  if(firstCard.dataset.image === secondCard.dataset.image){
    disableCard();
    return;
  }
unflipCard();
}
//this disables the cards once clicked and they match
function disableCard(){
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click',flipCard);
  
}
//this will unflip the cards after 1s if they don't match
function unflipCard(){
  disableBoard= true;
  setTimeout(() =>{
    firstCard.classList.remove('flipCard');
    secondCard.classList.remove('flipCard');
    disableBoard= false;
  }, 1000);
}










