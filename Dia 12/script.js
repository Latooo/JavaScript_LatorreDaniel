var API_URL = "https://deckofcardsapi.com/api/deck";
var deckId = "";
var currentCard = $("#current-card");
var resultDisplay = $("#result");
var streakDisplay = $("#streak");
var streakCounter = 0;

$(document).ready(function() {
  $("#higher-btn").click(function() { checkGuess("higher"); });
  $("#lower-btn").click(function() { checkGuess("lower"); });
  $("#equal-btn").click(function() { checkGuess("equal"); });
  startGame();
});

function startGame() {
  $.get(API_URL + "/new/shuffle/?deck_count=1", function(response){
    deckId = response.deck_id;
    shuffleDeck();
  }, 'json');
}

function shuffleDeck() {
  $.get(API_URL + "/" + deckId + "/shuffle/", function(response){
    drawCard();
  }, 'json');
}

function drawCard() {
  $.get(API_URL + "/" + deckId + "/draw/?count=1", function(response){
    if (response.cards.length === 1) {
      displayCard(response.cards[0]);
    } else {
      resultDisplay.text("Error al extraer carta.");
    }
  }, 'json');
}

function displayCard(card) {
  currentCard.attr("src", card.image);
  currentCard.attr("alt", card.value + " de " + card.suit);
}

function checkGuess(guess) {
  $.get(API_URL + "/" + deckId + "/draw/?count=1", function(response){
    if (response.cards.length === 1) {
      var currentCardValue = getValue(currentCard.attr("alt"));
      var nextCardValue = getValue(response.cards[0].value);
      var result;
      if ((guess === "higher" && nextCardValue > currentCardValue) || 
          (guess === "lower" && nextCardValue < currentCardValue)) {
        result = "¡Adivinaste correctamente!";
        streakCounter++;
      } else if (guess === "equal" && nextCardValue === currentCardValue) {
        result = "¡Adivinaste correctamente, las cartas son iguales!";
        streakCounter++;
      } else {
        result = "¡Incorrecto!";
        streakCounter = 0;
      }
      resultDisplay.text(result);
      streakDisplay.text("Racha: " + streakCounter);
      displayCard(response.cards[0]);
    } else {
      resultDisplay.text("Error al extraer carta.");
    }
  }, 'json');
}

function getValue(card) {
  if (typeof card === "string") {
    var valueStr = card.split(" ")[0]; // Tomar la primera parte de la cadena
    switch (valueStr) {
      case "ACE": return 1;
      case "KING":
      case "QUEEN":
      case "JACK": return 10;
      default: return parseInt(valueStr);
    }
  }
  return 0; // Valor predeterminado si no se puede obtener el valor de la carta
}
