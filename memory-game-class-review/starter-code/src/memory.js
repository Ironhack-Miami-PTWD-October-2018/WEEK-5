var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0
};

MemoryGame.prototype.shuffleCards = function (someArr) {
  // console.log("I'm shuffling");
  let theLength = someArr.length;

  while(theLength > 0){
    let index = Math.floor(Math.random() * theLength);
  // console.log(index)

    theLength --;
    // tempVar in first iteration gets last element in the array
    let tempVar = someArr[theLength];
  // the last position in the array gets filled with random nuber
    someArr[theLength] = someArr[index];
    // random number's position gets filled with the value of tempVar
    someArr[index] = tempVar;

    // this process repeats as many times as we have elements in  the array
  }
  return someArr
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {

  // console.log(firstCard, secondCard)

  // add +1 on pairsClicked
  this.pairsClicked ++;

  // add pairsClicked into DOM element with id "pairs_clicked"
  $("#pairs_clicked").html(this.pairsClicked)

  // what happens if two cards are the same
  if(firstCard === secondCard){

    this.pairsGuessed ++;

    $(".back").addClass("blocked");
    $(".justClicked").addClass("reallyBlocked");

    $("#pairs_guessed").html(this.pairsGuessed);
    $(".justClicked").removeClass("justClicked");
    $(".back").removeClass("blocked");

  } else {

    // what happens if two cards are not the same
    $(".back").addClass("blocked");
    setTimeout(function(){
      // console.log("here");

        $(".justClicked").css("background", "grey");
        $(".justClicked").removeClass("justClicked");
        $(".back").removeClass("blocked");
      }, 1000);

  }
// clear the array since it always has to have max two numbers
  this.pickedCards = []

  // check if we have 12 correct guesses
  this.isFinished();

}

MemoryGame.prototype.isFinished = function () {

  if(this.pairsGuessed === 12){
    // console.log("you won");

    // clear the board
    $(".card").toggle();

    // append h1 with text "YOU WON!!!!"
    $("#memory_board").append("<h1>YOU WON!!!!</h1>")
  }
};