const cards =document.querySelectorAll(".card1");
cards.forEach(function(card1){
    card1.addEventListener("click", function(){
        cards.forEach(function(othercard){
            othercard.classList.remove("active")
        })
        this.classList.add("active")
    })
})