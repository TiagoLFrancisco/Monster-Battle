import { Fragment } from "react";
import "./CharacterCreation.css";
import { CharacterClassDescription } from "./CharacterClassDescription";
import { CharacterClasses } from "./CharacterClasses";

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
        {CharacterClasses.map((className) => (
          <button
            className="class-name-buttons"
            key={className}
            onClick={() => handleClassClick(className)}
          >
            {className}
          </button>
        ))}
      </div>
      {isClassSelected && (
        <Fragment>
          <div className="character-class-description">
            {CharacterClassDescription[playerClass]}
          </div>
          <p>Are you sure you want to be a {playerClass} ?</p>
          <button onClick={handleConfirmClassClick}>Confirm</button>
        </Fragment>
      )}
    </div>
  );
};
