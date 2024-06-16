// game.js

// Array of possible words
const words = ["queen", "quite", "quick", "quartz", "quiver", "quiz"];

// Variables
let currentWord = "";
let guessedLetters = [];

// Function to start or reset the game
function startGame() {
    // Choose a random word from the words array
    currentWord = words[Math.floor(Math.random() * words.length)];
    
    // Reset guessed letters
    guessedLetters = [];
    
    // Update the display to show blanks for unguessed letters
    updateWordDisplay();
}

// Function to update the word display with blanks and guessed letters
function updateWordDisplay() {
    const wordDisplay = document.getElementById('currentWord');
    let displayText = "";
    for (let i = 0; i < currentWord.length; i++) {
        if (guessedLetters.includes(currentWord[i])) {
            displayText += currentWord[i] + " ";
        } else {
            displayText += "_ ";
        }
    }
    wordDisplay.textContent = displayText.trim();
}

// Function to check user's guess
function checkGuess() {
    const guessInput = document.getElementById('guessInput');
    const guess = guessInput.value.toLowerCase();
    
    // Check if the guessed letter is in the current word
    if (currentWord.includes(guess)) {
        // Add guessed letter to the guessedLetters array
        if (!guessedLetters.includes(guess)) {
            guessedLetters.push(guess);
        }
        
        // Update the word display
        updateWordDisplay();
        
        // Check if all letters in the word have been guessed
        if (guessedLetters.every(letter => currentWord.includes(letter))) {
            alert("Congratulations! You guessed the word.");
            startGame();
        }
    } else {
        // Incorrect guess logic (optional)
        alert("Incorrect guess. Try again.");
    }
    
    // Clear the input field
    guessInput.value = "";
}

// Start the game when the page loads
startGame();
