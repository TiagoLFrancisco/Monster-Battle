import { Fragment } from "react";
import "./CharacterCreation.css";
import { CharacterClassList } from "./CharacterClassList";

export const CharacterCreation = (
  setGameViewIs,
  playerClass,
  setPlayerClass,
  isClassSelected,
  setIsClassSelected
) => {
  const characterCreationMessage =
    "Choose a hero class! \nEach class has a diferent max HP, atack bonus, weapons and more!";

  function handleClassClick(classSelected) {
    setPlayerClass(classSelected);
    setIsClassSelected(true);
  }

  function handleConfirmClassClick() {
    setGameViewIs(2);
  }

  return (
    <div className="character-creation-page">
      <div>
        <h1 className="character-creation-page-tittle">Character Selection</h1>
      </div>

      <div>
        <p className="character-creation-message">{characterCreationMessage}</p>
      </div>

      <h2 className="select-class-tittle">To start, select a hero class!</h2>

      <div className="buttons-div">
        {Object.keys(CharacterClassList).map((charClass) => (
          <button
            className="char-class-name-button"
            key={charClass}
            onClick={() => handleClassClick(charClass)}
          >
            {CharacterClassList[charClass].name}
          </button>
        ))}
      </div>
      {isClassSelected && (
        <Fragment>
          <h3 className="class-preview-tittle">Class Preview:</h3>
          <p className="player-name">
            Description: {CharacterClassList[playerClass].name}
          </p>
          <p className="class-description">
            Description: {CharacterClassList[playerClass].description}
          </p>
          <p className="player-health">
            Starting HP: {CharacterClassList[playerClass].health}
          </p>
          <p className="player-damage">
            Base Damage: {CharacterClassList[playerClass].damage}
          </p>

          <h3 className="class-confirmation-tittle">Class Confirmation:</h3>
          <p className="class-confirmation-message">
            You have selected {playerClass} as your class.
          </p>
          <button
            className="class-confirmation-button"
            onClick={handleConfirmClassClick}
          >
            Confirm Class
          </button>
        </Fragment>
      )}
    </div>
  );
};
