import React, { useState } from "react";
import "./App.css";
import { GameIntro } from "./gameViews/gameIntro/GameIntro";
import { Battleground } from "./gameViews/battleground/Battleground";
import { monsters } from "./components/MonstersList";
import { CharacterCreation } from "./gameViews/characterCreation/CharacterCreation";
import { Inventory } from "./gameViews/inventory/Inventory";
import { WeaponSelection } from "./gameViews/weaponSelection/WeaponSelection";
import { ClassWeaponList } from "./gameViews/weaponSelection/ClassWeaponsList";

function App() {
  const [gameViewIs, setGameViewIs] = useState(0);

  const [currentMonster, setCurrentMonster] = useState(monsters[0]);
  const [monsterHealth, setMonsterHealth] = useState(currentMonster.health);
  const [monsterDamage, setMonsterDamage] = useState(0);

  const [playerName, setPlayerName] = useState("");
  const [playerEmoji, setPlayerEmoji] = useState("");
  const [playerMaxHealth, setPlayerMaxHealth] = useState(0);
  const [playerCurrentHealth, setPlayerCurrentHealth] = useState(0);
  const [playerRoundDamage, setPlayeRoundDamage] = useState(0);
  const [playerLevel, setPlayerLevel] = useState(1);
  const [playerClass, setPlayerClass] = useState("");
  const [isClassSelected, setIsClassSelected] = useState(false);
  const [playerWeapon, setPlayerWeapon] = useState("");
  const [playerWeaponDamage, setPlayerWeaponDamage] = useState(0);
  const [playerInitialDamage, setPlayerInitialDamage] = useState(0);

  function getView() {
    if (gameViewIs === 0) {
      return GameIntro(setGameViewIs, playerName, setPlayerName);
    } else if (gameViewIs === 1) {
      return CharacterCreation(
        setGameViewIs,
        playerClass,
        setPlayerClass,
        isClassSelected,
        setIsClassSelected,
        setPlayerMaxHealth,
        setPlayerInitialDamage,
        setPlayerEmoji,
        setPlayerCurrentHealth
      );
    } else if (gameViewIs === 2) {
      return WeaponSelection(
        setPlayerWeapon,
        playerWeapon,
        setPlayerWeaponDamage,
        setGameViewIs,
        playerClass
      );
    } else if (gameViewIs === 3) {
      return Inventory(
        setGameViewIs,
        setPlayerWeapon,
        playerWeapon,
        setPlayerWeaponDamage
      );
    } else if (gameViewIs === 4) {
      return Battleground(
        currentMonster,
        monsterHealth,
        monsterDamage,
        playerLevel,
        playerCurrentHealth,
        playerRoundDamage,
        playerClass,
        playerWeapon,
        playerWeaponDamage,
        playerMaxHealth,
        playerInitialDamage,
        playerEmoji,
        playerName
      );
    } else {
      return <p>other page</p>;
    }
  }

  return <div className="App">{getView()}</div>;
}

export default App;
