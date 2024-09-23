import React, { useState } from "react";

const GuessingGame = () => {
  // State to store the random number, user guess, and result message
  const [correctNumber] = useState(Math.floor(Math.random() * 10) + 1);
  const [userGuess, setUserGuess] = useState("");
  const [result, setResult] = useState("");

  // Function to handle the guess checking
  const checkGuess = () => {
    const guess = parseInt(userGuess);
    if (!guess) {
      setResult("Please enter a valid number!");
      return;
    }

    if (guess === correctNumber) {
      setResult("Congratulations! You guessed the correct number.");
    } else if (guess > correctNumber) {
      setResult("Too high! Try again.");
    } else {
      setResult("Too low! Try again.");
    }
  };

  // Function to handle user input change
  const handleChange = (e) => {
    setUserGuess(e.target.value);
  };

  return (
    <div>
      <h1>Guess the Number Game</h1>
      <p>Guess a number between 1 and 10!</p>

      <input
        type="number"
        value={userGuess}
        onChange={handleChange}
        placeholder="Enter your guess"
        min="1"
        max="10"
      />
      <button onClick={checkGuess}>Submit</button>

      <p>{result}</p>
    </div>
  );
};

export default GuessingGame;
