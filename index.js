const cards=document.getElementById("memoryCard");
cards.addEventListener("click", flipCard);

function flipCard() {
    cards.classList.toggle("flipCard");
}


//const cards=document.querySelectorAll(".memoryCard");
//function flipCard(){
   // cards.forEach((card)=>{
     //   if (card != this){
     //       card.classList.remove('is-flipped');
       // }
   // });
   // this.classList.toggle('is-flipped');

//};
//cards.forEach((card)=>card.addEventListener("click", flipCard));


//function flipCard() {
  //  cards.forEach((card) =>{
    //    if(card != this){
      //      card.classList.remove('is-flipped');
        //}
    //});
    //this.classList.toggle('is-flipped');
//};
//cards.forEach((card)=> card.addEventListener("click", flipCard));
