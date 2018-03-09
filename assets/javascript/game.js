// Creates an array that lists out all of the options (Shows in the hangman game).
var tvShows = ["Narcos", "Stranger Things", "Peaky Blinders", "MindHunter"];
//Where we will store the show characters that is selected.
var theShow =[];
// array of user guesses 
var guess = [];
// Creates an array that lists out all of the letters in the array selected (Shows in the hangman game).

// Creating variables to hold the number of wins, losses, and ties. They start at 0.
var wins = 0;
var losses = 0;

// This loop is to identify the characters in the string. Getting random characters but need to make sure all letters in the array string are selected?

for (var i = 0; i < tvShows[0].length; i++) {
    var computerGuess = tvShows[0][Math.floor(Math.random() * tvShows[0].length)];
    console.log(computerGuess);
  }

  document.onkeyup = function(event) {

    // Determines which key was pressed. Need to add this value to array and display in User guess area
    var userGuess = event.key;
    
    // Eventuall will be used to insert the array as it builds into the player's guess div
    document.querySelector("#lettersGuess").innerHTML = guess;

}