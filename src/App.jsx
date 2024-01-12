import { useState } from "react";
import Container from "./components/Container";
import Header from "./components/Header";
import Card from "./components/Card";
import Stepper from "./components/Stepper";
import Button from "./components/Button";
import "./styles/global.css";
import "./styles/container.css";
import "./styles/header.css";

export default function App() {
  const PlayerScore = () => {
    const [scores, setScores] = useState(players);

    const increase = (index) => {
      const updatedScores = [...scores];
      updatedScores[index].playerScore += 1;
      setScores(updatedScores);
    };

    const decrease = (index) => {
      const updatedScores = [...scores];
      updatedScores[index].playerScore -= 1;
      setScores(updatedScores);
    };

    //   const increase = (index) => {
    //     setScores((players[index].playerScore = +1));
    //     // result number, string
    //   };
    return (
      <div>
        {scores.map((player, index) => (
          <div key={index}>
            <button onClick={() => increase(index)}>+</button>
            <span>
              {player.playerName}: {player.playerScore}
            </span>
            <button onClick={() => decrease(index)}>-</button>
          </div>
        ))}
      </div>
    );
  };
}
