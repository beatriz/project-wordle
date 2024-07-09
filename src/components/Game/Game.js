import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import ResultBanner from "../ResultBanner/ResultBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const [gameResult, setGameResult] = React.useState();

  const checkResult = (guessValue, numGuesses) => {
    if (guessValue === answer) {
      setGameResult("happy");
    } else if (numGuesses === NUM_OF_GUESSES_ALLOWED) {
      console.log("LOST");
      setGameResult("sad");
    }
  };

  const addGuess = (guessValue) => {
    const guessResult = checkGuess(guessValue, answer);
    const nextGuessList = [...guessList, guessResult];
    setGuessList(nextGuessList);
    checkResult(guessValue, nextGuessList.length);
  };

  return (
    <>
      <GuessResults guesses={guessList} />
      <GuessInput
        handleNewGuess={addGuess}
        isEnabled={gameResult === undefined}
      />
      {gameResult && (
        <ResultBanner
          result={gameResult}
          numGuesses={guessList.length}
          answer={answer}
        />
      )}
    </>
  );
}

export default Game;
