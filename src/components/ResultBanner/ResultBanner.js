import React from "react";

function ResultBanner({ result, numGuesses, answer, onRestart }) {
  return (
    <div className={`${result} banner`}>
      {result === "happy" ? (
        <p>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>{numGuesses} guesses</strong>.
        </p>
      ) : (
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      )}
      <button onClick={onRestart}>Restart Game</button>
    </div>
  );
}

export default ResultBanner;
