
// gloabl variables
var cards       = [{rank: "queen", suit: "hearts", cardImage: "images/queen-of-hearts.png"},
                   {rank: "queen", suit: "diamonds", cardImage: "images/queen-of-diamonds.png"},
                   {rank: "king", suit: "hearts", cardImage: "images/king-of-hearts.png"},
                   {rank: "king", suit: "diamonds", cardImage: "images/king-of-diamonds.png"}];
var cardsInPlay = [];
var score = 0;



const checkForMatch = function(){

  var scoreNode = document.getElementById('score');

  if (cardsInPlay[0] === cardsInPlay[1]) {
      score+=1;
      scoreNode.textContent = "Score: "+ score;
      alert("You found a match!");
    } else {
      score-=1;
      scoreNode.textContent = "Score: "+ score;
      alert("Sorry, try again.");
  }
}

const resetCardDeck = function(){

  cardsInPlay = [];
  let gameBoard = document.getElementById('game-board');

  for(let i = 0; i < gameBoard.children.length; i++){
    gameBoard.children[i].setAttribute('src', 'images/back.png');
  }

}

const reset = function(){
  cardsInPlay = [];
  resetCardDeck();
}

const flipCard = function(){

  // user must reset cards once two cards have been played
  if(cardsInPlay.length >= 2){
    return;
  }

  let cardId = this.getAttribute('data-name');

  cardsInPlay.push(cards[cardId].rank);

  this.setAttribute('src', cards[cardId].cardImage);

  if(cardsInPlay.length === 2){
    checkForMatch();
  }

}

const createBoard = function(){

  let index = Math.floor(Math.random() * 3)

  for(let i = 0; i < cards.length; i++){

    let cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');


    cardElement.setAttribute('data-name', i);

    cardElement.addEventListener('click', flipCard);

    document.getElementById('game-board').appendChild(cardElement);

  }
}

document.getElementById('resetButton').addEventListener('click', reset);

createBoard();
