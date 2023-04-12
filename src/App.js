import React, { useState } from "react";
import "./App.css";
import { GameIntro } from "./gameViews/gameIntro/GameIntro";
import { Battleground } from "./gameViews/battleground/Battleground";
import { monsters } from "./components/MonstersList";
import { CharacterCreation } from "./gameViews/characterCreation/CharacterCreation";

function App() {
  const [gameViewIs, setGameViewIs] = useState(0);
  const [currentMonster, setCurrentMonster] = useState(monsters[0]);
  const [monsterHealth, setMonsterHealth] = useState(currentMonster.health);
  const [monsterDamage, setMonsterDamage] = useState(0);
  const [playerMaxHealth, setPlayerMaxHealth] = useState(200);
  const [playerHealth, setPlayerHealth] = useState(playerMaxHealth);
  const [playerDamage, setPlayerDamage] = useState(0);
  const [playerLevel, setPlayerLevel] = useState(1);
  const [playerClass, setPlayerClass] = useState("");
  const [isClassSelected, setIsClassSelected] = useState(false);

  function getView() {
    if (gameViewIs === 0) {
      return GameIntro(setGameViewIs);
    } else if (gameViewIs === 1) {
      return CharacterCreation(
        setGameViewIs,
        playerClass,
        setPlayerClass,
        isClassSelected,
        setIsClassSelected
      );
    } else if (gameViewIs === 2) {
      return Battleground(
        currentMonster,
        monsterHealth,
        monsterDamage,
        playerLevel,
        playerHealth,
        playerDamage,
        playerClass
      );
    } else {
      return <p>other page</p>;
    }
  }

  return <div className="App">{getView()}</div>;
}

export default App;
