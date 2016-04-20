 
// Set default counters
var counterGuesses = 1;
var counterWins = 0;
var counterGuessesLeft = 9;
var counterLosses = 0;

// Guesses clicked on
var guesses = "";


 // Captures Key Clicks
document.onkeyup = function(event) {

    // Determines which exact key was selected. Make it lowercase
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    // Randomly choose a letter for the computer
	var computerGuess = String.fromCharCode(97 + Math.floor(Math.random() * 26));	

	// Check is userGuess and computer guess are the same
	if (userGuess == computerGuess) {
		// User WON! update the counterWins counter
		counterWins ++;
		document.getElementById("wins").innerHTML = "Wins: "+counterWins;
		// Reset to default values
		reset();
	} else if (counterGuesses == 9){
		// User lost! update the counterLosses counter
		counterLosses ++;
		document.getElementById("losses").innerHTML = "Losses: "+counterLosses;
		// Reset to default values
		reset();
	}  else {
		// Set the guesses
		if (counterGuesses == 8) {
			guesses += userGuess;
		} else {
			guesses += userGuess+", ";
		}
	}	
	// Update counterGuesses by one
	counterGuesses ++;
	// Descrease counterGuessesLeft by one
	counterGuessesLeft --;

	document.getElementById("guesses_left").innerHTML = "Guesses Left: "+counterGuessesLeft;
	document.getElementById("guesses_so_far").innerHTML = "Your Guesses so far: "+guesses;
}

function reset() {
	// Reset to default values
	counterGuesses = 1;
	guesses = "";
	counterGuessesLeft = 9;
}