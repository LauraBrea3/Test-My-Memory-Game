const cards = document.getElementsByClassName('memoryCard'); 
let isFlipped = false;
let firstCard;
let secondCard;


for (let i = 0; i < cards.length; i++) { 
cards[i].addEventListener('click', flipCard); 
}

function flipCard() { 
this.classList.toggle('flipCard'); 

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
  if(firstCard.dataset.imageType === secondCard.dataset.imageType){
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
  setTimeout(() =>{
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
  }, 1500);
}

/*const cards=document.querySelectorAll('.memoryCard');
let isFlipped = false;
let frontFace,backFace;
cards.addEventListener("click", flipCard);

function flipCard() {
    this.classList.add("flipCard");
    if(!isFlipped){
        isFlipped=true;
        frontFaced= this;
        return;
    }
}*/



//const cards = document.querySelectorAll('.memoryCard');
//for(let i = 0; i < cards.length; i++){
  //cards[i].addEventListener( 'click', function() {
  ////cards[i].classList.toggle('is-flipped');
//});
//}


//const cards=document.getElementById('memoryCard');






