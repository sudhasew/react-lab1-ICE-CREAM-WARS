import { useState } from "react";
import "./Votes.css";
export function Votes() {
  const [chocolateVotes, setChocolateVotes] = useState(0);
  const [vanillaVotes, setVanillaVotes] = useState(0);
  const [strawberryVotes, setStrawberryVotes] = useState(0);
  return (
    <div>
      <h1>Vote Here</h1>
      <button
        className="flavorBtn"
        onClick={() => setChocolateVotes(chocolateVotes + 1)}
      >
        Chocolate
      </button>
      <button
        className="flavorBtn"
        onClick={() => setVanillaVotes(vanillaVotes + 1)}
      >
        Vanilla
      </button>
      <button
        className="flavorBtn"
        onClick={() => setStrawberryVotes(strawberryVotes + 1)}
      >
        Strawberry
      </button>

      <h2>Chocolate:{chocolateVotes}</h2>
      <h2>Vanilla:{vanillaVotes}</h2>
      <h2>Strawberry:{strawberryVotes}</h2>
    </div>
  );
}
