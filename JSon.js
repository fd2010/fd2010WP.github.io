function runJSONProgram(){
    // Creating a JavaScript JSon object
    const data = {
        name: "Fraser",
        age: 17,
        city: "BATHGATE",
    };
    
    // Convert the JavaScript object to a JSON string
    
    const jsonString = JSON.stringify(data);
    
    // Print the JSON string
    alert("JSonString: " + jsonString);
    
    // Parse a JSON string back into a JavaScript object
    const parsedData = JSON.parse(jsonString);
    
    // Access and print values from the JavaScript object
    alert(("Name:", parsedData.name) + " " + ("\nAge:", parsedData.age) + " " + ("\nCity:", parsedData.city));
}

document.getElementById("runJsonButton").addEventListener("click", runJSONProgram);



// List of words to choose from
const words = ["javascript", "hangman", "developer", "programming", "openai"];

// Choose a random word from the list
const wordToGuess = words[Math.floor(Math.random() * words.length)];

// Initialize variables
let guessedWord = Array(wordToGuess.length).fill("_");
let incorrectGuesses = [];
let guessesLeft = 6;

// DOM elements
const wordDisplay = document.getElementById("word-display");
const guessInput = document.getElementById("guess-input");
const guessButton = document.getElementById("guess-button");
const guessesLeftDisplay = document.getElementById("guesses-left");
const incorrectGuessesDisplay = document.getElementById("incorrect-guesses");

// Display initial state
wordDisplay.textContent = guessedWord.join(" ");
guessesLeftDisplay.textContent = guessesLeft;

// Event listener for the guess button
guessButton.addEventListener("click", function () {
  const guess = guessInput.value.toLowerCase();
  guessInput.value = "";

  if (guess.length !== 1 || !guess.match(/[a-z]/)) {
    alert("Please enter a single letter.");
    return;
  }

  if (guessedWord.includes(guess) || incorrectGuesses.includes(guess)) {
    alert("You've already guessed this letter.");
    return;
  }

  if (wordToGuess.includes(guess)) {
    for (let i = 0; i < wordToGuess.length; i++) {
      if (wordToGuess[i] === guess) {
        guessedWord[i] = guess;
      }
    }

    wordDisplay.textContent = guessedWord.join(" ");

    if (!guessedWord.includes("_")) {
      alert("Congratulations! You guessed the word: " + wordToGuess);
      location.reload();
    }
  } else {
    incorrectGuesses.push(guess);
    incorrectGuessesDisplay.textContent = incorrectGuesses.join(", ");
    guessesLeft--;
    guessesLeftDisplay.textContent = guessesLeft;

    if (guessesLeft === 0) {
      alert("Game over! The word was: " + wordToGuess);
      location.reload();
    }
  }
});