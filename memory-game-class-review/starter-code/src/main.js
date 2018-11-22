var cards = [
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green arrow',     img: 'green-arrow.jpg' },
  { name: 'green lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' },
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green arrow',     img: 'green-arrow.jpg' },
  { name: 'green lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' }
];

$(document).ready(function(){

  // using constructor function from "memory.js", create a newMemoryGame
  var newMemoryGame = new MemoryGame(cards);

  // newMemoryGame as an instance of MemoryGame() inherited ".shuffleCards()" 
  // method that's why we can call it here so each time we start the game we gat different layout of cards
  newMemoryGame.shuffleCards(cards);
  // console.log(newMemoryGame);

  var html = '';
  newMemoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  $('#memory_board').html(html);

  // Bind the click event of each element to a function
  $('.back').click(function () {
    // TODO: write some code here

    // each DOM element has object "this"
    const clickedCard = this;

    // console.log($(clickedCard).attr("name"))
    const theNameOfTheCard = $(clickedCard).attr("name");

    // add class "blocked" to clicked elements
    $(clickedCard).addClass("blocked");

    // add class "justClicked" to clicked elements
    $(clickedCard).addClass("justClicked");

    // change background of clickedCard using ".css()" jQuery method
    $(clickedCard).css("background", "url(img/" + theNameOfTheCard +")");

    // newMemoryGame as an instance of MemoryGame() inherited "pickedCards" array as its property
    // push the clickedCard into the "pickedCards" array
    newMemoryGame.pickedCards.push(theNameOfTheCard);
    // console.log(newMemoryGame.pickedCards);

    // since we are checking if 2 cards are the same, we need to do this 
    //when the length of pickedCards array is === 2
    if(newMemoryGame.pickedCards.length === 2){
      let theFirstCard = newMemoryGame.pickedCards[0];
      let theSecondCard = newMemoryGame.pickedCards[1];
      // console.log("in html: ", theFirstCard, theSecondCard);
      
      // now when we have 2 cards in the array, call ".checkIfPair()" method and pass these 2 cards as arguments
      newMemoryGame.checkIfPair(theFirstCard, theSecondCard);
    }
  });
});


