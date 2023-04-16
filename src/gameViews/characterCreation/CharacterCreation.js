import { Fragment } from "react";
import "./CharacterCreation.css";
import { CharacterClassList } from "./CharacterClassList";

export const CharacterCreation = (
  setGameViewIs,
  playerClass,
  setPlayerClass,
  isClassSelected,
  setIsClassSelected,
  setPlayerMaxHealth,
  setPlayerInitialDamage,
  setPlayerEmoji,
  setPlayerCurrentHealth
) => {
  const characterCreationMessage = `Welcome to the Character Creation! Here, you can choose your character's class to begin your journey!
  Choose wisely, adventurer, as your class will determine your unique abilities and playstyle!`;

  function handleClassClick(classSelected) {
    setPlayerClass(classSelected);
    setPlayerMaxHealth(CharacterClassList[classSelected].health);
    setPlayerInitialDamage(CharacterClassList[classSelected].damage);
    setPlayerEmoji(CharacterClassList[classSelected].emoji);
    setPlayerCurrentHealth(CharacterClassList[classSelected].health);
    setIsClassSelected(true);
  }

  function handleConfirmClassClick() {
    setGameViewIs(2);
  }

  return (
    <div className="cc-page-view">
      <h1 className="cc-page-tittle">Character Creation &nbsp;&nbsp;📜🖋️</h1>
      <p className="cc-page-description-text">{characterCreationMessage}</p>
      <p className="select-class-tittle">To start, select a hero class!</p>
      <div className="cc-buttons-div">
        {Object.keys(CharacterClassList).map((charClass) => (
          <button
            className="cc-class-name-button"
            key={charClass}
            onClick={() => handleClassClick(charClass)}
          >
            {CharacterClassList[charClass].name}
            {CharacterClassList[charClass].emoji}
          </button>
        ))}
      </div>
      {isClassSelected && (
        <Fragment>
          <div className="player-class-stats">
            <p className="player-name">
              {CharacterClassList[playerClass].name}
            </p>
            <p className="class-description">
              {CharacterClassList[playerClass].description}
            </p>
            <p className="player-health">
              Starting HP: {CharacterClassList[playerClass].health}
            </p>
            <p className="player-damage">
              Base Damage: {CharacterClassList[playerClass].damage}
            </p>
          </div>

          <p className="cc-confirmation-message">
            You have selected {playerClass} as your class.
          </p>
          <button
            className="cc-confirmation-button"
            onClick={handleConfirmClassClick}
          >
            Confirm Class
          </button>
        </Fragment>
      )}
    </div>
  );
};
