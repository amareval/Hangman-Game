// Creates an array that lists out all of the options (Shows in the hangman game).
var tvShows = ["narcos", "stranger things", "peaky blinders", "mindhunter"];
    
// array of user guesses from the event key of pressing the keyboard
var guess = [];


// Creating variables to hold the number of wins, losses, and ties. They start at 0.
var wins = 0;
var losses = 0;
var numbersLetterGuess = 12;


// Pull the characters of the first show and put into theShow, we now have N A R C O S

var theShow = tvShows[0].split('');
console.log(theShow);

//Input this number of characters into the Current Word

var emptySpace = theShow.length


//Start game with key press / Guess counter is set to 12
document.querySelector(".guessRemaining").innerHTML = numbersLetterGuess;

//Defining how many _ are needed for the empty space
var emptySpaceLetters=[];

for (var i = 0; i < emptySpace; i++){
  var emptySpaceVal = "_";
emptySpaceLetters.push(emptySpaceVal)
}
console.log(emptySpaceLetters);

document.querySelector(".theShow").innerHTML = (" " + emptySpaceLetters + " ");

//Start the game with a key press
document.onkeyup = function(event) {


//Decreasing number of letter guesses / Game Loser alert
var guessRemaining = numbersLetterGuess--
document.querySelector(".guessRemaining").innerHTML = numbersLetterGuess;

/*
//Set current word as theShow

document.querySelector(".theShow").innerHTML = theShow;

*/
if (guessRemaining == 0){
  alert("GAME OVER LOSER");
}


//On a key press, we add the variable keyPress to the array of guess
  var keyPress = event.key
  guess.push(keyPress);
  // This is showing that the keys are being registered and the array is being built
  console.log(keyPress);
  console.log(guess);

  
  // Setting array values to show on the letters guessed
  document.querySelector(".lettersGuess").innerHTML = guess;
  //Compare the Letters guessed vs the current word using a loop

  for (var i = 0 ; i < guess.length ; i++)
  console.log(theShow.indexOf(guess[i]));
  if 

};

 
     


/*
<script>
     //insert for loop here with 
function myFunction() {
    var str = ["hello world", "test"];
    var res = str[0].substring(-3);
    //insert the characters into an array variable , use push command 
var computerLetters = [res[i]]
  
//Need to add #of divs that coincide with the # of characters in the new array, probably another loops


   //Insert into document
    document.getElementById("demo").innerHTML = res[0];
}
//Then you need to 
</script>
*/