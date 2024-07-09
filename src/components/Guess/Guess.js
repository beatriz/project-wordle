import React from "react";
import { range } from "../../utils";

function Guess({ value }) {
  return (
    <p className="guess">
      {range(5).map((i) => {
        return (
          <span key={i} className={`cell ${value ? value[i].status : ""}`}>
            {value && value[i].letter}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
