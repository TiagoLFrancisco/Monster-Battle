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
  const characterCreationTutorialMessage =
    "Choose a hero class! \nEach class has a diferent max HP, atack bonus, weapons and more!";

  function handleClassClick(classSelected) {
    setPlayerClass(classSelected);
    setIsClassSelected(true);
  }

  function handleConfirmClassClick() {
    setGameViewIs(2);
  }

  return (
    <div className="view-character-creation">
      <div className="character-creation-page-tittle">
        <h1>Character Selection</h1>
      </div>

      <div className="character-creation-tutorial">
        <p>{characterCreationTutorialMessage}</p>
      </div>

      <h2>To start, select a hero class!</h2>

      <div>
        {Object.keys(CharacterClassList).map((charClass) => (
          <button
            className="class-name-buttons"
            key={charClass}
            onClick={() => handleClassClick(charClass)}
          >
            {CharacterClassList[charClass].name}
          </button>
        ))}
      </div>
      {isClassSelected && (
        <Fragment>
          <h3 className="character-class-h3">Class Preview:</h3>
          <p>Description: {CharacterClassList[playerClass].name}</p>
          <p>Description: {CharacterClassList[playerClass].description}</p>
          <p>Starting HP: {CharacterClassList[playerClass].health}</p>
          <p>Base Damage: {CharacterClassList[playerClass].damage}</p>
          <p></p>
          <h3 className="character-class-h3">Class Confirmation:</h3>
          <p>Are you sure you want to be a {playerClass} ?</p>
          <button onClick={handleConfirmClassClick}>Confirm</button>
        </Fragment>
      )}
    </div>
  );
};
