const memoryCard= document.getElementById("memoryCard")
memoryCard.addEventListener("click", flipCard);

function flipCard() {
    memoryCard.classList.toggle("flipCard");
}
