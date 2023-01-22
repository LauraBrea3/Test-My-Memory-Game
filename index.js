const cards = document.getElementsByClassName('memoryCard'); 

for (let i = 0; i < cards.length; i++) { 
cards[i].addEventListener("click", flipCard); 
} 

function flipCard() { 
this.classList.add("flipCard"); }


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






