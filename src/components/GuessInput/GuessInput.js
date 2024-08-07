import React from "react";

function GuessInput({ handleNewGuess, isEnabled }) {
  const [guess, setGuess] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(guess);
    handleNewGuess(guess);
    setGuess("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
        required
        pattern="^[a-zA-Z]{5}$"
        title="5 letter word"
        disabled={!isEnabled}
      />
    </form>
  );
}

export default GuessInput;
