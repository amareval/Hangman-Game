

    // Creates an array that lists out all of the options (Shows in the hangman game).
    var tvShows = ["narcos", "friends", "stranger_things", "stranger_things"];
    
    // array of user guesses from the event key of pressing the keyboard
    var guess = [];

    
    // Creating variables to hold the number of wins, losses, and ties. They start at 0.
    var wins = 0;
    var losses = 0;
    var numbersLetterGuess = 12;
    

    // Set the Narcos Image

    var narcosImage = document.createElement("img");
    narcosImage.setAttribute("src", "narcos-netflix.jpg");
    narcosImage.setAttribute("class", "h-75 w-75");
    document.querySelector(".netfliximg").appendChild(narcosImage);

    
    // Pull the characters of the first show and put into theShow, we now have N A R C O S // Want to randomize the value using mathfloor and mathrandom





//Add the if statement to restart the game

    //Start the game with a key press
    document.onkeyup = function(event) {
      if (wins == 0) {
    var theShow = tvShows[0].split('');
      console.log(theShow);

    //Input this number of characters into the Current Word

    var emptySpace = theShow.length

 //Defining how many _ are needed for the empty space
    var emptySpaceLetters=[];

    for (var i = 0; i < emptySpace; i++){
      var emptySpaceVal = "_";
      emptySpaceLetters.push(emptySpaceVal)
        }
      console.log(emptySpaceLetters);

    document.querySelector(".theShow").innerHTML = (emptySpaceLetters);
    
    //Start game with key press / Guess counter is set to 12
    document.querySelector(".guessRemaining").innerHTML = numbersLetterGuess;

  

    //On a key press, we add the variable keyPress to the array of guess
    var keyPress = event.key
    console.log(guess.indexOf(keyPress))
      //If the key press by the user is the same we do nothing
    if (guess.indexOf(keyPress) == -1){
      guess.push(keyPress);
      //Decreasing number of letter guesses / Game Loser alert
    var guessRemaining = numbersLetterGuess--
      document.querySelector(".guessRemaining").innerHTML = numbersLetterGuess;
        }
      else{
        
      };
      // This is showing that the keys are being registered and the array is being built
      console.log(keyPress);
      console.log(guess);
      
      // Setting array values to show on the letters guessed
      document.querySelector(".lettersGuess").innerHTML = guess;

      //Compare the Letters guessed vs the current word using a loop

      for (var i = 0 ; i < guess.length ; i++){
      if (theShow.indexOf(guess[i]) > -1) {
        /*console.log(theShow.indexOf(guess[i]));*/
        /*console.log(theShow.indexOf(guess[i]) > -1);*/
        var correctGuess = theShow.indexOf(guess[i]);
        /*console.log(correctGuess);*/
        var fillLetter = theShow[correctGuess]
        /*console.log(fillLetter);*/
        // adding the correct guesses to an array at correct position
        emptySpaceLetters.splice(correctGuess, 1 ,fillLetter);
        /*console.log(emptySpaceLetters);*/
        document.querySelector(".theShow").innerHTML = emptySpaceLetters;
      }
      else {

      }
    }
  };

      if (guessRemaining == 1){
      alert("GAME OVER LOSER");
        }
       
        if (emptySpaceLetters >= theShow){
          console.log(emptySpaceLetters = theShow)
          alert("Trapping Like a Narco! You WIN! (Migos Quote)")
          wins++
          // Getting the guess array back to nothing and number of letter guesses back to 0
          guess = [];
          numbersLetterGuess = 12;
//Add the new game image
          var friendsImage = document.createElement("img");
    friendsImage.setAttribute("src", "friendsImage.jpg");
    friendsImage.setAttribute("class", "h-75 w-75 friends");
    document.querySelector(".netfliximg").replaceChild(friendsImage, narcosImage);
        }
        // Set the win counter if the game is won
        var html = 
        "<p>Wins: " + wins + "</p>"
        document.querySelector(".wins").innerHTML = html;

if (wins == 1) {
  

      document.querySelector(".lettersGuess").innerHTML = guess;
    var theShow = tvShows[1].split('');
      console.log(theShow);


    //Input this number of characters into the Current Word

    var emptySpace = theShow.length

 //Defining how many _ are needed for the empty space
    var emptySpaceLetters=[];

    for (var i = 0; i < emptySpace; i++){
      var emptySpaceVal = "_";
      emptySpaceLetters.push(emptySpaceVal)
        }
      console.log(emptySpaceLetters);

    document.querySelector(".theShow").innerHTML = (emptySpaceLetters);
    
    //Start game with key press / Guess counter is set to 12
    var numberLetterGuess = 12;
    document.querySelector(".guessRemaining").innerHTML = numbersLetterGuess;

  
     //On a key press, we add the variable keyPress to the array of guess
     var keyPress = event.key
    console.log(guess.indexOf(keyPress))
      //If the key press by the user is the same we do nothing
    if (guess.indexOf(keyPress) == -1){
      guess.push(keyPress);
      //Decreasing number of letter guesses / Game Loser alert
    var guessRemaining = numbersLetterGuess--
      document.querySelector(".guessRemaining").innerHTML = numbersLetterGuess;
        }
      else{
        
      };
      // This is showing that the keys are being registered and the array is being built
      console.log(keyPress);
      console.log(guess);
      
      // Setting array values to show on the letters guessed
      document.querySelector(".lettersGuess").innerHTML = guess;

      //Compare the Letters guessed vs the current word using a loop

      for (var i = 0 ; i < guess.length ; i++){
      if (theShow.indexOf(guess[i]) > -1) {
        /*console.log(theShow.indexOf(guess[i]));*/
        /*console.log(theShow.indexOf(guess[i]) > -1);*/
        var correctGuess = theShow.indexOf(guess[i]);
        console.log(correctGuess = theShow.indexOf(guess[i]))
        console.log(correctGuess = theShow.lastIndexOf(guess[i]))

        /*console.log(correctGuess);*/
        var fillLetter  = theShow[correctGuess]
        /*console.log(fillLetter);*/
        // adding the correct guesses to an array at correct position
        emptySpaceLetters.splice(correctGuess, 1 ,fillLetter);

        /*console.log(emptySpaceLetters);*/
        document.querySelector(".theShow").innerHTML = emptySpaceLetters;
      }
      else {

      }
    }

      if (guessRemaining == 1){
      alert("GAME OVER LOSER");
        }
       
        if (emptySpaceLetters >= theShow){
          console.log(emptySpaceLetters = theShow)
          alert("Monica: Welcome to the real world. It sucks. You’re gonna love it!")
          wins++
          // Getting the guess array back to nothing and number of letter guesses back to 0
          guess = [];
          numbersLetterGuess = 12;
//Add the new game image
var strangerThingsImg = document.createElement("img");
    strangerThingsImg.setAttribute("src", "strangerThings.jpg");
    strangerThingsImg.setAttribute("class", "h-75 w-75");
    document.querySelector(".netfliximg").appendChild(strangerThingsImg);
    
        }
        
        // Set the win counter if the game is won
        var html = 
        "<p>Wins: " + wins + "</p>"
        document.querySelector(".wins").innerHTML = html;
      };

if (wins == 2) {
    
  

    document.querySelector(".lettersGuess").innerHTML = guess;
  var theShow = tvShows[2].split('');
    console.log(theShow);


  //Input this number of characters into the Current Word

  var emptySpace = theShow.length

//Defining how many _ are needed for the empty space
  var emptySpaceLetters=[];

  for (var i = 0; i < emptySpace; i++){
    var emptySpaceVal = "_";
    emptySpaceLetters.push(emptySpaceVal)
      }
    console.log(emptySpaceLetters);

  document.querySelector(".theShow").innerHTML = (emptySpaceLetters);
  
  //Start game with key press / Guess counter is set to 12
  var numberLetterGuess = 12;
  document.querySelector(".guessRemaining").innerHTML = numbersLetterGuess;

};
   //On a key press, we add the variable keyPress to the array of guess
   var keyPress = event.key
  console.log(guess.indexOf(keyPress))
    //If the key press by the user is the same we do nothing
  if (guess.indexOf(keyPress) == -1){
    guess.push(keyPress);
    //Decreasing number of letter guesses / Game Loser alert
  var guessRemaining = numbersLetterGuess--
    document.querySelector(".guessRemaining").innerHTML = numbersLetterGuess;
      }
    else{
      
    };
    // This is showing that the keys are being registered and the array is being built
    console.log(keyPress);
    console.log(guess);
    
    // Setting array values to show on the letters guessed
    document.querySelector(".lettersGuess").innerHTML = guess;

    //Compare the Letters guessed vs the current word using a loop

    for (var i = 0 ; i < guess.length ; i++){
    if (theShow.indexOf(guess[i]) > -1) {
      /*console.log(theShow.indexOf(guess[i]));*/
      /*console.log(theShow.indexOf(guess[i]) > -1);*/
      var correctGuess = theShow.indexOf(guess[i]);
      console.log(correctGuess = theShow.indexOf(guess[i]))
      console.log(correctGuess = theShow.lastIndexOf(guess[i]))

      /*console.log(correctGuess);*/
      var fillLetter  = theShow[correctGuess]
      /*console.log(fillLetter);*/
      // adding the correct guesses to an array at correct position
      emptySpaceLetters.splice(correctGuess, 1 ,fillLetter);

      /*console.log(emptySpaceLetters);*/
      document.querySelector(".theShow").innerHTML = emptySpaceLetters;
    }
    else {

    }
  }

    if (guessRemaining == 1){
    alert("GAME OVER LOSER");
      }
     
      if (emptySpaceLetters >= theShow){
        console.log(emptySpaceLetters = theShow)
        alert("Monica: Welcome to the real world. It sucks. You’re gonna love it!")
        wins++
        // Getting the guess array back to nothing and number of letter guesses back to 0
        guess = [];
        numbersLetterGuess = 12;
//Add the new game image
        
      }
      
      // Set the win counter if the game is won
      var html = 
      "<p>Wins: " + wins + "</p>"
      document.querySelector(".wins").innerHTML = html;

    

  }
  
    
    

 
