import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import { checkGuess } from "../../game-helpers";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);

  const addGuess = (guessValue) => {
    const guessResult = checkGuess(guessValue, answer);
    const nextGuessList = [...guessList, guessResult];
    setGuessList(nextGuessList);
  };

  return (
    <>
      <GuessResults guesses={guessList} />
      <GuessInput handleNewGuess={addGuess} />
    </>
  );
}

export default Game;
