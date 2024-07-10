import React from "react";

const KeyboardRows = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];

// If the same letter has different status we use this to define which to show
const StatusesPriority = {
  correct: 1,
  misplaced: 2,
  incorrect: 3,
};

function Keyboard({ guesses }) {
  const flatGuesses = guesses
    .flat()
    .map((guess) => ({ ...guess, statusPrio: StatusesPriority[guess.status] }));

  function getLetterStatus(letter) {
    const ourGuesses = flatGuesses
      .filter((guess) => guess.letter === letter)
      .sort((a, b) => a.statusPrio - b.statusPrio);

    return ourGuesses[0] ? ourGuesses[0].status : "";
  }

  return (
    <div className="keyboard-container">
      {KeyboardRows.map((row, index) => (
        <div className="keyboard-row" key={index}>
          {row.map((letter, index) => {
            const s = getLetterStatus(letter);
            return (
              <div className={`keyboard-letter ${s}`} key={index}>
                {letter}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
