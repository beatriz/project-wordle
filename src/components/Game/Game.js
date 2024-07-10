import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import ResultBanner from "../ResultBanner/ResultBanner";
import Keyboard from "../Keyboard/Keyboard";

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const [gameResult, setGameResult] = React.useState();
  const [answer, setAnswer] = React.useState(() => sample(WORDS));

  console.log({ answer });

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

  const restartGame = () => {
    setGuessList([]);
    setGameResult(undefined);
    const nextAnswer = sample(WORDS);
    setAnswer(nextAnswer);
  };

  return (
    <>
      <GuessResults guesses={guessList} />
      <GuessInput
        handleNewGuess={addGuess}
        isEnabled={gameResult === undefined}
      />
      <Keyboard guesses={guessList} />
      {gameResult && (
        <ResultBanner
          result={gameResult}
          numGuesses={guessList.length}
          answer={answer}
          onRestart={restartGame}
        />
      )}
    </>
  );
}

export default Game;
