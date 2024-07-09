import React from "react";

function ResultBanner({ result, numGuesses, answer }) {
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
    </div>
  );
}

export default ResultBanner;
